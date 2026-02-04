import Hero from "@/app/components/home/Hero";
import Stats from "@/app/components/home/Stats";
import Features from "@/app/components/home/Features";
import Trending from "@/app/components/home/Trending";
import CTA from "@/app/components/home/CTA";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <Stats />
      <Features />
      <Trending />
      <CTA />
    </main>
  );
}
