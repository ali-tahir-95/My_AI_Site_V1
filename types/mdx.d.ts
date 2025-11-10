// types/mdx.d.ts
declare module "*.mdx" {
    import * as React from "react";
    const MDXComponent: React.ComponentType<any>;
    export default MDXComponent;
  
    // (optional) if you ever read frontmatter directly from MDX
    export const frontmatter: Record<string, any>;
  }