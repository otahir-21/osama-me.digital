"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Code2,
  Target,
  MapPin,
  Briefcase,
  Cpu,
  Building2,
  ArrowRight,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site-config";
import { getPersonSchema, getLocalBusinessSchema } from "@/lib/schema";

const skills = [
  "Web Development (Next.js, React, WordPress, Shopify)",
  "Mobile App Development (Flutter & React Native)",
  "iOS & Android App Store / Play Store Submission",
  "SEO & Content Strategy",
  "Google Ads & PPC",
  "Social Media Marketing",
  "Landing Page Optimization",
  "Analytics & Conversion Tracking",
];

const tools = [
  "Next.js, React, TypeScript",
  "Flutter (iOS & Android)",
  "React Native (iOS & Android)",
  "WordPress, Shopify",
  "Google Ads, Meta Ads",
  "Google Analytics, Search Console",
  "App Store Connect, TestFlight, Firebase",
  "Figma, VS Code",
];

const industries = [
  "E-commerce & Retail",
  "Real Estate",
  "Restaurants & Hospitality",
  "Professional Services",
  "SaaS & Tech Startups",
];

const timeline = [
  {
    year: "2025–Present",
    title: "Senior Full-Stack Developer · Metatech, Dubai",
    desc: "Leading Flutter and React Native mobile development at a Dubai-based tech agency. Delivered 20+ production apps with 500K+ total downloads across iOS & Android, and integrated $1.2M+ in payment processing through Stripe and in-app purchases.",
  },
  {
    year: "2023–2025",
    title: "Freelance Developer & Digital Marketing Specialist",
    desc: "Worked directly with clients across the UAE and GCC—building conversion-focused websites with Next.js, Flutter & React Native mobile apps, and full digital marketing funnels including SEO, Google Ads, and analytics.",
  },
  {
    year: "2022",
    title: "Web Development & E-commerce",
    desc: "Expanded into custom development—WordPress, Shopify, and WooCommerce stores for UAE businesses. Integrated UAE payment gateways and built product filtering, inventory management, and checkout flows.",
  },
  {
    year: "2020",
    title: "Started in Digital Marketing",
    desc: "Began with SEO, Google Ads, and social media marketing at a Dubai-based agency. Managed campaigns across multiple industries and built the foundation in analytics, reporting, and conversion tracking.",
  },
];

export default function AboutPage() {
  const personSchema = getPersonSchema();
  const localBusinessSchema = getLocalBusinessSchema();
  return (
    <div className="min-h-screen bg-zinc-50 pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-amber-400">
              About Me
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-xl text-amber-400">{siteConfig.role}</p>
            <p className="mt-6 text-lg text-zinc-600">
              I&apos;m a Senior Full-Stack &amp; Mobile Developer and digital marketing specialist
              based in Dubai, with 5+ years of agency and freelance experience. I&apos;ve shipped
              20+ production mobile apps in Flutter and React Native with 500K+ combined downloads,
              built custom web platforms in Next.js, and run performance marketing campaigns for
              businesses across the UAE and GCC.
            </p>
            <p className="mt-4 text-zinc-600">
              What sets me apart is the combination of development and marketing. I don&apos;t
              just build websites—I build them with SEO, conversion, and performance in mind.
              And when I run ads or SEO, I understand the technical side. No handoffs, no
              miscommunication.
            </p>
            <p className="mt-4 text-zinc-600">
              For mobile apps, I also guide clients through Apple App Store requirements end to end:
              metadata, screenshots, privacy policy, review test accounts, age ratings, pricing,
              country availability, and release strategy—so your app is not only built well, but
              approved and ready to launch.
            </p>
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg", className: "mt-8 inline-flex bg-amber-500 text-zinc-950 hover:bg-amber-400" })}
            >
              Let&apos;s Work Together
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src="/profile-photo.png"
              alt={`${siteConfig.name} portrait`}
              width={420}
              height={520}
              className="h-auto w-full max-w-sm rounded-2xl border border-zinc-200 bg-white object-cover object-top shadow-sm"
              priority
            />
          </div>
        </motion.div>
      </section>

      <section className="border-t border-zinc-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="My Journey"
            subtitle="From agency work to freelance—focused on results."
          />
          <div className="mt-16 space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-2xl font-bold text-amber-400">{item.year}</span>
                  <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                </div>
                <p className="text-zinc-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Skills & Tools"
            title="What I Work With"
            subtitle="A blend of development and marketing expertise."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-zinc-900">
                <Code2 className="size-5 text-amber-400" />
                Skills
              </h3>
              <ul className="mt-4 space-y-2">
                {skills.map((s) => (
                  <li key={s} className="text-zinc-600">• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-zinc-900">
                <Cpu className="size-5 text-amber-400" />
                Tools & Stack
              </h3>
              <ul className="mt-4 space-y-2">
                {tools.map((t) => (
                  <li key={t} className="text-zinc-600">• {t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title="Who I Serve"
            subtitle="Experience across multiple sectors."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm text-zinc-700"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mission"
            title="Why I Do This"
            subtitle="Clear value, honest work, real results."
          />
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg text-zinc-600">
            I believe small businesses and startups deserve the same quality of web and
            marketing work as big brands. My mission is to deliver premium results without
            the agency overhead—direct collaboration, transparent pricing, and a focus on
            what actually moves the needle for your business.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg", className: "bg-amber-500 text-zinc-950 hover:bg-amber-400" })}
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/services"
              className={buttonVariants({ variant: "outline", size: "lg", className: "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100" })}
            >
              View Services
            </Link>
            <Link
              href="/portfolio"
              className={buttonVariants({ variant: "outline", size: "lg", className: "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100" })}
            >
              View Portfolio
            </Link>
          </div>
          <p className="mt-8 text-center text-sm text-zinc-500">
            <Link href="/blog" className="text-amber-400 hover:underline">Read the blog</Link>
            {" "}for insights on digital marketing and web development.
          </p>
        </div>
      </section>
    </div>
  );
}
