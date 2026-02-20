"use client";

import { useState } from "react";

const colors = [
  "bg-yellow-300",
  "bg-pink-400 text-white",
  "bg-green-300",
  "bg-blue-400 text-white",
  "bg-orange-400 text-white",
  "bg-purple-300",
];

export default function CreateNoteModal({
  open,
  onClose,
  onCreate,
}: {
  open: boolean;
  onClose: () => void;
  onCreate: (note: any) => void;
}) {
  const [text, setText] = useState("");
  const [color, setColor] = useState(colors[0]);

  if (!open) return null;

  const handleCreate = () => {
    if (!text.trim()) return;

    onCreate({
      id: Date.now(),
      text,
      color,
      rotate: Math.random() * 6 - 3,
      reactions: [],
    });

    setText("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl p-6 w-full max-w-md">

        <h2 className="text-xl font-semibold mb-4">Create a Note</h2>

        {/* Text */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write something..."
          className="w-full h-28 rounded-xl border p-3 outline-none resize-none"
        />

        {/* Colors */}
        <div className="flex gap-3 mt-4">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`w-8 h-8 rounded-full ${c} border-2 ${
                color === c ? "border-black" : "border-transparent"
              }`}
            />
          ))}
        </div>

        {/* Preview */}
        <div className="mt-6">
          <p className="text-sm text-gray-500 mb-2">Preview</p>

          <div
            className={`aspect-square max-w-[200px] rounded-lg p-4 shadow-md flex items-center justify-center text-center ${color}`}
          >
            {text || "Your note..."}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="px-5 py-2 rounded-full bg-black text-white"
          >
            Post
          </button>
        </div>

      </div>
    </div>
  );
}