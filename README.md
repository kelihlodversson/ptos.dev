# ptos.dev

The official pTOS landing page: **https://ptos.dev**. pTOS is a portable,
TOS-compatible operating system derived from EmuTOS. Its source and development
activity live at https://github.com/kelihlodversson/pTOS.

## Local development

Use Node.js 24 LTS and npm. Astro generates static HTML and CSS with no browser
JavaScript, external fonts, backend, or UI framework.

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
and news are intentionally outside this first release. Verify technical claims
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

## Initial release: infrastructure handoff

The connected GitHub integration returned HTTP 403 (`Resource not accessible by
integration`) for Pages creation and custom-domain updates, despite repository
admin metadata. If Pages is still disabled, a repository administrator must:

1. Open https://github.com/kelihlodversson/ptos.dev/settings/pages and select
   **GitHub Actions** under Build and deployment → Source.
2. Save **ptos.dev** as the custom domain before creating public DNS records.
3. In Cloudflare's **ptos.dev** zone, create four DNS-only apex A records to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
   and a DNS-only `www` CNAME to `kelihlodversson.github.io`.
4. Run the Deploy to GitHub Pages workflow from Actions (or rerun the initial
   failed run). Confirm deployment succeeds and Pages recognizes the domain.
5. Wait for GitHub's certificate to cover `ptos.dev` and `www.ptos.dev`, verify
   direct origin HTTPS, then enable **Enforce HTTPS** in Pages settings.
6. Set Cloudflare SSL/TLS mode to **Full (strict)** and enable proxying on those
   five DNS records. Leave unrelated records and services alone.
7. Check `https://ptos.dev` returns this homepage and
   `https://www.ptos.dev` redirects to the apex without loops. Verify normal
   static caching and no stale HTML override.

At inspection the zone was active but had no DNS records, page rules or Worker
routes and no custom redirect/cache rulesets. SSL mode was Full. No DNS or TLS
changes were applied because GitHub had not accepted the custom domain. Public
validation also requires allowing `ptos.dev` and `www.ptos.dev` through this
execution environment's outbound network policy.
