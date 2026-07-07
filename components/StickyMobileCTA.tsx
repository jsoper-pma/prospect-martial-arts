import { Phone } from "lucide-react";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

// Fixed bottom bar on mobile only. Two actions: book a trial (GymDesk)
// and click-to-call.
export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-pma-navy-dark/95 backdrop-blur border-t border-white/10 px-3 py-2.5 flex gap-2 [padding-bottom:calc(0.625rem+env(safe-area-inset-bottom))]">
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-pma-red text-white text-sm font-bold text-center py-3 rounded-full shadow-lg active:opacity-80"
      >
        Book Free Trial
      </a>
      <a
        href={PHONE_HREF}
        className="flex-1 flex items-center justify-center gap-1.5 border-2 border-white/70 text-white text-sm font-bold text-center py-3 rounded-full active:opacity-80"
      >
        <Phone className="w-4 h-4" aria-hidden />
        {PHONE_DISPLAY}
      </a>
    </div>
  );
}
