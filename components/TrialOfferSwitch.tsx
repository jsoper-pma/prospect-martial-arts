"use client";
import { useSearchParams } from "next/navigation";
import {
  getPreviewTrialOfferKey,
  TRIAL_COPY,
  type TrialOfferKey,
  type TrialOfferSlot,
} from "@/lib/trialOffer";

export default function TrialOfferSwitch({
  offerKey,
  slot,
}: {
  offerKey: TrialOfferKey;
  slot: TrialOfferSlot;
}) {
  const params = useSearchParams();
  const preview = getPreviewTrialOfferKey(params.get("promoPreview"));
  return <>{TRIAL_COPY[preview ?? offerKey][slot]}</>;
}
