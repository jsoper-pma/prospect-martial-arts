import Image from "next/image";
import GymDeskWidget from "@/components/GymDeskWidget";

const BOOKING_URL = "https://prospect-martial-arts.gymdesk.com/book/v/Ayw2q";

const programs = [
  {
    slug: "little-tigers",
    name: "Little Tigers",
    ages: "Ages 3–4",
    color: "#E22D33",
    tagline: "Their first step on the mat.",
    description:
      "Little Tigers is designed specifically for our youngest students — ages 3 and 4. Classes are short, structured, and full of fun. We focus on big-picture skills: following directions, taking turns, building coordination, and learning to love being active.",
    highlight: "A parent or guardian joins their child on the floor for every class. You are part of the experience.",
    details: [
      "30-minute classes, 4 days a week",
      "Mon, Tue, Wed, Thu — 4:30–5:00 PM",
      "Parent on the floor with their child",
      "Belt progression — Little Tigers earn their own belts",
    ],
    image: "/images/preschool/tigers-group.jpg",
    imageAlt: "Little Tigers class lineup at Prospect Martial Arts",
  },
  {
    slug: "little-dragons",
    name: "Little Dragons",
    ages: "Ages 5–7",
    color: "#003B6F",
    tagline: "More structure. More confidence. More fun.",
    description:
      "Little Dragons builds on the foundation with more technique, more structure, and the thrill of earning belts and growing their skills. Students in this program develop real discipline and focus — skills that carry into school and everyday life.",
    highlight: "Students participate independently on the mat while parents watch from the sideline.",
    details: [
      "30-minute classes, 4 days a week",
      "Mon, Tue, Wed, Thu — 5:00–5:30 PM",
      "Belt progression — Little Dragons earn their own belts",
      "No prior experience needed — ever",
    ],
    image: "/images/preschool/dragons-group.jpg",
    imageAlt: "Little Dragons class in action at Prospect Martial Arts",
  },
];

const benefits = [
  {
    emoji: "💪",
    title: "Confidence That Shows",
    desc: "Students leave every class standing taller. We celebrate every small win — because they all add up.",
  },
  {
    emoji: "🎯",
    title: "Focus and Listening Skills",
    desc: "Following directions, paying attention, taking turns — skills that directly benefit them in school.",
  },
  {
    emoji: "🤸",
    title: "Coordination and Fitness",
    desc: "Classes are active and age-appropriate, building balance, coordination, and a love of movement.",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "A Community of Their Own",
    desc: "Friendships form fast on the mat. Our students cheer each other on from day one.",
  },
];

const reviews = [
  {
    name: "Deanett Evans",
    text: "On Joshua's first day at Prospect Martial Arts he was welcomed and integrated in as though he had been there for several years. The staff has such excellent relationships with the kids and I love this about this facility.",
  },
  {
    name: "Kelly Bourlogiannis",
    text: "Our daughter joined PMA a few weeks ago and my husband and I are just blown away. The confidence boost she has gained by just attending 5 classes so far is amazing. Not only does she apply these skills in class, but the PMA team makes sure they are applied at home and in life as well.",
  },
  {
    name: "Kari Rebollo",
    text: "My son has only been attending for a week, and he's delighted with the practices. He seems very confident and happy to attend Prospect Martial Arts. The instructors are respectful and kind.",
  },
];

