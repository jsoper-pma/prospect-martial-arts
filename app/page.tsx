import Image from "next/image";
import Link from "next/link";
import GymDeskWidget from "@/components/GymDeskWidget";

// ── Program cards data ────────────────────────────────────────────
const BOOKING_URL = "https://prospect-martial-arts.gymdesk.com/book/v/Ayw2q";

const programs = [
  {
    image: "/images/program-card-little-tigers.png",
    title: "Little Tigers",
    ages: "Ages 3–4",
    desc: "A fun, high-energy introduction to martial arts built for our youngest students. Little Tigers develop coordination, listening skills, and confidence in a safe, nurturing environment.",
  },
  {
    image: "/images/program-card-little-dragons.png",
    title: "Little Dragons",
    ages: "Ages 5–7",
    desc: "Our Little Dragons program builds on the basics with more structure, discipline, and exciting techniques. Students earn belts and grow their confidence with every class.",
  },
  {
    image: "/images/program-card-tang-soo-do-youth.png",
    title: "Tang Soo Do",
    ages: "Ages 8+ · All Levels",
    desc: "Traditional Tang Soo Do for kids and teens. Students learn forms, self-defense, and sparring while developing focus, respect, and the discipline that carries into every area of life.",
  },
  {
    image: "/images/program-card-adult-tang-soo-do.png",
    title: "Adult Tang Soo Do",
    ages: "Ages 17+",
    desc: "Whether you're a complete beginner or returning to the mat, our adult program offers a welcoming community, great fitness, and authentic Tang Soo Do training at every level.",
  },
];

// ── Reviews data ──────────────────────────────────────────────────
const reviews = [
  {
    name: "Deanett Evans",
    text: "On Joshua's first day at Prospect Martial Arts he was welcomed and integrated in as though he had been there for several years. The staff has such excellent relationships with the kids and I love this about this facility.",
    timeAgo: "2 months ago",
  },
  {
    name: "Kelly Bourlogiannis",
    text: "Our daughter joined PMA a few weeks ago and my husband and I are just blown away. The confidence boost she has gained by just attending 5 classes so far is amazing. Not only does she apply these skills in class, but the PMA team makes sure they are applied at home and in life as well.",
    timeAgo: "1 year ago",
  },
  {
    name: "Kyle Litke",
    text: "My kids both attend Prospect Martial Arts and it has been a great experience. Everyone working there truly cares about the kids, and they have learned a lot. Highly recommend!",
    timeAgo: "4 months ago",
  },
  {
    name: "Lissette Sequeira",
    text: "My daughter joined Prospect Martial Arts almost a year ago. She loves it because it keeps her active, and gets to learn moves to defend herself. I really enjoy watching her giving her best. I like the energy of the team, and everyone is willing to help you master the skill.",
    timeAgo: "1 year ago",
  },
  {
    name: "Kari Rebollo",
    text: "My son has only been attending for a week, and he's delighted with the practices. He seems very confident and happy to attend Prospect Martial Arts. The instructors are respectful and kind.",
    timeAgo: "1 year ago",
  },
];

// ── Why PMA pillars ───────────────────────────────────────────────
const pillars = [
  {
    emoji: "🥋",
    title: "Traditional Tang Soo Do",
    desc: "A classical Korean martial art with roots going back centuries. We honor the tradition while making it accessible to everyone.",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "A True Family Community",
    desc: "PMA is a second home. Our instructors genuinely know every student — their goals, their struggles, and their wins.",
  },
  {
    emoji: "💪",
    title: "Confidence That Lasts",
    desc: "We build confident, disciplined people — not just on the mat, but in school, at work, and in everyday life.",
  },
  {
    emoji: "🌟",
    title: "All Ages, All Levels",
    desc: "From our youngest Little Tigers to adult students, everyone is welcome here. No experience necessary — ever.",
  },
];

// ── Schedule data ─────────────────────────────────────────────────
const weekdaySchedule = [
  { time: "4:30 – 5:00 PM", monWed: "Little Tigers", tuesThu: "Little Tigers" },
  { time: "5:00 – 5:30 PM", monWed: "Little Dragons", tuesThu: "Little Dragons" },
  { time: "5:30 – 6:15 PM", monWed: "Beginners", tuesThu: "Intermediate" },
  { time: "6:15 – 7:00 PM", monWed: "Intermediate", tuesThu: "Beginners" },
  { time: "7:00 – 7:15 PM", monWed: "Leadership", tuesThu: "—" },
  { time: "7:00 – 7:45 PM", monWed: "Adult Gups 17+", tuesThu: "Black Belts" },
  { time: "7:45 – 8:30 PM", monWed: "Advanced", tuesThu: "Advanced" },
];

