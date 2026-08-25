import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-700">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-800 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-center text-lg text-stone-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Back to home
          <ArrowRight size={16} />
        </Link>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50"
        >
          View my work
        </Link>
      </div>
    </div>
  );
}
