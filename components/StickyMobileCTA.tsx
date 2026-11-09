"use client";

import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import BookTrialLink from "@/components/BookTrialLink";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

// Fixed bottom bar on mobile only. Two actions: book a trial (#trial)
// and click-to-call. Hidden on /black-friday so it does not cover the
// promo hero photo (the page already has Start now, free-class, and call CTAs).
export default function StickyMobileCTA() {
  const pathname = usePathname();
  if (pathname?.startsWith("/black-friday")) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-pma-navy-dark/95 backdrop-blur border-t border-white/10 px-3 py-2.5 flex gap-2 [padding-bottom:calc(0.625rem+env(safe-area-inset-bottom))]">
      <BookTrialLink className="flex-1 bg-pma-red text-white text-sm font-bold text-center py-3 rounded-full shadow-lg active:opacity-80">
        Book Free Trial
      </BookTrialLink>
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
