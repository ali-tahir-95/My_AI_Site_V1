"use client";

import { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ArtModal from "./ArtModal";
import Spinner from "./Spinner";
import MediaTile from "./MediaTile";

export default function GalleryList() {
  const [items, setItems] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));

    return onSnapshot(q, (snap) => {
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="mt-16 flex justify-center">
        <Spinner size={40} />
      </div>
    );
  }

  if (items.length === 0) {
    return <div className="mt-16 text-center opacity-70">No art yet</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {items.map((item) => (
          <MediaTile
            key={item.id}
            item={item}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      <ArtModal
        art={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
