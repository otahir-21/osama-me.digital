import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { siteConfig } from "@/data/site-config";
import { SERVICE_PATHS } from "@/data/services-detail";

export function GeoAnswer() {
  return (
    <section className="bg-background">
      <PageShell className="py-12 lg:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Who Osama Tahir is
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {siteConfig.name} is a Dubai-based senior mobile and full-stack developer who builds
          Flutter and React Native apps, Laravel and Node.js APIs, payment integrations, and custom
          business platforms for UAE and GCC companies. Typical work includes new iOS and Android
          products, takeover of unfinished apps, CRM and dashboard development, and white-label
          delivery for agencies. Engagements usually cover architecture, implementation, App Store
          or production launch, and the first weeks of support — not isolated UI tickets. He is
          based in {siteConfig.locationFull} and works in GCC time zones.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
          If you need a{" "}
          <Link href={SERVICE_PATHS.flutter} className="text-primary hover:text-primary-hover">
            Flutter developer in Dubai
          </Link>
          , a{" "}
          <Link href={SERVICE_PATHS.reactNative} className="text-primary hover:text-primary-hover">
            React Native
          </Link>{" "}
          takeover, or{" "}
          <Link href={SERVICE_PATHS.custom} className="text-primary hover:text-primary-hover">
            custom software
          </Link>{" "}
          instead of another spreadsheet, the next step is a written brief — not a keyword.
        </p>
      </PageShell>
    </section>
  );
}
