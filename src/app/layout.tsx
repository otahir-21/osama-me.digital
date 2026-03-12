import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { ExitIntentPopup } from "@/components/ui/ExitIntentPopup";
import { siteConfig } from "@/data/site-config";
import {
  getPersonSchema,
  getProfessionalServiceSchema,
  getLocalBusinessSchema,
  getFAQSchema,
} from "@/lib/schema";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Digital Marketing Specialist UAE - Dubai, Abu Dhabi`,
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
    "Marketing consultant Dubai",
    "Marketing consultant Abu Dhabi",
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
    title: `${siteConfig.name} | Digital Marketing Specialist UAE - Dubai, Abu Dhabi`,
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
    title: `${siteConfig.name} | Digital Marketing Specialist UAE - Dubai, Abu Dhabi`,
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
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#18181b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaScripts = [
    getPersonSchema(),
    getProfessionalServiceSchema(),
    getLocalBusinessSchema(),
    getFAQSchema(),
  ];

  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${dmSans.variable} ${jetbrainsMono.variable} min-h-screen bg-zinc-950 font-sans text-zinc-100 antialiased`}>
        {schemaScripts.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <Navbar />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <WhatsAppButton />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
