import type { Metadata } from "next";
import GymDeskWidget from "@/components/GymDeskWidget";

export const metadata: Metadata = {
  title: "Membership Pricing | Prospect Martial Arts",
  robots: { index: false, follow: false },
};

// ── Pricing data ──────────────────────────────────────────────────

const preschoolTiers = [
  {
    name: "Silver",
    classes: "2 classes / week",
    monthly: "$149",
    highlighted: false,
    includes: [
      "Belt testing fee: $35",
      "One-time registration fee: $100",
      "Uniform: $50",
    ],
  },
  {
    name: "Gold",
    classes: "Unlimited",
    monthly: "$179",
    highlighted: true,
    includes: [
      "No belt testing fees (saves $35/test)",
      "No registration fee (saves $100)",
      "Free uniform (saves $50)",
      "20% off school events & gear",
    ],
  },
];

const youthTiers = [
  {
    name: "Silver",
    classes: "2 classes / week",
    monthly: "$159",
    highlighted: false,
    includes: [
      "Belt testing fee: $50",
      "One-time registration fee: $100",
      "Uniform: $50",
    ],
  },
  {
    name: "Gold",
    classes: "Unlimited",
    monthly: "$189",
    highlighted: true,
    includes: [
      "No belt testing fees (saves $50/test)",
      "No registration fee (saves $100)",
      "Free uniform (saves $50)",
      "20% off school events & gear",
    ],
  },
];

// Family discount table (Silver and Gold only)
const familyDiscounts = [
  {
    plan: "Preschool Silver",
    base: "$149",
    s2: "$268.20",
    s3: "$357.60",
    s4: "$417.20",
    s5: "Free",
  },
  {
    plan: "Preschool Gold",
    base: "$179",
    s2: "$322.20",
    s3: "$429.60",
    s4: "$501.20",
    s5: "Free",
  },
  {
    plan: "Tang Soo Do Silver",
    base: "$159",
    s2: "$286.20",
    s3: "$381.60",
    s4: "$445.20",
    s5: "Free",
  },
  {
    plan: "Tang Soo Do Gold",
    base: "$189",
    s2: "$340.20",
    s3: "$453.60",
    s4: "$529.20",
    s5: "Free",
  },
];

// ── TierCard component ────────────────────────────────────────────

