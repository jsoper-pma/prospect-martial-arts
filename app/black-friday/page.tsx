import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { showBf } from "@/lib/promo";
import Image from "next/image";
import SaleWindow from "./SaleWindow";
import {
  adultFoundersTier,
  preschoolTiers,
  youthTiers,
} from "@/lib/pricing";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

// ── Black Friday 2026 flash sale (HIDDEN DRAFT) ───────────────────────
// - noindex/nofollow, not in nav, footer, home page, or app/sitemap.ts
//   (the sitemap is a hard-coded list, so this route is not included).
// - Nothing goes live until Jason approves the preview and the push.
// - Items wrapped in <Confirm> are open decisions for Jason; they render
//   as yellow highlights so they can't be missed in preview.

export const metadata: Metadata = {
  title: "Black Friday Flash Sale | Prospect Martial Arts",
  description:
    "Thanksgiving through Cyber Monday: $50 for your uniform, Tang Soo Do classes free through Dec 31, regular tuition starts Jan 1. New and former students.",
  robots: { index: false, follow: false },
};

function Confirm({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-yellow-200 text-gray-900 px-1 rounded">
      [JASON TO CONFIRM: {children}]
    </mark>
  );
}

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
    title: "Check out by Mon Nov 30",
    body: "Pay $50 for your uniform and pick your program.",
  },
  {
    title: "We call you",
    body: "We set your class times and get your uniform size.",
  },
  {
    title: "Train free through Dec 31",
    body: "Come to class as much as your program allows. No tuition in December.",
  },
  {
    title: "Tuition starts Jan 1",
    body: "Regular monthly tuition begins automatically on Fri Jan 1, 2027.",
  },
];

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

// Hidden (404) outside Nov 26 00:00 - Nov 30 23:59:59 ET unless ?promoPreview=bf (or the
// draft's own ?preview=before|open|ended). Card/banner/ad pages link here during the sale.
export default async function BlackFridayFlashSalePage({ searchParams }: Props) {
  const sp = await searchParams;
  if (!showBf(sp.promoPreview) && !sp.preview) notFound();
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-pma-navy text-white px-4 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest bg-pma-red">
              Black Friday Flash Sale · 5 days only
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Start Tang Soo Do for $50.
              <br />
              Train free through December.
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              <strong className="text-white">
                $50 uniform, classes free through Dec 31, regular tuition
                starts Jan 1.
              </strong>{" "}
              For new students and former students, ages 3 through adult.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#checkout"
                className="inline-block bg-pma-red text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
              >
                Get the Deal
              </a>
              <a
                href={PHONE_HREF}
                className="inline-block text-white font-bold text-lg px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-pma-navy transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
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
              Starts Thanksgiving
            </p>
            <p className="text-2xl font-extrabold">Thu Nov 26, 2026</p>
          </div>
          <span className="text-2xl font-extrabold hidden sm:block">→</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-90">
              Ends Cyber Monday
            </p>
            <p className="text-2xl font-extrabold">Mon Nov 30, 2026</p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-pma-navy mb-10">
            How it works
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl bg-pma-cream border border-gray-100 p-6 shadow-sm"
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
      <section className="py-16 px-4 bg-pma-cream" aria-labelledby="who-heading">
        <div className="max-w-5xl mx-auto">
          <h2
            id="who-heading"
            className="text-3xl font-extrabold text-center text-pma-navy mb-3"
          >
            Who it&apos;s for
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            This sale is for <strong>new students</strong> and{" "}
            <strong>former students</strong> who aren&apos;t currently
            enrolled. If you&apos;re a current student, thank you for training
            with us. This offer isn&apos;t for current students, so please ask
            us at the front desk instead.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/preschool/tigers-group.jpg"
                alt="Little Tigers students lined up at Prospect Martial Arts"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/preschool/dragons-group.jpg"
                alt="Little Dragons students training together"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {programs.map((p) => (
              <li
                key={p.name}
                className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm"
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

      {/* ── CHECKOUT ──────────────────────────────────────────── */}
      <section id="checkout" className="py-16 px-4 bg-white scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-pma-navy mb-3">
            Claim your spot
          </h2>
          <p className="text-center text-gray-600 mb-8">
            $50 today for your uniform. Classes free through Dec 31. Regular
            tuition starts Jan 1, 2027.
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
            Regular monthly tuition from Jan 1, 2027
          </h2>
          <p className="text-center text-gray-600 mb-6 text-sm">
            Billed automatically each month on the plan you choose. Month to
            month, no long-term contract.
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

      {/* ── FINE PRINT ────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white" aria-labelledby="fine-print">
        <div className="max-w-3xl mx-auto">
          <h2 id="fine-print" className="text-xl font-extrabold text-pma-navy mb-4">
            The fine print
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Checkout is open from Thu Nov 26, 2026 at 12:00 AM ET through Mon
              Nov 30, 2026 at 11:59 PM ET.
            </li>
            <li>
              The $50 is a one-time payment for your student&apos;s uniform.
              Classes are free from the day you enroll through Thu Dec 31,
              2026.
            </li>
            <li>
              Regular monthly tuition starts automatically on Fri Jan 1, 2027,
              charged to the card you enter at checkout, at the regular rate
              for the plan you choose (see the table above).
            </li>
            <li>
              Open to new students and former students who aren&apos;t
              currently enrolled. We review every order before it&apos;s
              final. <Confirm>what happens if a current student checks out
              (for example, a full refund of the $50)</Confirm>
            </li>
            <li>
              This is a separate offer from our November &quot;buy one month,
              get one free&quot; and December &quot;50% off your first
              month&quot; specials. One new-student offer per student, so it
              can&apos;t be combined with either.{" "}
              <Confirm>one-offer-per-student rule</Confirm>
            </li>
            <li>
              Family discounts apply to regular tuition starting Jan 1.{" "}
              <Confirm>family discounts apply from Jan 1</Confirm>
            </li>
            <li>
              Changed your mind? Call or text us before{" "}
              <Confirm>cancel-by date, e.g. Dec 31, 2026</Confirm> and no
              tuition will be charged. After that, our regular cancellation
              policy applies.
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
          <a
            href="#checkout"
            className="inline-block bg-pma-red text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Get the Deal
          </a>
        </div>
      </section>
    </>
  );
}
