import { whatsappUrl } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Ri Thor Homestay on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-1 sm:bottom-7 sm:right-7"
    >
      <span className="grid size-7 place-items-center rounded-full bg-white/15">WA</span>
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}