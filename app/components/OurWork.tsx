import "./OurWork.css";

const projects = [
  {
    name: "NOIRÉ Fashion",
    category: "Fashion & E-commerce",
    description: "An editorial storefront with expressive typography, curated collections and a monochrome visual identity.",
    image: "/assets/NOIRE-Modern-Forms-Fashion-Homepage.png",
    alt: "Complete NOIRÉ fashion homepage preview with an editorial luxury storefront layout",
    width: 1600,
    height: 1000,
  },
  {
    name: "Lumière Salon & Spa",
    category: "Beauty & Wellness",
    description: "A warm, refined salon concept that brings treatments, atmosphere and appointment booking into one experience.",
    image: "/assets/Lumiere-Luxury-Salon-Website-Mockup.png",
    alt: "Complete Lumière salon and spa homepage preview with a warm luxury wellness layout",
    width: 1600,
    height: 1000,
  },
  {
    name: "Elevate Architecture",
    category: "Architecture & Real Estate",
    description: "A cinematic architecture portfolio with bold condensed type, vertical navigation and immersive villa photography.",
    image: "/assets/elevate-architecture.png",
    alt: "Complete Elevate architecture website preview with a night-time villa and vertical navigation",
    width: 1586,
    height: 992,
  },
  {
    name: "Terra Skincare",
    category: "Skincare & E-commerce",
    description: "A playful beauty shop with lilac and yellow tones, rounded typography and a colourful product shelf.",
    image: "/assets/terra-skincare.png",
    alt: "Complete Terra skincare store preview with lilac and yellow products and rounded typography",
    width: 1586,
    height: 992,
  },
  {
    name: "Maison Interiors",
    category: "Interiors & Furniture",
    description: "A graphic furniture catalogue with oversized Swiss typography, sculptural products and sharp yellow panels.",
    image: "/assets/maison-interiors.png",
    alt: "Complete Maison furniture catalogue preview with a cobalt chair and geometric yellow panels",
    width: 1586,
    height: 992,
  },
  {
    name: "Aura Retreat",
    category: "Hospitality & Travel",
    description: "An immersive island retreat concept with panoramic ocean imagery, elegant serif type and a floating booking bar.",
    image: "/assets/aura-retreat.png",
    alt: "Complete Aura resort website preview with ocean photography and a floating booking bar",
    width: 1586,
    height: 992,
  },
];

export default function OurWork() {
  return (
    <section id="work" className="our-work" aria-labelledby="our-work-heading">
      <header className="our-work__header">
        <h2 id="our-work-heading">Our <em>Work.</em></h2>
        <p>Six website concepts. Six distinct identities. Explore our work across fashion, beauty, architecture, interiors and travel.</p>
      </header>

      <div className="our-work__grid">
        {projects.map((project, index) => (
          <article className="our-work__project" key={project.image}>
            <a
              className="our-work__preview"
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View full ${project.name} preview (opens in a new tab)`}
            >
              {/* Local concept images retain their original dimensions and full composition. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.alt} srcSet={`${project.image.replace("/assets/", "/assets/optimized/").replace(".png", "-800.webp")} 800w, ${project.image.replace("/assets/", "/assets/optimized/").replace(".png", ".webp")} ${project.width}w`} sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 900px) calc((100vw - 92px) / 2), (max-width: 1440px) calc((100vw - 156px) / 2), 642px" width={project.width} height={project.height} loading="lazy" decoding="async" />
              <span className="our-work__preview-label">View full preview <span aria-hidden="true">↗</span></span>
            </a>
            <div className="our-work__details">
              <div className="our-work__title-row">
                <h3>{project.name}</h3>
                <span className="our-work__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="our-work__category">{project.category}</p>
              <p className="our-work__description">{project.description}</p>
            </div>
          </article>
        ))}
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
