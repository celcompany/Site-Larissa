import ServicePage, { serviceMetadata } from "@/components/service/ServicePage";
import { getServicePage } from "@/content/services";

const page = getServicePage("/penteado-noiva-a-domicilio-sp");

export const metadata = serviceMetadata(page);

export default function Page() {
  return <ServicePage page={page} />;
}
