/**
 * Master's Apothecary — shop interior background.
 *
 * Hand-built SVG scene based on the founder's concept sketch: a timber-framed
 * apothecary interior with arched windows, a tall potion shelf, an arched
 * passage to the back room, a center fountain display, wall shelves, a
 * shop counter, and a corner pile of round potion bottles. Herb bundles and
 * lanterns hang from the ceiling beam.
 */

const WOOD_DARK = "#4a3324";
const WOOD_MID = "#6e4f36";
const WOOD_LIGHT = "#8a6647";
const WOOD_PLANK = "#7a5a3e";
const PLASTER = "#e9dab6";
const PLASTER_SHADE = "#dcc9a0";
const SKY = "#cfe8f2";
const SKY_GLOW = "#f6ecc0";
const GLASS_FRAME = "#5b4232";
const HERB_GREEN = "#5f7a34";
const HERB_DARK = "#46602a";

function ArchedWindow({
  x,
  y,
  width,
  height,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
}) {
  const cx = x + width / 2;
  const archTop = y;
  const archSpring = y + width / 2; // where the arch meets the straight sides
  const frame = 10;
  return (
    <g>
      {/* outer frame */}
      <path
        d={`M ${x} ${y + height} L ${x} ${archSpring} A ${width / 2} ${
          width / 2
        } 0 0 1 ${x + width} ${archSpring} L ${x + width} ${
          y + height
        } Z`}
        fill={GLASS_FRAME}
      />
      {/* glass */}
      <path
        d={`M ${x + frame} ${y + height - frame} L ${x + frame} ${archSpring} A ${
          width / 2 - frame
        } ${width / 2 - frame} 0 0 1 ${x + width - frame} ${archSpring} L ${
          x + width - frame
        } ${y + height - frame} Z`}
        fill={SKY}
      />
      {/* warm daylight gradient hint */}
      <path
        d={`M ${x + frame} ${y + height - frame} L ${x + frame} ${archSpring} A ${
          width / 2 - frame
        } ${width / 2 - frame} 0 0 1 ${x + width - frame} ${archSpring} L ${
          x + width - frame
        } ${y + height - frame} Z`}
        fill="url(#windowGlow)"
      />
      {/* mullions */}
      <rect x={cx - 4} y={archTop + frame} width={8} height={height - frame * 2} fill={GLASS_FRAME} />
      <rect x={x + frame} y={archSpring + (y + height - archSpring) / 2 - 4} width={width - frame * 2} height={8} fill={GLASS_FRAME} />
      {/* sill */}
      <rect x={x - 12} y={y + height} width={width + 24} height={14} rx={3} fill={WOOD_MID} />
      <rect x={x - 12} y={y + height} width={width + 24} height={5} rx={2} fill={WOOD_LIGHT} />
    </g>
  );
}

function Bottle({
  x,
  y,
  w,
  h,
  color,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
}) {
  const neckW = w * 0.34;
  const neckH = h * 0.28;
  return (
    <g>
      <rect x={x + (w - neckW) / 2} y={y} width={neckW} height={neckH + 4} rx={2} fill={color} />
      <rect x={x + (w - neckW) / 2 - 1.5} y={y - 4} width={neckW + 3} height={6} rx={2} fill="#c9a36a" />
      <rect x={x} y={y + neckH} width={w} height={h - neckH} rx={w * 0.28} fill={color} />
      <rect x={x + w * 0.16} y={y + neckH + (h - neckH) * 0.18} width={w * 0.16} height={(h - neckH) * 0.5} rx={w * 0.08} fill="#ffffff" opacity={0.35} />
    </g>
  );
}

