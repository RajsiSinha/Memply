"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WallTopBar({
  onSearch,
  onCreateClick,
  mode = "feed",
  onModeChange,
}: {
  onSearch?: (v: string) => void;
  onCreateClick?: () => void;
  mode?: string;
  onModeChange?: (m: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* LEFT — Logo + Search */}
        <div className="flex items-center gap-6">

          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="font-semibold text-lg">Memply</span>
          </Link>

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
            <input
              placeholder="Search notes..."
              className="bg-transparent outline-none text-sm w-full"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>

        </div>

        {/* CENTER — NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">

          {/* Feed */}
          <button
            onClick={() => onModeChange?.("feed")}
            className={`relative px-1 transition ${
              mode === "feed"
                ? "text-cyan-600 font-semibold"
                : "hover:text-black"
            }`}
          >
            Feed

            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-cyan-500 transition-all duration-300 ${
                mode === "feed" ? "w-full" : "w-0"
              }`}
            />
          </button>

          {/* Trending */}
          <button
            onClick={() => onModeChange?.("trending")}
            className={`relative px-1 transition ${
              mode === "trending"
                ? "text-cyan-600 font-semibold"
                : "hover:text-black"
            }`}
          >
            Trending

            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-cyan-500 transition-all duration-300 ${
                mode === "trending" ? "w-full" : "w-0"
              }`}
            />
          </button>

        </div>

        {/* RIGHT — Actions */}
        <div className="flex items-center gap-4">

          {/* Post Button */}
          <button
            onClick={onCreateClick}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:opacity-90 transition"
          >
            ✏️ Post a Note
          </button>

          {/* Avatar */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="w-9 h-9 rounded-full bg-gray-300"
            />

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border p-2 text-sm">

                <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Profile
                </button>

                <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                  My Notes
                </button>

                <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Logout
                </button>

              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}