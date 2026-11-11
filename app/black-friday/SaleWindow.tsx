"use client";

import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import {
  BLACK_FRIDAY_START,
  BF_END_DISPLAY,
  BF_END_DISPLAY_LONG,
  BF_START_DISPLAY,
  blackFridayClosesAt,
} from "@/lib/promo";

// ── Black Friday 2026 $50 offer: sale window + checkout slot ──────────
// HIDDEN DRAFT. Nothing here goes live until Jason approves.
//
// Window comes from lib/promo.ts (BLACK_FRIDAY_START / BLACK_FRIDAY_END).
// The page is statically rendered, so all date logic runs client-side
// after mount. The server render shows a compact placeholder (not a tall frame).
//
// Preview the three states with ?preview=before | open | ended
// (preview only; it does not unlock anything in Gymdesk).
//
// IMPORTANT: this client-side gate only changes what this page shows.
// It does not stop anyone who already has the Gymdesk form link. The
// Gymdesk form / plan must also be hidden after BLACK_FRIDAY_END inside Gymdesk.

const SALE_OPENS = new Date(BLACK_FRIDAY_START);
const SALE_CLOSES = blackFridayClosesAt();

// TODO(Jason/Chuck): paste the standalone URL of the dedicated Gymdesk
// "Black Friday 2026" WEBSITE SIGN-UP FORM here once it is created in
// Gymdesk (Settings → Members → Sign Up Forms → right-click the form name
// → copy link). Do not invent an ID. Leave "" until the real form exists.
//
// Why a link and not an iframe: Gymdesk's hosted sign-up and shop pages
// send "X-Frame-Options: SAMEORIGIN" (checked Oct 7, 2026), so they can't
// be framed on prospectma.com. app.gymdesk.com/js/widgets.js only offers
// booking, schedule, lead-form, and popup widgets, not a paid sign-up.
// The existing GymDeskWidget (/kids-trial) is the free-trial BOOKING
// widget (gym AngPo / form Ayw2q) and must not be reused for this.
const BF_SIGNUP_URL: string = "https://prospect-martial-arts.gymdesk.com/signup/v/D0Vnm";

type Phase = "loading" | "before" | "open" | "ended";

function phaseFor(now: Date): Exclude<Phase, "loading"> {
  if (now < SALE_OPENS) return "before";
  if (now < SALE_CLOSES) return "open";
  return "ended";
}

