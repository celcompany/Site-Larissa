import { POLICIES } from "@/lib/site";

export type FaqGroup = { id: string; title: string; items: { q: string; a: string }[] };

/** FAQ oficial — fonte da página /perguntas-frequentes. Nunca incluir preços. */
export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "noivas",
    title: "Noivas e pacotes",
    items: [
      { q: "Quanto tempo dura a produção da noiva?", a: "Em torno de 2h30min de produção para a noiva no dia do casamento." },
      {
        q: "Todos os pacotes de noiva incluem teste de penteado?",
        a: "Não. O teste de penteado com consultoria de visagismo está incluso a partir do Pacote Clássico (Clássico, Completo e Luxo). O Pacote Essencial é focado no penteado do dia da noiva.",
      },
      {
        q: "Quais são os pacotes de noiva?",
        a: "São quatro: Essencial (praticidade no dia da noiva), Clássico (com teste e visagismo), Completo (com pré-wedding, acompanhante, acessórios e véu) e Luxo (com acompanhamento profissional no evento e retoque ou troca de penteado para a recepção). Os detalhes estão na página de Penteado de Noiva.",
      },
      {
        q: "É possível ter acompanhamento durante a festa?",
        a: "Sim. O Pacote Luxo inclui acompanhamento profissional no evento. Para os Pacotes Clássico e Completo, existe o opcional de acompanhamento avulso, com retoque pós-cerimônia ou troca de penteado para a recepção.",
      },
    ],
  },
  {
    id: "agendamento",
    title: "Agendamento e pagamento",
    items: [
      { q: "Como funciona o agendamento e a reserva de data?", a: POLICIES.booking + " O primeiro contato e o orçamento são feitos pelo WhatsApp." },
      { q: "Quais são as formas de pagamento?", a: POLICIES.payment },
    ],
  },
  {
    id: "atendimento",
    title: "Atendimento a domicílio",
    items: [
      { q: "Como funciona o deslocamento?", a: POLICIES.travel },
      {
        q: "Onde acontece o atendimento?",
        a: "A domicílio, em toda São Paulo e Grande SP: em residências, suítes de hotéis e espaços de eventos.",
      },
      {
        q: "Vocês fazem maquiagem e atendem madrinhas e acompanhantes no mesmo local?",
        a: "Sim. A Larissa atua exclusivamente com penteados e, para a produção completa, a maquiagem é feita por maquiadoras parceiras. Madrinhas, mães e acompanhantes podem ser atendidas no mesmo local, com cronograma organizado.",
      },
    ],
  },
  {
    id: "preparo",
    title: "Preparação",
    items: [
      { q: "Como devo preparar o cabelo antes do atendimento?", a: POLICIES.hairPrep },
      {
        q: "Posso enviar fotos de referência?",
        a: "Pode e é recomendado. Envie pelo WhatsApp fotos de referência, do vestido e dos acessórios para alinharmos o penteado ideal.",
      },
    ],
  },
];

export const ALL_FAQ = FAQ_GROUPS.flatMap((g) => g.items);
