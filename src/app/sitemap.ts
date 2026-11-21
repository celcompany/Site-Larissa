import type { MetadataRoute } from "next";
import { SERVICES, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

// Rotas publicadas. Adicione aqui conforme cada página for criada.
const LIVE_ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  ...SERVICES.map((s) => ({ path: s.slug, priority: 0.9 })),
  // { path: "/sobre", priority: 0.6 },
  // { path: "/perguntas-frequentes", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return LIVE_ROUTES.map((r) => ({
    url: absoluteUrl(r.path),
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
