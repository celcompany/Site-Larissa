import JsonLd from "@/components/JsonLd";
import { CtaBlock, FaqList, PageHero, SectionHeader, container, sectionPad } from "@/components/sections";
import { ButtonLink } from "@/components/ui";
import { ALL_FAQ, FAQ_GROUPS, type FaqGroup } from "@/content/faq";
import { PHOTOS } from "@/lib/photos";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { WA_MESSAGES, waLink } from "@/lib/site";

/*
 * Ritmo de fundos: Hero cream → grupos alternando sand/stone com um bloco GRAFITE no meio → CTA GRAFITE
 */

const PATH = "/perguntas-frequentes";
const crumbs = [
  { name: "Início", path: "/" },
  { name: "Perguntas frequentes", path: PATH },
];

export const metadata = pageMetadata({
  title: "Perguntas Frequentes: Penteado e Maquiagem a Domicílio em SP",
  description:
    "Dúvidas sobre penteado de noiva e maquiagem a domicílio em São Paulo e Grande SP: duração, reserva de data, formas de pagamento, deslocamento, preparação do cabelo e pacotes.",
  path: PATH,
});

const BG = ["bg-brand-sand", "bg-brand-stone"];

function Group({ group, bg }: { group: FaqGroup; bg: string }) {
  return (
    <section id={group.id} className={`scroll-mt-20 ${bg} ${sectionPad}`}>
      <div className={container}>
        <SectionHeader eyebrow="Dúvidas frequentes">{group.title}</SectionHeader>
        <FaqList items={group.items} />
      </div>
    </section>
  );
}

export default function FaqPage() {
  const [first, second, ...rest] = FAQ_GROUPS;

  return (
    <>
      <JsonLd data={[faqSchema(ALL_FAQ), breadcrumbSchema(crumbs)]} />

      <PageHero
        crumbs={crumbs}
        eyebrow="Penteado e maquiagem a domicílio · São Paulo e Grande SP"
        title={["Perguntas", "frequentes"]}
        text="Tudo o que você precisa saber antes de reservar: pacotes de noiva, agendamento, pagamento, deslocamento e preparação do cabelo."
      >
        <nav aria-label="Temas" className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {FAQ_GROUPS.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="border-b border-stone-300 pb-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-dark transition-colors hover:border-brand-bronze hover:text-brand-bronze"
            >
              {g.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <Group group={first} bg={BG[0]} />
      <Group group={second} bg={BG[1]} />

      {/* Bloco escuro intermediário */}
      <section className={`bg-brand-graphite ${sectionPad}`}>
        <div className={container}>
          <SectionHeader
            eyebrow="Pacotes de noiva"
            onDark
            intro="Essencial, Clássico, Completo e Luxo: compare o que cada pacote inclui e solicite o orçamento do seu."
          >
            Conheça os <em className="italic">quatro</em> pacotes
          </SectionHeader>
          <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/penteado-noiva-a-domicilio-sp#pacotes" variant="gold">
              Ver pacotes de noiva
            </ButtonLink>
            <ButtonLink href={waLink(WA_MESSAGES.noiva)} variant="outlineLight">
              Falar no WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>

      {rest.map((g, i) => (
        <Group key={g.id} group={g} bg={BG[i % 2]} />
      ))}

      <CtaBlock
        eyebrow="Ainda com dúvidas?"
        title={["Fale", "diretamente", "com a Larissa."]}
        text="Envie a sua pergunta, a data e o local do evento pelo WhatsApp. A resposta vem com a disponibilidade para a sua data."
        primary={{ href: waLink(), label: "Perguntar no WhatsApp" }}
        secondary={{ href: "/sobre", label: "Conhecer a Larissa" }}
        photo={PHOTOS.foto10}
      />
    </>
  );
}
