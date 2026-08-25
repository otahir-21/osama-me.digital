"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#F7F5F1]/90 backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between px-5 py-4">
        <Link href="/" className="font-bold text-stone-800">
          {siteConfig.name.split(" ")[0]}
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-800"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-stone-200 px-3 py-3">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-lg px-3 py-3 text-sm font-medium",
                pathname === link.href
                  ? "bg-stone-100 text-indigo-700"
                  : "text-stone-500 hover:text-stone-800"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
