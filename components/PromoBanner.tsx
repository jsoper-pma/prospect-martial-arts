import Link from "next/link";
import { getActivePromo } from "@/lib/promo";

// Calm monthly promo card (content comes from lib/promo.ts). Renders nothing when
// no promo is active. The red full-width top strip style is reserved for
// school closings (components/ClosingBanner.tsx).
// band=true wraps the card in a cream band so it sits directly above a pricing section.
function renderHeadline(h: string, em?: string) {
  if (!em || !h.includes(em)) return h;
  const i = h.indexOf(em);
  return (
    <>
      {h.slice(0, i)}
      <span style={{ color: "#E22D33" }}>{em}</span>
      {h.slice(i + em.length)}
    </>
  );
}

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
      className={`max-w-4xl mx-auto rounded-2xl bg-white border-4 border-l-[10px] px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left ${className}`}
      style={{ boxShadow: "0 0 24px rgba(226,45,51,0.35), 0 0 40px rgba(0,59,111,0.18)", borderColor: "#003B6F", borderLeftColor: "#E22D33", color: "#003B6F" }}
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#E22D33" }}>
          {promo.label ?? "This month\u2019s offer"}
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">{renderHeadline(promo.headline, promo.headlineEmphasis)}</h2>
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
