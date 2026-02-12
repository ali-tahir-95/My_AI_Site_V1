"use client";

import { useFirebase } from "./FirebaseProvider";

export default function AuthButtons() {
  const { user, loading, signInWithGoogle, signOutUser } = useFirebase();

  if (loading) {
    return <div className="text-sm opacity-70">Loading...</div>;
  }

  return (
    <div className="flex items-center gap-3">
      {user ? (
        <>
          {/* Profile Image */}
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-9 h-9 rounded-full border border-white/20 object-cover"
            />
          )}

          {/* Name (hide on very small screens if needed later) */}
          <span className="text-sm opacity-80 hidden sm:inline">
            {user.displayName || user.email}
          </span>

          {/* Sign Out */}
          <button
            onClick={signOutUser}
            className="px-3 py-1.5 rounded-lg border border-brand text-brand hover:bg-brand hover:text-white transition text-sm"
          >
            Sign out
          </button>
        </>
      ) : (
        <button
          onClick={signInWithGoogle}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand text-white hover:opacity-90 transition text-sm font-medium shadow-md"
        >
          {/* Google Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="18"
            height="18"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.8 32.7 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.3 6.5 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10.4 0 19.2-7.6 19.2-20 0-1.3-.1-2.3-.3-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.7 16 18.9 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.3 6.5 29.5 4 24 4 16 4 9.2 8.3 6.3 14.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.3 0 10.1-2 13.8-5.3l-6.4-5.3C29.3 35.4 26.8 36 24 36c-5.4 0-9.8-3.3-11.3-8l-6.6 5.1C9.1 39.7 16 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1.2 3.2-3.7 5.4-6.9 6.7l6.4 5.3C39.6 36.4 43.6 30.9 43.6 20.5z"
            />
          </svg>

          Sign in with Google
        </button>
      )}
    </div>
  );
}
