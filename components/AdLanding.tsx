import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrialSplit from "@/components/TrialSplit";
import TrialConversion from "@/components/TrialConversion";
import NovBogoOffer from "@/components/NovBogoOffer";
import UtmDefaults from "@/components/UtmDefaults";
import ClassPhotos from "@/components/ClassPhotos";
import {
  BF_COPY,
  BF_META,
  NOV_BOGO_START,
  isBfLive,
  isNovBogoLive,
  showBf,
  showNovBogo,
} from "@/lib/promo";
import { ADDRESS, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

// Paid-ad landing page body for /lp/meta and /lp/google. Always noindex; not in nav/sitemap.
// Windows come from lib/promo.ts: November BOGO through NOV_BOGO_END, then the
// Black Friday offer (links to /black-friday checkout) through BLACK_FRIDAY_END.
// Hidden (404) before NOV_BOGO_START unless ?promoPreview=nov or bf. After the
// Black Friday window: plain free-trial wording.

export function getAdLandingMetadata(): Metadata {
  const robots = { index: false as const, follow: false as const };
  if (isBfLive()) {
    return { title: BF_META.title, description: BF_META.description, robots };
  }
  if (isNovBogoLive()) {
    return {
      title: "November Offer: Buy One Month, Get One Free | Prospect Martial Arts",
      description:
        "Sign up for Tang Soo Do in November at Prospect Martial Arts and the following month is free. Book a free trial class in Prospect, CT.",
      robots,
    };
  }
  return {
    title: "Free Tang Soo Do Trial Class | Prospect Martial Arts",
    description: "Book a free Tang Soo Do trial class at Prospect Martial Arts in Prospect, CT.",
    robots,
  };
}

export default function AdLanding({
  source,
  preview,
}: {
  source: "meta" | "google";
  preview: string | string[] | undefined;
}) {
  const bf = showBf(preview);
  const bogo = !bf && showNovBogo(preview);
  if (!bogo && !bf && Date.now() < new Date(NOV_BOGO_START).getTime()) notFound();
  const campaign = bf ? "black-friday" : "nov-bogo";
  const utm = { utm_source: source, utm_medium: "paid", utm_campaign: campaign };
  const bfHref = `${BF_COPY.ctaHref}?utm_source=${source}&utm_medium=paid&utm_campaign=black-friday${
    bf && preview ? "&promoPreview=bf" : ""
  }#checkout`;
  return (
    <>
      <UtmDefaults defaults={utm} />
      <TrialConversion />
      <section className="py-16 px-4 text-center text-white bg-pma-navy">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest bg-pma-red">
            {bf ? BF_COPY.label : bogo ? "November Offer" : "Free Trial Class"}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {bf ? (
              <>
                Train through December 31 for <span style={{ color: "#E22D33" }}>$50</span>
              </>
            ) : bogo ? (
              <>
                Buy One Month, <span style={{ color: "#E22D33" }}>Get One Free</span>
              </>
            ) : (
              <>Try Tang Soo Do Free</>
            )}
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
            {bf
              ? BF_COPY.text
              : bogo
                ? "Book a free Tang Soo Do trial class in Prospect, CT. Sign up in November, and the following month is free."
                : "Book a free Tang Soo Do trial class in Prospect, CT. Nothing to pay to book."}
          </p>
          <a
            href={bf ? bfHref : "#trial"}
            className="inline-block bg-pma-red text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90"
          >
            {bf ? BF_COPY.ctaLabel : "Book Your Free Trial"}
          </a>
          {bf && (
            <p className="mt-4 text-blue-100 text-sm">
              {BF_COPY.endsLine}{" "}
              <a href="#trial" className="underline text-white">Rather try a free class first?</a>
            </p>
          )}
          <p className="mt-6 text-blue-200 text-sm">
            {ADDRESS.street} · {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
          </p>
        </div>
      </section>
      <ClassPhotos />
      {bogo && <NovBogoOffer ctaHref="#trial" />}
      <section id="trial" className="py-16 px-4 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-pma-navy text-center">Claim your free trial</h2>
          <p className="text-gray-600 text-lg mb-8 text-center max-w-3xl mx-auto">
            Pick the program for the student&apos;s age: Little Tigers (3–4), Little Dragons (5–7), Kids &amp; Teens (8+), or
            Adults. Questions? <a href={PHONE_HREF} className="underline">{PHONE_DISPLAY}</a>
          </p>
          <TrialSplit />
        </div>
      </section>
    </>
  );
}
