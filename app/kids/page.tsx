import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Brain, Check, HeartHandshake, Medal, Shield, Sprout, Trophy } from "lucide-react";
import GymDeskWidget from "@/components/GymDeskWidget";
import PricingSection from "@/components/PricingSection";
import JsonLd from "@/components/JsonLd";
import { youthTiers } from "@/lib/pricing";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kids & Teen Martial Arts Classes in Prospect, CT | Ages 8+",
  description:
    "Tang Soo Do classes for kids and teens ages 8 and up in Prospect, CT. Students build confidence, focus, and self-defense skills in a structured, encouraging environment. Book a free trial class today.",
  alternates: { canonical: "/kids" },
  openGraph: {
    title: "Kids & Teen Tang Soo Do — Prospect Martial Arts",
    description:
      "Martial arts for ages 8+ in Prospect, CT. Confidence, focus, and real self-defense. First class free.",
  },
};

const benefits = [
  {
    icon: Medal,
    title: "Confidence That Shows",
    desc: "Students who commit to training carry themselves differently — in school, at home, and everywhere in between. Martial arts builds a quiet, earned confidence.",
  },
  {
    icon: Brain,
    title: "Focus & Discipline",
    desc: "Tang Soo Do demands attention and self-control. Students learn to tune out distractions and stay locked in — a skill that transfers directly into the classroom.",
  },
  {
    icon: Shield,
    title: "Real Self-Defense Skills",
    desc: "Students learn practical striking, kicking, blocking, and self-defense techniques — not just choreography. They graduate knowing they can handle themselves.",
  },
  {
    icon: Sprout,
    title: "A Clear Path Forward",
    desc: "The belt system gives students a tangible goal to work toward at every stage. Progress is visible, celebrated, and earned — which teaches them that effort has a reward.",
  },
  {
    icon: HeartHandshake,
    title: "Respect & Character",
    desc: "Every class begins and ends with respect — for instructors, for training partners, and for themselves. These aren't just mat rules. They become habits.",
  },
  {
    icon: Trophy,
    title: "A Community That Cares",
    desc: "Students make real friends here. Our instructors know every student by name, celebrate every milestone, and invest in every person who walks through the door.",
  },
];

const weeklySchedule = [
  { time: "5:30 – 6:15 PM", monWed: "Beginners", tuesThu: "Intermediate" },
  { time: "6:15 – 7:00 PM", monWed: "Intermediate", tuesThu: "Beginners" },
  { time: "7:00 – 7:15 PM", monWed: "Leadership", tuesThu: "—" },
  { time: "7:45 – 8:30 PM", monWed: "Advanced", tuesThu: "Advanced" },
];

const reviews = [
  {
    name: "Deanett Evans",
    text: "On Joshua's first day at Prospect Martial Arts he was welcomed and integrated in as though he had been there for several years. The staff has such excellent relationships with the kids and I love this about this facility.",
  },
  {
    name: "Kyle Litke",
    text: "My kids both attend Prospect Martial Arts and it has been a great experience. Everyone working there truly cares about the kids, and they have learned a lot. Highly recommend!",
  },
  {
    name: "Kelly Bourlogiannis",
    text: "Our daughter joined PMA a few weeks ago and my husband and I are just blown away. The confidence boost she has gained by just attending 5 classes so far is amazing.",
  },
];

