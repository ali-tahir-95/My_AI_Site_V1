export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
      prose prose-invert max-w-none

      prose-headings:bg-gradient-to-r
      prose-headings:from-purple-400
      prose-headings:to-blue-400
      prose-headings:bg-clip-text
      prose-headings:text-transparent

      prose-p:text-zinc-300
      prose-strong:text-purple-400
      prose-a:text-blue-400
      prose-a:no-underline
      hover:prose-a:text-purple-400

      prose-li:text-zinc-300
      prose-blockquote:border-purple-500
      prose-blockquote:text-zinc-400

      prose-code:text-purple-300
      prose-pre:bg-black/30
      prose-pre:border
      prose-pre:border-white/10
      prose-pre:rounded-xl
      "
    >
      {children}
    </div>
  );
}
