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
    INSTAGRAM_URL: 'https://www.instagram.com/bstyle_clp',
    EMAIL: 'vendas.bstyle@gmail.com',
    // WhatsApp padrão usado quando a solicitação não está ligada a uma loja específica
    // (ex.: botão genérico "Falar pelo WhatsApp" no topo).
    WHATSAPP_PADRAO: '5511945507628',
    // Botão "Entrar em contato" (seção Contato) vai direto pro WhatsApp
    // da unidade São José, por pedido do Wenderson.
    WHATSAPP_CONTATO: '5511947856426'
  },

  // Créditos do rodapé.
  DESENVOLVEDOR: {
    NOME: 'Wenderson Silva',
    INSTAGRAM_URL: 'https://www.instagram.com/eo_wenderson'
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
      INSTAGRAM_URL: 'https://www.instagram.com/bstyle_clp',
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
      INSTAGRAM_URL: 'https://www.instagram.com/bstyle_clp',
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

  // Opções do campo "Tipo de atendimento" no formulário de orçamento — cada
  // uma com uma explicação curta (mostrada no "?" ao lado da opção).
  TIPOS_ATENDIMENTO: [
    { NOME: 'Assistência Técnica', DESCRICAO: 'Para quando o aparelho apresenta um defeito — não liga, tela quebrada, molhou, não carrega, câmera não funciona, etc.' },
    { NOME: 'Manutenção', DESCRICAO: 'Para revisão, limpeza interna, trocas preventivas ou ajustes gerais — quando não há um defeito específico, só cuidado periódico.' }
  ],

  // Catálogo fixo de marcas e modelos (celulares) usado no formulário de
  // orçamento — ao escolher a marca, só aparecem os modelos dela. Cada
  // lista termina com uma opção "Outro modelo" que libera um campo de
  // texto livre, pra nunca travar quem não achar o aparelho exato.
  CATALOGO_APARELHOS: {
    'Apple': ['iPhone 6', 'iPhone 6 Plus', 'iPhone 6s', 'iPhone 6s Plus', 'iPhone SE', 'iPhone 7', 'iPhone 7 Plus', 'iPhone 8', 'iPhone 8 Plus', 'iPhone X', 'iPhone XR', 'iPhone XS', 'iPhone XS Max', 'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max', 'iPhone 12', 'iPhone 12 Mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max', 'iPhone 13', 'iPhone 13 Mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max', 'iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max', 'iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max', 'iPhone 16', 'iPhone 16 Plus', 'iPhone 16 Pro', 'iPhone 16 Pro Max', 'iPhone 17'],
    'Samsung': ['Galaxy A03', 'Galaxy A04', 'Galaxy A13', 'Galaxy A14', 'Galaxy A15', 'Galaxy A23', 'Galaxy A24', 'Galaxy A25', 'Galaxy A33', 'Galaxy A34', 'Galaxy A54', 'Galaxy A55', 'Galaxy M13', 'Galaxy M14', 'Galaxy M23', 'Galaxy M33', 'Galaxy M34', 'Galaxy S21', 'Galaxy S22', 'Galaxy S23', 'Galaxy S23 Ultra', 'Galaxy S24', 'Galaxy S24 Ultra', 'Galaxy Z Flip4', 'Galaxy Z Flip5', 'Galaxy Z Flip6', 'Galaxy Z Fold4', 'Galaxy Z Fold5', 'Galaxy Z Fold6', 'Galaxy Note 10', 'Galaxy Note 20', 'Galaxy Note 20 Ultra'],
    'Motorola': ['Moto E6', 'Moto E7', 'Moto E13', 'Moto E22', 'Moto E32', 'Moto G6', 'Moto G7', 'Moto G8', 'Moto G9', 'Moto G10', 'Moto G20', 'Moto G22', 'Moto G23', 'Moto G32', 'Moto G34', 'Moto G42', 'Moto G54', 'Moto G73', 'Moto G84', 'Moto Edge 20', 'Moto Edge 30', 'Moto Edge 40', 'Moto Razr', 'Moto Razr 40', 'Moto Razr 40 Ultra'],
    'Xiaomi / Redmi / POCO': ['Redmi 9', 'Redmi 10', 'Redmi 12', 'Redmi 13', 'Redmi Note 9', 'Redmi Note 10', 'Redmi Note 11', 'Redmi Note 12', 'Redmi Note 13', 'POCO X3', 'POCO X4', 'POCO X5', 'POCO X6', 'POCO F3', 'POCO F4', 'POCO F5', 'Mi 11', 'Mi 12'],
    'Realme': ['Realme 7', 'Realme 8', 'Realme 9', 'Realme 10', 'Realme 11', 'Realme C11', 'Realme C25', 'Realme C55'],
    'ASUS': ['Zenfone 8', 'Zenfone 9', 'Zenfone 10', 'ROG Phone 6', 'ROG Phone 7', 'ROG Phone 8'],
    'LG': ['LG K22', 'LG K41S', 'LG K51S', 'LG K52', 'LG K62', 'LG Q60', 'LG Velvet', 'LG Wing'],
    'Nokia': ['Nokia 5.4', 'Nokia 6.2', 'Nokia 7.2', 'Nokia 8.3', 'Nokia G10', 'Nokia G20', 'Nokia G21', 'Nokia G22', 'Nokia C01', 'Nokia C21', 'Nokia C31'],
    'Sony': ['Xperia 1', 'Xperia 1 II', 'Xperia 1 III', 'Xperia 5', 'Xperia 5 II', 'Xperia 10', 'Xperia 10 II', 'Xperia 10 III'],
    'Huawei': ['P20', 'P30', 'P40', 'Mate 20', 'Mate 30', 'Y6', 'Y7', 'Y9', 'Nova 5T', 'Nova 9'],
    'Honor': ['Honor 8', 'Honor 9', 'Honor 10', 'Honor 50', 'Honor 70', 'Honor 90', 'Honor X8', 'Honor X9'],
    'Infinix': ['Hot 10', 'Hot 20', 'Hot 30', 'Note 10', 'Note 12', 'Zero 20', 'Smart 6', 'Smart 7'],
    'Tecno': ['Spark 8', 'Spark 10', 'Camon 18', 'Camon 19', 'Pova 4', 'Pova 5'],
    'Google Pixel': ['Pixel 3', 'Pixel 4', 'Pixel 5', 'Pixel 6', 'Pixel 6a', 'Pixel 7', 'Pixel 7a', 'Pixel 8', 'Pixel 8a', 'Pixel 9'],
    'OnePlus': ['OnePlus 7', 'OnePlus 8', 'OnePlus 9', 'OnePlus 10', 'OnePlus 11', 'OnePlus Nord'],
    'Lenovo': ['Lenovo K series', 'Lenovo Tab (tablet)'],
    'Positivo': ['Twist 2 Pro', 'Twist 3', 'Twist 4', 'Twist Max', 'Positivo S series'],
    'Multilaser': ['MS50', 'MS60', 'MS70', 'MS80', 'F Pro', 'H series'],
    'Outra marca / não sei': []
  },

  // Número máximo de fotos aceitas no formulário (mantém o documento do
  // Firestore dentro do limite de 1 MB, já que as fotos vão em base64).
  MAX_FOTOS: 3,
  MAX_LARGURA_FOTO_PX: 1000,
  QUALIDADE_JPEG_FOTO: 0.6
};
