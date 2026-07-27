// ── Shared navigation link data ────────────────────────────────────
// Single source of truth for site navigation. Consumed by Navbar,
// Footer, DemoHeader, and DemoFooter so the demo page's chrome cannot
// drift from the main site's as pages are added.

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
  // Audition-only, so it carries no age tier like the enrollment programs above.
  { href: "/demo", label: "Demo & Competition Team" },
];

/** Program pages with the longer labels used in footers. */
export const programLinksLong: NavLink[] = [
  { href: "/preschool", label: "Preschool — Ages 3–7" },
  { href: "/kids", label: "Kids & Teens — Ages 8+" },
  { href: "/adults", label: "Adults — Ages 17+" },
  { href: "/demo", label: "Demo & Competition Team" },
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
