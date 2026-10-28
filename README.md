# Veruance website

The working project is in this folder on the Desktop. Double-click Start Website.cmd in the outer project folder, then open http://localhost:5173.

The homepage has an Our Work gallery featuring live website deployments and interactive test sites: NOIRÉ Apparel (test5), LUMIÈRE Studio (test6), Elevate Properties, Terra Skincare, MAISON Furniture, and AURA Island Resort. Each project has its own visual style, category and description. All six projects feature live interactive Vercel deployments with clickable live badges and direct links.

The projects include:
- NOIRÉ Apparel (Test Site): editorial monochrome storefront with luxury typography (https://noire-fashion-delta.vercel.app/).
- LUMIÈRE Studio (Test Site): luxury beauty and wellness studio with updated services imagery (https://lumiere-studio-eta.vercel.app/).
- Elevate Properties: cinematic dark architecture, vertical navigation, condensed typography (https://elevate-properties-phi.vercel.app/).
- Terra Skincare: playful lilac/yellow beauty store, rounded type, product shelf (https://terra-skincare.vercel.app/).
- MAISON Furniture: Swiss furniture catalogue, oversized type, cobalt/acid-yellow panels (https://maison-furniture-peach.vercel.app/).
- AURA Island Resort: immersive ocean resort, full-screen photography, floating booking bar (https://aura-island-resort.vercel.app/).

Source: app/page.tsx. Gallery: app/components/OurWork.tsx and OurWork.css. Images: public/assets. Exact generation prompts: design-assets/website-preview-prompts.json.

Unused draft components, duplicate images, abandoned generated artwork, examples, unused UI scaffolding, and old build outputs were removed to the Windows Recycle Bin. Required dependencies, build configuration, Git history, and the existing Stories/Studio pages were retained. Their referenced portrait images were restored.

Run node scripts/run-framework.mjs dev for development; npm run build builds the production site. The existing inquiry endpoint and database configuration remain in app/api/inquiries, db, drizzle, .openai, and .sites-runtime.

The gallery presents the designs as website concepts. The hero, services, process, estimator and email contact sections remain in place. The confirmed 100+ projects figure is retained. Big-brand logos, unverified testimonials and unsupported client/satisfaction figures were removed during the client-readiness review.

Images use responsive WebP delivery copies in public/assets/optimized; originals remain available for full-size previews. Run node scripts/optimize-assets.mjs to regenerate these copies after updating artwork.

The portable production build omits the preview-only database binding. The active contact flow uses email. To activate the stored-inquiry backend later, supply CLOUDFLARE_D1_DATABASE_ID, apply the database schema and add the form/notification flow. See HOSTING.md for deployment notes and review limitations.
