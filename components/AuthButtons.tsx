"use client";


import { useFirebase } from "./FirebaseProvider";


export default function AuthButtons() {
const { user, loading, signInWithGoogle, signOutUser } = useFirebase();


if (loading) return <div className="opacity-70">Loading...</div>;


return (
<div className="flex items-center gap-3">
{user ? (
<>
<span className="text-sm opacity-80">Hi, {user.displayName || user.email}</span>
<button
onClick={signOutUser}
className="px-3 py-1.5 rounded-lg border border-white/15 hover:border-white/30 transition text-sm"
>
Sign out
</button>
</>
) : (
<button
onClick={signInWithGoogle}
className="px-3 py-1.5 rounded-lg border border-white/15 hover:border-white/30 transition text-sm"
>
Sign in with Google
</button>
)}
</div>
);
}