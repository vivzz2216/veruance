"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";


interface VeruanceHeroProps {
  onBookCall: () => void;
  onExploreWork: () => void;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}

export default function VeruanceHero({ onBookCall, onExploreWork, menuOpen, setMenuOpen }: VeruanceHeroProps) {
  return (
    <>
      <div className="vh-wrapper vh-wrapper--in">
        {/* ─── NAVIGATION (Seamless, no box) ─────────────────────── */}
      <header className="vn" role="banner">
        <a href="#" className="vn-brand" aria-label="Veruance home">
          <img
            src="/assets/veruance-logo.png"
            width={48}
            height={38}
            alt=""
            aria-hidden="true"
            className="vn-logo-mark"
          />
          <span className="vn-logo-text">veruance</span>
        </a>

        <nav id="vn-nav" className={`vn-links ${menuOpen ? "vn-links--open" : ""}`} aria-label="Main navigation" onKeyDown={event => { if (event.key === "Escape") { setMenuOpen(false); document.querySelector<HTMLButtonElement>(".vn-burger")?.focus(); } }}>
          {[["Home","#"],["Work","#work"],["Services","#services"],["Estimator","#estimator"],["Contact","#cta-section"]].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="vn-link"
              onClick={(e) => {
                setMenuOpen(false);
                if (href === "#") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
                } else if (href.startsWith("#")) {
                  e.preventDefault();
                  document.querySelector(href)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
                }
              }}
            >
              {label}
            </a>
          ))}
          <a
              href="#cta-section"
              className="vn-mobile-cta"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                onBookCall();
              }}
          >
              Start a Project
              <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </nav>

        <div className="vn-end">
          <a
            href="#cta-section"
            className="vn-cta"
            onClick={(e) => {
              e.preventDefault();
              onBookCall();
            }}
          >
            Start a Project
            <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          </a>
          <button className="vn-burger" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="vn-nav" onKeyDown={event => { if (event.key === "Escape") setMenuOpen(false); }} onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`vn-burger-line ${menuOpen ? "vn-burger-line--open" : ""}`} />
            <span className={`vn-burger-line ${menuOpen ? "vn-burger-line--open" : ""}`} />
          </button>
        </div>
      </header>

      {/* ─── HERO SECTION ─────────────────────────────────────── */}
      <section className="vh" aria-label="Veruance — Vivek Pillai">

        {/* Left text column */}
        <div className="vh-left">
          <h1 className="vh-headline">
            <span className="vh-hl-row">Websites that move</span>
            <span className="vh-hl-row">businesses <span className="vh-hl-accent"><em>forward.</em></span></span>
          </h1>

          <p className="vh-desc">
            Fast, high-quality websites and digital experiences built to move businesses forward.
          </p>

          <div className="vh-actions">
            <button className="vh-btn-primary" onClick={onExploreWork} id="hero-cta-work">
              View Our Work
              <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </button>
            <button className="vh-btn-ghost" onClick={onBookCall} id="hero-cta-start">
              Build Your Website
            </button>
          </div>

          <a
            href="#work"
            className="vh-scroll"
            onClick={(e) => {
              e.preventDefault();
              onExploreWork();
            }}
            aria-label="Scroll to explore portfolio"
          >
            <span className="vh-scroll-circle">
              <ArrowDown size={13} strokeWidth={2} aria-hidden="true" />
            </span>
            Scroll to explore portfolio
          </a>
        </div>

        {/* Right device image */}
        <div className="vh-right">
          <div className="vh-device-wrap">
            <img
              src="/assets/optimized/veruance-hero-img.png"
              width={1024}
              height={768}
              fetchPriority="high"
              decoding="async"
              alt="Veruance laptop and mobile digital experience mockups"
              className="vh-device-img"
              loading="eager"
              draggable={false}
            />
          </div>
        </div>
      </section>
    </div>

    <div className="expertise-strip" aria-label="Experience and website specialisms">
      <div className="expertise-strip__inner">
        <p className="expertise-strip__experience"><strong>100+</strong><span>Projects delivered</span></p>
        <ul className="expertise-strip__specialisms" aria-label="Website specialisms">
          <li>Brand websites</li><li>E-commerce</li><li>Business websites</li><li>Digital experiences</li>
        </ul>
      </div>
    </div>
    </>
  );
}
