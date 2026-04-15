export default function Loading() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center pt-32 px-4 w-full max-w-3xl mx-auto">
      <div className="flex flex-col items-center gap-4">
        {/* Interactive Glowing Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-zinc-200 dark:border-zinc-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
          {/* Inner pulse */}
          <div className="absolute inset-4 rounded-full bg-indigo-500/20 animate-pulse"></div>
        </div>
        
        <p className="text-zinc-500 dark:text-zinc-400 font-medium animate-pulse">
          Loading Post...
        </p>
      </div>

      {/* Skeleton Loading Blocks to mimic content structure while waiting */}
      <div className="w-full mt-16 animate-pulse space-y-6">
        <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded-md w-3/4"></div>
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-1/4 mb-10"></div>
        
        <div className="space-y-3">
          <div className="h-4 bg-zinc-100 dark:bg-zinc-800/80 rounded w-full"></div>
          <div className="h-4 bg-zinc-100 dark:bg-zinc-800/80 rounded w-full"></div>
          <div className="h-4 bg-zinc-100 dark:bg-zinc-800/80 rounded w-5/6"></div>
        </div>
      </div>
    </main>
  );
}
