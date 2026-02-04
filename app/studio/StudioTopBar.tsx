"use client";

import { useState } from "react";
import Image from "next/image";

export default function StudioTopBar() {
  const [title, setTitle] = useState("Untitled Meme #1");
  const [isEditing, setIsEditing] = useState(false);

  const handleBlur = () => {
    if (title.trim() === "") {
      setTitle("Untitled Meme #1");
    }
    setIsEditing(false);
  };

  return (
    <header className="h-14 px-4 flex items-center justify-between border-b bg-white">
      
      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* LOGO + NAME */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"   
            alt="Memply Logo"
            width={36}
            height={36}
            priority
          />
          <span className="font-semibold text-sky-600">
              Memply Studio
          </span>
        </div>

        {/* EDITABLE FILE NAME */}
        <div className="flex items-center gap-1">
          {isEditing ? (
            <input
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleBlur();
                }
              }}
              className="text-sm px-2 py-0.5 border rounded focus:outline-none focus:ring-1 focus:ring-sky-400"
            />
          ) : (
            <>
              <span
                className="text-sm font-medium text-gray-700 cursor-pointer hover:underline"
                onClick={() => setIsEditing(true)}
              >
                {title}
              </span>
              <button
                onClick={() => setIsEditing(true)}
                className="text-gray-400 hover:text-gray-600"
                title="Rename"
              >
                ✏️
              </button>
            </>
          )}
        </div>
      </div>

      {/* CENTER */}
      <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
        <div className="flex gap-4">
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
          <button>History</button>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <button title="Move">✥</button>
          <button title="Zoom">🔍</button>
          <button title="Undo">↶</button>
          <button title="Redo">↷</button>
          <button title="Layers">▦</button>
        </div>

        <div className="text-xs bg-gray-100 px-2 py-1 rounded">
          100%
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <button className="text-sm px-3 py-1.5 rounded-md border hover:bg-gray-50">
          Share
        </button>

        <button className="text-sm px-4 py-1.5 rounded-md bg-sky-500 text-white hover:bg-sky-600">
          ⬇ Export Meme
        </button>

        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
          👤
        </div>
      </div>
    </header>
  );
}
