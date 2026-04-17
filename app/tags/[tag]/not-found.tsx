import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center pt-20 px-4">
      <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-4">
        Tag Not Found
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-center max-w-md">
        No posts exist for this tag, or it may have been removed.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors"
      >
        Return to Home
      </Link>
    </main>
  );
}
