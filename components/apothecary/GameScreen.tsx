"use client";

import { useEffect, useState } from "react";
import ShopBackground from "./ShopBackground";
import InfoPanel from "./InfoPanel";

/** Starting state from the concept sketch: 100c, 4 stars, 10:00 AM, Day 7. */
const START_MINUTES = 10 * 60;
const MINUTES_PER_DAY = 24 * 60;

function formatTime(totalMinutes: number): string {
  const h24 = Math.floor(totalMinutes / 60) % 24;
  const m = totalMinutes % 60;
  const period = h24 < 12 ? "AM" : "PM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${period}`;
}

export default function GameScreen() {
  const [coins] = useState(100);
  const [rep] = useState(4);
  const [day, setDay] = useState(7);
  const [minutes, setMinutes] = useState(START_MINUTES);

  // One in-game minute per real second.
  useEffect(() => {
    const tick = setInterval(() => {
      setMinutes((m) => {
        if (m + 1 >= MINUTES_PER_DAY) {
          setDay((d) => d + 1);
          return 0;
        }
        return m + 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  return (
    <div className="relative h-[calc(100dvh-4.25rem)] w-full overflow-hidden bg-[#2f2115]">
      <ShopBackground />
      <div className="absolute left-4 top-4">
        <InfoPanel coins={coins} rep={rep} timeLabel={formatTime(minutes)} day={day} />
      </div>
    </div>
  );
}
