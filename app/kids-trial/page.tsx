import type { Metadata } from "next";
import Image from "next/image";
import TrialSplit from "@/components/TrialSplit";
import {
  ADDRESS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Kids Trial Class | Prospect Martial Arts — Prospect, CT",
  description:
    "Book a free Tang Soo Do trial class for preschool and kids in Prospect, CT. Little Tigers, Little Dragons, and kids programs. After the free trial class, the first month is $50.",
  alternates: { canonical: "/kids-trial" },
  openGraph: {
    title: "Free Kids Trial Class — Prospect Martial Arts",
    description:
      "Free trial class for Little Tigers, Little Dragons, and kids. After the free trial, first month is $50. Prospect, CT.",
  },
  robots: { index: true, follow: true },
};

/** Prefer wide / face-safe shots. CSS uses object-top so heads stay in frame. */
const studentPhotos = [
  {
    src: "/images/preschool/tigers-group.jpg",
    alt: "Little Tigers class at Prospect Martial Arts",
  },
  {
    src: "/images/preschool/dragons-group.jpg",
    alt: "Little Dragons students training together",
  },
  {
    src: "/images/gallery/promo-class.jpg",
    alt: "Students punching in class at Prospect Martial Arts",
  },
  {
    src: "/images/preschool/tigers-foot-stomp.jpg",
    alt: "Little Tiger breaking a board with an instructor",
  },
  {
    src: "/images/preschool/dragons-elena-board-break-trial.jpg",
    alt: "Little Dragon breaking a board",
    fit: "contain" as const,
  },
  {
    src: "/images/gallery/promo-kids-jump.jpg",
    alt: "Kids jumping in Tang Soo Do class",
  },
];

const agePrograms = [
  {
    name: "Little Tigers",
    ages: "Ages 3–4",
    formPick: "On the form, pick Little Tigers.",
    image: "/images/preschool/tigers-group.jpg",
    imageAlt: "Little Tigers class lineup",
    blurb:
      "Short, fun Tang Soo Do classes where parents join on the floor. Confidence, listening, and coordination for our youngest students.",
  },
  {
    name: "Little Dragons",
    ages: "Ages 5–7",
    formPick: "On the form, pick Little Dragons.",
    image: "/images/preschool/dragons-group.jpg",
    imageAlt: "Little Dragons class in action",
    blurb:
      "More structure and skill-building. Students train on the mat while parents watch — focus, respect, and real progress.",
  },
  {
    name: "Kids & Teens",
    ages: "Ages 8+",
    formPick: "On the form, pick Kids & Teens (or the kids class for ages 8+).",
    image: "/images/gallery/promo-class.jpg",
    imageAlt: "Kids and teens training Tang Soo Do",
    blurb:
      "Traditional Tang Soo Do for kids and teens — forms, self-defense, and sparring with instructors who know every student.",
  },
];

