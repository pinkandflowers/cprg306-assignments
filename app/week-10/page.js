"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="flex flex-col items-center gap-6 mt-10">
      <h1 className="text-3xl font-bold">Shopping List App</h1>

      {!user && (
        <button
          onClick={gitHubSignIn}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Login with GitHub
        </button>
      )}

      {user && (
        <div className="flex flex-col items-center gap-4">
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <Link
            href="/week-10/shopping-list"
            className="text-blue-600 underline"
          >
            Go to Shopping List
          </Link>

          <button
            onClick={firebaseSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </main>
  );
}