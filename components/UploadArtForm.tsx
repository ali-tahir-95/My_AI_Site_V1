"use client";

import { useState } from "react";
import { db, storage } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useFirebase } from "@/components/FirebaseProvider";
import { v4 as uuid } from "uuid";

export default function UploadArtForm() {
  const { user } = useFirebase();
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  async function handleUpload() {
    if (!file || !user) return;

    setLoading(true);
    setProgress(0);

    const fileType = file.type.startsWith("video") ? "video" : "image";
    const fileRef = ref(storage, `gallery/${uuid()}-${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.round(percent));
      },
      (error) => {
        console.error(error);
        setLoading(false);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);

        await addDoc(collection(db, "gallery"), {
          title,
          prompt,
          mediaUrl: url,
          mediaType: fileType,
          userId: user.uid,
          createdAt: serverTimestamp(),
        });

        setFile(null);
        setTitle("");
        setPrompt("");
        setLoading(false);
        setProgress(0);
      }
    );
  }

  return (
    <div className="p-6 border border-white/10 rounded-xl bg-black/50 space-y-6">

      {/* Heading Section */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-brand to-blue-500 bg-clip-text text-transparent leading-tight">
          Present Your Creation
        </h2>

        <p className="text-sm opacity-70 mt-2">
          Share your refined work with the Graphyx community and become part of a curated digital collection.
        </p>
      </div>

      {/* Title Input */}
      <input
        type="text"
        placeholder="Art title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-lg p-3 bg-black/40 border border-brand/30 focus:border-brand outline-none text-white placeholder-white/40 transition"
      />

      {/* Prompt */}
      <textarea
        placeholder="Prompt used..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full rounded-lg p-3 bg-black/40 border border-brand/30 focus:border-brand outline-none text-white placeholder-white/40 transition"
      />

      {/* File Input */}
      <label className="block">
        <span className="text-sm opacity-70 mb-2 block">
          Upload Image or Video
        </span>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={({ target }) => setFile(target.files?.[0] || null)}
          className="block w-full text-sm text-white/70 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-brand file:text-white hover:file:opacity-90"
        />
      </label>

      {file && (
        <p className="text-xs text-white/60">
          Selected: {file.name} ({file.type})
        </p>
      )}

      {/* Progress Bar */}
      {loading && (
        <div className="space-y-1">
          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-xs text-right opacity-70">
            {progress}%
          </div>
        </div>
      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="px-4 py-3 w-full rounded-lg bg-brand text-white font-semibold hover:opacity-90 transition disabled:opacity-40"
      >
        {loading ? "Uploading..." : "Upload Artwork"}
      </button>
    </div>
  );
}
