"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{ backgroundColor: "#003B6F" }} className="shadow-lg sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + School Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Prospect Martial Arts Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="leading-tight">
            <p className="text-white font-bold text-lg tracking-wide">
              PROSPECT
            </p>
            <p style={{ color: "#E22D33" }} className="font-bold text-sm tracking-widest uppercase">
              Martial Arts
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? "text-white border-b-2 border-red-500 pb-1"
                  : "text-blue-200 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#trial"
            style={{ backgroundColor: "#E22D33" }}
            className="text-white text-sm font-bold px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-200 shadow-md"
          >
            Book Free Trial
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div style={{ backgroundColor: "#002a52" }} className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-semibold py-2 border-b border-blue-800 transition-colors ${
                pathname === link.href ? "text-white" : "text-blue-200 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#trial"
            onClick={() => setMenuOpen(false)}
            style={{ backgroundColor: "#E22D33" }}
            className="text-white text-sm font-bold text-center px-5 py-2 rounded-full hover:opacity-90 transition-opacity mt-2"
          >
            Book Free Trial
          </Link>
        </div>
      )}
    </header>
  );
}
