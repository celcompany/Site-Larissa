"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/photos";

export default function PortfolioCarousel({ photos }: { photos: Photo[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: reduce ? "auto" : "smooth" });
  };

  const arrow =
    "flex h-12 w-12 items-center justify-center rounded-full border border-stone-400 text-lg text-brand-dark transition-colors hover:border-brand-dark hover:bg-brand-dark hover:text-brand-cream disabled:pointer-events-none disabled:opacity-30";

  return (
    <div role="region" aria-roledescription="carrossel" aria-label="Portfólio de penteados">
      <ul
        ref={track}
        onScroll={update}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] lg:gap-6 [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, i) => (
          <li
            key={photo.caption}
            className="w-[78%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-4.5rem)/4)]"
            aria-label={`${i + 1} de ${photos.length}`}
          >
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-brand-sand">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 78vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              <figcaption className="mt-3 flex gap-3 text-[10px] uppercase tracking-[0.25em] text-stone-600">
                <span className="text-brand-bronze">{String(i + 1).padStart(2, "0")}</span>
                {photo.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button type="button" onClick={() => go(-1)} disabled={!canPrev} aria-label="Fotos anteriores" className={arrow}>
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" onClick={() => go(1)} disabled={!canNext} aria-label="Próximas fotos" className={arrow}>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
