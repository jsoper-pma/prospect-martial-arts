import Image from "next/image";
import Link from "next/link";

const instructors = [
  {
    name: "Mr. Sean Downey",
    title: "Head Instructor",
    photo: "/images/instructors/sean-downey.jpg",
    bio: "Mr. Downey brings years of dedicated training and teaching experience to the mat. As Head Instructor, he leads with a calm authority and genuine passion for Tang Soo Do that inspires students at every level. His commitment to the art and to his students sets the standard for everything we do at PMA.",
  },
  {
    name: "Mr. David Davidson",
    title: "Assistant to the Head Instructor",
    photo: "/images/instructors/david-davidson.jpg",
    bio: "Mr. Davidson's technical precision and encouraging teaching style make him an invaluable part of the PMA team. As Assistant Head Instructor, he works closely with students to ensure they not only learn proper technique, but develop the confidence and discipline that Tang Soo Do is built on.",
  },
  {
    name: "Brian Tovar",
    title: "Instructor",
    photo: "/images/instructors/brian-tovar.jpg",
    bio: "Instructor Tovar brings energy and enthusiasm to every class. His ability to connect with students of all ages and skill levels makes him a favorite among our younger students and their families. He leads with patience, positivity, and a deep respect for the art.",
  },
  {
    name: "Blaine Johnson",
    title: "Instructor",
    photo: "/images/instructors/blaine-johnson.jpg",
    bio: "Instructor Johnson is dedicated to helping every student find their footing — whether they are stepping on the mat for the first time or preparing for an advanced belt test. His steady, encouraging presence helps students push past self-doubt and discover what they are capable of.",
  },
  {
    name: "Aaliyah Smyth",
    title: "Instructor",
    photo: "/images/instructors/aaliyah-smith.jpg",
    bio: "Instructor Smith is a rising presence at PMA who leads by example. Her dedication to continuous growth — as both a martial artist and a teacher — inspires the students around her. She brings warmth, focus, and a genuine love for Tang Soo Do to every class she teaches.",
  },
  {
    name: "Jason Soper",
    title: "Owner",
    photo: "/images/instructors/jason-soper.jpg",
    bio: "Jason purchased Prospect Martial Arts in 2025 and united two martial arts communities under one roof. While he prefers to keep the spotlight on his team and his students, his vision shapes everything about PMA — a school where every person is valued, every effort is recognized, and everyone truly belongs.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      <section
        className="py-20 px-4 text-center text-white"
        style={{ backgroundColor: "#003B6F" }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Team</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Our instructors don&apos;t just teach martial arts — they invest in people.
            They know your name, your goals, and your story.
          </p>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            At Prospect Martial Arts, you are never just a number. From your very first class, you
            will have instructors who genuinely know you — who celebrate your wins, push you past
            your limits, and are honored to be part of your journey. That personal connection is
            what sets PMA apart.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 rounded-full" style={{ backgroundColor: "#E22D33" }} />
          </div>
        </div>
      </section>

      {/* ── INSTRUCTOR CARDS ──────────────────────────────────── */}
      <section className="py-12 px-4 pb-20" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Portrait */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={instructor.photo}
                  alt={`${instructor.name} — ${instructor.title} at Prospect Martial Arts`}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                  <h2 className="font-extrabold text-xl" style={{ color: "#003B6F" }}>
                    {instructor.name}
                  </h2>
                  <p className="font-semibold text-sm mt-0.5" style={{ color: "#E22D33" }}>
                    {instructor.title}
                  </p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{instructor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        className="py-16 px-4 text-center text-white"
        style={{ backgroundColor: "#003B6F" }}
      >
        <h2 className="text-3xl font-extrabold mb-4">Come Meet the Team in Person</h2>
        <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
          The best way to get to know us is to walk through the door. Your first class is free —
          no experience needed, no commitment required.
        </p>
        <Link
          href="/#trial"
          style={{ backgroundColor: "#E22D33" }}
          className="inline-block text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
        >
          Book Your Free Trial Class
        </Link>
      </section>
    </>
  );
}