function ShelfRow({ x, y, width }: { x: number; y: number; width: number }) {
  // a row of assorted potion bottles sitting on a shelf line at y (shelf top)
  const palette = ["#b0532f", "#5b8db8", "#6f9c50", "#a86ba0", "#c99b3f", "#7b5cad"];
  const bottles: React.ReactNode[] = [];
  let bx = x + 8;
  let i = 0;
  while (bx < x + width - 26) {
    const w = 16 + ((i * 7) % 10);
    const h = 30 + ((i * 11) % 16);
    bottles.push(
      <Bottle key={bx} x={bx} y={y - h} w={w} h={h} color={palette[i % palette.length]} />
    );
    bx += w + 10;
    i += 1;
  }
  return <g>{bottles}</g>;
}

function TallShelf({ x, y, width, height }: { x: number; y: number; width: number; height: number }) {
  const side = 14;
  const shelfGap = (height - 40) / 4;
  return (
    <g>
      {/* casing */}
      <rect x={x} y={y} width={width} height={height} rx={4} fill={WOOD_DARK} />
      <rect x={x + side} y={y + 16} width={width - side * 2} height={height - 32} fill="#3a2818" />
      {/* shelves + bottles */}
      {[0, 1, 2, 3].map((s) => {
        const sy = y + 16 + shelfGap * (s + 1);
        return (
          <g key={s}>
            <ShelfRow x={x + side} y={sy} width={width - side * 2} />
            <rect x={x + side} y={sy} width={width - side * 2} height={9} fill={WOOD_MID} />
            <rect x={x + side} y={sy} width={width - side * 2} height={3} fill={WOOD_LIGHT} />
          </g>
        );
      })}
      {/* top crown */}
      <rect x={x - 8} y={y - 10} width={width + 16} height={18} rx={4} fill={WOOD_MID} />
    </g>
  );
}

function WallShelf({ x, y, width }: { x: number; y: number; width: number }) {
  return (
    <g>
      {[0, 1, 2].map((s) => {
        const sy = y + s * 64;
        return (
          <g key={s}>
            <ShelfRow x={x} y={sy} width={width} />
            <rect x={x - 6} y={sy} width={width + 12} height={9} rx={3} fill={WOOD_MID} />
            <rect x={x - 6} y={sy} width={width + 12} height={3} rx={1.5} fill={WOOD_LIGHT} />
            {/* brackets */}
            <path d={`M ${x + 6} ${sy + 9} l 0 14 l 10 -14 Z`} fill={WOOD_DARK} />
            <path d={`M ${x + width - 16} ${sy + 9} l 0 14 l 10 -14 Z`} fill={WOOD_DARK} />
          </g>
        );
      })}
    </g>
  );
}

function HerbBundle({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  const sway = flip ? -1 : 1;
  return (
    <g>
      {/* string from beam */}
      <line x1={x} y1={y} x2={x} y2={y + 26} stroke="#b8a26e" strokeWidth={2} />
      {/* upside-down drying bundle */}
      <g transform={`translate(${x} ${y + 26})`}>
        <path d={`M 0 0 C ${-14 * sway} 14 ${-18 * sway} 34 ${-10 * sway} 52 L 0 44 Z`} fill={HERB_DARK} />
        <path d={`M 0 0 C ${14 * sway} 12 ${20 * sway} 32 ${12 * sway} 50 L 0 44 Z`} fill={HERB_GREEN} />
        <path d={`M 0 0 C ${-4 * sway} 18 ${-2 * sway} 38 ${2 * sway} 54 L 6 44 Z`} fill="#71904a" />
        <ellipse cx={0} cy={2} rx={7} ry={4} fill="#b8a26e" />
      </g>
    </g>
  );
}

function Lantern({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x} y2={y + 18} stroke="#3a3a3a" strokeWidth={3} />
      <rect x={x - 16} y={y + 18} width={32} height={8} rx={3} fill="#3a3a3a" />
      <rect x={x - 12} y={y + 26} width={24} height={30} rx={3} fill="#f4c451" />
      <circle cx={x} cy={y + 41} r={7} fill="#fce8a8" />
      <rect x={x - 16} y={y + 56} width={32} height={7} rx={3} fill="#3a3a3a" />
      {/* soft glow */}
      <circle cx={x} cy={y + 41} r={30} fill="url(#lanternGlow)" />
    </g>
  );
}

