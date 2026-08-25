import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";

export function TrustStrip() {
  return (
    <section aria-label="Proof points" className="bg-surface-alt">
      <PageShell wide className="py-16 lg:py-20">
        <dl className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-12">
          {siteConfig.proofPoints.map((point) => (
            <div key={point.label}>
              <dt className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {point.value}
              </dt>
              <dd className="mt-2 text-sm font-medium text-foreground">{point.label}</dd>
              <p className="mt-1 text-sm text-muted-foreground">{point.detail}</p>
            </div>
          ))}
        </dl>
      </PageShell>
    </section>
  );
}
