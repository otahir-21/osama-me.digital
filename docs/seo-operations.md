# SEO operations (manual)

Canonical host: `https://www.osama-me.digital`

## Search Console / Webmaster verification

Set these on the production host (build-time env) and redeploy. Do not commit tokens.

- `GOOGLE_SITE_VERIFICATION` — Google Search Console HTML tag token
- `BING_SITE_VERIFICATION` — Bing Webmaster Tools `msvalidate.01` token

The app injects them as meta tags from `src/app/layout.tsx`.

## IndexNow (Bing, Yandex, Naver, Seznam)

Key file (already in the repo):

- `https://www.osama-me.digital/a8f3c1e92b4d6e7a0c5f8d1b3e6a9c24.txt`

Optional override: `INDEXNOW_KEY` (must match the filename in `public/{key}.txt`).

After a deploy that **creates, materially updates, or deletes** public pages:

```bash
npm run indexnow
```

Do not run this on every local save. Do not submit staging URLs.

## Analytics

GA4 property `G-N9M49GTXJW` is already loaded. Conversion events:

- `start_a_project_click`
- `contact_form_submit`
- `calendly_click`
- `whatsapp_click`
- `email_click`
- `case_study_cta`
- `service_cta`
- `schedule_a_call_click`

Form field values are not sent to analytics.

## Domain email

Public contact is `info@osama-me.digital` (already used by SMTP). Do not publish a Gmail address.
