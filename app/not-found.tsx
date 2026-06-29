export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020617] px-6 text-white">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          ERROR 404
        </p>

        <h1 className="mt-6 text-6xl font-bold">
          Page not found
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
          Return to the homepage to continue exploring Mexa Automation.
        </p>

        <a
          href="/"
          className="btn-interactive mt-10 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white"
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}