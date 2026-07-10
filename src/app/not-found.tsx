import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24">
      <p className="font-mono text-sm uppercase tracking-widest text-emerald-400">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-center text-lg text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:scale-[1.03] hover:bg-emerald-400 active:scale-95"
        >
          Back to home
          <ArrowRight size={16} />
        </Link>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:scale-[1.03] hover:border-zinc-600 hover:bg-zinc-900 active:scale-95"
        >
          View my work
        </Link>
      </div>
    </div>
  );
}
