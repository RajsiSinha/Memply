"use client";

import { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import CanvasArea from "./CanvasArea";
import PropertiesPanel from "./PropertiesPanel";
import StudioTopBar from "./StudioTopBar";
import { TextLayer } from "./types";
import {
  Move,
  Undo2,
  Redo2,
  Layers,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react";

type HistoryState = {
  past: TextLayer[][];
  present: TextLayer[];
  future: TextLayer[][];
};

export default function StudioPage() {
  /* ---------------- HISTORY ---------------- */
  const [history, setHistory] = useState<HistoryState>({
    past: [],
    present: [],
    future: [],
  });

  const textLayers = history.present;

  const commit = (next: TextLayer[]) => {
    setHistory((h) => ({
      past: [...h.past, h.present],
      present: next,
      future: [],
    }));
  };

  const undo = () => {
    setHistory((h) => {
      if (h.past.length === 0) return h;
      const previous = h.past[h.past.length - 1];
      return {
        past: h.past.slice(0, -1),
        present: previous,
        future: [h.present, ...h.future],
      };
    });
  };

  const redo = () => {
    setHistory((h) => {
      if (h.future.length === 0) return h;
      const next = h.future[0];
      return {
        past: [...h.past, h.present],
        present: next,
        future: h.future.slice(1),
      };
    });
  };

  /* ---------------- UI STATE ---------------- */
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedTextId, setSelectedTextId] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const canvasRef = useRef<HTMLDivElement>(null);

  /* ---------------- TEXT ACTIONS ---------------- */
  const addTextLayer = (position: "top" | "bottom") => {
    const id = Date.now();

  setHistory((prev) => ({
    past: [...prev.past, prev.present],
    present: [
      ...prev.present,
      {
        id,
        content: position === "top" ? "TOP TEXT" : "BOTTOM TEXT",
        position,
        x: 150,
        y: position === "top" ? 40 : 420,
        color: "#000000",
        fontSize: 32,
        bold: true,
        align: "center",
        letterSpacing: 1,
        opacity: 1,
        strokeWidth: 0,
        strokeColor: "#000000",
      },
    ],
    future: [],
  }));

   setSelectedTextId(id);
};
  
  const addPresetText = (preset: any) => {
    const id = Date.now();

  setHistory((prev) => ({
    past: [...prev.past, prev.present],
    present: [
      ...prev.present,
      {
        id,
        content: preset.label.toUpperCase(),
        position: "custom",
        x: 150,
        y: 200,
        color: preset.style?.color ?? "#000000",
        fontSize: 32,
        bold: false,
        align: "center",
        letterSpacing: 1,
        opacity: 1,
        strokeWidth: 0,
        strokeColor: "#000000",
        ...preset.style,
      },
    ],
    future: [],
  }));

   setSelectedTextId(id); 
};


  const moveText = (id: number, x: number, y: number) => {
    // live move (no commit – smooth drag)
    setHistory((h) => ({
      ...h,
      present: h.present.map((l) =>
        l.id === id ? { ...l, x, y } : l
      ),
    }));
  };

  const updateText = (id: number, value: string) => {
    commit(
      textLayers.map((l) =>
        l.id === id ? { ...l, content: value } : l
      )
    );
  };

  const updateStyle = (id: number, changes: Partial<TextLayer>) => {
    commit(
      textLayers.map((l) =>
        l.id === id ? { ...l, ...changes } : l
      )
    );
  };

  const deleteTextLayer = (id: number) => {
    commit(textLayers.filter((l) => l.id !== id));
    setSelectedTextId(null);
  };

  const selectedText =
    textLayers.find((l) => l.id === selectedTextId) || null;

  /* ---------------- FIT TO SCREEN ---------------- */
  const handleFitToScreen = () => {
    setZoom(1);
  };

  /* ---------------- KEYBOARD SHORTCUTS ---------------- */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        e.preventDefault();
        undo();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "y") {
        e.preventDefault();
        redo();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* ---------------- RENDER ---------------- */
  return (
    <div className="h-screen flex flex-col bg-[#f7f9fb]">
      <StudioTopBar />

      <div className="flex flex-1 min-h-0 overflow-hidden">
        <Sidebar
          onTemplateSelect={setSelectedTemplate}
          onAddText={addTextLayer}
          onAddPresetText={addPresetText}
        />

        <div className="flex flex-col flex-1 min-h-0">
          {/* TOOLBAR */}
          <div className="shrink-0 flex items-center gap-2 px-4 py-2 text-gray-600">
            <button className="p-1.5 rounded hover:bg-gray-100">
              <Move size={18} />
            </button>

            <button
              onClick={() =>
                setZoom((z) => Math.max(0.4, +(z - 0.1).toFixed(2)))
              }
              className="p-1.5 rounded hover:bg-gray-100"
            >
              <ZoomOut size={18} />
            </button>

            <button
              onClick={() =>
                setZoom((z) => Math.min(2, +(z + 0.1).toFixed(2)))
              }
              className="p-1.5 rounded hover:bg-gray-100"
            >
              <ZoomIn size={18} />
            </button>

            <button
              onClick={handleFitToScreen}
              className="p-1.5 rounded hover:bg-gray-100"
              title="Fit to screen"
            >
              <Maximize2 size={18} />
            </button>

            <button
              onClick={undo}
              disabled={history.past.length === 0}
              className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-40"
            >
              <Undo2 size={18} />
            </button>

            <button
              onClick={redo}
              disabled={history.future.length === 0}
              className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-40"
            >
              <Redo2 size={18} />
            </button>

            <button className="p-1.5 rounded hover:bg-gray-100">
              <Layers size={18} />
            </button>

            <div className="ml-3 text-xs text-gray-400">
              {Math.round(zoom * 100)}%
            </div>
          </div>

          {/* CANVAS */}
          <main className="flex-1 flex items-center justify-center overflow-hidden">
            <CanvasArea
              canvasRef={canvasRef}
              selectedTemplate={selectedTemplate}
              textLayers={textLayers}
              selectedTextId={selectedTextId}
              onTextChange={updateText}
              onSelectText={setSelectedTextId}
              onMoveText={moveText}
              zoom={zoom}
              setZoom={setZoom}
            />
          </main>
        </div>

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
