import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Flutter, React Native, Laravel & Node.js Skills | Osama Tahir",
  description:
    "Technical skills of Osama Tahir: Flutter, React Native, Laravel, Node.js, payments, AWS and Firebase — used to ship mobile apps and business platforms in Dubai.",
  path: "/skills",
});

const skillCategories = [
  {
    title: "Mobile",
    skills: ["Flutter", "React Native", "iOS", "Android", "BLoC", "GetX"],
  },
  {
    title: "Backend",
    skills: ["Laravel (PHP)", "Node.js", "REST APIs", "MySQL", "Redis"],
  },
  {
    title: "Web platforms",
    skills: ["Flutter Web", "React", "Dashboards & CRMs", "WordPress"],
  },
  {
    title: "Payments",
    skills: ["Stripe", "Apple Pay", "Network International", "RevenueCat"],
  },
  {
    title: "Cloud & launch",
    skills: ["AWS", "Firebase", "CI/CD", "App Store", "Google Play"],
  },
  {
    title: "Leadership",
    skills: ["Agile/Scrum (SMC)", "Code review", "Mentoring", "Architecture"],
  },
];

export default function SkillsPage() {
  return (
    <div>
      <PageShell className="border-b border-zinc-800/80">
        <SectionHeading
          as="h1"
          eyebrow="Skills"
          title="Technical expertise"
          subtitle="The stack I use to ship production software — secondary to the problems I solve."
        />
      </PageShell>

      <PageShell wide className="py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <h2 className="text-sm font-semibold text-zinc-200">{category.title}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-zinc-800/80 px-2.5 py-1 text-xs text-zinc-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
        >
          See selected work
          <ArrowUpRight size={16} />
        </Link>
      </PageShell>
    </div>
  );
}
