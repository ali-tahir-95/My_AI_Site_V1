"use client";

import { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ArtModal from "./ArtModal";
import Spinner from "./Spinner";
import MediaTile from "./MediaTile";

export default function CollectionList() {
  const [items, setItems] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "gallery"),
      orderBy("createdAt", "desc")
    );

    return onSnapshot(q, (snap) => {
      const data = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setItems(data);
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
    return (
      <div className="mt-16 text-center opacity-70">
        No creations yet
      </div>
    );
  }

  const staticItems = items.filter(
    (item) => item.mediaType === "image"
  );

  const dynamicItems = items.filter(
    (item) => item.mediaType === "video"
  );

  return (
    <>
      {/* STATIC CREATIONS */}
      {staticItems.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 bg-gradient-to-r from-brand to-blue-500 bg-clip-text text-transparent leading-tight">
            Static Creations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {staticItems.map((item) => (
              <MediaTile
                key={item.id}
                item={item}
                onClick={() => setSelected(item)}
              />
            ))}
          </div>
        </div>
      )}

      {/* DYNAMIC CREATIONS */}
      {dynamicItems.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 bg-gradient-to-r from-brand to-blue-500 bg-clip-text text-transparent leading-tight">
            Dynamic Creations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {dynamicItems.map((item) => (
              <MediaTile
                key={item.id}
                item={item}
                onClick={() => setSelected(item)}
              />
            ))}
          </div>
        </div>
      )}

      <ArtModal
        art={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