function PhotoTile({
  src,
  alt,
  sizes,
  rounded = "rounded-2xl",
  fit = "cover",
}: {
  src: string;
  alt: string;
  sizes: string;
  rounded?: string;
  fit?: "cover" | "contain";
}) {
  const objectClass =
    fit === "contain" ? "object-contain object-center" : "object-cover object-top";
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden ${rounded} shadow-sm border border-gray-100 bg-pma-cream`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={objectClass}
        sizes={sizes}
      />
    </div>
  );
}

export default function KidsTrialPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 text-center text-white relative overflow-hidden bg-pma-navy">
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest bg-pma-red">
            Special Offer · Preschool &amp; Kids
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Your Child&apos;s Free Trial Class
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto mb-4">
            Real Tang Soo Do on our mats in Prospect — Little Tigers, Little
            Dragons, and kids. No experience needed. No uniform required for the
            trial.
          </p>
          <p className="text-white text-base md:text-lg font-semibold max-w-xl mx-auto mb-8">
            Book the free class today. After they try it, the first month is{" "}
            <span className="text-yellow-300">only $50</span>
            <span className="font-normal text-blue-100">
              {" "}
              if you enroll — nothing to pay just to book.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#trial"
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
          <p className="mt-6 text-blue-200 text-sm">
            {ADDRESS.street} · {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
          </p>
        </div>
      </section>

      {/* ── STUDENT PHOTOS ────────────────────────────────────── */}
      <section className="py-10 px-4 bg-white" aria-label="Students in class">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-pma-red mb-6">
            Our students on the mats
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {studentPhotos.map((photo) => (
              <li key={photo.src}>
                <PhotoTile
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  fit={"fit" in photo ? photo.fit : "cover"}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── OFFER CLARITY ─────────────────────────────────────── */}
      <section className="py-12 px-4 bg-pma-cream" aria-label="Trial offer details">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-pma-red/30 bg-white px-6 py-6 md:px-8 md:py-7 text-center shadow-sm">
            <h2 className="text-2xl font-extrabold text-pma-navy mb-3">
              A special welcome for new families
            </h2>
            <ol className="text-left max-w-xl mx-auto space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-pma-red text-white text-sm font-bold flex items-center justify-center">
                  1
                </span>
                <span>
                  <strong className="text-pma-navy">
                    Reserve your free trial class
                  </strong>{" "}
                  below — no payment to schedule.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-pma-red text-white text-sm font-bold flex items-center justify-center">
                  2
                </span>
                <span>
                  <strong className="text-pma-navy">Come try a class</strong> in
                  comfortable clothes. Meet the instructors and see how your
                  student lights up on the mat.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-pma-navy text-white text-sm font-bold flex items-center justify-center">
                  3
                </span>
                <span>
                  <strong className="text-pma-navy">
                    Love it? First month is $50
                  </strong>{" "}
                  when you enroll after class. Regular tuition follows — the $50
                  is never required just to take the free trial.
                </span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR (+ photos) ───────────────────────────── */}
      <section className="py-16 px-4 bg-white" aria-labelledby="ages-heading">
        <div className="max-w-5xl mx-auto">
          <h2
            id="ages-heading"
            className="text-3xl font-extrabold text-center mb-3 text-pma-navy"
          >
            Programs designed for your child&apos;s age group
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Traditional Tang Soo Do in Prospect, CT. When you book below, choose
            the program that matches your child&apos;s age.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agePrograms.map((p) => (
              <li
                key={p.name}
                className="rounded-2xl bg-pma-cream border border-gray-100 shadow-sm overflow-hidden"
              >
                <PhotoTile
                  src={p.image}
                  alt={p.imageAlt}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  rounded="rounded-none"
                />
                <div className="px-6 py-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-pma-red mb-2">
                    {p.ages}
                  </p>
                  <h3 className="text-xl font-extrabold text-pma-navy mb-2">
                    {p.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {p.blurb}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-pma-navy">
                    {p.formPick}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── BOOKING ───────────────────────────────────────────── */}
      <section id="trial" className="py-16 px-4 bg-pma-cream scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-pma-navy">
              Claim your free trial
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              You&apos;ll need the student&apos;s full name, email, phone, and
              date of birth. Then pick the program for their age — Little Tigers
              (3–4), Little Dragons (5–7), or Kids &amp; Teens (8+) — and a class
              time that works for your family.
            </p>
            <p className="text-pma-navy font-semibold mb-8">
              Free trial first · $50 first month only if you enroll after class ·{" "}
              <a href={PHONE_HREF} className="underline hover:text-pma-red">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-5xl mx-auto">
            {studentPhotos.slice(0, 4).map((photo) => (
              <li key={`near-form-${photo.src}`}>
                <PhotoTile
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  rounded="rounded-xl"
                />
              </li>
            ))}
          </ul>

          <TrialSplit />
        </div>
      </section>

      {/* ── LOCAL FOOTNOTE ────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white" aria-label="Location and contact">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-pma-navy font-bold text-lg mb-2">
            Prospect Martial Arts · Prospect, CT
          </p>
          <p className="text-gray-600 mb-6">
            {ADDRESS.full}
            <br />
            Call or text{" "}
            <a
              href={PHONE_HREF}
              className="font-semibold text-pma-navy hover:underline"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
          <a
            href="#trial"
            className="inline-block bg-pma-red text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Book Your Free Trial Class
          </a>
        </div>
      </section>
    </>
  );
}