function Crate({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={3} fill={WOOD_PLANK} />
      <rect x={x} y={y} width={w} height={h} rx={3} fill="none" stroke={WOOD_DARK} strokeWidth={5} />
      <line x1={x + 4} y1={y + 4} x2={x + w - 4} y2={y + h - 4} stroke={WOOD_DARK} strokeWidth={4} />
      <line x1={x + w - 4} y1={y + 4} x2={x + 4} y2={y + h - 4} stroke={WOOD_DARK} strokeWidth={4} />
    </g>
  );
}

function PotionPile({ x, y }: { x: number; y: number }) {
  // corner pile of round-bellied bottles, like the sketch's stack of circles
  const rows = [7, 6, 5, 3, 2];
  const r = 17;
  const tints = ["#9db7c9", "#aac2a1", "#c9b08f", "#b9a3c2", "#a8b9d6"];
  return (
    <g>
      {rows.map((count, row) => {
        const rowY = y - row * (r * 1.7);
        const rowX = x + row * r * 0.9;
        return Array.from({ length: count }).map((_, i) => (
          <g key={`${row}-${i}`}>
            <circle
              cx={rowX + i * (r * 2.05)}
              cy={rowY}
              r={r}
              fill={tints[(row + i) % tints.length]}
              stroke="#5f6f7d"
              strokeWidth={2}
            />
            <circle cx={rowX + i * (r * 2.05) - 5} cy={rowY - 5} r={4.5} fill="#ffffff" opacity={0.5} />
            <rect x={rowX + i * (r * 2.05) - 4} y={rowY - r - 8} width={8} height={9} rx={2} fill="#c9a36a" />
          </g>
        ));
      })}
    </g>
  );
}

function FountainDisplay({ cx, baseY }: { cx: number; baseY: number }) {
  // round two-step pedestal with a glowing potion "fountain" on top
  return (
    <g>
      {/* lower basin */}
      <ellipse cx={cx} cy={baseY} rx={130} ry={26} fill="#9d9484" />
      <rect x={cx - 130} y={baseY - 34} width={260} height={34} rx={10} fill="#b3a892" />
      <ellipse cx={cx} cy={baseY - 34} rx={130} ry={26} fill="#c6bba3" />
      {/* upper step */}
      <rect x={cx - 82} y={baseY - 64} width={164} height={30} rx={8} fill="#a89d87" />
      <ellipse cx={cx} cy={baseY - 64} rx={82} ry={17} fill="#d3c8ae" />
      {/* pooled glowing brew on the upper step */}
      <ellipse cx={cx} cy={baseY - 62} rx={62} ry={12} fill="#7fd4b0" opacity={0.85} />
      {/* center flask on a stem, like the sketch's bell-shaped piece */}
      <rect x={cx - 5} y={baseY - 116} width={10} height={44} fill="#8f8571" />
      <path
        d={`M ${cx - 26} ${baseY - 116} Q ${cx} ${baseY - 176} ${cx + 26} ${baseY - 116} Z`}
        fill="#66c39c"
      />
      <circle cx={cx} cy={baseY - 150} r={7} fill="#c9f4e0" />
      {/* trickles */}
      <path d={`M ${cx - 14} ${baseY - 118} q -6 26 -10 52`} stroke="#8fe0bd" strokeWidth={4} fill="none" strokeLinecap="round" />
      <path d={`M ${cx + 14} ${baseY - 118} q 6 26 10 52`} stroke="#8fe0bd" strokeWidth={4} fill="none" strokeLinecap="round" />
      {/* small flasks resting on the lower rim */}
      <Bottle x={cx - 108} y={baseY - 66} w={20} h={34} color="#5b8db8" />
      <Bottle x={cx + 86} y={baseY - 64} w={18} h={32} color="#a86ba0" />
    </g>
  );
}

