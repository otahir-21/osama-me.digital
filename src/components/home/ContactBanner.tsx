"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";

export function ContactBanner() {
  return (
    <section className="py-16 lg:py-20">
      <PageShell>
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-zinc-100 sm:text-3xl">
            Let&apos;s work together
          </h2>
          <p className="mt-3 max-w-md text-zinc-500">
            {siteConfig.availability}. Reach out for a role or project — I typically respond
            within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
            >
              Send a message
              <ArrowRight size={16} />
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center rounded-lg border border-zinc-700 px-5 py-2.5 text-sm text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
