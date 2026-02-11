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
    title: `${post.title} | AI Art Blog`,
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
    <section className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* 🧭 Breadcrumb Navigation */}
        <nav className="text-sm opacity-60 mb-6">
          <a href="/" className="hover:text-brand transition">Home</a>
          <span className="mx-2">/</span>
          <a href="/blog" className="hover:text-brand transition">Blog</a>
          <span className="mx-2">/</span>
          <span className="opacity-80">{post.title}</span>
        </nav>

        {/* 📝 Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {post.title}
        </h1>

        {/* 📅 Date */}
        <div className="mt-3 text-sm opacity-60">
          {new Date(post.date).toLocaleDateString()}
        </div>

        {/* 📖 Article Content */}
        <div className="mt-12">
          <Prose>
            <MDX />
          </Prose>
        </div>

      </div>
    </section>
  );
}
