export default function FeaturedArt() {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto">
        {[1, 2, 3, 4].map((_, idx) => (
          <div key={idx} className="aspect-square bg-white/5 rounded-xl border border-white/10"></div>
        ))}
      </div>
    );
  }