"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ExternalLink,
  Globe,
  Heart,
  Lock,
  Maximize2,
  MessageCircle,
  Play,
  Presentation,
  Radio,
  Shield,
  ShoppingBag,
  Sparkles,
  Users,
  Wallet,
  X,
} from "lucide-react";
import type {
  PortfolioPillar,
  PortfolioProject,
  PortfolioSkillOffer,
} from "@/data/portfolio";

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
  </svg>
);

const pillarIcons = {
  shield: Shield,
  play: Play,
  globe: Globe,
  radio: Radio,
  camera: Camera,
  message: MessageCircle,
  users: Users,
  lock: Lock,
  heart: Heart,
  sparkles: Sparkles,
  shopping: ShoppingBag,
  wallet: Wallet,
} as const;

type Slide =
  | { type: "hook" }
  | { type: "story" }
  | { type: "pillar"; pillar: PortfolioPillar }
  | { type: "skills"; offers: PortfolioSkillOffer[] }
  | { type: "cta" };

function SkillChips({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-md bg-zinc-800 px-2.5 py-1 font-mono text-xs text-zinc-400"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

function SlideBody({
  slide,
  project,
  companyName,
}: {
  slide: Slide;
  project: PortfolioProject;
  companyName: string;
}) {
  if (slide.type === "hook") {
    return (
      <div className="mx-auto flex h-full max-w-3xl flex-col justify-center px-6 text-center sm:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
          {project.category} · {companyName}
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
          {project.title}
        </h2>
        <p className="mt-4 text-lg text-zinc-400">{project.role}</p>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
          {project.challenge}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {project.appStore && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950"
            >
              <AppleIcon />
              App Store
            </a>
          )}
          {project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300"
            >
              <PlayStoreIcon />
              Google Play
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300"
            >
              Website
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    );
  }

  if (slide.type === "story") {
    return (
      <div className="mx-auto flex h-full max-w-4xl flex-col justify-center px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
          Problem → Outcome
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Challenge
            </h3>
            <p className="mt-3 text-base leading-relaxed text-zinc-300 sm:text-lg">
              {project.challenge}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Solution
            </h3>
            <p className="mt-3 text-base leading-relaxed text-zinc-300 sm:text-lg">
              {project.solution}
            </p>
          </div>
        </div>
        <ul className="mt-10 space-y-3 border-t border-zinc-800 pt-8">
          {project.results.map((result) => (
            <li key={result} className="flex gap-3 text-sm text-zinc-400 sm:text-base">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              {result}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (slide.type === "pillar") {
    const Icon = pillarIcons[slide.pillar.icon];
    return (
      <div className="mx-auto flex h-full max-w-3xl flex-col justify-center px-6 sm:px-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
          <Icon className="h-5 w-5 text-emerald-400" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-zinc-50 sm:text-4xl">
          {slide.pillar.title}
        </h2>
        <p className="mt-3 text-base text-zinc-400 sm:text-lg">{slide.pillar.summary}</p>
        <ul className="mt-8 space-y-4">
          {slide.pillar.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              {bullet}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
            Skills demonstrated
          </p>
          <SkillChips skills={slide.pillar.skills} />
        </div>
      </div>
    );
  }

  if (slide.type === "skills") {
    return (
      <div className="mx-auto flex h-full max-w-4xl flex-col justify-center px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
          What I can build for you
        </p>
        <h2 className="mt-3 text-2xl font-bold text-zinc-50 sm:text-4xl">
          Skills from this project
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {slide.offers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
            >
              <h3 className="font-semibold text-zinc-100">{offer.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {offer.description}
              </p>
              <div className="mt-4">
                <SkillChips skills={offer.skills} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center px-6 text-center sm:px-10">
      <p className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
        Next step
      </p>
      <h2 className="mt-4 text-3xl font-bold text-zinc-50 sm:text-4xl">
        Building something similar?
      </h2>
      <p className="mt-4 text-base text-zinc-400">
        I ship Flutter apps end-to-end — from auth and feeds to live video and store release.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-flex items-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
      >
        Discuss your project
      </Link>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <SkillChips skills={project.techStack} />
      </div>
    </div>
  );
}

interface CaseStudyPresenterProps {
  project: PortfolioProject;
  companyName: string;
}

export function CaseStudyPresenter({ project, companyName }: CaseStudyPresenterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const slides = useMemo<Slide[]>(() => {
    const list: Slide[] = [{ type: "hook" }, { type: "story" }];
    for (const pillar of project.pillars ?? []) {
      list.push({ type: "pillar", pillar });
    }
    if (project.skillOffers?.length) {
      list.push({ type: "skills", offers: project.skillOffers });
    }
    list.push({ type: "cta" });
    return list;
  }, [project]);

  const close = useCallback(() => {
    setOpen(false);
    setIndex(0);
    const params = new URLSearchParams(searchParams.toString());
    if (params.has("present")) {
      params.delete("present");
      const qs = params.toString();
      router.replace(qs ? `?${qs}` : `/portfolio/${project.id}`, { scroll: false });
    }
  }, [project.id, router, searchParams]);

  const openPresent = useCallback(() => {
    setIndex(0);
    setOpen(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("present", "1");
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => Math.min(slides.length - 1, Math.max(0, i + dir)));
    },
    [slides.length]
  );

  useEffect(() => {
    if (searchParams.get("present") === "1") {
      setOpen(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };

    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, go]);

  if (!project.pillars?.length) return null;

  const slide = slides[index];
  const progress = ((index + 1) / slides.length) * 100;

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={openPresent}
          className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400 transition-colors hover:bg-emerald-500/20"
        >
          <Presentation size={16} />
          Present to client
        </button>
        <button
          type="button"
          onClick={async () => {
            const url = `${window.location.origin}/portfolio/${project.id}?present=1`;
            try {
              await navigator.clipboard.writeText(url);
              setCopied(true);
              window.setTimeout(() => setCopied(false), 2000);
            } catch {
              window.prompt("Copy this present link:", url);
            }
          }}
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
        >
          <Maximize2 size={16} />
          {copied ? "Link copied" : "Copy present link"}
        </button>
      </div>

      <section className="mt-14">
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
          What shipped
        </p>
        <h2 className="mt-2 text-2xl font-bold text-zinc-50">Feature pillars</h2>
        <p className="mt-2 max-w-xl text-sm text-zinc-500">
          Eight areas owned end-to-end — use Present for a client walkthrough.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.icon];
            return (
              <article
                key={pillar.id}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition-colors hover:border-zinc-700"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950">
                    <Icon className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-zinc-100">{pillar.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{pillar.summary}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm text-zinc-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500/70" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <SkillChips skills={pillar.skills} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {project.skillOffers && project.skillOffers.length > 0 && (
        <section className="mt-14">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
            Skills
          </p>
          <h2 className="mt-2 text-2xl font-bold text-zinc-50">
            What this proves I can build
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.skillOffers.map((offer) => (
              <div
                key={offer.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
              >
                <h3 className="font-semibold text-zinc-100">{offer.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{offer.description}</p>
                <div className="mt-4">
                  <SkillChips skills={offer.skills} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <AnimatePresence>
        {open && slide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-zinc-950"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} presentation`}
          >
            <div className="h-1 w-full bg-zinc-900">
              <div
                className="h-full bg-emerald-500 transition-[width] duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <header className="flex items-center justify-between gap-4 border-b border-zinc-800/80 px-4 py-3 sm:px-6">
              <div className="min-w-0">
                <p className="truncate font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  {companyName} · Client deck
                </p>
                <p className="truncate text-sm font-medium text-zinc-300">{project.title}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-zinc-500">
                  {index + 1} / {slides.length}
                </span>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                  aria-label="Close presentation"
                >
                  <X size={18} />
                </button>
              </div>
            </header>

            <div className="relative min-h-0 flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.22 }}
                  className="absolute inset-0 overflow-y-auto py-8 sm:py-12"
                >
                  <SlideBody
                    slide={slide}
                    project={project}
                    companyName={companyName}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <footer className="flex items-center justify-between gap-4 border-t border-zinc-800/80 px-4 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={index === 0}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-300 disabled:opacity-30 hover:bg-zinc-900"
              >
                <ArrowLeft size={16} />
                Back
              </button>
              <div className="hidden items-center gap-1.5 sm:flex">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-emerald-400" : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => (index === slides.length - 1 ? close() : go(1))}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
              >
                {index === slides.length - 1 ? "Done" : "Next"}
                {index < slides.length - 1 && <ArrowRight size={16} />}
              </button>
            </footer>

            <p className="pb-3 text-center font-mono text-[10px] text-zinc-600">
              ← → or Space to navigate · Esc to exit
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
