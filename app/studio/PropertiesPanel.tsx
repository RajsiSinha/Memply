"use client";

import html2canvas from "html2canvas";
import { TextLayer } from "./types";

type PropertiesPanelProps = {
  selectedText: TextLayer | null;
  onUpdateStyle: (id: number, changes: Partial<TextLayer>) => void;
  onDeleteText: (id: number) => void;
  canvasRef: React.RefObject<HTMLDivElement>;
};

export default function PropertiesPanel({
  selectedText,
  onUpdateStyle,
  onDeleteText,
  canvasRef,
}: PropertiesPanelProps) {
  const handleExport = async () => {
    if (!canvasRef.current) return;

    const canvas = await html2canvas(canvasRef.current, {
      backgroundColor: null,
      scale: 2,
    });

    const link = document.createElement("a");
    link.download = "memply-meme.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <aside className="w-72 border-l bg-white p-4 flex flex-col gap-6">
      
      {/* Text Controls */}
      {selectedText ? (
        <>
          <h2 className="text-sm font-semibold text-gray-500">
            Text Settings
          </h2>

          {/* Font Size */}
          <div>
            <label className="text-xs text-gray-500">Font Size</label>
            <input
              type="range"
              min={16}
              max={64}
              value={selectedText.fontSize}
              onChange={(e) =>
                onUpdateStyle(selectedText.id, {
                  fontSize: Number(e.target.value),
                })
              }
              className="w-full"
            />
          </div>

          {/* Text Color */}
          <div>
            <label className="text-xs text-gray-500">Text Color</label>
            <input
              type="color"
              value={selectedText.color}
              onChange={(e) =>
                onUpdateStyle(selectedText.id, {
                  color: e.target.value,
                })
              }
              className="w-full h-10"
            />
          </div>

          {/* Bold Toggle */}
          <button
            onClick={() =>
              onUpdateStyle(selectedText.id, {
                bold: !selectedText.bold,
              })
            }
            className="w-full px-3 py-2 rounded-lg border text-sm hover:bg-gray-50"
          >
            {selectedText.bold ? "Disable Bold" : "Enable Bold"}
          </button>

          {/* Delete Text */}
          <button
            onClick={() => onDeleteText(selectedText.id)}
            className="w-full px-3 py-2 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600"
          >
            ❌ Delete Text
          </button>
        </>
      ) : (
        <p className="text-sm text-gray-400">
          Select a text layer to edit
        </p>
      )}

      {/* Divider */}
      <div className="border-t pt-4 mt-auto">
        {/* Export Button */}
        <button
          onClick={handleExport}
          className="w-full px-4 py-2 rounded-lg bg-sky-500 text-white text-sm hover:bg-sky-600 transition"
        >
          ⬇ Download Meme
        </button>
      </div>
    </aside>
  );
}
