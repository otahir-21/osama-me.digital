import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Osama Tahir — Senior Full-Stack Developer in Dubai, UAE. 6 years of experience in backend APIs, payment systems, and mobile development.",
  alternates: { canonical: "https://osama-me.digital/resume" },
};

const experience = [
  {
    role: "Senior Full-Stack Developer (Flutter Web & Mobile)",
    company: "Metatech",
    location: "Dubai, UAE",
    period: "Jun 2025 – Present",
    points: [
      "Architected a Flutter Web CRM with real-time analytics dashboards, cutting client reporting time by 60%.",
      "Designed and maintained Laravel REST APIs handling 10K+ daily requests at 99.9% uptime, powering Stripe and Google Analytics integrations.",
      "Mentored 3 junior developers through code reviews and Agile training, lifting team productivity by 25%.",
      "Reviewed and challenged system designs, driving modular architecture and caching decisions that improved API response times by 40%.",
    ],
    tech: "Flutter Web, Laravel, MySQL, Redis, BLoC, Stripe, Google APIs",
  },
  {
    role: "Senior Mobile Developer (Flutter/React Native) | Laravel API Specialist",
    company: "Prism Digital",
    location: "Dubai, UAE",
    period: "Jul 2023 – Jun 2025",
    points: [
      "Led development of 6+ high-performance apps (Flutter/React Native) with 200K+ downloads and 4.7/5 average store ratings.",
      "Engineered Laravel REST APIs sustaining 5K+ requests/minute; reduced latency by 40% through Redis caching and query optimization.",
      "Integrated Stripe and Apple Pay for 3 fintech applications, processing $1.2M+ in transactions with zero security breaches.",
      "Mentored 2 junior developers and introduced Agile workflows, cutting project delivery time by 30%.",
    ],
    tech: "Flutter, React Native, Laravel, Firebase, Stripe, GetX, MySQL",
  },
  {
    role: "Lead Flutter Developer | Cross-Platform Apps & API Integration",
    company: "Freelancer.com (Independent Contractor)",
    location: "Islamabad, Pakistan",
    period: "Dec 2021 – May 2023",
    points: [
      "Delivered 12+ Flutter applications for global clients with 100% on-time delivery and 4.9/5 client satisfaction.",
      "Integrated REST APIs (Firebase/Node.js), improving app responsiveness by 35% through optimized data fetching.",
      "Designed UI/UX for 8 apps, boosting user engagement by 45%; maintained <1% crash rate via rigorous testing.",
    ],
    tech: "Flutter, Firebase, Node.js, GetX, Stripe, Google Maps API",
  },
  {
    role: "Mobile App Developer Intern (Android/iOS) | PHP Backend",
    company: "Soft Code Labs",
    location: "Islamabad, Pakistan",
    period: "Jun 2020 – Nov 2021",
    points: [
      "Developed 5+ Android/iOS apps with 50K+ downloads and 4.5/5 ratings.",
      "Built Core PHP APIs, reducing data sync time by 30% through query optimization; deployed to Google Play and App Store with full store-guideline compliance.",
    ],
    tech: "Java, Swift, Core PHP, MySQL, Firebase",
  },
];

const coreSkills = [
  { label: "Backend Engineering", value: "Laravel (PHP), Node.js, REST & GraphQL APIs, microservice and event-driven design, MySQL, Redis" },
  { label: "Cloud & DevOps", value: "AWS (EC2, S3, Lambda), Firebase, CI/CD pipelines, containers, performance tuning and caching" },
  { label: "Payments & Integrations", value: "Stripe, Apple Pay, PCI-aware payment flows, Google Analytics, secure API integration for fintech" },
  { label: "AI & Emerging Tech", value: "LLM API integration (OpenAI, Gemini), in-app chatbot features, AI-assisted development" },
  { label: "Mobile & Frontend", value: "Flutter (iOS/Android/Web), React Native, SwiftUI, Kotlin, Java (Android), BLoC, GetX" },
  { label: "Leadership & Delivery", value: "Agile/Scrum (SMC certified), code review, mentoring, stakeholder communication, architecture reviews" },
];

