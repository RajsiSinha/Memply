import { Lightbulb } from "lucide-react";

export default function HintPill() {
  return (
    <div className="flex justify-center pt-8">

      <div className="flex items-center gap-2 bg-white/80 backdrop-blur border border-gray-200 shadow-md rounded-full px-6 py-3 text-sm text-gray-600">

        <Lightbulb size={16} />

        Need a hint? (Cost: 50 XP)

      </div>

    </div>
  );
}