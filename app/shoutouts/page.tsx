import WallHeader from "@/app/components/shoutouts/WallHeader";
import NotesGrid from "@/app/components/shoutouts/NotesGrid";
import FilterTabs from "@/app/components/shoutouts/FilterTabs";

export default function ShoutoutsPage() {
  return (
    <div className="min-h-screen"
      style={{
        backgroundColor: "#e6b98f",
        backgroundImage:
          "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 1px)",
        backgroundSize: "12px 12px",
      }}
    >
      <WallHeader />

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-end mb-6">
          <FilterTabs />
        </div>

        <NotesGrid />

        <div className="flex justify-center py-16">
          <button className="px-8 py-4 rounded-full bg-white/70 shadow-md hover:shadow-lg transition">
            See more chaos ↓
          </button>
        </div>

      </div>

    </div>
  );
}