function TierCard({
  name,
  classes,
  monthly,
  includes,
  highlighted = false,
}: {
  name: string;
  classes: string;
  monthly: string;
  includes: string[];
  highlighted?: boolean;
}) {
  // Silver = #6B7280, Gold = #B45309
  const bg = highlighted ? "#B45309" : "#6B7280";
  const subText = highlighted ? "text-amber-100" : "text-gray-200";
  const divider = highlighted ? "bg-amber-300" : "bg-gray-400";
  const check = highlighted ? "text-amber-200" : "text-gray-300";

  return (
    <div
      className="rounded-2xl p-6 shadow-md flex flex-col relative"
      style={{ backgroundColor: bg }}
    >
      {highlighted && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
          style={{ backgroundColor: "#E22D33" }}
        >
          BEST VALUE
        </div>
      )}
      <p className={`text-sm font-bold uppercase tracking-widest mb-1 ${subText}`}>
        {name}
      </p>
      <p className="text-white text-4xl font-extrabold mb-1">{monthly}</p>
      <p className={`text-sm mb-4 ${subText}`}>
        / month &nbsp;·&nbsp; {classes}
      </p>
      <div className={`h-px w-12 mb-4 ${divider}`} />
      <ul className="space-y-2 flex-1">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className={`mt-0.5 font-bold text-sm ${check}`}>✓</span>
            <span className={`text-sm leading-snug ${subText}`}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* ── HEADER ────────────────────────────────────────────── */}
      <section className="py-16 px-4 text-white text-center" style={{ backgroundColor: "#003B6F" }}>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Membership Options</h1>
        <p className="text-blue-200 text-lg max-w-xl mx-auto">
          Everything you need to know about our programs and pricing. Questions? Text us at{" "}
          <a href="tel:2034415358" className="text-white hover:text-blue-200 transition-colors font-semibold">
            203-441-5358
          </a>
          .
        </p>
      </section>

      {/* ── PRESCHOOL PRICING ─────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: "#003B6F" }}>
            Preschool Programs
          </h2>
          <p className="text-gray-500 mb-8">
            Little Tigers (Ages 3–4) &nbsp;·&nbsp; Little Dragons (Ages 5–7)
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl">
            {preschoolTiers.map((tier) => (
              <TierCard key={tier.name} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUTH / TEEN PRICING ──────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: "#003B6F" }}>
            Tang Soo Do
          </h2>
          <p className="text-gray-500 mb-8">Ages 8 and up — Beginners through Advanced</p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl">
            {youthTiers.map((tier) => (
              <TierCard key={tier.name} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ADULT FOUNDERS CALLOUT ────────────────────────────── */}
      <section className="py-10 px-4" style={{ backgroundColor: "#003B6F" }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "#E22D33" }}
          >
            Adult Program — Now Enrolling
          </span>
          <h2 className="text-2xl font-extrabold mb-2">Founders Membership for Adults (Ages 17+)</h2>
          <p className="text-blue-200 text-base mb-4 max-w-xl mx-auto">
            Our adult class launches June 2026. Founding members lock in{" "}
            <strong className="text-white">$139/month</strong> — guaranteed for as long as they hold
            an active membership. Regular rate will be $189/month.
          </p>
          <a
            href="/founders"
            className="inline-block font-bold text-sm px-6 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors"
          >
            Learn About the Founders Offer →
          </a>
        </div>
      </section>

      {/* ── FAMILY DISCOUNTS ─────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: "#003B6F" }}>
            Family Discounts
          </h2>
          <p className="text-gray-500 mb-8">
            Families with multiple students receive automatic discounts — and the 5th student is always free.
            Discounts reset after every 5 students.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow">
            <table className="w-full text-sm text-center">
              <thead>
                <tr style={{ backgroundColor: "#003B6F" }}>
                  <th className="text-white font-bold px-4 py-3 text-left">Plan</th>
                  <th className="text-white font-bold px-4 py-3">Base Rate</th>
                  <th className="text-white font-bold px-4 py-3">2 Students</th>
                  <th className="text-white font-bold px-4 py-3">3 Students</th>
                  <th className="text-white font-bold px-4 py-3">4 Students</th>
                  <th className="text-white font-bold px-4 py-3">5th Student</th>
                </tr>
              </thead>
              <tbody>
                {familyDiscounts.map((row, i) => (
                  <tr key={row.plan} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                    <td className="px-4 py-3 font-semibold text-left" style={{ color: "#003B6F" }}>
                      {row.plan}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{row.base}</td>
                    <td className="px-4 py-3 text-gray-700">{row.s2}</td>
                    <td className="px-4 py-3 text-gray-700">{row.s3}</td>
                    <td className="px-4 py-3 text-gray-700">{row.s4}</td>
                    <td className="px-4 py-3 font-bold" style={{ color: "#E22D33" }}>
                      {row.s5}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-3">
            * Monthly totals shown. Family discounts apply per billing cycle.
          </p>
        </div>
      </section>

      {/* ── FEES & POLICIES ──────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8" style={{ color: "#003B6F" }}>
            Fees &amp; Policies
          </h2>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            {[
              {
                label: "Late Payment Fee",
                detail: "$30, applied after 10 days of non-payment",
              },
              {
                label: "Returned Check / NSF Fee",
                detail: "$35 — applies to returned checks and ACH bank transfers with insufficient funds",
              },
              {
                label: "Membership Hold",
                detail:
                  "Up to 90 days — one-time hold fee equal to one month's tuition. Hold fee covers your first month back upon return.",
              },
              {
                label: "Cancellation",
                detail:
                  "Cancel within the first 30 days without penalty. After 30 days, 30 days' written notice required. You may use services through your paid period.",
              },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col sm:flex-row sm:items-start gap-1 px-6 py-4 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <span className="font-semibold text-sm sm:w-52 shrink-0 pt-0.5" style={{ color: "#003B6F" }}>
                  {row.label}
                </span>
                <span className="text-gray-600 text-sm">{row.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA ──────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: "#003B6F" }}>
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Your first class is free. Book a trial below and come see what we&apos;re all about
            before committing to anything.
          </p>
          <div className="rounded-2xl shadow-lg p-6 bg-gray-50">
            <GymDeskWidget />
          </div>
        </div>
      </section>
    </>
  );
}
