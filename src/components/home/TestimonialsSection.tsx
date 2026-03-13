"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonialsData } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Clients Say"
          subtitle="Real feedback from businesses I've helped grow."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonialsData.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-amber-500/30" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-sm text-zinc-700">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4">
                <p className="font-medium text-zinc-900">{t.author}</p>
                <p className="text-xs text-zinc-500">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/testimonials"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100",
            })}
          >
            Read More Testimonials
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
