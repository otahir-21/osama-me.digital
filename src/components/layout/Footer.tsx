import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { SERVICE_PATHS } from "@/data/services-detail";
import { TrackedAnchor } from "@/components/seo/TrackedLink";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-lg font-semibold text-zinc-50">
            Osama<span className="text-emerald-400">.</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-500">
            {siteConfig.name} is a {siteConfig.role.toLowerCase()} in {siteConfig.locationFull},
            building mobile apps and digital platforms for UAE and GCC businesses.
          </p>
          <p className="mt-4 text-sm text-zinc-600">{siteConfig.recruiterAvailability}.</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {siteConfig.footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-zinc-400 transition-colors hover:text-zinc-100">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={SERVICE_PATHS.mobile} className="text-zinc-400 hover:text-zinc-100">
                Mobile app development
              </Link>
            </li>
            <li>
              <Link href={SERVICE_PATHS.rescue} className="text-zinc-400 hover:text-zinc-100">
                App rescue & maintenance
              </Link>
            </li>
            <li>
              <Link href={SERVICE_PATHS.custom} className="text-zinc-400 hover:text-zinc-100">
                Custom software & CRM
              </Link>
            </li>
            <li>
              <Link href={SERVICE_PATHS.partner} className="text-zinc-400 hover:text-zinc-100">
                Agency partnership
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.location}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/resume" className="text-zinc-500 hover:text-zinc-300">
              Recruiting for a senior mobile/full-stack role? View my resume →
            </Link>
            <Link href="/privacy-policy" className="hover:text-zinc-400">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-zinc-400">
              Terms
            </Link>
            <TrackedAnchor
              href={`mailto:${siteConfig.email}`}
              event="email_click"
              eventParams={{ location: "footer" }}
              className="hover:text-zinc-400"
            >
              {siteConfig.email}
            </TrackedAnchor>
          </div>
        </div>
      </div>
    </footer>
  );
}
