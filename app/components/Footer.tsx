"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-32">

      {/* Background continuation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-sky-50 via-white to-white" />

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-5">
              <Image
                src="/logo.png"
                alt="Memply logo"
                width={36}
                height={36}
              />
              <span className="text-lg font-semibold tracking-tight">
                Memply
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto md:mx-0">
              A creative playground for memes, stickers, and boredom killers.
              Built for fun, not seriousness.
            </p>
          </div>

          {/* Product */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-gray-900 mb-5">
              Product
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link className="hover:text-gray-900 transition" href="/studio">Meme Studio</Link></li>
              <li><Link className="hover:text-gray-900 transition" href="/trending">Trending</Link></li>
              <li><Link className="hover:text-gray-900 transition" href="/quiz">Quizzes</Link></li>
              <li><Link className="hover:text-gray-900 transition" href="/shoutout">Shout-outs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-gray-900 mb-5">
              Company
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link className="hover:text-gray-900 transition" href="#">About</Link></li>
              <li><Link className="hover:text-gray-900 transition" href="#">Contact</Link></li>
              <li><Link className="hover:text-gray-900 transition" href="#">Privacy</Link></li>
              <li><Link className="hover:text-gray-900 transition" href="#">Terms</Link></li>
            </ul>
          </div>

          {/* Fun */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-gray-900 mb-5">
              Just for fun
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>😂 Meme Lords</li>
              <li>🔥 Daily Trends</li>
              <li>🎨 Creative Mode</li>
              <li>😵‍💫 Boredom Cure</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-6 border-t border-gray-200 flex flex-col items-center gap-3 text-sm text-gray-500 text-center">
          <p>© {new Date().getFullYear()} Memply. All rights reserved.</p>
          <p className="opacity-80">
            Made with memes & chaos 😄
          </p>
        </div>

      </div>
    </footer>
  );
}
