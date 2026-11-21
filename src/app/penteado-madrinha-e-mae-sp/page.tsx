import ServicePage, { serviceMetadata } from "@/components/service/ServicePage";
import { getServicePage } from "@/content/services";

const page = getServicePage("/penteado-madrinha-e-mae-sp");

export const metadata = serviceMetadata(page);

export default function Page() {
  return <ServicePage page={page} />;
}
