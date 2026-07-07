/**
 * app.js
 * -----------------------------------------------------------------------
 * Lógica do painel: alterna entre tela de login e o shell (usando o
 * próprio estado de autenticação do Firebase — sem gambiarra de
 * document.write nem localStorage manual), navegação entre módulos
 * (carregados via fetch de arquivos .html estáticos), tema claro/escuro,
 * recolher menu e logout.
 * -----------------------------------------------------------------------
 */

const NOMES_MODULO = {
  DASHBOARD:'Dashboard', AGENDA:'Agenda', CLIENTES:'Clientes', PRODUTOS:'Produtos', FORNECEDORES:'Fornecedores',
  FUNCIONARIOS:'Funcionários', EMPRESAS:'Empresas', VENDAS:'Vendas (PDV)', ORCAMENTOS:'Orçamentos',
  COMPRAS:'Compras', ESTOQUE:'Estoque', ASSISTENCIA:'Assistência técnica', GARANTIAS:'Garantias',
  FINANCEIRO:'Financeiro', RELATORIOS:'Relatórios', CONFIGURACOES:'Configurações'
};

// ---------- Toast global ----------
function mostrarToast(mensagem, tipo){
  const wrap = document.getElementById('toastWrap');
  const el = document.createElement('div');
  el.className = 'toast' + (tipo === 'erro' ? ' err' : '');
  el.textContent = mensagem;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 4200);
}

// ---------- Loja ativa (filtro global) ----------
window.lojaAtivaId = sessionStorage.getItem('bstyle_loja_ativa') || '';

async function popularSeletorLoja(){
  const sel = document.getElementById('seletorLojaGlobal');
  try {
    const empresas = await dbGetAll('EMPRESAS');
    sel.innerHTML = '<option value="">Todas as lojas</option>' + empresas.map(e => `<option value="${e.ID}">${e.NOME}</option>`).join('');
    sel.value = window.lojaAtivaId || '';
  } catch (e) { /* silencioso — se falhar, o filtro só fica em "Todas as lojas" */ }

  if (!window.__seletorLojaWired) {
    window.__seletorLojaWired = true;
    sel.addEventListener('change', () => {
      window.lojaAtivaId = sel.value;
      sessionStorage.setItem('bstyle_loja_ativa', sel.value);
      mostrarToast(sel.value ? 'Mostrando dados de: ' + sel.options[sel.selectedIndex].text : 'Mostrando todas as lojas');
      window.recarregarModuloAtual();
    });
  }
}

/**
 * Mostra um seletor de loja obrigatório (usado quando o filtro geral está
 * em "Todas as lojas" mas a ação precisa saber pra qual loja específica é
 * — ex.: registrar uma venda, uma compra, ou cadastrar um produto novo).
 * Retorna o ID da empresa escolhida, ou null se o usuário cancelar.
 */
window.escolherLoja = function(titulo){
  return new Promise(async (resolve) => {
    let empresas = [];
    try { empresas = await dbGetAll('EMPRESAS'); } catch (e) {}
    if (!empresas.length) { mostrarToast('Cadastre uma loja em Empresas primeiro.', 'erro'); resolve(null); return; }

    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed; inset:0; background:rgba(3,5,8,0.7); display:flex; align-items:center; justify-content:center; z-index:500; padding:20px;';
    overlay.innerHTML = `<div style="background:var(--bg-surface); border:1px solid var(--hairline); border-radius:14px; padding:24px; min-width:280px; max-width:360px;">
      <h3 style="font-family:var(--font-display); margin:0 0 6px; font-size:16px;">${titulo || 'Para qual loja?'}</h3>
      <p style="color:var(--text-secondary); font-size:12px; margin:0 0 14px;">O filtro está em "Todas as lojas" — escolha uma loja específica para esta ação.</p>
      <div id="listaLojasEscolha"></div>
      <button class="btn" id="btnCancelarEscolhaLoja" style="width:100%; margin-top:8px;">Cancelar</button>
    </div>`;
    document.body.appendChild(overlay);

    const lista = overlay.querySelector('#listaLojasEscolha');
    empresas.forEach(e => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-primary';
      btn.style.cssText = 'display:block; width:100%; margin-bottom:8px; text-align:left;';
      btn.textContent = e.NOME;
      btn.addEventListener('click', () => { document.body.removeChild(overlay); resolve(e.ID); });
      lista.appendChild(btn);
    });
    overlay.querySelector('#btnCancelarEscolhaLoja').addEventListener('click', () => { document.body.removeChild(overlay); resolve(null); });
  });
};

