"use client";

import { useRef, useState } from "react";

interface MediaTileProps {
  item: any;
  onClick: () => void;
}

export default function MediaTile({ item, onClick }: MediaTileProps) {
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

        {/* Media */}
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              src={mediaUrl}
              muted
              playsInline
              controls={false}
              preload="metadata"
              className="w-full h-[260px] md:h-[290px] object-cover pointer-events-none"
              onLoadedMetadata={(e) => {
                const v = e.currentTarget;
                try { v.currentTime = 0.2; } catch {}
                const mins = Math.floor(v.duration / 60);
                const secs = Math.floor(v.duration % 60)
                  .toString()
                  .padStart(2, "0");
                setDuration(`${mins}:${secs}`);
                setResolution(`${v.videoWidth}×${v.videoHeight}`);
              }}
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
              <div className="w-10 h-10 rounded-full bg-purple-500/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                <div
                  className="ml-1"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "7px solid transparent",
                    borderBottom: "7px solid transparent",
                    borderLeft: "12px solid white",
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <img
            src={mediaUrl}
            loading="lazy"
            className="w-full h-[260px] md:h-[290px] object-cover"
            onLoad={(e) => {
              const img = e.currentTarget;
              setResolution(`${img.naturalWidth}×${img.naturalHeight}`);
            }}
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 pointer-events-none" />

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-sm space-y-1">
          <div className="font-semibold text-white">
            {item.title || "Untitled"}
          </div>
          <div className="text-white/70 line-clamp-1">
            {item.prompt}
          </div>
          <div className="flex justify-between text-xs text-white/60">
            {resolution && <span>{resolution}</span>}
            {duration && <span>{duration}</span>}
          </div>
        </div>

      </div>
    </div>
  );
}
