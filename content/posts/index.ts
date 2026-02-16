export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO format
  cover?: {
    type: "image" | "video" | "youtube";
    src: string;          // image path OR video path OR youtube video id
    poster?: string;      // optional for video thumbnails
  };
  mdx: () => Promise<{ default: React.ComponentType }>;
};

export const posts: PostMeta[] = [
  {
    slug: "getting-started-ai-art",
    title: "Getting Started with AI Art",
    description:
      "A fast guide to creating your first AI image and showcasing it.",
    date: "2025-11-10",
    cover: {
      type: "image",
      src: "/images/blog1.jpg",
    },
    mdx: () => import("./getting-started-ai-art.mdx"),
  },

  {
    slug: "selling-prompts-best-practices",
    title: "Selling Prompts & Workflows: Best Practices",
    description:
      "Position your prompts, protect value, and increase conversions.",
    date: "2025-11-10",
    cover: {
      type: "video",
      src: "/videos/sample.mp4",
      poster: "/images/video-thumb.jpg", // optional
    },
    mdx: () => import("./selling-prompts-best-practices.mdx"),
  },

  {
    slug: "mastering-negative-prompts",
    title: "Mastering Negative Prompts",
    description:
      "Cleaner outputs with fewer artifacts—your quick-start playbook.",
    date: "2025-11-10",
    cover: {
      type: "image",
      src: "/images/blog1.jpg",
    },
    mdx: () => import("./mastering-negative-prompts.mdx"),
  },

  {
    slug: "proper-use-of-negative-prompts",
    title: "Proper Use of N Prompts",
    description:
      "Cleaner N prompts with fewer artifacts—your quick-start playbook.",
    date: "2026-01-10",
    cover: {
      type: "image",
      src: "/images/blog2.jpg",
    },
    mdx: () => import("./proper-use-of-negative-prompts.mdx"),
  },
];
