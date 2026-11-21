import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PortfolioCarousel from "@/components/home/PortfolioCarousel";
import {
  Breadcrumbs,
  CtaBlock,
  DarkSteps,
  FaqList,
  NumberedList,
  SectionHeader,
  TitleText,
  container,
  h2Class,
  pad,
  sectionPad,
} from "@/components/sections";
import { Arrow, ButtonLink, Eyebrow } from "@/components/ui";
import { COVERAGE_TEXT, SERVICE_PAGES, type ServiceContent } from "@/content/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { WA_MESSAGES, waLink } from "@/lib/site";

/*
 * Ritmo de fundos (skill design-editorial):
 * Hero cream → Intro sand → Incluso stone → Processo GRAFITE → Galeria cream → FAQ sand → Outros serviços stone → CTA GRAFITE
 */

export function serviceMetadata(page: ServiceContent): Metadata {
  return pageMetadata({
    title: page.meta.title,
    description: page.meta.description,
    path: page.slug,
    image: page.hero.photo.src.src,
  });
}

export default function ServicePage({ page }: { page: ServiceContent }) {
  const wa = waLink(WA_MESSAGES[page.waKey]);
  const crumbs = [
    { name: "Início", path: "/" },
    { name: page.breadcrumb, path: page.slug },
  ];
  const others = SERVICE_PAGES.filter((p) => p.slug !== page.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: page.schema.name, path: page.slug, description: page.schema.description, serviceType: page.schema.serviceType }),
          breadcrumbSchema(crumbs),
          faqSchema(page.faq),
        ]}
      />

      {/* HERO */}
      <section className="bg-brand-cream">
        <div className={`${container} grid items-center gap-14 pb-20 pt-10 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-16`}>
          <div className="text-center lg:text-left">
            <Breadcrumbs items={crumbs} />
            <Eyebrow className="mt-10">{page.hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-serif text-[2.5rem] font-normal leading-[1.05] tracking-tight text-brand-dark sm:text-6xl lg:text-[4.25rem]">
              <TitleText title={page.hero.h1} emClass="text-brand-bronze" />
            </h1>
            <p className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-stone-600 sm:text-base lg:mx-0">{page.hero.text}</p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
              <ButtonLink href={wa}>{page.hero.cta}</ButtonLink>
              <ButtonLink href="#como-funciona" variant="outline" external={false}>
                Como funciona
              </ButtonLink>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div className="relative aspect-[2/3] overflow-hidden rounded-sm bg-brand-sand lg:mx-auto lg:w-[88%]">
              <Image
                src={page.hero.photo.src}
                alt={page.hero.photo.alt}
                priority
                fill
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 448px, 90vw"
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <figcaption className="mt-4 text-center text-[10px] uppercase tracking-[0.35em] text-stone-400">{page.hero.caption}</figcaption>
          </figure>
        </div>
      </section>

      {/* INTRO */}
      <section className={`bg-brand-sand ${sectionPad}`}>
        <div className={`${container} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm bg-brand-stone lg:max-w-md">
            <Image src={page.intro.photo.src} alt={page.intro.photo.alt} fill sizes="(min-width: 1024px) 448px, 384px" className="object-cover" placeholder="blur" />
          </div>
          <div className="text-center lg:text-left">
            <Eyebrow>{page.intro.eyebrow}</Eyebrow>
            <h2 className={`mt-5 ${h2Class} text-brand-dark`}>
              <TitleText title={page.intro.title} />
            </h2>
            <div className="mx-auto mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-stone-600 sm:text-base lg:mx-0">
              {page.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-xl border-t border-stone-300 pt-6 text-sm text-stone-500 lg:mx-0">{COVERAGE_TEXT}</p>
          </div>
        </div>
      </section>

      {/* INCLUSO / DIFERENCIAIS */}
      <section className={`bg-brand-stone ${sectionPad}`}>
        <div className={container}>
          <SectionHeader eyebrow={page.included.eyebrow} intro={page.included.intro}>
            <TitleText title={page.included.title} />
          </SectionHeader>
          <NumberedList items={page.included.items} />
        </div>
      </section>

      {/* PROCESSO (bloco escuro) */}
      <section id="como-funciona" className={`scroll-mt-20 bg-brand-graphite ${sectionPad}`}>
        <div className={container}>
          <SectionHeader eyebrow={page.process.eyebrow} intro={page.process.intro} onDark>
            <TitleText title={page.process.title} />
          </SectionHeader>
          <DarkSteps steps={page.process.steps} />
          <div className="mt-12 text-center">
            <ButtonLink href={wa} variant="gold">
              {page.hero.cta}
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className={`bg-brand-cream ${sectionPad}`}>
        <div className={container}>
          <SectionHeader eyebrow={page.gallery.eyebrow}>
            <TitleText title={page.gallery.title} />
          </SectionHeader>
          <div className="mt-14 lg:mt-16">
            <PortfolioCarousel photos={page.gallery.photos} />
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href={waLink(WA_MESSAGES.referencia)} variant="link">
              Tem uma foto de referência? Envie no WhatsApp <Arrow />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`bg-brand-sand ${sectionPad}`}>
        <div className={container}>
          <SectionHeader eyebrow="Dúvidas frequentes">
            Perguntas sobre <em className="italic">{page.breadcrumb.toLowerCase()}</em>
          </SectionHeader>
          <FaqList items={page.faq} />
          <div className="mt-12 text-center">
            <ButtonLink href="/perguntas-frequentes" variant="link">
              Todas as perguntas <Arrow />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* OUTROS SERVIÇOS */}
      <section className={`bg-brand-stone ${sectionPad}`}>
        <div className={container}>
          <SectionHeader eyebrow="Outros serviços">
            Também <em className="italic">a domicílio</em>
          </SectionHeader>
          <ul className="mx-auto mt-14 grid max-w-4xl gap-x-16 sm:grid-cols-2 lg:mt-16">
            {others.map((o, i) => (
              <li key={o.slug} className="border-t border-stone-400/60">
                <Link href={o.slug} className="group grid grid-cols-[2.25rem_1fr_auto] items-center gap-x-4 py-6">
                  <span className="font-serif text-sm italic text-brand-bronze">{pad(i + 1)}</span>
                  <span className="font-serif text-2xl text-brand-dark transition-colors group-hover:text-brand-bronze">{o.breadcrumb}</span>
                  <Arrow className="text-lg text-stone-400 group-hover:text-brand-bronze" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock
        eyebrow="Agenda aberta"
        title={page.cta.title}
        text={page.cta.text}
        primary={{ href: wa, label: page.cta.label }}
        secondary={{ href: waLink(WA_MESSAGES.referencia), label: "Enviar referência" }}
        photo={page.cta.photo}
      />
    </>
  );
}
