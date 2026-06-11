import { Phone, MessageCircle } from "lucide-react";
import { telLink, waLink } from "@/lib/business";

export function FloatingCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-end px-4 sm:bottom-6 sm:px-6">
      <div className="pointer-events-auto flex flex-col gap-3">
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-4 py-3 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.03]"
          style={{ animation: "float-y 4s ease-in-out infinite" }}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
        <a
          href={telLink}
          aria-label="Call TMG"
          className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--navy)] px-4 py-3 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.03]"
        >
          <Phone className="h-5 w-5" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </div>
  );
}