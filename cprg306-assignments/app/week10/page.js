"use client";

import { useUserAuth } from "../context/AuthContext";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign-out failed:", error);
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0f1e] flex items-center justify-center px-4">
      <div className="bg-[#111827] rounded-2xl shadow-2xl p-12 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Shopping List</h1>
        <p className="text-slate-400 text-sm mb-8">Week 9</p>

        {user ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-slate-300 text-sm">
              Welcome, <span className="text-white font-semibold">{user.displayName}</span>
              <br />
              <span className="text-slate-400 text-xs">{user.email}</span>
            </p>

            <Link
              href="/week9/ShoppingList"
              className="w-full max-w-xs bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm"
            >
              Go to Shopping List →
            </Link>

            <button
              onClick={handleSignOut}
              className="w-full max-w-xs bg-[#1f2937] hover:bg-[#374151] text-slate-300 font-semibold py-2.5 px-6 rounded-lg border border-slate-600 transition-colors text-sm"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-slate-400 text-sm">Sign in with GitHub to get started.</p>
            <button
              onClick={handleSignIn}
              className="w-full max-w-xs flex items-center justify-center gap-2 bg-[#24292e] hover:bg-[#3a3f45] text-white font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Sign in with GitHub
            </button>
          </div>
        )}
      </div>
    </main>
  );
}