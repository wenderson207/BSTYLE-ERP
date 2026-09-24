/**
 * site.js — comportamentos compartilhados do site institucional
 * (menu mobile, link de WhatsApp, montagem dinâmica de serviços/lojas).
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

/** Preenche o grid de serviços (usado na Home e em Serviços) a partir do config. */
function renderServicos(containerId, comBotaoOrcamento) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = CONFIG_BSTYLE.SERVICOS.map(s => `
    <div class="card-servico">
      <div class="icone">${s.ICONE}</div>
      <h3>${s.NOME}</h3>
      <p>${s.DESCRICAO}</p>
      ${comBotaoOrcamento ? `<a class="link-orcamento" href="orcamento.html?tipo=${encodeURIComponent(s.NOME)}">Solicitar orçamento →</a>` : ''}
    </div>
  `).join('');
}

/** Preenche os cards das duas lojas (Home/Lojas/Contato). */
function renderLojas(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = CONFIG_BSTYLE.LOJAS.map(l => `
    <div class="card-loja">
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
}

document.addEventListener('DOMContentLoaded', () => {
  ligarMenuMobile();
  // Preenche o ano do copyright, se existir na página.
  const anoEl = document.getElementById('anoAtual');
  if (anoEl) anoEl.textContent = new Date().getFullYear();
  // Link de WhatsApp genérico (topo, contato, footer) usando o número padrão da marca.
  document.querySelectorAll('[data-whatsapp-padrao]').forEach(a => {
    a.href = linkWhatsapp(CONFIG_BSTYLE.MARCA.WHATSAPP_PADRAO, 'Olá! Vim pelo site da BStyle e gostaria de falar com a equipe.');
  });
});
