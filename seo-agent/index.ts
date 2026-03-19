/**
 * SEO Agent for osama-me.digital
 *
 * Autonomous agent that scans the Next.js codebase for SEO issues
 * and directly edits the source files to fix them.
 *
 * Runs daily via GitHub Actions.
 * Requires: ANTHROPIC_API_KEY environment variable
 */

import { query } from "@anthropic-ai/claude-agent-sdk";

const SITE_URL = "https://osama-me.digital";
const PROJECT_ROOT = process.env.GITHUB_WORKSPACE ?? process.cwd().replace("/seo-agent", "");

const SEO_AGENT_PROMPT = `
You are an expert SEO engineer and Next.js developer. Your job is to audit and fix the website at ${SITE_URL} by directly editing the source code in ${PROJECT_ROOT}.

This is a Next.js 16 (App Router) TypeScript website for Osama Tahir — a freelance Web Developer & Digital Marketing Specialist based in Dubai, UAE.
His goal: rank #1 in Google for "web developer dubai", "digital marketing specialist dubai", "seo services dubai", "freelance web developer dubai", "website design dubai", and related UAE keywords to generate client leads.

## YOUR MISSION
Perform a full SEO audit and FIX every issue you find. Do not just report — actually edit the files.

## AUDIT & FIX CHECKLIST

### 1. META TAGS (src/app/**/page.tsx, src/app/layout.tsx)
- Every page must have a unique <title> (50-60 chars) with primary keyword + "Dubai" or "UAE"
- Every page must have a unique <meta description> (140-160 chars) that is compelling with a CTA
- Check generateMetadata() exports on every page
- Fix missing, duplicate, or weak titles/descriptions
- Homepage title must target: "Web Developer & Digital Marketing Specialist Dubai"
- Services pages must each target their specific keyword (e.g. "SEO Services Dubai", "Web Design Dubai")

### 2. OPEN GRAPH & TWITTER CARDS (src/app/**/page.tsx)
- Every page needs og:title, og:description, og:image, og:url, og:type
- Service pages: og:type should be "website", blog posts: "article" with publishedTime + authors
- Twitter card type should be "summary_large_image"
- Fix any missing OG/Twitter meta
- Blog posts already have OG — verify service pages also have full OG tags

### 3. SCHEMA MARKUP (src/lib/schema.ts)
- Homepage: Person + LocalBusiness + ProfessionalService + FAQ schemas ✅ (verify they're correct)
- Services pages: Service + FAQ + Breadcrumb schemas ✅ (verify complete)
- Blog posts: BlogPosting schema with image field ✅ (verify)
- MISSING: Add AggregateRating schema to testimonials page (src/app/testimonials/page.tsx)
  - Use rating: 5.0, ratingCount: based on actual testimonials count, reviewCount: same
  - Add as JSON-LD in the page
- MISSING: Add sameAs links to Person and LocalBusiness schemas in src/lib/schema.ts:
  - LinkedIn: "https://www.linkedin.com/in/otahir21"
  - Instagram: "https://www.instagram.com/otahir212/"
  - Twitter: "https://x.com/otahir212"
  - Facebook: "https://www.facebook.com/share/1BF46PTFmM/"
  - GitHub: "https://github.com/otahir-21"
- MISSING: Add Review schema items on testimonials page for each individual testimonial
- Verify all schema is valid JSON-LD and has no TypeScript errors

### 4. HEADING STRUCTURE (src/app/**/page.tsx, src/components/**)
- One H1 per page, must contain primary keyword
- H2s for major sections, H3s for subsections
- No skipped heading levels
- Fix heading hierarchy issues

### 5. FAVICON SET (public/)
- Check if favicon.ico exists in public/ — if missing, create a simple one
- Check if apple-touch-icon.png exists — if missing, note it needs to be added
- Check src/app/layout.tsx icons metadata — add if missing:
  icon: [{ url: "/favicon.ico" }, { url: "/favicon-16x16.png", sizes: "16x16" }, { url: "/favicon-32x32.png", sizes: "32x32" }]
  apple: [{ url: "/apple-touch-icon.png" }]
- If favicon files don't exist in public/, create a minimal favicon.ico placeholder using Bash

### 6. CUSTOM 404 PAGE (src/app/not-found.tsx)
- Check if src/app/not-found.tsx exists
- If missing, CREATE it with:
  - Clear "Page Not Found" message
  - Link back to homepage
  - Links to main services (web dev, SEO, Google Ads)
  - Contact CTA
  - Proper styling matching the site (zinc-50 bg, amber-500 accents)
  - No "use client" needed — keep as server component

### 7. LOCATION PAGES — CRITICAL FOR LOCAL SEO
Create new service pages for other UAE emirates to rank beyond Dubai:
- Check if src/app/services/web-developer-abu-dhabi/page.tsx exists — if not, CREATE it
- Check if src/app/services/seo-services-abu-dhabi/page.tsx exists — if not, CREATE it
- Check if src/app/services/web-developer-sharjah/page.tsx exists — if not, CREATE it
- Check if src/app/services/digital-marketing-sharjah/page.tsx exists — if not, CREATE it

Each location page must:
- Have H1: "[Service] in [City], UAE | Osama Tahir"
- Target keyword: "[service] [city]" e.g. "web developer abu dhabi"
- Have unique 400+ word content about serving that emirate's businesses
- Include LocalBusiness schema with the emirate's name
- Include FAQ section (3-5 questions specific to that location)
- Link to the main Dubai service page
- Be added to sitemap with priority 0.8

Use the existing service page pattern from src/app/services/web-development-dubai/ as a template.
Keep pages simple — reuse ServicePageTemplate if it exists, otherwise build a clean page component.

### 8. CONVERSION TRACKING — GA4 EVENTS (src/app/layout.tsx or src/components/**)
- Check if GA4 conversion events are tracked. Look for gtag() calls beyond pageview.
- If missing, add client-side event tracking for:
  a) Contact form submission → gtag('event', 'generate_lead', { event_category: 'contact' })
  b) WhatsApp button click → gtag('event', 'whatsapp_click', { event_category: 'contact' })
  c) Calendly link click → gtag('event', 'calendly_click', { event_category: 'contact' })
  d) Primary CTA buttons ("Book Free Call", "Get Quote") → gtag('event', 'cta_click', { event_label: buttonText })
- Find where WhatsApp button is rendered (likely src/components/ui/WhatsAppButton.tsx or similar)
- Find where contact form submits (src/app/contact/page.tsx or src/app/api/contact/route.ts)
- Add onClick tracking handlers to these components
- Keep changes minimal — just add gtag() calls, don't refactor the components

### 9. IMAGES (src/components/**/*, src/app/**/*.tsx)
- Every <img> tag must become Next.js <Image> component
- Every image must have descriptive alt text with keywords
- Fix missing or poor alt text

### 10. INTERNAL LINKING
- Services should link to related blog posts and vice versa
- Ensure homepage links to all service pages
- Add breadcrumb navigation where missing
- Blog posts should link to relevant service pages (check internal-links.ts)

### 11. SITEMAP (src/app/sitemap.ts)
- All pages must be in sitemap including new location pages
- Priority: homepage=1.0, services=0.9, location pages=0.8, blog=0.8, other=0.7
- lastModified should be current date: ${new Date().toISOString().split("T")[0]}
- changeFrequency: homepage='weekly', blog='daily', services='monthly'
- Add any new location pages created in step 7

### 12. ROBOTS.TXT (src/app/robots.ts)
- Allow all legitimate crawlers including AI bots
- Allow: GPTBot, ClaudeBot, PerplexityBot, Googlebot, Bingbot, Google-Extended
- Disallow: /api/, /_next/
- Sitemap URL must be absolute: ${SITE_URL}/sitemap.xml

### 13. LLMS.TXT (src/app/llms.txt/route.ts)
- Verify it exists and describes Osama's full expertise
- Must include: services, location (Dubai + all UAE emirates), target clients, contact info
- Update with any new services or location pages added today

### 14. LOCAL SEO
- Every service page must mention "Dubai" and "UAE" in first paragraph
- NAP consistency: Name "Osama Tahir", Address "Dubai, UAE", Phone "+971507276823"
- Verify these are consistent across all schema and contact page
- Add "serving all UAE emirates" messaging where appropriate

### 15. KEYWORD TARGETING — PRIMARY TARGETS
Ensure these keywords appear naturally on the right pages:
- "web developer dubai" → homepage, web-development-dubai service page
- "digital marketing specialist dubai" → homepage, about page
- "seo services dubai" → seo-services-dubai service page
- "freelance web developer dubai" → homepage H1 or first paragraph
- "website design dubai" → web-development-dubai service page
- "google ads specialist dubai" → google-ads-management-dubai service page
- "shopify developer dubai" → shopify-development-dubai service page
- "wordpress developer dubai" → wordpress-development-dubai service page
- "mobile app developer dubai" → mobile-app-development-dubai service page

## HOW TO WORK
1. Use Glob to discover all .tsx, .ts files in src/ and check public/
2. Read each page file to audit its SEO
3. Work through each checklist item — actually edit/create files
4. After creating location pages, update sitemap.ts to include them
5. Run: cd ${PROJECT_ROOT} && npx tsc --noEmit 2>&1 | head -50 to check TypeScript errors
6. Fix any TypeScript errors introduced
7. Verify all imports are correct

## IMPORTANT RULES
- Make real edits — do not just describe what to do
- Keep the existing code style and formatting
- Do not break existing functionality
- Keep location pages focused and unique — not just copy-paste of Dubai pages
- Do not add fake testimonials or fake reviews — use actual data from src/data/testimonials.ts
- When adding GA4 events, use window.gtag if available (check typeof window !== 'undefined')

Start with the highest impact items first: location pages → AggregateRating schema → sameAs schema → custom 404 → conversion tracking → favicon → other fixes.
`;

