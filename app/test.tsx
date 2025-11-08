export default function Footer() {
    return (
      <footer className="border-t border-white/10 py-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} AI ART GALLERY — Powered by Next.js + Firebase + Stripe
      </footer>
    );
  }