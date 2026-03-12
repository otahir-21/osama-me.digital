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
    <section className="bg-zinc-950 py-24">
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
                className="group block rounded-xl border border-white/10 bg-zinc-900/50 p-6 transition-colors hover:border-amber-500/20"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-amber-400">
                  {post.category}
                </span>
                <h3 className="mt-2 font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center text-sm text-amber-400">
                  Read more <ArrowRight className="ml-1 size-4" />
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
            className={buttonVariants({ variant: "outline", size: "lg", className: "border-zinc-600 text-white hover:bg-white/5" })}
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
