"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-36 bg-gradient-to-b from-sky-50 via-white to-white">

      {/* Background glow */}
        <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sky-200/40 blur-[180px]" />
        <div className="absolute top-40 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-200/30 blur-[160px]" />
        </div>

      {/* Floating emojis */}
      <span className="absolute right-28 top-48 text-xl opacity-70">🔥</span>
      <span className="absolute left-32 bottom-40 text-xl opacity-70">✨</span>
      <span className="absolute left-24 top-40 text-xl opacity-70">😂</span>
      <span className="absolute right-36 bottom-44 text-xl opacity-70">🚀</span>

      <div className="max-w-4xl mx-auto text-center px-4">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold shadow-sm">
          ✨ New meme generator is here
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-10">
          Play with{" "}
          <span className="text-sky-500 italic">memes.</span>
          <br />
          Create internet fun.
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-16">
          The ultimate playground for meme lords and boredom killers.
          Create, remix, and share instantly.
        </p>

        {/* CTA buttons */}
        <div className="flex justify-center gap-5 mb-16">
          <Link href="/studio">
            <button className="px-9 py-3.5 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600 transition shadow-lg shadow-sky-500/30">
              Start Creating
            </button>
          </Link>

          <button className="px-9 py-3.5 rounded-full bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 transition shadow-sm">
            I’m Bored 😵‍💫
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center gap-10 text-sm text-gray-500">
          <span className="flex items-center gap-2">✔ No Login Required</span>
          <span className="flex items-center gap-2">✔ 100% Free</span>
          <span className="flex items-center gap-2">✔ Viral Templates</span>
        </div>

      </div>
    </section>
  );
}
