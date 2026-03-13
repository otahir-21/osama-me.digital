"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { portfolioToServices, serviceNames } from "@/data/internal-links";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Case Studies"
          subtitle="Selected web, mobile, and marketing projects with measurable results—from conversion lifts and traffic growth to smooth app launch and submission."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {portfolioData.map((project, i) => (
            <motion.article
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="scroll-mt-24 rounded-2xl border border-white/10 bg-zinc-900/50 p-8 lg:p-12"
            >
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <span className="text-sm font-medium uppercase tracking-wider text-amber-400">
                    {project.category}
                  </span>
                  <h2 className="mt-2 text-3xl font-bold text-white">{project.title}</h2>
                  <p className="mt-2 text-zinc-400">{project.client}</p>

                  <div className="mt-8 space-y-6">
                    <div>
                      <h3 className="font-semibold text-white">The Challenge</h3>
                      <p className="mt-1 text-zinc-400">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">The Solution</h3>
                      <p className="mt-1 text-zinc-400">{project.solution}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="aspect-video rounded-xl bg-zinc-800 flex items-center justify-center">
                    <span className="text-5xl font-bold text-zinc-600">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-semibold text-white">Results</h3>
                    <ul className="mt-2 space-y-1">
                      {project.results.map((r) => (
                        <li key={r} className="text-amber-400">• {r}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-semibold text-white">Tech Stack</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-zinc-950/50 px-3 py-1 text-sm text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-semibold text-white">Related Services</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {(portfolioToServices[project.category] ?? []).map((serviceId) => (
                        <Link
                          key={serviceId}
                          href={`/services#${serviceId}`}
                          className="rounded-lg border border-white/10 bg-zinc-950/50 px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:border-amber-500/30 hover:text-amber-400"
                        >
                          {serviceNames[serviceId] ?? serviceId}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className={buttonVariants({
                      size: "lg",
                      className: "mt-8 inline-flex bg-amber-500 text-zinc-950 hover:bg-amber-400",
                    })}
                  >
                    Discuss Your Project
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-900 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Have a Project in Mind?</h2>
          <p className="mt-4 text-zinc-400">
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

          <div className="mt-16 grid gap-8 border-t border-white/10 pt-16 sm:grid-cols-2">
            <Link
              href="/services"
              className="group rounded-xl border border-white/10 bg-zinc-950/50 p-6 transition-colors hover:border-amber-500/30"
            >
              <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                Explore Services
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Web development, SEO, Google Ads, and more.
              </p>
              <span className="mt-2 inline-flex items-center text-sm text-amber-400">
                View all services <ArrowRight className="ml-1 size-4" />
              </span>
            </Link>
            <Link
              href="/blog"
              className="group rounded-xl border border-white/10 bg-zinc-950/50 p-6 transition-colors hover:border-amber-500/30"
            >
              <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">
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
