import type { Metadata } from "next";
import { SITE } from "./site";

/** Metadata padrão por página — sempre com canonical próprio. */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  absoluteTitle?: boolean;
}): Metadata {
  const image = opts.image ?? SITE.ogImage;
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      url: opts.path,
      title: opts.title,
      description: opts.description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}
