"use client";

export default function FilterTabs({
  filter,
  onChange,
}: {
  filter: string;
  onChange: (f: string) => void;
}) {
  return (
    <div className="flex bg-white/80 backdrop-blur rounded-full p-1 shadow-lg">

      <button
        onClick={() => onChange("latest")}
        className={`px-6 py-2 rounded-full text-sm font-medium ${
          filter === "latest"
            ? "bg-cyan-500 text-white"
            : "text-gray-600"
        }`}
      >
        Latest
      </button>

      <button
        onClick={() => onChange("popular")}
        className={`px-6 py-2 rounded-full text-sm font-medium ${
          filter === "popular"
            ? "bg-cyan-500 text-white"
            : "text-gray-600"
        }`}
      >
        Popular
      </button>

    </div>
  );
}