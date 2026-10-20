import { NOV_BOGO_TERMS } from "@/lib/promo";

// Shared November BOGO offer block (headline + terms) for /november and /lp/*.
export default function NovBogoOffer({ ctaHref, ctaLabel = "Book Your Free Trial" }: { ctaHref: string; ctaLabel?: string }) {
  return (
    <section className="py-12 px-4 bg-pma-cream" aria-label="November offer details">
      <div
        className="max-w-3xl mx-auto rounded-2xl bg-white border-4 border-l-[10px] px-6 py-7 md:px-10"
        style={{ borderColor: "#003B6F", borderLeftColor: "#E22D33", color: "#003B6F" }}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">How the November offer works</h2>
        <ul className="space-y-3 text-gray-700">
          {NOV_BOGO_TERMS.map((t) => (
            <li key={t} className="flex gap-3">
              <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center" style={{ background: "#E22D33" }}>
                ✓
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <a href={ctaHref} className="inline-block px-8 py-3 rounded-full font-bold text-white shadow hover:opacity-90" style={{ background: "#E22D33" }}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
