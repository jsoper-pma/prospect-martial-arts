import type { Metadata } from "next";
import Image from "next/image";
import { Brain, Dumbbell, HeartHandshake, Shield, Swords, TrendingUp } from "lucide-react";
import GymDeskWidget from "@/components/GymDeskWidget";
import FoundersPricing from "@/components/FoundersPricing";
import ScheduleTable from "@/components/ScheduleTable";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { ADDRESS, BOOKING_URL, EMAIL, PHONE_DISPLAY, PHONE_HREF, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Adult Martial Arts Classes in Prospect, CT | Ages 17+",
  description:
    "Adult Tang Soo Do at Prospect Martial Arts in Prospect, CT. Evening classes for adults 17+ — fitness, self-defense, and stress relief. No experience needed. First class free.",
  alternates: { canonical: "/adults" },
  openGraph: {
    title: "Adult Tang Soo Do — Prospect Martial Arts",
    description:
      "Evening martial arts classes for adults 17+ in Prospect, CT. No experience needed. First class free.",
  },
};

const features = [
  {
    icon: Swords,
    title: "Authentic Tang Soo Do",
    desc: "Learn a traditional Korean martial art from certified instructors who have trained for years. Real technique, real tradition.",
  },
  {
    icon: Dumbbell,
    title: "Serious Fitness",
    desc: "Conditioning, flexibility, and strength built into every class. Every session is a full-body workout that leaves you stronger than you walked in.",
  },
  {
    icon: Shield,
    title: "Practical Self-Defense",
    desc: "Tang Soo Do is as practical as it is disciplined. You will leave every class knowing something useful.",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    desc: "Focus, discipline, and stress relief that carry far beyond the mat and into everyday life.",
  },
  {
    icon: HeartHandshake,
    title: "A Genuine Community",
    desc: "Our students look out for each other. You will be welcomed from the very first class.",
  },
  {
    icon: TrendingUp,
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
    a: "Book your free trial class using the button below. Come in, meet the team, and try a class. If you love it — and we think you will — we will get you set up from there.",
  },
  {
    q: "What if I have a prior injury or physical limitation?",
    a: "Always consult a physician before starting any new physical activity, including martial arts. Once you have clearance, talk to us — our instructors are experienced working with students of all physical abilities and will work with you to keep training safe and effective.",
  },
];

export default function AdultsPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Adult Program", url: `${SITE_URL}/adults` },
        ])}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gallery/2025_TSDMAFUNDRAISER_1-35.jpg"
          alt="Adult Tang Soo Do at Prospect Martial Arts"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-pma-navy/85" />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto py-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 bg-pma-red">
            Adult Tang Soo Do · Ages 17+
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Adult Tang Soo Do
            <br />
            <span className="text-pma-red">Built for Real Life</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Fitness, self-defense, and a challenge that&apos;s entirely yours. No experience needed —
            our instructors will meet you exactly where you are and build you up from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pma-red text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Book Your Free Trial Class
            </a>
            <a
              href={PHONE_HREF}
              className="text-white font-bold text-lg px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-pma-navy transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE ─────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-pma-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-pma-navy">
            Built for Adults with Real Schedules
          </h2>
          <p className="text-gray-600 mb-10">
            Evening classes, two nights a week. Train hard. Go home. Sleep well.
          </p>

          <div className="flex justify-center mb-10">
            <div className="bg-white rounded-2xl shadow p-8 max-w-xs w-full">
              <p className="font-bold text-base mb-1 text-pma-red">Monday &amp; Wednesday</p>
              <p className="font-extrabold text-3xl mb-1 text-pma-navy">7:00 – 7:45 PM</p>
              <p className="text-gray-500 text-sm">Adult students, ages 17+</p>
            </div>
          </div>

          <h3 className="text-xl font-extrabold mb-2 text-pma-navy">Want more mat time?</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Adult students are also welcome in our all-ages Tang Soo Do classes — train any evening
            that fits your week.
          </p>
          <div className="mb-6 text-left">
            <ScheduleTable />
          </div>

          <p className="text-gray-500 text-sm">{ADDRESS.full}</p>
        </div>
      </section>

      {/* ── WHAT YOU'LL GET ───────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-pma-navy">
            What You Can Expect
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => (
              <div key={item.title} className="rounded-2xl p-6 bg-pma-cream">
                <div className="w-12 h-12 mb-3 rounded-full bg-pma-light flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-pma-navy" aria-hidden />
                </div>
                <h3 className="font-bold text-lg mb-2 text-pma-navy">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Primary CTA after program description */}
          <div className="text-center mt-12">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pma-red text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Book Your Free Trial →
            </a>
            <p className="mt-4 text-gray-500 text-sm">
              Prefer to talk first?{" "}
              <a href={PHONE_HREF} className="font-semibold text-pma-navy hover:underline">
                Call or text {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-pma-navy">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="bg-pma-cream rounded-2xl shadow-sm p-6">
                <h3 className="font-bold mb-2 text-pma-navy">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <FoundersPricing />

      {/* ── TRIAL BOOKING ────────────────────────────────────── */}
      <section id="trial" className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-pma-navy">
            Your First Class Is Free
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Come try a class before you commit to anything. Meet the instructors, see the school,
            and find out if Tang Soo Do is right for you.
          </p>
          <div className="rounded-2xl shadow-lg p-6 bg-pma-cream">
            <GymDeskWidget />
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ────────────────────────────────────── */}
      <section className="py-12 px-4 text-center text-white bg-pma-navy">
        <p className="text-blue-200 mb-2">Have a question before you come in?</p>
        <p className="font-bold text-lg">
          Text{" "}
          <a href={PHONE_HREF} className="hover:text-blue-200 transition-colors">
            {PHONE_DISPLAY}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${EMAIL}`} className="hover:text-blue-200 transition-colors">
            {EMAIL}
          </a>
        </p>
      </section>
    </>
  );
}
