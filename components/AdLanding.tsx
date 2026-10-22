import { notFound } from "next/navigation";
import TrialSplit from "@/components/TrialSplit";
import TrialConversion from "@/components/TrialConversion";
import NovBogoOffer from "@/components/NovBogoOffer";
import UtmDefaults from "@/components/UtmDefaults";
import ClassPhotos from "@/components/ClassPhotos";
import { showBf, showNovBogo } from "@/lib/promo";
import { ADDRESS, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

// Paid-ad landing page body for /lp/meta and /lp/google. Always noindex; not in nav/sitemap.
// Nov 1-25 ET: November BOGO. Nov 26-30 ET: Black Friday flash sale (links to /black-friday
// checkout). Hidden (404) before Nov 1 unless ?promoPreview=nov or bf. After Nov 30: plain
// free-trial wording.
const LAUNCH = new Date("2026-11-01T00:00:00-04:00").getTime();

export default function AdLanding({
  source,
  preview,
}: {
  source: "meta" | "google";
  preview: string | string[] | undefined;
}) {
  const bf = showBf(preview);
  const bogo = !bf && showNovBogo(preview);
  if (!bogo && !bf && Date.now() < LAUNCH) notFound();
  const campaign = bf ? "black-friday" : "nov-bogo";
  const utm = { utm_source: source, utm_medium: "paid", utm_campaign: campaign };
  const bfHref = `/black-friday?utm_source=${source}&utm_medium=paid&utm_campaign=black-friday${
    bf && preview ? "&promoPreview=bf" : ""
  }#checkout`;
  return (
    <>
      <UtmDefaults defaults={utm} />
      <TrialConversion />
      <section className="py-16 px-4 text-center text-white bg-pma-navy">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest bg-pma-red">
            {bf ? "Black Friday Flash Sale · 5 days only" : bogo ? "November Offer" : "Free Trial Class"}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {bf ? (
              <>
                Start Tang Soo Do for <span style={{ color: "#E22D33" }}>$50</span>
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
              ? "Thanksgiving through Cyber Monday: $50 for your uniform, classes free through Dec 31, regular tuition starts Jan 1. For new and former students, ages 3 through adult."
              : bogo
                ? "Book a free Tang Soo Do trial class in Prospect, CT. Sign up in November, and the following month is free."
                : "Book a free Tang Soo Do trial class in Prospect, CT. Nothing to pay to book."}
          </p>
          <a
            href={bf ? bfHref : "#trial"}
            className="inline-block bg-pma-red text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90"
          >
            {bf ? "Get the Deal" : "Book Your Free Trial"}
          </a>
          {bf && (
            <p className="mt-4 text-blue-100 text-sm">
              Sale ends Mon Nov 30 at 11:59 PM ET.{" "}
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
