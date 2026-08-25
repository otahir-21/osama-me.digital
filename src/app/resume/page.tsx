import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Resume | Osama Tahir — Senior Mobile & Full-Stack Developer Dubai",
  description:
    "Resume of Osama Tahir, a Dubai-based senior mobile and full-stack developer. Experience across Flutter, React Native, Laravel, Node.js, payments and production delivery.",
  path: "/resume",
});

const experience = [
  {
    role: "Senior Full-Stack Developer (Flutter Web & Mobile)",
    company: "Metatech",
    location: "Dubai, UAE",
    period: "Jun 2025 – Present",
    points: [
      "Leading end-to-end development of VyooO, a creator social platform (iOS + Android) with full-screen reels, stories, live streaming (Agora), real-time chat and voice/video calls (CallKit), and immersive 360°/VR video with gyro-based playback and live 360° panorama broadcasting.",
      "Shipped AI-powered features in VyooO — AI hashtag generation and feed fact-check badges — alongside RevenueCat subscriptions, creator monetization and payout flows, and Cloudflare Stream video delivery.",
      "Architected a Flutter Web CRM with real-time analytics dashboards, cutting client reporting time by 60%.",
      "Designed and maintained Laravel REST APIs handling 10K+ daily requests at 99.9% uptime, powering Stripe and Google Analytics integrations.",
      "Built and shipped an in-app AI chatbot for the CRM using OpenAI and Gemini LLM APIs, bringing conversational AI assistance directly into the client-facing platform.",
      "Mentored 3 junior developers and drove architecture reviews and caching decisions across client platforms.",
    ],
    tech: "Flutter, Firebase, Agora, RevenueCat, Cloudflare Stream, Laravel, MySQL, Redis, OpenAI & Gemini APIs",
  },
  {
    role: "Senior Mobile Developer (Flutter / React Native) | Laravel API Specialist",
    company: "Prism Digital",
    location: "Dubai, UAE",
    period: "Jul 2023 – Jun 2025",
    points: [
      "Led development of 6+ high-performance apps (Flutter/React Native) with 200K+ downloads and 4.7/5 average store ratings — including Dvago, ranked #13 in the App Store Medical category.",
      "Integrated Stripe, Apple Pay, and Network International across fintech and e-commerce apps, processing $1.2M+ in transactions with zero security breaches — built to regulated, high-availability standards.",
      "Engineered Laravel REST APIs sustaining 5K+ requests/minute; reduced latency by 40% through Redis caching and query optimization.",
      "Mentored 2 junior developers and introduced Agile workflows that accelerated project delivery.",
    ],
    tech: "Flutter, React Native, Laravel, Firebase, Stripe, Network International, GetX, MySQL",
  },
  {
    role: "Lead Flutter Developer | Cross-Platform Apps & API Integration",
    company: "Freelancer.com (Independent Contractor)",
    location: "Islamabad, Pakistan",
    period: "Dec 2021 – May 2023",
    points: [
      "Contributed to PAK ID — NADRA Pakistan's official national identity app (1M+ downloads, 4.8 Google Play rating) — building biometric authentication flows, ICAO-compliant photo capture, and stability improvements for large-scale usage.",
      "Delivered 12+ Flutter applications for global clients with 100% on-time delivery and 4.9/5 client satisfaction.",
      "Integrated REST APIs (Firebase/Node.js) and designed UI/UX for 8 apps; maintained <1% crash rate via rigorous testing (Jest, Mockito).",
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
      "Built Core PHP APIs, reducing data sync time through query optimization; deployed to Google Play and App Store with full store-guideline compliance.",
    ],
    tech: "Java, Swift, Core PHP, MySQL, Firebase",
  },
];

const coreSkills = [
  {
    label: "Backend Engineering & APIs",
    value: "Laravel (PHP), Node.js, REST & GraphQL APIs, Microservices & Event-driven, MySQL, Redis",
  },
  {
    label: "Payments & Fintech",
    value: "Stripe · Apple Pay, Network International, PCI-aware payment flows, Secure API integration",
  },
  {
    label: "Mobile & Frontend",
    value: "Flutter (iOS · Android · Web), React Native, SwiftUI · Kotlin · Java, BLoC · GetX",
  },
  {
    label: "Cloud & DevOps",
    value: "AWS (EC2 · S3 · Lambda), Firebase, CI/CD & Containers, Performance tuning & caching",
  },
  {
    label: "AI & Emerging Tech",
    value: "LLM APIs (OpenAI · Gemini), In-app chatbot features, AI-assisted Dev (Copilot · Claude · Cursor)",
  },
  {
    label: "Leadership & Delivery",
    value: "Agile / Scrum (SMC Certified), Code review & mentoring, Architecture reviews, Stakeholder communication",
  },
];

