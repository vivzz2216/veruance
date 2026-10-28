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
  isTestSite?: boolean;
  badgeText?: string;
}

const projects: Project[] = [
  {
    name: "NOIRÉ Apparel",
    category: "Fashion & E-commerce",
    description: "An editorial storefront with expressive typography, curated apparel collections and a monochrome visual identity. (Live Test Site)",
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
    description: "A warm, refined salon and beauty studio featuring updated services imagery, treatment menus and appointment booking. (Live Test Site)",
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
    description: "A cinematic architecture portfolio with bold condensed type, vertical navigation and immersive villa photography.",
    image: "/assets/elevate-architecture.png",
    alt: "Complete Elevate Properties website preview with a night-time villa and vertical navigation",
    width: 1586,
    height: 992,
    liveUrl: "https://elevate-properties-phi.vercel.app/",
    badgeText: "Live Site",
  },
  {
    name: "Terra Skincare",
    category: "Skincare & E-commerce",
    description: "A playful beauty shop with lilac and yellow tones, rounded typography and a colourful product shelf.",
    image: "/assets/terra-skincare.png",
    alt: "Complete Terra skincare store preview with lilac and yellow products and rounded typography",
    width: 1586,
    height: 992,
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
];

export default function OurWork() {
  return (
    <section id="work" className="our-work" aria-labelledby="our-work-heading">
      <header className="our-work__header">
        <h2 id="our-work-heading">Our <em>Work.</em></h2>
        <p>Six distinct identities. Explore our live builds and interactive test sites across fashion, beauty, architecture, interiors and travel.</p>
      </header>

      <div className="our-work__grid">
        {projects.map((project, index) => {
          const destination = project.liveUrl;
          const badgeLabel = project.badgeText || (project.isTestSite ? "Live Test Site" : "Live Site");
          const hoverLabel = project.isTestSite ? "Visit test site" : "Visit live site";

          return (
            <article className="our-work__project" key={project.name}>
              <a
                className="our-work__preview"
                href={destination}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.isTestSite ? "live test site" : "live site"} for ${project.name} (opens in a new tab)`}
              >
                {/* Local concept images retain their original dimensions and full composition. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.alt}
                  srcSet={`${project.image.replace("/assets/", "/assets/optimized/").replace(".png", "-800.webp")} 800w, ${project.image.replace("/assets/", "/assets/optimized/").replace(".png", ".webp")} ${project.width}w`}
                  sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 900px) calc((100vw - 92px) / 2), (max-width: 1440px) calc((100vw - 156px) / 2), 642px"
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  decoding="async"
                />
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
                  <span className="our-work__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="our-work__meta-row">
                  <p className="our-work__category">{project.category}</p>
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
