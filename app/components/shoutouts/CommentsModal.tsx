"use client";

import { useState } from "react";

export default function CommentsModal({
  open,
  onClose,
  note,
}: any) {
  const [comments, setComments] = useState(note.comments || []);
  const [text, setText] = useState("");

  if (!open) return null;

  const addComment = () => {
    if (!text.trim()) return;
    setComments([...comments, { text, id: Date.now() }]);
    setText("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl p-5 w-full max-w-md">

        <h2 className="font-semibold mb-3">Comments</h2>

        <div className="space-y-2 max-h-60 overflow-y-auto">
          {comments.map((c: any) => (
            <div key={c.id} className="bg-gray-100 p-2 rounded-lg text-sm">
              {c.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2"
            placeholder="Write comment..."
          />
          <button
            onClick={addComment}
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}