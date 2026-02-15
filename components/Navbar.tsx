"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthButtons from "./AuthButtons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10">


      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
        <img
  src="/logo.png"
  alt="Graphyx Art Logo"
  className="h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,255,255,0.25)]"
/>

</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-brand transition">Home</Link>
          <Link href="/gallery" className="hover:text-brand transition">Gallery</Link>
          <Link href="/blog" className="hover:text-brand transition">Blog</Link>

          <Link
            href="/prompts"
            className="px-4 py-2 rounded-lg border border-brand hover:bg-brand transition"
          >
            Explore Prompts
          </Link>

          <Link
            href="/workflows"
            className="px-4 py-2 rounded-lg border border-brand hover:bg-brand transition"
          >
            Explore Workflows
          </Link>

          <AuthButtons />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
  <div className="md:hidden bg-black/50 backdrop-blur-md border-b border-white/10 px-6 pb-6 space-y-4 text-sm font-medium">

          <Link href="/" className="pt-4 block hover:text-brand transition">Home</Link>
          <Link href="/gallery" className="block hover:text-brand transition">Gallery</Link>
          <Link href="/blog" className="block hover:text-brand transition pb-2">Blog</Link>

          <Link
            href="/prompts"
            className="block px-4 py-2 rounded-lg border border-brand hover:bg-brand transition text-center"
          >
            Explore Prompts
          </Link>

          <Link
            href="/workflows"
            className="block px-4 py-2 rounded-lg border border-brand hover:bg-brand transition text-center"
          >
            Explore Workflows
          </Link>

          <div className="pt-2 border-t border-white/10">
            <AuthButtons />
          </div>
        </div>
      )}
    </header>
  );
}
