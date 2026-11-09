import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { showBf } from "@/lib/promo";
import Image from "next/image";
import ClassPhotos from "@/components/ClassPhotos";
import SaleWindow from "./SaleWindow";
import {
  adultFoundersTier,
  preschoolTiers,
  youthTiers,
} from "@/lib/pricing";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

// ── Black Friday 2026 $50 offer (HIDDEN DRAFT) ────────────────────────
// - noindex/nofollow, not in nav, footer, home page, or app/sitemap.ts.
// - Local draft only. Nothing goes live until Jason approves a push.
// - Public copy from /workspace/pma-promos/bf-50-offer/public-copy.md
//   (Chuck, Nov 9, 2026). Offer: $50 per student to train through Dec 31,
//   uniform included. Sale Fri Nov 27–Sun Dec 14, 2026.
// - Site-wide promo windows in lib/promo.ts, the /november redirect, and
//   /lp ad copy still use the older Nov 26–30 flash-sale window. Those
//   were left unchanged on this branch (live redirect behavior). Flag
//   for Chuck before any push.

export const metadata: Metadata = {
  title: "Black Friday Offer: Train through December 31 for $50",
  description:
    "Train in Tang Soo Do at Prospect Martial Arts through December 31 for $50 per student, uniform included, plus the usual card-processing fee. New students and former students gone more than three months. Offer ends December 14.",
  robots: { index: false, follow: false },
};

const programs = [
  {
    name: "Little Tigers",
    ages: "Ages 3–4",
    blurb: "Short, fun classes with a parent on the floor.",
  },
  {
    name: "Little Dragons",
    ages: "Ages 5–7",
    blurb: "More structure, more confidence, real progress.",
  },
  {
    name: "Kids & Teens",
    ages: "Ages 8+",
    blurb: "Forms, self-defense, and sparring.",
  },
  {
    name: "Adults",
    ages: "Ages 17+",
    blurb: "Evening classes built for adult schedules.",
  },
];

const tuitionRows = [
  ...preschoolTiers.map((t) => ({
    plan: `Preschool ${t.name}`,
    detail: t.classes,
    monthly: t.monthly,
  })),
  ...youthTiers.map((t) => ({
    plan: `Tang Soo Do ${t.name} (ages 8+)`,
    detail: t.classes,
    monthly: t.monthly,
  })),
  {
    plan: "Adult Founders rate",
    detail: adultFoundersTier.classes,
    monthly: adultFoundersTier.monthly,
  },
];

const steps = [
  {
    title: "Check out by Sun Dec 14",
    body: "$50 per student to train through December 31, plus the usual card-processing fee. A uniform is included.",
  },
  {
    title: "Choose your plan",
    body: "Pick Silver, Gold, or the plan that fits when you register. Gold students receive Gold’s usual uniform.",
  },
  {
    title: "We get you started",
    body: "We set your class times and get your uniform size.",
  },
  {
    title: "Regular tuition starts Jan 1",
    body: "Tuition for the plan you choose begins January 1, with our usual family discounts from then.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Who is this for?",
    a: "New students, and former students whose last day with us was more than three months ago. Current and recently frozen students do not qualify for this offer.",
  },
  {
    q: "What does the $50 cover?",
    a: "Training through December 31, with a uniform included. It is not a uniform-only purchase.",
  },
  {
    q: "What uniform do I get?",
    a: "The standard uniform for your plan. Gold students receive Gold’s usual uniform.",
  },
  {
    q: "Do I pick Silver or Gold now?",
    a: "Yes. You choose your membership plan at registration. Regular tuition for that plan begins January 1.",
  },
  {
    q: "Is there a card fee?",
    a: "Yes. The usual card-processing fee is added on top of the $50.",
  },
  {
    q: "Can my whole family join?",
    a: "Yes. Each student is $50. A family of four pays $200 for the offer period.",
  },
  {
    q: "Can I combine this with November’s buy-one-month-get-one-free?",
    a: "No. You choose one new-student offer.",
  },
  {
    q: "When does the sale end?",
    a: "Sunday, December 14, 2026.",
  },
  {
    q: "What about the holiday break?",
    a: "We close from Christmas Eve. Training under this offer runs through Wednesday, December 23.",
  },
  {
    q: "Can I try a class first?",
    a: "Yes. Your first class is always free. Call or text (203) 441-5358 or book a free first class with us.",
  },
];

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

