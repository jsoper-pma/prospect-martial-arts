import Image from "next/image";
import Link from "next/link";

const instructors = [
  {
    name: "Master Gail Capolupo",
    title: "Master Instructor",
    photo: "/images/instructors/gail-capolupo.png",
    bio: "Master Capolupo is an experienced martial arts instructor who has been practicing for well over two decades, including training in Kuntao. She has toured the country on demo teams and brings a vast library of knowledge to share with her black belts. With a calm demeanor, she is approachable and caring, always focused on supporting her students. Master Capolupo genuinely cares about each student's progress and wants to see both the school and all its students succeed.",
  },
  {
    name: "Mr. Sean Downey",
    title: "Head Instructor",
    photo: "/images/instructors/sean-downey.png",
    bio: "Mr. Downey is an experienced martial arts instructor who brings years of dedicated training and teaching experience to the mat. As Head Instructor, he leads with calm authority and a genuine passion for Tang Soo Do that inspires students at every level. He started his martial arts journey over a decade ago with his two sons, who also earned their black belts. Committed to the art and his students, Mr. Downey is always developing new ways to challenge and excite them, helping set the standard for everything at PMA.",
  },
  {
    name: "Mr. David Davidson",
    title: "Assistant Head Instructor",
    photo: "/images/instructors/david-davidson.png",
    bio: "Mr. Davidson is the Assistant Head Instructor and one of the most passionate members of the instructor team. He earned his second-degree black belt in his late teens and has returned to his passion for teaching Tang Soo Do. He dedicates himself to improving the PMA program and ensuring every student gets the most out of their training. Busy both on the mats and behind the scenes, he single-handedly developed the school's self-defense curriculum and brings a never-quit attitude to everything he does.",
  },
  {
    name: "Mr. Brian Tovar",
    title: "Instructor",
    photo: "/images/instructors/brian-tovar.png",
    bio: "Mr. Tovar is a martial arts instructor with unmatched technical precision that most martial artists aspire to reach. Training for around five years, he brings a sunny disposition to every class and is always upbeat and excited with the students. Loud and energetic when teaching, Mr. Tovar always has a smile on his face and keeps the energy high for everyone on the mat.",
  },
  {
    name: "Mr. Blaine Johnson",
    title: "Instructor",
    photo: "/images/instructors/blaine-johnson.png",
    bio: "Mr. Johnson is the energetic and quick-witted martial arts instructor who brings fun and excitement to every class. Practicing since 2021, he overcame his own timidity through martial arts, gaining lasting confidence and friendships while now empowering his students to do the same. His favorite part of teaching is building strong bonds with the kids — being the upbeat mentor they can look up to, joke around with, or talk to about their day. Funny, caring, and genuinely invested, Mr. Johnson helps every student grow both on the mat and off.",
  },
  {
    name: "Ms. Aaliyah Smyth",
    title: "Instructor",
    photo: "/images/instructors/aaliyah-smyth.png",
    bio: "Ms. Smyth is a martial arts instructor with a bubbly personality who has been training for about two years. As the youngest and newest member of the instructor core, she brings fantastic dedication and strong technical ability to every class. With a soft and approachable demeanor, she works especially well with younger students while maintaining the technical precision that inspires students of all ages.",
  },
  {
    name: "Mr. Jason Soper",
    title: "Owner",
    photo: "/images/instructors/jason-soper.png",
    bio: "Mr. Soper is a martial arts instructor who has been training since 2016. In 2025, he purchased Prospect Martial Arts and united two martial arts communities under one roof. While he prefers to keep the spotlight on his team and students, his leadership shapes the school's direction — creating a place where every person is valued, every effort is recognized, and everyone belongs. Approachable and supportive, Mr. Soper wants to see his students succeed in every aspect of their lives.",
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
