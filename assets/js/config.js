/**
 * config.js — Site institucional BStyle
 * -----------------------------------------------------------------------
 * Todos os dados "editáveis" do site institucional ficam aqui, num lugar
 * só, pra não precisar mexer no HTML pra trocar telefone, endereço,
 * horário, serviço, etc. Se um dado abaixo estiver vazio (''), a página
 * mostra um texto substituto seguro (nunca inventa a informação real).
 * -----------------------------------------------------------------------
 */

function mapsLinkPorEndereco(enderecoCompleto) {
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(enderecoCompleto);
}

const CONFIG_BSTYLE = {
  MARCA: {
    NOME: 'BStyle',
    SLOGAN: 'Tecnologia, acessórios e soluções para você.',
    INSTAGRAM_HANDLE: '@bstyle_clp',
    INSTAGRAM_URL: 'https://instagram.com/bstyle_clp',
    EMAIL: 'vendas.bstyle@gmail.com',
    // WhatsApp padrão usado quando a solicitação não está ligada a uma loja específica
    // (ex.: botão genérico "Falar pelo WhatsApp" no topo/contato).
    WHATSAPP_PADRAO: '5511945507628'
  },

  // Cada loja tem uma CHAVE (usada internamente e no formulário de orçamento)
  // e um NOME de exibição. HORARIO e ele ficam em branco de propósito — o
  // Wenderson preenche depois; enquanto estiver vazio, a página mostra
  // "Consulte o horário pelo WhatsApp" em vez de inventar um horário.
  LOJAS: [
    {
      CHAVE: 'unidade-01',
      NOME: 'BStyle — Unidade 01 (Califórnia)',
      ENDERECO: 'Av. Antônio Di Gióia, 479 — Parque Res. Califórnia',
      CIDADE_UF: 'Campo Limpo Paulista — SP',
      CEP: '13232-200',
      TELEFONE: '(11) 94550-7628',
      WHATSAPP: '5511945507628',
      EMAIL: 'vendas.bstyle@gmail.com',
      HORARIO: '', // ex.: 'Seg a Sex 9h–18h · Sáb 9h–13h' — preencher
      INSTAGRAM_URL: 'https://instagram.com/bstyle_clp',
      get MAPS_URL() {
        return mapsLinkPorEndereco(this.ENDERECO + ', ' + this.CIDADE_UF + ', ' + this.CEP);
      }
    },
    {
      CHAVE: 'unidade-02',
      NOME: 'BStyle — Unidade 02 (São José)',
      ENDERECO: 'R. José Valter Pachêco, 210 — Conj. Hab. São José',
      CIDADE_UF: 'Campo Limpo Paulista — SP',
      CEP: '13232-263',
      TELEFONE: '(11) 94785-6426',
      WHATSAPP: '5511947856426',
      EMAIL: 'vendas.bstyle@gmail.com',
      HORARIO: '', // preencher
      INSTAGRAM_URL: 'https://instagram.com/bstyle_clp',
      get MAPS_URL() {
        return mapsLinkPorEndereco(this.ENDERECO + ', ' + this.CIDADE_UF + ', ' + this.CEP);
      }
    }
  ],

  // Cards da seção "Tudo o que você precisa em um só lugar" (Home) e da
  // página/seção "Nossos Serviços". Adicionar/remover itens aqui reflete
  // nas duas seções automaticamente.
  SERVICOS: [
    { ICONE: '📱', NOME: 'Eletrônicos', DESCRICAO: 'Celulares e outros eletrônicos com procedência e bom preço.' },
    { ICONE: '🔌', NOME: 'Acessórios', DESCRICAO: 'Capinhas, películas, carregadores, fones e muito mais.' },
    { ICONE: '🔧', NOME: 'Assistência Técnica', DESCRICAO: 'Diagnóstico e reparo de smartphones com técnicos especializados.' },
    { ICONE: '🛠️', NOME: 'Manutenção', DESCRICAO: 'Troca de peças, limpeza interna e manutenção preventiva.' },
    { ICONE: '📲', NOME: 'Soluções para Smartphones', DESCRICAO: 'Desbloqueio, configuração e suporte para o seu aparelho.' },
    { ICONE: '💻', NOME: 'Outros Serviços', DESCRICAO: 'Fale com a gente — se não estiver na lista, a gente ajuda a resolver.' }
  ],

  // Opções do campo "Tipo de atendimento" no formulário de orçamento.
  TIPOS_ATENDIMENTO: ['Assistência técnica', 'Manutenção', 'Acessórios', 'Eletrônicos', 'Outro'],

  // Número máximo de fotos aceitas no formulário (mantém o documento do
  // Firestore dentro do limite de 1 MB, já que as fotos vão em base64).
  MAX_FOTOS: 3,
  MAX_LARGURA_FOTO_PX: 1000,
  QUALIDADE_JPEG_FOTO: 0.6
};
