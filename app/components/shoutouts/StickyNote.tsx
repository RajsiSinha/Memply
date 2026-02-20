export default function StickyNote({ note }: any) {
  return (
    <div
      className={`relative break-inside-avoid rounded-lg p-5 shadow-lg hover:scale-105 transition ${note.color}`}
      style={{
        transform: `rotate(${note.rotate}deg)`
      }}
    >

      {/* Pin */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full shadow-md" />

      <p className="text-sm font-semibold whitespace-pre-line">
        {note.text}
      </p>

      {/* Reactions */}
      <div className="flex gap-2 mt-6 flex-wrap">

        {note.reactions.map((r: any, i: number) => (
          <div
            key={i}
            className="bg-white/60 backdrop-blur px-3 py-1 rounded-full text-xs flex items-center gap-1"
          >
            {r.icon} {r.count}
          </div>
        ))}

      </div>

    </div>
  );
}