import type { ReactNode } from "react";
import { getActivePromo, getPreviewPromo } from "@/lib/promo";

// /kids-trial offer wording, driven by the lib/promo.ts windows so it switches with the
// promo card (no rebuild; pages revalidate hourly):
//   oct-50   = October $50 first month (through 2026-10-31 23:59:59 ET)
//   nov-bogo = November Buy One Month, Get One Free (2026-11-01 00:00 to 11-30 23:59:59 ET)
//   none     = plain free-trial wording (no promo active)
export type TrialOfferKey = "oct-50" | "nov-bogo" | "none";
export type TrialOfferSlot = "badge" | "hero" | "step3" | "form";

function keyForPromoId(id: string | undefined): TrialOfferKey {
  if (!id) return "none";
  if (id.startsWith("oct-2026")) return "oct-50";
  if (id.startsWith("nov-2026-bogo")) return "nov-bogo";
  return "none";
}

export function getTrialOfferKey(now: Date = new Date()): TrialOfferKey {
  return keyForPromoId(getActivePromo(now)?.id);
}

// ?promoPreview=nov / nov-last -> November wording (client-side preview only).
export function getPreviewTrialOfferKey(param: string | null | undefined): TrialOfferKey | null {
  const p = getPreviewPromo(param);
  return p ? keyForPromoId(p.id) : null;
}

export const TRIAL_META: Record<TrialOfferKey, { description: string; ogDescription: string }> = {
  "oct-50": {
    description:
      "Book a free Tang Soo Do trial class for preschool and kids in Prospect, CT. Little Tigers, Little Dragons, and kids programs. After the free trial class, the first month is $50.",
    ogDescription:
      "Free trial class for Little Tigers, Little Dragons, and kids. After the free trial, first month is $50. Prospect, CT.",
  },
  "nov-bogo": {
    description:
      "Book a free Tang Soo Do trial class for preschool and kids in Prospect, CT. Buy one month, get one free: join in November, and your second month of Tang Soo Do is free.",
    ogDescription:
      "Free trial class for Little Tigers, Little Dragons, and kids. Join in November, and your second month of Tang Soo Do is free. Prospect, CT.",
  },
  none: {
    description:
      "Book a free Tang Soo Do trial class for preschool and kids in Prospect, CT. Little Tigers, Little Dragons, and kids programs.",
    ogDescription:
      "Free trial class for Little Tigers, Little Dragons, and kids. Prospect, CT.",
  },
};

export const TRIAL_COPY: Record<TrialOfferKey, Record<TrialOfferSlot, ReactNode>> = {
  "oct-50": {
    badge: <>Special Offer · Preschool &amp; Kids</>,
    hero: (
      <>
        Book the free class today. After they try it, the first month is{" "}
        <span className="text-yellow-300">only $50</span>
        <span className="font-normal text-blue-100">
          {" "}
          if you enroll — nothing to pay to book.
        </span>
      </>
    ),
    step3: (
      <>
        <strong className="text-pma-navy">Love it? First month is $50</strong>{" "}
        when you enroll after class. Regular tuition follows — the $50 is never
        required to take the free trial.
      </>
    ),
    form: <>Free trial first · $50 first month only if you enroll after class ·</>,
  },
  "nov-bogo": {
    badge: <>November Offer · Preschool &amp; Kids</>,
    hero: (
      <>
        Buy One Month, Get One Free! Book the free class today. If they love it
        and you join in November,{" "}
        <span className="text-yellow-300">your second month is free</span>
        <span className="font-normal text-blue-100">. Nothing to pay to book.</span>
      </>
    ),
    step3: (
      <>
        <strong className="text-pma-navy">Love it? Your second month is free.</strong>{" "}
        Join in November and pay your first month; the next month is on us.
        Nothing is required to take the free trial.
      </>
    ),
    form: <>Free trial first · 2nd month free when you join by Nov 30 ·</>,
  },
  none: {
    badge: <>Free Trial · Preschool &amp; Kids</>,
    hero: (
      <>
        Book the free class today.
        <span className="font-normal text-blue-100"> Nothing to pay to book.</span>
      </>
    ),
    step3: (
      <>
        <strong className="text-pma-navy">Love it?</strong> We&apos;ll help you
        pick the right program after class. Nothing is required to take the free
        trial.
      </>
    ),
    form: <>Free trial first · No payment to book ·</>,
  },
};
