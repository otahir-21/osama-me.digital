import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { SERVICE_PATHS } from "@/data/services-detail";
import { TrackedAnchor } from "@/components/seo/TrackedLink";

export function Footer() {
  return (
    <footer className="bg-ink text-white/65">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-lg font-semibold text-white">
            Osama<span className="text-primary">.</span>
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
            {siteConfig.name} is a {siteConfig.role.toLowerCase()} in {siteConfig.locationFull},
            building mobile apps and digital platforms for UAE and GCC businesses.
          </p>
          <p className="mt-4 text-sm text-white/50">{siteConfig.recruiterAvailability}.</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {siteConfig.footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/65 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={SERVICE_PATHS.mobile} className="text-white/65 hover:text-white">
                Mobile app development
              </Link>
            </li>
            <li>
              <Link href={SERVICE_PATHS.rescue} className="text-white/65 hover:text-white">
                App rescue & maintenance
              </Link>
            </li>
            <li>
              <Link href={SERVICE_PATHS.custom} className="text-white/65 hover:text-white">
                Custom software & CRM
              </Link>
            </li>
            <li>
              <Link href={SERVICE_PATHS.partner} className="text-white/65 hover:text-white">
                Agency partnership
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.location}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/resume" className="text-white/65 hover:text-white">
              Recruiting for a senior mobile/full-stack role? View my resume →
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms
            </Link>
            <TrackedAnchor
              href={`mailto:${siteConfig.email}`}
              event="email_click"
              eventParams={{ location: "footer" }}
              className="hover:text-white"
            >
              {siteConfig.email}
            </TrackedAnchor>
          </div>
        </div>
      </div>
    </footer>
  );
}
