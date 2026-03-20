import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { ExitIntentPopup } from "@/components/ui/ExitIntentPopup";
import { siteConfig } from "@/data/site-config";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Web Developer & Digital Marketing Specialist Dubai, UAE`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Digital marketing specialist UAE",
    "Digital marketing specialist Dubai",
    "Digital marketing specialist Abu Dhabi",
    "Free software Dubai",
    "Free software UAE",
    "Digital marketing freelancer UAE",
    "SEO expert Dubai",
    "SEO expert Abu Dhabi",
    "Web developer Dubai",
    "Web developer Abu Dhabi",
    "Google Ads specialist UAE",
    "Social media marketing Dubai",
    "Freelance digital marketing UAE",
    "Freelance web developer Dubai",
    "Website design Dubai",
    "Marketing consultant Dubai",
    "Marketing consultant Abu Dhabi",
    "Web developer Sharjah",
    "SEO services Abu Dhabi",
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
    title: `${siteConfig.name} | Web Developer & Digital Marketing Specialist Dubai, UAE`,
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
    title: `${siteConfig.name} | Web Developer & Digital Marketing Specialist Dubai, UAE`,
    description: siteConfig.description,
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${jetbrainsMono.variable} min-h-screen bg-white font-sans text-zinc-900 antialiased`}>
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
          <Navbar />
          <main className="pb-20 md:pb-0">{children}</main>
          <Footer />
        </SmoothScroll>
        <StickyMobileCTA />
        <WhatsAppButton />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
