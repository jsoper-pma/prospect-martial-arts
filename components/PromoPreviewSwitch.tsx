"use client";
import { useSearchParams } from "next/navigation";
import { getPreviewPromo, type Promo } from "@/lib/promo";
import PromoCard from "@/components/PromoCard";

export default function PromoPreviewSwitch({
  promo,
  ...props
}: {
  promo: Promo | null;
  hideCta?: boolean;
  band?: boolean;
  className?: string;
}) {
  const params = useSearchParams();
  const preview = getPreviewPromo(params.get("promoPreview"));
  return <PromoCard promo={preview ?? promo} {...props} />;
}
