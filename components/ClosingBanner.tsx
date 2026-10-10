"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { closing, sampleClosing, isClosingActive, type Closing } from "@/lib/closing";

// Decides on the client (so it expires at endsAt without a rebuild) which closing, if any, applies.
function useClosing(): Closing | null {
  const pathname = usePathname();
  const [current, setCurrent] = useState<Closing | null>(null);
  useEffect(() => {
    const check = () => {
      if (pathname !== "/") return setCurrent(null);
      const preview = new URLSearchParams(window.location.search).get("preview") === "closing";
      const c = preview ? sampleClosing : closing;
      setCurrent(isClosingActive(c) ? c : null);
    };
    check();
    const id = window.setInterval(check, 60_000);
    return () => window.clearInterval(id);
  }, [pathname]);
  return current;
}

// Full-width urgent strip at the very top of the homepage, above the nav.
export default function ClosingBanner() {
  const c = useClosing();
  if (!c) return null;
  return (
    <div role="alert" aria-live="assertive" className="w-full text-white" style={{ background: "#E22D33" }}>
      <div className="h-1 w-full" style={{ background: "#003B6F" }} />
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
        <span className="px-3 py-0.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-white" style={{ background: "#003B6F" }}>
          School closed
        </span>
        <p className="text-lg md:text-2xl font-extrabold leading-tight">{c.message}</p>
        {c.detail && <p className="text-sm md:text-base font-semibold">{c.detail}</p>}
      </div>
      <div className="h-1 w-full" style={{ background: "#003B6F" }} />
    </div>
  );
}

// Wrap the homepage promo: hidden for the day while a closing is showing.
export function HideDuringClosing({ children }: { children: ReactNode }) {
  const c = useClosing();
  return c ? null : <>{children}</>;
}
