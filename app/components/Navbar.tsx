"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 h-full">
        <div className="flex items-center justify-center h-full">
          <Image
            src="/logo.png"
            alt="Memply logo"
            width={36}
            height={36}
            priority
            className="relative top: 1px]"
          />
          </div>
          <span className="text-lg font-bold tracking-tight leading-[1] text-gray-900">
            Memply
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition">
            Home
          </Link>
          <Link href="/studio" className="hover:text-gray-900 transition">
            Studio
          </Link>
          <Link href="/quiz" className="hover:text-gray-900 transition">
            Quiz
          </Link>
          <Link href="/shoutout" className="hover:text-gray-900 transition">
            Shout-outs
          </Link>
        </div>

        {/* CTA */}
        <Link href="/studio">
          <button className="px-5 py-2.5 rounded-full bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition shadow-md shadow-sky-500/30">
            Get Started
          </button>
        </Link>

      </nav>
    </header>
  );
}
