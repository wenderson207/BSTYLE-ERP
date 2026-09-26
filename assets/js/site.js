/**
 * site.js — comportamentos compartilhados do site institucional
 * (menu mobile, transição entre páginas, link de WhatsApp, montagem
 * dinâmica de serviços/lojas).
 */

function linkWhatsapp(numero, mensagem) {
  const n = String(numero).replace(/\D/g, '');
  return 'https://wa.me/' + n + (mensagem ? ('?text=' + encodeURIComponent(mensagem)) : '');
}

function ligarMenuMobile() {
  const btn = document.getElementById('btnHamburguerSite');
  const menu = document.getElementById('menuMobileSite');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => menu.classList.toggle('aberto'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('aberto')));
}

/**
 * Transição suave ao SAIR de uma página de verdade (index.html <-> orcamento.html):
 * um "overlay" tecnológico varre a tela em laranja antes de navegar. (Não
 * mexemos na entrada da página — um fade-in feito por script, rodando depois
 * que a página já apareceu na tela, causava um "flash" branco chato; o
 * próprio carregamento normal do navegador já é suave.)
 *
 * Importante: um link do tipo "index.html#servicos" clicado enquanto já se
 * está em index.html NÃO troca de página de verdade (o navegador só pula
 * pra âncora, sem recarregar a página) — esse caso é sempre ignorado aqui,
 * senão a tela ficava esperando pra sempre um recarregamento que nunca
 * acontece (era exatamente isso que deixava a tela branca ao clicar em
 * Serviços/Nossas Lojas/Quem Somos/Contato).
 */
const DURACAO_TRANSICAO_MS = 260;

function ehApenasAncoraNaMesmaPagina(link) {
  let destino;
  try { destino = new URL(link.href, window.location.href); } catch (e) { return false; }
  if (!destino.hash) return false;
  return destino.pathname === window.location.pathname && destino.search === window.location.search;
}

function ligarTransicaoDePaginas() {
  const overlay = document.getElementById('overlayTransicao');

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    if (link.target === '_blank' || link.hasAttribute('download')) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (ehApenasAncoraNaMesmaPagina(link)) return; // deixa o navegador rolar suavemente sozinho

    e.preventDefault();
    document.documentElement.classList.add('pagina-saindo');
    if (overlay) overlay.classList.add('ativo');
    setTimeout(() => { window.location.href = href; }, DURACAO_TRANSICAO_MS);
  });

  // Se a pessoa voltar pelo botão do navegador, o Chrome/Safari às vezes
  // restauram a página exatamente como ela ficou antes de sair (inclusive
  // com as classes de transição ainda ativas) — isso garante que ela sempre
  // volta visível.
  window.addEventListener('pageshow', () => {
    document.documentElement.classList.remove('pagina-saindo');
    if (overlay) overlay.classList.remove('ativo');
  });
}

/**
 * Revelação suave dos blocos ao rolar a página (fade + leve deslocamento —
 * dá o toque "tecnológico" sem exagerar). Usa IntersectionObserver; se o
 * navegador não suportar, os blocos simplesmente já aparecem visíveis.
 */
function ligarRevelacaoAoRolar() {
  const alvos = document.querySelectorAll('.reveal');
  if (!alvos.length) return;
  if (!('IntersectionObserver' in window)) {
    alvos.forEach(el => el.classList.add('reveal-visivel'));
    return;
  }
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('reveal-visivel');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  alvos.forEach(el => observador.observe(el));
}

/**
 * Faz a troca com fade entre dois blocos da mesma página (ex.: formulário
 * de orçamento → tela de confirmação), em vez de um display:none seco.
 */
function trocarTela(elEsconder, elMostrar) {
  elEsconder.classList.add('tela-saindo');
  setTimeout(() => {
    elEsconder.style.display = 'none';
    elMostrar.style.display = 'block';
    elMostrar.classList.add('tela-entrando-prep');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => elMostrar.classList.remove('tela-entrando-prep'));
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, DURACAO_TRANSICAO_MS);
}

/** Preenche o grid de serviços (usado na Home e em Serviços) a partir do config. */
function renderServicos(containerId, comBotaoOrcamento) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = CONFIG_BSTYLE.SERVICOS.map(s => `
    <div class="card-servico reveal">
      <div class="icone">${s.ICONE}</div>
      <h3>${s.NOME}</h3>
      <p>${s.DESCRICAO}</p>
      ${comBotaoOrcamento ? `<a class="link-orcamento" href="orcamento.html">Solicitar orçamento →</a>` : ''}
    </div>
  `).join('');
  ligarRevelacaoAoRolar();
}

