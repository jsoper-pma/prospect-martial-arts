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
  { name: "Basics & Competition Training", time: "9:15–10:00 AM" },
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
 * Rolled 2026-10-18: Oct 24 No classes (TSDMA Interclub); Oct 31, Nov 7, Nov 14 Open.
 * New standing block: Basics & Competition Training 9:15 from Oct 31.
 */
export const saturdayUpcoming: SaturdayDateEntry[] = [
  {
    date: "2026-10-24",
    label: "October 24, 2026",
    status: "No classes",
    reason: "TSDMA Charland interclub Watertown",
  },
  { date: "2026-10-31", label: "October 31, 2026", status: "Open" },
  { date: "2026-11-07", label: "November 7, 2026", status: "Open" },
  { date: "2026-11-14", label: "November 14, 2026", status: "Open" },
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