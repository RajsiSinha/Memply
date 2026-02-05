"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

  /* GLOBAL DRAG */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggingId === null || !canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
      onMoveText(
        draggingId,
        e.clientX - rect.left,
        e.clientY - rect.top
      );
    };

    const stopDrag = () => setDraggingId(null);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDrag);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, [draggingId, onMoveText, canvasRef]);

  const imageSrc = selectedTemplate
    ? templateImageMap[selectedTemplate]
    : null;

  return (
    <div className="flex-1 flex items-center justify-center bg-[#f7f9fb]">
      {/* CANVAS */}
      <div
        ref={canvasRef}
        className="
          relative
          bg-white
          rounded-2xl
          shadow-[0_4px_16px_rgba(0,0,0,0.12)]
          overflow-hidden
        "
        style={{
          width: 600,
          height: 600,
          maxWidth: "90%",
          maxHeight: "90%",
        }}
      >
        {/* TEMPLATE IMAGE */}
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Meme"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            Select a template
          </div>
        )}

        {/* TEXT LAYERS */}
        {textLayers.map((layer) => (
          <input
            key={layer.id}
            value={layer.content}
            readOnly={selectedTextId !== layer.id}
            onMouseDown={(e) => {
              if (selectedTextId !== layer.id) {
                e.preventDefault();
                onSelectText(layer.id);
                setDraggingId(layer.id);
              }
            }}
            onDoubleClick={() => onSelectText(layer.id)}
            onChange={(e) =>
              onTextChange(layer.id, e.target.value)
            }
            style={{
              transform: `translate(${layer.x}px, ${layer.y}px)`,
              color: layer.color,
              fontSize: layer.fontSize,
              fontWeight: layer.bold ? 800 : 400,
              textAlign: layer.align,
              letterSpacing: `${layer.letterSpacing}px`,
              opacity: layer.opacity,
              WebkitTextStroke:
                layer.strokeWidth > 0
                  ? `${layer.strokeWidth}px ${layer.strokeColor}`
                  : "none",
            }}
            className={`
              absolute left-0 top-0
              bg-transparent
              outline-none
              drop-shadow-md
              select-none
              ${
                selectedTextId === layer.id
                  ? "ring-2 ring-sky-400 cursor-text"
                  : "cursor-move"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
