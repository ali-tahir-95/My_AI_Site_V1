import UploadArtForm from "@/components/UploadArtForm";
import GalleryList from "@/components/GalleryList";
import { useFirebase } from "@/components/FirebaseProvider";

export default function GalleryPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32">
      <h1 className="text-4xl font-bold">AI Art Gallery</h1>
      <p className="opacity-70">Explore images created by the community</p>

      <div className="mt-10">
        <UploadArtForm />
      </div>

      <GalleryList />
    </section>
  );
}