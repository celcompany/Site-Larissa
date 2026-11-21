export const SITE = {
  name: "Larissa Mendes Hairstylist",
  shortName: "Larissa Mendes",
  url: "https://larissamendeshairstylist.com.br",
  locale: "pt_BR",
  phoneDisplay: "(11) 97084-5497",
  phoneE164: "+5511970845497",
  whatsappNumber: "5511970845497",
  instagram: "https://instagram.com/lar1mendes",
  instagramHandle: "@lar1mendes",
  award: "Vencedora Beleza Experience 2024 - Novos Talentos Penteado",
  defaultTitle: "Penteado e Maquiagem a Domicílio em São Paulo e Grande SP | Larissa Mendes",
  defaultDescription:
    "Penteado e maquiagem a domicílio em São Paulo e Grande SP para noivas, madrinhas e eventos sociais. Atendimento em residências, hotéis e espaços de eventos. Vencedora do Prêmio Beleza Experience 2024.",
  ogImage: "/fotos/hero.jpeg",
  gtmId: "GTM-NXC87NT7",
  ga4Id: "G-F38VJ77VVM",
  adsId: "AW-18449298619",
} as const;

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path === "/" ? "" : path.startsWith("/") ? path : `/${path}`}`;

/** Gera link do WhatsApp com mensagem pré-preenchida. */
export const waLink = (text: string = WA_MESSAGES.default) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const WA_MESSAGES = {
  default:
    "Olá, Larissa! Vi o seu site e gostaria de consultar sua disponibilidade de data.\n\n📅 Data do evento: \n\n📍 Bairro/Local: \n\n✨ Tipo de evento (Noiva/Madrinha/Festa): \n\n👥 Quantidade de pessoas: ",
  noiva:
    "Olá, Larissa! Sou noiva e gostaria de receber o seu material com o orçamento exclusivo para o meu grande dia.\n\n💍 Data do casamento: ",
  madrinha:
    "Olá, Larissa! Gostaria de consultar valores e datas para produção de Madrinha/Mãe.\n\n📅 Data do casamento: \n📍 Local onde vamos nos arrumar: \n👥 Quantidade de pessoas (Cabelo / Make): ",
  social:
    "Olá, Larissa! Gostaria de consultar disponibilidade para um Penteado Social.\n\n📅 Data do evento: \n📍 Local: ",
  maquiagem:
    "Olá, Larissa! Gostaria de consultar disponibilidade para maquiagem a domicílio.\n\n📅 Data do evento: \n📍 Local: \n👥 Quantidade de pessoas: ",
  ensaio:
    "Olá, Larissa! Gostaria de um orçamento para produção de penteado para Ensaio/Shooting.\n\n📅 Data do ensaio: \n📍 Local: ",
  referencia:
    "Olá, Larissa! Tenho uma foto de referência de penteado e gostaria de saber se consegue fazer para o meu evento (estou enviando a foto em anexo).\n\n📅 Data do evento: \n📍 Local/Bairro: \n✨ Tipo de evento (Noiva/Madrinha/Festa): ",
} as const;

/** Mensagem de WhatsApp para orçamento de um pacote de noiva específico. */
export const waPackageMessage = (packageName: string) =>
  `Olá, Larissa! Sou noiva e gostaria de solicitar o orçamento do Pacote ${packageName}.\n\n💍 Data do casamento: \n📍 Local onde vou me arrumar: `;

/**
 * Regras oficiais de atendimento (fonte única para páginas e FAQ).
 * NUNCA exibir preços ou valores monetários no site.
 */
export const POLICIES = {
  brideDuration: "Em média 2h30min de produção para a noiva.",
  booking: "A data é reservada mediante assinatura de contrato e pagamento de sinal de 30% do valor total.",
  payment:
    "Pagamento à vista via Pix, débito ou dinheiro. Também é possível parcelar no cartão de crédito, com acréscimo de juros.",
  hairPrep:
    "Os cabelos devem estar limpos (lavados somente com shampoo), secos e sem produtos pesados, como óleos ou máscaras.",
  travel:
    "Nos pacotes de noiva, o deslocamento para o teste e para o dia da noiva está incluso em São Paulo Capital. Pré-wedding e atendimentos nas demais cidades da Grande SP são sob consulta.",
} as const;

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  schemaName: string;
  waKey: keyof typeof WA_MESSAGES;
};

export const SERVICES: Service[] = [
  { slug: "/penteado-noiva-a-domicilio-sp", name: "Penteado de Noiva a Domicílio", navLabel: "Noivas", schemaName: "Penteado para Noivas a Domicílio", waKey: "noiva" },
  { slug: "/penteado-madrinha-e-mae-sp", name: "Penteado para Madrinhas e Mães", navLabel: "Madrinhas e Mães", schemaName: "Penteado para Madrinhas e Mães a Domicílio", waKey: "madrinha" },
  { slug: "/penteado-social-a-domicilio-sp", name: "Penteado Social a Domicílio", navLabel: "Penteado Social", schemaName: "Penteado Social a Domicílio", waKey: "social" },
  { slug: "/maquiagem-a-domicilio-sp", name: "Maquiagem a Domicílio", navLabel: "Maquiagem", schemaName: "Maquiagem a Domicílio", waKey: "maquiagem" },
  { slug: "/penteado-para-ensaio-fotografico-sp", name: "Penteado para Ensaio Fotográfico", navLabel: "Ensaios e Shooting", schemaName: "Penteado para Ensaio Fotográfico e Shooting", waKey: "ensaio" },
];

export type Region = {
  name: string;
  neighborhoods: string[];
};

/**
 * Zonas e bairros estratégicos — USO EXCLUSIVO NO SCHEMA (areaServed).
 * Não exibir esta lista visualmente; a comunicação do site é "toda São Paulo e Grande SP".
 */
export const REGIONS: Region[] = [
  { name: "Zona Sul", neighborhoods: ["Moema", "Vila Mariana", "Brooklin", "Campo Belo", "Vila Olímpia", "Itaim Bibi", "Morumbi", "Paraíso"] },
  { name: "Zona Oeste", neighborhoods: ["Pinheiros", "Jardins", "Vila Madalena", "Alto de Pinheiros", "Perdizes", "Pompeia", "Lapa", "Butantã"] },
  { name: "Centro", neighborhoods: ["Higienópolis", "Consolação", "Bela Vista", "Santa Cecília", "República", "Liberdade"] },
];

export const NAV_LINKS = [
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/perguntas-frequentes", label: "Dúvidas" },
] as const;
