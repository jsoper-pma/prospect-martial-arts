// ── Shared navigation link data ────────────────────────────────────
// Single source of truth for site navigation. Consumed by Navbar,
// Footer, DemoHeader, and DemoFooter so chrome cannot drift as pages
// are added. Demo Team is not in the public Programs lists — /demo
// stays reachable by URL (and sitemap) only.

export type NavLink = { href: string; label: string };

/** Top-level pages, in header order. Programs is rendered separately. */
export const mainLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  // Programs dropdown rendered separately
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

/** Program pages with the short labels used in the header dropdown. */
export const programLinks: NavLink[] = [
  { href: "/preschool", label: "Preschool (Ages 3–7)" },
  { href: "/kids", label: "Kids & Teens (Ages 8+)" },
  { href: "/adults", label: "Adults (Ages 17+)" },
];

/** Program pages with the longer labels used in footers. */
export const programLinksLong: NavLink[] = [
  { href: "/preschool", label: "Preschool — Ages 3–7" },
  { href: "/kids", label: "Kids & Teens — Ages 8+" },
  { href: "/adults", label: "Adults — Ages 17+" },
];

/** Top-level pages with the descriptive labels used in footers. */
export const quickLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact & Location" },
];
