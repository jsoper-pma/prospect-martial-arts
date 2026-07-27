import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Bebas_Neue, Inter } from "next/font/google";
import DemoHeader from "@/components/DemoHeader";
import DemoFooter from "@/components/DemoFooter";
import { EMAIL, PHONE_HREF } from "@/lib/site";
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

// Derived from lib/site so the number stays in one place. PHONE_HREF is
// "tel:2034415358"; SMS links want the E.164 form.
const SMS_PLAIN = `sms:+1${PHONE_HREF.replace("tel:", "")}`;
const SMS_INTEREST = `${SMS_PLAIN}?&body=${encodeURIComponent(
  "Hi Mr. Soper, I'm interested in the Demo Team."
)}`;
const MAILTO_INTEREST = `mailto:${EMAIL}?subject=${encodeURIComponent("Demo Team Interest")}`;

export const metadata: Metadata = {
  title: "Demo & Competition Team",
  description:
    "Prospect Martial Arts Demo & Competition Team — elite high-performance Tang Soo Do. Public demonstrations and TSDMA tournaments. Hard training. Real standards. Earn your spot.",
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
            This is not for everyone. This is for the students who want to train harder, move
            sharper, and represent Prospect Martial Arts at the highest level — in front of a crowd
            and on the tournament floor.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#ready">
              Ready to Rise →
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
            <p className="festival-label">First Goal</p>
            <h2 id="festival-heading">Prospect Pumpkin Festival</h2>
            <div className="festival-meta">
              <span>October 17, 2026</span>
              <span>Town Green</span>
              <span>4:00–8:00 PM</span>
            </div>
            <p>
              Our mission is to deliver a powerful, polished demonstration that shows the town what
              Tang Soo Do looks like when excellence is the standard.
            </p>
          </div>
          <div className="festival-badge" aria-hidden="true">
            MISSION 01
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
              Two jobs, one standard. The team represents Prospect Martial Arts in public
              demonstrations, and it competes at Tang Soo Do Masters Alliance tournaments. The same
              three skills carry both.
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

      {/* ========== ELIGIBILITY ========== */}
      <section className="section" id="eligibility" aria-labelledby="eligibility-heading">
        <div className="container">
          <p className="section-label">Eligibility</p>
          <h2 className="section-title" id="eligibility-heading">
            Who Can Try Out
          </h2>
          <p className="section-intro">
            Auditions are open to Prospect Martial Arts students currently training in Tang Soo Do.
          </p>

          <div className="schedule-card">
            <p className="schedule-when">
              Ages 8+ <span className="sep">•</span>{" "}
              <span className="nb">White Belt or Above</span>
            </p>
            <p className="schedule-detail">
              That is the floor, not the ceiling — and it is not a hard line.
            </p>
            <p className="eligibility-note">
              If a younger or newer student can hit the physical benchmarks and perform Kicho Hyung
              Il Bu with real power and control, we want to see it. Talk to Mr. Soper and we will
              take a look.
            </p>
            <p className="schedule-note">
              The minimum exists for a practical reason: the audition requires a form students have
              not yet learned at the earliest stages. Learn it first, then come see us. The same
              minimum applies to the Prep Group.
            </p>
          </div>
        </div>
      </section>

      {/* ========== PHYSICAL BENCHMARKS ========== */}
      <section className="section benchmarks" id="benchmarks" aria-labelledby="benchmarks-heading">
        <div className="container">
          <header className="benchmarks-header">
            <p className="section-label">The Standard</p>
            <h2 className="section-title" id="benchmarks-heading">
              Physical Benchmarks
            </h2>
            <p className="section-intro">
              Every candidate must hit these numbers. No exceptions. Same standards for every
              student.
            </p>
          </header>

          <div className="bench-grid">
            <article className="bench-card">
              <div className="bench-num">01</div>
              <h3>20 Full Push-Ups</h3>
              <p>Within 60 seconds. Full range only. No knee push-ups.</p>
            </article>

            <article className="bench-card">
              <div className="bench-num">02</div>
              <h3>30 Sit-Ups</h3>
              <p>Within 60 seconds.</p>
            </article>

            <article className="bench-card">
              <div className="bench-num">03</div>
              <h3>60-Second Plank</h3>
              <p>Proper form.</p>
            </article>

            <article className="bench-card">
              <div className="bench-num">04</div>
              <h3>Sit &amp; Reach</h3>
              <p>Must touch toes.</p>
            </article>

            <article className="bench-card">
              <div className="bench-num">05</div>
              <h3>Kicho Hyung Il Bu</h3>
              <p>With power, speed, and clean technique.</p>
            </article>

            <article className="bench-card">
              <div className="bench-num">06</div>
              <h3>Cardio &amp; Endurance</h3>
              <p>Second part of the audition — scheduled separately.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ========== NON-NEGOTIABLES + PREP GROUP ========== */}
      <section className="section two-col" aria-label="Requirements and Prep Group">
        <div className="container two-col-grid">
          <div className="panel panel-red">
            <h2>
              <span className="bar" aria-hidden="true"></span>
              Non-Negotiables
            </h2>
            <ul className="check-list">
              <li>
                <span className="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>
                  <strong>Consistent attendance</strong> in regular classes — two times a week
                  minimum
                </span>
              </li>
              <li>
                <span className="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>
                  <strong>Positive attitude</strong> &amp; coachability
                </span>
              </li>
              <li>
                <span className="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>
                  <strong>Respect</strong> for instructors and teammates
                </span>
              </li>
              <li>
                <span className="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>
                  <strong>Willingness</strong> to do short home practice
                </span>
              </li>
              <li>
                <span className="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>
                  <strong>Parent support</strong> for Saturday practices and events
                </span>
              </li>
              <li>
                <span className="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>
                  <strong>Competition</strong> — every team member competes at TSDMA tournaments
                </span>
              </li>
            </ul>
          </div>

          <div className="panel">
            <h2>
              <span className="bar" aria-hidden="true"></span>
              Prep Group
            </h2>
            <p className="prep-text">
              Students who fall short of the benchmarks can still train in the Prep Group —{" "}
              <strong>same training, same Saturday time</strong> as the Demo Team.
            </p>
            <p className="prep-text">
              Prep Group members will not have a spot on the Demo Team. This path builds the
              strength, endurance, and skills they need for the next time auditions open up.
            </p>
            <p className="prep-highlight">
              Same work. Clear pathway. No team status or uniform until they earn it at the next
              audition.
            </p>
          </div>
        </div>
      </section>

      {/* ========== TRAINING SCHEDULE ========== */}
      <section className="section" id="schedule" aria-labelledby="schedule-heading">
        <div className="container">
          <p className="section-label">When We Train</p>
          <h2 className="section-title" id="schedule-heading">
            Saturday Morning Practice
          </h2>

          <div className="schedule-card">
            <p className="schedule-when">
              Every Saturday <span className="sep">•</span>{" "}
              <span className="nb">9:00 – 10:00 AM</span>
            </p>
            <p className="schedule-detail">Demo Team + Prep Group</p>
            <div className="schedule-pills">
              <span className="pill">Demo Team</span>
              <span className="pill">Prep Group</span>
            </div>
            <p className="schedule-note">Times may change with plenty of advance notice.</p>
          </div>
        </div>
      </section>

      {/* ========== UNIFORM NOTE ========== */}
      <section className="section uniform" aria-label="Uniform requirements">
        <div className="container">
          <div className="uniform-card">
            <p>
              <strong>Full Demo Team members</strong> are required to purchase a special Demo Team
              uniform. They may wear it to regular classes. Details will be released once the first
              team is selected.
            </p>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="final-cta" id="ready" aria-labelledby="ready-heading">
        <div className="container final-cta-inner">
          <h2 id="ready-heading">Ready to Earn Your Spot?</h2>
          <p className="audition-window">Auditions are now open and will close early August.</p>
          <p>
            This is an elite team. The standards are real. The work is real. If you&rsquo;re ready
            to push yourself, talk to Mr. Soper.
          </p>

          <div className="cta-buttons">
            <a className="btn btn-primary" href={SMS_INTEREST}>
              Talk to Mr. Soper
            </a>
            <a className="btn btn-secondary" href={MAILTO_INTEREST}>
              Email
            </a>
            <a className="btn btn-ghost" href={SMS_PLAIN}>
              Text
            </a>
          </div>

          <p className="cta-note">
            Physical benchmarks can be observed after class or by arrangement. Cardio &amp;
            endurance testing will be scheduled separately.
          </p>
        </div>
      </section>

      <DemoFooter />
    </div>
  );
}
