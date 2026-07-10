"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-zinc-800/80 bg-zinc-950 px-8 py-12 lg:flex">
      <div>
        <Link href="/" className="group block">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/20 to-zinc-800 ring-1 ring-zinc-800">
            <Image
              src="/profile.png"
              alt={siteConfig.name}
              fill
              className="object-cover object-top"
              sizes="80px"
              priority
            />
          </div>
          <h1 className="mt-4 text-xl font-bold tracking-tight text-zinc-100 group-hover:text-emerald-400 transition-colors">
            {siteConfig.name}
          </h1>
          <p className="mt-1 text-sm text-zinc-500">{siteConfig.role}</p>
        </Link>

        <nav className="mt-12 space-y-1">
          {siteConfig.navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-zinc-900 text-emerald-400"
                    : "text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-100"
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    active ? "bg-emerald-400" : "bg-zinc-700"
                  )}
                />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto space-y-6">
        <p className="text-xs leading-relaxed text-zinc-600">
          {siteConfig.location}
          <br />
          <span className="text-emerald-400/90">{siteConfig.availability}</span>
        </p>

        <div className="flex gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-zinc-100"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-zinc-100"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-zinc-500 transition-colors hover:text-zinc-100"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </aside>
  );
}
