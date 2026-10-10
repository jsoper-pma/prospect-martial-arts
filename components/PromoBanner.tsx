import Link from "next/link";
import { getActivePromo } from "@/lib/promo";

// Prominent monthly promo banner. Renders nothing when no promo is active.
export default function PromoBanner({ hideCta = false }: { hideCta?: boolean }) {
  const promo = getActivePromo();
  if (!promo) return null;
  return (
    <section
      aria-label="Current promotion"
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(90deg, #E22D33 0%, #b81d23 50%, #E22D33 100%)" }}
    >
      <div className="h-1.5 w-full" style={{ background: "#003B6F" }} />
      <div className="max-w-6xl mx-auto px-4 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="inline-block mb-2 px-3 py-0.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-white" style={{ color: "#E22D33" }}>
            Limited-time offer
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight drop-shadow">{promo.headline}</h2>
          <p className="mt-1 text-lg md:text-xl font-semibold">{promo.text}</p>
        </div>
        {!hideCta && (
          <Link
            href={promo.ctaHref}
            className="shrink-0 px-7 py-3.5 rounded-lg text-lg font-extrabold uppercase tracking-wide text-white shadow-lg ring-2 ring-white hover:scale-105 transition-transform"
            style={{ background: "#003B6F" }}
          >
            {promo.ctaLabel}
          </Link>
        )}
      </div>
      <div className="h-1.5 w-full" style={{ background: "#003B6F" }} />
    </section>
  );
}