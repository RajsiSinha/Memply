"use client";

import { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import CanvasArea from "./CanvasArea";
import PropertiesPanel from "./PropertiesPanel";
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
      x: 150, // center-ish horizontally
      y: position === "top" ? 40 : 400, // inside canvas
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

  const selectedText = textLayers.find((l) => l.id === selectedTextId) || null;

  return (
    <div className="flex h-[calc(100vh-72px)]">
      <Sidebar
        onTemplateSelect={setSelectedTemplate}
        onAddText={addTextLayer}
      />

      <CanvasArea
      canvasRef={canvasRef}
      selectedTemplate={selectedTemplate}
      textLayers={textLayers}
      selectedTextId={selectedTextId}
      onTextChange={updateText}
      onSelectText={setSelectedTextId}
      onMoveText={moveText}
      />

      <PropertiesPanel
  selectedText={selectedText}
  onUpdateStyle={updateStyle}
  onDeleteText={deleteTextLayer}
  canvasRef={canvasRef}
      />

      
    </div>
  );
}
