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


export default function Sidebar({ onTemplateSelect, onAddText, }: SidebarProps) {
  const [activeTab, setActiveTab] = useState<
    "templates" | "uploads" | "text" | "stickers"
  >("templates");

  return (
    <aside className="w-64 border-r bg-white p-4 flex flex-col">
      
      {/* Tabs */}
      <div className="space-y-1 mb-6">
        <SidebarButton
          label="🖼 Templates"
          active={activeTab === "templates"}
          onClick={() => setActiveTab("templates")}
        />
        <SidebarButton
          label="⬆ Uploads"
          active={activeTab === "uploads"}
          onClick={() => setActiveTab("uploads")}
        />
        <SidebarButton
          label="✍ Text"
          active={activeTab === "text"}
          onClick={() => setActiveTab("text")}
        />
        <SidebarButton
          label="😄 Stickers"
          active={activeTab === "stickers"}
          onClick={() => setActiveTab("stickers")}
        />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "templates" && (
          <>
            <h2 className="text-sm font-semibold text-gray-500 mb-3">
              Trending Templates
            </h2>

            <ul className="space-y-2">
              {templates.map((template) => (
                <li
                  key={template}
                  onClick={() => onTemplateSelect(template)}
                  className="px-3 py-2 rounded-lg border text-sm cursor-pointer hover:bg-gray-50"
                >
                  {template}
                </li>
              ))}
            </ul>
          </>
        )}

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

function SidebarButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition
        ${
          active
            ? "bg-sky-100 text-sky-700 font-medium"
            : "hover:bg-gray-100"
        }`}
    >
      {label}
    </button>
  );
}
