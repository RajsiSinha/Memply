import Link from "next/link";

export default function Features() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section header */}
        <div className="flex items-center justify-between mb-14">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Endless Entertainment
            </h2>
            <p className="text-gray-600 max-w-xl">
              Everything you need to become an internet legend — from meme
              creation to brain-rotting quizzes.
            </p>
          </div>

          <Link
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sky-600 font-medium hover:underline"
          >
            Explore All →
          </Link>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Studio"
            description="The ultimate meme creation tool with layer support, custom fonts, and instant export."
            link="/studio"
            action="Open Editor →"
          />

          <FeatureCard
            title="Quiz"
            description="Test your internet knowledge and find out which viral personality you truly are."
            link="/quiz"
            action="Start Playing →"
          />

          <FeatureCard
            title="Shout-outs"
            description="Get featured in our daily community highlights and reach millions of meme fans."
            link="/shoutout"
            action="View Community →"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  link,
  action,
}: {
  title: string;
  description: string;
  link: string;
  action: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mb-6">
        {description}
      </p>

      <Link
        href={link}
        className="text-sky-600 font-medium text-sm hover:underline"
      >
        {action}
      </Link>
    </div>
  );
}