function DisplayStand({ x, y }: { x: number; y: number }) {
  // slant-topped merchant stand from the sketch, with a runner cloth
  return (
    <g>
      <path d={`M ${x} ${y + 26} L ${x + 34} ${y} L ${x + 96} ${y + 14} L ${x + 62} ${y + 44} Z`} fill={WOOD_LIGHT} />
      <rect x={x} y={y + 26} width={62} height={110} fill={WOOD_MID} />
      <path d={`M ${x + 62} ${y + 44} L ${x + 96} ${y + 14} L ${x + 96} ${y + 118} L ${x + 62} ${y + 136} Z`} fill={WOOD_DARK} />
      <rect x={x + 14} y={y + 40} width={30} height={84} rx={4} fill="#b0532f" />
      <path d={`M ${x + 20} ${y + 56} q 9 14 0 28 q -9 -14 0 -28`} fill="#e9dab6" transform={`translate(9 0)`} />
    </g>
  );
}

function Door({ x, y, width, height }: { x: number; y: number; width: number; height: number }) {
  return (
    <g>
      <rect x={x - 10} y={y - 10} width={width + 20} height={height + 10} rx={4} fill={WOOD_DARK} />
      <rect x={x} y={y} width={width} height={height} fill={WOOD_MID} />
      {[1, 2, 3].map((i) => (
        <line
          key={i}
          x1={x + (width / 4) * i}
          y1={y + 6}
          x2={x + (width / 4) * i}
          y2={y + height - 6}
          stroke={WOOD_DARK}
          strokeWidth={4}
        />
      ))}
      <circle cx={x + width - 16} cy={y + height / 2} r={7} fill="#c9a36a" />
    </g>
  );
}

