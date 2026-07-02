/**
 * Master's Apothecary — pinned info panel (HUD).
 *
 * Styled after the founder's sketch: a carved wooden board with rolled
 * scroll corners and a wavy chiseled border, showing the player's coin,
 * reputation stars, current time, and day.
 */

const FRAME = "#6e4f36";
const FRAME_DARK = "#4a3324";
const FRAME_LIGHT = "#8a6647";
const PARCHMENT = "#f3e7c6";
const INK = "#3f2d1c";
const GOLD = "#e0a83c";
const GOLD_DARK = "#a97817";

function starPath(cx: number, cy: number, outer: number): string {
  const inner = outer * 0.42;
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")} Z`;
}

function Star({ cx, cy, filled }: { cx: number; cy: number; filled: boolean }) {
  return (
    <path
      d={starPath(cx, cy, 11)}
      fill={filled ? GOLD : "none"}
      stroke={filled ? GOLD_DARK : INK}
      strokeWidth={2}
      strokeLinejoin="round"
    />
  );
}

function CoinIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={11} fill={GOLD} stroke={GOLD_DARK} strokeWidth={2} />
      <circle cx={cx} cy={cy} r={6.5} fill="none" stroke={GOLD_DARK} strokeWidth={1.5} />
      <circle cx={cx - 3.5} cy={cy - 3.5} r={2.5} fill="#f7d98c" />
    </g>
  );
}

export interface InfoPanelProps {
  coins: number;
  /** reputation from 0 to 5 stars */
  rep: number;
  timeLabel: string;
  day: number;
}

export default function InfoPanel({ coins, rep, timeLabel, day }: InfoPanelProps) {
  const W = 264;
  const H = 236;
  const wave = (y: number, flip: boolean) => {
    // gentle carved wave across the frame's top/bottom rails
    const amp = flip ? -4 : 4;
    let d = `M 30 ${y}`;
    for (let x = 30; x < W - 30; x += 28) {
      d += ` q 14 ${amp} 28 0`;
    }
    return d;
  };

  const rows = [
    { label: "Coin", y: 62 },
    { label: "Rep", y: 106 },
    { label: "Time", y: 150 },
    { label: "Day", y: 194 },
  ];

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Coin ${coins}c, reputation ${rep} of 5 stars, time ${timeLabel}, day ${day}`}
      className="drop-shadow-lg"
    >
      {/* board */}
      <rect x={8} y={8} width={W - 16} height={H - 16} rx={10} fill={FRAME_DARK} />
      <rect x={14} y={14} width={W - 28} height={H - 28} rx={8} fill={FRAME} />
      <rect x={26} y={26} width={W - 52} height={H - 52} rx={6} fill={PARCHMENT} />
      <rect
        x={26}
        y={26}
        width={W - 52}
        height={H - 52}
        rx={6}
        fill="none"
        stroke={FRAME_DARK}
        strokeWidth={1.5}
        opacity={0.4}
      />

      {/* carved waves on the frame rails */}
      <path d={wave(20, false)} stroke={FRAME_LIGHT} strokeWidth={2.5} fill="none" />
      <path d={wave(H - 20, true)} stroke={FRAME_DARK} strokeWidth={2.5} fill="none" />

      {/* rolled scroll corners */}
      {(
        [
          [16, 16],
          [W - 16, 16],
          [16, H - 16],
          [W - 16, H - 16],
        ] as const
      ).map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <ellipse cx={cx} cy={cy} rx={14} ry={11} fill={FRAME_LIGHT} stroke={FRAME_DARK} strokeWidth={2.5} />
          <ellipse cx={cx} cy={cy} rx={6} ry={4.5} fill={FRAME_DARK} opacity={0.55} />
        </g>
      ))}

      {/* rows */}
      {rows.map((r) => (
        <text
          key={r.label}
          x={42}
          y={r.y}
          fill={INK}
          fontSize={20}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
        >
          {r.label}
        </text>
      ))}

      {/* Coin value */}
      <CoinIcon cx={112} cy={55} />
      <text x={130} y={62} fill={INK} fontSize={20} fontWeight={700} fontFamily="Georgia, 'Times New Roman', serif">
        {coins}c
      </text>

      {/* Rep stars */}
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} cx={112 + i * 26} cy={99} filled={i < rep} />
      ))}

      {/* Time */}
      <text x={102} y={150} fill={INK} fontSize={20} fontWeight={700} fontFamily="Georgia, 'Times New Roman', serif">
        {timeLabel}
      </text>

      {/* Day */}
      <text x={102} y={194} fill={INK} fontSize={20} fontWeight={700} fontFamily="Georgia, 'Times New Roman', serif">
        {day}
      </text>
    </svg>
  );
}
