import Link from "next/link";
import { getActivePromo } from "@/lib/promo";

// Calm monthly promo card (content comes from lib/promo.ts). Renders nothing when
// no promo is active. The red full-width top strip style is reserved for
// school closings (components/ClosingBanner.tsx).
// band=true wraps the card in a cream band so it sits directly above a pricing section.
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
  if (!promo) return null;
  const card = (
    <aside
      aria-label="Current promotion"
      className={`max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200 border-l-[6px] shadow-sm px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left ${className}`}
      style={{ borderLeftColor: "#E22D33", color: "#003B6F" }}
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#E22D33" }}>
          This month&apos;s offer
        </p>
        <h2 className="text-xl md:text-2xl font-extrabold leading-snug">{promo.headline}</h2>
        <p className="mt-1 text-base md:text-lg text-slate-600">{promo.text}</p>
      </div>
      {!hideCta && (
        <Link
          href={promo.ctaHref}
          className="shrink-0 px-6 py-3 rounded-full font-bold text-white shadow hover:opacity-90 transition-opacity"
          style={{ background: "#E22D33" }}
        >
          {promo.ctaLabel}
        </Link>
      )}
    </aside>
  );
  if (!band) return card;
  return <div className="bg-pma-cream px-4 pt-12">{card}</div>;
}
