import "./OurWork.css";

interface Project {
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  liveUrl: string;
  sourceUrl?: string;
  srcSet?: string;
  darkImage?: string;
  darkSrcSet?: string;
  isTestSite?: boolean;
  badgeText?: string;
}

const projects: Project[] = [
  {
    name: "NOIRÉ Apparel",
    category: "Fashion & E-commerce",
    description: "An editorial storefront with expressive typography, curated apparel collections and a monochrome visual identity.",
    image: "/assets/NOIRE-Modern-Forms-Fashion-Homepage.png",
    alt: "Complete NOIRÉ Apparel website preview with an editorial luxury storefront layout",
    width: 1600,
    height: 1000,
    liveUrl: "https://noire-fashion-delta.vercel.app/",
    isTestSite: true,
    badgeText: "Live Test Site",
  },
  {
    name: "LUMIÈRE Studio",
    category: "Beauty & Wellness",
    description: "A warm, refined salon concept with service imagery, treatment menus and an appointment preview.",
    image: "/assets/Lumiere-Luxury-Salon-Website-Mockup.png",
    alt: "Complete LUMIÈRE Studio website preview with warm luxury wellness layout and updated services imagery",
    width: 1600,
    height: 1000,
    liveUrl: "https://lumiere-studio-eta.vercel.app/",
    isTestSite: true,
    badgeText: "Live Test Site",
  },
  {
    name: "Elevate Properties",
    category: "Architecture & Real Estate",
    description: "An architectural portfolio with editorial typography, a coastal villa and an interactive material archive.",
    image: "/assets/elevate-live-hero.png",
    alt: "Elevate Properties homepage hero showing a coastal residence at dusk",
    width: 1600,
    height: 868,
    liveUrl: "https://elevate-properties-phi.vercel.app/",
    badgeText: "Live Site",
  },
  {
    name: "Terra Skincare",
    category: "Skincare & E-commerce",
    description: "An editorial skincare concept with warm light, soft lilac tones and a simple three-product collection.",
    image: "/assets/terra-live-hero.png",
    alt: "Terra Skincare homepage hero featuring three products in warm natural light",
    width: 1600,
    height: 868,
    liveUrl: "https://terra-skincare.vercel.app/",
    badgeText: "Live Site",
  },
  {
    name: "MAISON Furniture",
    category: "Interiors & Furniture",
    description: "A graphic furniture catalogue with oversized Swiss typography, sculptural products and sharp yellow panels.",
    image: "/assets/maison-interiors.png",
    alt: "Complete MAISON furniture catalogue preview with a cobalt chair and geometric yellow panels",
    width: 1586,
    height: 992,
    liveUrl: "https://maison-furniture-peach.vercel.app/",
    badgeText: "Live Site",
  },
  {
    name: "AURA Island Resort",
    category: "Hospitality & Travel",
    description: "An immersive island retreat concept with panoramic ocean imagery, elegant serif type and a floating booking bar.",
    image: "/assets/aura-retreat.png",
    alt: "Complete AURA Island Resort website preview with ocean photography and a floating booking bar",
    width: 1586,
    height: 992,
    liveUrl: "https://aura-island-resort.vercel.app/",
    badgeText: "Live Site",
  },
  {
    name: "Sakura Sanctuary",
    category: "Culture & Interactive Experience",
    description: "A peaceful Japanese-inspired digital sanctuary for exploring seasonal beauty, quiet moments and atmospheric scenery.",
    image: "/assets/optimized/sakura-sanctuary-preview.webp",
    srcSet: "/assets/optimized/sakura-sanctuary-preview-800.webp 800w, /assets/optimized/sakura-sanctuary-preview.webp 1600w",
    darkImage: "/assets/optimized/sakura-sanctuary-night.webp",
    darkSrcSet: "/assets/optimized/sakura-sanctuary-night-800.webp 800w, /assets/optimized/sakura-sanctuary-night.webp 1600w",
    alt: "Sakura Sanctuary Japanese heritage website preview with cherry blossoms, temple, red bridge, and interactive controls",
    width: 1600,
    height: 832,
    liveUrl: "https://sakura-sanctuary-mauve.vercel.app/",
    sourceUrl: "https://github.com/vivzz2216/sakura-japan-heritage",
    badgeText: "Live Site",
  },
  {
    name: "Nature Sanctuary",
    category: "Nature & Interactive Experience",
    description: "An immersive digital nature concept with rolling alpine meadows, scenic hills and serene atmosphere.",
    image: "/assets/optimized/nature-sanctuary-preview.webp",
    srcSet: "/assets/optimized/nature-sanctuary-preview-800.webp 800w, /assets/optimized/nature-sanctuary-preview.webp 1600w",
    darkImage: "/assets/optimized/nature-sanctuary-night.webp",
    darkSrcSet: "/assets/optimized/nature-sanctuary-night-800.webp 800w, /assets/optimized/nature-sanctuary-night.webp 1600w",
    alt: "Nature digital concept preview with bold typography, lush grass meadow, and sky",
    width: 1600,
    height: 812,
    liveUrl: "https://nature-sanctuary-cyan.vercel.app/",
    sourceUrl: "https://github.com/vivzz2216/nature-explorer",
    badgeText: "Live Site",
  },
];

