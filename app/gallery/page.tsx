"use client";

import UploadArtForm from "@/components/UploadArtForm";
import GalleryList from "@/components/GalleryList";
import { useFirebase } from "@/components/FirebaseProvider";

export default function GalleryPage() {
  const { user, loading } = useFirebase();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">AI Art Gallery</h1>
        <p className="opacity-70 text-sm sm:text-base">
          Explore creations from the community
        </p>
      </div>

      <div className="mb-12">
        {loading ? (
          <div className="opacity-60">Checking login...</div>
        ) : user ? (
          <UploadArtForm />
        ) : (
          <div className="p-6 sm:p-8 border border-white/10 rounded-xl bg-black/50 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
               Showcase your AI creations
            </h2>
            <p className="opacity-70 text-sm sm:text-base">
              Sign in from the top menu to upload your artwork and share it with the world.
            </p>
          </div>
        )}
      </div>

      <GalleryList />
    </section>
  );
}
