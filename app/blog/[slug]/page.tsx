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
    <section className="max-w-5xl mx-auto px-6 pt-32">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <div className="opacity-60 mt-1">{new Date(post.date).toLocaleDateString()}</div>

      <div className="mt-8">
        <Prose>
          <MDX />
        </Prose>
      </div>
    </section>
  );
}