import Link from "next/link";
import { NAV_LINKS, SERVICES, SITE, waLink } from "@/lib/site";
import { InstagramIcon } from "./Icons";
import MobileMenu from "./MobileMenu";

function Dropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <div className="group relative">
      <button type="button" className="flex items-center gap-1 py-2 transition-colors hover:text-brand-gold" aria-haspopup="true">
        {label}
        <span aria-hidden="true" className="text-[10px]">▾</span>
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <ul className="rounded-sm border border-white/10 bg-brand-graphite p-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block rounded-sm px-3 py-2.5 text-sm text-stone-300 hover:bg-white/5 hover:text-brand-cream">
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

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-graphite text-stone-300">
      <div className="mx-auto grid h-20 max-w-6xl grid-cols-[1fr_auto] items-center px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="group justify-self-start" aria-label={`${SITE.name} — página inicial`}>
          <span className="block font-serif text-xl font-semibold tracking-wider text-brand-cream transition-colors group-hover:text-brand-gold sm:text-2xl">
            LARISSA MENDES
          </span>
          <span className="-mt-1 block text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">Hairstylist</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm font-medium lg:flex">
          <Dropdown label="Serviços" items={serviceItems} />
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-brand-gold">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-4">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga Larissa Mendes no Instagram"
            className="text-stone-400 transition-colors hover:text-brand-gold"
          >
            <InstagramIcon />
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center whitespace-nowrap rounded-sm bg-brand-gold px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-dark transition-colors duration-300 hover:bg-brand-cream sm:inline-flex"
          >
            Agendar Horário
          </a>
          <MobileMenu services={serviceItems} links={[...NAV_LINKS]} />
        </div>
      </div>
    </header>
  );
}
