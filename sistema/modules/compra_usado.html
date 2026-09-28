<style>
  .modal-overlay{ position:fixed; inset:0; background:rgba(3,5,8,0.6); display:none; align-items:center; justify-content:center; z-index:100; padding:24px; }
  .modal-overlay.open{ display:flex; }
  .modal-box{ background:var(--bg-surface); border:1px solid var(--hairline); border-radius:14px; width:100%; max-width:640px; max-height:90vh; overflow-y:auto; }
  .modal-head{ display:flex; justify-content:space-between; align-items:center; padding:18px 22px; border-bottom:1px solid var(--hairline); position:sticky; top:0; background:var(--bg-surface); }
  .modal-body{ padding:20px 22px; }
  .modal-foot{ display:flex; justify-content:flex-end; gap:10px; padding:16px 22px; border-top:1px solid var(--hairline); flex-wrap:wrap; }
  .modal-close{ background:none; border:none; color:var(--text-tertiary); font-size:18px; cursor:pointer; }
  .ffield{ margin-bottom:14px; position:relative; }
  .ffield label{ display:block; font-size:12px; color:var(--text-secondary); margin-bottom:6px; }
  .ffield input, .ffield select, .ffield textarea{ width:100%; background:var(--bg-elevated); border:1px solid var(--hairline); color:var(--text-primary); padding:10px 12px; border-radius:8px; font-size:13px; font-family:inherit; box-sizing:border-box; }
  .ffield textarea{ min-height:64px; resize:vertical; line-height:1.5; }
  .frow2{ display:grid; grid-template-columns:1fr 1fr; gap:12px; }
  .frow3{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }
  .section-title{ font-family:var(--font-display); font-size:13px; font-weight:600; margin:18px 0 10px; padding-top:14px; border-top:1px solid var(--hairline); }
  .section-title:first-child{ border-top:none; padding-top:0; margin-top:0; }
  .badge{ display:inline-flex; padding:3px 9px; border-radius:20px; font-size:11px; font-weight:600; font-family:var(--font-mono); }
  .badge.ok{ background:rgba(47,225,168,0.12); color:var(--mint); }
  .badge.warn{ background:rgba(245,166,35,0.12); color:var(--amber); }
  .dropdown-results{ position:absolute; top:calc(100% + 6px); left:0; right:0; background:var(--bg-elevated); border:1px solid var(--hairline);
    border-radius:10px; max-height:220px; overflow-y:auto; z-index:15; display:none; }
  .dropdown-results.open{ display:block; }
  .dropdown-results .opt{ padding:10px 12px; font-size:12.5px; cursor:pointer; border-bottom:1px solid var(--hairline); }
  .dropdown-results .opt:hover{ background:var(--bg-surface); }
  .checklist-saude{ display:flex; flex-wrap:wrap; gap:8px 16px; margin-bottom:8px; }
  .checklist-saude label{ display:flex; align-items:center; gap:7px; font-size:12.5px; color:var(--text-secondary); cursor:pointer; }
  .checklist-saude input{ width:auto; accent-color:var(--amber); }
  .confirmacao-frp{ display:flex; align-items:flex-start; gap:10px; background:rgba(76,141,255,0.08); border:1px solid rgba(76,141,255,0.3); border-radius:10px; padding:12px 14px; margin:6px 0 16px; }
  .confirmacao-frp input{ width:auto; accent-color:var(--blue); margin-top:2px; }
  .confirmacao-frp label{ font-size:12.5px; color:var(--text-primary); line-height:1.5; cursor:pointer; }
  .senha-tabs{ display:flex; gap:0; margin-bottom:10px; border:1px solid var(--hairline); border-radius:8px; overflow:hidden; }
  .senha-tabs button{ flex:1; padding:9px 8px; border:none; border-right:1px solid var(--hairline); background:var(--bg-elevated); color:var(--text-secondary); cursor:pointer; font-size:12.5px; font-family:inherit; }
  .senha-tabs button:last-child{ border-right:none; }
  .senha-tabs button.active{ background:var(--mint); color:#07130F; font-weight:600; }
  .pattern-grid{ display:grid; grid-template-columns:repeat(3,40px); grid-template-rows:repeat(3,40px); gap:16px; margin:10px auto; width:fit-content; }
  .pattern-dot{ width:40px; height:40px; border-radius:50%; border:2px solid var(--hairline); background:var(--bg-elevated); cursor:pointer; position:relative; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:700; color:transparent; font-family:var(--font-mono); }
  .pattern-dot.active{ border-color:var(--mint); background:rgba(47,225,168,0.15); color:var(--mint); }
</style>

<div class="toolbar">
  <div><h1 style="font-family:var(--font-display); font-size:22px; margin:0 0 4px;">Compra de Celular Usado</h1>
  <p style="color:var(--text-secondary); font-size:13px; margin:0;">Cadastra a compra de um aparelho usado direto do cliente, gera o estoque em Celulares e emite o termo de compra assinado pelo vendedor.</p></div>
  <button class="btn btn-primary" id="btnNovo">+ Nova compra</button>
</div>

<div class="kpi-grid" style="margin-bottom:18px;">
  <div class="kpi"><div class="lbl">Compras hoje</div><div class="val" id="kpiHoje">—</div></div>
  <div class="kpi"><div class="lbl">Aparelhos comprados (mês)</div><div class="val" id="kpiMesQtd">—</div></div>
  <div class="kpi"><div class="lbl">Valor investido (mês)</div><div class="val" id="kpiMesValor">—</div></div>
</div>

<div style="margin-bottom:14px; display:flex; gap:10px; flex-wrap:wrap;">
  <input id="buscaCompra" placeholder="🔍 Buscar por vendedor, CPF, IMEI ou número…" style="width:100%; max-width:300px; background:var(--bg-surface); border:1px solid var(--hairline); color:var(--text-primary); padding:9px 12px; border-radius:8px; font-size:12.5px;">
  <select id="filtroLojaCompra" style="background:var(--bg-surface); border:1px solid var(--hairline); color:var(--text-primary); padding:9px 12px; border-radius:8px; font-size:12.5px;"><option value="">Todas as lojas</option></select>
  <button class="btn" id="btnLimparFiltroCompra">Limpar filtros</button>
</div>

<table class="dt">
  <thead><tr><th>Número</th><th>Data</th><th>Vendedor</th><th>Aparelho</th><th>IMEI</th><th>Valor pago</th><th>Loja</th><th>PDF</th><th></th></tr></thead>
  <tbody id="linhas"><tr class="empty-row"><td colspan="9">Carregando…</td></tr></tbody>
</table>

<div class="modal-overlay" id="modal">
  <div class="modal-box">
    <div class="modal-head"><h3 style="font-family:var(--font-display); margin:0;" id="modalTitulo">Nova compra de aparelho usado</h3><button class="modal-close" id="fecharModal">✕</button></div>
    <div class="modal-body">
      <div class="section-title">1. Dados de quem está vendendo</div>
      <div class="ffield">
        <label>Buscar cliente já cadastrado (opcional)</label>
        <input id="buscaClienteCompra" placeholder="Digite o nome ou CPF, se já for cliente…" autocomplete="off">
        <div class="dropdown-results" id="resultadosClienteCompra"></div>
      </div>
      <div class="frow2">
        <div class="ffield"><label>Nome completo *</label><input id="fVendedorNome"></div>
        <div class="ffield"><label>CPF *</label><input id="fVendedorCpf"></div>
      </div>
      <div class="frow2">
        <div class="ffield"><label>RG</label><input id="fVendedorRg"></div>
        <div class="ffield"><label>Telefone *</label><input id="fVendedorTelefone"></div>
      </div>
      <div class="frow3">
        <div class="ffield"><label>CEP</label><input id="fVendedorCep" placeholder="00000-000" inputmode="numeric" maxlength="9"></div>
        <div class="ffield" style="grid-column:span 2;"><label>Rua / Logradouro</label><input id="fVendedorRua" placeholder="Preenchido automaticamente pelo CEP"></div>
      </div>
      <div class="frow3">
        <div class="ffield"><label>Bairro</label><input id="fVendedorBairro"></div>
        <div class="ffield"><label>Cidade</label><input id="fVendedorCidade"></div>
        <div class="ffield"><label>UF</label><input id="fVendedorUf" maxlength="2" style="text-transform:uppercase;"></div>
      </div>
      <div class="frow2">
        <div class="ffield"><label>Número</label><input id="fVendedorNumero" placeholder="Só isso fica pra você preencher"></div>
        <div class="ffield"><label>Complemento</label><input id="fVendedorComplemento" placeholder="Apto, bloco… (opcional)"></div>
      </div>

      <div class="section-title">2. Dados do aparelho</div>
      <div class="frow2">
        <div class="ffield"><label>Marca *</label><input id="fMarca"></div>
        <div class="ffield"><label>Modelo *</label><input id="fModelo"></div>
      </div>
      <div class="frow3">
        <div class="ffield"><label>Cor</label><input id="fCor"></div>
        <div class="ffield"><label>Memória (GB)</label><input id="fMemoria" placeholder="Ex.: 128"></div>
        <div class="ffield"><label>Tipo</label><select id="fTipo"><option>Usado</option><option>Seminovo</option></select></div>
      </div>
      <div class="frow2">
        <div class="ffield"><label>IMEI</label><input id="fImei"></div>
        <div class="ffield"><label>Número de série</label><input id="fSerie"></div>
      </div>
      <div class="ffield"><label>Bateria (%) — saúde da bateria</label><input id="fBateria" type="number" min="0" max="100"></div>

      <div class="ffield">
        <label>Senha do aparelho <span style="color:var(--text-tertiary); font-weight:400;">(fica registrada só na via da loja)</span></label>
        <div class="senha-tabs">
          <button type="button" class="active" data-tipo="PIN">PIN</button>
          <button type="button" data-tipo="TEXTO">Senha texto</button>
          <button type="button" data-tipo="PADRAO">Padrão</button>
        </div>
        <div class="ffield" id="senhaPinWrap" style="margin-bottom:0;">
          <input id="fSenhaPin" placeholder="Ex.: 1234" inputmode="numeric">
        </div>
        <div class="ffield" id="senhaTextoWrap" style="margin-bottom:0; display:none;">
          <input id="fSenhaTexto" placeholder="Senha do aparelho">
        </div>
        <div class="ffield" id="senhaPadraoWrap" style="margin-bottom:0; display:none; text-align:center;">
          <div class="pattern-grid" id="patternGrid"></div>
          <div id="patternSeq" style="font-size:12px; color:var(--text-secondary); margin-bottom:8px;">—</div>
          <button type="button" class="btn" id="btnLimparPadrao" style="font-size:11.5px; padding:6px 12px;">🔄 Limpar padrão</button>
        </div>
      </div>

      <div class="ffield">
        <label>Checklist de avaliação (marque o que estiver com problema)</label>
        <div class="checklist-saude" id="checklistSaude">
          <label><input type="checkbox" value="Tela com trinca/risco"> Tela com trinca/risco</label>
          <label><input type="checkbox" value="Câmera com defeito"> Câmera com defeito</label>
          <label><input type="checkbox" value="Botões com defeito"> Botões com defeito</label>
          <label><input type="checkbox" value="Bateria viciada/estufada"> Bateria viciada/estufada</label>
          <label><input type="checkbox" value="Conector de carga com problema"> Conector de carga com problema</label>
          <label><input type="checkbox" value="Amassados/oxidação no corpo"> Amassados/oxidação no corpo</label>
        </div>
      </div>

      <div class="confirmacao-frp">
        <input type="checkbox" id="fFrpRemovido">
        <label for="fFrpRemovido">Confirmo que a conta iCloud/Google (bloqueio de fábrica) foi removida e o aparelho foi testado e liberado antes da compra.</label>
      </div>

      <div class="ffield"><label>Acessórios inclusos</label><input id="fAcessorios" placeholder="Ex.: carregador, caixa, fone…"></div>
      <div class="ffield"><label>Observações / estado geral</label><textarea id="fEstadoAparelho" placeholder="Ex.: aparelho testado com o vendedor, sem sinais de reparo não autorizado."></textarea></div>

      <div class="section-title">3. Dados da compra</div>
      <div class="frow2">
        <div class="ffield"><label>Valor pago pelo aparelho (R$) *</label><input id="fValorPago" type="number" step="0.01"></div>
        <div class="ffield"><label>Forma de pagamento</label>
          <select id="fFormaPagamento"><option>Dinheiro</option><option>PIX</option><option>Transferência</option></select>
        </div>
      </div>
      <div class="frow2">
        <div class="ffield"><label>Preço de venda sugerido (R$)</label><input id="fPrecoVenda" type="number" step="0.01" placeholder="Pode ajustar depois em Celulares"></div>
        <div class="ffield"><label>Garantia na revenda (dias)</label><input id="fGarantiaRevenda" type="number" value="30"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn" id="btnCancelar">Fechar</button>
      <button class="btn" id="btnSalvar">Salvar</button>
      <button class="btn" id="btnImprimir">🖨️ Imprimir termo (2 vias)</button>
      <button class="btn btn-primary" id="btnGerarPdf">⬇️ Salvar PDF</button>
    </div>
  </div>
</div>

<script>
(function(){
  let itens = [], clientes = [], empresas = [], produtos = [];
  let compraAtual = null; // null = criando uma nova; preenchido = editando/reabrindo uma existente

  function moeda(v){ return (Number(v)||0).toLocaleString('pt-BR', { style:'currency', currency:'BRL' }); }
  function dataBR(v){ return v ? parseDataLocal(v).toLocaleDateString('pt-BR') : '—'; }
  function nomeEmpresa(id){ const e = empresas.find(x => x.ID === id); return e ? (e.NOME || 'Loja') : '—'; }
  function porExtenso(n){
    const nums = {1:'um',5:'cinco',7:'sete',10:'dez',15:'quinze',20:'vinte',30:'trinta',45:'quarenta e cinco',60:'sessenta',90:'noventa',120:'cento e vinte',180:'cento e oitenta',365:'trezentos e sessenta e cinco'};
    return nums[Number(n)] || String(n);
  }
  function montarEnderecoCompleto(d){
    const linha1 = [d.VENDEDOR_RUA, d.VENDEDOR_NUMERO].filter(Boolean).join(', ') + (d.VENDEDOR_COMPLEMENTO ? ' - ' + d.VENDEDOR_COMPLEMENTO : '');
    const linha2 = [d.VENDEDOR_BAIRRO, d.VENDEDOR_CIDADE, d.VENDEDOR_UF].filter(Boolean).join(' - ');
    return [linha1, linha2].filter(Boolean).join(', ');
  }
  function formatarSenhaExibicao(c){
    if (!c.SENHA_TIPO || !c.SENHA_VALOR) return '';
    if (c.SENHA_TIPO === 'PADRAO') return 'Padrão: ' + String(c.SENHA_VALOR).split(',').filter(Boolean).join(' → ');
    return c.SENHA_VALOR;
  }

  // ---------- CEP (ViaCEP) ----------
  document.getElementById('fVendedorCep').addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g,'').slice(0,8);
    if (v.length > 5) v = v.slice(0,5) + '-' + v.slice(5);
    e.target.value = v;
  });
  document.getElementById('fVendedorCep').addEventListener('blur', async () => {
    const cepInput = document.getElementById('fVendedorCep');
    const cep = cepInput.value.replace(/\D/g,'');
    if (cep.length !== 8) return;
    try {
      const resp = await fetch('https://viacep.com.br/ws/' + cep + '/json/');
      const dados = await resp.json();
      if (dados.erro) { mostrarToast('CEP não encontrado.', 'erro'); return; }
      document.getElementById('fVendedorRua').value = dados.logradouro || '';
      document.getElementById('fVendedorBairro').value = dados.bairro || '';
      document.getElementById('fVendedorCidade').value = dados.localidade || '';
      document.getElementById('fVendedorUf').value = dados.uf || '';
      document.getElementById('fVendedorNumero').focus();
    } catch (e) { mostrarToast('Não foi possível buscar o CEP agora.', 'erro'); }
  });

  // ---------- Senha do aparelho (PIN / Senha texto / Padrão) ----------
  let senhaTipoAtual = 'PIN', sequenciaPadrao = [];

  function construirGradePadrao(){
    const grid = document.getElementById('patternGrid');
    grid.innerHTML = '';
    for (let i=1;i<=9;i++){
      const dot = document.createElement('div');
      dot.className = 'pattern-dot';
      dot.addEventListener('click', () => {
        if (sequenciaPadrao.includes(i)) return;
        sequenciaPadrao.push(i);
        dot.classList.add('active');
        dot.textContent = sequenciaPadrao.length;
        document.getElementById('patternSeq').textContent = sequenciaPadrao.join(' → ');
      });
      grid.appendChild(dot);
    }
  }
  construirGradePadrao();

  function limparPadraoDesenho(){
    sequenciaPadrao = [];
    document.getElementById('patternSeq').textContent = '—';
    document.querySelectorAll('#patternGrid .pattern-dot').forEach(d => { d.classList.remove('active'); d.textContent = ''; });
  }
  document.getElementById('btnLimparPadrao').addEventListener('click', limparPadraoDesenho);

  function selecionarAbaSenha(tipo){
    senhaTipoAtual = tipo;
    document.querySelectorAll('.senha-tabs button').forEach(b => b.classList.toggle('active', b.dataset.tipo === tipo));
    document.getElementById('senhaPinWrap').style.display = tipo === 'PIN' ? '' : 'none';
    document.getElementById('senhaTextoWrap').style.display = tipo === 'TEXTO' ? '' : 'none';
    document.getElementById('senhaPadraoWrap').style.display = tipo === 'PADRAO' ? '' : 'none';
  }
  document.querySelectorAll('.senha-tabs button').forEach(btn => {
    btn.addEventListener('click', () => selecionarAbaSenha(btn.dataset.tipo));
  });

  // ---------- Filtros ----------
  document.getElementById('buscaCompra').addEventListener('input', () => renderLinhas());
  document.getElementById('filtroLojaCompra').addEventListener('change', () => renderLinhas());
  document.getElementById('btnLimparFiltroCompra').addEventListener('click', () => {
    document.getElementById('buscaCompra').value = '';
    document.getElementById('filtroLojaCompra').value = '';
    renderLinhas();
  });

  function listaFiltrada(){
    const termo = (document.getElementById('buscaCompra').value || '').toLowerCase().trim();
    const loja = document.getElementById('filtroLojaCompra').value;
    return itens.filter(c => {
      if (loja && c.EMPRESA_ID !== loja) return false;
      if (termo && ![c.NUMERO_COMPRA, c.VENDEDOR_NOME, c.VENDEDOR_CPF, c.IMEI].filter(Boolean).join(' ').toLowerCase().includes(termo)) return false;
      return true;
    });
  }

  function renderLinhas(){
    const lista = listaFiltrada();
    if (!lista.length){ setHTML('linhas', `<tr class="empty-row"><td colspan="9">${itens.length ? 'Nenhuma compra encontrada com esses filtros.' : 'Nenhuma compra registrada ainda.'}</td></tr>`); return; }
    setHTML('linhas', lista.map(c => `<tr>
      <td class="mono">${c.NUMERO_COMPRA}</td>
      <td>${dataBR(c.DATA)}</td>
      <td>${c.VENDEDOR_NOME||'—'}</td>
      <td>${[c.MARCA, c.MODELO].filter(Boolean).join(' ')||'—'}</td>
      <td class="mono">${c.IMEI||'—'}</td>
      <td>${moeda(c.VALOR_PAGO)}</td>
      <td>${nomeEmpresa(c.EMPRESA_ID)}</td>
      <td>${c.PDF_GERADO ? '<span class="badge ok">Gerado</span>' : '<span class="badge warn">Não gerado</span>'}</td>
      <td><button class="btn" style="padding:6px 10px; font-size:11.5px;" onclick="window.__abrirCompra('${c.ID}')">Abrir</button></td>
    </tr>`).join(''));
  }

  function renderKpis(){
    const hojeStr = new Date().toDateString();
    const inicioMes = new Date(); inicioMes.setDate(1); inicioMes.setHours(0,0,0,0);
    const doMes = itens.filter(c => new Date(c.DATA||0) >= inicioMes);
    document.getElementById('kpiHoje').textContent = itens.filter(c => new Date(c.DATA||0).toDateString() === hojeStr).length;
    document.getElementById('kpiMesQtd').textContent = doMes.length;
    document.getElementById('kpiMesValor').textContent = moeda(doMes.reduce((s,c) => s + (Number(c.VALOR_PAGO)||0), 0));
  }

  function popularSelectLoja(){
    setHTML('filtroLojaCompra', '<option value="">Todas as lojas</option>' + empresas.map(e => `<option value="${e.ID}">${e.NOME}</option>`).join(''));
  }

  async function carregar(){
    try {
      if (!(await checarPermissao('COMPRA_USADO','VISUALIZAR'))){ setHTML('linhas', '<tr class="empty-row"><td colspan="9">Sem permissão.</td></tr>'); return; }
      [itens, clientes, empresas, produtos] = await Promise.all([
        dbGetAll('COMPRAS_USADO'), dbGetAll('CLIENTES'), dbGetAll('EMPRESAS'), dbGetAll('PRODUTOS')
      ]);
      itens.sort((a,b) => new Date(b.DATA||0) - new Date(a.DATA||0));
      popularSelectLoja();
      renderKpis();
      renderLinhas();
    } catch (e) { mostrarToast('Erro: ' + e.message, 'erro'); }
  }

  // ---------- Busca de cliente já cadastrado (conveniência — continua tudo editável) ----------
  const inputClienteCompra = document.getElementById('buscaClienteCompra');
  const resClienteCompra = document.getElementById('resultadosClienteCompra');
  inputClienteCompra.addEventListener('input', () => {
    const termo = inputClienteCompra.value.trim().toLowerCase();
    if (termo.length < 2){ resClienteCompra.classList.remove('open'); return; }
    const lista = clientes.filter(c => (c.NOME||'').toLowerCase().includes(termo) || (c.CPF||'').includes(termo)).slice(0, 8);
    if (!lista.length){ setHTML('resultadosClienteCompra', '<div class="opt">Nenhum cliente encontrado.</div>'); resClienteCompra.classList.add('open'); return; }
    setHTML('resultadosClienteCompra', lista.map(c => `<div class="opt" data-id="${c.ID}">${c.NOME}${c.CPF ? ' · ' + c.CPF : ''}</div>`).join(''));
    resClienteCompra.classList.add('open');
    resClienteCompra.querySelectorAll('.opt').forEach(el => {
      el.addEventListener('click', () => {
        const c = lista.find(x => x.ID === el.getAttribute('data-id'));
        if (c) {
          document.getElementById('fVendedorNome').value = c.NOME || '';
          document.getElementById('fVendedorCpf').value = c.CPF || '';
          document.getElementById('fVendedorTelefone').value = c.TELEFONE || '';
        }
        inputClienteCompra.value = '';
        resClienteCompra.classList.remove('open');
      });
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#buscaClienteCompra') && !e.target.closest('#resultadosClienteCompra')) resClienteCompra.classList.remove('open');
  });

  // ---------- Modal: abrir/limpar ----------
  const modal = document.getElementById('modal');

  function limparFormulario(){
    ['fVendedorNome','fVendedorCpf','fVendedorRg','fVendedorTelefone',
     'fVendedorCep','fVendedorRua','fVendedorBairro','fVendedorCidade','fVendedorUf','fVendedorNumero','fVendedorComplemento',
     'fMarca','fModelo','fCor','fMemoria','fImei','fSerie','fBateria','fAcessorios','fEstadoAparelho','fPrecoVenda'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('fTipo').value = 'Usado';
    document.getElementById('fFormaPagamento').value = 'Dinheiro';
    document.getElementById('fGarantiaRevenda').value = 30;
    document.getElementById('fValorPago').value = '';
    document.getElementById('fFrpRemovido').checked = false;
    document.querySelectorAll('#checklistSaude input').forEach(el => el.checked = false);
    document.getElementById('fSenhaPin').value = '';
    document.getElementById('fSenhaTexto').value = '';
    limparPadraoDesenho();
    selecionarAbaSenha('PIN');
  }

  function preencherFormulario(c){
    document.getElementById('fVendedorNome').value = c.VENDEDOR_NOME || '';
    document.getElementById('fVendedorCpf').value = c.VENDEDOR_CPF || '';
    document.getElementById('fVendedorRg').value = c.VENDEDOR_RG || '';
    document.getElementById('fVendedorTelefone').value = c.VENDEDOR_TELEFONE || '';
    document.getElementById('fVendedorCep').value = c.VENDEDOR_CEP || '';
    document.getElementById('fVendedorRua').value = c.VENDEDOR_RUA || '';
    document.getElementById('fVendedorBairro').value = c.VENDEDOR_BAIRRO || '';
    document.getElementById('fVendedorCidade').value = c.VENDEDOR_CIDADE || '';
    document.getElementById('fVendedorUf').value = c.VENDEDOR_UF || '';
    document.getElementById('fVendedorNumero').value = c.VENDEDOR_NUMERO || '';
    document.getElementById('fVendedorComplemento').value = c.VENDEDOR_COMPLEMENTO || '';
    document.getElementById('fMarca').value = c.MARCA || '';
    document.getElementById('fModelo').value = c.MODELO || '';
    document.getElementById('fCor').value = c.COR || '';
    document.getElementById('fMemoria').value = c.MEMORIA || '';
    document.getElementById('fTipo').value = c.TIPO_APARELHO || 'Usado';
    document.getElementById('fImei').value = c.IMEI || '';
    document.getElementById('fSerie').value = c.NUMERO_SERIE || '';
    document.getElementById('fBateria').value = c.BATERIA_PERCENTUAL || '';
    document.getElementById('fAcessorios').value = c.ACESSORIOS_INCLUSOS || '';
    document.getElementById('fEstadoAparelho').value = c.ESTADO_APARELHO || '';
    document.getElementById('fValorPago').value = c.VALOR_PAGO || '';
    document.getElementById('fFormaPagamento').value = c.FORMA_PAGAMENTO || 'Dinheiro';
    document.getElementById('fPrecoVenda').value = c.PRECO_VENDA_SUGERIDO || '';
    document.getElementById('fGarantiaRevenda').value = c.GARANTIA_REVENDA_DIAS || 30;
    document.getElementById('fFrpRemovido').checked = !!c.FRP_REMOVIDO;
    const problemas = Array.isArray(c.CHECKLIST_PROBLEMAS) ? c.CHECKLIST_PROBLEMAS : [];
    document.querySelectorAll('#checklistSaude input').forEach(el => { el.checked = problemas.includes(el.value); });

    const tipoSenha = c.SENHA_TIPO || 'PIN';
    selecionarAbaSenha(tipoSenha);
    document.getElementById('fSenhaPin').value = tipoSenha === 'PIN' ? (c.SENHA_VALOR || '') : '';
    document.getElementById('fSenhaTexto').value = tipoSenha === 'TEXTO' ? (c.SENHA_VALOR || '') : '';
    limparPadraoDesenho();
    if (tipoSenha === 'PADRAO' && c.SENHA_VALOR) {
      const seq = String(c.SENHA_VALOR).split(',').map(Number).filter(n => n >= 1 && n <= 9);
      const dots = document.querySelectorAll('#patternGrid .pattern-dot');
      seq.forEach((num, idx) => {
        sequenciaPadrao.push(num);
        const dot = dots[num-1];
        if (dot) { dot.classList.add('active'); dot.textContent = idx+1; }
      });
      document.getElementById('patternSeq').textContent = sequenciaPadrao.join(' → ');
    }
  }

  document.getElementById('btnNovo').addEventListener('click', () => {
    compraAtual = null;
    document.getElementById('modalTitulo').textContent = 'Nova compra de aparelho usado';
    limparFormulario();
    modal.classList.add('open');
  });

  window.__abrirCompra = (id) => {
    const c = itens.find(x => x.ID === id);
    if (!c) return;
    compraAtual = c;
    document.getElementById('modalTitulo').textContent = 'Compra ' + c.NUMERO_COMPRA + ' — ' + (c.VENDEDOR_NOME||'');
    preencherFormulario(c);
    modal.classList.add('open');
  };

  document.getElementById('fecharModal').addEventListener('click', () => modal.classList.remove('open'));
  document.getElementById('btnCancelar').addEventListener('click', () => modal.classList.remove('open'));

  function checklistMarcado(){
    return [...document.querySelectorAll('#checklistSaude input:checked')].map(el => el.value);
  }

  function coletarDadosFormulario(){
    const enderecoPartes = {
      VENDEDOR_CEP: document.getElementById('fVendedorCep').value.trim(),
      VENDEDOR_RUA: document.getElementById('fVendedorRua').value.trim(),
      VENDEDOR_NUMERO: document.getElementById('fVendedorNumero').value.trim(),
      VENDEDOR_COMPLEMENTO: document.getElementById('fVendedorComplemento').value.trim(),
      VENDEDOR_BAIRRO: document.getElementById('fVendedorBairro').value.trim(),
      VENDEDOR_CIDADE: document.getElementById('fVendedorCidade').value.trim(),
      VENDEDOR_UF: document.getElementById('fVendedorUf').value.trim()
    };
    const senhaValor = senhaTipoAtual === 'PIN' ? document.getElementById('fSenhaPin').value.trim()
      : senhaTipoAtual === 'TEXTO' ? document.getElementById('fSenhaTexto').value.trim()
      : sequenciaPadrao.join(',');
    return Object.assign({
      VENDEDOR_NOME: document.getElementById('fVendedorNome').value.trim(),
      VENDEDOR_CPF: document.getElementById('fVendedorCpf').value.trim(),
      VENDEDOR_RG: document.getElementById('fVendedorRg').value.trim(),
      VENDEDOR_TELEFONE: document.getElementById('fVendedorTelefone').value.trim(),
      VENDEDOR_ENDERECO: montarEnderecoCompleto(enderecoPartes),
      MARCA: document.getElementById('fMarca').value.trim(),
      MODELO: document.getElementById('fModelo').value.trim(),
      COR: document.getElementById('fCor').value.trim(),
      MEMORIA: document.getElementById('fMemoria').value.trim(),
      TIPO_APARELHO: document.getElementById('fTipo').value,
      IMEI: document.getElementById('fImei').value.trim(),
      NUMERO_SERIE: document.getElementById('fSerie').value.trim(),
      BATERIA_PERCENTUAL: document.getElementById('fBateria').value,
      CHECKLIST_PROBLEMAS: checklistMarcado(),
      FRP_REMOVIDO: document.getElementById('fFrpRemovido').checked,
      ACESSORIOS_INCLUSOS: document.getElementById('fAcessorios').value.trim(),
      ESTADO_APARELHO: document.getElementById('fEstadoAparelho').value.trim(),
      VALOR_PAGO: Number(document.getElementById('fValorPago').value) || 0,
      FORMA_PAGAMENTO: document.getElementById('fFormaPagamento').value,
      PRECO_VENDA_SUGERIDO: Number(document.getElementById('fPrecoVenda').value) || 0,
      GARANTIA_REVENDA_DIAS: Number(document.getElementById('fGarantiaRevenda').value) || 30,
      SENHA_TIPO: senhaTipoAtual,
      SENHA_VALOR: senhaValor
    }, enderecoPartes);
  }

  function validarFormulario(dados){
    if (!dados.VENDEDOR_NOME || !dados.VENDEDOR_CPF || !dados.VENDEDOR_TELEFONE){ mostrarToast('Informe nome, CPF e telefone de quem está vendendo.', 'erro'); return false; }
    if (!dados.MARCA || !dados.MODELO){ mostrarToast('Informe marca e modelo do aparelho.', 'erro'); return false; }
    if (!dados.VALOR_PAGO){ mostrarToast('Informe o valor pago pelo aparelho.', 'erro'); return false; }
    if (!dados.FRP_REMOVIDO){ mostrarToast('Confirme que a conta iCloud/Google foi removida e o aparelho foi testado antes de salvar.', 'erro'); return false; }
    return true;
  }

  /**
   * Salva (ou atualiza) o registro da compra. Na primeira vez, também gera o
   * estoque em Celulares (PRODUTOS) — depois disso, só atualiza os dois
   * registros já existentes, sem duplicar o aparelho no estoque.
   */
  async function salvarOuAtualizar(){
    const dados = coletarDadosFormulario();
    if (!validarFormulario(dados)) return null;

    if (compraAtual && compraAtual.ID) {
      if (!(await checarPermissao('COMPRA_USADO','EDITAR'))){ mostrarToast('Sem permissão pra editar.', 'erro'); return null; }
      await dbUpdate('COMPRAS_USADO', compraAtual.ID, dados);
      if (compraAtual.PRODUTO_ID) {
        await dbUpdate('PRODUTOS', compraAtual.PRODUTO_ID, {
          MARCA: dados.MARCA, MODELO: dados.MODELO, COR: dados.COR, MEMORIA: dados.MEMORIA, TIPO_APARELHO: dados.TIPO_APARELHO,
          IMEI: dados.IMEI, NUMERO_SERIE: dados.NUMERO_SERIE, BATERIA_PERCENTUAL: dados.BATERIA_PERCENTUAL,
          ACESSORIOS_INCLUSOS: dados.ACESSORIOS_INCLUSOS, ESTADO_APARELHO: dados.ESTADO_APARELHO,
          PRECO_CUSTO: dados.VALOR_PAGO, PRECO_VENDA: dados.PRECO_VENDA_SUGERIDO || undefined, GARANTIA_PADRAO_DIAS: dados.GARANTIA_REVENDA_DIAS,
          NOME: dados.MARCA + ' ' + dados.MODELO + (dados.MEMORIA ? ' ' + dados.MEMORIA + 'GB' : '') + (dados.COR ? ' ' + dados.COR : '')
        });
      }
      Object.assign(compraAtual, dados);
      return compraAtual;
    }

    if (!(await checarPermissao('COMPRA_USADO','CADASTRAR'))){ mostrarToast('Sem permissão pra cadastrar.', 'erro'); return null; }
    if (!(await checarPermissao('PRODUTOS','CADASTRAR'))){ mostrarToast('Sem permissão pra gerar estoque em Produtos.', 'erro'); return null; }

    const empresaId = await obterLojaParaAcao('De qual loja é essa compra?');
    if (!empresaId){ mostrarToast('Cadastro cancelado — é preciso escolher a loja.', 'erro'); return null; }

    const novoProduto = await dbInsert('PRODUTOS', {
      NOME: dados.MARCA + ' ' + dados.MODELO + (dados.MEMORIA ? ' ' + dados.MEMORIA + 'GB' : '') + (dados.COR ? ' ' + dados.COR : ''),
      CATEGORIA: 'Celular', EMPRESA_ID: empresaId, ESTOQUE_ATUAL: 1, ESTOQUE_MINIMO: 0, STATUS: 'Ativo', DATA_CRIACAO: new Date().toISOString(),
      MARCA: dados.MARCA, MODELO: dados.MODELO, COR: dados.COR, MEMORIA: dados.MEMORIA, TIPO_APARELHO: dados.TIPO_APARELHO,
      IMEI: dados.IMEI, NUMERO_SERIE: dados.NUMERO_SERIE, BATERIA_PERCENTUAL: dados.BATERIA_PERCENTUAL,
      ACESSORIOS_INCLUSOS: dados.ACESSORIOS_INCLUSOS, ESTADO_APARELHO: dados.ESTADO_APARELHO,
      PRECO_CUSTO: dados.VALOR_PAGO, PRECO_VENDA: dados.PRECO_VENDA_SUGERIDO || 0, GARANTIA_PADRAO_DIAS: dados.GARANTIA_REVENDA_DIAS,
      ORIGEM_ENTRADA: 'COMPRA_DE_CLIENTE'
    });

    const novaCompra = await dbInsert('COMPRAS_USADO', Object.assign({
      NUMERO_COMPRA: gerarId('COMP'), DATA: new Date().toISOString(), EMPRESA_ID: empresaId,
      PRODUTO_ID: novoProduto.ID, STATUS: 'Concluída'
    }, dados));

    compraAtual = novaCompra;
    itens.unshift(novaCompra);
    produtos.push(novoProduto);
    mostrarToast('Compra registrada e estoque gerado em Celulares!');
    return novaCompra;
  }

  document.getElementById('btnSalvar').addEventListener('click', async () => {
    try {
      const salvo = await salvarOuAtualizar();
      if (!salvo) return;
      modal.classList.remove('open');
      renderKpis(); renderLinhas();
    } catch (e) { mostrarToast('Erro: ' + e.message, 'erro'); }
  });

  // ---------- Montagem do termo (cabeçalho igual ao dos outros documentos da loja) ----------
  function cabecalhoHtmlPadrao(){
    const lojasHtml = empresas.slice(0, 2).map((e, idx) => {
      const linha1 = 'Loja ' + (idx+1) + ' – ' + [e.RUA, e.NUMERO].filter(Boolean).join(', ');
      const linha2 = [e.BAIRRO, e.CIDADE].filter(Boolean).join(' – ');
      return `<div style="flex:1; font-size:10px; line-height:1.55; ${idx===0 && empresas.length>1 ? 'border-right:1px solid #ddd; padding-right:14px; margin-right:14px;' : ''}">
        <b>${linha1}</b><br>${linha2}<br>📞 ${e.WHATSAPP||'—'}
      </div>`;
    }).join('');
    const empresaPrincipal = empresas[0] || {};
    return `
      <div style="display:flex; align-items:flex-start; justify-content:space-between; padding-bottom:12px; flex-wrap:wrap; gap:14px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <img src="/sistema/assets/img/Logo.png" style="height:52px; width:auto; max-width:90px; object-fit:contain;" onerror="this.style.display='none'">
          <div>
            <div style="font-size:19px; font-weight:800; color:#e2401c; letter-spacing:0.4px;">BSTYLE - Eletrônicos & Acessórios</div>
            <div style="font-size:9.5px; color:#666;">📷 ${empresaPrincipal.INSTAGRAM || (empresaPrincipal.EMAIL||'')}</div>
          </div>
        </div>
        <div style="display:flex; gap:0;">${lojasHtml || '<div style="font-size:10px; color:#999;">Cadastre suas lojas em Empresas.</div>'}</div>
      </div>
      <div style="height:4px; background:linear-gradient(90deg,#e2401c,#f5a623);"></div>`;
  }

  const DECLARACOES_VENDEDOR = [
    'Declara ser o legítimo proprietário do aparelho, com plena capacidade para vendê-lo, e que ele possui origem lícita, não sendo produto de furto, roubo, apropriação indébita ou qualquer outra atividade ilícita.',
    'Declara que o aparelho não possui, nesta data, qualquer restrição, bloqueio, penhora, ordem judicial ou financiamento que impeça sua comercialização.',
    'Declara que o IMEI informado corresponde ao aparelho entregue, sem qualquer adulteração ou manipulação de seus mecanismos de identificação.',
    'Declara entregar o aparelho livre de contas pessoais e bloqueios de fábrica (Google, Apple ID/iCloud, Samsung Account e demais), autorizando a BSTYLE a restaurá-lo aos padrões de fábrica quando necessário, sendo o único responsável pela remoção prévia de seus dados pessoais.',
    'Declara ter informado, de forma verdadeira e completa, todos os defeitos e demais condições relevantes do aparelho de que tenha conhecimento, respondendo por informações falsas ou omissões.',
    'Caso seja constatado posteriormente restrição, bloqueio ou irregularidade de procedência anterior a esta venda e não informada, o VENDEDOR se responsabiliza pela resolução e pelos prejuízos diretamente decorrentes.',
    'Declara ter lido e concordado com as condições desta negociação, ciente de que a BSTYLE poderá solicitar documento oficial de identificação para comprovação de identidade e propriedade.'
  ];

  function montarHtmlTermoCompra(via, mostrarSenha){
    const c = compraAtual;
    const problemas = Array.isArray(c.CHECKLIST_PROBLEMAS) ? c.CHECKLIST_PROBLEMAS : [];
    const senhaHtml = mostrarSenha && c.SENHA_TIPO && c.SENHA_VALOR ? ` &nbsp; <b>Senha do aparelho:</b> ${formatarSenhaExibicao(c)}` : '';
    return `
    <div style="width:720px; margin:0 auto; padding:24px 32px; font-family:'Segoe UI',Arial,sans-serif; color:#1a1a1a; box-sizing:border-box; font-size:11px;">
      ${cabecalhoHtmlPadrao()}

      <h1 style="text-align:center; font-size:18px; margin:12px 0 4px; font-weight:800;">Termo de Compra de Aparelho Usado</h1>
      <div style="height:2px; background:#e2401c; margin-bottom:5px;"></div>
      <div style="text-align:right; font-size:9px; color:#999; margin-bottom:9px;">${via} · Nº ${c.NUMERO_COMPRA}</div>

      <h3 style="font-size:11.5px; margin:9px 0 4px;">1. IDENTIFICAÇÃO DO VENDEDOR</h3>
      <div style="font-size:11px; line-height:1.55;">
        <b>Nome:</b> ${c.VENDEDOR_NOME||''} &nbsp; <b>CPF:</b> ${c.VENDEDOR_CPF||''}${c.VENDEDOR_RG ? ' &nbsp; <b>RG:</b> ' + c.VENDEDOR_RG : ''}<br>
        <b>Telefone:</b> ${c.VENDEDOR_TELEFONE||''}${c.VENDEDOR_ENDERECO ? '<br><b>Endereço:</b> ' + c.VENDEDOR_ENDERECO : ''}
      </div>

      <h3 style="font-size:11.5px; margin:10px 0 4px;">2. DESCRIÇÃO DO APARELHO</h3>
      <div style="font-size:11px; line-height:1.55;">
        <b>Marca/Modelo:</b> ${c.MARCA||''} ${c.MODELO||''} &nbsp; <b>Cor/Memória:</b> ${[c.COR, c.MEMORIA?c.MEMORIA+'GB':''].filter(Boolean).join(' / ')||'—'}<br>
        ${c.IMEI ? `<b>IMEI:</b> ${c.IMEI}` : ''}${c.NUMERO_SERIE ? ` &nbsp; <b>Número de Série:</b> ${c.NUMERO_SERIE}` : ''}<br>
        ${c.BATERIA_PERCENTUAL ? `<b>Saúde da bateria:</b> ${c.BATERIA_PERCENTUAL}% &nbsp; ` : ''}<b>Acessórios inclusos:</b> ${c.ACESSORIOS_INCLUSOS || 'Nenhum'}<br>
        <b>Avarias identificadas:</b> ${problemas.length ? problemas.join(', ') : 'Nenhuma avaria aparente identificada.'}<br>
        <b>Conta iCloud/Google removida e aparelho testado:</b> ${c.FRP_REMOVIDO ? 'Sim' : 'Não confirmado'}${senhaHtml}
        ${c.ESTADO_APARELHO ? `<br><b>Observações:</b> ${c.ESTADO_APARELHO}` : ''}
      </div>

      <h3 style="font-size:11.5px; margin:10px 0 4px;">3. DADOS DA COMPRA</h3>
      <div style="font-size:11px; line-height:1.55;">
        <b>Data:</b> ${dataBR(c.DATA)} &nbsp; <b>Valor pago:</b> ${moeda(c.VALOR_PAGO)} &nbsp; <b>Forma de pagamento:</b> ${c.FORMA_PAGAMENTO||''}<br>
        <b>Loja responsável:</b> ${nomeEmpresa(c.EMPRESA_ID)}
      </div>

      <h3 style="font-size:11.5px; margin:10px 0 4px;">4. DECLARAÇÃO DO VENDEDOR</h3>
      <div style="font-size:9.5px; line-height:1.4;">
        ${DECLARACOES_VENDEDOR.map((texto, i) => `<p style="margin:0 0 3px;"><b>${i+1}.</b> ${texto}</p>`).join('')}
      </div>

      <div style="margin-top:20px; font-size:11px;">Assinatura do Vendedor: ___________________________</div>
      <div style="font-size:10px; color:#666; margin-top:3px;">Data: ${dataBR(c.DATA)}</div>
      <div style="margin-top:14px; font-size:11px;">Assinatura do Responsável pela Loja: ___________________________</div>
    </div>`;
  }

  /** Escala o conteúdo pra caber em uma única página A4, se ele estiver estourando a altura. */
  function ajustarParaUmaPagina(conteudo){
    if (!conteudo) return;
    const alturaMaximaMm = 277; // A4 (297mm) menos ~10mm de margem em cima e embaixo
    const alturaMaximaPx = alturaMaximaMm * 3.7795; // mm -> px a 96dpi
    const alturaAtual = conteudo.scrollHeight;
    if (alturaAtual > alturaMaximaPx) {
      const escala = alturaMaximaPx / alturaAtual;
      conteudo.style.transform = 'scale(' + escala.toFixed(4) + ')';
      conteudo.style.transformOrigin = 'top center';
      const wrap = conteudo.parentElement;
      if (wrap) { wrap.style.height = Math.ceil(alturaAtual * escala) + 'px'; wrap.style.overflow = 'hidden'; }
    }
  }

  /** Só chama print() depois que as imagens (logo) carregarem, e garante uma via por folha. */
  function imprimirUmaPaginaQuandoPronto(janela){
    const imagens = janela.document.images;
    const finalizarEImprimir = () => {
      janela.document.querySelectorAll('.paginaConteudo').forEach(el => ajustarParaUmaPagina(el));
      janela.print();
    };
    if (!imagens.length) { finalizarEImprimir(); return; }
    let pendentes = imagens.length;
    const seguir = () => { pendentes--; if (pendentes <= 0) finalizarEImprimir(); };
    [...imagens].forEach(img => {
      if (img.complete) seguir(); else { img.addEventListener('load', seguir); img.addEventListener('error', seguir); }
    });
    setTimeout(finalizarEImprimir, 2000);
  }

  document.getElementById('btnImprimir').addEventListener('click', async () => {
    try {
      const salvo = await salvarOuAtualizar();
      if (!salvo) return;
      const janela = window.open('', '_blank');
      janela.document.write(`<html><head><title>${salvo.NUMERO_COMPRA}</title>
        <style>@page { size: A4; margin: 10mm; } body{ margin:0; } .paginaWrap{ width:100%; page-break-after:always; } .paginaWrap:last-child{ page-break-after:auto; }</style>
        </head><body>
        <div class="paginaWrap"><div class="paginaConteudo">${montarHtmlTermoCompra('1ª VIA — LOJA', true)}</div></div>
        <div class="paginaWrap"><div class="paginaConteudo">${montarHtmlTermoCompra('2ª VIA — VENDEDOR', false)}</div></div>
      </body></html>`);
      janela.document.close(); janela.focus();
      imprimirUmaPaginaQuandoPronto(janela);
      modal.classList.remove('open');
      renderKpis(); renderLinhas();
    } catch (e) { mostrarToast('Erro: ' + e.message, 'erro'); }
  });

  // ---------- Salvar PDF ----------
  document.getElementById('btnGerarPdf').addEventListener('click', async () => {
    try {
      const salvo = await salvarOuAtualizar();
      if (!salvo) return;
      const c = salvo;
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ unit: 'mm', format: 'a4' });
      const corDestaque = [226, 64, 28];
      const problemas = Array.isArray(c.CHECKLIST_PROBLEMAS) ? c.CHECKLIST_PROBLEMAS : [];

      for (let idx = 0; idx < 2; idx++) {
        const rotulo = idx === 0 ? '1ª VIA — LOJA' : '2ª VIA — VENDEDOR';
        if (idx > 0) doc.addPage();

        let y = await desenharCabecalhoLoja(doc, empresas);

        doc.setFontSize(15); doc.setFont(undefined,'bold'); doc.setTextColor(20);
        doc.text('Termo de Compra de Aparelho Usado', 105, y+4, { align:'center' }); y += 8;
        doc.setDrawColor(...corDestaque); doc.setLineWidth(0.6); doc.line(20, y, 190, y); y += 8;

        doc.setFontSize(8.5); doc.setFont(undefined,'normal'); doc.setTextColor(140);
        doc.text(rotulo + ' · Nº ' + c.NUMERO_COMPRA, 190, y, { align: 'right' }); y += 7;

        const secao = (titulo) => { doc.setFontSize(10.5); doc.setFont(undefined,'bold'); doc.setTextColor(20); doc.text(titulo, 20, y); y += 5.5; };
        const linha = (label, valor) => { doc.setFontSize(9.5); doc.setFont(undefined,'bold'); doc.text(label, 20, y); const w = doc.getTextWidth(label); doc.setFont(undefined,'normal'); doc.text(String(valor||''), 20+w+3, y); y += 5; };
        const paragrafo = (texto) => { doc.setFontSize(9); doc.setFont(undefined,'normal'); const t = doc.splitTextToSize(texto, 170); doc.text(t, 20, y); y += t.length*4.2 + 2.5; };

        secao('1. IDENTIFICAÇÃO DO VENDEDOR');
        linha('Nome:', c.VENDEDOR_NOME); linha('CPF:', c.VENDEDOR_CPF);
        if (c.VENDEDOR_RG) linha('RG:', c.VENDEDOR_RG);
        linha('Telefone:', c.VENDEDOR_TELEFONE);
        if (c.VENDEDOR_ENDERECO) linha('Endereço:', c.VENDEDOR_ENDERECO);
        y += 2;

        secao('2. DESCRIÇÃO DO APARELHO');
        linha('Marca/Modelo:', (c.MARCA||'') + ' ' + (c.MODELO||''));
        linha('Cor/Memória:', [c.COR, c.MEMORIA?c.MEMORIA+'GB':''].filter(Boolean).join(' / '));
        if (c.IMEI) linha('IMEI:', c.IMEI);
        if (c.NUMERO_SERIE) linha('Número de Série:', c.NUMERO_SERIE);
        if (c.BATERIA_PERCENTUAL) linha('Saúde da bateria:', c.BATERIA_PERCENTUAL + '%');
        linha('Acessórios inclusos:', c.ACESSORIOS_INCLUSOS || 'Nenhum');
        linha('Avarias identificadas:', problemas.length ? problemas.join(', ') : 'Nenhuma aparente');
        linha('Conta iCloud/Google removida:', c.FRP_REMOVIDO ? 'Sim' : 'Não confirmado');
        // Senha do aparelho — só na via da loja, o técnico precisa pra acessar o aparelho.
        if (idx === 0 && c.SENHA_TIPO && c.SENHA_VALOR) linha('Senha do aparelho:', formatarSenhaExibicao(c));
        if (c.ESTADO_APARELHO) paragrafo('Observações: ' + c.ESTADO_APARELHO);
        y += 1.5;

        secao('3. DADOS DA COMPRA');
        linha('Data da compra:', dataBR(c.DATA)); linha('Valor pago:', moeda(c.VALOR_PAGO));
        linha('Forma de pagamento:', c.FORMA_PAGAMENTO); linha('Loja responsável:', nomeEmpresa(c.EMPRESA_ID));
        y += 2;

        secao('4. DECLARAÇÃO DO VENDEDOR');
        doc.setFontSize(8.3); doc.setFont(undefined,'normal');
        DECLARACOES_VENDEDOR.forEach((texto, i) => {
          const t = doc.splitTextToSize((i+1) + '. ' + texto, 170);
          doc.text(t, 20, y); y += t.length*3.7 + 1.4;
        });

        y += 8;
        if (y > 260) { doc.addPage(); y = 20; }
        doc.setFontSize(9.5); doc.setFont(undefined,'normal');
        doc.text('Assinatura do Vendedor: ___________________________', 20, y); y += 5;
        doc.setFontSize(8.5); doc.setTextColor(100); doc.text('Data: ' + dataBR(c.DATA), 20, y); doc.setTextColor(20); y += 10;
        doc.setFontSize(9.5);
        doc.text('Assinatura do Responsável pela Loja: ___________________________', 20, y);
      }

      const nomeArquivo = 'Compra_Usado_' + c.NUMERO_COMPRA + '.pdf';
      doc.save(nomeArquivo);

      if (await checarPermissao('COMPRA_USADO','EDITAR')) {
        await dbUpdate('COMPRAS_USADO', c.ID, { PDF_GERADO: true, DATA_GERACAO_PDF: new Date().toISOString() });
        c.PDF_GERADO = true;
      }
      mostrarToast('PDF salvo no seu computador.');
      modal.classList.remove('open');
      renderKpis(); renderLinhas();
    } catch (e) { mostrarToast('Erro ao gerar PDF: ' + e.message, 'erro'); }
  });

  carregar();
})();
</script>
