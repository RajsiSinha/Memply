import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-sky-500 px-10 py-20 text-center text-white">
          
          {/* Glow */}
          <div className="absolute inset-0 flex justify-center -z-10">
            <div className="w-[700px] h-[700px] rounded-full bg-white/20 blur-3xl" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to create your next viral meme?
          </h2>

          <p className="text-white/90 max-w-2xl mx-auto mb-10">
            Jump into Memply Studio and turn boredom into content
            people can’t stop sharing.
          </p>

          <Link href="/studio">
            <button className="px-8 py-4 rounded-full bg-white text-sky-600 font-semibold hover:bg-gray-100 transition shadow-lg">
              Start Creating 🚀
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
