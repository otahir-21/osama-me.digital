import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";

export function TrustStrip() {
  return (
    <section className="border-b border-zinc-800/80" aria-label="Proof points">
      <PageShell wide className="py-12 lg:py-14">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {siteConfig.proofPoints.map((point) => (
            <div key={point.label}>
              <dt className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                {point.value}
              </dt>
              <dd className="mt-2 text-sm font-medium text-zinc-300">{point.label}</dd>
              <p className="mt-1 text-sm text-zinc-500">{point.detail}</p>
            </div>
          ))}
        </dl>
      </PageShell>
    </section>
  );
}
