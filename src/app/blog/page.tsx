"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Insights & Updates"
          subtitle="Articles on web development, SEO, and digital marketing for growing businesses."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 transition-colors hover:border-amber-500/20"
              >
                <div className="aspect-video bg-zinc-800 flex items-center justify-center">
                  <span className="text-4xl font-bold text-zinc-600 group-hover:text-amber-500/50 transition-colors">
                    {post.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-amber-400">
                    {post.category}
                  </span>
                  <h2 className="mt-2 text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime} read
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
