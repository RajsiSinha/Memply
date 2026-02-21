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
<main className="relative flex-1 flex flex-col items-center justify-center text-center px-0 pt-0 md:pt-0">

  {/* MEME BACKGROUND TEXT */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
    <span className="
      text-[220px] md:text-[300px]
      font-extrabold tracking-widest
      text-white/5
    ">
      MEME
    </span>
  </div>


  {/* Orb */}
<div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">

  <div className="relative">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-br from-cyan-400 to-purple-500 opacity-25 scale-150" />

    {/* Orb */}
    <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-[0_0_80px_rgba(0,255,255,0.4)] animate-float-orb">

      {/* Dotted texture */}
      <div className="absolute inset-0 rounded-full opacity-20 bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_1px,_transparent_1px)] bg-[length:8px_8px]" />

      {/* White Sparkle Icon */}
  <div className="relative w-12 h-12">
    <svg
      viewBox="0 0 24 24"
      fill="white"
      className="w-full h-full drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
    >
      <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z" />
    </svg>
  </div>

    </div>

  </div>

</div>


  {/* CONTENT */}
  <div className="relative z-20 flex flex-col items-center mt-150 md:mt-150">

  {/* Heading */}
  <h1 className="text-5xl md:text-6xl font-bold mb-4">
    Escape the Void.
  </h1>

  {/* Subtitle */}
  <p className="text-white/60 max-w-xl">
    Curing boredom, one high-quality meme at a time.
  </p>

  {/* Button overlapping subtitle */}
  <button
    className="
    mt-1
    px-8 py-3
    rounded-full
    bg-white/10
    border border-white/20
    text-cyan-200 font-semibold
    backdrop-blur-2xl
    hover:bg-white/20
    transition
    animate-glow
    shadow-[0_0_30px_rgba(34,211,238,0.25)]
    "
  >
    I’M BORED →
  </button>

    <div className="flex flex-col items-center justify-center mt-6 mb-6 text-sm text-white/50">
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
        <div className="w-8 h-8 rounded-full bg-gray-400 border border-black" />
        <div className="w-8 h-8 rounded-full bg-gray-500 border border-black" />
        <div className="w-8 h-8 rounded-full bg-gray-600 border border-black" />
      </div>
      <span>+12k </span>
    </div>
  
  {/* ESCAPING THE VOID NOW */}
  <div className="flex flex-col items-center mt-4 text-white/30">
    <span className="tracking-widest text-xs">
      ESCAPING THE VOID NOW
    </span>

    <div className="w-px h-6 bg-white/20 mt-2" />

    <span className="tracking-widest text-[10px] mt-1">
      SCROLL TO DIVE
    </span>
  </div>

</div>

</div>
</main>

       {/* BOTTOM HUD */}
  <div className="
    absolute bottom-8 md:bottom-5 left-0 right-0
    flex items-center justify-between
    px-8 text-xs text-white/40
  ">

    {/* LEFT */}
    <div className="flex items-center gap-6">
      <span>V2.4.0 EXPERIMENTAL</span>
      <span className="w-10 h-px bg-white/20" />
      <span>PORTAL STATUS: OPTIMIZED</span>
    </div>

    {/* CENTER */}
    {/* <div className="hidden md:flex flex-col items-center justify-center gap-2 text-white/30">
      <span className="tracking-widest">ESCAPING THE VOID NOW</span>
      <div className="w-px h-6 bg-white/20" />
      <span className="tracking-widest text-[10px]">
        SCROLL TO DIVE
      </span>
    </div> */}

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
</div>
  );
}