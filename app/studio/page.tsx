"use client";

import { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import CanvasArea from "./CanvasArea";
import PropertiesPanel from "./PropertiesPanel";
import StudioTopBar from "./StudioTopBar";
import { TextLayer } from "./types";

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
    <div className="h-screen flex flex-col">
      {/* STUDIO TOP BAR */}
      <StudioTopBar />

      {/* MAIN EDITOR AREA */}
      <div className="flex flex-1 bg-slate-50 overflow-hidden">
        {/* LEFT SIDEBAR */}
        <Sidebar
          onTemplateSelect={setSelectedTemplate}
          onAddText={addTextLayer}
        />

        {/* CANVAS */}
        <main className="flex-1 flex items-center justify-center px-6">
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

        {/* RIGHT PROPERTIES PANEL */}
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
