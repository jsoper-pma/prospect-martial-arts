// School-closing banner (weather or other circumstances). Separate from the monthly promo.
//
// HOW TO POST A CLOSING (one edit, then push):
//   1. Set active: true
//   2. Set message (and optional detail, e.g. modified hours)
//   3. Set date to today's date "YYYY-MM-DD". The banner auto-hides at 9:00 PM
//      New York time that day (endsAt), even without another push.
//      To end at a different time, set endsAt to an ISO time, e.g. "2026-12-01T21:00:00-05:00".
// HOW TO REMOVE: it removes itself at endsAt. To pull it early, set active: false and push.
// Preview the sample any time: /?preview=closing
//
// While a closing is showing, the monthly promo banner is hidden on the homepage.

export type Closing = {
  active: boolean;
  message: string;
  detail?: string;
  date: string; // YYYY-MM-DD (New York date)
  endsAt?: string; // ISO timestamp; defaults to 9:00 PM New York time on `date`
};

export const closing: Closing = {
  active: false,
  message: "Prospect Martial Arts is closed today due to weather",
  detail: "All Tang Soo Do classes are canceled. Stay safe! Questions? Call (203) 441-5358.",
  date: "2026-10-10",
};

export const sampleClosing: Closing = {
  active: true,
  message: "Prospect Martial Arts is closed today due to weather",
  detail: "All Tang Soo Do classes are canceled. Stay safe! Questions? Call (203) 441-5358.",
  date: "2099-01-01",
};

// 9:00 PM America/New_York on the given date, as a UTC epoch ms (handles EST/EDT).
export function ninePmNewYork(date: string): number {
  const [y, m, d] = date.split("-").map(Number);
  for (const off of [4, 5]) {
    const t = Date.UTC(y, m - 1, d, 21 + off, 0, 0);
    const h = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "numeric", hourCycle: "h23" }).format(new Date(t));
    if (Number(h) === 21) return t;
  }
  return Date.UTC(y, m - 1, d, 26, 0, 0);
}

export function closingEndsAt(c: Closing): number {
  return c.endsAt ? new Date(c.endsAt).getTime() : ninePmNewYork(c.date);
}

export function isClosingActive(c: Closing, now: number = Date.now()): boolean {
  return c.active && now < closingEndsAt(c);
}
