import { CalendarDays, Megaphone } from "lucide-react";

// Temporary public notices shown above Home/Contact hours.
// 1) Labor Day closure — remove after Monday, September 7, 2026.
// 2) Dan Classing 62 event — Saturday, September 12, 2026 (not a regular class).
// Regular Saturday classes have not resumed; this event is not a schedule row.

const LABOR_DAY_UNTIL = new Date("2026-09-07T23:59:59-04:00");
const DAN_CLASSING_UNTIL = new Date("2026-09-12T23:59:59-04:00");

export default function SchoolNotices() {
  const now = Date.now();
  const showLaborDay = now <= LABOR_DAY_UNTIL.getTime();
  const showDanClassing = now <= DAN_CLASSING_UNTIL.getTime();

  if (!showLaborDay && !showDanClassing) return null;

  return (
    <div className="space-y-4 mb-8">
      {showLaborDay && (
        <div
          className="rounded-2xl p-5 bg-white/10 border border-white/20 text-left"
          role="status"
        >
          <p className="flex items-center gap-2 text-pma-red text-xs font-bold uppercase tracking-widest mb-2">
            <Megaphone className="w-4 h-4" aria-hidden />
            School Closed
          </p>
          <p className="text-white font-semibold">
            We are closed Monday, September 7, 2026 for Labor Day.
          </p>
        </div>
      )}

      {showDanClassing && (
        <div
          className="rounded-2xl p-5 bg-white/10 border border-white/20 text-left"
          role="note"
        >
          <p className="flex items-center gap-2 text-pma-red text-xs font-bold uppercase tracking-widest mb-2">
            <CalendarDays className="w-4 h-4" aria-hidden />
            Upcoming Event
          </p>
          <p className="text-white font-semibold">Dan Classing 62 — Phase 1 and 2</p>
          <p className="text-blue-100 text-sm mt-1 leading-relaxed">
            Saturday, September 12, 2026 at 10:30am. Students should bring whites
            (white uniform/dobok).
          </p>
        </div>
      )}
    </div>
  );
}
