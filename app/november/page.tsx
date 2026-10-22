import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import NovBogoOffer from "@/components/NovBogoOffer";
import { isBfLive, isNovBogoLive, showNovBogo } from "@/lib/promo";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

// November BOGO landing page. Hidden (404) before Nov 1 00:00 ET and again from Nov 26
// (Black Friday week, redirect) unless ?promoPreview=nov. noindex until the offer is live.
// Nov 26-30 (Black Friday week) /november redirects to /black-friday; ?promoPreview=bf previews that.
const CTA = "/kids-trial?utm_source=website&utm_campaign=nov-bogo";

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export async function generateMetadata(): Promise<Metadata> {
  const live = isNovBogoLive();
  return {
    title: "November Offer: Buy One Month, Get One Free | Prospect Martial Arts",
    description:
      "Sign up for Tang Soo Do in November at Prospect Martial Arts and the following month is free. Book a free trial class in Prospect, CT.",
    alternates: { canonical: "/november" },
    robots: live ? { index: true, follow: true } : { index: false, follow: false },
  };
}

export default async function NovemberPage({ searchParams }: Props) {
  const sp = await searchParams;
  const pv = Array.isArray(sp.promoPreview) ? sp.promoPreview[0] : sp.promoPreview;
  if (pv === "bf") redirect("/black-friday?promoPreview=bf");
  if (isBfLive()) redirect("/black-friday");
  if (!showNovBogo(sp.promoPreview)) notFound();
  return (
    <>
      <section className="py-20 px-4 text-center text-white bg-pma-navy">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest bg-pma-red">
            This month&apos;s promotion
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            November at Prospect Martial Arts: Buy One Month, <span style={{ color: "#E22D33" }}>Get One Free!</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
            Sign up for Tang Soo Do in November, and your following month is free. Start with a free trial class for
            your child, your family, or yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CTA} className="inline-block bg-pma-red text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90">
              Book Your Free Trial
            </a>
            <a href={PHONE_HREF} className="inline-block text-white font-bold text-lg px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-pma-navy">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
      <NovBogoOffer ctaHref={CTA} />
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center text-gray-700">
          <h2 className="text-2xl font-extrabold text-pma-navy mb-3">Programs for every age</h2>
          <p>
            Little Tigers (ages 3–4), Little Dragons (ages 5–7), Kids &amp; Teens (8+), and Adults. Our students train in
            traditional Tang Soo Do with instructors who know every student by name.
          </p>
          <p className="mt-4 text-sm">
            Questions? Call or text <a href={PHONE_HREF} className="font-semibold text-pma-navy underline">{PHONE_DISPLAY}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
