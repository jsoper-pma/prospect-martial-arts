import type { Metadata } from "next";
import Image from "next/image";
import GymDeskWidget from "@/components/GymDeskWidget";

export const metadata: Metadata = {
  title: "Adult Tang Soo Do — Founders Membership | Prospect Martial Arts",
  description:
    "Be one of the first. Lock in the Founders rate of $139/month — guaranteed for as long as you hold an active membership. Adult Tang Soo Do classes start June 2026.",
};

const features = [
  {
    emoji: "🥋",
    title: "Authentic Tang Soo Do",
    desc: "Learn a traditional Korean martial art from certified instructors who have trained for decades. Real technique, real tradition.",
  },
  {
    emoji: "💪",
    title: "Serious Fitness",
    desc: "Conditioning, flexibility, and strength built into every class. No gym membership required.",
  },
  {
    emoji: "🛡️",
    title: "Practical Self-Defense",
    desc: "Tang Soo Do is as practical as it is disciplined. You will leave every class knowing something useful.",
  },
  {
    emoji: "🧠",
    title: "Mental Clarity",
    desc: "Focus, discipline, and stress relief that carry far beyond the mat and into everyday life.",
  },
  {
    emoji: "🤝",
    title: "A Genuine Community",
    desc: "Our students look out for each other. You will be welcomed from the very first class.",
  },
  {
    emoji: "📈",
    title: "Clear Progress",
    desc: "A structured belt curriculum gives you real milestones and a sense of accomplishment at every step.",
  },
];

const faqs = [
  {
    q: "Do I need any prior experience?",
    a: "None at all. Our adult program is designed to welcome complete beginners and build them up at a comfortable pace. Many of our students started from scratch.",
  },
  {
    q: "What do I wear to my first class?",
    a: "Comfortable athletic clothing — shorts or sweatpants and a t-shirt work perfectly. No uniform or equipment needed to walk in the door.",
  },
  {
    q: "How long does the Founders rate last?",
    a: "For as long as you hold an active membership — period. Lock it in now and your rate never goes up.",
  },
  {
    q: "How do I sign up?",
    a: "Book your free trial class using the form below. Come in, meet the team, and try a class. If you love it — and we think you will — we will get you set up from there.",
  },
  {
    q: "What if I have a prior injury or physical limitation?",
    a: "Always consult a physician before starting any new physical activity, including martial arts. Once you have clearance, talk to us — our instructors are experienced working with students of all physical abilities and will work with you to keep training safe and effective.",
  },
];

export default function FoundersPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gallery/2025_TSDMAFUNDRAISER_1-35.jpg"
          alt="Adult Tang Soo Do at Prospect Martial Arts"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,59,111,0.83)" }} />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: "#E22D33" }}
          >
            Founders Membership — Now Open
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Adult Tang Soo Do<br />
            <span style={{ color: "#E22D33" }}>Starts June 2026</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Be one of the first. Lock in the Founders rate of{" "}
            <strong className="text-white">$139/month</strong> — guaranteed for as long as
            you hold an active membership. No long-term contracts. No gimmicks.
          </p>
          <a
            href="#trial"
            style={{ backgroundColor: "#E22D33" }}
            className="text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity inline-block mb-4"
          >
            Claim Your Founders Rate
          </a>
          <p className="text-white text-lg font-semibold mt-3">
            First 10 members only —{" "}
            <span className="font-bold" style={{ color: "#E22D33" }}>8 spots remaining</span>
          </p>
        </div>
      </section>

      {/* ── THE OFFER ─────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#003B6F" }}>
            What Is the Founders Membership?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            When we launch our adult program, the first members to sign up lock in our
            lowest rate — permanently. No grandfathering games. No rate hikes down the road.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mx-auto mb-12">
            Both options below are our <strong className="text-gray-700">Gold Tier membership</strong> — our top-of-the-line plan with unlimited classes and no additional fees. The only difference is when you sign up.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Founders card */}
            <div
              className="rounded-2xl p-8 text-center shadow-xl relative"
              style={{ backgroundColor: "#003B6F" }}
            >
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap"
                style={{ backgroundColor: "#E22D33" }}
              >
                FOUNDERS RATE
              </div>
              <p className="text-blue-200 text-sm uppercase tracking-widest mb-2 mt-2">Lock It In</p>
              <p className="text-white text-6xl font-extrabold">$139</p>
              <p className="text-blue-200 text-sm mb-4">/ month — yours for life</p>
              <div className="h-px w-16 mx-auto mb-4" style={{ backgroundColor: "#E22D33" }} />
              <p className="text-blue-100 text-sm leading-relaxed">
                Unlimited classes. Locked in at $139/month for as long as you remain an active member.
              </p>
            </div>

            {/* Regular card */}
            <div className="rounded-2xl p-8 text-center shadow-md border border-gray-200 opacity-60">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-2 mt-2">Regular Rate</p>
              <p className="text-gray-400 text-6xl font-extrabold">$189</p>
              <p className="text-gray-400 text-sm mb-4">/ month</p>
              <div className="h-px w-16 mx-auto mb-4 bg-gray-200" />
              <p className="text-gray-500 text-sm leading-relaxed">
                Standard unlimited membership for adult students who join after the Founders period closes.
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-xs mt-6">
            Founders rate is available for a limited time during our initial launch period.
          </p>
        </div>
      </section>

      {/* ── SCHEDULE ─────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: "#003B6F" }}>
            Built for Adults with Real Schedules
          </h2>
          <p className="text-gray-600 mb-10">
            Evening classes, two nights a week. Train hard. Go home. Sleep well.
          </p>

          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-2xl shadow p-8 max-w-xs w-full">
              <p className="font-bold text-base mb-1" style={{ color: "#E22D33" }}>
                Monday &amp; Wednesday
              </p>
              <p className="font-extrabold text-3xl mb-1" style={{ color: "#003B6F" }}>
                7:00 – 7:45 PM
              </p>
              <p className="text-gray-500 text-sm">Adult students, ages 17+</p>
            </div>
          </div>

          <p className="text-gray-500 text-sm">
            Starting June 2026 — 73 Waterbury Rd, Unit 2, Prospect, CT
          </p>
        </div>
      </section>

      {/* ── WHAT YOU'LL GET ───────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: "#003B6F" }}>
            What You Can Expect
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => (
              <div key={item.title} className="rounded-2xl p-6" style={{ backgroundColor: "#f4f7fb" }}>
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#003B6F" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-10" style={{ color: "#003B6F" }}>
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-bold mb-2" style={{ color: "#003B6F" }}>
                  {item.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRIAL BOOKING ────────────────────────────────────── */}
      <section id="trial" className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#003B6F" }}>
            Your First Class Is Free
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Come try a class before you commit to anything. Meet the instructors, see the school,
            and find out if Tang Soo Do is right for you.
          </p>
          <div className="rounded-2xl shadow-lg p-6 bg-gray-50">
            <GymDeskWidget />
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ────────────────────────────────────── */}
      <section className="py-12 px-4 text-center text-white" style={{ backgroundColor: "#003B6F" }}>
        <p className="text-blue-200 mb-2">Have a question before you come in?</p>
        <p className="font-bold text-lg">
          Text{" "}
          <a href="tel:2034415358" className="hover:text-blue-200 transition-colors">
            203-441-5358
          </a>{" "}
          or email{" "}
          <a href="mailto:info@prospectma.com" className="hover:text-blue-200 transition-colors">
            info@prospectma.com
          </a>
        </p>
      </section>
    </>
  );
}
