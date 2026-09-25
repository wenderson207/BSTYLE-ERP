/**
 * db.js
 * -----------------------------------------------------------------------
 * Camada de acesso a dados sobre o Firestore. Mantém a MESMA "forma" de
 * API que o sistema tinha no Apps Script (dbGetAll, dbGetById, dbQuery,
 * dbInsert, dbUpdate, dbExcluirLogico, dbDelete) — só que agora tudo é
 * assíncrono (usa await), porque o navegador fala direto com o Firestore,
 * sem passar por um servidor no meio.
 *
 * IMPORTANTE: diferente do Google Sheets, o Firestore guarda os tipos de
 * verdade (número é número, booleano é booleano) — então não precisamos
 * mais daquela função ehVerdadeiro() nem de conversões de String() pra
 * comparar. Isso elimina uma classe inteira de bugs que tivemos antes.
 *
 * CACHE: cada leitura de coleção inteira (dbGetAll) é cara — custa 1
 * "leitura" do Firestore POR DOCUMENTO da coleção, e isso conta pra cota
 * diária gratuita (50 mil leituras/dia no plano Spark). Duas proteções:
 *
 * 1) O cache agora fica guardado no sessionStorage (não só na memória do
 *    navegador) — ou seja, ele SOBREVIVE a um F5 / recarregar a página /
 *    logar de novo, dentro da mesma aba. Antes, cada recarregamento jogava
 *    o cache fora e buscava tudo de novo do zero, mesmo sem nada ter
 *    mudado — foi isso que estourou a cota num dia de bastante teste.
 * 2) O tempo do cache subiu de 45s pra alguns minutos (ver TEMPO_CACHE_MS
 *    abaixo). Qualquer escrita (inserir/atualizar/excluir) invalida o
 *    cache da coleção NA HORA — então isso nunca faz alguém ver um dado
 *    desatualizado depois de salvar algo; só evita reler o que não mudou.
 *
 * Se o sessionStorage não estiver disponível por algum motivo (aba anônima
 * bloqueando armazenamento, etc.), o sistema simplesmente não usa cache
 * nesse caso — continua funcionando normalmente, só sem essa economia.
 * -----------------------------------------------------------------------
 */

