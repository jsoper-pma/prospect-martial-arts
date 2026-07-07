import Image from "next/image";
import Link from "next/link";
import { ADDRESS, BOOKING_URL, EMAIL, PHONE_DISPLAY, PHONE_HREF, SOCIALS } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact & Location" },
];

const programLinks = [
  { href: "/preschool", label: "Preschool — Ages 3–7" },
  { href: "/kids", label: "Kids & Teens — Ages 8+" },
  { href: "/adults", label: "Adults — Ages 17+" },
];

export default function Footer() {
  return (
    <footer className="bg-pma-navy text-white mt-auto">
      {/* ── QUOTE BAND ────────────────────────────────────────── */}
      <div className="bg-pma-navy-dark px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white text-xl md:text-2xl font-semibold italic leading-relaxed mb-1">
            &ldquo;Everyone has greatness in them.
          </p>
          <p className="text-white text-xl md:text-2xl font-semibold italic leading-relaxed mb-3">
            It just takes the right teacher to help bring it out.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-pma-red" />
            <p className="text-blue-200 text-sm font-semibold tracking-wide">
              Mr. Soper &nbsp;·&nbsp; Owner, Prospect Martial Arts
            </p>
            <div className="h-px w-10 bg-pma-red" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + CTA */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image
            src="/images/logo.png"
            alt="Prospect Martial Arts Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pma-red text-white text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-md"
          >
            Book a Free Trial
          </a>
        </div>

        {/* Programs */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-bold text-base mb-1 tracking-wide uppercase text-pma-red">Programs</h3>
          {programLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-blue-200 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-bold text-base mb-1 tracking-wide uppercase text-pma-red">Quick Links</h3>
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-blue-200 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-bold text-base mb-1 tracking-wide uppercase text-pma-red">Contact Us</h3>
          <p className="text-blue-200 text-sm">{ADDRESS.street}</p>
          <p className="text-blue-200 text-sm">
            {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
          </p>
          <a href={PHONE_HREF} className="text-blue-200 hover:text-white text-sm transition-colors">
            {PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-blue-200 hover:text-white text-sm transition-colors"
          >
            {EMAIL}
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href={SOCIALS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar — extra bottom padding on mobile clears the sticky CTA */}
      <div className="bg-pma-navy-dark text-center text-blue-300 text-xs py-4 px-4 pb-24 md:pb-4">
        © {new Date().getFullYear()} Prospect Martial Arts · {ADDRESS.full} · All Rights Reserved
      </div>
    </footer>
  );
}
