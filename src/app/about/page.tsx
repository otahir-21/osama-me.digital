import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { portfolioData } from "@/data/portfolio";
import { caseStudyCopy } from "@/data/case-studies";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectCTA } from "@/components/cta/ProjectCTA";
import { getGraphSchema, getProfilePageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const revalidate = false;

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

      <PageShell>
        <div className="grid gap-12 lg:grid-cols-[1fr_200px]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-700">
              About
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-800 sm:text-5xl">
              About Osama Tahir
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-600">
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
            <div className="relative h-52 w-52 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200">
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

      <PageShell className="pt-0">
        <SectionHeading eyebrow="Approach" title="How I work" />
        <div className="mt-10 space-y-8">
          {approach.map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-stone-800">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">{item.body}</p>
            </div>
          ))}
        </div>
      </PageShell>

      <PageShell className="pt-0">
        <SectionHeading
          eyebrow="Selected work"
          title="Products I have helped ship"
          subtitle="A short sample. Employer names are metadata — the useful part is the product problem."
        />
        <ul className="mt-10 space-y-6">
          {["vyooo-creator-platform", "metatech-flutter-web-crm", "royal-spirit-ecommerce"].map(
            (id) => {
              const project = portfolioData.find((item) => item.id === id);
              const copy = caseStudyCopy[id];
              if (!project || !copy) return null;
              return (
                <li key={id}>
                  <Link href={`/portfolio/${id}`} className="group block">
                    <p className="text-xs uppercase tracking-[0.16em] text-indigo-700">
                      {copy.buyerCategory}
                    </p>
                    <h3 className="mt-2 font-semibold text-stone-800 group-hover:text-indigo-700">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone-500">{copy.overview}</p>
                  </Link>
                </li>
              );
            }
          )}
        </ul>
        <Link
          href="/portfolio"
          className="mt-8 inline-block text-sm text-indigo-700 hover:text-indigo-800"
        >
          View all work →
        </Link>
      </PageShell>

      <PageShell className="pt-0">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="mt-10 space-y-8">
          {timeline.map((item) => (
            <div key={item.year} className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-8">
              <p className="text-sm text-indigo-700">{item.year}</p>
              <div>
                <h3 className="font-semibold text-stone-800">{item.title}</h3>
                <p className="mt-1 text-sm text-stone-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </PageShell>

      <PageShell className="pt-0">
        <SectionHeading eyebrow="Expertise" title="Technical focus" />
        <ul className="mt-8 space-y-3 text-sm text-stone-600">
          {[
            "Flutter and React Native for iOS and Android, including Flutter Web dashboards",
            "Laravel and Node.js APIs, MySQL, Redis, authentication and payments",
            "Stripe, Apple Pay, Network International, RevenueCat",
            "AWS, Firebase, store release and production support",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/skills"
          className="mt-6 inline-block text-sm text-indigo-700 hover:text-indigo-800"
        >
          View the full skills list
        </Link>
      </PageShell>

      <PageShell className="pt-0">
        <SectionHeading eyebrow="Leadership" title="How I work with teams" />
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-stone-600">
          Alongside delivery I mentor junior developers, take part in architecture reviews, and
          run work in a Scrum cadence (Scrum Master Certified). I am used to being the person who
          owns the technical path — not only a ticket queue.
        </p>
      </PageShell>

      <PageShell className="pt-0">
        <SectionHeading eyebrow="Education" title="Background" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-stone-200 bg-white p-5">
            <GraduationCap className="size-5 text-indigo-600" />
            <h3 className="mt-3 font-semibold text-stone-800">B.E. Software Engineering</h3>
            <p className="mt-1 text-sm text-stone-500">Foundation University Islamabad · 2018–2022</p>
          </div>
          <div className="rounded-xl border border-stone-200 bg-white p-5">
            <Award className="size-5 text-indigo-600" />
            <h3 className="mt-3 font-semibold text-stone-800">Certifications</h3>
            <p className="mt-1 text-sm text-stone-500">
              Scrum Master Certified (SMC), Android development, containers
            </p>
          </div>
        </div>
        <p className="mt-10 text-sm text-stone-500">
          Looking to hire me for a full-time role?{" "}
          <Link href="/resume" className="text-indigo-700 hover:text-indigo-800">
            View my resume →
          </Link>
        </p>
      </PageShell>

      <PageShell className="pt-0">
        <ProjectCTA />
      </PageShell>
    </div>
  );
}
