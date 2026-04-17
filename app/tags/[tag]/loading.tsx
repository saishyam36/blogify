export default function Loading() {
  return (
    <main className="flex flex-col flex-1 pt-24 px-4 w-full max-w-3xl mx-auto">
      <div className="flex flex-col items-center gap-4 mb-12">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-zinc-200 dark:border-zinc-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
          <div className="absolute inset-4 rounded-full bg-indigo-500/20 animate-pulse"></div>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 font-medium animate-pulse">
          Loading Posts...
        </p>
      </div>

      <div className="w-full animate-pulse space-y-4">
        <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-md w-1/3 mb-2"></div>
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-16 mb-8"></div>

        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-700 space-y-3"
          >
            <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4"></div>
            <div className="h-4 bg-zinc-100 dark:bg-zinc-800/80 rounded w-1/4"></div>
            <div className="flex gap-2">
              <div className="h-5 w-16 bg-zinc-100 dark:bg-zinc-800/80 rounded-md"></div>
              <div className="h-5 w-16 bg-zinc-100 dark:bg-zinc-800/80 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
