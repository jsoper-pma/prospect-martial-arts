import type { Metadata } from "next";
import Link from "next/link";
import {
  saturdayAvailabilityNote,
  saturdayUpcoming,
  saturdayUpcomingHeading,
  saturdayStandingSchedule,
} from "@/lib/saturdaySchedule";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Saturday Classes | Tang Soo Do Schedule in Prospect, CT",
  description:
    "Saturday Tang Soo Do schedule at Prospect Martial Arts — Demo Team, Sparring and Endurance, and Weapons. See the next four Saturdays.",
  alternates: { canonical: "/saturday" },
  openGraph: {
    title: "Saturday Classes — Prospect Martial Arts",
    description:
      "Standing Saturday schedule and the next four Saturdays at Prospect Martial Arts in Prospect, CT.",
  },
};

export default function SaturdayPage() {
  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      <section className="py-20 px-4 text-center text-white relative overflow-hidden bg-pma-navy">
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest bg-pma-red">
            Saturday Schedule
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Saturday Classes
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Tang Soo Do training every Saturday morning — Demo Team, Sparring and
            Endurance, and Weapons. Check the next four Saturdays below.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pma-red text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            >
              Book Your Free Trial Class
            </a>
            <a
              href={PHONE_HREF}
              className="inline-block text-white font-bold text-lg px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-pma-navy transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── STANDING SCHEDULE ─────────────────────────────────── */}
      <section className="py-16 px-4 bg-white" aria-labelledby="standing-heading">
        <div className="max-w-3xl mx-auto">
          <h2
            id="standing-heading"
            className="text-3xl font-extrabold text-center mb-3 text-pma-navy"
          >
            Standing Saturday Schedule
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            When Saturday classes run, this is the block. Demo Team details and tryout
            rules stay on the{" "}
            <Link href="/demo" className="text-pma-red font-semibold hover:underline">
              Demo Team page
            </Link>
            .
          </p>

          <ul className="space-y-4">
            {saturdayStandingSchedule.map((row) => (
              <li
                key={row.name}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-2xl border border-gray-100 bg-pma-cream px-6 py-5 shadow-sm"
              >
                <span className="text-lg font-bold text-pma-navy">{row.name}</span>
                <span className="text-base font-semibold text-pma-red tabular-nums">
                  {row.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── UPCOMING SATURDAYS ────────────────────────────────── */}
      <section className="py-16 px-4 bg-pma-cream" aria-labelledby="upcoming-heading">
        <div className="max-w-3xl mx-auto">
          <h2
            id="upcoming-heading"
            className="text-3xl font-extrabold text-center mb-3 text-pma-navy"
          >
            {saturdayUpcomingHeading}
          </h2>
          <p className="text-center text-gray-600 mb-10">
            The next four Saturdays — Open or No classes.
          </p>

          <ul className="space-y-3">
            {saturdayUpcoming.map((entry) => {
              const noClasses = entry.status === "No classes";
              return (
                <li
                  key={entry.date}
                  className={`rounded-2xl px-6 py-4 shadow-sm border ${
                    noClasses
                      ? "bg-white border-pma-red/40"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-bold text-pma-navy">{entry.label}</span>
                    <span
                      className={`inline-flex self-start sm:self-auto items-center rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${
                        noClasses
                          ? "bg-pma-red text-white"
                          : "bg-pma-navy text-white"
                      }`}
                    >
                      {entry.status}
                    </span>
                  </div>
                  {noClasses && entry.reason ? (
                    <p className="mt-2 text-sm text-gray-700">
                      <span className="font-semibold text-pma-red">Note: </span>
                      {entry.reason}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── AVAILABILITY NOTE ─────────────────────────────────── */}
      <section className="py-12 px-4 bg-white" aria-label="Saturday availability note">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-pma-light px-6 py-5 text-center">
            <p className="text-pma-navy text-base leading-relaxed font-medium">
              {saturdayAvailabilityNote}
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block bg-pma-navy text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
