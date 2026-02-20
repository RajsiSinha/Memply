"use client";

import Image from "next/image";
import { Bell } from "lucide-react";
import { getLevelInfo } from "@/app/lib/level";

type Props = {
  xp?: number;
};

export default function QuizHeader({ xp = 1250 }: Props) {
  const { level, progress } = getLevelInfo(xp);

  return (
    <div className="w-full bg-white/80 backdrop-blur border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left — Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Memply Logo"
            width={40}
            height={40}
            className="rounded-full"
          />

          <span className="text-xl font-semibold">
            Memply
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">

          {/* XP + Level */}
          <div className="flex flex-col items-end">

            <div className="flex items-center gap-3">

              <div className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                ⭐ {xp} XP
              </div>

              <div className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">
                Lv {level}
              </div>

            </div>

            {/* Progress bar */}
            <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

          </div>

          {/* Bell */}
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <Bell size={18} />
          </div>

          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
            👨‍🚀
          </div>

        </div>

      </div>
    </div>
  );
}