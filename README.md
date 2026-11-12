# ptos.dev

The official pTOS landing page: **https://ptos.dev**. pTOS is a portable,
TOS-compatible operating system derived from EmuTOS. Its source and development
activity live at https://github.com/kelihlodversson/pTOS.

## Local development

Use Node.js 24 LTS and npm. Astro generates static HTML and CSS with no browser
JavaScript, external font services, backend, or UI framework.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The development server is normally at http://localhost:4321. Production output
is written to `dist/`; preview serves that output locally.

## Editing

- `src/pages/index.astro`: homepage content.
- `src/layouts/Layout.astro`: shared document and metadata.
- `src/styles/global.css`: responsive styles.
- `public/images/pterry-original.jpg`: unchanged supplied pTerry illustration.
- `public/images/pterry.webp` and `pterry-640.webp`: optimized responsive copies.

When updating authorized artwork, preserve the original and regenerate both WebP
sizes, retaining proportions and any transparency. Update image dimensions,
alt text and Open Graph metadata if needed. The current original is an opaque
1254 × 1254 JPEG; WebP copies use quality 91. No mascot has been redrawn.
The favicon is a typographic `p` using the site's rust accent.

Keep future pages in `src/pages/` and reuse the layout. Downloads, documentation
and news remain outside the current scope. Verify technical claims
against the pTOS readme and current source documentation before changing copy.

## Deployment and domain

`.github/workflows/deploy.yml` builds on pushes to `main` and manual dispatch,
then deploys `dist/` with the official GitHub Pages actions. Dependencies are
locked; actions are pinned to release commit SHAs. The `github-pages` environment
records production deployments. No Cloudflare secrets are required by the build.

Repository **Settings → Pages** controls the publishing source (GitHub Actions),
custom domain (`ptos.dev`) and HTTPS enforcement. The domain is configured there,
not in a source CNAME file. Astro's canonical origin is in `astro.config.mjs`.

Cloudflare provides DNS, TLS termination, reverse proxying and standard static
asset caching; GitHub Pages hosts the files. Apex DNS uses GitHub's four
`185.199.108.153` through `185.199.111.153` A records. `www` is a CNAME to
`kelihlodversson.github.io`; GitHub Pages redirects it to the configured apex.
Use DNS-only records until GitHub provisions its apex and www certificate, then
enable proxying and Cloudflare **Full (strict)** TLS. Keep HTML on standard caching
(no Cache Everything rule); retain origin cache headers. Never use Flexible TLS.

## Troubleshooting

1. Check the Actions deployment run: installation/build errors are in `build`,
   publication and permission errors in `deploy`. Reproduce with `npm ci` and
   `npm run build` on Node 24.
2. Check Settings → Pages for the correct custom domain, DNS check and certificate.
   New certificates can take time; enable Enforce HTTPS when available.
3. Confirm Cloudflare apex A records and www CNAME, with no conflicting records,
   redirects, Worker routes or HTML cache rules. Verify both hostnames over HTTPS.
4. A Cloudflare 526 indicates origin certificate validation failed: check GitHub's
   certificate and domain assignment. Temporarily use DNS-only for provisioning;
   keep Full (strict), and restore proxying after origin HTTPS validates.
5. If content is stale, compare the deployed commit in Actions, then purge only
   affected Cloudflare URLs if necessary. Avoid long-lived HTML cache overrides.

The existing LICENSE is preserved.

## CDN configuration

Cloudflare proxying was enabled on 2026-11-12 for all four apex A records and
for the `www` CNAME. SSL/TLS mode is **Full (strict)**. GitHub Pages reports an
approved certificate covering `ptos.dev` and `www.ptos.dev`, and HTTPS enforcement
is enabled. GitHub Pages remains the origin and handles the canonical www-to-apex
redirect; no Worker, Cloudflare Pages site or redirect rule was introduced.

