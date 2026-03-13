import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { blogToServices, serviceNames } from "@/data/internal-links";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const postUrl = `https://osama-me.digital/blog/${post.slug}`;
  const author = {
    "@type": "Person",
    name: "Osama Tahir",
    url: "https://osama-me.digital/about",
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: postUrl,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    author,
    publisher: author,
  };

  return (
    <article className="min-h-screen bg-zinc-50 pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 -ml-2 inline-flex items-center text-zinc-500 transition-colors hover:text-zinc-900"
        >
          <ArrowLeft className="mr-2 size-4" />
          Back to Blog
        </Link>

        <header>
          <span className="text-sm font-medium uppercase tracking-wider text-amber-500">
            {post.category}
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-6 text-sm text-zinc-500">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {post.readTime} read
            </span>
          </div>
        </header>

        <div className="mt-12 aspect-video rounded-xl bg-zinc-100 flex items-center justify-center">
          <span className="text-6xl font-bold text-zinc-400">{post.title.charAt(0)}</span>
        </div>

        <div className="prose mt-12 max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-li:text-zinc-700 prose-strong:text-zinc-900 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-h2:text-2xl prose-h3:text-xl prose-h2:mt-10 prose-h3:mt-8">
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <>
              <p className="text-lg text-zinc-700">{post.excerpt}</p>
              <p className="mt-4 text-zinc-700">Full article coming soon.</p>
            </>
          )}
        </div>

        {"faqs" in post && Array.isArray((post as any).faqs) && (post as any).faqs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-zinc-900">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-3">
              {((post as any).faqs as { question: string; answer: string }[]).map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-zinc-200 bg-white px-5 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-sm font-medium text-zinc-900 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <svg
                      className="ml-4 size-4 shrink-0 text-zinc-500 transition-transform group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="pb-5 text-sm text-zinc-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-zinc-900">About the Author</h3>
          <p className="mt-2 text-zinc-700">
            Osama Tahir is a freelance web developer and digital marketing specialist
            based in Dubai. He helps small businesses and startups grow online with
            websites, SEO, and performance marketing.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-amber-400"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-lg border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:border-amber-500/30 hover:text-amber-600"
            >
              View Portfolio
            </Link>
          </div>
          {(blogToServices[post.slug] ?? []).length > 0 && (
            <div className="mt-6 border-t border-zinc-200 pt-4">
              <h4 className="text-sm font-medium text-zinc-900">Related Services</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {(blogToServices[post.slug] ?? []).map((serviceId) => (
                  <Link
                    key={serviceId}
                    href={`/services/${serviceId}`}
                    className="text-sm text-amber-400 hover:underline"
                  >
                    {serviceNames[serviceId] ?? serviceId}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-zinc-900">Related Posts</h3>
            <div className="mt-4 space-y-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-amber-500/20 shadow-sm"
                >
                  <h4 className="font-medium text-zinc-900">{p.title}</h4>
                  <p className="mt-1 text-sm text-zinc-600">{formatDate(p.date)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
