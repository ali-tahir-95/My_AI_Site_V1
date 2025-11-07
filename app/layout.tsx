// app/layout.tsx
import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FirebaseProvider } from "@/components/FirebaseProvider";


export const metadata = {
title: "AI Art Gallery",
description: "Generate & explore AI-created art.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen flex flex-col font-sans">
<FirebaseProvider>
<Navbar />
<main className="flex-1 pt-20">{children}</main>
<Footer />
</FirebaseProvider>
</body>
</html>
);
}