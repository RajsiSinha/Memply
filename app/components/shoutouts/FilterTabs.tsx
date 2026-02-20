export default function FilterTabs() {
  return (
    <div className="flex bg-white/70 backdrop-blur rounded-full p-1 shadow">

      <button className="px-6 py-2 rounded-full bg-cyan-500 text-white text-sm">
        Latest
      </button>

      <button className="px-6 py-2 rounded-full text-gray-600 text-sm">
        Popular
      </button>

    </div>
  );
}