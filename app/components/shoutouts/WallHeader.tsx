export default function WallHeader() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-10 pb-6">

      <div className="inline-block bg-cyan-500 text-white text-xs px-3 py-1 rounded-full mb-4">
        LIVE WALL
      </div>

      <h1 className="text-5xl font-bold">
        Shout-outs <span className="text-cyan-500 italic">Wall V2</span>
      </h1>

      <p className="mt-4 bg-white/60 backdrop-blur rounded-full px-6 py-3 max-w-xl text-gray-700">
        The internet’s interactive bulletin board. Pin your thoughts. Express the vibe.
      </p>

    </div>
  );
}