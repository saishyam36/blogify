"use client";

import Link from "next/link";
import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function PostError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="px-4 pt-24 pb-12 w-full max-w-3xl mx-auto flex-1">
      <Link
        href="/"
        className="inline-block mb-8 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors"
      >
        &larr; Back to Home
      </Link>

      <div className="flex flex-col items-start gap-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
          Something went wrong
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-base">
          This post could not be loaded. It may have been moved or an unexpected
          error occurred.
        </p>

        {error.digest && (
          <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
            Error ID: {error.digest}
          </p>
        )}

        <button
          onClick={reset}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
