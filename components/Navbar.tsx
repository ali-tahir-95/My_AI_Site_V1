export default function Navbar() {
    return (
      <header className="bg-[#0c0c0d]/80 backdrop-blur-lg fixed w-full z-50">
        <nav className="max-w-7xl mx-auto p-5 flex items-center justify-between">
          <h1 className="text-xl font-bold text-brand">AI ART</h1>
  
          <div className="flex gap-6 text-sm font-medium">
            <a href="/" className="hover:text-brand transition">Home</a>
            <a href="/gallery" className="hover:text-brand transition">Gallery</a>
            <a href="/blog" className="hover:text-brand transition">Blog</a>
            <a href="/checkout" className="px-4 py-2 rounded-lg border border-brand hover:bg-brand transition">Buy Prompts</a>
          </div>
        </nav>
      </header>
    );
  }