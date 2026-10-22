// Monthly promo banner config.
// To swap: edit CURRENT_PROMO (or add an entry to UPCOMING_PROMOS with active: true
// and dates) - the banner picks the first active promo whose window includes "now".
// Dates are ISO strings with the America/New_York offset. Regular pricing is NOT changed here.

export type Promo = {
  id: string;
  active: boolean;
  label?: string; // small label above headline
  headline: string;
  headlineEmphasis?: string; // substring of headline shown in red
  text: string;
  start: string; // ISO, inclusive
  end: string; // ISO, inclusive
  ctaLabel: string;
  ctaHref: string;
};

// Source: Marketing copy 10/10/2026, reworded per Jason 10/10 (offer for all ages, $50 is the hero).
export const CURRENT_PROMO: Promo = {
  id: "oct-2026-free-trial",
  active: true,
  label: "October Offer",
  headline: "$50 for Your First Month",
  headlineEmphasis: "$50",
  text: "New students of every age pay $50 for their first month of Tang Soo Do. Come try a free class first, then join for $50.",
  start: "2026-10-01T00:00:00-04:00",
  end: "2026-10-31T23:59:59-04:00",
  ctaLabel: "Book Your Free Trial",
  ctaHref: "/kids-trial",
};

// Source: Marketing copy 10/12/2026; November BOGO approved by Jason 10/12 (per Marketing).
// Listed before CURRENT_PROMO so it wins inside its window. The "last chance" entry is listed
// first so it overrides the main November entry Nov 27-30.
// Note: DST ends Nov 1 at 2am, so Nov 1 00:00 is still -04:00; later dates are -05:00.
const NOV_BOGO_BASE = {
  headline: "November at Prospect Martial Arts: Buy One Month, Get One Free!",
  headlineEmphasis: "Get One Free",
  text: "Join in November, and your second month of Tang Soo Do is free.",
  ctaLabel: "Book Your Free Trial",
  ctaHref: "/kids-trial?utm_source=website&utm_campaign=nov-bogo",
};

export const UPCOMING_PROMOS: Promo[] = [
  {
    id: "nov-2026-bogo-last-chance",
    active: true,
    label: "Last chance: ends Monday",
    ...NOV_BOGO_BASE,
    start: "2026-11-27T00:00:00-05:00",
    end: "2026-11-30T23:59:59-05:00",
  },
  {
    id: "nov-2026-bogo",
    active: true,
    label: "November Offer",
    ...NOV_BOGO_BASE,
    start: "2026-11-01T00:00:00-04:00",
    end: "2026-11-30T23:59:59-05:00",
  },
  // NOT APPROVED by Jason - keep active: false. Must not override November BOGO.
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
  // Upcoming first so a specific window (e.g. Nov 27-30 last chance) can override the monthly one.
  const all = [...UPCOMING_PROMOS, CURRENT_PROMO];
  return (
    all.find(
      (p) => p.active && t >= new Date(p.start).getTime() && t <= new Date(p.end).getTime()
    ) ?? null
  );
}

// Preview-only: ?promoPreview=<key> shows that promo early (local review). No param = no effect.
export const PROMO_PREVIEWS: Record<string, string> = {
  nov: "nov-2026-bogo",
  "nov-last": "nov-2026-bogo-last-chance",
};

export function getPreviewPromo(key: string | null | undefined): Promo | null {
  if (!key) return null;
  const id = PROMO_PREVIEWS[key];
  if (!id) return null;
  return [...UPCOMING_PROMOS, CURRENT_PROMO].find((p) => p.id === id) ?? null;
}
