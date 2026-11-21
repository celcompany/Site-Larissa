import Image from "next/image";
import Link from "next/link";
import { Arrow, ButtonLink, Eyebrow } from "@/components/ui";
import { PHOTOS } from "@/lib/photos";
import { REGIONS, WA_MESSAGES, waLink } from "@/lib/site";
import { HOME_FAQ, HOME_PORTFOLIO, HOME_SERVICES, HOW_IT_WORKS, TESTIMONIALS } from "@/content/home";

const container = "mx-auto max-w-6xl px-4 sm:px-6";
const h2 = "font-serif text-[2.1rem] font-normal leading-[1.1] tracking-tight text-brand-dark sm:text-5xl";
const pad = (n: number) => String(n).padStart(2, "0");

/* ───────────────────────── HERO ───────────────────────── */
export function Hero() {
  return (
    <section className="overflow-hidden">
      <div className={`${container} pb-20 pt-10 lg:grid lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-16`}>
        <div className="lg:col-span-6 lg:self-center lg:pb-16">
          <Eyebrow>Hairstylist · São Paulo</Eyebrow>
          <h1 className="mt-6 font-serif text-[2.6rem] font-normal leading-[1.04] tracking-tight text-brand-dark sm:text-6xl lg:text-[4.5rem]">
            Penteado e Maquiagem <em className="italic text-brand-bronze">a Domicílio</em> em São Paulo
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-stone-600 sm:text-base">
            Produções de alta durabilidade para noivas, madrinhas e eventos sociais. Toda a estrutura de um camarim profissional
            na sua casa, hotel ou espaço de eventos — com pontualidade e tranquilidade.
          </p>
          <div className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <ButtonLink href={waLink()}>Consultar disponibilidade</ButtonLink>
            <ButtonLink href="#servicos" variant="link" external={false}>
              Conhecer os serviços <Arrow />
            </ButtonLink>
          </div>
          <div className="mt-12 flex items-center gap-4 lg:mt-16">
            <span className="h-px w-10 bg-brand-gold" aria-hidden="true" />
            <p className="text-[11px] font-medium uppercase leading-relaxed tracking-[0.2em] text-stone-500">
              Vencedora Beleza Experience 2024
              <span className="block text-stone-400">Novos Talentos · Penteado</span>
            </p>
          </div>
        </div>

        <figure className="relative mt-14 lg:col-span-6 lg:mt-0">
          <div className="relative ml-8 aspect-[2/3] overflow-hidden rounded-sm bg-brand-sand sm:ml-auto sm:max-w-md lg:max-w-none">
            <Image
              src={PHOTOS.hero.src}
              alt={PHOTOS.hero.alt}
              priority
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
              placeholder="blur"
            />
          </div>
          <figcaption className="mt-4 text-right text-[10px] uppercase tracking-[0.35em] text-stone-400">
            Noivas · Making of a domicílio
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ───────────────────────── SERVIÇOS ───────────────────────── */
export function Services() {
  const { featured, list } = HOME_SERVICES;
  return (
    <section id="servicos" className="scroll-mt-20 border-t border-stone-200 bg-white py-24 lg:py-36">
      <div className={container}>
        <div className="max-w-2xl">
          <Eyebrow>Serviços</Eyebrow>
          <h2 className={`mt-5 ${h2}`}>
            Cada ocasião pede <em className="italic">um desenho</em> próprio
          </h2>
        </div>

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <Link href={featured.service.slug} className="group block lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-brand-sand">
              <Image
                src={featured.photo.src}
                alt={featured.photo.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                placeholder="blur"
              />
            </div>
            <p className="mt-6 font-serif text-sm text-brand-gold">01</p>
            <h3 className="mt-1 font-serif text-3xl text-brand-dark">{featured.title}</h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-stone-600">{featured.lead}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-bronze">
              Penteado de noiva <Arrow />
            </span>
          </Link>

          <ul className="lg:col-span-7 lg:pt-10">
            {list.map((item, i) => (
              <li key={item.service.slug} className="border-t border-stone-200 last:border-b">
                <Link href={item.service.slug} className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-7 sm:py-9">
                  <span className="font-serif text-sm text-brand-gold">{pad(i + 2)}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-brand-dark transition-colors group-hover:text-brand-bronze sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{item.lead}</p>
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
    <section className="py-24 lg:py-36">
      <div className={container}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Eyebrow>Portfólio</Eyebrow>
            <h2 className={`mt-5 ${h2}`}>
              Produções <em className="italic">reais</em>, feitas a domicílio
            </h2>
          </div>
          <ButtonLink href="/portfolio" variant="link">
            Ver portfólio completo <Arrow />
          </ButtonLink>
        </div>

        <div className="mt-14 columns-2 gap-3 sm:gap-5 lg:mt-20 lg:columns-3 lg:gap-8">
          {HOME_PORTFOLIO.map((photo, i) => (
            <figure key={photo.caption} className={`mb-8 break-inside-avoid lg:mb-12 ${i === 1 ? "lg:mt-24" : ""}`}>
              <div className="overflow-hidden rounded-sm bg-brand-sand">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(min-width: 1024px) 30vw, 48vw"
                  className="h-auto w-full"
                  placeholder="blur"
                />
              </div>
              <figcaption className="mt-3 flex gap-3 text-[10px] uppercase tracking-[0.25em] text-stone-500">
                <span className="text-brand-bronze">{pad(i + 1)}</span>
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 border-t border-stone-200 pt-8">
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
    <section className="bg-brand-dark py-24 text-stone-300 lg:py-36">
      <div className={`${container} grid gap-14 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-gold">Como funciona</p>
            <h2 className="mt-5 font-serif text-[2.1rem] font-normal leading-[1.1] tracking-tight text-brand-cream sm:text-5xl">
              O atendimento <em className="italic">a domicílio</em>, do primeiro contato ao grande dia
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-stone-400">
              Você não precisa se deslocar nem enfrentar trânsito antes do evento. A produção acontece no seu espaço, no seu tempo.
            </p>
            <ButtonLink href={waLink()} variant="light" className="mt-10">
              Começar pelo WhatsApp
            </ButtonLink>
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7">
          {HOW_IT_WORKS.map((step, i) => (
            <li key={step.title} className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-white/15 py-9 first:border-t-0 first:pt-0 lg:py-12">
              <span className="font-serif text-4xl italic leading-none text-brand-gold">{pad(i + 1)}</span>
              <div>
                <h3 className="font-serif text-2xl text-brand-cream">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone-400">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────────────────── AUTORIDADE ───────────────────────── */
export function Authority() {
  return (
    <section className="py-24 lg:py-36">
      <div className={`${container} grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16`}>
        <figure className="lg:col-span-5">
          <div className="relative mr-8 aspect-[4/5] overflow-hidden rounded-sm bg-brand-sand sm:mr-0 sm:max-w-sm lg:max-w-none">
            <Image
              src={PHOTOS.larissaPremio.src}
              alt={PHOTOS.larissaPremio.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-top"
              placeholder="blur"
            />
          </div>
          <figcaption className="mt-4 text-[10px] uppercase tracking-[0.35em] text-stone-400">
            Larissa Mendes · Beleza Experience 2024
          </figcaption>
        </figure>

        <div className="lg:col-span-6 lg:col-start-7">
          <Eyebrow>A hairstylist</Eyebrow>
          <h2 className={`mt-5 ${h2}`}>
            Larissa Mendes, <em className="italic">premiada</em> pela técnica em penteados
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-stone-600 sm:text-base">
            <p>
              Especialista em penteados e apaixonada por transformar grandes dias em momentos inesquecíveis. Com anos de dedicação ao
              universo das noivas e dos eventos sociais, o compromisso vai além do visual: tranquilidade, pontualidade rigorosa e uma
              técnica de fixação impecável.
            </p>
            <blockquote className="border-l border-brand-gold py-1 pl-6 font-serif text-xl italic leading-snug text-brand-dark sm:text-2xl">
              Vencedora do Prêmio Beleza Experience 2024 — Novos Talentos, categoria Penteados.
            </blockquote>
            <p>
              Hoje, essa mesma precisão vai até a sua casa, hotel ou espaço de eventos em São Paulo, com o apoio de maquiadoras
              parceiras de altíssimo padrão.
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

/* ───────────────────────── REGIÕES ───────────────────────── */
export function Regions() {
  return (
    <section className="bg-brand-sand py-24 lg:py-36">
      <div className={container}>
        <div className="max-w-3xl">
          <Eyebrow>Regiões atendidas</Eyebrow>
          <h2 className={`mt-5 ${h2}`}>
            A domicílio nas Zonas Sul, Oeste e <em className="italic">Centro</em> de São Paulo
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-3 lg:gap-12">
          {REGIONS.map((region, i) => (
            <div key={region.slug} className={`border-t border-stone-300 pt-8 ${i === 1 ? "lg:mt-16" : ""}`}>
              <Link href={region.slug} className="group">
                <h3 className="font-serif text-3xl text-brand-dark transition-colors group-hover:text-brand-bronze">{region.name}</h3>
              </Link>
              <p className="mt-4 text-[15px] leading-loose text-stone-600">{region.neighborhoods.join(" · ")}</p>
              <ButtonLink href={region.slug} variant="link" className="mt-6">
                Penteado na {region.name} <Arrow />
              </ButtonLink>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-xl text-sm text-stone-500">
          Atendimento em residências, suítes de hotéis e espaços de eventos. A taxa de deslocamento é informada no orçamento, de
          acordo com o seu endereço.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── DEPOIMENTOS ───────────────────────── */
export function Testimonials() {
  const [main, ...rest] = TESTIMONIALS;
  const hasPlaceholder = TESTIMONIALS.some((t) => t.placeholder);
  return (
    <section className="py-24 lg:py-36">
      <div className={container}>
        <Eyebrow>Depoimentos</Eyebrow>
        {hasPlaceholder && (
          <p className="mt-4 inline-block border border-dashed border-brand-bronze px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-bronze">
            Placeholder — substituir por depoimentos reais
          </p>
        )}
        <h2 className="sr-only">Depoimentos de clientes</h2>

        <figure className="mt-10 max-w-4xl">
          <blockquote className="font-serif text-3xl italic leading-[1.25] text-brand-dark sm:text-4xl lg:text-5xl">
            “{main.quote}”
          </blockquote>
          <figcaption className="mt-8 text-[11px] uppercase tracking-[0.25em] text-stone-500">
            <span className="font-semibold text-brand-dark">{main.author}</span> · {main.context}
          </figcaption>
        </figure>

        <div className="mt-16 grid gap-12 border-t border-stone-200 pt-12 sm:grid-cols-2 lg:ml-auto lg:max-w-3xl">
          {rest.map((t, i) => (
            <figure key={i}>
              <blockquote className="font-serif text-xl italic leading-snug text-brand-dark">“{t.quote}”</blockquote>
              <figcaption className="mt-5 text-[11px] uppercase tracking-[0.25em] text-stone-500">
                <span className="font-semibold text-brand-dark">{t.author}</span> · {t.context}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */
export function Faq() {
  return (
    <section className="border-t border-stone-200 bg-white py-24 lg:py-36">
      <div className={`${container} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-4">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className={`mt-5 ${h2}`}>
            Antes de <em className="italic">reservar</em>
          </h2>
          <ButtonLink href="/perguntas-frequentes" variant="link" className="mt-8">
            Todas as perguntas <Arrow />
          </ButtonLink>
        </div>
        <div className="lg:col-span-8">
          {HOME_FAQ.map((item) => (
            <details key={item.q} className="group border-t border-stone-200 last:border-b">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-serif text-xl leading-snug text-brand-dark sm:text-2xl">{item.q}</h3>
                <span aria-hidden="true" className="mt-1 text-xl leading-none text-brand-bronze transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-stone-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA FINAL ───────────────────────── */
export function FinalCta() {
  return (
    <section className="py-24 lg:py-36">
      <div className={`${container} grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16`}>
        <div className="lg:order-2 lg:col-span-7 lg:pb-12">
          <Eyebrow>Agenda aberta</Eyebrow>
          <h2 className="mt-5 font-serif text-[2.4rem] font-normal leading-[1.05] tracking-tight text-brand-dark sm:text-6xl">
            Sua data merece <em className="italic text-brand-bronze">calma</em> e precisão.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-stone-600">
            As datas mais procuradas se esgotam com antecedência. Envie a data e o local do seu evento e receba a disponibilidade pelo
            WhatsApp.
          </p>
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <ButtonLink href={waLink()}>Consultar minha data</ButtonLink>
            <ButtonLink href={waLink(WA_MESSAGES.noiva)} variant="link">
              Sou noiva <Arrow />
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/5] w-2/3 overflow-hidden rounded-sm bg-brand-sand sm:w-1/2 lg:order-1 lg:col-span-5 lg:w-full">
          <Image
            src={PHOTOS.foto11.src}
            alt={PHOTOS.foto11.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 66vw"
            className="object-cover"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}
