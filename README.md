# Veruance website

The working project is in this folder on the Desktop. Double-click Start Website.cmd in the outer project folder, then open http://localhost:5173.

The homepage has an Our Work gallery with six complete website previews: NOIRÉ Fashion, Lumière Salon & Spa, Elevate Architecture, Terra Skincare, Maison Interiors, and Aura Retreat. Each project has its own visual style, category and description. Clicking a preview opens the full-size image in a new tab. The gallery uses two columns on desktop and one on mobile, without cropping the images.

The four added previews are illustrative website concepts generated with built-in imagegen:
- Elevate: cinematic dark architecture, vertical navigation, condensed typography.
- Terra: playful lilac/yellow beauty store, rounded type, product shelf.
- Maison: Swiss furniture catalogue, oversized type, cobalt/acid-yellow panels.
- Aura: immersive ocean resort, full-screen photography, floating booking bar.

Source: app/page.tsx. Gallery: app/components/OurWork.tsx and OurWork.css. Images: public/assets. Exact generation prompts: design-assets/website-preview-prompts.json.

Unused draft components, duplicate images, abandoned generated artwork, examples, unused UI scaffolding, and old build outputs were removed to the Windows Recycle Bin. Required dependencies, build configuration, Git history, and the existing Stories/Studio pages were retained. Their referenced portrait images were restored.

Run node scripts/run-framework.mjs dev for development; npm run build builds the production site. The existing inquiry endpoint and database configuration remain in app/api/inquiries, db, drizzle, .openai, and .sites-runtime.

The gallery presents the designs as website concepts. The hero, services, process, estimator and email contact sections remain in place. The confirmed 100+ projects figure is retained. Big-brand logos, unverified testimonials and unsupported client/satisfaction figures were removed during the client-readiness review.

Images use responsive WebP delivery copies in public/assets/optimized; originals remain available for full-size previews. Run node scripts/optimize-assets.mjs to regenerate these copies after updating artwork.

The portable production build omits the preview-only database binding. The active contact flow uses email. To activate the stored-inquiry backend later, supply CLOUDFLARE_D1_DATABASE_ID, apply the database schema and add the form/notification flow. See HOSTING.md for deployment notes and review limitations.
