import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/60">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center justify-center text-center space-y-4">

        {/* 🔷 Logo */}
        <div className="flex items-center gap-3">
        <img
  src="/icon.png"
  alt="Graphyx Logo"
  className="w-9 h-7 rounded-md"
/>


          <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Graphyx.art
          </span>
        </div>

        {/* ✨ Tagline */}
        <p className="text-sm text-zinc-400 max-w-md">
          Powered by{" "}
          <span className="text-purple-400 font-medium">
            Graphyx Art
          </span>{" "}
          — Platform for{" "}
          <span className="text-blue-400 font-medium">
            Next-Gen Creators
          </span>
        </p>

        {/* 🧾 Copyright */}
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Graphyx. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
