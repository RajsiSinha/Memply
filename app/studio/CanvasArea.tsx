"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TextLayer } from "./types";

const BASE_WIDTH = 520;
const BASE_HEIGHT = (520 * 4) / 3;

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

type CanvasAreaProps = {
  canvasRef: React.RefObject<HTMLDivElement>;
  selectedTemplate: string | null;
  textLayers: TextLayer[];
  selectedTextId: number | null;
  onTextChange: (id: number, value: string) => void;
  onSelectText: (id: number) => void;
  onMoveText: (id: number, x: number, y: number) => void;
  zoom: number;
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
  zoom,
}: CanvasAreaProps) {
  /* ---------------- TEXT DRAG ---------------- */

  const [draggingId, setDraggingId] = useState<number | null>(null);
  const dragOffset = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!draggingId || !canvasRef.current || !dragOffset.current) return;

      const rect = canvasRef.current.getBoundingClientRect();

      const x = e.clientX - rect.left - dragOffset.current.x;
      const y = e.clientY - rect.top - dragOffset.current.y;

      onMoveText(draggingId, x, y);
    };

    const up = () => {
      setDraggingId(null);
      dragOffset.current = null;
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [draggingId, onMoveText, canvasRef]);

  /* ---------------- PAN (SPACE + DRAG) ---------------- */

  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef<{ x: number; y: number } | null>(null);
  const spacePressed = useRef(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        spacePressed.current = true;
      }
    };

    const up = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        spacePressed.current = false;
        setIsPanning(false);
        panStart.current = null;
      }
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  const handlePanStart = (e: React.MouseEvent) => {
    if (!spacePressed.current) return;

    setIsPanning(true);
    panStart.current = {
      x: e.clientX - pan.x,
      y: e.clientY - pan.y,
    };
  };

  const handlePanMove = (e: React.MouseEvent) => {
    if (!isPanning || !panStart.current || !canvasRef.current) return;

    const wrapper = canvasRef.current.parentElement;
    if (!wrapper) return;

    const wrapRect = wrapper.getBoundingClientRect();

    const scaledW = BASE_WIDTH * zoom;
    const scaledH = BASE_HEIGHT * zoom;

    const maxX = Math.max(0, (scaledW - wrapRect.width) / 2);
    const maxY = Math.max(0, (scaledH - wrapRect.height) / 2);

    const nextX = e.clientX - panStart.current.x;
    const nextY = e.clientY - panStart.current.y;

    setPan({
      x: clamp(nextX, -maxX, maxX),
      y: clamp(nextY, -maxY, maxY),
    });
  };

  /* ---------------- RENDER ---------------- */

  const imageSrc = selectedTemplate
    ? templateImageMap[selectedTemplate]
    : null;

  return (
    <div
      className="flex-1 flex items-center justify-center bg-[#f7f9fb]"
      onMouseDown={handlePanStart}
      onMouseMove={handlePanMove}
    >
      <div
        ref={canvasRef}
        className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
        style={{ width: BASE_WIDTH, height: BASE_HEIGHT }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "center",
          }}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt="Meme"
              fill
              className="object-contain"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Select a template
            </div>
          )}

          {textLayers.map((layer) => (
            <input
              key={layer.id}
              value={layer.content}
              readOnly={selectedTextId !== layer.id}
              onMouseDown={(e) => {
                e.stopPropagation();
                onSelectText(layer.id);
                setDraggingId(layer.id);

                const rect = canvasRef.current!.getBoundingClientRect();
                dragOffset.current = {
                  x: e.clientX - rect.left - layer.x,
                  y: e.clientY - rect.top - layer.y,
                };
              }}
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
                    : "transparent",
              }}
              className={`absolute left-0 top-0 bg-transparent outline-none select-none ${
                selectedTextId === layer.id
                  ? "ring-2 ring-sky-400 cursor-text"
                  : "cursor-move"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
