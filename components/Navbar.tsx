"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ExternalLink, Menu, Phone, X } from "lucide-react";
import { mainLinks as links, programLinks, storeLinks } from "@/lib/nav";
import BookTrialLink from "@/components/BookTrialLink";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);
  const pathname = usePathname();
  const programsRef = useRef<HTMLDivElement>(null);
  const storeRef = useRef<HTMLDivElement>(null);
  const programsButtonRef = useRef<HTMLButtonElement>(null);
  const storeButtonRef = useRef<HTMLButtonElement>(null);

  // Close desktop dropdowns on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const t = e.target as Node;
      if (programsRef.current && !programsRef.current.contains(t)) {
        setProgramsOpen(false);
      }
      if (storeRef.current && !storeRef.current.contains(t)) {
        setStoreOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Keyboard: Escape closes the open dropdown (or the mobile menu)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (programsOpen) {
        setProgramsOpen(false);
        programsButtonRef.current?.focus();
        return;
      }
      if (storeOpen) {
        setStoreOpen(false);
        storeButtonRef.current?.focus();
        return;
      }
      if (menuOpen) setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [programsOpen, storeOpen, menuOpen]);

  // Close menus on navigation
  useEffect(() => {
    setMenuOpen(false);
    setProgramsOpen(false);
    setStoreOpen(false);
  }, [pathname]);

  const isProgramPage = programLinks.some((p) => pathname === p.href);

  // Home / About / Team, then Programs, then Blog / FAQ, then Store, then Contact
  const preProgramLinks = links.slice(0, 3);
  const midLinks = links.slice(3, 5); // Blog, FAQ
  const postStoreLinks = links.slice(5); // Contact

  const desktopLinkClass = (href: string) =>
    `text-sm font-semibold tracking-wide transition-colors duration-200 ${
      pathname === href
        ? "text-white border-b-2 border-pma-red pb-1"
        : "text-blue-200 hover:text-white"
    }`;

  const desktopToggleClass = (active: boolean) =>
    `flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-200 ${
      active ? "text-white border-b-2 border-pma-red pb-1" : "text-blue-200 hover:text-white"
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

        {/* Desktop Nav Links — slightly tighter gap so Store fits without crowding */}
        <div className="hidden lg:flex items-center gap-4">
          {preProgramLinks.map((link) => (
            <Link key={link.href} href={link.href} className={desktopLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}

          {/* Programs dropdown */}
          <div className="relative" ref={programsRef}>
            <button
              ref={programsButtonRef}
              type="button"
              onClick={() => {
                setProgramsOpen((open) => !open);
                setStoreOpen(false);
              }}
              aria-expanded={programsOpen}
              aria-haspopup="true"
              aria-controls="desktop-programs-menu"
              className={desktopToggleClass(isProgramPage)}
            >
              Programs
              <ChevronDown
                className={`w-4 h-4 transition-transform ${programsOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {programsOpen && (
              <div
                id="desktop-programs-menu"
                className="absolute top-full left-0 mt-3 w-60 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
              >
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

          {midLinks.map((link) => (
            <Link key={link.href} href={link.href} className={desktopLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}

          {/* Store dropdown — tap/click + keyboard, not hover-only. Links open the Printify shop in a new tab. */}
          <div className="relative" ref={storeRef}>
            <button
              ref={storeButtonRef}
              type="button"
              onClick={() => {
                setStoreOpen((open) => !open);
                setProgramsOpen(false);
              }}
              aria-expanded={storeOpen}
              aria-haspopup="true"
              aria-controls="desktop-store-menu"
              className={desktopToggleClass(false)}
            >
              Store
              <ChevronDown
                className={`w-4 h-4 transition-transform ${storeOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {storeOpen && (
              <div
                id="desktop-store-menu"
                className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
              >
                {storeLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setStoreOpen(false)}
                    className="flex items-center justify-between gap-3 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-pma-light hover:text-pma-navy transition-colors"
                  >
                    {item.label}
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 text-gray-400" aria-hidden />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {postStoreLinks.map((link) => (
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
          type="button"
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
        <div className="bg-pma-navy-dark lg:hidden px-4 pb-4 flex flex-col gap-1 max-h-[calc(100dvh-80px)] overflow-y-auto">
          {preProgramLinks.map((link) => (
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

          {midLinks.map((link) => (
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

          {/* Store group — tap to expand; not hover-only */}
          <button
            type="button"
            onClick={() => setStoreOpen((open) => !open)}
            aria-expanded={storeOpen}
            aria-controls="mobile-store-menu"
            className="flex items-center justify-between w-full text-left text-sm font-semibold py-2.5 border-b border-blue-900 text-blue-200 hover:text-white transition-colors"
          >
            Store
            <ChevronDown
              className={`w-4 h-4 transition-transform ${storeOpen ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
          {storeOpen && (
            <div id="mobile-store-menu">
              {storeLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between gap-3 text-sm font-semibold py-2.5 pl-3 border-b border-blue-900 text-blue-200 hover:text-white transition-colors"
                >
                  {item.label}
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 text-blue-400" aria-hidden />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          )}

          {postStoreLinks.map((link) => (
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
