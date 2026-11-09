import {
  getActivePromo,
  isBfLive,
  isNovBogoLive,
  showBf,
  showNovBogo,
  NOV_BOGO_END,
  BLACK_FRIDAY_START,
  BLACK_FRIDAY_END,
} from "../lib/promo";
import { getTrialOfferKey } from "../lib/trialOffer";

type Row = { label: string; iso: string; expect: "nov-2026-bogo" | "black-friday-2026" | null };

const rows: Row[] = [
  { label: "Nov 25 11:59 PM ET", iso: "2026-11-25T23:59:59-05:00", expect: "nov-2026-bogo" },
  { label: "Nov 26 12:00 AM ET", iso: "2026-11-26T00:00:00-05:00", expect: "nov-2026-bogo" },
  { label: "Nov 26 12:00 PM ET", iso: "2026-11-26T12:00:00-05:00", expect: "nov-2026-bogo" },
  { label: "Nov 26 11:59:59 PM ET", iso: "2026-11-26T23:59:59-05:00", expect: "nov-2026-bogo" },
  { label: "Nov 27 12:00 AM ET", iso: "2026-11-27T00:00:00-05:00", expect: "black-friday-2026" },
  { label: "Dec 14 12:00 PM ET", iso: "2026-12-14T12:00:00-05:00", expect: "black-friday-2026" },
  { label: "Dec 14 11:59:59 PM ET", iso: "2026-12-14T23:59:59-05:00", expect: "black-friday-2026" },
  { label: "Dec 15 12:00 AM ET", iso: "2026-12-15T00:00:00-05:00", expect: null },
];

function trialExpect(id: string | null): string {
  if (id === "nov-2026-bogo") return "nov-bogo";
  if (id === "black-friday-2026") return "black-friday";
  return "none";
}

let failed = 0;
console.log(`NOV_BOGO_END=${NOV_BOGO_END}`);
console.log(`BLACK_FRIDAY_START=${BLACK_FRIDAY_START}`);
console.log(`BLACK_FRIDAY_END=${BLACK_FRIDAY_END}`);
console.log("");

for (const row of rows) {
  const now = new Date(row.iso);
  const promo = getActivePromo(now);
  const id = promo?.id ?? null;
  const bogo = isNovBogoLive(now);
  const bf = isBfLive(now);
  const showBogo = showNovBogo(undefined, now);
  const showBlack = showBf(undefined, now);
  const trial = getTrialOfferKey(now);
  const ok =
    id === row.expect &&
    bogo === (row.expect === "nov-2026-bogo") &&
    bf === (row.expect === "black-friday-2026") &&
    showBogo === bogo &&
    showBlack === bf &&
    trial === trialExpect(row.expect);
  if (!ok) failed += 1;
  console.log(
    `${ok ? "PASS" : "FAIL"}  ${row.label.padEnd(24)}  promo=${id ?? "none"}  bogo=${bogo}  bf=${bf}  trial=${trial}  (expected ${row.expect ?? "none"})`
  );
}

console.log("");
console.log(failed === 0 ? "All date checks passed." : `${failed} date check(s) failed.`);
process.exit(failed === 0 ? 0 : 1);
