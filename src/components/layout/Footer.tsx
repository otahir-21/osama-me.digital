"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 px-6 py-8 lg:px-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            {siteConfig.location}
          </span>
          <Link href="/privacy-policy" className="hover:text-zinc-400">
            Privacy
          </Link>
          <Link href="/terms-of-service" className="hover:text-zinc-400">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
