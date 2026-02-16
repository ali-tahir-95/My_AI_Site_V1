"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthButtons from "./AuthButtons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const purpleGlow =
    "drop-shadow-[0_0_6px_rgba(155,92,255,0.8)] drop-shadow-[0_0_16px_rgba(155,92,255,1)]";

  const blueActiveGlow =
    "drop-shadow-[0_0_8px_rgba(0,179,255,0.9)] drop-shadow-[0_0_18px_rgba(0,179,255,1)] drop-shadow-[0_0_28px_rgba(0,179,255,1)]";

  const navItemClass = (path: string) =>
    `transition duration-300 ${
      pathname === path
        ? `text-[#00b3ff] ${blueActiveGlow}`
        : `text-[#b88cff] hover:text-[#e0ccff] hover:${purpleGlow}`
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Graphyx Art Logo"
            className="h-12 w-auto object-contain drop-shadow-[0_0_20px_rgba(155,92,255,0.7)]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link href="/" className={navItemClass("/")}>
            Home
          </Link>

          <Link href="/collections" className={navItemClass("/collections")}>
            Collections
          </Link>

          <Link href="/blog" className={navItemClass("/blog")}>
          Journal
          </Link>

          <Link
            href="/prompts"
            className="px-4 py-2 rounded-lg border border-[#9b5cff] text-[#caa6ff] hover:bg-[#9b5cff] hover:text-black transition duration-300 hover:shadow-[0_0_20px_rgba(155,92,255,1)]"
          >
            Explore Prompts
          </Link>

          <Link
            href="/workflows"
            className="px-4 py-2 rounded-lg border border-[#9b5cff] text-[#caa6ff] hover:bg-[#9b5cff] hover:text-black transition duration-300 hover:shadow-[0_0_20px_rgba(155,92,255,1)]"
          >
            Explore Workflows
          </Link>

          <AuthButtons />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className={`block w-6 h-0.5 bg-[#caa6ff] ${purpleGlow}`}></span>
            <span className={`block w-6 h-0.5 bg-[#caa6ff] ${purpleGlow}`}></span>
            <span className={`block w-6 h-0.5 bg-[#caa6ff] ${purpleGlow}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/50 backdrop-blur-md border-b border-white/10 px-6 pb-6 space-y-5 text-sm font-medium">

          <Link
            href="/"
            className={`block pt-4 ${navItemClass("/")}`}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/collections"
            className={`block ${navItemClass("/collections")}`}
            onClick={() => setOpen(false)}
          >
            Collections
          </Link>

          <Link
            href="/blog"
            className={`block ${navItemClass("/blog")}`}
            onClick={() => setOpen(false)}
          >
            Journal
          </Link>

          <Link
            href="/prompts"
            className="block px-4 py-2 rounded-lg border border-[#9b5cff] text-[#caa6ff] hover:bg-[#9b5cff] hover:text-black transition duration-300 text-center hover:shadow-[0_0_20px_rgba(155,92,255,1)]"
            onClick={() => setOpen(false)}
          >
            Explore Prompts
          </Link>

          <Link
            href="/workflows"
            className="block px-4 py-2 rounded-lg border border-[#9b5cff] text-[#caa6ff] hover:bg-[#9b5cff] hover:text-black transition duration-300 text-center hover:shadow-[0_0_20px_rgba(155,92,255,1)]"
            onClick={() => setOpen(false)}
          >
            Explore Workflows
          </Link>

          <div className="pt-3 border-t border-white/10">
            <AuthButtons />
          </div>
        </div>
      )}
    </header>
  );
}
