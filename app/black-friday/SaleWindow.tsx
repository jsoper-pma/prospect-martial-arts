"use client";

import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

// ── Black Friday 2026 flash sale: sale window + checkout slot ─────────
// HIDDEN DRAFT. Nothing here goes live until Jason approves.
//
// Window (Eastern Time, EST in late November = UTC-5):
//   opens  Thu Nov 26, 2026 12:00 AM ET
//   closes Mon Nov 30, 2026 11:59 PM ET (we flip to "ended" at midnight)
//
// The page is statically rendered, so all date logic runs client-side
// after mount. The server render shows a neutral placeholder.
//
// Preview the three states with ?preview=before | open | ended
// (preview only; it does not unlock anything in Gymdesk).
//
// IMPORTANT: this client-side gate only changes what this page shows.
// It does not stop anyone who already has the Gymdesk form link. The
// Gymdesk form / plan must also be hidden after Nov 30 inside Gymdesk.

const SALE_OPENS = new Date("2026-11-26T00:00:00-05:00");
const SALE_CLOSES = new Date("2026-12-01T00:00:00-05:00");

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
const BF_SIGNUP_URL: string = "";

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
          Checkout opens Thanksgiving morning, Thu Nov 26
        </h3>
        <Countdown target={SALE_OPENS} now={now} />
        <p className="mt-6 text-gray-600">
          Want a reminder or have a question? Call or text{" "}
          <a href={PHONE_HREF} className="font-semibold text-pma-navy underline">
            {PHONE_DISPLAY}
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
          Our Black Friday flash sale ended Mon Nov 30
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
        Sale is open · ends Mon Nov 30 at 11:59 PM ET
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
            Check Out: $50
          </a>
          <p className="mt-3 text-xs text-gray-500">
            Secure checkout on our Gymdesk sign-up form. You&apos;ll come right
            back here when you&apos;re done.
          </p>
        </>
      ) : (
        // ── GYMDESK CHECKOUT SLOT (placeholder) ────────────────────────
        // Replace with the Black Friday 2026 Gymdesk website sign-up form
        // link (BF_SIGNUP_URL above). Form should show only the Black
        // Friday plan option(s), collect the card, and redirect back to
        // https://prospectma.com/black-friday?done=1
        <div className="mx-auto max-w-xl rounded-xl border-2 border-dashed border-pma-navy/40 bg-pma-light px-6 py-10 text-pma-navy">
          <p className="font-extrabold text-lg mb-1">
            Gymdesk checkout goes here
          </p>
          <p className="text-sm">
            Placeholder: waiting on the Black Friday 2026 sign-up form link
            from Gymdesk. No payment is collected on this draft.
          </p>
        </div>
      )}

      <p className="mt-6 text-gray-600 text-sm">
        Rather check out by phone? Call or text{" "}
        <a href={PHONE_HREF} className="font-semibold text-pma-navy underline">
          {PHONE_DISPLAY}
        </a>
        .
      </p>
    </div>
  );
}
