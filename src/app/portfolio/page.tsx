"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { serviceNames } from "@/data/internal-links";

type Filter = "all" | "mobile" | "web";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredProjects = useMemo(
    () =>
      filter === "all"
        ? portfolioData
        : portfolioData.filter((project: any) => project.kind === filter),
    [filter]
  );

  return (
    <div className="min-h-screen bg-zinc-50 pt-24">
      <h1 className="sr-only">Portfolio & Case Studies — Web & App Development Dubai</h1>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Case Studies"
          subtitle="Selected mobile apps and web platforms with measurable results—from high-scale apps to backend systems."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            { id: "all", label: "All projects", value: "all" as Filter },
            {
              id: "mobile",
              label: "Mobile applications",
              value: "mobile" as Filter,
            },
            {
              id: "web",
              label: "Web & backend",
              value: "web" as Filter,
            },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === item.value
                  ? "border-amber-500 bg-amber-500/10 text-amber-600"
                  : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {filteredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-white p-8 lg:p-12 shadow-sm"
            >
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <span className="text-sm font-medium uppercase tracking-wider text-amber-500">
                    {project.category}
                  </span>
                  <h2 className="mt-2 text-3xl font-bold text-zinc-900">{project.title}</h2>
                  <p className="mt-2 text-zinc-600">{project.client}</p>

                  <div className="mt-8 space-y-6">
                    <div>
                      <h3 className="font-semibold text-zinc-900">The Challenge</h3>
                      <p className="mt-1 text-zinc-600">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">The Solution</h3>
                      <p className="mt-1 text-zinc-600">{project.solution}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="aspect-video overflow-hidden rounded-xl bg-zinc-100 relative">
                    <Image
                      src={project.image ?? "/og-image.png"}
                      alt={`${project.title} — ${project.category} case study by Osama Tahir, Dubai`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="mt-8">
                    <h3 className="font-semibold text-zinc-900">Results</h3>
                    <ul className="mt-2 space-y-1">
                  {project.results.map((r) => (
                        <li key={r} className="text-amber-400">• {r}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-semibold text-zinc-900">Tech Stack</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-semibold text-zinc-900">Related Services</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {Array.isArray((project as any).services) &&
                        ((project as any).services as string[]).map((serviceId) => (
                          <Link
                            key={serviceId}
                            href={`/services#${serviceId}`}
                            className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:border-amber-500/30 hover:text-amber-600"
                          >
                            {serviceNames[serviceId] ?? serviceId}
                          </Link>
                        ))}
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className={buttonVariants({
                        size: "lg",
                        className:
                          "inline-flex bg-amber-500 text-zinc-950 hover:bg-amber-400",
                      })}
                    >
                      View full case study
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className={buttonVariants({
                        variant: "outline",
                        size: "lg",
                        className:
                          "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100",
                      })}
                    >
                      Discuss a similar project
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">Have a Project in Mind?</h2>
          <p className="mt-4 text-zinc-600">
            Let&apos;s discuss how I can help you achieve similar results—whether you need a
            high-converting website, ongoing marketing, or a mobile app taken all the way to
            Apple App Store submission and approval.
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

          <div className="mt-16 grid gap-8 border-t border-zinc-200 pt-16 sm:grid-cols-2">
            <Link
              href="/services"
              className="group rounded-xl border border-zinc-200 bg-zinc-50 p-6 transition-colors hover:border-amber-500/30"
            >
              <h3 className="font-semibold text-zinc-900 group-hover:text-amber-500 transition-colors">
                Explore Services
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Web development, SEO, Google Ads, and more.
              </p>
              <span className="mt-2 inline-flex items-center text-sm text-amber-400">
                View all services <ArrowRight className="ml-1 size-4" />
              </span>
            </Link>
            <Link
              href="/blog"
              className="group rounded-xl border border-zinc-200 bg-zinc-50 p-6 transition-colors hover:border-amber-500/30"
            >
              <h3 className="font-semibold text-zinc-900 group-hover:text-amber-500 transition-colors">
                Read the Blog
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Digital marketing tips and insights for UAE businesses.
              </p>
              <span className="mt-2 inline-flex items-center text-sm text-amber-400">
                Explore articles <ArrowRight className="ml-1 size-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
