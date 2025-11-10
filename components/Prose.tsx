export default function Prose({ children }: { children: React.ReactNode }) {
    return (
      <div className="prose prose-invert max-w-3xl mx-auto prose-headings:scroll-mt-24">
        {children}
      </div>
    );
  }