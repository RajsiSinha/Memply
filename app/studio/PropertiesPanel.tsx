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
    <aside className="w-72 bg-white px-5 py-4 flex flex-col h-full min-h-0">
  {/* HEADER */}
  <h2 className="text-sm font-semibold text-gray-600 mb-4">
    Object Properties
  </h2>

  {/* SCROLLABLE CONTENT */}
  <div className="flex-1 overflow-y-auto space-y-6 pr-1">
    {selectedText ? (
      <>
        {/* ───────── TEXT CONTENT ───────── */}
        <div className="space-y-2">
          <label className="text-xs text-gray-500">Text</label>
          <input
            value={selectedText.content}
            onChange={(e) =>
              onUpdateStyle(selectedText.id, {
                content: e.target.value,
              })
            }
            className="w-full px-2 py-1.5 rounded-md border text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
          />
        </div>

        <Divider />

        {/* ───────── FONT SIZE ───────── */}
        <div className="space-y-2">
          <label className="text-xs text-gray-500">Font Size</label>
          <input
            type="range"
            min={16}
            max={72}
            value={selectedText.fontSize}
            onChange={(e) =>
              onUpdateStyle(selectedText.id, {
                fontSize: Number(e.target.value),
              })
            }
            className="w-full accent-sky-500"
          />
        </div>

        {/* ───────── ALIGNMENT ───────── */}
        <div className="space-y-2">
          <label className="text-xs text-gray-500">
            Alignment
          </label>
          <div className="flex gap-2">
            {(["left", "center", "right"] as const).map(
              (align) => (
                <button
                  key={align}
                  onClick={() =>
                    onUpdateStyle(selectedText.id, {
                      align,
                    })
                  }
                  className={`flex-1 py-1.5 rounded-md text-sm transition
                    ${
                      selectedText.align === align
                        ? "bg-sky-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                >
                  {align}
                </button>
              )
            )}
          </div>
        </div>

        {/* ───────── LETTER SPACING ───────── */}
        <div className="space-y-2">
          <label className="text-xs text-gray-500">
            Letter Spacing
          </label>
          <input
            type="range"
            min={0}
            max={10}
            value={selectedText.letterSpacing}
            onChange={(e) =>
              onUpdateStyle(selectedText.id, {
                letterSpacing: Number(e.target.value),
              })
            }
            className="w-full accent-sky-500"
          />
        </div>

        {/* ───────── OPACITY ───────── */}
        <div className="space-y-2">
          <label className="text-xs text-gray-500">
            Opacity
          </label>
          <input
            type="range"
            min={0.1}
            max={1}
            step={0.1}
            value={selectedText.opacity}
            onChange={(e) =>
              onUpdateStyle(selectedText.id, {
                opacity: Number(e.target.value),
              })
            }
            className="w-full accent-sky-500"
          />
        </div>

        <Divider />

        {/* ───────── TEXT COLOR ───────── */}
        <div className="space-y-2">
          <label className="text-xs text-gray-500">
            Text Color
          </label>
          <input
            type="color"
            value={selectedText.color}
            onChange={(e) =>
              onUpdateStyle(selectedText.id, {
                color: e.target.value,
              })
            }
            className="w-full h-9 rounded-md border border-gray-200"
          />
        </div>

        {/* ───────── OUTLINE ───────── */}
        <div className="space-y-2">
          <label className="text-xs text-gray-500">
            Text Outline
          </label>

          <input
            type="range"
            min={0}
            max={5}
            value={selectedText.strokeWidth}
            onChange={(e) =>
              onUpdateStyle(selectedText.id, {
                strokeWidth: Number(e.target.value),
              })
            }
            className="w-full accent-sky-500"
          />

          <input
            type="color"
            value={selectedText.strokeColor}
            onChange={(e) =>
              onUpdateStyle(selectedText.id, {
                strokeColor: e.target.value,
              })
            }
            className="w-full h-9 rounded-md border border-gray-200"
          />
        </div>

        <Divider />

        {/* ───────── BOLD TOGGLE ───────── */}
        <button
          onClick={() =>
            onUpdateStyle(selectedText.id, {
              bold: !selectedText.bold,
            })
          }
          className={`w-full px-3 py-2 rounded-md text-sm transition
            ${
              selectedText.bold
                ? "bg-sky-50 text-sky-600"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
        >
          {selectedText.bold
            ? "Bold Enabled"
            : "Enable Bold"}
        </button>

        {/* ───────── DELETE ───────── */}
        <button
          onClick={() =>
            onDeleteText(selectedText.id)
          }
          className="w-full px-3 py-2 rounded-md bg-red-50 text-red-600 text-sm hover:bg-red-100 transition"
        >
          Delete Text
        </button>
      </>
    ) : (
      <p className="text-sm text-gray-400 mt-10 text-center">
        Select a text layer to edit
      </p>
    )}
  </div>

  {/* FIXED FOOTER */}
  <div className="pt-4">
    <div className="h-px bg-gray-200/60 mb-4" />
    <button
      onClick={handleExport}
      className="w-full px-4 py-2 rounded-md bg-sky-500 text-white text-sm hover:bg-sky-600 transition"
    >
      Download Meme
    </button>
  </div>
</aside>

  );
}

function Divider() {
  return <div className="h-px bg-gray-200/60" />;
}

