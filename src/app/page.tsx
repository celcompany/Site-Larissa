import JsonLd from "@/components/JsonLd";
import { Authority, Faq, FinalCta, Hero, HowItWorks, Portfolio, Regions, Services, Testimonials } from "@/components/home/HomeSections";
import { HOME_FAQ } from "@/content/home";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: SITE.defaultTitle,
  description: SITE.defaultDescription,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQ)} />
      <Hero />
      <Services />
      <Portfolio />
      <HowItWorks />
      <Authority />
      <Regions />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
