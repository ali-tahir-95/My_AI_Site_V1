"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import ArtModal from "./ArtModal";

export default function FeaturedArt() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    const q = query(
      collection(db, "gallery"),
      orderBy("createdAt", "desc")
    );

    const unsub = onSnapshot(q, (snap) => {
      const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setImages(items);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) {
    return <div className="mt-16 text-center opacity-60">Loading art...</div>;
  }

  if (images.length === 0) {
    return (
      <div className="mt-16 text-center text-lg opacity-70">
        🎨 No art yet… Upload the first masterpiece!
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto">
        {images.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelected(img)}
            className="rounded-xl overflow-hidden border border-white/10 hover:border-brand transition cursor-pointer group"
          >
            <img
              src={img.imageUrl}
              className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-3 text-sm">
              <div className="font-semibold opacity-90">
                {img.title || "Untitled"}
              </div>
              <div className="opacity-50 line-clamp-2">
                {img.prompt}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ArtModal art={selected} onClose={() => setSelected(null)} />
    </>
  );
}
