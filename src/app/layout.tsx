import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { siteConfig } from "@/data/site-config";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role} — Dubai, UAE`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Full-stack developer Dubai",
    "Flutter developer UAE",
    "React Native developer Dubai",
    "Laravel developer UAE",
    "Mobile app developer Dubai",
    "Backend API developer UAE",
    "Senior software engineer Dubai",
    "Fintech developer UAE",
    "Full-stack developer Saudi Arabia",
    "Mobile app developer GCC",
    "osama-me.digital",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.role} — Dubai, UAE`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@osama_tahir",
    creator: "@osama_tahir",
    title: `${siteConfig.name} | ${siteConfig.role} — Dubai, UAE`,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  manifest: "/manifest.json",
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${jetbrainsMono.variable} min-h-screen bg-zinc-950 font-sans text-zinc-100 antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N9M49GTXJW"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N9M49GTXJW');
          `}
        </Script>
        <SmoothScroll>
          <Sidebar />
          <div className="lg:pl-72">
            <MobileHeader />
            <main className="min-h-screen pb-24 md:pb-0">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
        <StickyMobileCTA />
        <WhatsAppButton />
      </body>
    </html>
  );
}
