"use client";


import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";
import { useFirebase } from "@/components/FirebaseProvider";


export default function DevFirestore() {
const { user } = useFirebase();
const [items, setItems] = useState<any[]>([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
const q = query(collection(db, "testItems"), orderBy("createdAt", "desc"));
const unsub = onSnapshot(q, (snap) => {
setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })) as any[]);
setLoading(false);
});
return () => unsub();
}, []);


const addItem = async () => {
await addDoc(collection(db, "testItems"), {
uid: user?.uid || null,
createdAt: serverTimestamp(),
text: `Hello from ${user?.displayName || "anon"}`,
});
};


return (
<div className="max-w-2xl mx-auto p-6 space-y-6">
<h1 className="text-2xl font-semibold">Firestore Dev</h1>
<button onClick={addItem} className="px-4 py-2 rounded-lg border border-white/15 hover:border-white/30 transition">Add item</button>
{loading ? (
<div>Loading...</div>
) : (
<ul className="space-y-2">
{items.map((it) => (
<li key={it.id} className="p-3 rounded-lg bg-white/5 border border-white/10">
<div className="text-sm opacity-70">{it.id}</div>
<div>{it.text}</div>
</li>
))}
</ul>
)}
</div>
);
}