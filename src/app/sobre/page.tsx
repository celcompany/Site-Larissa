import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import PortfolioCarousel from "@/components/home/PortfolioCarousel";
import {
  Breadcrumbs,
  CtaBlock,
  NumberedList,
  SectionHeader,
  ServiceLinks,
  container,
  h2Class,
  sectionPad,
} from "@/components/sections";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { PHOTOS } from "@/lib/photos";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SERVICES, SITE, waLink } from "@/lib/site";

/*
 * Ritmo de fundos: Hero cream → Trajetória sand → Prêmio GRAFITE → Como trabalha stone
 * → Portfólio cream → Serviços sand → CTA GRAFITE
 */

const PATH = "/sobre";
const crumbs = [
  { name: "Início", path: "/" },
  { name: "Sobre", path: PATH },
];

export const metadata = pageMetadata({
  title: "Sobre Larissa Mendes, Hairstylist de Penteados em São Paulo",
  description:
    "Conheça Larissa Mendes, hairstylist especialista em penteados em São Paulo, vencedora do Beleza Experience 2024 (Grupo O Boticário) na categoria Melhor Penteado pelo voto popular.",
  path: PATH,
  image: PHOTOS.larissaPremio.src.src,
});

const TIMELINE = [
  {
    when: "17 anos",
    title: "O começo na beleza",
    text: "Larissa começou como assistente na área da beleza. Foi ali, no dia a dia dos atendimentos, que descobriu a sua verdadeira vocação: os penteados.",
  },
  {
    when: "2024",
    title: "Beleza Experience",
    text: "Conquistou o maior prêmio de beleza da América Latina — o Beleza Experience, promovido pelo Grupo O Boticário — vencendo a categoria Melhor Penteado pelo voto popular.",
  },
  {
    when: "Hoje",
    title: "Penteados a domicílio em São Paulo",
    text: "Aos 23 anos, atua exclusivamente com penteados em São Paulo e Grande SP, com maquiadoras parceiras quando a cliente deseja a produção completa.",
  },
];

const VALUES = [
  { title: "Técnica apurada", text: "Desenho do penteado, visagismo e fixação pensados para durar da cerimônia ao fim da festa." },
  { title: "Acolhimento", text: "Um atendimento calmo e próximo, com assessoria pelo WhatsApp do primeiro contato ao grande dia." },
  { title: "Emoção do teste ao altar", text: "Cada etapa é vivida com cuidado, do teste de penteado até a saída para a cerimônia." },
  { title: "Dedicação exclusiva", text: "Foco total em penteados, com maquiadoras parceiras de confiança para a produção completa." },
];

