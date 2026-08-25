"use client";

import { siteConfig } from "@/data/site-config";

export function AnimatedStats() {
  return (
    <section className="border-b border-zinc-800/80 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {siteConfig.proofPoints.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-semibold text-zinc-50">{stat.value}</p>
            <p className="mt-1 text-sm text-zinc-500">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
