import { siteConfig } from "@/data/site-config";
import { TrackedAnchor } from "@/components/seo/TrackedLink";

export function LpFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-content px-5 py-10 sm:px-6 lg:px-8">
        <p className="text-base font-semibold text-foreground">{siteConfig.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">{siteConfig.role}</p>
        <p className="mt-1 text-sm text-muted-foreground">{siteConfig.locationFull}</p>
        <TrackedAnchor
          href={`mailto:${siteConfig.email}`}
          event="email_click"
          eventParams={{ location: "lp_footer" }}
          className="mt-3 inline-block text-sm text-primary hover:text-primary-hover"
        >
          {siteConfig.email}
        </TrackedAnchor>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <a href="/privacy-policy" className="hover:text-foreground">
            Privacy
          </a>
          <a href="/terms-of-service" className="hover:text-foreground">
            Terms
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