/** Retorna a loja ativa do filtro global, ou pede pra escolher se estiver em "Todas". */
window.obterLojaParaAcao = async function(titulo){
  if (window.lojaAtivaId) return window.lojaAtivaId;
  return await window.escolherLoja(titulo);
};

// ---------- Alterna login <-> painel conforme o Firebase Auth ----------
auth.onAuthStateChanged(async (user) => {
  const telaLogin = document.getElementById('tela-login');
  const telaApp = document.getElementById('tela-app');

  if (!user) {
    telaApp.classList.remove('ativo');
    telaLogin.style.display = 'grid';
    return;
  }

  try {
    await _carregarUsuarioAtual(user.uid);
    if (usuarioAtual.STATUS !== 'Ativo') {
      mostrarToast('Usuário inativo. Contate o administrador.', 'erro');
      await fazerLogout();
      return;
    }
    document.getElementById('avatarBtn').textContent = (usuarioAtual.NOME || usuarioAtual.EMAIL || '?').substring(0,1).toUpperCase();
    telaLogin.style.display = 'none';
    telaApp.classList.add('ativo');
    await popularSeletorLoja();
    carregarModulo('DASHBOARD');
  } catch (e) {
    mostrarToast('Erro ao carregar seu usuário: ' + e.message, 'erro');
    await fazerLogout();
  }
});

// ---------- Formulário de login ----------
const form = document.getElementById('loginForm');
const btnSubmit = document.getElementById('btnSubmit');
const btnLabel = document.getElementById('btnLabel');
const alertBox = document.getElementById('alertBox');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  alertBox.classList.remove('show');
  btnSubmit.disabled = true;
  btnLabel.textContent = 'Entrando…';

  try {
    await fazerLogin(document.getElementById('email').value, document.getElementById('senha').value);
  } catch (err) {
    alertBox.textContent = _mensagemAmigavelFirebase(err);
    alertBox.classList.add('show');
  } finally {
    btnSubmit.disabled = false;
    btnLabel.textContent = 'Entrar';
  }
});

document.getElementById('linkEsqueci').addEventListener('click', async () => {
  const email = prompt('Informe seu email cadastrado para recuperação de senha:');
  if (!email) return;
  try {
    await solicitarRecuperacaoSenha(email);
    alert('Se o email existir, você vai receber um link de redefinição de senha.');
  } catch (e) {
    alert('Erro: ' + _mensagemAmigavelFirebase(e));
  }
});

function _mensagemAmigavelFirebase(err){
  const codigo = err && err.code;
  const mapa = {
    'auth/invalid-credential': 'Email ou senha incorretos.',
    'auth/wrong-password': 'Email ou senha incorretos.',
    'auth/user-not-found': 'Email ou senha incorretos.',
    'auth/too-many-requests': 'Muitas tentativas — aguarde alguns minutos e tente de novo.',
    'auth/invalid-email': 'Email inválido.'
  };
  return mapa[codigo] || (err && err.message) || 'Erro desconhecido.';
}

// ---------- Navegação entre módulos ----------
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    carregarModulo(item.getAttribute('data-modulo'));
  });
});

