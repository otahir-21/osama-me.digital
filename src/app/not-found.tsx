import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 pt-24 pb-16">
      <p className="text-sm font-medium uppercase tracking-wider text-amber-500">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-center text-lg text-zinc-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let me help you find what you need.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className={buttonVariants({
            size: "lg",
            className: "bg-amber-500 text-zinc-950 hover:bg-amber-400",
          })}
        >
          Back to Home
          <ArrowRight className="ml-2 size-4" />
        </Link>
        <Link
          href="/contact"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "border-zinc-300 !bg-white !text-zinc-800 hover:!bg-zinc-100",
          })}
        >
          Contact Me
        </Link>
      </div>

      <div className="mt-16 w-full max-w-lg">
        <h2 className="text-center text-sm font-medium uppercase tracking-wider text-zinc-500">
          Popular Services
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link
            href="/services/web-development-dubai"
            className="rounded-xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-900 transition-colors hover:border-amber-500/30 hover:text-amber-500"
          >
            Web Development Dubai
          </Link>
          <Link
            href="/services/seo-services-dubai"
            className="rounded-xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-900 transition-colors hover:border-amber-500/30 hover:text-amber-500"
          >
            SEO Services Dubai
          </Link>
          <Link
            href="/services/google-ads-management-dubai"
            className="rounded-xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-900 transition-colors hover:border-amber-500/30 hover:text-amber-500"
          >
            Google Ads Management
          </Link>
          <Link
            href="/services/shopify-development-dubai"
            className="rounded-xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-900 transition-colors hover:border-amber-500/30 hover:text-amber-500"
          >
            Shopify Development Dubai
          </Link>
        </div>
      </div>
    </div>
  );
}
