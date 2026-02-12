"use client";

import { useState } from "react";
import AuthButtons from "./AuthButtons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0c0c0d]/80 backdrop-blur-lg fixed w-full z-50 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-brand">AI ART</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/" className="hover:text-brand transition">Home</a>
          <a href="/gallery" className="hover:text-brand transition">Gallery</a>
          <a href="/blog" className="hover:text-brand transition">Blog</a>

          <a
            href="/prompts"
            className="px-4 py-2 rounded-lg border border-brand hover:bg-brand transition"
          >
            Explore Prompts
          </a>

          <a
            href="/workflows"
            className="px-4 py-2 rounded-lg border border-brand hover:bg-brand transition"
          >
            Explore Workflows
          </a>

          <AuthButtons />

          {/* Dev Links (hidden for production) */}
          {/*
          <a href="/dev-firestore" className="hover:text-brand transition">FS Dev</a>
          <a href="/dev-storage" className="hover:text-brand transition">ST Dev</a>
          */}
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
        <div className="md:hidden bg-[#0c0c0d]/95 backdrop-blur-lg border-t border-white/10 px-6 pb-6 space-y-4 text-sm font-medium">
          <a href="/" className="block hover:text-brand transition">Home</a>
          <a href="/gallery" className="block hover:text-brand transition">Gallery</a>
          <a href="/blog" className="block hover:text-brand transition">Blog</a>

          <a
            href="/prompts"
            className="block px-4 py-2 rounded-lg border border-brand hover:bg-brand transition text-center"
          >
            Explore Prompts
          </a>

          <a
            href="/workflows"
            className="block px-4 py-2 rounded-lg border border-brand hover:bg-brand transition text-center"
          >
            Explore Workflows
          </a>

          <div className="pt-2 border-t border-white/10">
            <AuthButtons />
          </div>
        </div>
      )}
    </header>
  );
}
