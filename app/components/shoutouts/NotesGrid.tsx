import StickyNote from "./StickyNote";
import { notes } from "@/app/lib/notesData";

export default function NotesGrid() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">

      {notes.map((note) => (
        <StickyNote key={note.id} note={note} />
      ))}

    </div>
  );
}