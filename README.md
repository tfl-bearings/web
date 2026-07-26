# uni

A University of Greenwich website clone built for web-development practice, using **Next.js 16**, **React 19** and **Tailwind CSS v4**.

> **Educational project only** — not affiliated with or endorsed by the University of Greenwich. Do not deploy this publicly with the university's branding.

## Features

- 12 pages mirroring the real site's structure: home, study, subjects A–Z, international, research, partnerships, clearing, course search, news, open days, campuses and contact
- Working course finder — live text search plus level / subject / campus filters, driven by URL params (`/courses?subject=law`)
- Mega-menu navigation with mobile accordion menu, sticky header and search panel
- News grid with tag filtering, demo booking/contact forms with success states
- Exact brand palette sampled from the live site's CSS, square-cornered design system, and Cooper Hewitt typography (open-source SIL OFL font, self-hosted)

## Getting started

```powershell
npm install
.\scripts\fetch-assets.ps1   # downloads the brand images for local use
npm run dev
```

Then open http://localhost:3000.

## Why is there a fetch script?

The university's logo, photography and accreditation badges are their property, so they are **not committed** to this repository. `scripts/fetch-assets.ps1` downloads them from the live site into `public/images/real/` (git-ignored) so the clone renders fully on your machine.
