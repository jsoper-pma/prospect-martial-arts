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

// Turns "(203) 441-5358" in the text into a tap-to-call tel: link.
function withPhoneLink(text: string): ReactNode {
  const m = text.match(/\(?(\d{3})\)?[\s.-]*(\d{3})[\s.-]*(\d{4})/);
  if (!m || m.index === undefined) return text;
  return (
    <>
      {text.slice(0, m.index)}
      <a href={`tel:+1${m[1]}${m[2]}${m[3]}`} className="underline underline-offset-2 whitespace-nowrap hover:text-white/90">
        {m[0]}
      </a>
      {text.slice(m.index + m[0].length)}
    </>
  );
}

// Full-width urgent strip on the homepage, directly below the nav bar.
// Line 1 (main message) large and bold; line 2 stacked underneath. Always centered, never side by side.
export default function ClosingBanner() {
  const c = useClosing();
  if (!c) return null;
  return (
    <div role="alert" aria-live="assertive" className="w-full text-white" style={{ background: "#E22D33" }}>
      <div className="h-1 w-full" style={{ background: "#003B6F" }} />
      <div className="w-full px-4 py-5 md:py-7 flex flex-col items-center justify-center gap-2 md:gap-3 text-center">
        <p className="w-full text-2xl md:text-4xl font-black leading-tight tracking-tight">{c.message}</p>
        {c.detail && <p className="w-full text-base md:text-xl font-semibold leading-snug">{withPhoneLink(c.detail)}</p>}
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