export default function OurWork() {
  return (
    <section id="work" className="our-work" aria-labelledby="our-work-heading">
      <header className="our-work__header">
        <h2 id="our-work-heading">Our <em>Work.</em></h2>
        <p>Eight distinct identities. Explore our live builds and interactive experiences across fashion, beauty, architecture, culture, nature, interiors and travel.</p>
      </header>

      <div className="our-work__grid">
        {projects.map((project, index) => {
          const destination = project.liveUrl;
          const badgeLabel = project.badgeText || (project.isTestSite ? "Live Test Site" : "Live Site");
          const hoverLabel = project.isTestSite ? "Visit test site" : "Visit live site";

          return (
            <article className="our-work__project" key={project.name}>
              <div className="our-work__project-topline">
                <p className="our-work__category">{project.category}</p>
                <span className="our-work__number" aria-hidden="true">{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
              </div>
              <a
                className={`our-work__preview ${project.darkImage ? "our-work__preview--has-night" : ""}`}
                href={destination}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.isTestSite ? "live test site" : "live site"} for ${project.name} (opens in a new tab)`}
              >
                {/* Local previews retain their original dimensions and full composition. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.alt}
                  srcSet={project.srcSet ?? `${project.image.replace("/assets/", "/assets/optimized/").replace(".png", "-800.webp")} 800w, ${project.image.replace("/assets/", "/assets/optimized/").replace(".png", ".webp")} ${project.width}w`}
                  sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 900px) calc((100vw - 92px) / 2), (max-width: 1440px) calc((100vw - 156px) / 2), 642px"
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  decoding="async"
                  className="our-work__img-day"
                />
                {project.darkImage && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={project.darkImage}
                    alt={`${project.name} night mode view`}
                    srcSet={project.darkSrcSet ?? `${project.darkImage.replace("/assets/", "/assets/optimized/").replace(".png", "-800.webp")} 800w, ${project.darkImage.replace("/assets/", "/assets/optimized/").replace(".png", ".webp")} ${project.width}w`}
                    sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 900px) calc((100vw - 92px) / 2), (max-width: 1440px) calc((100vw - 156px) / 2), 642px"
                    width={project.width}
                    height={project.height}
                    loading="lazy"
                    decoding="async"
                    className="our-work__img-night"
                    aria-hidden="true"
                  />
                )}
                <span className={`our-work__preview-label our-work__preview-label--live ${project.isTestSite ? "our-work__preview-label--test" : ""}`}>
                  <span className={`our-work__preview-live-dot ${project.isTestSite ? "our-work__preview-live-dot--test" : ""}`} aria-hidden="true" />
                  {hoverLabel} <span aria-hidden="true">↗</span>
                </span>
              </a>
              <div className="our-work__details">
                <div className="our-work__title-row">
                  <h3>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="our-work__title-link"
                    >
                      {project.name}
                      <span className="our-work__title-arrow" aria-hidden="true">↗</span>
                    </a>
                  </h3>
                  <div className="our-work__project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`our-work__live-badge ${project.isTestSite ? "our-work__live-badge--test" : ""}`}
                      aria-label={`Visit ${project.isTestSite ? "live test site" : "live site"} for ${project.name} (opens in a new tab)`}
                    >
                      <span className={`our-work__live-dot ${project.isTestSite ? "our-work__live-dot--test" : ""}`} aria-hidden="true" />
                      {badgeLabel}
                      <span className="our-work__badge-arrow" aria-hidden="true">↗</span>
                    </a>
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="our-work__source-link"
                        aria-label={`View ${project.name} source code on GitHub (opens in a new tab)`}
                      >
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
                <p className="our-work__description">{project.description}</p>
              </div>
            </article>
          );
        })}
      </div>
      <a
        className="our-work__contact"
        href="#cta-section"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("cta-section")?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          });
        }}
      >
        Have a project in mind? Let’s create it. <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
