export type PostMeta = {
    slug: string;
    title: string;
    description: string;
    date: string; // ISO
    cover?: string;
    // Lazy loader for MDX module
    mdx: () => Promise<{ default: React.ComponentType }>;
  };
  
  export const posts: PostMeta[] = [
    {
      slug: "getting-started-ai-art",
      title: "Getting Started with AI Art",
      description: "A fast guide to creating your first AI image and showcasing it.",
      date: "2025-11-10",
      cover: "/favicon.ico",
      mdx: () => import("./getting-started-ai-art.mdx"),
    },
    {
      slug: "selling-prompts-best-practices",
      title: "Selling Prompts & Workflows: Best Practices",
      description: "Position your prompts, protect value, and increase conversions.",
      date: "2025-11-10",
      mdx: () => import("./selling-prompts-best-practices.mdx"),
    },
    {
      slug: "mastering-negative-prompts",
      title: "Mastering Negative Prompts",
      description: "Cleaner outputs with fewer artifacts—your quick-start playbook.",
      date: "2025-11-10",
      cover: "/blog/mastering-negative-prompts/cover.jpg",
      mdx: () => import("./mastering-negative-prompts.mdx"),
    }
  ];