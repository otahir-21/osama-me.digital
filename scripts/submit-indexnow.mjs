/**
 * Submit canonical production URLs to IndexNow (Bing, Yandex, Naver, Seznam).
 *
 * Usage after a meaningful production deploy:
 *   INDEXNOW_KEY=a8f3c1e92b4d6e7a0c5f8d1b3e6a9c24 npm run indexnow
 *
 * Optional: pass extra URLs as args.
 *   npm run indexnow -- https://www.osama-me.digital/services
 */

const HOST = "www.osama-me.digital";
const KEY = process.env.INDEXNOW_KEY || "a8f3c1e92b4d6e7a0c5f8d1b3e6a9c24";

async function urlsFromSitemap() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) {
    throw new Error(`Could not fetch sitemap (${res.status}). Deploy first, then submit.`);
  }
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

async function main() {
  const extra = process.argv.slice(2).filter((url) => url.startsWith(`https://${HOST}`));
  const fromSitemap = await urlsFromSitemap();
  const urlList = [...new Set([...fromSitemap, ...extra])];

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList,
    }),
  });

  const body = await res.text();
  if (!res.ok && res.status !== 202) {
    console.error(`IndexNow failed: ${res.status} ${body}`);
    process.exit(1);
  }

  console.log(`IndexNow accepted ${urlList.length} URLs (HTTP ${res.status}).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
