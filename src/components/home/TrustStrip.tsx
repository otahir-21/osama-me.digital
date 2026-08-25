import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";

export function TrustStrip() {
  return (
    <section aria-label="Proof points" className="border-y border-border bg-surface-alt">
      <PageShell wide className="py-10 lg:py-12">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-border lg:gap-0">
          {siteConfig.proofPoints.map((point) => (
            <div key={point.label} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
              <dt className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
                {point.value}
              </dt>
              <dd className="mt-2 text-sm font-semibold tracking-tight text-foreground">
                {point.label}
              </dd>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{point.detail}</p>
            </div>
          ))}
        </dl>
      </PageShell>
    </section>
  );
}