export default function PreschoolPage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/preschool/tigers-group.jpg"
          alt="Little Tigers class at Prospect Martial Arts"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,59,111,0.78)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: "#E22D33" }}
          >
            Preschool Programs · Ages 3–7
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 drop-shadow-lg">
            The Best Thing<br />
            <span style={{ color: "#fbbf24" }}>You Did All Week.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
            Little Tigers and Little Dragons are built for kids ages 3–7 — where every class builds confidence, coordination, and a love of learning that lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#E22D33" }}
              className="text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Book a Free Trial Class →
            </a>
            <a
              href="#programs"
              className="text-white font-bold text-lg px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              See the Programs
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-5">
            First class is always free. Just show up in comfortable clothes — we take care of everything else.
          </p>
        </div>
      </section>

      {/* ── QUICK REASSURANCE BAR ──────────────────────────────────── */}
      <section className="py-5 px-4" style={{ backgroundColor: "#003B6F" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          {[
            "✓  No uniform required for your first class",
            "✓  No martial arts experience needed",
            "✓  Free trial class — no commitment",
            "✓  Ages 3 through 7 welcome",
          ].map((item) => (
            <span key={item} className="text-blue-100 text-sm font-semibold">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── PROGRAM CARDS ──────────────────────────────────────────── */}
      <section id="programs" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3" style={{ color: "#003B6F" }}>
            Two Programs. One Great School.
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Both programs are designed for preschool-age children and rooted in the same Tang Soo Do tradition — just tailored to the right age.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((p) => (
              <div
                key={p.slug}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
              >
                {/* Photo */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    className="object-cover object-center"
                  />
                  {/* Age badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-white text-xs font-bold px-3 py-1.5 rounded-full shadow"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.ages}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-2xl font-extrabold mb-1" style={{ color: "#003B6F" }}>
                    {p.name}
                  </h3>
                  <p className="text-sm font-semibold mb-4" style={{ color: p.color }}>
                    {p.tagline}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                    {p.description}
                  </p>

                  {/* Highlight callout */}
                  <div
                    className="rounded-xl px-4 py-3 mb-5 text-sm font-semibold leading-snug"
                    style={{ backgroundColor: "#f4f7fb", borderLeft: `4px solid ${p.color}` }}
                  >
                    {p.highlight}
                  </div>

                  {/* Details list */}
                  <ul className="space-y-2 mb-7">
                    {p.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-0.5 text-base leading-none" style={{ color: p.color }}>✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block text-center text-white font-bold py-3 rounded-full shadow hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: p.color }}
                  >
                    Book a Free Trial →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT / FIRST CLASS ──────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#E22D33" }}
              >
                Your First Class
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5" style={{ color: "#003B6F" }}>
                Just show up.<br />We&apos;ll handle the rest.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                There is nothing you need to prepare, buy, or bring. All we ask is that your child wears comfortable clothing they can move in. Our instructors will take care of everything from there.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow"
                    style={{ backgroundColor: "#003B6F" }}
                  >
                    1
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Comfortable clothes — that&apos;s it</p>
                    <p className="text-gray-500 text-sm">No uniform, no gear, no equipment. Just clothes your child can move in.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow"
                    style={{ backgroundColor: "#003B6F" }}
                  >
                    2
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Little Tigers: parents on the floor</p>
                    <p className="text-gray-500 text-sm">For ages 3–4, parents or guardians participate alongside their child during every class. It&apos;s a shared experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow"
                    style={{ backgroundColor: "#003B6F" }}
                  >
                    3
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Little Dragons: students step out solo</p>
                    <p className="text-gray-500 text-sm">For ages 5–7, children participate independently on the mat while parents watch from the sideline — a big confidence milestone.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow"
                    style={{ backgroundColor: "#E22D33" }}
                  >
                    4
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Leave with a smile</p>
                    <p className="text-gray-500 text-sm">Classes are 30 minutes — the perfect length for little ones. Energizing, not exhausting.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: "#E22D33" }}
                  className="inline-block text-white font-bold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
                >
                  Book Your Free Trial →
                </a>
              </div>
            </div>

            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/preschool/tigers-self-defense.jpg"
                  alt="Instructor teaching self-defense technique to young students"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md mt-6">
                <Image
                  src="/images/preschool/dragons-elena-board-break.jpg"
                  alt="Young student breaking a board at Prospect Martial Arts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md -mt-6">
                <Image
                  src="/images/preschool/tigers-ms-smyth.jpg"
                  alt="Miss Smith instructing Little Tigers class"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/preschool/dragons-board-break-high-five.jpg"
                  alt="Student celebrating a board break with a high five"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY STRIP ────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8" style={{ color: "#003B6F" }}>
            See What Class Looks Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/preschool/tigers-mr-johnson.jpg", alt: "Mr. Johnson instructing the Little Tigers class" },
              { src: "/images/preschool/dragons-group.jpg",     alt: "Little Dragons class in action" },
              { src: "/images/preschool/dragons-kalani.jpg",    alt: "Little Dragons student performing a technique" },
              { src: "/images/preschool/tigers-foot-stomp.jpg", alt: "Young student practicing a foot stomp with instructor" },
              { src: "/images/preschool/dragons-star-block.jpg", alt: "Little Dragon student in a celebration pose" },
            ].map((photo, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden shadow-md ${i === 0 ? "col-span-2 aspect-video" : "aspect-square"}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS / WHY PMA ─────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#003B6F" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
            More Than Kicks and Punches
          </h2>
          <p className="text-blue-200 text-center mb-12 max-w-xl mx-auto">
            Parents notice real changes — not just in the school, but at home, in school, and everywhere in between.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{b.emoji}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#003B6F" }}>
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity border-2 border-white"
            >
              Book a Free Class — See for Yourself
            </a>
          </div>
        </div>
      </section>

      {/* ── CLASS SCHEDULE ─────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3" style={{ color: "#003B6F" }}>
            Class Schedule
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm">
            New schedule begins June 8, 2026. Four classes per week — pick the days that work for your family.
          </p>

          <div className="space-y-5">
            {/* Little Tigers schedule */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ backgroundColor: "#E22D33" }}
              >
                <div>
                  <h3 className="text-white font-extrabold text-lg">Little Tigers</h3>
                  <p className="text-red-100 text-sm">Ages 3–4 · Parent participation required</p>
                </div>
                <span className="bg-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ color: "#E22D33" }}>
                  Ages 3–4
                </span>
              </div>
              <div className="px-6 py-5 bg-white">
                <div className="grid grid-cols-2 gap-4">
                  {["Monday", "Tuesday", "Wednesday", "Thursday"].map((day) => (
                    <div key={day} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#E22D33" }} />
                      <div>
                        <p className="font-semibold text-sm text-gray-800">{day}</p>
                        <p className="text-gray-500 text-xs">4:30 – 5:00 PM</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Little Dragons schedule */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ backgroundColor: "#003B6F" }}
              >
                <div>
                  <h3 className="text-white font-extrabold text-lg">Little Dragons</h3>
                  <p className="text-blue-200 text-sm">Ages 5–7 · Independent on the mat</p>
                </div>
                <span className="bg-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ color: "#003B6F" }}>
                  Ages 5–7
                </span>
              </div>
              <div className="px-6 py-5 bg-white">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { day: "Monday", time: "5:00 – 5:30 PM" },
                    { day: "Tuesday", time: "5:00 – 5:30 PM" },
                    { day: "Wednesday", time: "5:00 – 5:30 PM" },
                    { day: "Thursday", time: "5:00 – 5:30 PM" },
                  ].map((row) => (
                    <div key={row.day} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#003B6F" }} />
                      <div>
                        <p className="font-semibold text-sm text-gray-800">{row.day}</p>
                        <p className="text-gray-500 text-xs">{row.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#E22D33" }}
              className="inline-block text-white font-bold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Book a Free Trial Class →
            </a>
          </div>
        </div>
      </section>

      {/* ── PARENT REVIEWS ─────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3" style={{ color: "#003B6F" }}>
            What Parents Are Saying
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm">Real reviews from Google — unedited.</p>
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
                <p className="font-bold text-sm" style={{ color: "#003B6F" }}>{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING WIDGET ─────────────────────────────────────────── */}
      <section id="trial" className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#003B6F" }}>
            Ready to Try a Free Class?
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            The first class is always on us. Book your free trial below — no commitment, no pressure. Just come meet us, see the school, and let your child try something great.
          </p>
          <div className="rounded-2xl shadow-lg p-6 bg-gray-50">
            <GymDeskWidget />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────── */}
      <section
        className="py-16 px-4 text-center text-white"
        style={{ backgroundColor: "#E22D33" }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          The First Class Is Free.<br />The Confidence Lasts a Lifetime.
        </h2>
        <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
          Come see why families in Prospect and the surrounding towns trust PMA with their little ones. We can&apos;t wait to meet them.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors inline-block"
          style={{ color: "#E22D33" }}
        >
          Book Your Free Trial Now →
        </a>
        <p className="text-red-200 text-sm mt-4">
          Questions? Call us at 203-441-5358 or email info@prospectma.com
        </p>
      </section>
    </>
  );
}
