import Link from "next/link";
import { NAV_LINKS, REGIONS, SERVICES, SITE, waLink } from "@/lib/site";
import { InstagramIcon } from "./Icons";
import MobileMenu from "./MobileMenu";

function Dropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <div className="group relative">
      <button type="button" className="flex items-center gap-1 py-2 transition-colors hover:text-brand-gold" aria-haspopup="true">
        {label}
        <span aria-hidden="true" className="text-[10px]">▾</span>
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <ul className="rounded-xl border border-brand-sand bg-white p-2 shadow-xl">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block rounded-lg px-3 py-2 text-sm text-stone-700 hover:bg-brand-sand hover:text-stone-900">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  const serviceItems = SERVICES.map((s) => ({ href: s.slug, label: s.navLabel }));
  const regionItems = REGIONS.map((r) => ({ href: r.slug, label: r.name }));

  return (
    <header className="sticky top-0 z-40 border-b border-brand-sand bg-brand-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group" aria-label={`${SITE.name} — página inicial`}>
          <span className="block font-serif text-xl font-semibold tracking-wider transition-colors group-hover:text-brand-gold sm:text-2xl">
            LARISSA MENDES
          </span>
          <span className="-mt-1 block text-[10px] font-medium uppercase tracking-[0.25em] text-brand-muted">Hairstylist</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 text-sm font-medium text-stone-700 lg:flex">
          <Dropdown label="Serviços" items={serviceItems} />
          <Dropdown label="Regiões" items={regionItems} />
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-brand-gold">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga Larissa Mendes no Instagram"
            className="text-stone-500 transition-colors hover:text-brand-gold"
          >
            <InstagramIcon />
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-full bg-brand-dark px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-colors duration-300 hover:bg-brand-gold sm:inline-flex"
          >
            Agendar Horário
          </a>
          <MobileMenu services={serviceItems} regions={regionItems} links={[...NAV_LINKS]} />
        </div>
      </div>
    </header>
  );
}
