"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";

type Item = { href: string; label: string };

export default function MobileMenu({ services, links }: { services: Item[]; links: Item[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const item = "block py-2.5 font-serif text-2xl text-brand-cream";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-brand-cream"
      >
        <span aria-hidden="true" className="text-lg leading-none">{open ? "✕" : "☰"}</span>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Menu móvel"
          className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto border-t border-white/10 bg-brand-graphite px-6 py-10 text-center"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-gold">Serviços</p>
          <ul className="mb-8">
            {services.map((i) => (
              <li key={i.href}>
                <Link href={i.href} onClick={close} className={item}>{i.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="border-t border-white/10 pt-6">
            <li><Link href="/" onClick={close} className={item}>Início</Link></li>
            {links.map((i) => (
              <li key={i.href}>
                <Link href={i.href} onClick={close} className={item}>{i.label}</Link>
              </li>
            ))}
          </ul>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-sm bg-brand-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-dark"
          >
            Agendar Horário
          </a>
        </nav>
      )}
    </div>
  );
}
