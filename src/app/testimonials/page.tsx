"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Osama Tahir Digital Marketing",
            image: "https://osama-me.digital/og-image.png",
            url: "https://osama-me.digital",
            telephone: "+971507276823",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              ratingCount: "4",
              reviewCount: "4",
              bestRating: "5",
              worstRating: "5",
            },
            review: testimonialsData.map((t) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: t.author,
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: t.rating.toString(),
                bestRating: "5",
                worstRating: "1",
              },
              reviewBody: t.quote,
              publisher: {
                "@type": "Organization",
                name: t.company,
              },
            })),
          }),
        }}
      />
      <h1 className="sr-only">Client Testimonials — Web Developer & Marketing Specialist Dubai</h1>
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
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
            >
              <Quote className="h-10 w-10 text-amber-500/30" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-lg text-zinc-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-zinc-900">{t.author}</p>
                <p className="text-sm text-zinc-500">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-12 text-center">
          <h2 className="text-xl font-semibold text-zinc-900">Video Testimonials</h2>
          <p className="mt-2 text-zinc-600">
            Video testimonials coming soon. Contact me if you&apos;d like to share your experience.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">Ready to Be Next?</h2>
          <p className="mt-4 text-zinc-600">
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
