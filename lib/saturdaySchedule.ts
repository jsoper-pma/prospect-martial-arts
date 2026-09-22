// ── Saturday class schedule (standing + rolling next 4) ─────────────
// Single source of truth for /saturday.
// Weekly: Chuck/Website refresh saturdayUpcoming to the next 4 Saturdays.
// Off dates: Jason tells Chuck → update status/reason here; then push.

export type SaturdayStatus = "Open" | "No classes";

export type SaturdayStandingClass = {
  name: string;
  time: string;
};

/** Standing Saturday block — always shown on /saturday. */
export const saturdayStandingSchedule: SaturdayStandingClass[] = [
  { name: "Demo Team", time: "9:00–10:00 AM" },
  { name: "Sparring and Endurance", time: "10:00–10:45 AM" },
  { name: "Weapons", time: "10:45–11:30 AM" },
];

export type SaturdayDateEntry = {
  /** ISO date YYYY-MM-DD for sorting/stable keys */
  date: string;
  /** Public display label, e.g. "October 3, 2026" */
  label: string;
  status: SaturdayStatus;
  /** Shown when status is "No classes" */
  reason?: string;
};

/**
 * Rolling window: exactly the next 4 Saturdays (refresh weekly).
 * Seeded 2026-09-22: Oct 3/10/17 Open; Oct 24 No classes (Charland).
 * Do not include Sep 27 — classes start Oct 3.
 */
export const saturdayUpcoming: SaturdayDateEntry[] = [
  { date: "2026-10-03", label: "October 3, 2026", status: "Open" },
  { date: "2026-10-10", label: "October 10, 2026", status: "Open" },
  { date: "2026-10-17", label: "October 17, 2026", status: "Open" },
  {
    date: "2026-10-24",
    label: "October 24, 2026",
    status: "No classes",
    reason: "TSDMA Charland interclub Watertown",
  },
];

/** @deprecated Use saturdayUpcoming — kept as alias for older imports. */
export const saturdayMonthAhead = saturdayUpcoming;

/** Public footer note — keep ProspectMA.com/saturday in the copy. */
export const saturdayAvailabilityNote =
  "Saturday classes depend on instructor availability. Classes may be off for tournaments or events. ProspectMA.com/saturday.";

/** Heading for the rolling upcoming-Saturdays section. */
export const saturdayUpcomingHeading = "Upcoming Saturdays";

/** @deprecated Use saturdayUpcomingHeading */
export const saturdayMonthAheadHeading = saturdayUpcomingHeading;
