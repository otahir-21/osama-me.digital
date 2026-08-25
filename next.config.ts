import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  // Do not keep serving a previous HTML/RSC payload for 5 minutes after a deploy.
  expireTime: 0,
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 30,
    },
  },
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/services/web-development-dubai",
        destination: "/services/custom-software-development-dubai",
        permanent: true,
      },
      {
        source: "/services/seo-services-dubai",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/google-ads-management-dubai",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/social-media-marketing-uae",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/landing-page-design-uae",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/shopify-development-dubai",
        destination: "/services/custom-software-development-dubai",
        permanent: true,
      },
      {
        source: "/services/wordpress-development-dubai",
        destination: "/services/custom-software-development-dubai",
        permanent: true,
      },
      {
        source: "/services/website-maintenance-uae",
        destination: "/services/app-rescue-maintenance",
        permanent: true,
      },
      {
        source: "/services/aws-management-uae",
        destination: "/services/custom-software-development-dubai",
        permanent: true,
      },
      { source: "/testimonials", destination: "/", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
