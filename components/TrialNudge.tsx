"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import BookTrialLink from "@/components/BookTrialLink";

// Small desktop-only corner card. Not a modal, not an overlay.
// Shows after ~20s OR ~50% scroll (whichever first). Once per 30 days.
const DISMISS_KEY = "pma-trial-nudge-dismissed";
const INTENT_KEY = "pma-trial-intent";
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
const SHOW_DELAY_MS = 20_000;

function hasRecentDismiss(): boolean {
  try {
    const raw = localStorage.getItem(DISMISS_KEY);
    if (!raw) return false;
    const ts = Number(raw);
    if (!Number.isFinite(ts)) return false;
    return Date.now() - ts < THIRTY_DAYS_MS;
  } catch {
    return false;
  }
}

function hasTrialIntent(): boolean {
  try {
    if (sessionStorage.getItem(INTENT_KEY) === "1") return true;
  } catch {
    // private mode / blocked storage
  }
  return typeof window !== "undefined" && window.location.hash === "#trial";
}

function markTrialIntent() {
  try {
    sessionStorage.setItem(INTENT_KEY, "1");
  } catch {
    // ignore
  }
}

function dismissFor30Days() {
  try {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
  } catch {
    // ignore
  }
}

function isTrialAnchor(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  const a = target.closest("a");
  if (!a) return false;
  const href = a.getAttribute("href") ?? "";
  return href.includes("gymdesk.com/book") || href.includes("#trial");
}

export default function TrialNudge() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);
  const armedRef = useRef(false);

  useEffect(() => {
    if (pathname?.startsWith("/demo")) return;
    if (armedRef.current) return;
    if (hasRecentDismiss() || hasTrialIntent()) return;

    armedRef.current = true;
    let shown = false;
    let timer: number | undefined;
    let enterFrame: number | undefined;

    const cleanupListeners = () => {
      if (timer !== undefined) window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHash);
    };

    const hideCard = () => {
      setEntered(false);
      setVisible(false);
    };

    const suppressForSession = () => {
      markTrialIntent();
      if (shown) hideCard();
      cleanupListeners();
    };

    const show = () => {
      if (shown) return;
      if (hasRecentDismiss() || hasTrialIntent()) return;
      shown = true;
      cleanupListeners();
      setVisible(true);
      enterFrame = window.requestAnimationFrame(() => {
        enterFrame = window.requestAnimationFrame(() => setEntered(true));
      });
    };

    function onScroll() {
      const height = document.documentElement.scrollHeight;
      if (height <= 0) return;
      if (window.scrollY + window.innerHeight >= height * 0.5) show();
    }

    function onClick(e: MouseEvent) {
      if (isTrialAnchor(e.target)) suppressForSession();
    }

    function onHash() {
      if (window.location.hash === "#trial") suppressForSession();
    }

    timer = window.setTimeout(show, SHOW_DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHash);

    return () => {
      cleanupListeners();
      if (enterFrame !== undefined) window.cancelAnimationFrame(enterFrame);
    };
  }, [pathname]);

  if (pathname?.startsWith("/demo") || !visible) return null;

  const dismiss = () => {
    dismissFor30Days();
    setEntered(false);
    setVisible(false);
  };

  return (
    <aside
      className={`hidden md:block fixed bottom-6 right-6 z-40 w-[300px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden transition-transform duration-500 ease-out ${
        entered ? "translate-x-0" : "translate-x-[120%]"
      }`}
      role="complementary"
      aria-label="Book a free trial class"
    >
      <div className="bg-pma-navy px-4 py-3 flex items-start justify-between gap-3">
        <p className="text-white font-extrabold text-sm leading-snug pt-0.5">
          Your first class is free
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="flex-shrink-0 w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" aria-hidden />
        </button>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Come try Tang Soo Do with us. No experience needed — we welcome new students of every age.
        </p>
        <BookTrialLink
          onClick={() => {
            markTrialIntent();
            dismiss();
          }}
          className="block w-full bg-pma-red text-white text-sm font-bold text-center py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Book Free Trial
        </BookTrialLink>
      </div>
    </aside>
  );
}