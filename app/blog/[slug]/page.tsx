import { notFound } from "next/navigation";
import { posts } from "@/content/posts";
import Prose from "@/components/Prose";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Graphyx Journal`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const MDX = (await post.mdx()).default;

  return (
    <section className="min-h-screen pt-16 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* 🧭 Breadcrumb */}
        <nav className="text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-purple-400 transition">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/blog" className="hover:text-purple-400 transition">
            Journal
          </a>
          <span className="mx-2">/</span>
          <span className="text-zinc-400">{post.title}</span>
        </nav>

        {/* 🏷 Section Label */}
        <p className="text-xs uppercase tracking-widest text-purple-400 mb-4">
          Graphyx Journal
        </p>

        {/* 📝 Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {post.title}
        </h1>

        {/* 📅 Date */}
        <div className="mt-4 text-sm text-zinc-500">
          {new Date(post.date).toLocaleDateString()}
        </div>

        {/* 📖 Content */}
        <div className="mt-14 text-zinc-300">
          <Prose>
            <MDX />
          </Prose>
        </div>

      </div>
    </section>
  );
}
