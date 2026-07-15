"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Award } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { getPersonSchema } from "@/lib/schema";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skills = [
  "Web platforms: Flutter Web, Laravel dashboards & CRMs",
  "Laravel, Node.js, REST & GraphQL APIs, MySQL, Redis",
  "Flutter, React Native, SwiftUI, Kotlin",
  "Stripe, Apple Pay, PCI-aware payment flows",
  "AWS, Firebase, CI/CD, containers",
  "LLM APIs (OpenAI, Gemini), AI-assisted dev",
  "Agile/Scrum (SMC), mentoring, architecture",
];

const timeline = [
  {
    year: "2025 – Present",
    title: "Senior Full-Stack Developer · Metatech",
    desc: "VyooO creator platform (360°/VR, Agora live, AI), Flutter Web CRM (−60% reporting time), Laravel APIs at 99.9% uptime.",
  },
  {
    year: "2023 – 2025",
    title: "Senior Mobile Developer · Prism Digital",
    desc: "6+ Flutter/React Native apps, 200K+ downloads, $1.2M+ payments (Stripe, Apple Pay, Network International).",
  },
  {
    year: "2021 – 2023",
    title: "Lead Flutter Developer · Freelancer.com",
    desc: "PAK ID (NADRA) + 12 client apps, 4.9/5 satisfaction, biometrics & ICAO photo capture.",
  },
  {
    year: "2020 – 2021",
    title: "Mobile Developer Intern · Soft Code Labs",
    desc: "5+ Android/iOS apps, 50K+ downloads, Core PHP APIs, Play Store & App Store launches.",
  },
];

export default function AboutPage() {
  const personSchema = getPersonSchema();
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <PageShell className="border-b border-zinc-800/80">
        <div className="grid gap-12 lg:grid-cols-[1fr_200px]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">About</p>
            <h1 className="mt-3 text-3xl font-bold text-zinc-50 sm:text-4xl">{siteConfig.name}</h1>
            <p className="mt-2 text-lg text-zinc-400">{siteConfig.headline}</p>
            <div className="mt-8 space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I&apos;m a {siteConfig.role} based in {siteConfig.location} with 6 years of
                experience building secure backend services and cross-platform mobile apps for
                fintech and enterprise clients.
              </p>
              <p>
                I&apos;ve shipped 20+ production applications with 500K+ combined downloads,
                engineered APIs at 99.9% uptime, and processed $1.2M+ in secure payments with
                zero breaches.
              </p>
              <p>
                Scrum Master Certified — I mentor engineers, lead Agile delivery, and own systems
                end-to-end from architecture to deployment.
              </p>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {siteConfig.availability}
            </p>
          </div>

          <div className="flex items-start justify-center lg:justify-end">
            <div className="relative h-52 w-52 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/25 to-zinc-800 ring-1 ring-zinc-700/60">
              <Image
                src="/profile.png"
                alt={siteConfig.name}
                fill
                className="object-cover object-top"
                sizes="208px"
                priority
              />
            </div>
          </div>
        </div>
      </PageShell>

      <PageShell className="border-b border-zinc-800/80 py-12">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="mt-10 space-y-8">
          {timeline.map((item) => (
            <div key={item.year} className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-8">
              <p className="font-mono text-sm text-emerald-400/80">{item.year}</p>
              <div>
                <h3 className="font-semibold text-zinc-200">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </PageShell>

      <PageShell className="border-b border-zinc-800/80 py-12">
        <SectionHeading eyebrow="Skills" title="Tech stack" />
        <ul className="mt-8 space-y-3">
          {skills.map((s) => (
            <li key={s} className="flex items-start gap-3 text-sm text-zinc-400">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
              {s}
            </li>
          ))}
        </ul>
      </PageShell>

      <PageShell className="py-12">
        <SectionHeading eyebrow="Education" title="Background" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <GraduationCap className="size-5 text-emerald-400" />
            <h3 className="mt-3 font-semibold text-zinc-200">B.E. Software Engineering</h3>
            <p className="mt-1 text-sm text-zinc-500">Foundation University Islamabad · 2018–2022</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <Award className="size-5 text-emerald-400" />
            <h3 className="mt-3 font-semibold text-zinc-200">Certifications</h3>
            <p className="mt-1 text-sm text-zinc-500">Scrum Master Certified (SMC), Android Dev, Containers</p>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
        >
          Get in touch
          <ArrowRight size={16} />
        </Link>
      </PageShell>
    </div>
  );
}
