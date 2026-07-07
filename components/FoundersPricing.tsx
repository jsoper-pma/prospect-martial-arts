import { Check } from "lucide-react";
import { TierCard } from "@/components/PricingSection";
import { adultFoundersTier, youthTiers, FOUNDERS_SPOTS } from "@/lib/pricing";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

// Adult pricing: the limited-time Founders card (Gold-level benefits at a
// below-Silver price) with the standard all-ages tiers below for comparison.
export default function FoundersPricing() {
  return (
    <section id="pricing" className="py-16 px-4 bg-pma-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-pma-navy">
          Adult Membership Pricing
        </h2>
        <p className="text-center text-pma-warm-gray mb-10 max-w-xl mx-auto">
          The $139/month Founders rate is a limited-time offer — lock it in while spots last. No
          long-term contracts to start, no hidden fees.
        </p>

        {/* ── Founders card ─────────────────────────────────────── */}
        <div className="relative max-w-xl mx-auto rounded-2xl p-8 shadow-lg ring-2 ring-pma-gold bg-gradient-to-br from-[#fdf8ef] to-[#f5e7cf]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pma-red text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
            FOUNDERS RATE · LIMITED TIME
          </div>
          <p className="text-sm font-bold uppercase tracking-widest mb-3 text-pma-navy">
            Adult Founders Membership
          </p>
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-5xl font-extrabold text-pma-navy">
                {adultFoundersTier.monthly}
                <span className="text-base font-semibold text-pma-warm-gray"> / month</span>
              </p>
              <p className="text-sm font-semibold text-pma-warm-gray mt-1">
                {adultFoundersTier.classes} — a Gold membership for adults
              </p>
            </div>
            <div className="text-center rounded-xl bg-white/80 border border-pma-gold px-5 py-3 shadow-sm">
              <p className="text-lg font-bold text-gray-400 line-through leading-none">
                {FOUNDERS_SPOTS.total}
              </p>
              <p className="text-3xl font-extrabold text-pma-red leading-tight">
                {FOUNDERS_SPOTS.remaining}
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-pma-warm-gray mt-1">
                spots available
              </p>
            </div>
          </div>
          <div className="h-px w-12 my-5 bg-pma-gold" />
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {adultFoundersTier.includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 flex-shrink-0 text-pma-red" aria-hidden />
                <span className="text-sm leading-snug text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Standard pricing comparison ───────────────────────── */}
        <div className="mt-14">
          <h3 className="text-xl md:text-2xl font-extrabold text-center mb-2 text-pma-navy">
            Compare: Standard All-Ages Tang Soo Do Pricing
          </h3>
          <p className="text-center text-pma-warm-gray text-sm mb-8 max-w-lg mx-auto">
            Founders members get unlimited Gold-level training for $50 less per month than the
            standard Gold plan — and $20 less than Silver.
          </p>
          <div className="grid gap-6 max-w-2xl mx-auto pt-4 sm:grid-cols-2">
            {youthTiers.map((tier) => (
              <TierCard key={tier.name} tier={{ ...tier, highlighted: false }} />
            ))}
          </div>
        </div>

        {/* ── Family discounts + CTAs ───────────────────────────── */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-1 font-semibold">
            Family discounts available — and the 5th family member always trains free.
          </p>
          <p className="text-pma-warm-gray text-sm mb-6">
            Questions about pricing or family plans? We&apos;re happy to walk through the options
            with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pma-red text-white font-bold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Book Your Free Trial Class
            </a>
            <a
              href={PHONE_HREF}
              className="inline-block text-pma-navy font-bold px-8 py-4 rounded-full border-2 border-pma-navy hover:bg-pma-navy hover:text-white transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
