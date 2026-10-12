"use client";
import VeruanceHero from "./components/veruance-hero";
import VeruanceWhatWeDo from "./components/veruance-what-we-do";
import OurWork from "./components/OurWork";
import ProjectCostEstimator from "./components/ProjectCostEstimator";
import SmoothScroll from "./components/SmoothScroll";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";

/* ── Process step icons ── */
function IconSearch() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>; }
function IconPen()    { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>; }
function IconCode()   { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>; }
function IconRocket() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>; }

const processSteps = [
  { num: "01", icon: IconSearch, title: "Discover",  desc: "Understanding your business, goals and audience." },
  { num: "02", icon: IconPen,    title: "Design",    desc: "Crafting clean, modern and strategic visuals." },
  { num: "03", icon: IconCode,   title: "Develop",   desc: "Building fast, responsive and scalable websites." },
  { num: "04", icon: IconRocket, title: "Launch",    desc: "Testing, refining and getting you live." },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Process section reveal: stays fully visible without JS or with reduced motion.
     Driven through a data attribute (not React state) so it never triggers a re-render. */
  const processRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = processRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.dataset.reveal = "pending";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = "in";
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      delete el.dataset.reveal;
    };
  }, []);

  function scrollToContact() {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  return (
    <>
      <SmoothScroll />
      <a href="#main" className="skip-link">Skip to content</a>

      <main id="main">
        {/* ── 1. HERO + NAV ── */}
        <VeruanceHero
          onBookCall={scrollToContact}
          onExploreWork={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        {/* ── 2. WHAT WE DO + DARK FEATURE ── */}
        <VeruanceWhatWeDo onContact={scrollToContact} />

        {/* ── 3. OUR WORK ── */}
        <OurWork />

        {/* ── 4. OUR PROCESS ──────────────────────────────────────── */}
        <section
          id="process"
          ref={processRef}
          className="op-section"
          aria-labelledby="op-heading"
        >
          <div className="op-bg" aria-hidden="true" />

          <div className="op-inner">
            <div className="op-header">
              <div className="op-header-main">
                <p className="op-eyebrow">OUR PROCESS</p>
                <h2 className="op-heading" id="op-heading">
                  From idea to <em>impact.</em>
                </h2>
              </div>
              <p className="op-sub">A clear, collaborative process to turn your vision into a high-performing digital experience.</p>
            </div>

            <ol className="op-steps">
              {processSteps.map(({ num, icon: Icon, title, desc }, i) => (
                <li key={title} className="op-step" style={{ "--i": i } as CSSProperties}>
                  {i < processSteps.length - 1 && <span className="op-connector" aria-hidden="true" />}
                  <div className="op-step-top">
                    <span className="op-step-num">{num}</span>
                    <div className="op-step-icon" aria-hidden="true">
                      <Icon />
                    </div>
                  </div>
                  <h3 className="op-step-title">{title}</h3>
                  <p className="op-step-desc">{desc}</p>
                  <span className="op-step-bar" aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 6. PROJECT ESTIMATOR / "HOW MUCH WOULD IT BE?" ─────── */}
        <ProjectCostEstimator onBookCall={scrollToContact} />

        {/* ── 7. CTA / LET'S WORK TOGETHER ────────────────────────── */}
        <section id="cta-section" className="cta-section" aria-labelledby="cta-heading">
          <div
            className="cta-bg"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(12,14,18,0.94) 0%, rgba(12,14,18,0.85) 45%, rgba(12,14,18,0.4) 100%), url('/assets/optimized/cta-architecture.webp')`,
            }}
            aria-hidden="true"
          />
          <div className="cta-content">
            <p className="cta-eyebrow">LET’S WORK TOGETHER</p>
            <h2 className="cta-heading" id="cta-heading">
              Have something<br />worth building?
            </h2>
            <p className="cta-desc">Tell us about your idea, business, or next project. Email us to discuss your scope and next steps.</p>
          </div>
          <div className="cta-action">
            <a href="mailto:pillaivivek16@gmail.com" className="cta-btn">
              Start a Project
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="vf-footer">
        <div className="vf-top">
          <a href="#" className="vf-brand">
            <span className="vf-logo-text"><span className="vf-logo-v">ve</span>ruance</span>
          </a>
          <nav className="vf-nav" aria-label="Footer navigation">
            {[
              ["Work", "#work"],
              ["Services", "#services"],
              ["Process", "#process"],
              ["Studio", "/studio"],
              ["Stories", "/stories"],
              ["Contact", "#cta-section"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="vf-nav-link"
                onClick={(e) => {
                  if (href.startsWith("#")) {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({
                      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                    });
                  }
                }}
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="mailto:pillaivivek16@gmail.com" className="vf-email">pillaivivek16@gmail.com</a>
        </div>
        <div className="vf-bottom">
          <span>© {new Date().getFullYear()} Veruance · Vivek Pillai</span>
          <span>All rights reserved</span>
        </div>
      </footer>
    </>
  );
}
