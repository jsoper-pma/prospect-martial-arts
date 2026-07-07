import { Check } from "lucide-react";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import type { PricingTier } from "@/lib/pricing";

function TierCard({ tier }: { tier: PricingTier }) {
  const highlighted = tier.highlighted;
  return (
    <div
      className={`rounded-2xl p-6 shadow-md flex flex-col relative ${
        highlighted ? "bg-pma-navy text-white ring-2 ring-pma-gold" : "bg-white border border-gray-200"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pma-red text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
          BEST VALUE
        </div>
      )}
      <p
        className={`text-sm font-bold uppercase tracking-widest mb-1 ${
          highlighted ? "text-pma-gold" : "text-pma-warm-gray"
        }`}
      >
        {tier.name}
      </p>
      <p className={`text-4xl font-extrabold mb-1 ${highlighted ? "text-white" : "text-pma-navy"}`}>
        {tier.monthly}
        <span className={`text-base font-semibold ${highlighted ? "text-blue-200" : "text-gray-400"}`}>
          {" "}
          / month
        </span>
      </p>
      <p className={`text-sm mb-4 ${highlighted ? "text-blue-200" : "text-gray-500"}`}>{tier.classes}</p>
      <div className={`h-px w-12 mb-4 ${highlighted ? "bg-pma-gold" : "bg-gray-300"}`} />
      <ul className="space-y-2 flex-1">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check
              className={`w-4 h-4 mt-1 flex-shrink-0 ${highlighted ? "text-pma-gold" : "text-pma-red"}`}
              aria-hidden
            />
            <span className={`text-sm leading-snug ${highlighted ? "text-blue-100" : "text-gray-600"}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingSection({
  title = "Membership Pricing",
  subtitle,
  tiers,
  note,
}: {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
  note?: string;
}) {
  return (
    <section id="pricing" className="py-16 px-4 bg-pma-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-pma-navy">{title}</h2>
        {subtitle && <p className="text-center text-pma-warm-gray mb-10 max-w-xl mx-auto">{subtitle}</p>}
        <div
          className={`grid gap-6 max-w-2xl mx-auto pt-4 ${
            tiers.length > 1 ? "sm:grid-cols-2" : "sm:max-w-sm"
          }`}
        >
          {tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-1 font-semibold">
            Family discounts available — and the 5th family member always trains free.
          </p>
          <p className="text-pma-warm-gray text-sm mb-6">
            {note ??
              "Questions about pricing or family plans? We're happy to walk through the options with you."}
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
