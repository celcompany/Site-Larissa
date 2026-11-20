import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a Larissa no WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-[#20ba59]"
    >
      <WhatsAppIcon />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-stone-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Fale com a Larissa no WhatsApp
      </span>
    </a>
  );
}
