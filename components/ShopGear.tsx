import Image from "next/image";
import Link from "next/link";

// Quiet homepage merch block. One product photo, short school-voice copy,
// and a single button to /merch (redirects to the shop). Sits after the
// final trial CTA so it does not compete with the promo card or the
// free-class close.
export default function ShopGear() {
  return (
    <section className="py-16 px-4 bg-pma-cream" aria-labelledby="shop-gear-heading">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="relative aspect-square bg-white rounded-2xl shadow-md overflow-hidden">
          <Image
            src="/images/merch-zip-hoodie.jpg"
            alt="Prospect Martial Arts zip hoodie from our merch store"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-contain p-6"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 id="shop-gear-heading" className="text-3xl md:text-4xl font-extrabold mb-4 text-pma-navy">
            Shop PMA gear
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We made school gear for our students and families — a zip hoodie, a mug, and a
            logo sticker with the Prospect Martial Arts name on them.
          </p>
          <Link
            href="/merch"
            className="inline-block bg-pma-red text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            Shop merch
          </Link>
        </div>
      </div>
    </section>
  );
}
