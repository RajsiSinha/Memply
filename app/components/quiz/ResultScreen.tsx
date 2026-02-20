"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";
import { getLevelInfo } from "@/app/lib/level";

type Props = {
  score: number;
  total: number;
  xpEarned: number;
  bestStreak: number;
  totalXP: number;
  onRestart: () => void;
};

export default function ResultScreen({
  score,
  total,
  xpEarned,
  bestStreak,
  totalXP,
  onRestart,
}: Props) {
  const { level } = getLevelInfo(totalXP);
  const ref = useRef<HTMLDivElement>(null);

  async function downloadImage() {
    if (!ref.current) return;

    const canvas = await html2canvas(ref.current);
    const url = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = url;
    link.download = "memply-result.png";
    link.click();
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">

      <div
        ref={ref}
        className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-3xl p-10 shadow-xl text-center space-y-6"
      >

        <h1 className="text-3xl font-bold">
          🎉 Quiz Complete!
        </h1>

        <div className="space-y-2 text-lg">

          <div>
            🧠 Score: <span className="font-semibold">{score}/{total}</span>
          </div>

          <div>
            ⭐ XP Earned: <span className="font-semibold">+{xpEarned}</span>
          </div>

          <div>
            🔥 Best Streak: <span className="font-semibold">{bestStreak}</span>
          </div>

          <div>
            🏆 Level Reached: <span className="font-semibold">{level}</span>
          </div>

        </div>

        <div className="text-sm opacity-90">
          Memply Quiz • Play & Share 🚀
        </div>

      </div>

      <div className="flex justify-center gap-4">

        <button
          onClick={downloadImage}
          className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow hover:scale-105 active:scale-95 transition"
        >
          Download Result 📥
        </button>

        <button
          onClick={onRestart}
          className="px-6 py-3 rounded-xl bg-white border border-gray-300 font-semibold hover:scale-105 active:scale-95 transition"
        >
          Play Again
        </button>

      </div>

    </div>
  );
}