const achievements = [
  "Processed $1.2M+ in secure payments (Stripe, Apple Pay, Network International) for UAE & GCC fintech apps — zero security breaches.",
  "Engineered REST APIs handling 10K+ daily requests at 99.9% uptime; cut client reporting time by 60% with a Flutter Web CRM.",
  "Contributed to 20+ production applications, including PAK ID (the product has 1M+ downloads and a 4.8 rating) and Dvago (#13 Medical on the App Store).",
  "Mentored engineers across Metatech and Prism Digital while leading Agile delivery end-to-end (Scrum Master Certified).",
];

export default function ResumePage() {
  return (
    <div>
      <PageShell className="border-b border-stone-200">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-indigo-700">
              Resume
            </p>
            <h1 className="mt-3 text-3xl font-bold text-stone-800 sm:text-4xl">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-lg text-stone-600">
              {siteConfig.role} | Backend APIs · Payment Systems · Mobile (Flutter / React Native)
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} /> {siteConfig.location}
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 hover:text-stone-800"
              >
                <Mail size={14} /> {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.telephone}`}
                className="inline-flex items-center gap-1.5 hover:text-stone-800"
              >
                <Phone size={14} /> {siteConfig.telephone}
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-stone-800"
              >
                <Linkedin size={14} /> /in/otahir21
              </a>
              <a
                href={siteConfig.social.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-stone-800"
              >
                Upwork
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.resumeFile}
              download="Osama-Tahir-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              <Download size={16} />
              Download resume
            </a>
            <a
              href={siteConfig.resumeDocxFile}
              download="Osama-Tahir-Resume.docx"
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50"
            >
              <Download size={16} />
              DOCX
            </a>
          </div>
        </div>
      </PageShell>

      <PageShell className="border-b border-stone-200 py-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-indigo-700">
          Professional Summary
        </h2>
        <p className="mt-4 leading-relaxed text-stone-600">
          Senior mobile and full-stack developer with 6 years of production experience across
          the UAE and GCC. I have contributed to 20+ mobile and web products, including
          contract work on PAK ID, Pakistan&apos;s official national identity app (the product
          has 1M+ downloads and a 4.8 rating). At Metatech I implemented Laravel APIs used for
          high-volume client reporting and a Flutter Web CRM that reduced reporting time by 60%.
          At Prism Digital I implemented payment integrations (Stripe, Apple Pay, Network
          International) used to process $1.2M+ in transactions. Scrum Master Certified. I also
          integrate LLM APIs (OpenAI, Gemini) where they are a genuine product feature.
        </p>
      </PageShell>

      <PageShell className="border-b border-stone-200 py-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-indigo-700">
          Core Skills
        </h2>
        <dl className="mt-6 space-y-4">
          {coreSkills.map((skill) => (
            <div key={skill.label} className="grid gap-1 sm:grid-cols-[200px_1fr] sm:gap-6">
              <dt className="text-sm font-semibold text-stone-800">{skill.label}</dt>
              <dd className="text-sm leading-relaxed text-stone-500">{skill.value}</dd>
            </div>
          ))}
        </dl>
      </PageShell>

      <PageShell className="border-b border-stone-200 py-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-indigo-700">
          Professional Experience
        </h2>
        <div className="mt-8 space-y-10">
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-stone-800">{job.role}</h3>
                <p className="font-mono text-xs text-indigo-700">{job.period}</p>
              </div>
              <p className="mt-1 text-sm text-stone-500">
                {job.company} · {job.location}
              </p>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-stone-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-xs text-stone-500">Tech: {job.tech}</p>
            </article>
          ))}
        </div>
      </PageShell>

      <PageShell className="border-b border-stone-200 py-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-indigo-700">
          Key Achievements
        </h2>
        <ul className="mt-6 space-y-3">
          {achievements.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-600">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600" />
              {item}
            </li>
          ))}
        </ul>
      </PageShell>

      <PageShell className="py-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-indigo-700">
          Education & Certifications
        </h2>
        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="font-semibold text-stone-800">B.E. Computer Software Engineering</h3>
              <p className="mt-1 text-sm text-stone-500">Foundation University Islamabad (FUI)</p>
            </div>
            <p className="font-mono text-xs text-indigo-700">2018 – 2022</p>
          </div>
          <ul className="space-y-2 text-sm text-stone-600">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600" />
              Scrum Master Certified (SMC)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600" />
              Introduction to Android Mobile App Development
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-600" />
              Introduction to Containers
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap gap-3 border-t border-stone-200 pt-10">
          <a
            href={siteConfig.resumeFile}
            download="Osama-Tahir-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            <Download size={16} />
            Download resume
          </a>
          <a
            href={siteConfig.resumeDocxFile}
            download="Osama-Tahir-Resume.docx"
            className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50"
          >
            <Download size={16} />
            DOCX
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50"
          >
            Get in touch
          </Link>
        </div>
      </PageShell>
    </div>
  );
}
