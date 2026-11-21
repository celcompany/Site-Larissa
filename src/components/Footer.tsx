import Link from "next/link";
import { NAV_LINKS, REGIONS, SERVICES, SITE, waLink } from "@/lib/site";
import { InstagramIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-stone-900 py-16 text-stone-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-stone-800 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link href="/" className="font-serif text-xl font-semibold tracking-wider text-white">LARISSA MENDES</Link>
            <p className="text-sm text-stone-400">
              Penteado e maquiagem a domicílio em São Paulo — Zonas Sul, Oeste e Centro. Atendimento em residências, hotéis e espaços de eventos.
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gold">Vencedora Beleza Experience 2024</p>
          </div>

          <nav aria-label="Serviços">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-gold">Serviços</p>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}><Link href={s.slug} className="hover:text-white">{s.name}</Link></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Regiões atendidas">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-gold">Regiões atendidas</p>
            <ul className="space-y-2 text-sm">
              {REGIONS.map((r) => (
                <li key={r.slug}>
                  <Link href={r.slug} className="hover:text-white">{r.name}</Link>
                  <span className="block text-xs text-stone-500">{r.neighborhoods.slice(0, 4).join(", ")}…</span>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Contato</p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="block text-sm hover:text-white">
              WhatsApp {SITE.phoneDisplay}
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-white">
              <InstagramIcon className="h-4 w-4" /> {SITE.instagramHandle}
            </a>
            <ul className="space-y-2 pt-2 text-sm">
              {NAV_LINKS.map((l) => (
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
