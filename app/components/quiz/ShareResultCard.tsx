"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";

type Props = {
  score: number;
  total: number;
  xpEarned: number;
  bestStreak: number;
  level: number;
};

export default function ShareResultCard({
  score,
  total,
  xpEarned,
  bestStreak,
  level,
}: Props) {
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
    <div className="space-y-6">

      {/* Card */}
      <div
        ref={ref}
        className="w-full max-w-md mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-3xl p-8 shadow-xl"
      >
        <div className="text-center space-y-4">

          <div className="text-2xl font-bold">
            🎉 Quiz Complete!
          </div>

          <div className="text-lg">
            Score: <span className="font-semibold">{score}/{total}</span>
          </div>

          <div>
            ⭐ XP Earned: <span className="font-semibold">+{xpEarned}</span>
          </div>

          <div>
            🔥 Best Streak: <span className="font-semibold">{bestStreak}</span>
          </div>

          <div className="text-sm opacity-90">
            Level {level} • Memply Quiz
          </div>

        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center">
        <button
          onClick={downloadImage}
          className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow hover:scale-105 active:scale-95 transition"
        >
          Download Result 📥
        </button>
      </div>

    </div>
  );
}