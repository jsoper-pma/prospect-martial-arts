import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#003B6F" }} className="text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image
            src="/images/logo.png"
            alt="Prospect Martial Arts Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <p className="text-blue-200 text-sm text-center md:text-left leading-relaxed">
            Everyone has greatness in them.<br />
            It just takes the right teacher<br />
            to help bring it out.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-bold text-base mb-1 tracking-wide uppercase" style={{ color: "#E22D33" }}>
            Quick Links
          </h3>
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/team", label: "Our Team" },
            { href: "/contact", label: "Contact & Location" },
            { href: "/#trial", label: "Book a Free Trial" },
          ].map((link) => (
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
          <h3 className="font-bold text-base mb-1 tracking-wide uppercase" style={{ color: "#E22D33" }}>
            Contact Us
          </h3>
          <p className="text-blue-200 text-sm">73 Waterbury Road</p>
          <p className="text-blue-200 text-sm">Prospect, CT</p>
          <a href="tel:2034415358" className="text-blue-200 hover:text-white text-sm transition-colors">
            (203) 441-5358
          </a>
          <a href="mailto:info@prospectma.com" className="text-blue-200 hover:text-white text-sm transition-colors">
            info@prospectma.com
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/Pmatangsoodo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/prospectmartialartsct"
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
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@ProspectMartialArts"
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

      <div style={{ backgroundColor: "#002a52" }} className="text-center text-blue-300 text-xs py-4 px-4">
        © {new Date().getFullYear()} Prospect Martial Arts · 73 Waterbury Road, Prospect, CT · All Rights Reserved
      </div>
    </footer>
  );
}
