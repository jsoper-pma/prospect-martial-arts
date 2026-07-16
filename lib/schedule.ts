// ── Weekly class schedule + color coding ────────────────────────────
// Single source of truth for the schedule shown on the home, contact,
// kids, and adults pages. Classes run Monday–Thursday evenings.

export interface ScheduleRow {
  time: string;
  monWed: string;
  tuesThu: string;
}

export const weekdaySchedule: ScheduleRow[] = [
  { time: "4:30 – 5:00 PM", monWed: "Little Tigers", tuesThu: "Little Tigers" },
  { time: "5:00 – 5:30 PM", monWed: "Little Dragons", tuesThu: "Little Dragons" },
  { time: "5:30 – 6:15 PM", monWed: "Beginners", tuesThu: "Intermediate" },
  { time: "6:15 – 7:00 PM", monWed: "Intermediate", tuesThu: "Beginners" },
  { time: "7:00 – 7:15 PM", monWed: "Leadership", tuesThu: "—" },
  { time: "7:00 – 7:45 PM", monWed: "Adult Gups 17+", tuesThu: "Black Belts" },
  { time: "7:45 – 8:30 PM", monWed: "Advanced", tuesThu: "Advanced" },
];

// Kids & Teens page shows only the 8+ program rows.
export const kidsSchedule: ScheduleRow[] = weekdaySchedule.filter((row) =>
  ["Beginners", "Intermediate", "Leadership", "Advanced"].includes(row.monWed)
);

// Adults page shows the classes adult students can join — no preschool
// programs or Leadership.
export const adultsSchedule: ScheduleRow[] = weekdaySchedule.filter(
  (row) => !["Little Tigers", "Little Dragons", "Leadership"].includes(row.monWed)
);

// Color system chosen by the owner — each class keeps one color everywhere.
export const CLASS_COLORS: Record<string, { bg: string; text: string }> = {
  "Little Tigers": { bg: "#EC4899", text: "#FFFFFF" }, // pink
  "Little Dragons": { bg: "#166534", text: "#FFFFFF" }, // dark green
  Beginners: { bg: "#EA580C", text: "#FFFFFF" }, // orange
  Intermediate: { bg: "#86EFAC", text: "#14532D" }, // light green
  Leadership: { bg: "#0D9488", text: "#FFFFFF" }, // teal
  "Adult Gups 17+": { bg: "#FACC15", text: "#713F12" }, // yellow
  "Black Belts": { bg: "#1E3A8A", text: "#FFFFFF" }, // dark blue
  Advanced: { bg: "#E22D33", text: "#FFFFFF" }, // red
};
