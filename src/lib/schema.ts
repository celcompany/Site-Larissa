import { REGIONS, SERVICES, SITE, absoluteUrl } from "./site";

export const BUSINESS_ID = `${SITE.url}/#business`;
export const WEBSITE_ID = `${SITE.url}/#website`;

const saoPaulo = {
  "@type": "City",
  name: "São Paulo",
  sameAs: "https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo",
};

/** Áreas atendidas: cidade + Grande SP + zonas + bairros (sem endereço físico). */
export const areaServed = [
  saoPaulo,
  {
    "@type": "AdministrativeArea",
    name: "Grande São Paulo",
    alternateName: "Região Metropolitana de São Paulo",
  },
  ...REGIONS.map((r) => ({
    "@type": "AdministrativeArea",
    name: `${r.name} de São Paulo`,
    containedInPlace: saoPaulo,
  })),
  ...REGIONS.flatMap((r) =>
    r.neighborhoods.map((n) => ({
      "@type": "Place",
      name: `${n}, São Paulo - SP`,
    })),
  ),
];

/** Schema global do negócio (área de atendimento, sem address/geo). */
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": BUSINESS_ID,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  image: absoluteUrl(SITE.ogImage),
  logo: absoluteUrl(SITE.ogImage),
  description:
    "Penteado e maquiagem a domicílio em São Paulo e Grande SP para noivas, madrinhas, mães, formandas e ensaios fotográficos. Atendimento em residências, hotéis e espaços de eventos.",
  telephone: SITE.phoneE164,
  priceRange: "$$",
  currenciesAccepted: "BRL",
  award: SITE.award,
  founder: { "@type": "Person", name: "Larissa Mendes", jobTitle: "Hairstylist" },
  sameAs: [SITE.instagram],
  areaServed,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phoneE164,
    contactType: "reservations",
    availableLanguage: "Portuguese",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Beleza a Domicílio",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.schemaName,
        url: absoluteUrl(s.slug),
      },
    })),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  inLanguage: "pt-BR",
  publisher: { "@id": BUSINESS_ID },
};

/** Schema de Service para páginas internas. */
export const serviceSchema = (opts: { name: string; path: string; description: string; serviceType?: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: opts.name,
  serviceType: opts.serviceType ?? opts.name,
  description: opts.description,
  url: absoluteUrl(opts.path),
  provider: { "@id": BUSINESS_ID },
  areaServed,
});

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/sobre#larissa`,
  name: "Larissa Mendes",
  jobTitle: "Hairstylist especialista em penteados",
  url: absoluteUrl("/sobre"),
  image: absoluteUrl("/fotos/larissa-premio.jpeg"),
  award: SITE.award,
  worksFor: { "@id": BUSINESS_ID },
  sameAs: [SITE.instagram],
};

export const faqSchema = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
