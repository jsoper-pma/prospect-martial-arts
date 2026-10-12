import { Suspense } from "react";
import { getTrialOfferKey, TRIAL_COPY, type TrialOfferSlot } from "@/lib/trialOffer";
import TrialOfferSwitch from "@/components/TrialOfferSwitch";

// One offer-wording spot on /kids-trial. Server picks the wording from the promo windows;
// ?promoPreview=nov swaps it client-side for review (no param = server text only).
export default function TrialOffer({ slot }: { slot: TrialOfferSlot }) {
  const key = getTrialOfferKey();
  return (
    <Suspense fallback={TRIAL_COPY[key][slot]}>
      <TrialOfferSwitch offerKey={key} slot={slot} />
    </Suspense>
  );
}
