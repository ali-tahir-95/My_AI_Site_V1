"use client";

import UploadArtForm from "@/components/UploadArtForm";
import GalleryList from "@/components/GalleryList";
import { useFirebase } from "@/components/FirebaseProvider";

export default function GalleryPage() {
  const { user, loading } = useFirebase();

  return (
    <section className="max-w-7xl mx-auto px-6 pt-32">
      <h1 className="text-4xl font-bold">AI Art Gallery</h1>
      <p className="opacity-70">Explore creations from the community</p>

      <div className="mt-10">
        {loading ? (
          <div className="opacity-60">Checking login...</div>
        ) : user ? (
          <UploadArtForm />
        ) : (
          <div className="p-8 border border-white/10 rounded-xl bg-white/5 text-center">
            <h2 className="text-2xl font-semibold mb-2">
              🚀 Showcase your AI creations
            </h2>
            <p className="opacity-70">
              Sign in from the top menu to upload your artwork and share it with the world.
            </p>
          </div>
        )}
      </div>

      <GalleryList />
    </section>
  );
}
