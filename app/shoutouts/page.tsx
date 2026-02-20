"use client";

import { useState } from "react";

import WallHeader from "@/app/components/shoutouts/WallHeader";
import NotesGrid from "@/app/components/shoutouts/NotesGrid";
import FilterTabs from "@/app/components/shoutouts/FilterTabs";
import WallFooter from "@/app/components/shoutouts/WallFooter";
import WallTopBar from "@/app/components/shoutouts/WallTopBar";
import CreateNoteModal from "@/app/components/shoutouts/CreateNoteModal";
import { notes } from "@/app/lib/notesData";

export default function ShoutoutsPage() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [userNotes, setUserNotes] = useState<any[]>([]);

  const [visible, setVisible] = useState(4);
  const [mode, setMode] = useState("feed");
  const [filter, setFilter] = useState("latest");
  const totalNotes = notes.length + userNotes.length;

  const handleCreate = (note: any) => {
    const newNote = { ...note, isNew: true };

    setUserNotes((prev) => [newNote, ...prev]);

    setTimeout(() => {
      setUserNotes((prev) =>
        prev.map((n) =>
          n.id === newNote.id ? { ...n, isNew: false } : n
        )
      );
    }, 600);
  };

  return (
    <div
      className="min-h-screen bg-[#e6b98f] 
      [background-image:radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] 
      [background-size:12px_12px]"
    >
      {/* Top Bar */}
      <WallTopBar
        onSearch={setSearch}
        onCreateClick={() => setOpen(true)}
        mode={mode}
        onModeChange={setMode}
      />

      {/* Hero */}
      <WallHeader />

      <div className="max-w-[1400px] mx-auto px-4">

        {/* Filters */}
        <div className="flex justify-end mb-10">
          <FilterTabs
            filter={filter}
            onChange={setFilter}
          />
        </div>

        {/* Notes */}
        <NotesGrid
          search={search}
          extraNotes={userNotes}
          visible={visible}
          mode={mode}
          filter={filter}
        />

        {/* Load More */}
        <div className="flex justify-center py-20">
          <button
            onClick={() => setVisible((v) => v + 4)}
            className="px-10 py-4 rounded-full bg-white/80 backdrop-blur shadow-lg hover:shadow-xl transition font-medium"
          >
            See more chaos ↓
          </button>
        </div>
      </div>

      {/* Footer */}
      <WallFooter />

      {/* Floating Mobile Post Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 rounded-full bg-black text-white text-xl shadow-lg"
      >
        +
      </button>

      {/* Modal */}
      <CreateNoteModal
        open={open}
        onClose={() => setOpen(false)}
        onCreate={handleCreate}
      />
    </div>
  );
}