/** Preenche os cards das duas lojas (Home/Lojas/Contato). */
function renderLojas(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = CONFIG_BSTYLE.LOJAS.map(l => `
    <div class="card-loja reveal">
      <h3>${l.NOME}</h3>
      <div class="linha-info"><span class="ico">📍</span><span>${l.ENDERECO} — ${l.CIDADE_UF}, ${l.CEP}</span></div>
      <div class="linha-info"><span class="ico">📞</span><span>${l.TELEFONE}</span></div>
      <div class="linha-info"><span class="ico">🕐</span><span>${l.HORARIO ? l.HORARIO : 'Consulte o horário pelo WhatsApp'}</span></div>
      <div class="botoes-loja">
        <a class="btn btn-laranja" href="${l.MAPS_URL}" target="_blank" rel="noopener">📍 Como chegar</a>
        <a class="btn btn-outline" href="${linkWhatsapp(l.WHATSAPP, 'Olá! Vim pelo site da BStyle e gostaria de mais informações.')}" target="_blank" rel="noopener">💬 Falar pelo WhatsApp</a>
      </div>
    </div>
  `).join('');
  ligarRevelacaoAoRolar();
}

/**
 * Manda uma mensagem pelo mesmo Bot do Telegram já usado no sistema
 * (Resumo de Caixa). Roda direto no navegador de quem está preenchendo o
 * formulário — se falhar (sem internet, bot indisponível, etc.), não trava
 * nada: o pedido já foi salvo no Firestore antes disso, o Telegram é só um
 * aviso extra pra equipe ser avisada mais rápido.
 */
async function enviarMensagemTelegram(token, chatId, texto) {
  const resp = await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: texto })
  });
  return await resp.json();
}

/** Avisa a equipe no Telegram sempre que um orçamento novo chega pelo site. */
function avisarNovoOrcamentoNoTelegram(dados) {
  const cfg = CONFIG_BSTYLE.TELEGRAM;
  if (!cfg || !cfg.BOT_TOKEN || !cfg.CHAT_IDS || !cfg.CHAT_IDS.length) return;
  const texto = [
    '🆕 Novo orçamento pelo site (#' + dados.numero + ')',
    '👤 ' + dados.nome,
    '📱 ' + dados.whatsapp,
    '🔧 ' + dados.tipo,
    dados.produto ? '📦 ' + dados.produto : null,
    '',
    dados.descricao
  ].filter(Boolean).join('\n');
  cfg.CHAT_IDS.forEach(id => {
    enviarMensagemTelegram(cfg.BOT_TOKEN, id, texto).catch(() => { /* silencioso — o pedido já está salvo */ });
  });
}

/** Preenche o crédito do rodapé ("Desenvolvido por: ..."), se existir na página. */
function renderCreditoRodape() {
  const el = document.getElementById('creditoDesenvolvedor');
  if (!el || !CONFIG_BSTYLE.DESENVOLVEDOR) return;
  const d = CONFIG_BSTYLE.DESENVOLVEDOR;
  el.innerHTML = `· Desenvolvido por: <a href="${d.INSTAGRAM_URL}" target="_blank" rel="noopener">${d.NOME}</a>`;
}

ligarTransicaoDePaginas();

document.addEventListener('DOMContentLoaded', () => {
  ligarMenuMobile();
  ligarRevelacaoAoRolar();
  renderCreditoRodape();
  // Preenche o ano do copyright, se existir na página.
  const anoEl = document.getElementById('anoAtual');
  if (anoEl) anoEl.textContent = new Date().getFullYear();
  // Link de WhatsApp genérico (topo/quem-somos) usando o número padrão da marca.
  document.querySelectorAll('[data-whatsapp-padrao]').forEach(a => {
    a.href = linkWhatsapp(CONFIG_BSTYLE.MARCA.WHATSAPP_PADRAO, 'Olá! Vim pelo site da BStyle e gostaria de falar com a equipe.');
  });
  // "Entrar em contato" (seção Contato) vai direto pro WhatsApp da unidade São José.
  document.querySelectorAll('[data-whatsapp-contato]').forEach(a => {
    a.href = linkWhatsapp(CONFIG_BSTYLE.MARCA.WHATSAPP_CONTATO, 'Olá! Vim pelo site da BStyle e gostaria de falar com a equipe.');
  });
});
