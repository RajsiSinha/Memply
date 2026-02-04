import Image from "next/image";

const trendingMemes = [
  {
    id: 1,
    src: "/templates/drake.jpg",
    tag: "Template",
  },
  {
    id: 2,
    src: "/templates/distracted.jpg",
    tag: "User Shoutout",
  },
  {
    id: 3,
    src: "/templates/brain.jpg",
    tag: "Trending",
  },
  {
    id: 4,
    src: "/templates/npc.jpg",
    tag: "Popular",
  },
];

export default function Trending() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Section title */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">📈</span>
        <h2 className="text-xl font-semibold">Trending Now</h2>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trendingMemes.map((meme) => (
          <div
            key={meme.id}
            className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition"
          >
            {/* Image wrapper */}
            <div className="relative aspect-square">
              <Image
                src={meme.src}
                alt="Trending meme"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Tag */}
            <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-black/70 text-white">
              {meme.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
