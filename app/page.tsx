import FeaturedArt from "../components/FeaturedArt";
import NeonBanner from "../components/NeonBanner";
import NeonFlourish from "../components/NeonFlourish";

export default function Home() {
  return (
    <section className="pt-14 sm:pt-16 px-4 sm:px-6 text-center">
      <div className="max-w-5xl mx-auto">

        {/* Hero Heading */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-brand to-pink-500 bg-clip-text text-transparent leading-tight">
          Celebrating Refined Art From Visionary Creators
        </h1>

        <p className="opacity-80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-12 text-white">
          A curated collection of distinctive works shaped by imagination, precision, and creative depth
        </p>

        <div className="w-full flex items-center justify-center gap-8">
          <div className="flex-1">
            <NeonFlourish />
          </div>

          <NeonBanner />

          <div className="flex-1">
            <NeonFlourish flipped />
          </div>
        </div>

      </div>

      <FeaturedArt />
    </section>
  );
}
