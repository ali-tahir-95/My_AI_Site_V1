"use client";

import { useState } from "react";
import { db, storage } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useFirebase } from "@/components/FirebaseProvider";
import { v4 as uuid } from "uuid";

export default function UploadArtForm() {
  const { user } = useFirebase();
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    if (!file || !user) return;

    setLoading(true);

    // upload file
    const fileRef = ref(storage, `gallery/${uuid()}-${file.name}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);

    // save metadata
    await addDoc(collection(db, "gallery"), {
      title,
      prompt,
      imageUrl: url,
      userId: user.uid,
      createdAt: serverTimestamp(),
    });

    setFile(null);
    setTitle("");
    setPrompt("");
    setLoading(false);
  }

  return (
    <div className="p-6 border border-white/10 rounded-xl bg-white/5 space-y-4">
      <input
        type="text"
        placeholder="Art title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded p-2 text-black"
      />

      <textarea
        placeholder="Prompt used..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full rounded p-2 text-black"
      />

      <input
        type="file"
        onChange={({ target }) => setFile(target.files?.[0] || null)}
        className="w-full text-sm"
      />

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="px-4 py-2 w-full rounded-lg border border-brand hover:bg-brand transition"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}