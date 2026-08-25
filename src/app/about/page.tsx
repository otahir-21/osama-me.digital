import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectCTA } from "@/components/cta/ProjectCTA";
import { getGraphSchema, getProfilePageSchema } from "@/lib/schema";

const approach = [
  {
    title: "Own the product, not just the ticket",
    body: "I would rather understand architecture, payments, release and support than implement a screen in isolation. That is how mobile products actually ship.",
  },
  {
    title: "Mobile plus backend is the same problem",
    body: "A Flutter or React Native app that cannot authenticate, charge, or talk to a stable API is unfinished. I work across the client and the services behind it so the lifecycle stays coherent.",
  },
  {
    title: "Stabilize before you rewrite",
    body: "When I inherit a product, I look for what can be saved. Rebuilds happen when the architecture cannot be maintained — not as a default sales move.",
  },
];

const timeline = [
  {
    year: "2025 – Present",
    title: "Senior Full-Stack Developer · Metatech",
    desc: "VyooO creator platform (live, 360°/VR, subscriptions) and a Flutter Web CRM that reduced client reporting time by 60%, with Laravel APIs in production.",
  },
  {
    year: "2023 – 2025",
    title: "Senior Mobile Developer · Prism Digital",
    desc: "Flutter and React Native products for commerce and health, including payment integrations with Stripe, Apple Pay and Network International.",
  },
  {
    year: "2021 – 2023",
    title: "Lead Flutter Developer · Freelancer.com",
    desc: "Contributed to PAK ID (NADRA) on biometric and photo-capture flows, and delivered client Flutter products as a contractor.",
  },
  {
    year: "2020 – 2021",
    title: "Mobile Developer Intern · Soft Code Labs",
    desc: "Android and iOS apps with PHP APIs and first store launches.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <JsonLd data={getGraphSchema([getProfilePageSchema()])} />

      <PageShell className="border-b border-zinc-800/80">
        <div className="grid gap-12 lg:grid-cols-[1fr_200px]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-400/90">
              About
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
              About Osama Tahir
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-400">
              <p>
                I&apos;m a Dubai-based senior mobile and full-stack developer focused on taking
                ownership of products rather than isolated development tickets.
              </p>
              <p>
                I help startups, agencies and businesses build, rescue and scale mobile apps and
                digital platforms across Flutter, React Native, Laravel, Node.js, APIs, payments
                and cloud infrastructure.
              </p>
              <p>
                Working across mobile and backend means I can think beyond UI implementation and
                understand the full product lifecycle — architecture, authentication, payments,
                launch and the unglamorous work that keeps a product in production.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center lg:justify-end">
            <div className="relative h-52 w-52 overflow-hidden rounded-3xl bg-zinc-900 ring-1 ring-zinc-800">
              <Image
                src={siteConfig.profileImage}
                alt={`${siteConfig.name}, ${siteConfig.role} in ${siteConfig.location}`}
                fill
                className="object-cover object-top"
                sizes="208px"
                priority
              />
            </div>
          </div>
        </div>
      </PageShell>

      <PageShell className="border-b border-zinc-800/80 py-14">
        <SectionHeading eyebrow="Approach" title="How I work" />
        <div className="mt-10 space-y-8">
          {approach.map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-zinc-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.body}</p>
            </div>
          ))}
        </div>
      </PageShell>

      <PageShell className="border-b border-zinc-800/80 py-14">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="mt-10 space-y-8">
          {timeline.map((item) => (
            <div key={item.year} className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-8">
              <p className="text-sm text-emerald-400/80">{item.year}</p>
              <div>
                <h3 className="font-semibold text-zinc-200">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </PageShell>

      <PageShell className="border-b border-zinc-800/80 py-14">
        <SectionHeading eyebrow="Expertise" title="Technical focus" />
        <ul className="mt-8 space-y-3 text-sm text-zinc-400">
          {[
            "Flutter and React Native for iOS and Android, including Flutter Web dashboards",
            "Laravel and Node.js APIs, MySQL, Redis, authentication and payments",
            "Stripe, Apple Pay, Network International, RevenueCat",
            "AWS, Firebase, store release and production support",
            "Technical leadership: mentoring, architecture reviews, Scrum Master Certified",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/skills"
          className="mt-6 inline-block text-sm text-emerald-400 hover:text-emerald-300"
        >
          View the full skills list
        </Link>
      </PageShell>

      <PageShell className="border-b border-zinc-800/80 py-14">
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
            <p className="mt-1 text-sm text-zinc-500">
              Scrum Master Certified (SMC), Android development, containers
            </p>
          </div>
        </div>
        <p className="mt-10 text-sm text-zinc-500">
          Looking to hire me for a full-time role?{" "}
          <Link href="/resume" className="text-emerald-400 hover:text-emerald-300">
            View my resume →
          </Link>
        </p>
      </PageShell>

      <PageShell className="py-14">
        <ProjectCTA />
      </PageShell>
    </div>
  );
}
