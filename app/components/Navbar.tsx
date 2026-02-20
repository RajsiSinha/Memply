"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = [
    { name: "Home", href: "/" },
    { name: "Escape", href: "/escape", special: true },
    { name: "Studio", href: "/studio" },
    { name: "Quiz", href: "/quiz" },
    { name: "Shout-outs", href: "/shoutouts" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-black/5">
      <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Memply logo" width={36} height={36} />
          <span className="text-lg font-bold tracking-tight text-gray-900">
            Memply
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          {nav.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition ${
                  active
                    ? "text-sky-600"
                    : "text-gray-600 hover:text-gray-900"
                } ${item.special ? "font-semibold" : ""}`}
              >
                {item.special ? "" : ""}
                {item.name}

                {/* Active underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-sky-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* CTA */}
          <Link href="/studio" className="hidden md:block">
            <button className="px-5 py-2.5 rounded-full bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition shadow-md shadow-sky-500/30">
              Get Started
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            ☰
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur px-6 py-4 space-y-3">

          {nav.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block text-sm ${
                  active ? "text-sky-600 font-semibold" : "text-gray-700"
                }`}
              >
                {item.special ? "✨ " : ""}
                {item.name}
              </Link>
            );
          })}

          <Link href="/studio" onClick={() => setOpen(false)}>
            <button className="w-full mt-2 px-5 py-2.5 rounded-full bg-sky-500 text-white text-sm font-semibold">
              Get Started
            </button>
          </Link>

        </div>
      )}
    </header>
  );
}