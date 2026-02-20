type Props = {
  label: string;
  text: string;
  selected?: boolean;
  status?: "idle" | "correct" | "wrong";
  onClick?: () => void;
};

export default function OptionItem({
  label,
  text,
  selected,
  status = "idle",
  onClick,
}: Props) {

  const base =
    "w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-200";

  const styles = {
    idle: selected
      ? "bg-cyan-50 border-2 border-cyan-500"
      : "bg-gray-100 border-2 border-transparent hover:bg-gray-200",

    correct:
      "bg-green-50 border-2 border-green-500",

    wrong:
      "bg-red-50 border-2 border-red-500",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[status]}`}
    >
      <div className="flex items-center gap-4">

        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold
          ${
            selected
              ? "bg-cyan-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {label}
        </div>

        <span className="font-medium text-gray-800">
          {text}
        </span>

      </div>

      {selected && status === "idle" && (
        <div className="text-xs bg-cyan-500 text-white px-3 py-1 rounded-full">
          SELECTED ✓
        </div>
      )}
    </button>
  );
}