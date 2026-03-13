"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog";

export function BlogTeaser() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Latest Insights"
          subtitle="Digital marketing tips and free software guides for UAE businesses."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {featured.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-amber-500/20 shadow-sm"
                aria-label={`Read more: ${post.title}`}
              >
                <span className="text-xs font-medium uppercase tracking-wider text-amber-500">
                  {post.category}
                </span>
                <h3 className="mt-2 font-semibold text-zinc-900 group-hover:text-amber-500 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{post.excerpt}</p>
                <span className="mt-3 inline-flex min-h-[44px] items-center text-sm text-amber-400">
                  <span className="line-clamp-1">Read article: {post.title}</span>
                  <ArrowRight className="ml-1 size-4 shrink-0" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100",
            })}
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
