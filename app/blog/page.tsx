import { posts } from "@/content/posts";

export const metadata = {
  title: "Blog | AI Art Gallery",
  description: "Guides on prompts, workflows, and monetizing AI art.",
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="max-w-5xl mx-auto px-6 pt-32">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="opacity-70">Guides, tactics, and updates.</p>

      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        {sorted.map((p) => (
          <a
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-xl border border-white/10 p-5 hover:border-brand transition"
          >
            <div className="text-xl font-semibold">{p.title}</div>
            <div className="opacity-60 text-sm mt-1">{new Date(p.date).toLocaleDateString()}</div>
            <p className="opacity-80 mt-3">{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}