async function runSeoAgent() {
  console.log("🚀 SEO Agent starting...");
  console.log(`📁 Project root: ${PROJECT_ROOT}`);
  console.log(`🌐 Site: ${SITE_URL}`);
  console.log(`⏰ Run time: ${new Date().toISOString()}`);
  console.log("─".repeat(60));

  let totalMessages = 0;
  let fixesApplied = 0;

  try {
    for await (const message of query({
      prompt: SEO_AGENT_PROMPT,
      options: {
        cwd: PROJECT_ROOT,
        allowedTools: [
          "Read",
          "Write",
          "Edit",
          "Bash",
          "Glob",
          "Grep",
          "WebFetch",
        ],
        permissionMode: "acceptEdits",
        maxTurns: 100,
        model: "claude-opus-4-6",
      },
    })) {
      totalMessages++;

      if ("result" in message) {
        console.log("\n" + "═".repeat(60));
        console.log("✅ SEO AGENT COMPLETED");
        console.log("═".repeat(60));
        console.log(message.result);
        console.log(`\n📊 Total agent turns: ${totalMessages}`);
      } else if (message.type === "assistant") {
        // Print agent thinking/actions
        if (Array.isArray(message.message?.content)) {
          for (const block of message.message.content) {
            if (block.type === "text" && block.text) {
              process.stdout.write(block.text);
              // Count fixes
              if (
                block.text.includes("Fixed") ||
                block.text.includes("Updated") ||
                block.text.includes("Added")
              ) {
                fixesApplied++;
              }
            } else if (block.type === "tool_use") {
              if (block.name === "Edit" || block.name === "Write") {
                const filePath = (block.input as Record<string, string>)
                  ?.file_path;
                console.log(`\n🔧 Editing: ${filePath}`);
                fixesApplied++;
              } else if (block.name === "Bash") {
                console.log(`\n⚡ Running: ${(block.input as Record<string, string>)?.command?.slice(0, 80)}...`);
              }
            }
          }
        }
      }
    }

    console.log(`\n✨ Fixes applied: ${fixesApplied}`);
    console.log("🏁 Agent run complete.");
    process.exit(0);
  } catch (error) {
    console.error("\n❌ SEO Agent failed:", error);
    process.exit(1);
  }
}

runSeoAgent();
