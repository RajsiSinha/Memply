"use client";

import { useState } from "react";
import {
  LayoutGrid,
  Upload,
  Type,
  Smile,
  Settings,
} from "lucide-react";

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
  console.log("🔥 STUDIO SIDEBAR RENDERED");

  const [activeTab, setActiveTab] = useState<
    "templates" | "uploads" | "text" | "stickers"
  >("templates");

  const [templateTab, setTemplateTab] = useState<
    "templates" | "library"
  >("templates");

  return (
    <aside className="flex h-full bg-white">
      {/* ICON RAIL */}
      <div className="w-16 flex flex-col items-center py-5 gap-7">
        <IconButton
          label="Layouts"
          active={activeTab === "templates"}
          onClick={() => setActiveTab("templates")}
        >
          <LayoutGrid size={20} />
        </IconButton>

        <IconButton
          label="Uploads"
          active={activeTab === "uploads"}
          onClick={() => setActiveTab("uploads")}
        >
          <Upload size={20} />
        </IconButton>

        <IconButton
          label="Text"
          active={activeTab === "text"}
          onClick={() => setActiveTab("text")}
        >
          <Type size={20} />
        </IconButton>

        <IconButton
          label="Stickers"
          active={activeTab === "stickers"}
          onClick={() => setActiveTab("stickers")}
        >
          <Smile size={20} />
        </IconButton>

        <div className="mt-auto">
          <IconButton
            label="Settings"
            active={false}
            onClick={() => {}}
          >
            <Settings size={20} />
          </IconButton>
        </div>
      </div>

      {/* CONTENT PANEL */}
      <div className="w-72 flex flex-col h-full">
        {/* TEMPLATES PANEL */}
        {activeTab === "templates" && (
          <div className="flex flex-col h-full px-4 pt-3">
            {/* TABS */}
            <div className="flex gap-6 text-sm mb-3">
              <button
                onClick={() => setTemplateTab("templates")}
                className={`pb-1 ${
                  templateTab === "templates"
                    ? "text-sky-600 font-medium border-b border-sky-500"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Templates
              </button>

              <button
                onClick={() => setTemplateTab("library")}
                className={`pb-1 ${
                  templateTab === "library"
                    ? "text-sky-600 font-medium border-b border-sky-500"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                My Library
              </button>
            </div>

            {/* SEARCH */}
            <input
              placeholder="Search templates..."
              className="mb-4 px-4 py-2 text-sm bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-sky-400"
            />

            {/* GRID */}
            <div className="flex-1 overflow-y-auto pb-4">
              <div className="grid grid-cols-2 gap-4">
                {templates.map((template) => (
                  <button
                    key={template}
                    onClick={() => onTemplateSelect(template)}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-400 hover:bg-gray-200 transition">
                      Preview
                    </div>

                    <span className="text-xs text-center text-gray-600">
                      {template}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TEXT TAB */}
        {activeTab === "text" && (
          <div className="p-4 space-y-3">
            <button
              onClick={() => onAddText("top")}
              className="w-full px-3 py-2 rounded-lg bg-gray-100 text-sm hover:bg-gray-200"
            >
              Add Top Text
            </button>
            <button
              onClick={() => onAddText("bottom")}
              className="w-full px-3 py-2 rounded-lg bg-gray-100 text-sm hover:bg-gray-200"
            >
              Add Bottom Text
            </button>
          </div>
        )}

        {activeTab !== "templates" && activeTab !== "text" && (
          <p className="p-4 text-sm text-gray-400">
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
        className={`w-10 h-10 rounded-lg flex items-center justify-center transition
          ${
            active
              ? "bg-sky-100 text-sky-600"
              : "text-gray-400 group-hover:text-sky-500 group-hover:bg-gray-100"
          }`}
      >
        {children}
      </div>

      <span
        className={`text-[10px] leading-none ${
          active ? "text-sky-600 font-medium" : "text-gray-400"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
