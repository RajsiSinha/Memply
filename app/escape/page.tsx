"use client";

import Link from "next/link";

export default function EscapePage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#0f2a2a] to-[#1b1f3a] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-400 rounded-xl" />
          <span className="font-semibold text-lg">Memply</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <Link href="/escape" className="hover:text-white transition">
            Explore
          </Link>
          <Link href="/shoutouts" className="hover:text-white transition">
            Trending
          </Link>
          <Link href="/studio" className="hover:text-white transition">
            Archive
          </Link>

          <button className="px-5 py-2 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
            Surprise Me
          </button>
        </nav>

        <div className="w-9 h-9 rounded-full bg-yellow-300" />
      </header>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-10">

        {/* Orb */}
        <div className="relative mb-12">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-br from-cyan-400 to-purple-500 opacity-40 scale-150" />

          {/* Orb */}
          <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-[0_0_80px_rgba(0,255,255,0.4)]">

            <div className="text-5xl">✨</div>

          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Escape the Void.
        </h1>

        <p className="text-white/60 max-w-xl mb-8">
          Curing boredom, one high-quality meme at a time.
        </p>

        {/* CTA */}
        <button className="px-8 py-3 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-semibold backdrop-blur hover:bg-cyan-500/30 transition">
          I’M BORED →
        </button>

        {/* Users */}
        <div className="flex items-center gap-2 mt-8 text-sm text-white/50">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-400 border border-black" />
            <div className="w-8 h-8 rounded-full bg-gray-500 border border-black" />
            <div className="w-8 h-8 rounded-full bg-gray-600 border border-black" />
          </div>
          <span>+12k escaping the void now</span>
        </div>

      </section>

      {/* FOOTER INFO */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-between px-8 text-xs text-white/30">

        <div>V2.4.0 EXPERIMENTAL</div>

        <div>PORTAL STATUS: OPTIMIZED</div>

      </div>

    </div>
  );
}