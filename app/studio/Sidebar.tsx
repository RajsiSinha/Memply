"use client";

import { useState } from "react";

const templates = [
  "Drake Hotline Bling",
  "Distracted Boyfriend",
  "Expanding Brain",
  "NPC Yes Yes",
  "Relatable Work Meme",
];

type SidebarProps = {
  onTemplateSelect: (template: string) => void;
  onAddText: (position: "top" | "bottom") => void;
};

export default function Sidebar({
  onTemplateSelect,
  onAddText,
}: SidebarProps) {
  const [activeTab, setActiveTab] = useState<
    "templates" | "uploads" | "text" | "stickers"
  >("templates");

  return (
    <aside className="flex h-full border-r bg-white">

      {/* ICON RAIL */}
      <div className="w-16 flex flex-col items-center py-4 gap-6 border-r">
        <IconButton
  label="Layouts"
  active={activeTab === "templates"}
  onClick={() => setActiveTab("templates")}
>
  🟦
</IconButton>

<IconButton
  label="Uploads"
  active={activeTab === "uploads"}
  onClick={() => setActiveTab("uploads")}
>
  ⬆
</IconButton>

<IconButton
  label="Text"
  active={activeTab === "text"}
  onClick={() => setActiveTab("text")}
>
  Tt
</IconButton>

<IconButton
  label="Stickers"
  active={activeTab === "stickers"}
  onClick={() => setActiveTab("stickers")}
>
  😄
</IconButton>

<div className="mt-auto">
  <IconButton
    label="Settings"
    active={false}
    onClick={() => {}}
  >
    ⚙
  </IconButton>
</div>
      </div>

      {/* CONTENT PANEL */}
      <div className="w-72 p-4 overflow-y-auto">
        {activeTab === "templates" && (
          <>
            {/* HEADER */}
            <div className="flex gap-4 mb-4 text-sm">
              <button className="font-medium text-sky-600 border-b-2 border-sky-500 pb-1">
                Templates
              </button>
              <button className="text-gray-400">My Library</button>
            </div>

            {/* SEARCH */}
            <input
              placeholder="Search templates..."
              className="w-full mb-5 px-4 py-2 text-sm bg-gray-100 rounded-full outline-none focus:ring-2 focus:ring-sky-400"
            />

            {/* TEMPLATE GRID (NO IMAGE CHANGE) */}
            <div className="grid grid-cols-2 gap-4">
              {templates.map((template) => (
                <button
                  key={template}
                  onClick={() => onTemplateSelect(template)}
                  className="flex flex-col items-center gap-2 group"
                >
                  {/* Placeholder circle — image stays YOUR responsibility */}
                  <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-400 group-hover:bg-gray-200 transition">
                    Preview
                  </div>

                  <span className="text-xs text-center text-gray-600 truncate w-full">
                    {template}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* TEXT TAB */}
        {activeTab === "text" && (
          <div className="space-y-3">
            <button
              onClick={() => onAddText("top")}
              className="w-full px-3 py-2 rounded-lg border text-sm hover:bg-gray-50"
            >
              ➕ Add Top Text
            </button>
            <button
              onClick={() => onAddText("bottom")}
              className="w-full px-3 py-2 rounded-lg border text-sm hover:bg-gray-50"
            >
              ➕ Add Bottom Text
            </button>
          </div>
        )}

        {activeTab !== "templates" && activeTab !== "text" && (
          <p className="text-sm text-gray-400">
            This section will be available soon.
          </p>
        )}
      </div>
    </aside>
  );
}

/* ICON BUTTON */
function IconButton({
  children,
  label,
  active,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 group"
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm transition
          ${
            active
              ? "bg-sky-100 text-sky-600"
              : "text-gray-400 group-hover:bg-gray-100"
          }`}
      >
        {children}
      </div>

      <span
        className={`text-[10px] leading-none
          ${
            active
              ? "text-sky-600 font-medium"
              : "text-gray-400"
          }`}
      >
        {label}
      </span>
    </button>
  );
}

