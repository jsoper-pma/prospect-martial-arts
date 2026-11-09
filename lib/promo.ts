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
// NOV_BOGO_END is the single switch for when buy-one-get-one stops. It is currently
// Thursday, November 26, 2026 at 11:59 PM ET. Change this one value if Jason wants
// Wednesday, November 25 instead. Black Friday still starts Friday, November 27
// (BLACK_FRIDAY_START below), so a Nov 25 end would leave Thanksgiving as a gap.
export const NOV_BOGO_START = "2026-11-01T00:00:00-04:00";
export const NOV_BOGO_END = "2026-11-26T23:59:59-05:00";

// Black Friday $50 offer: Friday, November 27, 2026 12:00 AM ET through
// Monday, December 14, 2026 11:59 PM ET. (Dec 14, 2026 is a Monday; the
// public-copy draft had said Sunday — weekdays here are formatted from
// these ISO constants.) All banners, redirects, ad pages, and /black-friday
// read these two constants (and the formatted labels below).
export const BLACK_FRIDAY_START = "2026-11-27T00:00:00-05:00";
export const BLACK_FRIDAY_END = "2026-12-14T23:59:59-05:00";

const ET = "America/New_York";

function formatEt(
  iso: string,
  weekday: "short" | "long",
  month: "short" | "long"
): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: ET,
    weekday,
    month,
    day: "numeric",
    year: "numeric",
  }).formatToParts(new Date(iso));
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";
  return `${get("weekday")} ${get("month")} ${get("day")}, ${get("year")}`;
}

function monthDay(iso: string): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: ET,
    month: "short",
    day: "numeric",
  }).formatToParts(new Date(iso));
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";
  return `${get("month")} ${get("day")}`;
}

/** e.g. "Fri Nov 27, 2026" */
export const BF_START_DISPLAY = formatEt(BLACK_FRIDAY_START, "short", "short");
/** e.g. "Mon Dec 14, 2026" */
export const BF_END_DISPLAY = formatEt(BLACK_FRIDAY_END, "short", "short");
/** e.g. "Monday December 14, 2026" */
export const BF_END_DISPLAY_LONG = formatEt(BLACK_FRIDAY_END, "long", "long");
export const BF_END_WEEKDAY = new Intl.DateTimeFormat("en-US", {
  timeZone: ET,
  weekday: "long",
}).format(new Date(BLACK_FRIDAY_END));
/** e.g. "Nov 27–Dec 14" */
export const BF_WINDOW_SHORT = `${monthDay(BLACK_FRIDAY_START)}–${monthDay(BLACK_FRIDAY_END)}`;

/** First instant after BLACK_FRIDAY_END; use as the exclusive close / countdown target. */
export function blackFridayClosesAt(): Date {
  return new Date(new Date(BLACK_FRIDAY_END).getTime() + 1000);
}

export const BF_META = {
  title: "Black Friday Offer: Train through December 31 for $50",
  description:
    "Train in Tang Soo Do at Prospect Martial Arts through December 31 for $50 per student, uniform included, plus the usual card-processing fee. New students and former students gone more than three months. Offer ends December 14.",
};

// Shared public wording for the banner, promo cards, ad pages, and /black-friday.
// $50 is for training through December 31; a uniform is included. Never say the
// $50 pays for the uniform.
export const BF_COPY = {
  label: `Black Friday Offer · ${BF_WINDOW_SHORT}`,
  headline: "Train through December 31 for $50",
  headlineEmphasis: "$50",
  text:
    "$50 per student to train in Tang Soo Do through December 31, uniform included, plus the usual card-processing fee. For new students and former students gone more than three months. Cannot combine with November buy-one-get-one.",
  subhead:
    "Tang Soo Do at Prospect Martial Arts — uniform included. New students and former students gone more than three months.",
  finePrint: `Offer ${BF_WINDOW_SHORT} · $50 per student · usual card fee added · cannot combine with November buy-one-get-one`,
  endsLine: `Sale ends ${BF_END_DISPLAY} at 11:59 PM ET.`,
  ctaLabel: "Start now",
  ctaHref: "/black-friday",
};

const NOV_BOGO_BASE = {
  headline: "November at Prospect Martial Arts: Buy One Month, Get One Free!",
  headlineEmphasis: "Get One Free",
  text: "Sign up in November, and your following month of Tang Soo Do is free.",
  ctaLabel: "See the November Offer",
  ctaHref: "/november",
};

export const UPCOMING_PROMOS: Promo[] = [
  // Disabled 10/20: would overlap the Black Friday window. Keep active: false.
  {
    id: "nov-2026-bogo-last-chance",
    active: false,
    label: "Last chance: ends Monday",
    ...NOV_BOGO_BASE,
    start: "2026-11-27T00:00:00-05:00",
    end: "2026-11-30T23:59:59-05:00",
  },
  // Checkout slot on /black-friday is still a placeholder
  // (TODO: BF_SIGNUP_URL in app/black-friday/SaleWindow.tsx).
  {
    id: "black-friday-2026",
    active: true,
    ...BF_COPY,
    start: BLACK_FRIDAY_START,
    end: BLACK_FRIDAY_END,
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

/** True while the November BOGO is the live offer (NOV_BOGO_START through NOV_BOGO_END). */
export function isNovBogoLive(now: Date = new Date()): boolean {
  return getActivePromo(now)?.id === "nov-2026-bogo";
}

// Preview-only: ?promoPreview=<key> shows that promo early (local review). No param = no effect.
export const PROMO_PREVIEWS: Record<string, string> = {
  nov: "nov-2026-bogo",
  bf: "black-friday-2026",
};

export function getPreviewPromo(key: string | null | undefined): Promo | null {
  if (!key) return null;
  const id = PROMO_PREVIEWS[key];
  if (!id) return null;
  return [...UPCOMING_PROMOS, CURRENT_PROMO].find((p) => p.id === id) ?? null;
}

/** True during the Black Friday offer (BLACK_FRIDAY_START through BLACK_FRIDAY_END). */
export function isBfLive(now: Date = new Date()): boolean {
  return getActivePromo(now)?.id === "black-friday-2026";
}

/** Black Friday visible for this request: live window, or ?promoPreview=bf. */
export function showBf(previewParam: string | string[] | undefined, now: Date = new Date()): boolean {
  const p = Array.isArray(previewParam) ? previewParam[0] : previewParam;
  return isBfLive(now) || p === "bf";
}

/** BOGO visible for this request: live window, or ?promoPreview=nov. */
export function showNovBogo(previewParam: string | string[] | undefined, now: Date = new Date()): boolean {
  const p = Array.isArray(previewParam) ? previewParam[0] : previewParam;
  return isNovBogoLive(now) || getPreviewPromo(p)?.id === "nov-2026-bogo";
}

// Offer terms shown on /november and the ad landing pages (Marketing brief 10/20).
export const NOV_BOGO_TERMS: string[] = [
  "Sign up in November, and the following month is free.",
  "Autopay is required.",
  "Family discounts stack with this offer.",
  "The Adult Founders rate is included.",
];
