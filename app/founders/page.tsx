import type { Metadata } from "next";
import Image from "next/image";
import GymDeskWidget from "@/components/GymDeskWidget";

export const metadata: Metadata = {
  title: "Adult Tang Soo Do — Beginners | Prospect Martial Arts",
  description:
    "Try adult Tang Soo Do at Prospect Martial Arts in Prospect, CT. Traditional Korean martial arts for adults ages 17+. Book your first class free — no experience needed.",
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
            Adult Tang Soo Do · Ages 17+
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Adult Tang Soo Do<br />
            <span style={{ color: "#E22D33" }}>Starts June 2026</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Begin your Tang Soo Do journey this summer. No experience needed — our instructors will meet you exactly where you are and build you up from there.
          </p>
          <a
            href="#offer"
            style={{ backgroundColor: "#E22D33" }}
            className="text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity inline-block mb-4"
          >
            See Our Summer Offer
          </a>
        </div>
      </section>

      {/* ── SUMMER OFFER ─────────────────────────────────────────── */}
      <section id="offer" className="py-12 px-4" style={{ backgroundColor: "#003B6F" }}>
        <div className="max-w-2xl mx-auto text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 text-white"
            style={{ backgroundColor: "#E22D33" }}
          >
            Summer Special · 10 Spots Available
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Summer Kickoff Special
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-lg mx-auto">
            This summer, new adult students can get started with 10 weeks of classes, a free uniform, and no registration fee.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm mx-auto">
            <p className="text-6xl font-extrabold mb-1" style={{ color: "#003B6F" }}>$169</p>
            <p className="text-gray-500 text-sm mb-6">for 10 weeks of classes</p>
            <ul className="space-y-3 text-left mb-8">
              {[
                "No registration fee",
                "Free uniform included",
                "10 weeks from your first class",
                "Available through July 31",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span style={{ color: "#E22D33" }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="#trial"
              className="block text-white font-bold py-3 rounded-full shadow hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#E22D33" }}
            >
              Book a Free Class →
            </a>
            <p className="text-gray-400 text-xs mt-3">Only 10 spots available this summer.</p>
          </div>
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
