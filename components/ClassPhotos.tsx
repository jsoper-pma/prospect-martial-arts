import Image from "next/image";

// Real class photos already on the live site (public/images). Adults + kids + preschool.
// Never add 20260424_* photos (Parents Night Out).
const PHOTOS = [
  { src: "/images/program-card-adult-tang-soo-do.png", alt: "Adult Tang Soo Do class at Prospect Martial Arts" },
  { src: "/images/gallery/promo-forms.jpg", alt: "Students practicing Tang Soo Do forms" },
  { src: "/images/gallery/promo-kids-jump.jpg", alt: "Kids jumping in Tang Soo Do class" },
  { src: "/images/gallery/promo-board-break.jpg", alt: "Student breaking a board in Tang Soo Do class" },
  { src: "/images/preschool/dragons-group.jpg", alt: "Little Dragons students training together" },
  { src: "/images/preschool/tigers-group.jpg", alt: "Little Tigers class at Prospect Martial Arts" },
];

export default function ClassPhotos({ heading = "Our students on the mats" }: { heading?: string }) {
  return (
    <section className="py-10 px-4 bg-white" aria-label="Students in class">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-bold uppercase tracking-widest mb-6" style={{ color: "#E22D33" }}>
          {heading}
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {PHOTOS.map((p) => (
            <li key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm border border-gray-100 bg-pma-cream">
              <Image src={p.src} alt={p.alt} fill className="object-cover object-top" sizes="(max-width: 768px) 50vw, 33vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
