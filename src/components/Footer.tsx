import Link from "next/link";
import { SERVICES, SITE, waLink } from "@/lib/site";
import { InstagramIcon } from "./Icons";

const FOOTER_LINKS = [
  { href: "/sobre", label: "Sobre a Larissa" },
  { href: "/perguntas-frequentes", label: "Perguntas frequentes" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark py-16 text-stone-300 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
          <div className="space-y-3">
            <Link href="/" className="font-serif text-xl font-semibold tracking-wider text-white">LARISSA MENDES</Link>
            <p className="text-sm leading-relaxed text-stone-400">
              Penteado e maquiagem a domicílio em São Paulo e Grande SP.
            </p>
            <p className="text-[11px] uppercase leading-relaxed tracking-[0.2em] text-brand-gold">
              Vencedora Beleza Experience 2024
              <span className="block text-stone-500">Melhor Penteado · Voto popular</span>
            </p>
          </div>

          <nav aria-label="Serviços">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-gold">Serviços</p>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}><Link href={s.slug} className="hover:text-white">{s.name}</Link></li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-gold">Atendimento</p>
            <p className="text-sm leading-relaxed text-stone-400">
              Toda São Paulo e Grande SP, em residências, suítes de hotéis e espaços de eventos, mediante reserva antecipada.
            </p>
          </div>

          <div className="space-y-3">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-gold">Contato</p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-white">
              WhatsApp {SITE.phoneDisplay}
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-white">
              <InstagramIcon className="h-4 w-4" /> {SITE.instagramHandle}
            </a>
            <ul className="space-y-2.5 pt-2 text-sm">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <p className="pt-8 text-center text-[11px] text-stone-500">
          © {new Date().getFullYear()} {SITE.name}. Atendimento exclusivamente a domicílio, mediante reserva.
        </p>
      </div>
    </footer>
  );
}
