"use client";

import { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ArtModal from "./ArtModal";

export default function GalleryList() {
  const [images, setImages] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      setImages(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {images.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelected(img)}
            className="rounded-xl overflow-hidden border border-white/10 hover:border-brand transition cursor-pointer"
          >
            <img src={img.imageUrl} className="w-full h-48 object-cover" />
            <div className="p-3 text-sm">
              <div className="font-semibold opacity-80">{img.title}</div>
              <div className="opacity-50">{img.prompt}</div>
            </div>
          </div>
        ))}
      </div>

      <ArtModal art={selected} onClose={() => setSelected(null)} />
    </>
  );
}
