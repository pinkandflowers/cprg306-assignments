export default function Assignments() {
  return (
    // Full-screen container with soft pastel background
    <div className="flex min-h-screen items-center justify-center bg-rose-50 font-sans dark:from-black dark:via-black dark:to-black">
      
      {/* Main content card */}
      <main className="flex w-full max-w-3xl flex-col items-start gap-10 rounded-2xl bg-white px-16 py-24 shadow-lg border border-rose-200 dark:bg-black dark:border-zinc-800">
        
        {/* Page title */}
        <h1 className="max-w-md text-4xl font-extrabold leading-tight tracking-tight text-rose-600 dark:text-rose-300">
          CPRG 306  
          <span className="block text-2xl font-semibold text-rose-400 dark:text-rose-200">
            Web Development 2
          </span>
        </h1>

        {/* Assignment links */}
        <div className="flex flex-col gap-4">
          
          {/* Week 2 */}
          <a
            href="/week-2"
            className="
              text-2xl font-semibold text-rose-500
              hover:text-rose-700 transition
              dark:text-rose-300
            "
          >
            📘 Week 2
          </a>

          {/* Week 3 */}
          <a
            href="/week-3"
            className="
              text-2xl font-semibold text-rose-500
              hover:text-rose-700 transition
              dark:text-rose-300
            "
          >
            🛒 Week 3
          </a>

          {/* Week 4 */}
          <a
            href="/week-4"
            className="
              text-2xl font-semibold text-rose-500
              hover:text-rose-700 transition
              dark:text-rose-300
            "
          >
            🛍️ Week 4
          </a>

                    {/* Week 5 */}
                    <a
            href="/week-5"
            className="
              text-2xl font-semibold text-rose-500
              hover:text-rose-700 transition
              dark:text-rose-300
            "
          >
            📒 Week 5
          </a>

        </div>
      </main>
    </div>
  );
}