// Monthly promo banner config.
// To swap: edit CURRENT_PROMO (or add an entry to UPCOMING_PROMOS with active: true
// and dates) - the banner picks the first active promo whose window includes "now".
// Dates are ISO strings with the America/New_York offset. Regular pricing is NOT changed here.

export type Promo = {
  id: string;
  active: boolean;
  headline: string;
  text: string;
  start: string; // ISO, inclusive
  end: string; // ISO, inclusive
  ctaLabel: string;
  ctaHref: string;
};

// Source: Marketing final copy, relayed 10/10/2026.
export const CURRENT_PROMO: Promo = {
  id: "oct-2026-free-trial",
  active: true,
  headline: "October at Prospect Martial Arts: Try a FREE Tang Soo Do Class!",
  text: "Kids get a free trial class, then $50 for their first month.",
  start: "2026-10-01T00:00:00-04:00",
  end: "2026-10-31T23:59:59-04:00",
  ctaLabel: "Book Your Free Trial",
  ctaHref: "/kids-trial",
};

// NOT APPROVED by Jason yet - placeholders only, keep active: false.
// Details from pma-promos/nov-dec-2026-plan.md; copy is TBD until Marketing/Jason sign off.
export const UPCOMING_PROMOS: Promo[] = [
  {
    id: "nov-2026-bogo",
    active: false,
    headline: "TBD - November BOGO (not approved)",
    text: "TBD",
    start: "2026-11-01T00:00:00-04:00",
    end: "2026-11-30T23:59:59-05:00",
    ctaLabel: "TBD",
    ctaHref: "/kids-trial",
  },
  {
    id: "black-friday-2026",
    active: false,
    headline: "TBD - Black Friday flash sale (not approved)",
    text: "TBD",
    start: "2026-11-26T00:00:00-05:00",
    end: "2026-11-30T23:59:59-05:00",
    ctaLabel: "TBD",
    ctaHref: "TBD",
  },
  {
    id: "dec-2026-50-off",
    active: false,
    headline: "TBD - December 50% off (not approved)",
    text: "TBD",
    start: "2026-12-01T00:00:00-05:00",
    end: "2026-12-31T23:59:59-05:00",
    ctaLabel: "TBD",
    ctaHref: "/kids-trial",
  },
];

export function getActivePromo(now: Date = new Date()): Promo | null {
  const t = now.getTime();
  // Upcoming first so a specific window (e.g. Black Friday) can override the monthly one.
  const all = [...UPCOMING_PROMOS, CURRENT_PROMO];
  return (
    all.find(
      (p) => p.active && t >= new Date(p.start).getTime() && t <= new Date(p.end).getTime()
    ) ?? null
  );
}