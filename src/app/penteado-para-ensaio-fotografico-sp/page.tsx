import ServicePage, { serviceMetadata } from "@/components/service/ServicePage";
import { getServicePage } from "@/content/services";

const page = getServicePage("/penteado-para-ensaio-fotografico-sp");

export const metadata = serviceMetadata(page);

export default function Page() {
  return <ServicePage page={page} />;
}