// Hidden (404) outside the site-wide Black Friday window in lib/promo.ts
// (currently Nov 26–30 ET) unless ?promoPreview=bf or the draft's own
// ?preview=before|open|ended. Local review: /black-friday?promoPreview=bf&preview=open
export default async function BlackFridayFlashSalePage({ searchParams }: Props) {
  const sp = await searchParams;
  if (!showBf(sp.promoPreview) && !sp.preview) notFound();
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-pma-navy text-white px-4 pt-20 pb-28 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest bg-pma-red">
              Black Friday Offer · Nov 27–Dec 14
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Train through December 31 for $50
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              Tang Soo Do at Prospect Martial Arts — uniform included. New
              students and former students gone more than three months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#checkout"
                className="inline-block bg-pma-red text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
              >
                Start now
              </a>
              <a
                href="/kids-trial"
                className="inline-block text-white font-bold text-lg px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-pma-navy transition-colors"
              >
                Book a free first class
              </a>
            </div>
            <p className="mt-5 text-sm text-blue-200">
              Offer Nov 27–Dec 14 · $50 per student · usual card fee added ·
              cannot combine with November buy-one-get-one
            </p>
          </div>
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-xl border-4 border-white/20">
            <Image
              src="/images/gallery/promo-class.jpg"
              alt="Tang Soo Do students punching in class at Prospect Martial Arts"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── DATES STRIP ───────────────────────────────────────── */}
      <section className="bg-pma-red text-white px-4 py-5" aria-label="Sale dates">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-90">
              Starts Black Friday
            </p>
            <p className="text-2xl font-extrabold">Fri Nov 27, 2026</p>
          </div>
          <span className="text-2xl font-extrabold hidden sm:block" aria-hidden="true">
            →
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-90">
              Ends Sunday
            </p>
            <p className="text-2xl font-extrabold">Sun Dec 14, 2026</p>
          </div>
        </div>
      </section>

      {/* ── HERO SUPPORT ──────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center text-gray-700">
          <p className="text-lg">
            For a limited time, join us for{" "}
            <strong className="text-pma-navy">$50 per student</strong> and train
            through <strong className="text-pma-navy">December 31</strong>. A
            uniform is included (Gold students receive Gold’s usual uniform).
            Choose your plan when you register; regular tuition starts{" "}
            <strong className="text-pma-navy">January 1</strong>, with our usual
            family discounts from then. A family of four pays{" "}
            <strong className="text-pma-navy">$200</strong>.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-16 px-4 bg-pma-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-pma-navy mb-10">
            How it works
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
              >
                <span className="w-9 h-9 rounded-full bg-pma-red text-white font-bold flex items-center justify-center mb-3">
                  {i + 1}
                </span>
                <h3 className="font-extrabold text-pma-navy mb-1">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white" aria-labelledby="who-heading">
        <div className="max-w-5xl mx-auto">
          <h2
            id="who-heading"
            className="text-3xl font-extrabold text-center text-pma-navy mb-3"
          >
            Who it&apos;s for
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            This offer is for <strong>new students</strong> and{" "}
            <strong>former students</strong>
            {" "}
            whose last day with us was more than three months ago. Current and
            recently frozen students do not qualify. If you&apos;re training
            with us now, thank you — please ask us at the front desk about what
            is open for you.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {programs.map((p) => (
              <li
                key={p.name}
                className="rounded-2xl bg-pma-cream border border-gray-100 p-5 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-pma-red mb-1">
                  {p.ages}
                </p>
                <h3 className="text-lg font-extrabold text-pma-navy">{p.name}</h3>
                <p className="text-gray-600 text-sm">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClassPhotos heading="Our students on the mats" />

      {/* ── CHECKOUT ──────────────────────────────────────────── */}
      <section id="checkout" className="py-16 px-4 bg-white scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-pma-navy mb-3">
            Start now
          </h2>
          <p className="text-center text-gray-600 mb-8">
            $50 per student to train through December 31, uniform included,
            plus the usual card-processing fee. Choose your plan at
            registration. Regular tuition starts January 1.
          </p>
          <SaleWindow />
        </div>
      </section>

      {/* ── TUITION FROM JAN 1 ────────────────────────────────── */}
      <section className="py-16 px-4 bg-pma-light" aria-labelledby="tuition-heading">
        <div className="max-w-3xl mx-auto">
          <h2
            id="tuition-heading"
            className="text-2xl font-extrabold text-center text-pma-navy mb-2"
          >
            Regular monthly tuition from January 1, 2027
          </h2>
          <p className="text-center text-gray-600 mb-6 text-sm">
            Billed automatically each month on the plan you choose. Our usual
            family discounts apply from January 1.
          </p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-pma-navy text-white">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Classes</th>
                  <th className="px-4 py-3 text-right">Monthly</th>
                </tr>
              </thead>
              <tbody>
                {tuitionRows.map((r) => (
                  <tr key={r.plan} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-semibold text-pma-navy">{r.plan}</td>
                    <td className="px-4 py-3 text-gray-600">{r.detail}</td>
                    <td className="px-4 py-3 text-right font-bold">{r.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2
            id="faq-heading"
            className="text-3xl font-extrabold text-center text-pma-navy mb-10"
          >
            Questions we hear
          </h2>
          <dl className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-extrabold text-pma-navy">{item.q}</dt>
                <dd className="text-gray-700 mt-1">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── FINE PRINT ────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-pma-cream" aria-labelledby="fine-print">
        <div className="max-w-3xl mx-auto">
          <h2 id="fine-print" className="text-xl font-extrabold text-pma-navy mb-4">
            The fine print
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Offer runs Friday, November 27, 2026 through Sunday, December 14,
              2026 at 11:59 PM ET.
            </li>
            <li>
              $50 per student covers training through December 31, 2026, with a
              uniform included. The usual card-processing fee is added on top
              of the $50. A family of four pays $200 for the offer period.
            </li>
            <li>
              You choose your membership plan at registration. Regular monthly
              tuition for that plan starts automatically on Friday, January 1,
              2027, and our usual family discounts apply from then.
            </li>
            <li>
              Open to new students and former students whose last day with us
              was more than three months ago. Current and recently frozen
              students do not qualify. We review every order before it is
              final.
            </li>
            <li>
              This offer cannot be combined with our November buy-one-month,
              get-one-free special. You choose one new-student offer.
            </li>
            <li>
              We close from Christmas Eve. Training under this offer runs
              through Wednesday, December 23.
            </li>
            <li>
              Questions? Call or text{" "}
              <a href={PHONE_HREF} className="font-semibold text-pma-navy underline">
                {PHONE_DISPLAY}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${EMAIL}`} className="font-semibold text-pma-navy underline">
                {EMAIL}
              </a>
              .
            </li>
          </ul>
        </div>
      </section>

      {/* ── LOCAL FOOTNOTE ────────────────────────────────────── */}
      <section className="py-12 px-4 bg-pma-navy text-white" aria-label="Location and contact">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-bold text-lg mb-2">Prospect Martial Arts · Prospect, CT</p>
          <p className="text-blue-100 mb-6">
            {ADDRESS.full}
            <br />
            Call or text{" "}
            <a href={PHONE_HREF} className="font-semibold text-white underline">
              {PHONE_DISPLAY}
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#checkout"
              className="inline-block bg-pma-red text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Start now
            </a>
            <a
              href="/kids-trial"
              className="inline-block text-white font-bold px-8 py-3 rounded-full border-2 border-white hover:bg-white hover:text-pma-navy transition-colors"
            >
              Book a free first class
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
