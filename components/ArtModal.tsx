"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Spinner from "./Spinner";

export default function ArtModal({ art, onClose }: any) {
  const [loadingMedia, setLoadingMedia] = useState(true);

  if (!art) return null;

  const mediaUrl = art.mediaUrl || art.imageUrl;
  const isVideo = art.mediaType === "video";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/85 backdrop-blur-lg z-50 flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="
            bg-[#111]
            w-full
            max-w-6xl        /* Bigger for laptops */
            2xl:max-w-7xl    /* Even bigger on large screens */
            max-h-[92vh]
            rounded-xl
            overflow-hidden
            border border-white/10
            flex flex-col md:flex-row
          "
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* MEDIA SECTION */}
          <div className="bg-[#0c0c0d] flex items-center justify-center p-4 relative flex-1">
            {loadingMedia && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Spinner size={48} />
              </div>
            )}

            {isVideo ? (
              <video
                src={mediaUrl}
                controls
                autoPlay
                onLoadedData={() => setLoadingMedia(false)}
                className={`max-h-[65vh] md:max-h-[85vh] w-auto max-w-full rounded-lg transition-opacity duration-300 ${
                  loadingMedia ? "opacity-0" : "opacity-100"
                }`}
              />
            ) : (
              <img
                src={mediaUrl}
                onLoad={() => setLoadingMedia(false)}
                className={`max-h-[65vh] md:max-h-[85vh] w-auto max-w-full object-contain transition-opacity duration-300 ${
                  loadingMedia ? "opacity-0" : "opacity-100"
                }`}
              />
            )}
          </div>

          {/* TEXT / SIDE PANEL */}
          <div className="w-full md:w-[380px] 2xl:w-[420px] p-6 sm:p-8 space-y-4 border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto">
            <h2 className="text-xl sm:text-2xl font-bold">
              {art.title || "Untitled"}
            </h2>

            <p className="opacity-70 whitespace-pre-wrap text-sm leading-relaxed">
              {art.prompt}
            </p>

            {/* Fullscreen Button (Images Only) */}
            {!isVideo && (
              <a
                href={mediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-2 px-4 py-2 rounded-lg bg-brand text-white font-medium hover:opacity-90 transition"
              >
                View Fullscreen
              </a>
            )}

            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 border border-brand rounded-lg hover:bg-brand transition w-full"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
