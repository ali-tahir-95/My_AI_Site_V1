import { posts } from "@/content/posts";

export const metadata = {
  title: "Journal ",
  description:
    "The Graphyx Journal explores Artwork, prompt engineering, creative workflows, and digital aesthetics shaping the future of generative design.",
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">

      {/* 🔮 Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Graphyx Journal
      </h1>

      {/* ✨ Subheading */}
      <p className="text-zinc-400 max-w-2xl">
        Insights, creative breakdowns, and deep explorations into Next-Gen
        Artwork, prompt engineering, workflow traversal, and the evolving language of digital imagination.
      </p>

      {/* 📰 Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {sorted.map((p) => (
          <a
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-2xl bg-black/30 border border-white/10 
                       overflow-hidden transition-all duration-300
                       hover:border-purple-500/40 
                       hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]"
          >
            {p.cover && (
              <div className="relative w-full h-52 overflow-hidden">

                {p.cover.type === "image" && (
                  <img
                    src={p.cover.src}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {p.cover.type === "video" && (
                  <video
                    src={p.cover.src}
                    poster={p.cover.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}

                {p.cover.type === "youtube" && (
                  <img
                    src={`https://img.youtube.com/vi/${p.cover.src}/hqdefault.jpg`}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
            )}

            <div className="p-6">
              <div className="text-lg font-semibold text-zinc-100 group-hover:text-purple-400 transition">
                {p.title}
              </div>

              <div className="text-sm text-zinc-500 mt-2">
                {new Date(p.date).toLocaleDateString()}
              </div>

              <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
