type Props = {
  onConfirm: () => void;
};

export default function QuizFooter({ onConfirm }: Props) {
  return (
    <div className="flex items-center justify-between">

      <button className="text-gray-400 text-sm">
        🚩 REPORT
      </button>

      <div className="flex items-center gap-6">

        <button className="text-gray-500">
          Skip
        </button>

        <button
          onClick={onConfirm}
          className="px-7 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow hover:scale-105 active:scale-95 transition"
        >
          CONFIRM →
        </button>

      </div>

    </div>
  );
}