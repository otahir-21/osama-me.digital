"use client";

import Link from "next/link";
import { Linkedin, Twitter, Instagram, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-md text-sm text-zinc-400">
              Freelance web developer and digital marketing specialist in Dubai. I help small
              businesses, startups, and e-commerce brands grow online with websites, SEO, and
              performance marketing.
            </p>
            <div className="mt-6 flex gap-4">
              {Object.entries(socialIcons).map(([key, Icon]) => (
                <a
                  key={key}
                  href={siteConfig.social[key as keyof typeof socialIcons]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-amber-400"
                  aria-label={key}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
            <span className="flex items-center gap-2 text-sm text-zinc-400">
              <MapPin size={16} />
              {siteConfig.location}
            </span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="/privacy-policy" className="hover:text-zinc-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-zinc-400">
              Terms of Service
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