/** Gera um ID único no formato PREFIXO-TIMESTAMP36-RANDOM. */
function gerarId(prefixo) {
  const timestamp = Date.now().toString(36).toUpperCase();
  const aleatorio = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefixo || 'ID'}-${timestamp}-${aleatorio}`;
}

// Pode ajustar esse número se quiser um equilíbrio diferente entre
// "economia de leituras" e "dado sempre fresquinho". 3 minutos é um bom
// meio-termo pra um sistema de loja: reduz muito o custo de recarregar a
// página várias vezes, sem deixar a informação velha por muito tempo.
const TEMPO_CACHE_MS = 3 * 60 * 1000; // 3 minutos

function _chaveColecao(colecao) { return 'bstyle_cache_col_' + colecao; }
function _chaveConsulta(chave) { return 'bstyle_cache_qry_' + chave; }

/** Lê uma entrada do cache (sessionStorage), respeitando o prazo de validade. */
function _lerCache(chave) {
  try {
    const bruto = sessionStorage.getItem(chave);
    if (!bruto) return null;
    const entrada = JSON.parse(bruto);
    if (!entrada || (Date.now() - entrada.quando) >= TEMPO_CACHE_MS) return null;
    return entrada.dados;
  } catch (e) {
    return null; // sessionStorage indisponível/corrompido — segue sem cache
  }
}

/** Grava uma entrada no cache. Silencioso se o navegador recusar (ex.: espaço cheio). */
function _gravarCache(chave, dados) {
  try { sessionStorage.setItem(chave, JSON.stringify({ dados, quando: Date.now() })); }
  catch (e) { /* sem cache dessa vez, sem quebrar a aplicação */ }
}

/** Limpa o cache de uma coleção (chamado sempre que ela é escrita) — tanto
 * o cache de "coleção inteira" quanto qualquer busca filtrada guardada dela. */
function _invalidarCache(colecao) {
  try {
    sessionStorage.removeItem(_chaveColecao(colecao));
    const prefixo = _chaveConsulta(colecao + '|');
    Object.keys(sessionStorage)
      .filter(chave => chave.startsWith(prefixo))
      .forEach(chave => sessionStorage.removeItem(chave));
  } catch (e) { /* nada a limpar se sessionStorage não estiver disponível */ }
}
window.invalidarCache = _invalidarCache; // exposto pra debug manual, se precisar

/** Lê todos os documentos de uma coleção — usa cache quando disponível. */
async function dbGetAll(colecao) {
  const emCache = _lerCache(_chaveColecao(colecao));
  if (emCache) return emCache.map(d => Object.assign({}, d));
  const snap = await db.collection(colecao).get();
  const dados = snap.docs.map(doc => Object.assign({ ID: doc.id }, doc.data()));
  _gravarCache(_chaveColecao(colecao), dados);
  return dados.map(d => Object.assign({}, d));
}

/**
 * Busca um único documento pelo ID. Se a coleção inteira já estiver em
 * cache (de um dbGetAll recente), usa ela — sem gastar leitura nova.
 * Senão, busca só esse documento (mais barato que trazer a coleção toda
 * à toa).
 */
async function dbGetById(colecao, id) {
  if (!id) return null;
  const emCache = _lerCache(_chaveColecao(colecao));
  if (emCache) {
    const achado = emCache.find(d => d.ID === String(id));
    return achado ? Object.assign({}, achado) : null;
  }
  const doc = await db.collection(colecao).doc(String(id)).get();
  return doc.exists ? Object.assign({ ID: doc.id }, doc.data()) : null;
}

/**
 * Busca documentos que casem com um filtro simples de igualdade.
 * filtro = { EMPRESA_ID: 'xxx', STATUS: 'Ativo' }
 * Se a coleção já estiver em cache, filtra em memória (sem leitura nova).
 * Senão, faz a consulta direto no Firestore, como antes (e guarda o
 * resultado filtrado em cache também).
 */
async function dbQuery(colecao, filtro) {
  const emCacheColecao = _lerCache(_chaveColecao(colecao));
  if (emCacheColecao) {
    const chaves = Object.keys(filtro || {});
    return emCacheColecao
      .filter(d => chaves.every(chave => d[chave] === filtro[chave]))
      .map(d => Object.assign({}, d));
  }
  const chaveConsulta = _chaveConsulta(colecao + '|' + JSON.stringify(filtro || {}));
  const emCacheConsulta = _lerCache(chaveConsulta);
  if (emCacheConsulta) return emCacheConsulta.map(d => Object.assign({}, d));

  let ref = db.collection(colecao);
  if (filtro) {
    Object.keys(filtro).forEach(chave => { ref = ref.where(chave, '==', filtro[chave]); });
  }
  const snap = await ref.get();
  const dados = snap.docs.map(doc => Object.assign({ ID: doc.id }, doc.data()));
  _gravarCache(chaveConsulta, dados);
  return dados.map(d => Object.assign({}, d));
}

/**
 * Insere um novo documento. Gera ID automaticamente (prefixo baseado no
 * nome da coleção) se "dados.ID" não for informado.
 */
async function dbInsert(colecao, dados, chavesUnicas) {
  const registro = Object.assign({}, dados);
  const id = registro.ID || gerarId(colecao.substring(0, 3));
  delete registro.ID;

  if (chavesUnicas && chavesUnicas.length) {
    for (const chave of chavesUnicas) {
      if (registro[chave] !== undefined && registro[chave] !== '') {
        const existentes = await dbQuery(colecao, { [chave]: registro[chave] });
        if (existentes.length) throw new Error(`Já existe um registro em "${colecao}" com ${chave} = "${registro[chave]}".`);
      }
    }
  }

  await db.collection(colecao).doc(id).set(registro);
  _invalidarCache(colecao);
  return Object.assign({ ID: id }, registro);
}

/** Atualiza campos de um documento (merge parcial — só sobrescreve o que for passado). */
async function dbUpdate(colecao, id, dadosParciais) {
  const existe = await dbGetById(colecao, id);
  if (!existe) return null;
  await db.collection(colecao).doc(String(id)).set(dadosParciais, { merge: true });
  _invalidarCache(colecao);
  return Object.assign({}, existe, dadosParciais);
}

/** Exclusão lógica (recomendada): marca STATUS = 'Excluído' em vez de apagar o documento. */
async function dbExcluirLogico(colecao, id) {
  return dbUpdate(colecao, id, { STATUS: 'Excluído' });
}

/** Exclusão física — remove o documento de verdade. Usar com cautela. */
async function dbDelete(colecao, id) {
  const existe = await dbGetById(colecao, id);
  if (!existe) return false;
  await db.collection(colecao).doc(String(id)).delete();
  _invalidarCache(colecao);
  return true;
}