async function carregarModulo(modulo){
  document.getElementById('crumbAtual').textContent = NOMES_MODULO[modulo] || modulo;
  const content = document.getElementById('content');
  content.innerHTML = '<div style="padding:60px;text-align:center;color:var(--text-tertiary);font-family:var(--font-mono);font-size:12.5px;">carregando ' + (NOMES_MODULO[modulo]||modulo).toLowerCase() + '…</div>';

  try {
    const podeVer = await checarPermissao(modulo, 'VISUALIZAR');
    if (!podeVer) {
      content.innerHTML = '<div style="padding:40px;color:var(--red);">Você não tem permissão para ver este módulo.</div>';
      return;
    }

    const resp = await fetch('modules/' + modulo.toLowerCase() + '.html');
    if (!resp.ok) throw new Error('Módulo ainda não foi construído (' + resp.status + ').');
    const html = await resp.text();
    injetarConteudo(html);
  } catch (e) {
    content.innerHTML = '<div style="padding:40px;color:var(--red);">Erro ao carregar módulo: ' + e.message + '</div>';
  }
}

/** innerHTML não executa <script> — recria cada um para rodar de verdade. */
function injetarConteudo(html){
  const content = document.getElementById('content');
  content.innerHTML = html;
  content.querySelectorAll('script').forEach(antigo => {
    const novo = document.createElement('script');
    if (antigo.src) novo.src = antigo.src; else novo.textContent = antigo.textContent;
    antigo.replaceWith(novo);
  });
}

// ---------- Recolher sidebar (desktop) ----------
document.getElementById('btnCollapse').addEventListener('click', () => {
  const app = document.getElementById('app');
  app.classList.toggle('collapsed');
  document.getElementById('btnCollapse').textContent = app.classList.contains('collapsed') ? '›' : '‹ Recolher';
});

// ---------- Menu-gaveta (celular) ----------
function abrirMenuMobile(){
  document.querySelector('.sidebar').classList.add('aberta');
  document.getElementById('sidebarBackdrop').classList.add('aberta');
}
function fecharMenuMobile(){
  document.querySelector('.sidebar').classList.remove('aberta');
  document.getElementById('sidebarBackdrop').classList.remove('aberta');
}
document.getElementById('btnHamburguer').addEventListener('click', abrirMenuMobile);
document.getElementById('sidebarBackdrop').addEventListener('click', fecharMenuMobile);
// Fecha o menu automaticamente ao escolher um módulo no celular
document.querySelectorAll('.menu-item').forEach(item => item.addEventListener('click', fecharMenuMobile));

// ---------- Tema claro/escuro ----------
document.getElementById('btnTheme').addEventListener('click', () => {
  const html = document.documentElement;
  const novo = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', novo);
  document.getElementById('btnTheme').textContent = novo === 'dark' ? '☾' : '☀';
});

// ---------- Logout ----------
document.getElementById('btnLogout').addEventListener('click', () => fazerLogout());

// Deixa acessível para os módulos (mesmo padrão de antes)
window.mostrarToast = mostrarToast;
window.recarregarModuloAtual = () => {
  const ativo = document.querySelector('.menu-item.active');
  if (ativo) carregarModulo(ativo.getAttribute('data-modulo'));
};

/**
 * Escreve innerHTML só se o elemento realmente existir. Evita o erro
 * "Cannot set properties of null" que acontecia quando o usuário trocava
 * de aba antes de uma busca assíncrona terminar (o elemento da aba
 * antiga já não existe mais quando a resposta chega).
 */
window.setHTML = function(id, html){
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
  return el;
};

/**
 * Converte uma data-string "YYYY-MM-DD" (vinda de <input type="date">) pro
 * dia LOCAL correto. Sem isso, new Date("2026-07-06") é lido como meia-noite
 * em UTC, e no fuso do Brasil (UTC-3) isso vira 21h do dia ANTERIOR — fazendo
 * qualquer calendário/prazo aparecer um dia adiantado. Use esta função
 * sempre que comparar ou exibir um campo de data-só (sem hora).
 */
window.parseDataLocal = function(str){
  if (!str) return null;
  const m = String(str).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return new Date(str);
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
};
