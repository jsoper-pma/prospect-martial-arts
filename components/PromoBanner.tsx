import { Suspense } from "react";
import { getActivePromo } from "@/lib/promo";
import PromoCard from "@/components/PromoCard";
import PromoPreviewSwitch from "@/components/PromoPreviewSwitch";

// Calm monthly promo card (content comes from lib/promo.ts). Renders nothing when
// no promo is active. The red full-width top strip style is reserved for
// school closings (components/ClosingBanner.tsx).
// band=true wraps the card in a cream band so it sits directly above a pricing section.
// ?promoPreview=nov / nov-last swaps in that promo client-side for review; without the
// param the server-rendered card (fallback) is exactly what shows.
export default function PromoBanner({
  hideCta = false,
  band = false,
  className = "",
}: {
  hideCta?: boolean;
  band?: boolean;
  className?: string;
}) {
  const promo = getActivePromo();
  const props = { hideCta, band, className };
  return (
    <Suspense fallback={<PromoCard promo={promo} {...props} />}>
      <PromoPreviewSwitch promo={promo} {...props} />
    </Suspense>
  );
}
