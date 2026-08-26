"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

function isConversionPath(pathname: string) {
  return pathname.startsWith("/lp/") || pathname.startsWith("/thank-you/");
}

/** Site chrome for organic pages. Hidden on PPC landing and thank-you routes. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const conversion = isConversionPath(pathname);

  if (conversion) {
    return <main id="main-content">{children}</main>;
  }

  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
