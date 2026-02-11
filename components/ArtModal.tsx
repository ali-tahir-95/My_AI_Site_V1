"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ArtModal({ art, onClose }: any) {
  if (!art) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/85 backdrop-blur-lg z-50 flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-[#111] max-w-[95vw] max-h-[90vh] rounded-xl overflow-hidden border border-white/10 flex"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 🖼 Image Section — auto-sized */}
          <div className="bg-[#0c0c0d] flex items-center justify-center p-4">
            <img
              src={art.imageUrl}
              alt={art.title || "Artwork"}
              className="max-h-[85vh] max-w-[70vw] object-contain"
            />
          </div>

          {/* 📝 Text Section */}
          <div className="w-[350px] max-w-[30vw] p-8 space-y-4 border-l border-white/10 overflow-y-auto">
            <h2 className="text-2xl font-bold">{art.title || "Untitled"}</h2>

            <p className="opacity-70 whitespace-pre-wrap text-sm leading-relaxed">
              {art.prompt}
            </p>

            <button
              onClick={onClose}
              className="mt-6 px-4 py-2 border border-brand rounded-lg hover:bg-brand transition w-full"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
