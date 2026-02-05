export default function StudentInfo() {
  return (
    <div className = "max rounded-xl bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold text-rose-500 mb-4">
        Raina Moody 💕</h2>
      <p>
          <a
            href="https://github.com/pinkandflowers/cprg306-assignments"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-400 underline underline-offset-4 hover:text-rose-600 dark:text-rose-300"
          >
            GitHub Repository for CPRG 306
          </a>
      </p>
    </div>
  );
}