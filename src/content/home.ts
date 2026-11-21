import { PHOTOS, type Photo } from "@/lib/photos";
import { SERVICES } from "@/lib/site";

const svc = (slug: string) => SERVICES.find((s) => s.slug === slug)!;

/** Serviços na Home: Noivas em destaque + lista tipográfica. */
export const HOME_SERVICES = {
  featured: {
    service: svc("/penteado-noiva-a-domicilio-sp"),
    title: "Dia da Noiva",
    lead: "Penteado de noiva a domicílio com teste prévio, colocação de véu e grinalda e um cronograma calmo até a saída para a cerimônia.",
    photo: PHOTOS.foto12,
  },
  list: [
    {
      service: svc("/penteado-madrinha-e-mae-sp"),
      title: "Madrinhas e Mães",
      lead: "Produções que conversam com o vestido, individuais ou em grupo no mesmo espaço.",
    },
    {
      service: svc("/penteado-social-a-domicilio-sp"),
      title: "Penteado Social",
      lead: "Formaturas, jantares e festas, com fixação que dura até o fim da pista.",
    },
    {
      service: svc("/maquiagem-a-domicilio-sp"),
      title: "Maquiagem",
      lead: "Maquiadoras parceiras de alto padrão para a produção completa no mesmo local.",
    },
    {
      service: svc("/penteado-para-ensaio-fotografico-sp"),
      title: "Ensaios e Shooting",
      lead: "Acabamento pensado para as lentes, em estúdio ou locação.",
    },
  ],
};

/** Curadoria do portfólio na Home (ordem = composição editorial). */
export const HOME_PORTFOLIO: Photo[] = [PHOTOS.foto10, PHOTOS.foto3, PHOTOS.foto1, PHOTOS.foto9, PHOTOS.foto6, PHOTOS.foto4];

export const HOW_IT_WORKS = [
  {
    title: "Conte sobre o seu evento",
    text: "Pelo WhatsApp, envie a data, o bairro ou hotel, o tipo de evento e quantas pessoas serão atendidas. Fotos de referência são muito bem-vindas.",
  },
  {
    title: "Disponibilidade e orçamento",
    text: "Confirmamos a agenda e enviamos o orçamento personalizado, já com a taxa de deslocamento para o seu endereço.",
  },
  {
    title: "Teste prévio para noivas",
    text: "Noivas fazem um teste antes do grande dia para definir penteado, acessórios, véu e todos os detalhes com calma.",
  },
  {
    title: "No dia, o camarim vai até você",
    text: "Chegamos pontualmente com toda a estrutura profissional — em casa, na suíte do hotel ou no espaço do evento — seguindo um cronograma organizado.",
  },
];

/**
 * DEPOIMENTOS — PLACEHOLDERS.
 * O index.html antigo não tinha depoimentos. Substituir por depoimentos reais
 * (com autorização das clientes) e trocar `placeholder` para false.
 * Não adicionar Schema de Review/AggregateRating com conteúdo fictício.
 */
export const TESTIMONIALS = [
  { quote: "[Depoimento real de uma noiva — substituir]", author: "[Nome da cliente]", context: "Noiva · [Bairro]", placeholder: true },
  { quote: "[Depoimento real de uma madrinha ou mãe — substituir]", author: "[Nome da cliente]", context: "Madrinha · [Bairro]", placeholder: true },
  { quote: "[Depoimento real de penteado social — substituir]", author: "[Nome da cliente]", context: "Formatura · [Bairro]", placeholder: true },
];

export const HOME_FAQ = [
  {
    q: "Vocês atendem em quais regiões de São Paulo?",
    a: "Atendemos a domicílio em toda a Zona Sul, Zona Oeste e Centro de São Paulo — bairros como Moema, Vila Mariana, Itaim Bibi, Pinheiros, Jardins, Vila Madalena, Higienópolis e Consolação. Outras localidades podem ser consultadas pelo WhatsApp.",
  },
  {
    q: "Existe taxa de deslocamento?",
    a: "Sim. A taxa de deslocamento é calculada de acordo com o endereço do atendimento e já vem informada no orçamento enviado pelo WhatsApp.",
  },
  {
    q: "Vocês atendem em hotéis e espaços de eventos?",
    a: "Sim. Além de residências, atendemos em suítes de hotéis e em espaços de eventos, levando toda a estrutura de um camarim profissional.",
  },
  {
    q: "Vocês fazem maquiagem também?",
    a: "Sim. A maquiagem é feita por maquiadoras parceiras de alto padrão, que atendem você e suas convidadas no mesmo local e horário do penteado.",
  },
  {
    q: "A noiva faz teste antes do casamento?",
    a: "Sim. O pacote de noiva inclui teste prévio para definir o penteado, acessórios, véu e grinalda, garantindo tranquilidade no grande dia.",
  },
  {
    q: "É possível atender madrinhas e convidadas no mesmo local?",
    a: "Sim. Atendemos grupos no mesmo espaço com um cronograma organizado, para que todas fiquem prontas no horário.",
  },
];
