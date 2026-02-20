type Props = {
  current: number;
  total: number;
  streak?: number;
};

export default function ProgressSection({
  current,
  total,
  streak = 0,
}: Props) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        {/* Left */}
        <div>
          <div className="text-xs font-semibold tracking-wider text-cyan-600">
            POP CULTURE QUIZ
          </div>

          <div className="text-2xl font-bold">
            Question {current.toString().padStart(2, "0")}{" "}
            <span className="text-gray-400">/ {total}</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Streak Badge */}
          {streak > 0 && (
            <div className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
              🔥 {streak} streak
            </div>
          )}

          <div className="text-right">
            <div className="text-cyan-600 text-xl font-bold">
              {percent}%
            </div>
            <div className="text-gray-400 text-sm">
              Progress
            </div>
          </div>

        </div>

      </div>

      {/* Progress bar */}
      <div className="relative">

        <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Rocket bubble */}
        <div
          className="absolute -top-6 -translate-x-1/2"
          style={{ left: `${percent}%` }}
        >
          <div className="bg-white shadow-md rounded-full px-4 py-1 text-xs flex items-center gap-2 border border-gray-100">
            🚀 ALMOST THERE!
          </div>
        </div>

      </div>

    </div>
  );
}