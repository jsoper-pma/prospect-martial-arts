import type { Metadata } from "next";
import GameScreen from "@/components/apothecary/GameScreen";

export const metadata: Metadata = {
  title: "Master's Apothecary | Kihap Games",
  description:
    "Master's Apothecary — a potion shop game by Kihap Games. Brew, stock, and sell your way to a five-star reputation.",
};

export default function ApothecaryPage() {
  return <GameScreen />;
}
