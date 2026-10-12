"use client";

import { useEffect, useRef, useState } from "react";

// Meta Pixel ID for prospectma.com.
// TODO(Marketing/Jason): no Meta Pixel is installed on the site yet. Paste the
// pixel ID from Meta Events Manager here (e.g. "123456789012345") to load the
// base code and fire Lead. While null, no Meta code loads and nothing breaks.
const META_PIXEL_ID: string | null = null;

// Google Ads conversion (site-wide gtag is loaded in app/layout.tsx).
// TODO(Marketing): replace TRIAL_LABEL_PLACEHOLDER with the conversion label
// from Google Ads > Goals > Conversions for the kids trial booking.
const GOOGLE_ADS_SEND_TO = "AW-17438681850/TRIAL_LABEL_PLACEHOLDER";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: unknown;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
    gtag?: (...args: unknown[]) => void;
  }
}

function loadMetaPixel(id: string) {
  if (window.fbq) return;
  const n: Fbq = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod(...args);
    else n.queue!.push(args);
  } as Fbq;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  window.fbq = n;
  if (!window._fbq) window._fbq = n;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  n("init", id);
  n("track", "PageView");
}

/**
 * Thank-you state for /kids-trial?done=1. Gymdesk's booking form "Redirect URL"
 * sends the visitor here after a completed booking; we fire the conversion
 * events once per page load and show a confirmation note.
 */
export default function TrialConversion() {
  const [done, setDone] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("done") !== "1" || fired.current) return;
    fired.current = true;
    setDone(true);

    if (META_PIXEL_ID) {
      loadMetaPixel(META_PIXEL_ID);
      if (typeof window.fbq === "function") window.fbq("track", "Lead");
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: GOOGLE_ADS_SEND_TO });
      window.gtag("event", "generate_lead");
    }
  }, []);

  if (!done) return null;

  return (
    <div className="bg-green-50 border-b-4 border-green-600 px-4 py-6 text-center" role="status">
      <p className="text-2xl font-extrabold text-pma-navy">You&apos;re booked! Thank you.</p>
      <p className="text-gray-700 mt-1">
        Check your email for your free trial class details. We can&apos;t wait to meet you.
      </p>
    </div>
  );
}
