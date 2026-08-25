"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail } from "lucide-react";

function UpworkIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h3.782l1.008-4.71c.496.836 1.096 1.569 1.851 2.168z" />
    </svg>
  );
}
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-stone-200 bg-[#F7F5F1] px-8 py-12 lg:flex">
      <div>
        <Link href="/" className="group block">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <Image
              src="/profile.png"
              alt={siteConfig.name}
              fill
              className="object-cover object-top"
              sizes="80px"
              priority
            />
          </div>
          <h1 className="mt-4 text-xl font-bold tracking-tight text-stone-800 group-hover:text-indigo-700 transition-colors">
            {siteConfig.name}
          </h1>
          <p className="mt-1 text-sm text-stone-500">{siteConfig.role}</p>
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
                    ? "bg-stone-100 text-indigo-700"
                    : "text-stone-500 hover:bg-stone-100 hover:text-stone-800"
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    active ? "bg-indigo-600" : "bg-stone-300"
                  )}
                />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto space-y-6">
        <p className="text-xs leading-relaxed text-stone-500">
          {siteConfig.location}
          <br />
          <span className="text-indigo-700">{siteConfig.availability}</span>
        </p>

        <div className="flex gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 transition-colors hover:text-stone-800"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 transition-colors hover:text-stone-800"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={siteConfig.social.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 transition-colors hover:text-stone-800"
            aria-label="Upwork"
          >
            <UpworkIcon />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-stone-400 transition-colors hover:text-stone-800"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </aside>
  );
}
