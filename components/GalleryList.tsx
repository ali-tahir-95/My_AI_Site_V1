"use client";

import { useEffect, useState, useRef } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ArtModal from "./ArtModal";
import Spinner from "./Spinner";

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

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {items.map((item) => (
          <MediaTile key={item.id} item={item} onClick={() => setSelected(item)} />
        ))}
      </div>

      <ArtModal art={selected} onClose={() => setSelected(null)} />
    </>
  );
}

function MediaTile({ item, onClick }: any) {
  const mediaUrl = item.mediaUrl || item.imageUrl;
  const isVideo = item.mediaType === "video";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [resolution, setResolution] = useState<string | null>(null);

  const handleHover = () => videoRef.current?.play();
  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="rounded-xl overflow-hidden border border-white/10 hover:border-brand transition cursor-pointer group transform hover:scale-[1.03] duration-300"
    >
      <div className="relative">
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              src={mediaUrl}
              muted
              playsInline
              controls={false}
              preload="metadata"
              className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover pointer-events-none"
              onLoadedMetadata={(e) => {
                const v = e.currentTarget;
                try { v.currentTime = 0.2; } catch {}
                const mins = Math.floor(v.duration / 60);
                const secs = Math.floor(v.duration % 60).toString().padStart(2, "0");
                setDuration(`${mins}:${secs}`);
                setResolution(`${v.videoWidth}×${v.videoHeight}`);
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
              <div className="w-8 h-8 rounded-full bg-purple-500/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                <div
                  className="ml-1"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "6px solid transparent",
                    borderBottom: "6px solid transparent",
                    borderLeft: "10px solid white",
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <img
            src={mediaUrl}
            loading="lazy"
            className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover"
            onLoad={(e) => {
              const img = e.currentTarget;
              setResolution(`${img.naturalWidth}×${img.naturalHeight}`);
            }}
          />
        )}
      </div>

      <div className="p-3 text-sm space-y-2">
        <div className="font-semibold opacity-80">{item.title}</div>
        <div className="opacity-50 line-clamp-1">{item.prompt}</div>
        <div className="flex justify-between text-xs opacity-60">
          {resolution && <span>{resolution}</span>}
          {duration && <span>{duration}</span>}
        </div>
      </div>
    </div>
  );
}
