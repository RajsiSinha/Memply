"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold">
           Memply
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-purple-600 transition">
            Home
          </Link>
          <Link href="/studio" className="hover:text-purple-600 transition">
            Studio
          </Link>
          <Link href="/boredom" className="hover:text-purple-600 transition">
            Boredom
          </Link>
          <Link href="/quiz" className="hover:text-purple-600 transition">
            Quiz
          </Link>
          <Link href="/shoutout" className="hover:text-purple-600 transition">
            Shout-outs
          </Link>
        </div>
      </div>
    </nav>
  );
}
