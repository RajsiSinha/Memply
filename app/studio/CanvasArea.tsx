"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TextLayer } from "./types";

type CanvasAreaProps = {
  canvasRef: React.RefObject<HTMLDivElement>;
  selectedTemplate: string | null;
  textLayers: TextLayer[];
  selectedTextId: number | null;
  onTextChange: (id: number, value: string) => void;
  onSelectText: (id: number) => void;
  onMoveText: (id: number, x: number, y: number) => void;
};

const templateImageMap: Record<string, string> = {
  "Drake Hotline Bling": "/templates/drake.jpg",
  "Distracted Boyfriend": "/templates/distracted.jpg",
  "Expanding Brain": "/templates/brain.jpg",
  "NPC Yes Yes": "/templates/npc.jpg",
  "Relatable Work Meme": "/templates/work.jpg",
};

export default function CanvasArea({
  canvasRef,
  selectedTemplate,
  textLayers,
  selectedTextId,
  onTextChange,
  onSelectText,
  onMoveText,
}: CanvasAreaProps) {
  
  const [draggingId, setDraggingId] = useState<number | null>(null);

  // 🔥 GLOBAL mouse move (THIS FIXES IT)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggingId === null || !canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      onMoveText(draggingId, x, y);
    };

    const handleMouseUp = () => {
      setDraggingId(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingId, onMoveText]);

  const handleMouseDown = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    onSelectText(id);
    setDraggingId(id);
  };

  const imageSrc = selectedTemplate
    ? templateImageMap[selectedTemplate]
    : null;

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50">
      <div
        ref={canvasRef}
        className="relative w-[500px] h-[500px] bg-white rounded-xl shadow overflow-hidden"
      >
        {/* Image */}
        {imageSrc ? (
          <Image src={imageSrc} alt="Meme" fill className="object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            Select a template
          </div>
        )}

        {/* Text Layers */}
        {textLayers.map((layer) => (
          <input
  key={layer.id}
  value={layer.content}
  readOnly={selectedTextId !== layer.id}
  onMouseDown={(e) => {
    if (selectedTextId !== layer.id) {
      e.preventDefault(); // allow drag
      handleMouseDown(e, layer.id);
    }
  }}
  onDoubleClick={() => onSelectText(layer.id)}
  onChange={(e) => onTextChange(layer.id, e.target.value)}
  style={{
    transform: `translate(${layer.x}px, ${layer.y}px)`,
    color: layer.color,
    fontSize: layer.fontSize,
    fontWeight: layer.bold ? "800" : "400",
  }}
  className={`absolute left-0 top-0 bg-transparent outline-none text-center drop-shadow-md cursor-move select-none
    ${
      selectedTextId === layer.id
        ? "ring-2 ring-sky-400 cursor-text"
        : ""
    }
  `}
/>

        ))}
      </div>
    </div>
  );
}
