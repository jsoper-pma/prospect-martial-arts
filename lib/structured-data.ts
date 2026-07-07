import {
  ADDRESS,
  EMAIL,
  GEO,
  PHONE_DISPLAY,
  REVIEWS,
  SITE_URL,
  SOCIALS,
} from "./site";
import type { BlogPost } from "./blog-posts";

// ── LocalBusiness schema (site-wide) ───────────────────────────────
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": `${SITE_URL}/#business`,
    name: "Prospect Martial Arts",
    image: `${SITE_URL}/images/storefront.jpg`,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      "Traditional Tang Soo Do martial arts school in Prospect, CT. Classes for ages 3 to adult — Little Tigers, Little Dragons, Kids & Teens, and Adults. First class free.",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: "US",
    },
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    url: SITE_URL,
    priceRange: "$$",
    sameAs: [SOCIALS.facebook, SOCIALS.instagram, SOCIALS.youtube],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEWS.rating,
      reviewCount: String(REVIEWS.count),
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: String(GEO.latitude),
      longitude: String(GEO.longitude),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "16:30",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "11:30",
      },
    ],
  };
}

// ── FAQPage schema (/faq) ──────────────────────────────────────────
export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ── BlogPosting schema (/blog/[slug]) ──────────────────────────────
export function getBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Prospect Martial Arts",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

// ── BreadcrumbList schema ──────────────────────────────────────────
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
