import CanvasArea from "./CanvasArea";

export default function StudioPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">
        Meme Studio 🎨
      </h1>

      <p className="text-gray-600 mb-6">
        Upload an image and start creating your meme.
      </p>

      <CanvasArea />
    </section>
  );
}
