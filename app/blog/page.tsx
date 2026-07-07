import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getAllPosts, getReadingTime } from "@/lib/blog-posts";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { BOOKING_URL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Martial Arts Tips & Insights",
  description:
    "Martial arts tips, parenting insights, and Tang Soo Do knowledge from Prospect Martial Arts in Prospect, CT. Advice for families in the Waterbury area and beyond.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Prospect Martial Arts Blog",
    description:
      "Martial arts tips, parenting insights, and Tang Soo Do knowledge from Prospect, CT.",
  },
};

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
        ])}
      />

      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      <section className="py-20 px-4 text-center text-white bg-pma-navy">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">The PMA Blog</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Martial arts tips, parenting insights, and Tang Soo Do knowledge — from our mats in
            Prospect, CT to your screen.
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ─────────────────────────────────────── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-8 items-center rounded-2xl overflow-hidden bg-pma-cream shadow-md hover:shadow-xl transition-shadow p-6 md:p-8"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-pma-red mb-3">
                Latest Post
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-pma-navy mb-3 leading-snug">
                {featured.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">{featured.excerpt}</p>
              <p className="text-sm text-pma-warm-gray">
                {formatDate(featured.publishedAt)} · {getReadingTime(featured.content)} min read
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── POST GRID ─────────────────────────────────────────── */}
      <section className="pb-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h2 className="font-extrabold text-lg leading-snug text-pma-navy mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <p className="text-xs text-pma-warm-gray mt-4">
                  {formatDate(post.publishedAt)} · {getReadingTime(post.content)} min read
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-16 px-4 text-center text-white bg-pma-red">
        <h2 className="text-3xl font-extrabold mb-4">Reading Is Great. Training Is Better.</h2>
        <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
          Your first class at Prospect Martial Arts is free — for any age, any program.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-pma-red font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors inline-block"
        >
          Book Your Free Trial Class
        </a>
      </section>
    </>
  );
}
