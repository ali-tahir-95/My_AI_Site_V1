"use client";

import UploadArtForm from "@/components/UploadArtForm";
import { useFirebase } from "@/components/FirebaseProvider";
import CollectionList from "@/components/CollectionList";

export default function CollectionPage() {
  const { user, loading } = useFirebase();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-brand to-blue-500 bg-clip-text text-transparent leading-tight">
          The Finest Collection of Exquisitely Refined Art
        </h1>

        <p className="opacity-70 text-sm sm:text-base">
          Discover distinctive works shaped by clarity, mastery, and artistic depth
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
              Join Now & Showcase Your Creations
            </h2>
            <p className="opacity-70 text-sm sm:text-base">
              Join our growing community of creators. Sign in above to contribute your refined works and become part of the Graphyx collection
            </p>
          </div>
        )}
      </div>

      <CollectionList />
    </section>
  );
}
