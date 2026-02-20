"use client";

import Link from "next/link";
import Image from "next/image";

export default function EscapePage() {
  return (
    <div className="min-h-screen flex flex-col escape-bg text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Memply logo"
            width={36}
            height={36}
            className="drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          />
          <span className="font-semibold text-lg">Memply</span>
        </Link>

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
      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-6">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">

  <span className="
    text-[180px] md:text-[260px] font-extrabold
    text-white/5 tracking-widest
    blur-[1px]
  ">
    MEME
  </span>

</div>

        {/* Orb */}
        <div className="relative z-10 mb-12">

          <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-br from-cyan-400 to-purple-500 opacity-40 scale-150" />

          <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-[0_0_80px_rgba(0,255,255,0.4)] animate-float-orb">
            <div className="text-5xl">✨</div>
          </div>

        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Escape the Void.
        </h1>

        <p className="text-white/60 max-w-xl mb-8">
          Curing boredom, one high-quality meme at a time.
        </p>

        <button className="px-8 py-3 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-semibold backdrop-blur hover:bg-cyan-500/30 transition animate-glow">
          I’M BORED →
        </button>

        <div className="flex items-center gap-2 mt-8 text-sm text-white/50">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-400 border border-black" />
            <div className="w-8 h-8 rounded-full bg-gray-500 border border-black" />
            <div className="w-8 h-8 rounded-full bg-gray-600 border border-black" />
          </div>
          <span>+12k escaping the void now</span>
        </div>

      </main>

      {/* FOOTER HUD */}
      <footer className="backdrop-blur-md bg-black/10 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between text-xs text-white/40">

          {/* LEFT */}
          <div className="flex items-center gap-6">
            <span>V2.4.0 EXPERIMENTAL</span>
            <span className="w-16 h-px bg-white/20" />
            <span>PORTAL STATUS: OPTIMIZED</span>
          </div>

          {/* CENTER */}
          <div className="hidden md:flex flex-col items-center gap-2 text-white/30">
            <span className="tracking-widest">ESCAPING THE VOID NOW</span>
            <div className="w-px h-6 bg-white/20 scroll-indicator" />
            <span className="tracking-widest text-[10px]">
              SCROLL TO DIVE
            </span>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
              🔗
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
              🔊
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
              ⛶
            </button>
          </div>

        </div>

      </footer>

    </div>
  );
}