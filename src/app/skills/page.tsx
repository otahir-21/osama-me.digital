"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skillCategories = [
  {
    title: "Web Development",
    skills: ["Flutter Web", "Laravel web apps", "Dashboards & CRMs", "Responsive UI", "REST APIs"],
  },
  {
    title: "Backend Engineering",
    skills: ["Laravel (PHP)", "Node.js", "REST & GraphQL APIs", "MySQL", "Redis", "Microservices"],
  },
  {
    title: "Mobile & Frontend",
    skills: ["Flutter", "React Native", "SwiftUI", "Kotlin", "BLoC", "GetX"],
  },
  {
    title: "Payments & Fintech",
    skills: ["Stripe", "Apple Pay", "PCI-aware flows", "Google Analytics", "Secure APIs"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda)", "Firebase", "CI/CD", "Docker", "Performance tuning"],
  },
  {
    title: "AI & Emerging Tech",
    skills: ["OpenAI", "Gemini", "In-app chatbots", "GitHub Copilot", "Claude", "Cursor"],
  },
  {
    title: "Leadership",
    skills: ["Agile/Scrum (SMC)", "Code review", "Mentoring", "Architecture reviews"],
  },
];

export default function SkillsPage() {
  return (
    <div>
      <PageShell className="border-b border-zinc-800/80">
        <SectionHeading
          eyebrow="Skills"
          title="Technical expertise"
          subtitle="The tools and technologies I use to ship production software."
        />
      </PageShell>

      <PageShell wide className="py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5"
            >
              <h2 className="text-sm font-semibold text-zinc-200">{category.title}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-zinc-800/80 px-2.5 py-1 font-mono text-xs text-zinc-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-zinc-800/80 pt-10 sm:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-2xl font-bold text-zinc-100">
                {stat.value}
                <span className="text-emerald-400">{stat.suffix}</span>
              </dt>
              <dd className="mt-1 text-xs text-zinc-500">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <Link
          href="/portfolio"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
        >
          See projects
          <ArrowUpRight size={16} />
        </Link>
      </PageShell>
    </div>
  );
}
