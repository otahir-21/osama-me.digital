import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectCTA } from "@/components/cta/ProjectCTA";
import { PageShell } from "@/components/layout/PageShell";
import { insights, type InsightPost } from "@/data/insights";
import {
  getArticleSchema,
  getBreadcrumbSchema,
  getGraphSchema,
  getWebPageSchema,
} from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";

export function InsightArticle({ post }: { post: InsightPost }) {
  const url = absoluteUrl(`/insights/${post.slug}`);
  const related = insights.filter((item) => post.relatedSlugs.includes(item.slug));

  const schema = getGraphSchema([
    getWebPageSchema({
      name: post.title,
      description: post.metaDescription,
      url,
      dateModified: post.updatedAt,
    }),
    getArticleSchema({
      headline: post.title,
      description: post.metaDescription,
      url,
      datePublished: post.date,
      dateModified: post.updatedAt,
      keywords: post.keywords,
    }),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Insights", url: "/insights" },
      { name: post.title, url: `/insights/${post.slug}` },
    ]),
  ]);

  return (
    <article>
      <JsonLd data={schema} />
      <PageShell>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Insights", href: "/insights" },
            { name: post.category },
          ]}
        />
        <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-primary">
          {post.category} · {post.readTime} · Updated {post.updatedAt}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{post.intro}</p>
      </PageShell>

      {post.sections.map((section) => (
        <PageShell key={section.heading} className="pt-0">
          <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{section.body}</p>
          {section.bullets && (
            <ul className="mt-6 space-y-2">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {section.table && (
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {section.table.headers.map((header) => (
                      <th key={header} className="py-3 pr-4 font-semibold text-foreground">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row) => (
                    <tr key={row.join("-")} className="border-b border-border align-top">
                      {row.map((cell) => (
                        <td key={cell} className="py-3 pr-4 text-muted-foreground">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </PageShell>
      ))}

      <PageShell tone="alt" className="pt-0">
        <h2 className="text-2xl font-semibold text-foreground">Takeaways</h2>
        <ul className="mt-6 space-y-3">
          {post.takeaways.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </PageShell>

      <PageShell className="pt-0">
        <h2 className="text-2xl font-semibold text-foreground">Related services</h2>
        <ul className="mt-6 space-y-3">
          {post.relatedServiceHrefs.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-primary hover:text-primary-hover">
                {item.label} →
              </Link>
            </li>
          ))}
        </ul>
      </PageShell>

      {related.length > 0 && (
        <PageShell tone="alt" className="pt-0">
          <h2 className="text-2xl font-semibold text-foreground">Related insights</h2>
          <ul className="mt-6 space-y-5">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/insights/${item.slug}`} className="group block">
                  <h3 className="font-semibold text-foreground group-hover:text-primary">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </PageShell>
      )}

      <PageShell className="pt-0">
        <ProjectCTA />
      </PageShell>
    </article>
  );
}
