import StickyNote from "./StickyNote";
import { notes } from "@/app/lib/notesData";

export default function NotesGrid({
  search = "",
  extraNotes = [],
  visible = 8,
  mode = "feed",
  filter = "latest",
}: {
  search?: string;
  extraNotes?: any[];
  visible?: number;
  filter?: string;
  mode?: string;
}) {
  const allNotes = [...extraNotes, ...notes];

  let filtered = allNotes.filter((n) =>
    n.text.toLowerCase().includes(search.toLowerCase())
  );

  // SORT
if (filter === "popular") {
  filtered = [...filtered].sort(
    (a, b) => (b.likes || 0) - (a.likes || 0)
  );
}

// TRENDING MODE
if (mode === "trending") {
  filtered = filtered.filter((n) => (n.likes || 0) > 5);
}

filtered = filtered.slice(0, visible);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
      {filtered.map((note) => (
        <StickyNote key={note.id} note={note} />
      ))}
    </div>
  );
}