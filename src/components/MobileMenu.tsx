"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Item = { href: string; label: string };

export default function MobileMenu({ services, regions, links }: { services: Item[]; regions: Item[]; links: Item[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-800"
      >
        <span aria-hidden="true" className="text-lg leading-none">{open ? "✕" : "☰"}</span>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Menu móvel"
          className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto border-t border-brand-sand bg-brand-cream px-6 py-8"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-gold">Serviços</p>
          <ul className="mb-6 space-y-1">
            {services.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="block py-2 text-base text-stone-800">{i.label}</Link>
              </li>
            ))}
          </ul>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-gold">Regiões</p>
          <ul className="mb-6 space-y-1">
            {regions.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="block py-2 text-base text-stone-800">{i.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-1 border-t border-brand-sand pt-4">
            <li><Link href="/" className="block py-2 text-base text-stone-800">Início</Link></li>
            {links.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="block py-2 text-base text-stone-800">{i.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
