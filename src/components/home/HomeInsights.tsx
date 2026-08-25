import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { insights } from "@/data/insights";

export function HomeInsights() {
  return (
    <section className="bg-surface-alt">
      <PageShell wide className="py-16 lg:py-20">
        <SectionHeading
          eyebrow="Insights"
          title="How I actually decide on Flutter, cost, and takeovers"
          subtitle="Short, specific pages for people hiring in Dubai — not a recycled marketing blog."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {insights.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/insights/${post.slug}`}
                className="group block rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground/15 hover:shadow-[0_12px_40px_rgba(17,24,39,0.06)]"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-primary">{post.category}</p>
                <h3 className="mt-2 font-semibold text-foreground group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/insights" className="mt-8 inline-block text-sm text-primary hover:text-primary-hover">
          All insights →
        </Link>
      </PageShell>
    </section>
  );
}
