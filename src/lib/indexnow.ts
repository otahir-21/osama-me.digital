/**
 * IndexNow submission helper for Bing, Yandex, Naver, Seznam and others.
 *
 * Do not call this on every local build. Run after a production deploy that
 * created, materially updated, or removed public canonical URLs.
 *
 *   INDEXNOW_KEY=... npm run indexnow
 *
 * Key verification file: /public/{INDEXNOW_KEY}.txt
 * Live URL: https://www.osama-me.digital/{INDEXNOW_KEY}.txt
 */

export const DEFAULT_INDEXNOW_KEY = "a8f3c1e92b4d6e7a0c5f8d1b3e6a9c24";
export const INDEXNOW_HOST = "www.osama-me.digital";

export function getIndexNowKey() {
  return process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
}

export function indexNowKeyLocation(key = getIndexNowKey()) {
  return `https://${INDEXNOW_HOST}/${key}.txt`;
}

export async function submitIndexNow(urls: string[]) {
  const key = getIndexNowKey();
  const canonical = [...new Set(urls)].filter((url) =>
    url.startsWith(`https://${INDEXNOW_HOST}`)
  );

  if (canonical.length === 0) {
    throw new Error("No canonical production URLs to submit.");
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: INDEXNOW_HOST,
      key,
      keyLocation: indexNowKeyLocation(key),
      urlList: canonical,
    }),
  });

  if (!res.ok && res.status !== 200 && res.status !== 202) {
    const body = await res.text();
    throw new Error(`IndexNow failed (${res.status}): ${body}`);
  }

  return { ok: true, status: res.status, submitted: canonical.length };
}
