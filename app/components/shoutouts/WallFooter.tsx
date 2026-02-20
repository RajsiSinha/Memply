export default function WallFooter() {
  return (
    <div className="mt-20 bg-white/60 backdrop-blur py-10">

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex gap-10 text-cyan-600 font-semibold text-lg">
          <div>
            42.5k
            <div className="text-xs text-gray-500 font-normal">
              NOTES PINNED
            </div>
          </div>

          <div>
            1.2M
            <div className="text-xs text-gray-500 font-normal">
              DAILY REACTIONS
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          © 2026 Memply. Built with ☕ and chaos.
        </div>

      </div>

    </div>
  );
}