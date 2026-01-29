export default function assignments() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          CPRG 306: Web Development 2
        </h1>
        {/* Link to Week 2 */}
        <a
          href="/week-2"
          className="text-pink-400 underline hover:text-pink-800 dark:text-pink-300"
        >
          Week 2
        </a>
        {/* Link to Week 3 */}
        <a
          href="/week-3"
          className="text-pink-400 underline hover:text-pink-800 dark:text-pink-300"
        >
          Week 3
        </a>
      </main>
    </div>
  );
}
