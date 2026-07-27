import Image from "next/image";
import Link from "next/link";
import { programLinksLong, quickLinks } from "@/lib/nav";
import { ADDRESS, BOOKING_URL, EMAIL, PHONE_DISPLAY, PHONE_HREF, SOCIALS } from "@/lib/site";

// Footer for the Demo Team page. Same information architecture as
// components/Footer.tsx, styled from the demo page's dark/crimson tokens.
export default function DemoFooter() {
  return (
    <footer className="demo-footer">
      <div className="container demo-footer-grid">
        {/* Logo + CTA */}
        <div className="demo-footer-brand">
          <Image
            src="/images/logo.png"
            alt="Prospect Martial Arts Logo"
            width={72}
            height={72}
          />
          <p className="demo-footer-tagline">
            Prospect Martial Arts <span>•</span> Tang Soo Do
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-footer-cta"
          >
            Book a Free Trial
          </a>
        </div>

        {/* Programs */}
        <div className="demo-footer-col">
          <h3>Programs</h3>
          {programLinksLong.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="demo-footer-col">
          <h3>Quick Links</h3>
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="demo-footer-col">
          <h3>Contact Us</h3>
          <p>{ADDRESS.street}</p>
          <p>
            {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
          </p>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>

          <div className="demo-socials">
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href={SOCIALS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0a0a" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="demo-footer-bottom">
        © {new Date().getFullYear()} Prospect Martial Arts · {ADDRESS.full} · All Rights Reserved
      </div>
    </footer>
  );
}
