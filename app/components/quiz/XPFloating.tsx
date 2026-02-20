"use client";

export default function XPFloating({ xp }: { xp: number }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="animate-bounce text-green-600 font-bold text-xl">
        +{xp} XP 🎉
      </div>
    </div>
  );
}