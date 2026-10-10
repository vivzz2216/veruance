# Veruance — client and hosting review

Reviewed 4 October 2026. **Verdict: suitable for a hosted client preview after deployment.** The production build and Cloudflare deployment dry run passed. No site was published during this review; localhost is accessible on this computer only.

The site has a strong editorial identity and six varied website concepts, with complete previews and an obvious contact path. The concepts are labelled honestly. Your confirmed 100+ projects figure remains; big-brand endorsements, unverified client quotes and unsupported client/satisfaction figures were removed.

## What was fixed

| Priority | Finding | Result |
|---|---|---|
| P1 | Critical framework and server-component advisories | Next patched to 16.3.8; React and server components to 19.2.8. Vite, Vinext and Cloudflare tooling also updated. |
| P1 | Production config contained a dummy database ID | Portable production builds omit the unused database unless a real ID is supplied. The public contact path uses email. |
| P1 | Brand logos and testimonials suggested unverified clients | Replaced logos with a website-specialisms strip; removed illustrative testimonials and unsupported statistics. |
| P1 | Several small labels and footer text had low contrast | Darkened service/process labels and footer text; added clear focus indicators. |
| P2 | Services, footer and legacy contact links pointed to the wrong sections | Fixed destinations on Home, Stories and Studio. |
| P2 | Estimator claimed to lock an estimate and book a call | Renamed the action to “Discuss This Estimate”; contact wording explains the email flow. |
| P2 | Priority Delivery made a one-week project take two weeks | Corrected timeline calculation; the starter preview changes from one week to approximately five days. |
| P2 | Browser title and description referenced older projects | Added Veruance titles, descriptions, social metadata and matching favicon. |
| P2 | Large image downloads | Added responsive WebP delivery copies and lazy loading. Full-size original project PNGs remain available on click. |
| P2 | Small mobile navigation controls and missing selected states | Enlarged primary targets; added pressed states, live estimate announcements and Escape handling. |
| P2 | Smooth-scroll animation loop was not fully cancelled | Fixed cleanup and kept reduced-motion alternatives for programmatic scrolling. |

A custom 404 page now offers a clear route back home. The hero remains visible before JavaScript loads.

## Verification evidence

| Check | Result |
|---|---|
| Production build | Passed with the patched dependencies |
| TypeScript | Passed |
| Full lint | Zero errors; nine image-component advisories remain |
| Production HTTP routes | Home, Stories and Studio returned 200; a missing page returned 404 |
| Images and fonts | 29 checked asset URLs returned 200; production script/style URLs also loaded |
| Homepage links | No missing internal anchor targets |
| Estimator | Keyboard add-ons, USD/INR, package selection and maximum scope verified |
| Estimate examples | Starter + priority: $170 / ~5 days. Business + SEO: $230 or ₹19,000. Business + SEO at 12 views: ₹48,500 / ~5 weeks. These remain approximate quotes. |
| Mobile | Homepage checked at 320px and 390px; no horizontal overflow; menu opens, closes with Escape and follows Services correctly |
| Desktop | Homepage checked at 1280px; original gallery image proportions retained |
| Stories | Story dialog opens, Save updates feedback and Escape closes it |
| Browser errors | No errors observed during production homepage/estimator interaction checks |
| Cloudflare deployment dry run | Passed; 72 static files included, worker upload about 963 KiB before compression; no database binding required for the email flow |

The six original gallery PNGs total 12,327,259 bytes. Their full-resolution WebP delivery copies total 1,063,432 bytes—about **91% less image data**. Smaller 800px variants are used when appropriate. This is an asset-size comparison, not a Lighthouse speed score.

## Remaining limitations

- **P2 — development-tool advisories:** the production dependency audit reports zero advisories. The full dependency audit still reports 15 (8 high, 7 moderate), through build/lint/database tools and unused image-generation dependencies. This is not a claim that the entire toolchain is vulnerability-free. Avoid forced package downgrades; maintain the toolchain and keep development servers private.
- **Email is the active contact method.** There is no automated booking calendar or active web inquiry form. The dormant inquiry endpoint returns 503 with the email address when storage is disabled. Enabling it later requires a real D1 database, schema migrations, abuse controls and an appropriate notification flow.
- The six gallery entries are concept images, not live deployed project websites. Add actual client links/case studies when you want visitors to inspect finished sites.
- This was a Chromium-based browser review, not a Safari/Firefox/device-lab test or a full WCAG certification. Very small secondary controls in the legacy Stories/Studio surfaces can receive a later touch-target pass.
- A final domain is needed to add canonical URLs, a sitemap and a branded social-sharing image. Real-world speed should be measured again on that hosted domain.
- The design detector's palette/type advisories refer to an older DESIGN.md. The current light Veruance interface was preserved; no design-system rewrite was performed.

## Interface audit

Provisional health score: **14/20 — Good**. Accessibility 3/4; performance 3/4; responsive design 3/4; theming 2/4; implementation integrity 3/4. Scores describe the inspected surfaces and limits above. The hierarchy, images and spacing are coherent, while older global styles and secondary pages still offer room for refinement.

There are no remaining observed blockers in the active browse → estimate → email journey. Publishing remains a separate step.

## Hosting handoff

The project is on the Desktop at `https-www-behance-net-gallery-256093291/outputs/portfolio`. Its current build targets Cloudflare Workers; this is a server-rendered site with a static asset directory, so uploading only dist/client does not publish the complete application. Cloudflare documents the supported Vinext deployment approach in its [framework guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/).

After choosing the account/domain, build from the project folder with `npm run build`, then deploy the generated Worker using `npx wrangler deploy --config dist/server/wrangler.json`. The local dry run verified that generated configuration. Account authentication and a real deployed URL were not exercised.

The optional environment setting `CLOUDFLARE_D1_DATABASE_ID` is only needed when activating the stored-inquiry backend. Database creation, binding and schema setup follow the [Cloudflare D1 guide](https://developers.cloudflare.com/d1/get-started/).

Once deployed, check the public URL, contact email and final-domain sharing metadata before sending it to clients.
