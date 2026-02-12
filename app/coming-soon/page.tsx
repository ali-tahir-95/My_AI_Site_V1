export default function ComingSoon() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 text-center">
      <div className="max-w-2xl w-full flex flex-col items-center space-y-12">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand to-pink-500 bg-clip-text text-transparent leading-tight">
          Something Powerful is Coming
        </h1>

        <p className="opacity-70 text-lg sm:text-xl leading-relaxed">
          We’re building advanced AI creative tools that will change how you create, refine, and scale your art workflows.
        </p>

        <blockquote className="italic opacity-60 text-base sm:text-lg border-l-2 border-brand pl-4 text-left max-w-md">
          “Creativity is no longer limited by tools — only by imagination.”
        </blockquote>

        <div>
          <a
            href="/"
            className="inline-block px-6 py-3 rounded-lg bg-brand text-white hover:opacity-90 transition font-medium"
          >
            Back to Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
