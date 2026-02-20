export default function WallHeader() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">

      <div className="inline-block bg-cyan-500 text-white text-xs px-4 py-1.5 rounded-full mb-6 shadow">
        LIVE WALL
      </div>

      <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
        Shout-outs{" "}
        <span className="text-cyan-600 italic font-semibold">
          Wall
        </span>
      </h1>

      <p className="mt-6 bg-white/70 backdrop-blur rounded-full px-6 py-3 max-w-xl text-gray-700 shadow">
        The internet’s interactive bulletin board. Pin your thoughts. Express the vibe.
      </p>

    </div>
  );
}