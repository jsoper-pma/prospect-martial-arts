import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Bebas_Neue, Inter } from "next/font/google";
import DemoHeader from "@/components/DemoHeader";
import DemoFooter from "@/components/DemoFooter";
import { ADDRESS, EMAIL, PHONE_DISPLAY } from "@/lib/site";
import "./demo.css";

// This page keeps its own dark/crimson identity, so it loads its own
// typefaces rather than the site-wide Nunito. Both are exposed as CSS
// variables and scoped to the .demo-page wrapper below.
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Demo & Competition Team",
  description:
    "The Prospect Martial Arts Demo & Competition Team has wrapped for the season. See what the team did, and keep training Tang Soo Do with us on Saturday mornings.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function DemoTeamPage() {
  return (
    <div className={`demo-page ${bebas.variable} ${inter.variable}`}>
      <DemoHeader />

      {/* ========== HERO ========== */}
      <section className="hero" id="top">
        <div className="container hero-inner">
          <Image
            src="/images/logo.png"
            alt="Prospect Martial Arts Logo"
            width={104}
            height={104}
            className="hero-logo"
            priority
          />

          <div className="badge">
            <span className="badge-dot" aria-hidden="true"></span>
            Demonstration • Competition • Representation
          </div>

          <h1>
            DEMO
            <br />
            <span className="accent">TEAM</span>
          </h1>

          <p className="hero-sub">
            The Demo Team has wrapped for the season. Thank you to every student who trained
            harder, moved sharper, and represented Prospect Martial Arts in front of a crowd and
            on the tournament floor.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="/saturday">
              Saturday Classes →
            </a>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <span>Scroll</span>
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      {/* ========== FESTIVAL GOAL ========== */}
      <section className="festival" aria-labelledby="festival-heading">
        <div className="container festival-inner">
          <div>
            <p className="festival-label">Season Finale</p>
            <h2 id="festival-heading">Prospect Pumpkin Festival</h2>
            <div className="festival-meta">
              <span>October 17, 2026</span>
              <span>Town Green</span>
              <span>4:00–8:00 PM</span>
            </div>
            <p>
              The team closed its season with a demonstration on the Town Green, showing the town
              what Tang Soo Do looks like when excellence is the standard.
            </p>
          </div>
          <div className="festival-badge" aria-hidden="true">
            2026
          </div>
        </div>
      </section>

      {/* ========== WHAT THE TEAM DOES ========== */}
      <section className="section" id="what" aria-labelledby="what-heading">
        <div className="container">
          <header className="benchmarks-header">
            <p className="section-label">The Work</p>
            <h2 className="section-title" id="what-heading">
              What the Team Does
            </h2>
            <p className="section-intro">
              Two jobs, one standard. The team represented Prospect Martial Arts in public
              demonstrations and competed at Tang Soo Do Masters Alliance tournaments. The same
              three skills carried both.
            </p>
          </header>

          <div className="bench-grid">
            <article className="bench-card">
              <h3>Choreographed Forms</h3>
              <p>
                In a demonstration the team performs forms — <em>hyungs</em> — in unison: same
                count, same angle, same snap. At a tournament the student stands alone in front of
                judges. Both demand a form clean enough to hold up under attention.
              </p>
            </article>

            <article className="bench-card">
              <h3>Specialized Breaking</h3>
              <p>
                Not a belt-test board break. Stacked boards, flying and jumping breaks, and speed
                breaks that reward precision over power. Every break is taught, drilled, and
                supervised by black belt instructors long before it goes in front of a crowd or a
                judge.
              </p>
            </article>

            <article className="bench-card">
              <h3>Weapons</h3>
              <p>
                The staff and the sword, trained together as a team. Students who want to build a
                routine around a different weapon can pursue that as well. No student handles a
                weapon until an instructor says they are ready.
              </p>
            </article>
          </div>

          <p className="pillars-close">
            Three tournament divisions. Three pieces of every demonstration. Train one and you are
            training for both.
          </p>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="final-cta" id="ready" aria-labelledby="ready-heading">
        <div className="container final-cta-inner">
          <h2 id="ready-heading">Keep Training on Saturdays</h2>
          <p>
            Saturday mornings keep going. Basics &amp; Competition Training starts at 9:15 AM,
            followed by Sparring and Endurance and Weapons. See the full schedule on our{" "}
            <a href="/saturday" className="contact-link">
              Saturday Classes page
            </a>
            .
          </p>

          {/* Plain, visible contact details rather than sms:/mailto: buttons —
              desktop browsers have no SMS handler and often no mail client, so
              those silently failed. The values are readable and copyable here. */}
          <div className="contact-card">
            <h3 className="contact-title">Talk to Mr. Soper</h3>

            <ul className="contact-list">
              <li>
                <span className="contact-label">In Person</span>
                <span className="contact-value">See him at the school</span>
                <span className="contact-sub">
                  {ADDRESS.street}, {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                </span>
              </li>
              <li>
                <span className="contact-label">Email</span>
                <a className="contact-value contact-link" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="contact-label">Text</span>
                <span className="contact-value">{PHONE_DISPLAY}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <DemoFooter />
    </div>
  );
}