const achievements = [
  "Processed $1.2M+ in secure payments (Stripe/Apple Pay) for UAE & KSA fintech apps — zero security breaches.",
  "Reduced enterprise API response times by 40% and client reporting time by 60% through architecture and caching improvements.",
  "Shipped 20+ production applications with 500K+ combined downloads and 4.8/5 average ratings.",
  "Improved team productivity by 25% and delivery speed by 30% through mentoring and Agile leadership.",
];

export default function ResumePage() {
  return (
    <div>
      <PageShell className="border-b border-zinc-800/80">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
              Resume
            </p>
            <h1 className="mt-3 text-3xl font-bold text-zinc-50 sm:text-4xl">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-lg text-zinc-400">
              {siteConfig.role} | Backend APIs & Payment Systems | Mobile (Flutter / React Native)
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} /> {siteConfig.location}
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 hover:text-zinc-300"
              >
                <Mail size={14} /> {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.telephone}`}
                className="inline-flex items-center gap-1.5 hover:text-zinc-300"
              >
                <Phone size={14} /> {siteConfig.telephone}
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-zinc-300"
              >
                <Linkedin size={14} /> /in/otahir21
              </a>
            </div>
          </div>

          <a
            href={siteConfig.resumeFile}
            download="Osama-Tahir-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>
      </PageShell>

      <PageShell className="border-b border-zinc-800/80 py-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
          Professional Summary
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-400">
          Senior Full-Stack Developer with 6 years of experience building secure,
          high-availability backend services and cross-platform applications for fintech and
          enterprise clients across the UAE and GCC. Delivered 20+ production applications with
          500K+ combined downloads; engineered REST APIs handling 10K+ daily requests at 99.9%
          uptime; integrated $1.2M+ in secure payment processing (Stripe, Apple Pay) with zero
          security breaches. Scrum Master Certified with hands-on experience mentoring engineers,
          leading Agile delivery, and owning systems end-to-end.
        </p>
      </PageShell>

      <PageShell className="border-b border-zinc-800/80 py-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
          Core Skills
        </h2>
        <dl className="mt-6 space-y-4">
          {coreSkills.map((skill) => (
            <div key={skill.label} className="grid gap-1 sm:grid-cols-[200px_1fr] sm:gap-6">
              <dt className="text-sm font-semibold text-zinc-200">{skill.label}</dt>
              <dd className="text-sm leading-relaxed text-zinc-500">{skill.value}</dd>
            </div>
          ))}
        </dl>
      </PageShell>

      <PageShell className="border-b border-zinc-800/80 py-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
          Professional Experience
        </h2>
        <div className="mt-8 space-y-10">
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-zinc-100">{job.role}</h3>
                <p className="font-mono text-xs text-emerald-400/80">{job.period}</p>
              </div>
              <p className="mt-1 text-sm text-zinc-500">
                {job.company} · {job.location}
              </p>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-xs text-zinc-600">Tech: {job.tech}</p>
            </article>
          ))}
        </div>
      </PageShell>

      <PageShell className="border-b border-zinc-800/80 py-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
          Key Achievements
        </h2>
        <ul className="mt-6 space-y-3">
          {achievements.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
              {item}
            </li>
          ))}
        </ul>
      </PageShell>

      <PageShell className="py-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
          Education & Certifications
        </h2>
        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="font-semibold text-zinc-100">B.E. Computer Software Engineering</h3>
              <p className="mt-1 text-sm text-zinc-500">Foundation University Islamabad (FUI)</p>
            </div>
            <p className="font-mono text-xs text-emerald-400/80">2018 – 2022</p>
          </div>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
              Scrum Master Certified (SMC)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
              Introduction to Android Mobile Application Development
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
              Introduction to Containers
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap gap-3 border-t border-zinc-800/80 pt-10">
          <a
            href={siteConfig.resumeFile}
            download="Osama-Tahir-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            <Download size={16} />
            Download PDF
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
          >
            Get in touch
          </Link>
        </div>
      </PageShell>
    </div>
  );
}