const saturdaySchedule = [
  { time: "9:00 – 9:30 AM", cls: "Little Dragons" },
  { time: "9:40 – 10:40 AM", cls: "Sparring & Endurance" },
  { time: "10:50 – 11:30 AM", cls: "Weapons" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/gallery/20250717_194337.jpg"
          alt="Prospect Martial Arts instructor"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,59,111,0.75)" }} />

        {/* Hero content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <Image
            src="/images/logo.png"
            alt="Prospect Martial Arts Logo"
            width={120}
            height={120}
            className="mx-auto mb-6 rounded-full shadow-2xl"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Where Everyone<br />
            <span style={{ color: "#E22D33" }}>Belongs on the Mat</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
            Traditional Tang Soo Do in Prospect, CT. Classes for kids, teens, and adults — all skill levels welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#trial"
              style={{ backgroundColor: "#E22D33" }}
              className="text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Book Your Free Trial Class
            </a>
            <Link
              href="/about"
              className="text-white font-bold text-lg px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROGRAM CARDS ─────────────────────────────────────── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3" style={{ color: "#003B6F" }}>
            Find Your Program
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
            We have a class for every age and every level. Click any program to book your free trial.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <a
                key={program.title}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Card image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={`${program.title} program at Prospect Martial Arts`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card body */}
                <div className="p-5 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-extrabold text-lg" style={{ color: "#003B6F" }}>
                      {program.title}
                    </h3>
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-full text-white flex-shrink-0"
                      style={{ backgroundColor: "#E22D33" }}
                    >
                      {program.ages}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {program.desc}
                  </p>
                  <div
                    className="text-center text-sm font-bold py-2 rounded-full text-white transition-opacity group-hover:opacity-90"
                    style={{ backgroundColor: "#003B6F" }}
                  >
                    Book a Free Trial →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#003B6F" }}>
            More Than a Martial Arts School
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Prospect Martial Arts is a family. We teach traditional Tang Soo Do — a classical Korean martial art —
            but what really sets us apart is the people. Our instructors know every student by name, celebrate every
            milestone, and are genuinely invested in helping each person grow. Whether you&apos;re four years old or forty,
            a complete beginner or a seasoned martial artist, you will find your place here.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 rounded-full" style={{ backgroundColor: "#E22D33" }} />
          </div>
        </div>
      </section>

      {/* ── WHY PMA PILLARS ───────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12" style={{ color: "#003B6F" }}>
            Why Families Choose PMA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{p.emoji}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#003B6F" }}>
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ───────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-8" style={{ color: "#003B6F" }}>
            Life at Prospect Martial Arts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "/images/gallery/20250717_194421.jpg",
              "/images/gallery/20250620_195300.jpg",
              "/images/gallery/20250808_195450.jpg",
              "/images/gallery/2025_TSDMAFUNDRAISER_1-35.jpg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                <Image src={src} alt={`Prospect Martial Arts photo ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLASS SCHEDULE ────────────────────────────────────── */}
      <section id="schedule" className="py-16 px-4" style={{ backgroundColor: "#003B6F" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
            Class Schedule
          </h2>
          <p className="text-blue-200 text-center mb-10 text-sm">
            New schedule begins June 8, 2026 following the promotion ceremony.
          </p>

          {/* Weekday table */}
          <div className="overflow-x-auto rounded-2xl shadow-lg mb-8">
            <table className="w-full text-sm text-center">
              <thead>
                <tr style={{ backgroundColor: "#E22D33" }}>
                  <th className="text-white font-bold px-4 py-3 text-left">Time</th>
                  <th className="text-white font-bold px-4 py-3">Monday &amp; Wednesday</th>
                  <th className="text-white font-bold px-4 py-3">Tuesday &amp; Thursday</th>
                </tr>
              </thead>
              <tbody>
                {weekdaySchedule.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                    <td className="px-4 py-3 font-semibold text-left" style={{ color: "#003B6F" }}>
                      {row.time}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{row.monWed}</td>
                    <td className="px-4 py-3 text-gray-700">{row.tuesThu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Saturday */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-4 text-center" style={{ color: "#003B6F" }}>
              Saturday Classes
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {saturdaySchedule.map((row) => (
                <div key={row.time} className="text-center px-6 py-3 rounded-xl" style={{ backgroundColor: "#f4f7fb" }}>
                  <p className="font-bold text-sm" style={{ color: "#E22D33" }}>{row.time}</p>
                  <p className="font-semibold text-gray-800 mt-1">{row.cls}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">
              * Saturday classes depend on instructor availability. Check with instructors for dates.
            </p>
          </div>

          {/* Private lessons callout */}
          <div
            className="text-center rounded-2xl p-5"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <p className="text-white font-semibold">
              🎂 <strong>Birthday Parties</strong> available Saturdays 1–3 PM &nbsp;·&nbsp;
              🥋 <strong>Private Lessons</strong> available Fri, Sat &amp; Sun — $30 / 30 min
            </p>
            <p className="text-blue-200 text-sm mt-1">Contact us to check instructor availability.</p>
          </div>
        </div>
      </section>

      {/* ── FREE TRIAL BOOKING ────────────────────────────────── */}
      <section id="trial" className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#003B6F" }}>
            Try a Free Class — On Us
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            The best way to experience Prospect Martial Arts is to come in. Fill out the form below
            and we&apos;ll get you set up for a free trial class. No commitment, no pressure — just come
            see what we&apos;re all about.
          </p>
          {/* GymDesk Booking Widget */}
          <div className="rounded-2xl shadow-lg p-6 bg-gray-50">
            <GymDeskWidget />
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ color: "#003B6F" }}>
            What Our Students&apos; Families Say
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm">Real reviews from Google — unedited.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#003B6F" }}>{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.timeAgo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section
        className="py-16 px-4 text-center text-white"
        style={{ backgroundColor: "#E22D33" }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
          Your first class is free. Come meet the team, see the dojo, and discover why so many
          families call Prospect Martial Arts their second home.
        </p>
        <a
          href="#trial"
          className="bg-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors inline-block"
          style={{ color: "#E22D33" }}
        >
          Book Your Free Trial Now
        </a>
      </section>
    </>
  );
}
