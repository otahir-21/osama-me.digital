# osama-me.digital

**Premium personal portfolio for Osama Tahir** — Freelance Web Developer & Digital Marketing Specialist based in Dubai, UAE.

A modern, fully responsive, high-converting portfolio website built with Next.js, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

---

## Features

- **Dark luxury design** — Premium aesthetic with amber accents
- **Fully responsive** — Mobile-first, works on all devices
- **SEO optimized** — Metadata, JSON-LD schema, sitemap, robots.txt
- **Smooth animations** — Framer Motion with reduced-motion support
- **Conversion-focused** — CTAs, contact form, WhatsApp, Calendly
- **Fast & accessible** — Core Web Vitals friendly, semantic HTML

## Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 16 | App Router, SSR, API routes |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Shadcn/ui | UI components |
| Lucide Icons | Icons |

## Pages

| Page | Description |
|------|-------------|
| Home | Hero, services, portfolio, process, testimonials, FAQ |
| About | Story, experience timeline, skills |
| Services | 8 detailed service sections with pricing |
| Portfolio | Case studies with results |
| Testimonials | Client reviews |
| Contact | Form, WhatsApp, Calendly, FAQ |
| Blog | Listing + article template |
| Privacy Policy & Terms | Legal pages |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/otahir-21/osama-me.digital.git
cd osama-me.digital

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Configuration

Edit `src/data/site-config.ts` to customize:

- **Profile** — Name, role, location, tagline
- **Contact** — Email, WhatsApp, Calendly URL
- **Social** — LinkedIn, Twitter, Instagram
- **Content** — Services, stats, process steps

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
├── data/             # Config & content
└── lib/              # Utilities & schema
```

## Deployment

Deploy to **Vercel** (recommended), Netlify, or any Node.js hosting:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/otahir-21/osama-me.digital)

### Domain must point to the Next.js app

**Important:** The live domain (e.g. `osama-me.digital`) must point to where this Next.js app is deployed (e.g. Vercel), **not** to a WordPress or LiteSpeed server.

- If the domain points to WordPress/LiteSpeed (e.g. you see `?LSCWP_CTRL=...` in the URL), the server will not have the app’s `_next/static` files, so the page will stay blank and show 404s for JS/CSS.
- In Vercel: add the domain in **Project → Settings → Domains** and set your DNS (A/CNAME) to Vercel’s values. Remove any A/CNAME that points to the old WordPress/LiteSpeed host.
- After changing DNS, wait for propagation and redeploy with “Clear build cache” so the latest build is served.

## Contact Form (SMTP)

The contact form sends emails via Hostinger SMTP to info@osama-me.digital.

1. Copy `.env.example` to `.env.local`
2. Set `SMTP_PASS` to your Hostinger email account password
3. Get credentials from Hostinger hPanel > Email > Connect Apps & Devices

```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_USER=info@osama-me.digital
SMTP_PASS=your-password
```

## License

Private — All rights reserved.
