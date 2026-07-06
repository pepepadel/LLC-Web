# Bluesport Consulting — Landing Page

Landing page for **Bluesport Consulting LLC** (New Mexico LLC), a strategic
advisory firm for high-ticket international sports transactions and
infrastructure projects.

## Structure

- `index.html` — Home page
- `pages/services.html` — Services detail (M&A + Infrastructure)
- `pages/contact.html` — Contact page with inquiry form
- `assets/css/lp-style.css` — All custom styles (prefix `lp-`)
- `assets/js/lp-script.js` — Form validation + mobile nav toggle
- `assets/img/logo-bluesport.svg` — Primary logo (navy + gold, SVG)
- `assets/img/favicon-bluesport.svg` — Favicon
- `preview/*.html` — **Local-only** preview wrappers (Bootstrap via CDN,
  full `<head>`) so you can view the site in a normal browser. Not for Odoo.

## Local preview (Windows PowerShell)

The files in `index.html` / `pages/*.html` are content fragments (no
`<head>`), so opening them directly with a double-click won't load
Bootstrap or the viewport meta tag. Use the `preview/` pages instead — they
wrap the real content with a full `<head>` and Bootstrap from a CDN, and
fetch the actual `index.html` / `pages/*.html` content live so the preview
always matches production.

Because `preview/*.html` uses `fetch()` to load the fragments, it must be
served over `http://`, not opened as a `file://` path. From PowerShell,
in the project root:

```powershell
# Requires Python (comes with most Windows installs, or install from python.org)
python -m http.server 8000
```

Then open in your browser:

```powershell
start http://localhost:8000/preview/home.html
start http://localhost:8000/preview/services.html
start http://localhost:8000/preview/contact.html
```

Press `Ctrl+C` in PowerShell to stop the server when done.

If you don't have Python, an equivalent with Node.js:

```powershell
npx http-server -p 8000
```

## Odoo Website Builder integration

Each `.html` file is a **content fragment only** — no `<html>`, `<head>`, or
`<body>` tags — so it can be pasted directly into an Odoo page via the
Website Builder's HTML/Code block, or split into individual snippets.

To wire it up in Odoo:

1. Upload `lp-style.css` and `lp-script.js` as **website assets** (Website >
   Configuration > Settings > Assets, or via a custom module's
   `assets.xml`), or paste their contents into Odoo's *Customize > Add
   Custom CSS/JS* fields for the page.
2. Upload the two SVGs to the Odoo media library and update the `src`
   attributes if the media URLs differ from `assets/img/...`.
3. Paste the content of `index.html`, `pages/services.html`, and
   `pages/contact.html` into three separate Odoo website pages
   (Home, Services, Contact), adjusting internal links
   (`pages/services.html` → the actual Odoo page URL, e.g. `/services`).
4. For the contact form, change `<form id="lp_contact_form" action="#">` in
   `pages/contact.html` to Odoo's form endpoint (`/website/form/` +
   `data-model_name`), following Odoo's standard "Form" building block
   conventions. The JS only does client-side validation — it does not
   intercept submission when the form is valid.
5. Bootstrap 5 is already bundled with Odoo, so no extra framework install
   is needed.

## Placeholders to replace before going live

Search for the following and replace with real data:

- `[EMAIL PLACEHOLDER]`
- `[PHONE PLACEHOLDER]`
- `[REGISTERED AGENT ADDRESS PLACEHOLDER]`

## Notes on positioning

Per project scope, the site avoids fabricated track record (no invented
founding dates, client names, or performance figures). Credibility is built
through narrow service focus, senior-led positioning language, and a
professional navy/gold visual identity — not simulated history.
