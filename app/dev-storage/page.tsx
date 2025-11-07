"use client";


import { useState } from "react";
import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";


export default function DevStorage() {
const [url, setUrl] = useState<string | null>(null);


const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
const file = e.target.files?.[0];
if (!file) return;
const r = ref(storage, `uploads/${uuid()}-${file.name}`);
await uploadBytes(r, file);
const u = await getDownloadURL(r);
setUrl(u);
};


return (
<div className="max-w-2xl mx-auto p-6 space-y-6">
<h1 className="text-2xl font-semibold">Storage Dev</h1>
<input type="file" onChange={onChange} />
{url && (
<div className="space-y-2">
<div className="text-sm opacity-70">Uploaded URL:</div>
<a href={url} className="text-brand underline" target="_blank">{url}</a>
{url.match(/\.(png|jpe?g|gif|webp)$/i) && (
<img src={url} alt="uploaded" className="max-w-full rounded-lg border border-white/10" />
)}
</div>
)}
</div>
);
}