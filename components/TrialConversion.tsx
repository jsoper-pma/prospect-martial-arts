"use client";

import { useEffect, useRef, useState } from "react";
import { META_PIXEL_ID } from "@/lib/site";

// Google Ads conversion (site-wide gtag is loaded in app/layout.tsx).
// TODO(Marketing): replace TRIAL_LABEL_PLACEHOLDER with the conversion label
// from Google Ads > Goals > Conversions for the kids trial booking.
const GOOGLE_ADS_SEND_TO = "AW-17438681850/TRIAL_LABEL_PLACEHOLDER";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Thank-you state for /kids-trial?done=1. Gymdesk's booking form "Redirect URL"
 * sends the visitor here after a completed booking; we fire the conversion
 * events once per page load and show a confirmation note.
 *
 * Meta Pixel base (fbq init + PageView) loads site-wide from app/layout.tsx.
 * This component only fires Lead â€” it must not re-init the pixel.
 */
export default function TrialConversion() {
  const [done, setDone] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("done") !== "1" || fired.current) return;
    fired.current = true;
    setDone(true);

    // fbq is defined in <head>; still retry briefly in case a script was delayed.
    let tries = 0;
    const fireLead = () => {
      if (!META_PIXEL_ID) return;
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead");
      } else if (tries++ < 50) {
        setTimeout(fireLead, 200); // no cleanup: must survive StrictMode re-run
      }
    };
    fireLead();

    if (typeof window.gtag === "function") {
      // enable when Marketing provides the trial conversion label
      // window.gtag("event", "conversion", { send_to: GOOGLE_ADS_SEND_TO });
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