export default function KidsPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Kids & Teens", url: `${SITE_URL}/kids` },
        ])}
      />

      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      <section className="py-20 px-4 text-center text-white relative overflow-hidden bg-pma-navy">
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest bg-pma-red">
            Ages 8 &amp; Up
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Tang Soo Do for Kids &amp; Teens
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Traditional martial arts training that builds confidence, discipline, and real
            self-defense skills — in a school that genuinely cares about every student.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pma-red text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Book Your Free Trial Class
            </a>
            <a
              href={PHONE_HREF}
              className="inline-block text-white font-bold text-lg px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-pma-navy transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── PROGRAM INTRO ─────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6 text-pma-navy">More Than Kicks and Belts</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                Tang Soo Do is a traditional Korean martial art that has been developing focused,
                disciplined, and confident young people for decades. At Prospect Martial Arts, we
                teach it the right way — with patience, high standards, and genuine care for every
                student.
              </p>
              <p>
                Our Kids &amp; Teen program (ages 8 and up) puts students in structured classes with
                experienced black belt instructors. They learn forms (<em>hyungs</em>), kicking and
                striking techniques, self-defense, and sparring — growing in ability and character
                with every class.
              </p>
              <p>
                Black belt takes roughly four years of consistent training. That journey is the
                point — students learn that hard work, shown up for day after day, produces real
                results.
              </p>
            </div>
            <div className="mt-8">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pma-red text-white font-bold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
              >
                Book Your Free Trial →
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/gallery/20250717_194337.jpg"
              alt="Kids training Tang Soo Do at Prospect Martial Arts"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ─────────────────────────────────────── */}
      <section className="py-16 px-4 bg-pma-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-pma-navy">
            What Your Child Will Gain
          </h2>
          <p className="text-center text-pma-warm-gray mb-12 max-w-xl mx-auto">
            The mat is where it starts. The rest of their life is where it shows.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 mb-3 rounded-full bg-pma-light flex items-center justify-center">
                  <b.icon className="w-6 h-6 text-pma-navy" aria-hidden />
                </div>
                <h3 className="font-bold text-lg mb-2 text-pma-navy">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="/images/gallery/20250717_194507.jpg"
              alt="Students in formation at Prospect Martial Arts"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-extrabold mb-6 text-pma-navy">What to Expect in Class</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                Every class opens with warm-up, respect rituals, and focused drilling — then moves
                into technique work, forms, combinations, and either sparring or self-defense
                depending on the level.
              </p>
              <p>
                Students are grouped by rank so they&apos;re always challenged at the right level —
                not overwhelmed, not bored. Beginners start with fundamentals; advanced students push
                toward higher belts and leadership responsibilities.
              </p>
              <p>
                Our instructors have experience working with students of all learning styles,
                including children with ADHD and special needs. Every student is met where they are
                and pushed forward from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────── */}
      <PricingSection
        title="Kids & Teens Membership Pricing"
        subtitle="Two simple membership options — Silver for twice-a-week training, Gold for unlimited classes and no extra fees."
        tiers={youthTiers}
      />

      {/* ── CLASS SCHEDULE ────────────────────────────────────── */}
      <section className="py-16 px-4 bg-pma-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-white mb-4">
            Kids &amp; Teen Class Schedule
          </h2>
          <p className="text-blue-200 text-center mb-10 text-sm">
            Current schedule — classes run Monday through Thursday.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-lg mb-6">
            <table className="w-full text-sm text-center">
              <thead>
                <tr className="bg-pma-red">
                  <th className="text-white font-bold px-4 py-3 text-left">Time</th>
                  <th className="text-white font-bold px-4 py-3">Monday &amp; Wednesday</th>
                  <th className="text-white font-bold px-4 py-3">Tuesday &amp; Thursday</th>
                </tr>
              </thead>
              <tbody>
                {weeklySchedule.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                    <td className="px-4 py-3 font-semibold text-left text-pma-navy">{row.time}</td>
                    <td className="px-4 py-3 text-gray-700">{row.monWed}</td>
                    <td className="px-4 py-3 text-gray-700">{row.tuesThu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-blue-200 text-center text-xs">
            Questions about which class is right for your child?{" "}
            <a href={PHONE_HREF} className="underline font-semibold">
              Text us at {PHONE_DISPLAY}
            </a>{" "}
            and we&apos;ll help you get started.
          </p>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-pma-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-pma-navy">
            What Parents Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                <p className="font-bold text-sm text-pma-navy">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE TRIAL BOOKING ────────────────────────────────── */}
      <section id="trial" className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-pma-navy">
            Start with a Free Class
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            The first class is on us. Come in, try it out, and see if it&apos;s the right fit. No
            commitment. No pressure. No experience needed.
          </p>
          <div className="rounded-2xl shadow-lg p-6 bg-pma-cream">
            <GymDeskWidget />
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            Have a question first?{" "}
            <a href={PHONE_HREF} className="font-semibold hover:underline text-pma-navy">
              Text us at {PHONE_DISPLAY}
            </a>{" "}
            or{" "}
            <Link href="/faq" className="font-semibold hover:underline text-pma-navy">
              visit our FAQ page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
