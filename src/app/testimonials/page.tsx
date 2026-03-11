"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Clients Say"
          subtitle="Real feedback from businesses I've helped grow."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {testimonialsData.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8"
            >
              <Quote className="h-10 w-10 text-amber-500/30" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-lg text-zinc-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-white">{t.author}</p>
                <p className="text-sm text-zinc-500">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-dashed border-white/20 bg-zinc-900/30 p-12 text-center">
          <h3 className="text-xl font-semibold text-white">Video Testimonials</h3>
          <p className="mt-2 text-zinc-400">
            Video testimonials coming soon. Contact me if you&apos;d like to share your experience.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-900 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to Be Next?</h2>
          <p className="mt-4 text-zinc-400">
            Join the list of satisfied clients. Let&apos;s discuss your project.
          </p>
          <Link
            href="/contact"
            className={buttonVariants({
              size: "lg",
              className: "mt-8 inline-flex bg-amber-500 text-zinc-950 hover:bg-amber-400",
            })}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