export default function SobrePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), personSchema]} />

      {/* HERO */}
      <section className="bg-brand-cream">
        <div className={`${container} grid items-center gap-14 pb-20 pt-10 lg:grid-cols-2 lg:gap-20 lg:pb-28 lg:pt-16`}>
          <div className="text-center lg:text-left">
            <Breadcrumbs items={crumbs} />
            <Eyebrow className="mt-10">Sobre · Hairstylist em São Paulo</Eyebrow>
            <h1 className="mt-6 font-serif text-[2.5rem] font-normal leading-[1.05] tracking-tight text-brand-dark sm:text-6xl lg:text-[4.25rem]">
              Larissa Mendes, <em className="italic text-brand-bronze">penteados</em> com técnica e emoção
            </h1>
            <p className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-stone-600 sm:text-base lg:mx-0">
              Hairstylist especialista em penteados, vencedora do Beleza Experience 2024. Atendimento a domicílio em toda São Paulo e
              Grande SP, unindo técnica apurada, acolhimento e emoção do teste até o altar.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
              <ButtonLink href={waLink()}>Falar com a Larissa</ButtonLink>
              <ButtonLink href={SITE.instagram} variant="outline">
                Instagram {SITE.instagramHandle}
              </ButtonLink>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-brand-sand lg:mx-auto lg:w-[88%]">
              <Image
                src={PHOTOS.larissaPremio.src}
                alt={PHOTOS.larissaPremio.alt}
                priority
                fill
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 448px, 90vw"
                className="object-cover object-top"
                placeholder="blur"
              />
            </div>
            <figcaption className="mt-4 text-center text-[10px] uppercase tracking-[0.35em] text-stone-400">
              Larissa Mendes · Beleza Experience 2024
            </figcaption>
          </figure>
        </div>
      </section>

      {/* TRAJETÓRIA */}
      <section className={`bg-brand-sand ${sectionPad}`}>
        <div className={container}>
          <SectionHeader eyebrow="Trajetória">
            Uma vocação descoberta <em className="italic">cedo</em>
          </SectionHeader>
          <ol className="mx-auto mt-16 max-w-3xl lg:mt-20">
            {TIMELINE.map((item) => (
              <li key={item.when} className="grid gap-3 border-t border-stone-300 py-9 sm:grid-cols-[9rem_1fr] sm:gap-10">
                <p className="font-serif text-3xl italic text-brand-bronze">{item.when}</p>
                <div>
                  <h3 className="font-serif text-2xl text-brand-dark">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone-600 sm:text-base">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRÊMIO (bloco escuro) */}
      <section className={`bg-brand-graphite ${sectionPad}`}>
        <div className={`${container} text-center`}>
          <Eyebrow onDark>Reconhecimento</Eyebrow>
          <blockquote className="mx-auto mt-8 max-w-4xl font-serif text-[2rem] font-normal italic leading-[1.2] text-brand-cream sm:text-5xl">
            Vencedora do Beleza Experience 2024 — o maior prêmio de beleza da América Latina — na categoria{" "}
            <span className="text-brand-gold">Melhor Penteado</span>, pelo voto popular.
          </blockquote>
          <span aria-hidden="true" className="mx-auto mt-10 block h-px w-12 bg-brand-gold" />
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-stone-400">
            Promovido pelo Grupo O Boticário, o prêmio reconhece profissionais que se destacam no mercado da beleza. Um selo de
            excelência técnica levado hoje a cada atendimento.
          </p>
        </div>
      </section>

      {/* COMO TRABALHA */}
      <section className={`bg-brand-stone ${sectionPad}`}>
        <div className={container}>
          <SectionHeader eyebrow="Como a Larissa trabalha" intro="O que guia cada atendimento, do primeiro contato ao grande dia.">
            Técnica, acolhimento e <em className="italic">emoção</em>
          </SectionHeader>
          <NumberedList items={VALUES} />
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section className={`bg-brand-cream ${sectionPad}`}>
        <div className={container}>
          <SectionHeader eyebrow="Portfólio">
            Penteados <em className="italic">assinados</em> pela Larissa
          </SectionHeader>
          <div className="mt-14 lg:mt-16">
            <PortfolioCarousel
              photos={[PHOTOS.foto10, PHOTOS.foto1, PHOTOS.foto6, PHOTOS.foto11, PHOTOS.foto9, PHOTOS.foto5, PHOTOS.foto7, PHOTOS.foto4]}
            />
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className={`bg-brand-sand ${sectionPad}`}>
        <div className={container}>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Serviços</Eyebrow>
            <h2 className={`mt-5 ${h2Class} text-brand-dark`}>
              Atendimentos <em className="italic">a domicílio</em>
            </h2>
          </div>
          <ServiceLinks items={SERVICES.map((s) => ({ href: s.slug, label: s.navLabel }))} />        </div>
      </section>

      <CtaBlock
        eyebrow="Agenda aberta"
        title={["Vamos criar o seu", "penteado", "juntas?"]}
        text="Envie a data e o local do seu evento pelo WhatsApp e converse diretamente com a Larissa."
        primary={{ href: waLink(), label: "Falar com a Larissa" }}
        secondary={{ href: "/perguntas-frequentes", label: "Ver dúvidas frequentes" }}
        photo={PHOTOS.foto12}
      />
    </>
  );
}
