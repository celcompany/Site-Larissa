import Image from "next/image";
import Link from "next/link";
import { Arrow, ButtonLink, Eyebrow } from "@/components/ui";
import PortfolioCarousel from "@/components/home/PortfolioCarousel";
import { CtaBlock, DarkSteps, FaqList, SectionHeader, container, h2Class, pad, sectionPad } from "@/components/sections";
import { PHOTOS } from "@/lib/photos";
import { WA_MESSAGES, waLink } from "@/lib/site";
import { COVERAGE, HOME_FAQ, HOME_PORTFOLIO, HOME_SERVICES, HOW_IT_WORKS } from "@/content/home";

/*
 * Ritmo de fundos da Home (regra de contraste da skill design-editorial):
 * Header grafite → Hero cream → Serviços sand → Portfólio stone → Como funciona grafite
 * → Autoridade cream → Cobertura stone → FAQ sand → CTA grafite → Footer dark
 */

const section = sectionPad;
const h2 = h2Class;

/* ───────────────────────── HERO ───────────────────────── */
export function Hero() {
  return (
    <section className="bg-brand-cream">
      <div className={`${container} grid items-center gap-14 pb-20 pt-12 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-20`}>
        <div className="text-center lg:text-left">
          <Eyebrow>Hairstylist · São Paulo e Grande SP</Eyebrow>
          <h1 className="mt-6 font-serif text-[2.75rem] font-normal leading-[1.04] tracking-tight text-brand-dark sm:text-6xl lg:text-[4.75rem]">
            Penteado e Maquiagem <em className="italic text-brand-bronze">a Domicílio</em>
          </h1>
          <p className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-stone-600 sm:text-base lg:mx-0">
            Atendimento em toda São Paulo e Grande SP para noivas, madrinhas e eventos sociais. A estrutura de um camarim
            profissional na sua casa, hotel ou espaço de eventos — com pontualidade e tranquilidade.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <ButtonLink href={waLink()}>Consultar disponibilidade</ButtonLink>
            <ButtonLink href="#servicos" variant="outline" external={false}>
              Conhecer os serviços
            </ButtonLink>
          </div>
          <div className="mt-12 flex items-center justify-center gap-4 lg:justify-start">
            <span className="h-px w-10 bg-brand-gold" aria-hidden="true" />
            <p className="text-left text-[10px] font-medium uppercase leading-relaxed tracking-[0.15em] text-stone-500 sm:text-[11px] sm:tracking-[0.2em]">
              Vencedora Beleza Experience 2024
              <span className="block text-stone-400">Novos Talentos · Penteado</span>
            </p>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
          <div className="relative aspect-[2/3] overflow-hidden rounded-sm bg-brand-sand lg:mx-auto lg:w-[88%]">
            <Image
              src={PHOTOS.hero.src}
              alt={PHOTOS.hero.alt}
              priority
              fill
              sizes="(min-width: 1024px) 42vw, (min-width: 640px) 448px, 90vw"
              className="object-cover"
              placeholder="blur"
            />
          </div>
          <figcaption className="mt-4 text-center text-[10px] uppercase tracking-[0.35em] text-stone-400">
            Noivas · Making of a domicílio
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ───────────────────────── SERVIÇOS ───────────────────────── */
export function Services() {
  const { photo, list } = HOME_SERVICES;
  return (
    <section id="servicos" className={`scroll-mt-20 bg-brand-sand ${section}`}>
      <div className={container}>
        <SectionHeader eyebrow="Serviços">
          Cada ocasião pede <em className="italic">um desenho</em> próprio
        </SectionHeader>

        <div className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm bg-brand-stone lg:col-span-5 lg:max-w-none">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 384px"
              className="object-cover"
              placeholder="blur"
            />
          </div>

          <ul className="lg:col-span-7">
            {list.map((item, i) => (
              <li key={item.service.slug} className="border-t border-stone-300 last:border-b">
                <Link href={item.service.slug} className="group grid grid-cols-[2.25rem_1fr_auto] items-center gap-x-4 py-6 sm:py-7">
                  <span className="font-serif text-sm text-brand-bronze">{pad(i + 1)}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-brand-dark transition-colors group-hover:text-brand-bronze sm:text-[1.75rem]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{item.lead}</p>
                  </div>
                  <Arrow className="text-lg text-stone-400 group-hover:text-brand-bronze" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PORTFÓLIO ───────────────────────── */
export function Portfolio() {
  return (
    <section id="portfolio" className={`scroll-mt-20 bg-brand-stone ${section}`}>
      <div className={container}>
        <SectionHeader eyebrow="Portfólio" intro="Deslize para ver produções recentes feitas na casa, no hotel ou no espaço de eventos das clientes.">
          Produções <em className="italic">reais</em>, feitas a domicílio
        </SectionHeader>
        <div className="mt-14 lg:mt-16">
          <PortfolioCarousel photos={HOME_PORTFOLIO} />
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href={waLink(WA_MESSAGES.referencia)} variant="link">
            Tem uma foto de referência? Envie no WhatsApp <Arrow />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── COMO FUNCIONA ───────────────────────── */
export function HowItWorks() {
  return (
    <section className={`bg-brand-graphite text-stone-300 ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Como funciona"
          onDark
          intro="Você não precisa se deslocar nem enfrentar trânsito antes do evento. A produção acontece no seu espaço, no seu tempo."
        >
          O atendimento <em className="italic">a domicílio</em>, passo a passo
        </SectionHeader>

        <DarkSteps steps={HOW_IT_WORKS} />

        <div className="mt-12 text-center">
          <ButtonLink href={waLink()} variant="gold">
            Começar pelo WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── AUTORIDADE ───────────────────────── */
export function Authority() {
  return (
    <section className={`bg-brand-cream ${section}`}>
      <div className={`${container} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
        <figure className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-brand-sand">
            <Image
              src={PHOTOS.larissaPremio.src}
              alt={PHOTOS.larissaPremio.alt}
              fill
              sizes="(min-width: 1024px) 448px, 384px"
              className="object-cover object-top"
              placeholder="blur"
            />
          </div>
          <figcaption className="mt-4 text-center text-[10px] uppercase tracking-[0.35em] text-stone-400">
            Larissa Mendes · Beleza Experience 2024
          </figcaption>
        </figure>

        <div className="text-center lg:text-left">
          <Eyebrow>A hairstylist</Eyebrow>
          <h2 className={`mt-5 ${h2} text-brand-dark`}>
            Larissa Mendes, <em className="italic">premiada</em> pela técnica em penteados
          </h2>
          <div className="mx-auto mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-stone-600 sm:text-base lg:mx-0">
            <p>
              Especialista em penteados e apaixonada por transformar grandes dias em momentos inesquecíveis. Com anos de dedicação ao
              universo das noivas e dos eventos sociais, o compromisso vai além do visual: tranquilidade, pontualidade rigorosa e uma
              técnica de fixação impecável.
            </p>
            <blockquote className="border-y border-brand-gold/60 py-6 font-serif text-xl italic leading-snug text-brand-dark sm:text-2xl">
              Vencedora do Prêmio Beleza Experience 2024 — Novos Talentos, categoria Penteados.
            </blockquote>
            <p>
              Hoje, essa mesma precisão vai até a sua casa, hotel ou espaço de eventos em São Paulo e Grande SP, com o apoio de
              maquiadoras parceiras de altíssimo padrão.
            </p>
          </div>
          <ButtonLink href="/sobre" variant="link" className="mt-10">
            Conheça a Larissa <Arrow />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── COBERTURA ───────────────────────── */
export function Coverage() {
  return (
    <section className={`bg-brand-stone ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Onde atendemos"
          intro="Levamos a produção completa até você, onde quer que seja o seu evento. A taxa de deslocamento é informada no orçamento, de acordo com o endereço."
        >
          Em toda São Paulo <em className="italic">e Grande SP</em>
        </SectionHeader>

        <ul className="mx-auto mt-16 grid max-w-5xl gap-10 text-center sm:grid-cols-3 sm:gap-8 lg:mt-20 lg:gap-14">
          {COVERAGE.map((item, i) => (
            <li key={item.title} className="border-t border-stone-400/60 pt-8">
              <span className="font-serif text-sm italic text-brand-bronze">{pad(i + 1)}</span>
              <h3 className="mt-2 font-serif text-2xl text-brand-dark">{item.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-stone-600">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center">
          <ButtonLink href={waLink()} variant="link">
            Consultar meu endereço <Arrow />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */
export function Faq() {
  return (
    <section className={`bg-brand-sand ${section}`}>
      <div className={container}>
        <SectionHeader eyebrow="Dúvidas frequentes">
          Antes de <em className="italic">reservar</em>
        </SectionHeader>
        <FaqList items={HOME_FAQ} />
        <div className="mt-12 text-center">
          <ButtonLink href="/perguntas-frequentes" variant="link">
            Todas as perguntas <Arrow />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA FINAL ───────────────────────── */
export function FinalCta() {
  return (
    <CtaBlock
      eyebrow="Agenda aberta"
      title={["Sua data merece", "calma", "e precisão."]}
      text="As datas mais procuradas se esgotam com antecedência. Envie a data e o local do seu evento e receba a disponibilidade pelo WhatsApp."
      primary={{ href: waLink(), label: "Consultar minha data" }}
      secondary={{ href: waLink(WA_MESSAGES.noiva), label: "Sou noiva" }}
      photo={PHOTOS.foto11}
    />
  );
}
