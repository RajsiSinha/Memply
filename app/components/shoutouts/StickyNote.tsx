"use client";

import { useState, useRef } from "react";
import CommentsModal from "./CommentsModal";

export default function StickyNote({ note }: any) {
  const [likes, setLikes] = useState(note.likes || 0);
  const [liked, setLiked] = useState(false);
  const [openComments, setOpenComments] = useState(false);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const start = useRef({ x: 0, y: 0 });

  const handleLike = () => {
    setLiked(!liked);
    setLikes((p: number) => (liked ? p - 1 : p + 1));
  };

  // ===== DRAG =====
  const onPointerDown = (e: any) => {
    setDragging(true);

    start.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
  };

  const onPointerMove = (e: any) => {
    if (!dragging) return;

    setPos({
      x: e.clientX - start.current.x,
      y: e.clientY - start.current.y,
    });
  };

  const onPointerUp = () => {
    setDragging(false);
  };

  return (
    <>
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className={`
          relative w-full max-w-[300px] aspect-square rounded-xl p-5
          shadow-[0_8px_20px_rgba(0,0,0,0.18)]
          flex flex-col justify-between
          transition-transform duration-150
          ${dragging ? "cursor-grabbing z-50" : "cursor-grab hover:-translate-y-1 hover:scale-105"}
          ${note.color}
          ${note.isNew ? "animate-drop" : ""}
        `}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) rotate(${note.rotate}deg)`
        }}
      >
        {/* 🎉 CONFETTI */}
        {note.isNew && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="confetti-burst">
              🎉 ✨ 🎊 ⭐ 💥
            </div>
          </div>
        )}

        {/* User Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-black/20" />
          <div className="text-xs font-medium">
            {note.user || "Anonymous"}
          </div>
          <div className="text-[10px] text-gray-600 ml-auto">
            {note.time || "now"}
          </div>
        </div>

        {/* Pin */}
        <div
          className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.5)] ${
            note.isNew ? "animate-pin" : ""
          }`}
        />

        {/* Text */}
        <p className="text-sm font-semibold whitespace-pre-line">
          {note.text}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={handleLike}
            className={`text-sm flex items-center gap-1 px-3 py-1 rounded-full transition ${
              liked ? "bg-red-500 text-white" : "bg-white/70"
            }`}
          >
            ❤️ {likes}
          </button>

          <button
            onClick={() => setOpenComments(true)}
            className="text-sm px-3 py-1 rounded-full bg-white/70"
          >
            💬 {note.comments?.length || 0}
          </button>
        </div>
      </div>

      {/* Comments Modal */}
      <CommentsModal
        open={openComments}
        onClose={() => setOpenComments(false)}
        note={note}
      />
    </>
  );
}