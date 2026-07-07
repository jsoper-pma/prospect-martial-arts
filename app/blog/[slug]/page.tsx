import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Markdown from "@/components/Markdown";
import JsonLd from "@/components/JsonLd";
import {
  getAllPosts,
  getPostBySlug,
  getReadingTime,
  getRelatedPosts,
} from "@/lib/blog-posts";
import { getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/structured-data";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      images: [{ url: post.image }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <>
      <JsonLd
        data={[
          getBlogPostingSchema(post),
          getBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
            { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* ── HEADER ────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-pma-navy text-white">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" aria-hidden />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" aria-hidden />
            <span className="text-white/80 truncate max-w-[16rem] sm:max-w-none">{post.title}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">{post.title}</h1>
          <p className="text-blue-200 text-sm">
            By {post.author} · {formatDate(post.publishedAt)} · {getReadingTime(post.content)} min
            read
          </p>
        </div>
      </section>

      {/* ── COVER IMAGE ───────────────────────────────────────── */}
      <section className="px-4 bg-white">
        <div className="max-w-3xl mx-auto -mt-0 pt-8">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── ARTICLE ───────────────────────────────────────────── */}
      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <Markdown content={post.content} />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-pma-light text-pma-navy"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-10 rounded-2xl bg-pma-cream border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-extrabold text-pma-navy mb-2">
              Your First Class Is Free
            </h2>
            <p className="text-gray-600 mb-6">
              Come see Prospect Martial Arts for yourself — no commitment, no experience needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pma-red text-white font-bold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
              >
                Book a Free Trial Class
              </a>
              <a
                href={PHONE_HREF}
                className="inline-block text-pma-navy font-bold px-8 py-4 rounded-full border-2 border-pma-navy hover:bg-pma-navy hover:text-white transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* ── RELATED POSTS ─────────────────────────────────────── */}
      <section className="py-14 px-4 bg-pma-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-pma-navy">
            Keep Reading
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-base leading-snug text-pma-navy mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-xs text-pma-warm-gray">
                    {formatDate(p.publishedAt)} · {getReadingTime(p.content)} min read
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-block font-bold text-pma-navy border-2 border-pma-navy px-8 py-3 rounded-full hover:bg-pma-navy hover:text-white transition-colors"
            >
              ← All Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
