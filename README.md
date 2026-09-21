# Analog WakaTime — maintenance page

Standalone React/Vite page for the database migration. Uses the main frontend’s
palette (`#0e0e10`, `#4d9ef7`) and languages: `en`, `ru`, `se`, `uk`, `pl`.
The existing `lang` cookie takes precedence, followed by browser language and
English. Swedish keeps the frontend’s `se` cookie value with valid HTML `lang="sv"`.
Translations live in `src/translations.ts`. No backend or external font requests
are required. The refresh button reloads the current URL.

Install dependencies with `npm install`, then start locally with `npm run dev`.
Production builds are performed by the repository owner, per `../code_style.md`.

When deploying, configure the reverse proxy to return **HTTP 503** for the
maintenance document, including deep links. Serve the JS, CSS and favicon assets
normally; the UI itself cannot set the HTTP response status. Avoid caching the
maintenance document after service recovery.

## Advance email notice

Root files `../smtp-migration-notice.html` and `../smtp-migration-notice.txt`
contain the advance notice in all five languages, with an estimated outage of
1–3 days. They are standalone email bodies, without template placeholders.

For the existing SMTP endpoint `POST /api/v1/main/smtp/send`, pass the HTML file
contents as `body_html`, the text file contents as `body_text`, and supply
`to_email` and `subject`, with the `X-Service-Key` header. Suggested subject:
`Analog WakaTime — плановая миграция / planned migration (1–3 days)`.
No email is sent automatically. Add the confirmed start date before sending if
one is available.
