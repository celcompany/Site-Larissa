import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Eyebrow } from "@/components/ui";
import type { Photo } from "@/lib/photos";

/** Blocos editoriais compartilhados entre Home e páginas internas (skill design-editorial). */

export const container = "mx-auto max-w-6xl px-5 sm:px-8";
export const sectionPad = "py-24 lg:py-32";
export const h2Class = "font-serif text-[2.1rem] font-normal leading-[1.1] tracking-tight sm:text-5xl";
export const pad = (n: number) => String(n).padStart(2, "0");

/** Título com trecho em itálico: [antes, itálico, depois?]. */
export type Title = [string, string, string?];

export function TitleText({ title, emClass = "" }: { title: Title; emClass?: string }) {
  const [before, em, after] = title;
  return (
    <>
      {before}
      {before && " "}
      <em className={`italic ${emClass}`}>{em}</em>
      {after && " "}
      {after}
    </>
  );
}

export function SectionHeader({
  eyebrow,
  children,
  intro,
  onDark = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  intro?: string;
  onDark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2 className={`mt-5 ${h2Class} ${onDark ? "text-brand-cream" : "text-brand-dark"}`}>{children}</h2>
      <span aria-hidden="true" className="mx-auto mt-7 block h-px w-12 bg-brand-gold" />
      {intro && <p className={`mt-7 text-[15px] leading-relaxed ${onDark ? "text-stone-400" : "text-stone-600"}`}>{intro}</p>}
    </div>
  );
}

/** Passos numerados para blocos escuros. */
export function DarkSteps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="mx-auto mt-16 grid max-w-5xl gap-x-16 sm:grid-cols-2 lg:mt-20">
      {steps.map((step, i) => (
        <li key={step.title} className="grid grid-cols-[3.25rem_1fr] gap-x-4 border-t border-white/15 py-9">
          <span className="font-serif text-4xl italic leading-none text-brand-gold">{pad(i + 1)}</span>
          <div>
            <h3 className="font-serif text-2xl text-brand-cream">{step.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-stone-400">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Lista numerada clara (itens inclusos, diferenciais). */
export function NumberedList({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className="mx-auto mt-16 grid max-w-5xl gap-x-16 sm:grid-cols-2 lg:mt-20">
      {items.map((item, i) => (
        <li key={item.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-stone-300 py-8">
          <span className="font-serif text-sm italic text-brand-bronze">{pad(i + 1)}</span>
          <div>
            <h3 className="font-serif text-2xl text-brand-dark">{item.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto mt-14 max-w-3xl lg:mt-16">
      {items.map((item) => (
        <details key={item.q} className="group border-t border-stone-300 last:border-b">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <h3 className="font-serif text-xl leading-snug text-brand-dark sm:text-2xl">{item.q}</h3>
            <span aria-hidden="true" className="text-2xl leading-none text-brand-bronze transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="pb-7 pr-10 text-[15px] leading-relaxed text-stone-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/** CTA final escuro com foto. */
export function CtaBlock({
  eyebrow,
  title,
  text,
  primary,
  secondary,
  photo,
}: {
  eyebrow: string;
  title: Title;
  text: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  photo: Photo;
}) {
  return (
    <section className={`bg-brand-graphite ${sectionPad}`}>
      <div className={`${container} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-sm bg-stone-800 sm:max-w-sm lg:max-w-md">
          <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 448px, 384px" className="object-cover" placeholder="blur" />
        </div>
        <div className="text-center lg:text-left">
          <Eyebrow onDark>{eyebrow}</Eyebrow>
          <h2 className="mt-5 font-serif text-[2.4rem] font-normal leading-[1.05] tracking-tight text-brand-cream sm:text-6xl">
            <TitleText title={title} emClass="text-brand-gold" />
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-stone-400 lg:mx-0">{text}</p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <ButtonLink href={primary.href} variant="gold">
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="outlineLight">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Migalhas de pão visíveis (o Schema BreadcrumbList é emitido pela página). */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Você está em" className="text-[11px] uppercase tracking-[0.2em] text-stone-500">
      <ol className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="text-stone-300">/</span>}
            {i < items.length - 1 ? (
              <Link href={item.path} className="hover:text-brand-bronze">{item.name}</Link>
            ) : (
              <span aria-current="page" className="text-brand-bronze">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