Cloudflare uses standard static-file caching. Browser Cache TTL is set to
**Respect Existing Headers** (`0` in the API), retaining GitHub's cache policy.
There is no Cache Everything rule or HTML cache override. Content-hashed Astro
CSS uses new URLs on change; unversioned artwork and fonts follow origin TTLs.

Configuration was read back successfully from Cloudflare. End-to-end HTTPS,
cache response headers and the www redirect could not be verified from the
execution environment because public URL access was blocked. To verify from an
unrestricted connection, run `curl -I https://ptos.dev`, repeat against a static
asset to inspect `cf-cache-status`, and run `curl -IL https://www.ptos.dev` to
confirm the apex redirect without a TLS error or loop. New DNS proxy settings
may take several minutes to propagate. Do not weaken TLS if an origin error
appears; check the GitHub certificate and domain assignment instead.

## Title-bar font

The decorative pTerry title bar uses the supplied Atari ST 8x16 System Font
by divVerent, self-hosted at `public/fonts/AtariST8x16SystemFont.ttf`. Source:
https://www.dafont.com/atari-st-8x16-system-font.font . Other text uses system fonts.

The web font copy (`AtariST8x16SystemFont-web.ttf`) aliases the original close
glyph at U+0085 to private-use U+E085. Browsers treat U+0085 as a control character;
the alias preserves the exact glyph outlines while making it reliably renderable.
The supplied original TTF is retained unchanged.

## Project pages

`src/data/projects.ts` contains the five project introductions and repository
links, grouped into subprojects and related apps. Static routes in
`src/pages/projects/` and `src/pages/apps/` use `src/layouts/Project.astro`.
The shared document layout gives each route its own title, description and
canonical URL. Homepage cards link to every project. TypeShelf screenshots in
`public/images/typeshelf/` come unchanged from its `docs/images/` directory;
the app page credits the source. RCS currently has no published screenshots
in its repository. Update descriptions against the upstream README and current
port documentation, keeping experimental support and known limits explicit.

## Features & Ambitions

`src/pages/features/index.astro` introduces seven features, with the three main
architectural directions first: portability, per-process address spaces and
userspace AES. `src/data/features.ts` contains their summaries, implementation
scope, limitations, ambitions and links to source evidence. The static detail
route uses `src/components/FeatureDiagram.astro` for responsive HTML/CSS diagrams;
no diagram runtime or client JavaScript is shipped. `features/platforms.astro`
keeps the main architecture/configuration comparison in one place.

Technical content was reviewed against pTOS source revision
`fc3148179494f1b507ed38ee4c328ad52624fecf` on 2026-11-12, particularly
`doc/libaes-compatibility.md`, `doc/cuis.txt`, `doc/mmu-address-space.txt`,
`doc/x86_64-address-space.txt`, `doc/elf-shared.txt` and `doc/status.txt`.
Some documents retain historical design material: the current libaes inventory
is the authority for its API and configuration scope, not the retired typed
kernel AES service. Keep userspace AES's x32-only status and the GUI limits of
protected ARM/m68k configurations explicit when updating content.

`public/images/features/libaes-objects.png` is the unchanged source screenshot
from pTOS's `doc/screenshots/`; its feature page credits that source. The fonts
page reuses TypeShelf's original specimen screenshot. Diagrams are conceptual
ownership/architecture explanations, not hardware or memory-layout screenshots.
`src/components/SiteHeader.astro` provides shared site navigation.

Feature detail pages also list curated open tracker items under **Planned &
ongoing work**. `src/data/feature-issues.ts` stores issue numbers, exact titles,
links, context and the review date. Status is an editorial snapshot, not a live
GitHub feed. Only mark work **In progress** when an active implementation is
verified; the scheduling/clone entries link to draft PR #903 as evidence.
When updating these lists, recheck issue and PR state, remove or reclassify
closed work, and update `issuesReviewedAt`. No GitHub credentials or API calls
are added to the static website or build.
