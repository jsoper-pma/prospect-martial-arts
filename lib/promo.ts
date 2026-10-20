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

// November BOGO (Marketing 10/12 + 10/20 launch brief). Card/banner links to the /november
// landing page. Note: DST ends Nov 1 at 2am, so Nov 1 00:00 is still -04:00; later dates -05:00.
//
// Black Friday flash sale (Nov 26-30 ET) replaces BOGO in all messaging that week, so the
// BOGO window ends Nov 25 23:59:59 ET. The old "Last chance: ends Monday" (Nov 27-30) variant
// is disabled because it falls inside the Black Friday week.
export const NOV_BOGO_START = "2026-11-01T00:00:00-04:00";
export const NOV_BOGO_END = "2026-11-25T23:59:59-05:00";
export const BLACK_FRIDAY_START = "2026-11-26T00:00:00-05:00";
export const BLACK_FRIDAY_END = "2026-11-30T23:59:59-05:00";

const NOV_BOGO_BASE = {
  headline: "November at Prospect Martial Arts: Buy One Month, Get One Free!",
  headlineEmphasis: "Get One Free",
  text: "Sign up in November, and your following month of Tang Soo Do is free.",
  ctaLabel: "See the November Offer",
  ctaHref: "/november",
};

export const UPCOMING_PROMOS: Promo[] = [
  // Disabled 10/20: overlaps Black Friday week (Nov 26-30). Keep active: false.
  {
    id: "nov-2026-bogo-last-chance",
    active: false,
    label: "Last chance: ends Monday",
    ...NOV_BOGO_BASE,
    start: "2026-11-27T00:00:00-05:00",
    end: "2026-11-30T23:59:59-05:00",
  },
  // TODO(Black Friday): fill in headline/text/CTA from Marketing's checkout details and set
  // active: true after Jason approves. Until then Nov 26-30 falls back to plain free-trial wording.
  {
    id: "black-friday-2026",
    active: false,
    headline: "TBD - Black Friday flash sale (not approved)",
    text: "TBD",
    start: BLACK_FRIDAY_START,
    end: BLACK_FRIDAY_END,
    ctaLabel: "TBD",
    ctaHref: "TBD",
  },
  {
    id: "nov-2026-bogo",
    active: true,
    label: "This month\u2019s promotion",
    ...NOV_BOGO_BASE,
    start: NOV_BOGO_START,
    end: NOV_BOGO_END,
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
  const all = [...UPCOMING_PROMOS, CURRENT_PROMO];
  return (
    all.find(
      (p) => p.active && t >= new Date(p.start).getTime() && t <= new Date(p.end).getTime()
    ) ?? null
  );
}

/** True while the November BOGO is the live offer (Nov 1 - Nov 25 ET). */
export function isNovBogoLive(now: Date = new Date()): boolean {
  return getActivePromo(now)?.id === "nov-2026-bogo";
}

// Preview-only: ?promoPreview=<key> shows that promo early (local review). No param = no effect.
export const PROMO_PREVIEWS: Record<string, string> = {
  nov: "nov-2026-bogo",
};

export function getPreviewPromo(key: string | null | undefined): Promo | null {
  if (!key) return null;
  const id = PROMO_PREVIEWS[key];
  if (!id) return null;
  return [...UPCOMING_PROMOS, CURRENT_PROMO].find((p) => p.id === id) ?? null;
}

/** BOGO visible for this request: live window, or ?promoPreview=nov. */
export function showNovBogo(previewParam: string | string[] | undefined, now: Date = new Date()): boolean {
  const p = Array.isArray(previewParam) ? previewParam[0] : previewParam;
  return isNovBogoLive(now) || getPreviewPromo(p)?.id === "nov-2026-bogo";
}

// Offer terms shown on /november and the ad landing pages (Marketing brief 10/20).
export const NOV_BOGO_TERMS: string[] = [
  "Sign up in November, and the following month is free.",
  "Former students qualify after 90 days away from training.",
  "Training must start by December 7.",
  "Autopay is required.",
  "Family discounts stack with this offer.",
  "The Adult Founders rate is included.",
];
