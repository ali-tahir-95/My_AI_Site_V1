// app/layout.tsx

import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FirebaseProvider } from "@/components/FirebaseProvider";

export const metadata = {
  title: "Graphyx.art",
  description: "Generate & explore AI-created art.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans relative text-white">

        {/* Mesh Background (bottom layer) */}
        <div
          className="fixed inset-0 -z-20 bg-repeat"
          style={{
            backgroundImage: "url('/bg.webp')",
            backgroundSize: "300px 300px",
          }}
        />

        {/* Black Overlay (middle layer) */}
        <div className="fixed inset-0 -z-10 bg-black/70" />

        <FirebaseProvider>
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </FirebaseProvider>

      </body>
    </html>
  );
}
