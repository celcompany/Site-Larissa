import { PHOTOS, type Photo } from "@/lib/photos";
import { SERVICES } from "@/lib/site";

const svc = (slug: string) => SERVICES.find((s) => s.slug === slug)!;

/** Serviços na Home — todos listados juntos ao lado da foto. */
export const HOME_SERVICES = {
  photo: PHOTOS.foto12,
  list: [
    {
      service: svc("/penteado-noiva-a-domicilio-sp"),
      title: "Dia da Noiva",
      lead: "Teste prévio, colocação de véu e grinalda e um cronograma calmo até a saída para a cerimônia.",
    },
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

/** Carrossel do portfólio na Home (ordem = curadoria). */
export const HOME_PORTFOLIO: Photo[] = [
  PHOTOS.foto10,
  PHOTOS.foto3,
  PHOTOS.foto1,
  PHOTOS.foto9,
  PHOTOS.foto6,
  PHOTOS.foto4,
  PHOTOS.foto11,
  PHOTOS.foto5,
  PHOTOS.foto2,
  PHOTOS.foto7,
  PHOTOS.foto8,
  PHOTOS.foto12,
];

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

/** Tipos de local atendidos (comunicação inclusiva: toda SP e Grande SP). */
export const COVERAGE = [
  { title: "Residências", text: "Na sua casa ou na casa da família, com conforto e privacidade para você e suas convidadas." },
  { title: "Hotéis", text: "Nas suítes de hotéis, ideal para noivas e grupos que se arrumam perto do local da cerimônia." },
  { title: "Espaços de eventos", text: "Nos camarins e salas de preparação de buffets, igrejas e espaços de casamento." },
];

export const HOME_FAQ = [
  {
    q: "Vocês atendem em quais regiões?",
    a: "Atendemos a domicílio em toda a cidade de São Paulo e na Grande SP — em residências, hotéis e espaços de eventos. Consulte a disponibilidade para o seu endereço pelo WhatsApp.",
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
