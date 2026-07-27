"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainLinks, programLinks } from "@/lib/nav";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

// Site navigation for the Demo Team page, styled from the demo page's own
// dark/crimson tokens (see app/demo/demo.css) rather than the navy site
// chrome. Same links as components/Navbar.tsx — both read from lib/nav.
export default function DemoHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMenuOpen(false);
    setProgramsOpen(false);
  }, [pathname]);

  return (
    <header className="demo-header">
      <nav className="demo-nav" aria-label="Main">
        {/* Logo + school name */}
        <Link href="/" className="demo-brand">
          <Image
            src="/images/logo.png"
            alt="Prospect Martial Arts Logo"
            width={44}
            height={44}
            priority
          />
          <span className="demo-brand-text">
            <span className="demo-brand-top">PROSPECT</span>
            <br />
            <span className="demo-brand-sub">Martial Arts</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="demo-nav-links">
          {mainLinks.slice(0, 3).map((link) => (
            <Link key={link.href} href={link.href} className="demo-nav-link">
              {link.label}
            </Link>
          ))}

          {/* Programs dropdown */}
          <div className="demo-dropdown" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setProgramsOpen(!programsOpen)}
              aria-expanded={programsOpen}
              aria-haspopup="true"
              className="demo-dropdown-toggle"
            >
              Programs
              <svg
                className={`demo-chevron${programsOpen ? " is-open" : ""}`}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {programsOpen && (
              <div className="demo-dropdown-panel">
                {programLinks.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setProgramsOpen(false)}
                    className="demo-dropdown-item"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinks.slice(3).map((link) => (
            <Link key={link.href} href={link.href} className="demo-nav-link">
              {link.label}
            </Link>
          ))}

          <a href={PHONE_HREF} className="demo-nav-phone">
            {PHONE_DISPLAY}
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-nav-cta"
          >
            Book Free Trial
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="demo-burger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="demo-mobile-menu">
          <div className="demo-mobile-inner">
            {mainLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="demo-mobile-link"
              >
                {link.label}
              </Link>
            ))}

            <p className="demo-mobile-heading">Programs</p>
            {programLinks.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setMenuOpen(false)}
                className="demo-mobile-link is-nested"
              >
                {p.label}
              </Link>
            ))}

            {mainLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="demo-mobile-link"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={PHONE_HREF}
              onClick={() => setMenuOpen(false)}
              className="demo-mobile-link"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="demo-mobile-cta"
            >
              Book Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
