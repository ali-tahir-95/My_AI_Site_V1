// app/layout.tsx

import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FirebaseProvider } from "@/components/FirebaseProvider";

export const metadata = {
  title: {
    default: "Graphyx Art | Next-Gen Creations",
    template: "%s | Graphyx Art",
  },
  description:
    "Graphyx is a next-generation Art platform for exploring, and publishing cutting-edge digital artwork and generative creations.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
  <meta name="theme-color" content="#000000" />
</head>
      <body className="min-h-screen flex flex-col font-sans relative text-white bg-black">

        {/* Mesh Background (bottom layer) */}
        <div
          className="fixed inset-0 -z-20 bg-repeat"
          style={{
            backgroundImage: "url('/bg.webp')",
            backgroundSize: "300px 300px",
          }}
        />

        {/* Black Overlay (middle layer) */}
        <div className="fixed inset-0 -z-10 bg-black/80" />

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
