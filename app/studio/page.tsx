"use client";

import { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import CanvasArea from "./CanvasArea";
import PropertiesPanel from "./PropertiesPanel";
import StudioTopBar from "./StudioTopBar";
import { TextLayer } from "./types";
import { Move, Search, Undo2, Redo2, Layers } from "lucide-react";

export default function StudioPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [textLayers, setTextLayers] = useState<TextLayer[]>([]);
  const [selectedTextId, setSelectedTextId] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const addTextLayer = (position: "top" | "bottom") => {
    setTextLayers((prev) => [
      ...prev,
      {
        id: Date.now(),
        content: position === "top" ? "TOP TEXT" : "BOTTOM TEXT",
        position,
        x: 150,
        y: position === "top" ? 40 : 400,
        color: "#ffffff",
        fontSize: 32,
        bold: true,
        align: "center",
        letterSpacing: 1,
        opacity: 1,
        strokeWidth: 0,
        strokeColor: "#000000",
      },
    ]);
  };

  const moveText = (id: number, x: number, y: number) => {
    setTextLayers((prev) =>
      prev.map((layer) =>
        layer.id === id ? { ...layer, x, y } : layer
      )
    );
  };

  const updateText = (id: number, value: string) => {
    setTextLayers((prev) =>
      prev.map((layer) =>
        layer.id === id ? { ...layer, content: value } : layer
      )
    );
  };

  const updateStyle = (id: number, changes: Partial<TextLayer>) => {
    setTextLayers((prev) =>
      prev.map((layer) =>
        layer.id === id ? { ...layer, ...changes } : layer
      )
    );
  };

  const deleteTextLayer = (id: number) => {
    setTextLayers((prev) => prev.filter((l) => l.id !== id));
    setSelectedTextId(null);
  };

  const selectedText =
    textLayers.find((l) => l.id === selectedTextId) || null;

  return (
    <div className="h-screen flex flex-col bg-[#f7f9fb]">
      {/* TOP BAR */}
      <StudioTopBar />

      {/* EDITOR */}
      <div className="flex flex-1 overflow-hidden min-h-0">
        {/* LEFT SIDEBAR */}
        <Sidebar
          onTemplateSelect={setSelectedTemplate}
          onAddText={addTextLayer}
        />

        {/* CANVAS COLUMN */}
        <div className="flex flex-col flex-1 items-center min-h-0">
          {/* CANVAS TOOLBAR */}
          <div className="flex items-center gap-4 py-2 text-gray-600">
            {[Move, Search, Undo2, Redo2, Layers].map((Icon, i) => (
              <button
                key={i}
                className="p-1.5 rounded hover:bg-gray-100 transition"
              >
                <Icon size={18} />
              </button>
            ))}

            <div className="ml-3 text-xs text-gray-400 flex items-center gap-2">
              <span className="uppercase tracking-wide">
                Workspace
              </span>
              <span className="bg-gray-100 px-2 py-0.5 rounded">
                100%
              </span>
            </div>
          </div>

          {/* CANVAS */}
          <main className="flex-1 flex items-center justify-center w-full px-6">
            <CanvasArea
              canvasRef={canvasRef}
              selectedTemplate={selectedTemplate}
              textLayers={textLayers}
              selectedTextId={selectedTextId}
              onTextChange={updateText}
              onSelectText={setSelectedTextId}
              onMoveText={moveText}
            />
          </main>
        </div>

        {/* RIGHT PROPERTIES */}
        <PropertiesPanel
          selectedText={selectedText}
          onUpdateStyle={updateStyle}
          onDeleteText={deleteTextLayer}
          canvasRef={canvasRef}
        />
      </div>
    </div>
  );
}
