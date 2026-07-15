import { CLASS_COLORS, weekdaySchedule, type ScheduleRow } from "@/lib/schedule";

function ClassBadge({ name }: { name: string }) {
  const colors = CLASS_COLORS[name];
  if (!colors) {
    return <span className="text-gray-400">{name}</span>;
  }
  return (
    <span
      className="inline-block text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {name}
    </span>
  );
}

// The Monday–Thursday schedule table with color-coded class badges.
// Shared by the home, contact, kids, and adults pages.
export default function ScheduleTable({ rows = weekdaySchedule }: { rows?: ScheduleRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg">
      <table className="w-full text-sm text-center">
        <thead>
          <tr className="bg-pma-navy">
            <th className="text-white font-bold px-4 py-3 text-left">Time</th>
            <th className="text-white font-bold px-4 py-3">Monday &amp; Wednesday</th>
            <th className="text-white font-bold px-4 py-3">Tuesday &amp; Thursday</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
              <td className="px-4 py-3 font-semibold text-left text-pma-navy">{row.time}</td>
              <td className="px-4 py-3">
                <ClassBadge name={row.monWed} />
              </td>
              <td className="px-4 py-3">
                <ClassBadge name={row.tuesThu} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
