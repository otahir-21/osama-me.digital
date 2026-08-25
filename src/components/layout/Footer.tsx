import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { SERVICE_PATHS } from "@/data/services-detail";
import { TrackedAnchor } from "@/components/seo/TrackedLink";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-lg font-semibold text-stone-50">
            Osama<span className="text-indigo-400">.</span>
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400">
            {siteConfig.name} is a {siteConfig.role.toLowerCase()} in {siteConfig.locationFull},
            building mobile apps and digital platforms for UAE and GCC businesses.
          </p>
          <p className="mt-4 text-sm text-stone-500">{siteConfig.recruiterAvailability}.</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {siteConfig.footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-stone-400 transition-colors hover:text-stone-50">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={SERVICE_PATHS.mobile} className="text-stone-400 hover:text-stone-50">
                Mobile app development
              </Link>
            </li>
            <li>
              <Link href={SERVICE_PATHS.rescue} className="text-stone-400 hover:text-stone-50">
                App rescue & maintenance
              </Link>
            </li>
            <li>
              <Link href={SERVICE_PATHS.custom} className="text-stone-400 hover:text-stone-50">
                Custom software & CRM
              </Link>
            </li>
            <li>
              <Link href={SERVICE_PATHS.partner} className="text-stone-400 hover:text-stone-50">
                Agency partnership
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.location}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/resume" className="text-stone-400 hover:text-stone-200">
              Recruiting for a senior mobile/full-stack role? View my resume →
            </Link>
            <Link href="/privacy-policy" className="hover:text-stone-300">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-stone-300">
              Terms
            </Link>
            <TrackedAnchor
              href={`mailto:${siteConfig.email}`}
              event="email_click"
              eventParams={{ location: "footer" }}
              className="hover:text-stone-300"
            >
              {siteConfig.email}
            </TrackedAnchor>
          </div>
        </div>
      </div>
    </footer>
  );
}
