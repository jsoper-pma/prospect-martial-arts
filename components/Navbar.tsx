"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { mainLinks as links, programLinks } from "@/lib/nav";
import BookTrialLink from "@/components/BookTrialLink";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export default function Navbar() {
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

  const isProgramPage = programLinks.some((p) => pathname === p.href);

  const desktopLinkClass = (href: string) =>
    `text-sm font-semibold tracking-wide transition-colors duration-200 ${
      pathname === href
        ? "text-white border-b-2 border-pma-red pb-1"
        : "text-blue-200 hover:text-white"
    }`;

  return (
    <header className="bg-pma-navy shadow-lg sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + School Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Prospect Martial Arts Logo"
            width={56}
            height={56}
            className="rounded-full"
          />
          <div className="leading-tight">
            <p className="text-white font-bold text-lg tracking-wide">PROSPECT</p>
            <p className="text-pma-red font-bold text-sm tracking-widest uppercase">Martial Arts</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-5">
          {links.slice(0, 3).map((link) => (
            <Link key={link.href} href={link.href} className={desktopLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}

          {/* Programs dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProgramsOpen(!programsOpen)}
              aria-expanded={programsOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                isProgramPage
                  ? "text-white border-b-2 border-pma-red pb-1"
                  : "text-blue-200 hover:text-white"
              }`}
            >
              Programs
              <ChevronDown
                className={`w-4 h-4 transition-transform ${programsOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {programsOpen && (
              <div className="absolute top-full left-0 mt-3 w-60 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                {programLinks.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setProgramsOpen(false)}
                    className={`block px-5 py-3 text-sm font-semibold transition-colors ${
                      pathname === p.href
                        ? "bg-pma-light text-pma-navy"
                        : "text-gray-700 hover:bg-pma-light hover:text-pma-navy"
                    }`}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {links.slice(3).map((link) => (
            <Link key={link.href} href={link.href} className={desktopLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}

          <a
            href={PHONE_HREF}
            className="text-blue-200 hover:text-white text-sm font-semibold tracking-wide transition-colors duration-200"
          >
            {PHONE_DISPLAY}
          </a>
          <BookTrialLink className="bg-pma-red text-white text-sm font-bold px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-200 shadow-md">
            Book Free Trial
          </BookTrialLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="bg-pma-navy-dark lg:hidden px-4 pb-4 flex flex-col gap-1">
          {links.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-semibold py-2.5 border-b border-blue-900 transition-colors ${
                pathname === link.href ? "text-white" : "text-blue-200 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Programs group */}
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 pt-3 pb-1">Programs</p>
          {programLinks.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-semibold py-2.5 pl-3 border-b border-blue-900 transition-colors ${
                pathname === p.href ? "text-white" : "text-blue-200 hover:text-white"
              }`}
            >
              {p.label}
            </Link>
          ))}

          {links.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-semibold py-2.5 border-b border-blue-900 transition-colors ${
                pathname === link.href ? "text-white" : "text-blue-200 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={PHONE_HREF}
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold py-2.5 border-b border-blue-900 text-blue-200 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden /> {PHONE_DISPLAY}
          </a>
          <BookTrialLink
            onClick={() => setMenuOpen(false)}
            className="bg-pma-red text-white text-sm font-bold text-center px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity mt-3"
          >
            Book Free Trial
          </BookTrialLink>
        </div>
      )}
    </header>
  );
}
