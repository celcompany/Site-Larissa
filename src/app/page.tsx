import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

// Placeholder da etapa base — a Home completa será construída na próxima etapa.
export const metadata = pageMetadata({
  title: SITE.defaultTitle,
  description: SITE.defaultDescription,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-serif text-4xl font-bold text-stone-900">Penteado e Maquiagem a Domicílio em São Paulo</h1>
      <p className="mt-4 text-brand-muted">Home em construção.</p>
    </section>
  );
}
