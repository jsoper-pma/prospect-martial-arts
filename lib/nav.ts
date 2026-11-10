// ── Shared navigation link data ────────────────────────────────────
// Single source of truth for site navigation. Consumed by Navbar,
// Footer, DemoHeader, and DemoFooter so chrome cannot drift as pages
// are added. Demo Team is not in the public Programs lists — /demo
// stays reachable by URL (and sitemap) only. Saturday Classes is listed.
// Store is rendered as its own dropdown (not in mainLinks).

import { MERCH_STORE_URL } from "@/lib/site";

export type NavLink = { href: string; label: string };

/** Top-level pages, in header order. Programs and Store are rendered separately. */
export const mainLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  // Programs dropdown rendered separately
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  // Store dropdown rendered separately
  { href: "/contact", label: "Contact" },
];

/** Program pages with the short labels used in the header dropdown. */
export const programLinks: NavLink[] = [
  { href: "/preschool", label: "Preschool (Ages 3–7)" },
  { href: "/kids", label: "Kids & Teens (Ages 8+)" },
  { href: "/adults", label: "Adults (Ages 17+)" },
  { href: "/saturday", label: "Saturday Classes" },
];

/** Program pages with the longer labels used in footers. */
export const programLinksLong: NavLink[] = [
  { href: "/preschool", label: "Preschool — Ages 3–7" },
  { href: "/kids", label: "Kids & Teens — Ages 8+" },
  { href: "/adults", label: "Adults — Ages 17+" },
  { href: "/saturday", label: "Saturday Classes" },
];

/** Top-level pages with the descriptive labels used in footers. */
export const quickLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/merch", label: "Merch" },
  { href: "/contact", label: "Contact & Location" },
];

/**
 * Merch store links for the header Store dropdown.
 * These go straight to the Printify shop (new tab). /merch only redirects
 * to the store home, so product URLs cannot go through that route.
 */
export const storeLinks: NavLink[] = [
  { href: MERCH_STORE_URL, label: "Shop merch" },
  { href: `${MERCH_STORE_URL}product/26983487`, label: "Zip hoodie" },
  { href: `${MERCH_STORE_URL}product/26983641`, label: "Logo sticker" },
  { href: `${MERCH_STORE_URL}product/26984318`, label: "Logo mug" },
];
