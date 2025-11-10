// next.config.js
const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
  });
  
  const nextConfig = {
    // Make Next.js treat MDX files as pages
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  
    experimental: {
      mdxRs: true, // enables MDX in app router
    },
  };
  
  module.exports = withMDX(nextConfig);