function remaining(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function Countdown({ target, now }: { target: Date; now: Date }) {
  const r = remaining(target.getTime() - now.getTime());
  const cells: [number, string][] = [
    [r.days, "days"],
    [r.hours, "hours"],
    [r.minutes, "min"],
    [r.seconds, "sec"],
  ];
  return (
    <div className="flex justify-center gap-3" aria-live="off">
      {cells.map(([n, label]) => (
        <div
          key={label}
          className="w-20 rounded-xl bg-pma-navy text-white py-3 text-center shadow"
        >
          <div className="text-3xl font-extrabold tabular-nums">
            {String(n).padStart(2, "0")}
          </div>
          <div className="text-xs uppercase tracking-widest text-blue-200">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SaleWindow() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [now, setNow] = useState<Date | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preview = params.get("preview") ?? (params.get("promoPreview") === "bf" ? "open" : null);
    setDone(params.get("done") === "1");

    const tick = () => {
      const t = new Date();
      setNow(t);
      if (preview === "before" || preview === "open" || preview === "ended") {
        setPhase(preview);
      } else {
        setPhase(phaseFor(t));
      }
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (done) {
    return (
      <div className="rounded-2xl bg-white border border-pma-navy/20 px-6 py-8 text-center shadow-sm">
        <h3 className="text-2xl font-extrabold text-pma-navy mb-2">
          You&apos;re in. Welcome to Prospect Martial Arts!
        </h3>
        <p className="text-gray-700">
          We&apos;ll reach out soon to set your class times
          and uniform size. Questions? Call or text{" "}
          <a href={PHONE_HREF} className="font-semibold underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    );
  }

  if (phase === "loading" || !now) {
    return <div className="min-h-[220px]" aria-hidden="true" />;
  }

  if (phase === "before") {
    return (
      <div className="rounded-2xl bg-white border border-gray-200 px-6 py-8 text-center shadow-sm">
        <p className="text-sm font-bold uppercase tracking-widest text-pma-red mb-2">
          Sale not open yet
        </p>
        <h3 className="text-2xl font-extrabold text-pma-navy mb-5">
          Checkout opens {BF_START_DISPLAY}
        </h3>
        <Countdown target={SALE_OPENS} now={now} />
        <p className="mt-6 text-gray-600">
          Want a reminder or have a question? Call or text{" "}
          <a href={PHONE_HREF} className="font-semibold text-pma-navy underline">
            {PHONE_DISPLAY}
          </a>
          . You can also{" "}
          <a href="/kids-trial" className="font-semibold text-pma-navy underline">
            book a free first class
          </a>
          .
        </p>
      </div>
    );
  }

  if (phase === "ended") {
    return (
      <div className="rounded-2xl bg-white border border-gray-200 px-6 py-8 text-center shadow-sm">
        <p className="text-sm font-bold uppercase tracking-widest text-pma-red mb-2">
          Sale ended
        </p>
        <h3 className="text-2xl font-extrabold text-pma-navy mb-3">
          Our Black Friday offer ended {BF_END_DISPLAY_LONG}
        </h3>
        <p className="text-gray-700 mb-6">
          Thank you to every family who joined us. Your first Tang Soo Do class
          is still free, so come try one with us.
        </p>
        <a
          href="/kids-trial"
          className="inline-block bg-pma-red text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Book a Free Class
        </a>
      </div>
    );
  }

  // phase === "open"
  return (
    <div className="rounded-2xl bg-white border border-pma-red/40 px-6 py-8 text-center shadow-sm">
      <p className="text-sm font-bold uppercase tracking-widest text-pma-red mb-2">
        Sale is open · ends {BF_END_DISPLAY} at 11:59 PM ET
      </p>
      <div className="mb-6">
        <Countdown target={SALE_CLOSES} now={now} />
      </div>

      {BF_SIGNUP_URL ? (
        <>
          <a
            href={BF_SIGNUP_URL}
            className="inline-block bg-pma-red text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            Start now: $50
          </a>
          <p className="mt-3 text-xs text-gray-500">
            Secure checkout on our Gymdesk sign-up form. A family of four
            pays only $200. You&apos;ll come right back here when you&apos;re
            done.
          </p>
        </>
      ) : (
        // ── GYMDESK CHECKOUT SLOT ──────────────────────────────────────
        // Paste the Black Friday 2026 Gymdesk website sign-up form link
        // into BF_SIGNUP_URL above. Until that URL is set, this button
        // stays disabled so it never falls back to the free-trial booking
        // form. Form should show only the Black Friday plan option(s),
        // collect the card, and redirect back to
        // https://prospectma.com/black-friday?done=1
        <>
          <span
            role="button"
            aria-disabled="true"
            className="inline-block bg-pma-red/50 text-white font-bold text-lg px-10 py-4 rounded-full cursor-not-allowed shadow-lg"
          >
            Sign up coming soon
          </span>
          <p className="mt-3 text-xs text-gray-500">
            Checkout opens here once the sign-up link is ready. A family of
            four pays only $200.
          </p>
        </>
      )}

      <p className="mt-6 text-gray-600 text-sm">
        Rather check out by phone? Call or text{" "}
        <a href={PHONE_HREF} className="font-semibold text-pma-navy underline">
          {PHONE_DISPLAY}
        </a>
        . Or{" "}
        <a href="/kids-trial" className="font-semibold text-pma-navy underline">
          book a free first class
        </a>
        .
      </p>
    </div>
  );
}
