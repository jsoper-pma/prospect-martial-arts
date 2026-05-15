import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Prospect Martial Arts",
  description: "Learn the story behind Prospect Martial Arts — a Tang Soo Do school in Prospect, CT serving the community since 2013. Our mission, our lineage, and our values.",
};

const values = [
  {
    emoji: "🙏",
    title: "Respect & Discipline",
    desc: "The foundation of Tang Soo Do. We bring these values into every class, every interaction, and encourage our students to carry them into everyday life.",
  },
  {
    emoji: "💪",
    title: "Confidence Building",
    desc: "We believe every student has greatness in them. Our job is to help bring it out — one class at a time.",
  },
  {
    emoji: "❤️",
    title: "Family & Belonging",
    desc: "PMA is a second home. Everyone who walks through our doors is welcomed as part of the community, from day one.",
  },
  {
    emoji: "🌱",
    title: "Personal Growth",
    desc: "Progress here is measured as a person, not just as a martial artist. We celebrate every step of the journey.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      <section
        className="py-20 px-4 text-center text-white relative overflow-hidden"
        style={{ backgroundColor: "#003B6F" }}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            A martial arts school rooted in tradition, built on relationships, and open to everyone.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#003B6F" }}>
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                Prospect Martial Arts was born from a union of two proud martial arts communities.
                In the summer of 2025, Jason Soper purchased Prospect Martial Arts — founded in
                2013 — and merged it with Bunker Hill Karate, a school with roots going back to
                1988, bringing both families together under one name and one roof.
              </p>
              <p>
                The result is a school that carries the heart of two communities: the tradition,
                discipline, and values that both schools were built on, combined with a fresh energy
                and a shared vision for what a martial arts school should be.
              </p>
              <p>
                Named after the town we call home, Prospect Martial Arts is a school by the
                community, for the community. We are proud to serve Prospect and the surrounding
                towns of Connecticut — and proud to be home to over 140 students who train with us
                every week.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/gallery/20250717_194337.jpg"
              alt="Prospect Martial Arts instructor"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ── WHAT IS TANG SOO DO ───────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="/images/gallery/20250717_194507.jpg"
              alt="Students training in disciplined formation at Prospect Martial Arts"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#003B6F" }}>
              What Is Tang Soo Do?
            </h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                Tang Soo Do is a traditional Korean martial art with a history spanning centuries.
                The name translates to &ldquo;the way of the China hand&rdquo; — a reference to its ancient
                roots and the flowing, powerful techniques it encompasses.
              </p>
              <p>
                Unlike some martial arts that focus purely on competition, Tang Soo Do is a complete
                system that develops the whole person. Students learn striking, kicking, blocks,
                forms (called <em>hyungs</em>), self-defense, and weapons — but just as importantly,
                they develop discipline, focus, respect, and inner strength.
              </p>
              <p>
                At PMA, we teach Tang Soo Do the way it was meant to be taught: with patience,
                passion, and a genuine belief that every student — at any age, at any level —
                has the potential to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AFFILIATION & LINEAGE ─────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Affiliation */}
          <div
            className="rounded-2xl p-8 shadow-sm"
            style={{ backgroundColor: "#f4f7fb", border: "1px solid #e2e8f0" }}
          >
            <h3 className="text-xl font-extrabold mb-4" style={{ color: "#003B6F" }}>
              Our Affiliation
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Prospect Martial Arts is a proud member of the <strong>Tang Soo Do Martial Arts
              Association (TSDMA)</strong>. Our affiliation connects our students to a recognized
              national federation with a shared commitment to the authentic practice and
              preservation of traditional Tang Soo Do.
            </p>
          </div>

          {/* Lineage */}
          <div
            className="rounded-2xl p-8 shadow-sm"
            style={{ backgroundColor: "#f4f7fb", border: "1px solid #e2e8f0" }}
          >
            <h3 className="text-xl font-extrabold mb-4" style={{ color: "#003B6F" }}>
              Our Lineage
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our lineage traces back to <strong>Kwanjinim Garth Charland</strong> of the Charland
              Institute of Karate and Fitness in Watertown, CT — a foundational figure in
              Connecticut&apos;s Tang Soo Do community. Master Capolupo, who earned her black belt
              under Kwanjinim Charland, has carried that tradition forward and passed it on to our
              instructors and students at PMA.
            </p>
          </div>

          {/* Instructor Credentials */}
          <div
            className="rounded-2xl p-8 shadow-sm md:col-span-2"
            style={{ backgroundColor: "#f4f7fb", border: "1px solid #e2e8f0" }}
          >
            <h3 className="text-xl font-extrabold mb-4" style={{ color: "#003B6F" }}>
              Instructor Credentials & Safety
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              All PMA instructors are <strong>First Aid trained</strong> and hold TSDMA-recognized
              black belt certifications in Tang Soo Do. The safety and well-being of every student
              — especially our youngest — is our top priority. Multiple instructors are present on
              the floor at all times, and our classes are structured to be both challenging and safe
              for every age and skill level.
            </p>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ color: "#003B6F" }}>
            What We Stand For
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            These four values guide everything we do — on the mat and beyond it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl flex-shrink-0">{v.emoji}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#003B6F" }}>
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOJANG PHOTO ───────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: "#003B6F" }}>
            Come See for Yourself
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
            Our school is a welcoming, energetic space where students of all ages train together.
            We invite you to come in, watch a class, and meet the team.
          </p>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="/images/gallery/20250717_194421.jpg"
              alt="Students training at Prospect Martial Arts"
              fill
              className="object-cover"
            />
          </div>
          <Link
            href="/#trial"
            style={{ backgroundColor: "#E22D33" }}
            className="inline-block text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            Book Your Free Trial Class
          </Link>
        </div>
      </section>
    </>
  );
}
