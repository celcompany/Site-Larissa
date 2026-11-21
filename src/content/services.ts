import type { Title } from "@/components/sections";
import { PHOTOS, type Photo } from "@/lib/photos";
import type { WA_MESSAGES } from "@/lib/site";

type Item = { title: string; text: string };

export type ServiceContent = {
  slug: string;
  waKey: keyof typeof WA_MESSAGES;
  breadcrumb: string;
  meta: { title: string; description: string };
  schema: { name: string; serviceType: string; description: string };
  hero: { eyebrow: string; h1: Title; text: string; cta: string; photo: Photo; caption: string };
  intro: { eyebrow: string; title: Title; paragraphs: string[]; photo: Photo };
  included: { eyebrow: string; title: Title; intro: string; items: Item[] };
  process: { eyebrow: string; title: Title; intro: string; steps: Item[] };
  gallery: { eyebrow: string; title: Title; photos: Photo[] };
  faq: { q: string; a: string }[];
  cta: { title: Title; text: string; label: string; photo: Photo };
};

export const COVERAGE_TEXT =
  "Atendimento a domicílio em toda São Paulo e Grande SP — em residências, suítes de hotéis e espaços de eventos.";

export const SERVICE_PAGES: ServiceContent[] = [
  /* ───────────── NOIVAS ───────────── */
  {
    slug: "/penteado-noiva-a-domicilio-sp",
    waKey: "noiva",
    breadcrumb: "Penteado de Noiva",
    meta: {
      title: "Penteado de Noiva a Domicílio em São Paulo e Grande SP",
      description:
        "Penteado de noiva a domicílio em São Paulo e Grande SP com teste prévio, colocação de véu e grinalda e cronograma no dia. Maquiagem com parceiras. Vencedora Beleza Experience 2024.",
    },
    schema: {
      name: "Penteado de Noiva a Domicílio",
      serviceType: "Penteado para noivas",
      description:
        "Penteado de noiva a domicílio em São Paulo e Grande SP, com teste prévio, colocação de véu e grinalda e acompanhamento até a saída para a cerimônia.",
    },
    hero: {
      eyebrow: "Dia da Noiva · São Paulo e Grande SP",
      h1: ["Penteado de Noiva", "a Domicílio"],
      text: "O penteado do seu casamento criado com calma, testado com antecedência e finalizado onde você estiver se arrumando — em casa, na suíte do hotel ou no espaço do evento, em toda São Paulo e Grande SP.",
      cta: "Receber orçamento de noiva",
      photo: PHOTOS.hero,
      caption: "Noivas · Making of a domicílio",
    },
    intro: {
      eyebrow: "O grande dia",
      title: ["Tranquilidade do teste", "à saída", "para a cerimônia"],
      paragraphs: [
        "No dia do casamento, cada minuto conta. Por isso o atendimento de noiva vai além do penteado: ele começa semanas antes, no teste, e termina só quando você sai para a cerimônia com tudo no lugar.",
        "O desenho do penteado é pensado a partir do vestido, do decote, do véu, dos acessórios e do estilo da celebração. O resultado é um penteado que parece seu, com técnica de fixação para durar da cerimônia ao fim da festa.",
        "E você não precisa se deslocar: toda a estrutura de um camarim profissional vai até onde você estiver se arrumando.",
      ],
      photo: PHOTOS.foto12,
    },
    included: {
      eyebrow: "O que está incluso",
      title: ["Um atendimento", "completo", "para a noiva"],
      intro: "Cada detalhe é combinado antes para que o dia do casamento seja leve.",
      items: [
        { title: "Teste prévio", text: "Encontro antes do casamento para definir o penteado, testar acessórios e alinhar cada detalhe com calma." },
        { title: "Véu e grinalda", text: "Colocação e ajuste de véu, grinalda, tiara ou flores, com fixação segura para fotos, abraços e pista." },
        { title: "Cronograma exclusivo", text: "Organização dos horários da noiva e do grupo para que todas fiquem prontas sem correria." },
        { title: "Acompanhamento", text: "Atenção aos detalhes até a saída para a cerimônia, com retoques finais antes das fotos." },
        { title: "Maquiagem com parceiras", text: "Maquiadoras parceiras de alto padrão para uma produção completa no mesmo local." },
        { title: "Atendimento ao grupo", text: "Mãe, madrinhas e convidadas podem ser atendidas no mesmo espaço, no mesmo cronograma." },
      ],
    },
    process: {
      eyebrow: "Como funciona",
      title: ["Do primeiro contato", "ao altar"],
      intro: "Um processo pensado para que você chegue ao grande dia sem nenhuma preocupação com cabelo.",
      steps: [
        { title: "Reserva da data", text: "Pelo WhatsApp, envie a data do casamento e o local onde vai se arrumar. Confirmamos a disponibilidade e enviamos o orçamento." },
        { title: "Referências e conversa", text: "Você compartilha fotos do vestido, referências de penteado e acessórios. Juntas, chegamos a uma proposta." },
        { title: "Teste do penteado", text: "No teste, o penteado é executado, ajustado e aprovado — incluindo véu, grinalda e acessórios." },
        { title: "O dia do casamento", text: "Chegamos pontualmente com estrutura completa e seguimos o cronograma até a sua saída para a cerimônia." },
      ],
    },
    gallery: {
      eyebrow: "Portfólio de noivas",
      title: ["Penteados para", "dizer sim"],
      photos: [PHOTOS.foto12, PHOTOS.foto11, PHOTOS.foto10, PHOTOS.foto1, PHOTOS.foto7, PHOTOS.foto6],
    },
    faq: [
      { q: "Com quanto tempo de antecedência devo reservar?", a: "Assim que tiver a data do casamento definida. Datas de alta temporada costumam ser reservadas com bastante antecedência, então vale consultar a disponibilidade o quanto antes pelo WhatsApp." },
      { q: "O teste do penteado está incluso?", a: "Sim. O atendimento de noiva inclui teste prévio para definir o penteado, os acessórios, o véu e a grinalda antes do grande dia." },
      { q: "Vocês atendem a noiva no hotel ou no espaço do casamento?", a: "Sim. O atendimento é a domicílio em toda São Paulo e Grande SP: em casa, em suítes de hotéis ou no espaço do evento." },
      { q: "A mãe e as madrinhas podem se arrumar junto?", a: "Sim. O grupo pode ser atendido no mesmo local, com um cronograma organizado para que todas fiquem prontas no horário." },
      { q: "Vocês fazem a maquiagem da noiva também?", a: "Sim, com maquiadoras parceiras de alto padrão, que atendem no mesmo local e horário do penteado." },
      { q: "Existe taxa de deslocamento?", a: "Sim. A taxa é calculada de acordo com o endereço do atendimento e já vem informada no orçamento." },
    ],
    cta: {
      title: ["O seu sim merece", "calma", "e precisão."],
      text: "Envie a data do casamento e o local onde você vai se arrumar. Retornamos com a disponibilidade e o material completo para noivas.",
      label: "Receber orçamento de noiva",
      photo: PHOTOS.foto6,
    },
  },

  /* ───────────── MADRINHAS E MÃES ───────────── */
  {
    slug: "/penteado-madrinha-e-mae-sp",
    waKey: "madrinha",
    breadcrumb: "Madrinhas e Mães",
    meta: {
      title: "Penteado para Madrinhas e Mães a Domicílio em São Paulo",
      description:
        "Penteado para madrinhas e mães dos noivos a domicílio em São Paulo e Grande SP. Atendimento individual ou em grupo no mesmo local, com cronograma organizado e maquiagem com parceiras.",
    },
    schema: {
      name: "Penteado para Madrinhas e Mães a Domicílio",
      serviceType: "Penteado para madrinhas e mães de casamento",
      description:
        "Penteado para madrinhas e mães dos noivos a domicílio em São Paulo e Grande SP, com atendimento individual ou em grupo e cronograma organizado.",
    },
    hero: {
      eyebrow: "Casamentos · São Paulo e Grande SP",
      h1: ["Penteado para Madrinhas e Mães", "a Domicílio"],
      text: "Produções elegantes que conversam com o vestido e com o estilo do casamento. Atendimento individual ou em grupo, no mesmo local, em toda São Paulo e Grande SP.",
      cta: "Consultar valores e datas",
      photo: PHOTOS.foto6,
      caption: "Madrinhas · Coque alto com volume",
    },
    intro: {
      eyebrow: "Destaque no altar",
      title: ["Elegância que", "acompanha", "o momento"],
      paragraphs: [
        "Madrinhas e mães estão nas fotos mais importantes do casamento — no altar, na entrada, nos abraços. O penteado precisa estar à altura desse protagonismo, sem competir com a noiva.",
        "Cada produção é desenhada a partir do vestido, do decote e do estilo da cerimônia: de coques clássicos e polidos a semi-presos românticos e ondas modeladas.",
        "Quando o grupo se arruma junto, tudo fica mais leve. Organizamos um cronograma para que todas fiquem prontas no horário, no mesmo espaço.",
      ],
      photo: PHOTOS.foto1,
    },
    included: {
      eyebrow: "Diferenciais",
      title: ["Pensado para o", "grupo", "inteiro"],
      intro: "Do primeiro contato ao último retoque, o atendimento é organizado para várias pessoas.",
      items: [
        { title: "Atendimento em grupo", text: "Mãe, madrinhas e convidadas atendidas no mesmo local, em sequência organizada." },
        { title: "Cronograma de horários", text: "Ordem e horário de cada pessoa definidos antes, para ninguém se atrasar para as fotos." },
        { title: "Penteado sob medida", text: "Cada penteado combinado ao vestido, ao formato do rosto e ao tipo de cabelo." },
        { title: "Fixação prolongada", text: "Técnica de fixação para durar da cerimônia ao fim da festa." },
        { title: "Maquiagem com parceiras", text: "Maquiadoras parceiras atendem no mesmo espaço e horário do penteado." },
        { title: "Onde for melhor", text: "Na casa da família, na suíte do hotel ou no espaço do evento." },
      ],
    },
    process: {
      eyebrow: "Como funciona",
      title: ["Organização para", "todas", "ficarem prontas"],
      intro: "Um atendimento coordenado para que o grupo aproveite o dia, sem pressa.",
      steps: [
        { title: "Data e quantidade", text: "Envie a data do casamento, o local onde vão se arrumar e quantas pessoas farão cabelo e maquiagem." },
        { title: "Orçamento e reserva", text: "Confirmamos a disponibilidade e enviamos o orçamento do grupo, já com a taxa de deslocamento." },
        { title: "Referências", text: "Cada pessoa pode enviar fotos do vestido e referências de penteado para alinharmos o estilo." },
        { title: "No dia", text: "Chegamos com estrutura profissional e seguimos o cronograma até a última pessoa ficar pronta." },
      ],
    },
    gallery: {
      eyebrow: "Portfólio",
      title: ["Penteados para", "madrinhas e mães"],
      photos: [PHOTOS.foto6, PHOTOS.foto1, PHOTOS.foto7, PHOTOS.foto10, PHOTOS.foto11, PHOTOS.foto4],
    },
    faq: [
      { q: "Vocês atendem várias madrinhas no mesmo local?", a: "Sim. O grupo é atendido no mesmo espaço, seguindo um cronograma organizado para que todas fiquem prontas no horário." },
      { q: "Qual penteado combina com o meu vestido?", a: "O penteado é definido a partir do vestido, do decote e do estilo do casamento. Envie fotos pelo WhatsApp e indicamos as melhores opções." },
      { q: "É possível fazer cabelo e maquiagem no mesmo atendimento?", a: "Sim. A maquiagem é feita por maquiadoras parceiras de alto padrão, no mesmo local e horário do penteado." },
      { q: "Vocês atendem a mãe dos noivos em casa ou no hotel?", a: "Sim. O atendimento é a domicílio em toda São Paulo e Grande SP: residências, suítes de hotéis e espaços de eventos." },
      { q: "Como é calculado o valor para um grupo?", a: "O orçamento considera a quantidade de pessoas, os serviços (cabelo e/ou maquiagem) e a taxa de deslocamento para o endereço." },
    ],
    cta: {
      title: ["Todas prontas,", "no horário", "certo."],
      text: "Envie a data do casamento, o local e a quantidade de pessoas. Retornamos com a disponibilidade e o orçamento do grupo.",
      label: "Consultar para o grupo",
      photo: PHOTOS.foto7,
    },
  },

  /* ───────────── PENTEADO SOCIAL ───────────── */
  {
    slug: "/penteado-social-a-domicilio-sp",
    waKey: "social",
    breadcrumb: "Penteado Social",
    meta: {
      title: "Penteado Social a Domicílio em São Paulo e Grande SP",
      description:
        "Penteado social a domicílio em São Paulo e Grande SP para formaturas, festas, jantares, eventos corporativos e convidadas de casamento. Fixação prolongada e atendimento em casa ou hotel.",
    },
    schema: {
      name: "Penteado Social a Domicílio",
      serviceType: "Penteado social para festas e eventos",
      description:
        "Penteado social a domicílio em São Paulo e Grande SP para formaturas, festas, jantares, eventos corporativos e convidadas de casamento.",
    },
    hero: {
      eyebrow: "Festas e eventos · São Paulo e Grande SP",
      h1: ["Penteado Social", "a Domicílio"],
      text: "Formaturas, festas, jantares e casamentos como convidada: um penteado harmônico e durável, feito com calma no conforto da sua casa ou hotel, em toda São Paulo e Grande SP.",
      cta: "Agendar penteado social",
      photo: PHOTOS.foto3,
      caption: "Social · Convidada",
    },
    intro: {
      eyebrow: "Para a sua ocasião",
      title: ["Do despojado ao", "sofisticado"],
      paragraphs: [
        "Um bom penteado social combina com a roupa, com o evento e com você. De ondas soltas e semi-presos modernos a coques polidos e rabos de cavalo estruturados, cada produção é pensada para a ocasião.",
        "A técnica de fixação garante que o penteado resista à pista de dança, ao calor e às horas de evento — sem perder o movimento natural.",
        "E sem trânsito antes da festa: você se arruma em casa, no hotel ou no local do evento, com tranquilidade.",
      ],
      photo: PHOTOS.foto9,
    },
    included: {
      eyebrow: "Ocasiões",
      title: ["Para todos os", "grandes", "momentos"],
      intro: "Atendimento individual ou para grupos de amigas e família.",
      items: [
        { title: "Formaturas", text: "Penteados que acompanham a colação, as fotos e a festa até o fim." },
        { title: "Convidadas de casamento", text: "Produções elegantes para quem vai celebrar, sem competir com a noiva." },
        { title: "Festas e aniversários", text: "Do glamour de uma festa de gala a um visual leve para comemorações." },
        { title: "Jantares e eventos corporativos", text: "Acabamento impecável e discreto para eventos de trabalho e jantares especiais." },
      ],
    },
    process: {
      eyebrow: "Como funciona",
      title: ["Simples, rápido e", "no seu tempo"],
      intro: "Você escolhe o local e o horário; a produção vai até você.",
      steps: [
        { title: "Envie os detalhes", text: "Pelo WhatsApp, informe a data, o horário do evento, o local e quantas pessoas vão se arrumar." },
        { title: "Orçamento", text: "Confirmamos a disponibilidade e enviamos o orçamento com a taxa de deslocamento." },
        { title: "Referência", text: "Se tiver uma foto de referência ou da roupa, envie: ajudamos a escolher o penteado ideal." },
        { title: "Produção no local", text: "No horário combinado, chegamos com estrutura completa e finalizamos com fixação prolongada." },
      ],
    },
    gallery: {
      eyebrow: "Portfólio",
      title: ["Penteados", "sociais"],
      photos: [PHOTOS.foto9, PHOTOS.foto3, PHOTOS.foto4, PHOTOS.foto2, PHOTOS.foto8, PHOTOS.foto5],
    },
    faq: [
      { q: "Vocês fazem penteado para formatura a domicílio?", a: "Sim. Atendemos formandas em casa, no hotel ou no local do evento, em toda São Paulo e Grande SP." },
      { q: "O penteado dura a festa inteira?", a: "Sim. Usamos técnicas de fixação prolongada para que o penteado resista à pista de dança e às horas de evento." },
      { q: "Vocês atendem cabelos cacheados?", a: "Sim. Os penteados são adaptados a cada tipo de cabelo, valorizando a textura natural — inclusive cachos." },
      { q: "Posso enviar uma foto de referência?", a: "Pode e é recomendado. Envie pelo WhatsApp e avaliamos a melhor forma de adaptar o penteado ao seu cabelo." },
      { q: "Atendem grupos de amigas?", a: "Sim. Grupos podem ser atendidos no mesmo local, com horários organizados para todas ficarem prontas a tempo." },
    ],
    cta: {
      title: ["Pronta para a", "festa", "sem sair de casa."],
      text: "Envie a data e o local do seu evento. Retornamos com a disponibilidade e o orçamento pelo WhatsApp.",
      label: "Agendar penteado social",
      photo: PHOTOS.foto5,
    },
  },

  /* ───────────── MAQUIAGEM ───────────── */
  {
    slug: "/maquiagem-a-domicilio-sp",
    waKey: "maquiagem",
    breadcrumb: "Maquiagem",
    meta: {
      title: "Maquiagem a Domicílio em São Paulo e Grande SP",
      description:
        "Maquiagem a domicílio em São Paulo e Grande SP para noivas, madrinhas, formandas e eventos, com maquiadoras parceiras de alto padrão. Cabelo e maquiagem no mesmo local e horário.",
    },
    schema: {
      name: "Maquiagem a Domicílio",
      serviceType: "Maquiagem para eventos",
      description:
        "Maquiagem a domicílio em São Paulo e Grande SP para noivas, madrinhas, formandas e eventos sociais, realizada por maquiadoras parceiras, junto com o penteado.",
    },
    hero: {
      eyebrow: "Produção completa · São Paulo e Grande SP",
      h1: ["Maquiagem", "a Domicílio"],
      text: "Cabelo e maquiagem no mesmo lugar e no mesmo horário. Maquiadoras parceiras de alto padrão completam a sua produção em casa, no hotel ou no espaço do evento, em toda São Paulo e Grande SP.",
      cta: "Consultar maquiagem",
      photo: PHOTOS.foto9,
      caption: "Produção completa · Cabelo e make",
    },
    intro: {
      eyebrow: "Beleza completa",
      title: ["Uma produção", "sem estresse"],
      paragraphs: [
        "Coordenar cabeleireira e maquiadora separadamente, em horários e lugares diferentes, é exatamente o tipo de preocupação que você não precisa ter no dia do evento.",
        "Por isso, o penteado da Larissa é complementado pelo trabalho de maquiadoras parceiras de alto padrão, que atendem você e suas convidadas no mesmo local e dentro do mesmo cronograma.",
        "O resultado é uma produção harmônica, em que cabelo e maquiagem são pensados juntos para o seu estilo e para a ocasião.",
      ],
      photo: PHOTOS.foto3,
    },
    included: {
      eyebrow: "Vantagens",
      title: ["Cabelo e make", "em sintonia"],
      intro: "Uma única reserva, um único cronograma, uma produção completa.",
      items: [
        { title: "Mesmo local e horário", text: "Cabelo e maquiagem acontecem juntos, sem deslocamentos extras." },
        { title: "Maquiadoras parceiras", text: "Profissionais de alto padrão, alinhadas ao estilo e à qualidade do atendimento." },
        { title: "Visual harmônico", text: "Penteado e maquiagem pensados em conjunto para o seu rosto, roupa e evento." },
        { title: "Para todo o grupo", text: "Noiva, mães, madrinhas, formandas e convidadas atendidas no mesmo espaço." },
      ],
    },
    process: {
      eyebrow: "Como funciona",
      title: ["Uma reserva para", "tudo"],
      intro: "Você combina cabelo e maquiagem de uma vez só, pelo WhatsApp.",
      steps: [
        { title: "Conte o que precisa", text: "Informe a data, o local, o tipo de evento e quantas pessoas farão cabelo e/ou maquiagem." },
        { title: "Disponibilidade", text: "Verificamos a agenda do penteado e das maquiadoras parceiras para a sua data." },
        { title: "Orçamento único", text: "Você recebe o orçamento completo da produção, com a taxa de deslocamento." },
        { title: "No dia", text: "Cabelo e maquiagem seguem o mesmo cronograma, no seu espaço, até todas ficarem prontas." },
      ],
    },
    gallery: {
      eyebrow: "Portfólio",
      title: ["Produções", "completas"],
      photos: [PHOTOS.foto9, PHOTOS.foto3, PHOTOS.hero, PHOTOS.foto11],
    },
    faq: [
      { q: "Quem faz a maquiagem?", a: "A maquiagem é feita por maquiadoras parceiras de alto padrão, que trabalham em sintonia com o penteado da Larissa." },
      { q: "Posso contratar só a maquiagem?", a: "O atendimento é pensado como produção completa, junto com o penteado. Consulte pelo WhatsApp a disponibilidade para o seu caso." },
      { q: "Vocês fazem maquiagem para noivas?", a: "Sim. A maquiagem da noiva pode ser incluída no atendimento de noiva, no mesmo local e cronograma do penteado." },
      { q: "Atendem maquiagem para grupos?", a: "Sim. Mães, madrinhas, formandas e convidadas podem fazer cabelo e maquiagem no mesmo espaço." },
      { q: "A maquiagem também é a domicílio?", a: "Sim. Toda a produção acontece em casa, no hotel ou no espaço do evento, em toda São Paulo e Grande SP." },
    ],
    cta: {
      title: ["Cabelo e make,", "juntos", "no seu espaço."],
      text: "Envie a data, o local e quantas pessoas vão se arrumar. Retornamos com a disponibilidade da produção completa.",
      label: "Consultar maquiagem",
      photo: PHOTOS.foto2,
    },
  },

  /* ───────────── ENSAIOS ───────────── */
  {
    slug: "/penteado-para-ensaio-fotografico-sp",
    waKey: "ensaio",
    breadcrumb: "Ensaios e Shooting",
    meta: {
      title: "Penteado para Ensaio Fotográfico e Shooting em São Paulo",
      description:
        "Penteado para ensaio fotográfico, shooting, editoriais e campanhas em São Paulo e Grande SP. Atendimento em estúdio ou locação, com acabamento pensado para as lentes.",
    },
    schema: {
      name: "Penteado para Ensaio Fotográfico e Shooting",
      serviceType: "Penteado para ensaios fotográficos",
      description:
        "Penteado para ensaios fotográficos, shootings, editoriais e campanhas em São Paulo e Grande SP, com atendimento em estúdio ou locação.",
    },
    hero: {
      eyebrow: "Ensaios e editoriais · São Paulo e Grande SP",
      h1: ["Penteado para", "Ensaio Fotográfico"],
      text: "Produção de cabelo pensada para as lentes: acabamento impecável sob os flashes, em estúdio ou locação, para ensaios pessoais, pré-wedding, campanhas e posicionamento de imagem.",
      cta: "Orçamento para ensaio",
      photo: PHOTOS.foto2,
      caption: "Shooting · Rabo alto polido",
    },
    intro: {
      eyebrow: "Diante da câmera",
      title: ["Detalhes que a", "lente", "revela"],
      paragraphs: [
        "A câmera mostra o que o olho não percebe: fios soltos, volume irregular, brilho excessivo. Em um ensaio, o penteado precisa de acabamento preciso para valorizar cada foto.",
        "O trabalho é alinhado ao conceito do ensaio — da paleta à luz, do figurino à locação — para que o cabelo componha a imagem, e não distraia dela.",
        "Para produções mais longas, acompanhamos ajustes e trocas de penteado entre os looks, quando combinado.",
      ],
      photo: PHOTOS.foto8,
    },
    included: {
      eyebrow: "Para quem é",
      title: ["Ensaios", "pessoais", "e profissionais"],
      intro: "Atendimento em estúdio, residência ou locação externa.",
      items: [
        { title: "Ensaios pessoais", text: "Aniversários, gestantes, debutantes e ensaios para celebrar uma fase." },
        { title: "Pré-wedding", text: "Ensaios de casal antes do casamento, com penteados que combinam com o conceito." },
        { title: "Posicionamento de imagem", text: "Fotos profissionais para redes sociais, sites e perfis de carreira." },
        { title: "Campanhas e editoriais", text: "Produções para marcas, catálogos e editoriais de moda e beleza." },
      ],
    },
    process: {
      eyebrow: "Como funciona",
      title: ["Alinhado ao", "conceito", "do ensaio"],
      intro: "Do briefing ao último clique, o cabelo acompanha a proposta das fotos.",
      steps: [
        { title: "Briefing", text: "Envie a data, o local, o tipo de ensaio e, se tiver, o moodboard ou referências." },
        { title: "Orçamento", text: "Retornamos com a disponibilidade e o orçamento, considerando duração e trocas de penteado." },
        { title: "Proposta de penteado", text: "Alinhamos o penteado ao figurino, à luz e à locação." },
        { title: "No set", text: "Chegamos com estrutura completa e acompanhamos ajustes durante as fotos, quando combinado." },
      ],
    },
    gallery: {
      eyebrow: "Portfólio",
      title: ["Acabamento para as", "lentes"],
      photos: [PHOTOS.foto2, PHOTOS.foto8, PHOTOS.foto4, PHOTOS.foto10, PHOTOS.foto11, PHOTOS.foto9],
    },
    faq: [
      { q: "Vocês atendem em estúdio e locação externa?", a: "Sim. O atendimento acontece em estúdios, residências ou locações externas em toda São Paulo e Grande SP." },
      { q: "É possível trocar de penteado durante o ensaio?", a: "Sim, quando combinado previamente. Informe no briefing quantos looks e penteados estão previstos." },
      { q: "Vocês atendem campanhas de marcas?", a: "Sim. Atendemos campanhas, catálogos e editoriais. Envie o briefing pelo WhatsApp para receber o orçamento." },
      { q: "Fazem maquiagem para ensaios?", a: "Sim, com maquiadoras parceiras de alto padrão, no mesmo local da produção." },
      { q: "Preciso enviar referências?", a: "Ajuda muito. Moodboard, figurino e referências de penteado deixam a produção alinhada ao conceito do ensaio." },
    ],
    cta: {
      title: ["Pronta para o", "primeiro", "clique."],
      text: "Envie a data, o local e o tipo de ensaio. Retornamos com a disponibilidade e o orçamento pelo WhatsApp.",
      label: "Orçamento para ensaio",
      photo: PHOTOS.foto7,
    },
  },
];

export const getServicePage = (slug: string) => {
  const page = SERVICE_PAGES.find((p) => p.slug === slug);
  if (!page) throw new Error(`Serviço não encontrado: ${slug}`);
  return page;
};