export default function ShopBackground() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Interior of the Master's Apothecary shop: arched windows, potion shelves, a fountain display, and herbs hanging from the ceiling beam"
    >
      <defs>
        <linearGradient id="windowGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={SKY_GLOW} stopOpacity="0.9" />
          <stop offset="60%" stopColor={SKY_GLOW} stopOpacity="0" />
        </linearGradient>
        <radialGradient id="lanternGlow">
          <stop offset="0%" stopColor="#ffd970" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffd970" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="floorShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a6647" />
          <stop offset="100%" stopColor="#5e4229" />
        </linearGradient>
        <linearGradient id="wallShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={PLASTER} />
          <stop offset="100%" stopColor={PLASTER_SHADE} />
        </linearGradient>
      </defs>

      {/* ===== wall ===== */}
      <rect x={0} y={0} width={1600} height={700} fill="url(#wallShade)" />

      {/* ===== ceiling ===== */}
      <rect x={0} y={0} width={1600} height={96} fill="#3d2b1c" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={i} x1={i * 220} y1={0} x2={i * 220 + 40} y2={96} stroke="#33241a" strokeWidth={6} />
      ))}
      {/* main beam */}
      <rect x={0} y={96} width={1600} height={34} fill={WOOD_MID} />
      <rect x={0} y={96} width={1600} height={8} fill={WOOD_LIGHT} />
      <rect x={0} y={124} width={1600} height={6} fill={WOOD_DARK} />

      {/* timber posts dividing the wall sections */}
      {[510, 1044].map((px) => (
        <g key={px}>
          <rect x={px} y={96} width={26} height={604} fill={WOOD_MID} />
          <rect x={px} y={96} width={7} height={604} fill={WOOD_LIGHT} />
        </g>
      ))}

      {/* wainscot rail */}
      <rect x={0} y={640} width={1600} height={12} fill={WOOD_MID} />
      <rect x={0} y={640} width={1600} height={4} fill={WOOD_LIGHT} />

      {/* ===== left section ===== */}
      <Door x={64} y={300} width={120} height={400} />
      <ArchedWindow x={252} y={230} width={170} height={260} />
      <Crate x={210} y={580} w={82} h={90} />
      {/* low bench under the window */}
      <rect x={306} y={596} width={168} height={16} rx={4} fill={WOOD_LIGHT} />
      <rect x={318} y={612} width={16} height={58} fill={WOOD_MID} />
      <rect x={446} y={612} width={16} height={58} fill={WOOD_MID} />
      <Bottle x={340} y={558} w={22} h={38} color="#6f9c50" />
      <Bottle x={374} y={552} w={26} h={44} color="#b0532f" />

      {/* tall potion shelf */}
      <TallShelf x={560} y={250} width={200} height={450} />

      {/* arched passage to the back room */}
      <path d="M 786 700 L 786 380 A 52 52 0 0 1 890 380 L 890 700 Z" fill="#241a10" />
      <path d="M 774 700 L 774 376 A 64 64 0 0 1 902 376 L 902 700 Z" fill="none" stroke={WOOD_DARK} strokeWidth={16} />

      {/* ===== middle section ===== */}
      <ArchedWindow x={950} y={216} width={180} height={250} />
      {/* curtain valance draped over the middle window */}
      <g>
        <rect x={936} y={210} width={208} height={10} rx={5} fill={WOOD_DARK} />
        <path
          d="M 940 218 q 20 46 40 0 q 20 46 40 0 q 20 46 40 0 q 20 46 40 0 q 20 46 40 0 L 1140 218 Z"
          fill="#7d3b46"
        />
      </g>
      <FountainDisplay cx={975} baseY={676} />
      <DisplayStand x={1090} y={520} />

      {/* ===== right section ===== */}
      <WallShelf x={1180} y={250} width={190} />
      <ArchedWindow x={1408} y={230} width={160} height={250} />
      {/* shop counter / chest */}
      <g>
        <path d="M 1150 560 L 1298 540 L 1298 720 L 1150 740 Z" fill={WOOD_MID} />
        <path d="M 1298 540 L 1352 566 L 1352 736 L 1298 720 Z" fill={WOOD_DARK} />
        <path d="M 1150 560 L 1298 540 L 1352 566 L 1204 588 Z" fill={WOOD_LIGHT} />
        <rect x={1180} y={606} width={86} height={64} rx={4} fill={WOOD_DARK} opacity={0.5} />
      </g>
      <PotionPile x={1382} y={668} />

      {/* ===== hanging from the beam ===== */}
      <HerbBundle x={300} y={130} />
      <HerbBundle x={640} y={130} flip />
      <Lantern x={880} y={130} />
      <HerbBundle x={1210} y={130} />
      <HerbBundle x={1268} y={130} flip />
      <HerbBundle x={1330} y={130} />
      <HerbBundle x={1470} y={130} flip />
      <Lantern x={1120} y={130} />

      {/* ===== floor ===== */}
      <rect x={0} y={700} width={1600} height={200} fill="url(#floorShade)" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={0} y1={740 + i * 44} x2={1600} y2={740 + i * 44} stroke="#4a3324" strokeWidth={3} opacity={0.6} />
      ))}
      {[160, 420, 700, 980, 1240, 1480].map((x, i) => (
        <line key={x} x1={x} y1={700 + (i % 2) * 40} x2={x + 10} y2={740 + (i % 2) * 40} stroke="#4a3324" strokeWidth={3} opacity={0.5} />
      ))}
      {/* baseboard shadow */}
      <rect x={0} y={700} width={1600} height={10} fill="#2f2115" opacity={0.55} />

      {/* soft vignette for depth */}
      <rect x={0} y={0} width={90} height={900} fill="#2f2115" opacity={0.25} />
      <rect x={1510} y={0} width={90} height={900} fill="#2f2115" opacity={0.25} />
    </svg>
  );
}
