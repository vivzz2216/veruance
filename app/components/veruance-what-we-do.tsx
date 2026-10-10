"use client";

import { ArrowRight } from "lucide-react";
import VeruanceMinimalServices from "./VeruanceMinimalServices";

interface Props { onContact: () => void; }

export default function VeruanceWhatWeDo({ onContact }: Props) {
  return (
    <>
      {/* ══ SECTION: WHAT WE DO — MINIMAL ARCHITECTURAL SERVICES ══ */}
      <section id="services" className="wwd-section" aria-labelledby="wwd-heading">
        {/* Header Block */}
        <div className="wwd-header-wrap">
          <div className="wwd-header-left">
            <p className="wwd-eyebrow">WHAT WE DO</p>
            <h2 className="wwd-heading" id="wwd-heading">
              More than just<br />
              <em>websites.</em>
            </h2>
          </div>

          <div className="wwd-header-right">
            <p className="wwd-desc">
              We partner with businesses to combine strategic design, cutting-edge full-stack engineering, and AI automation to build high-converting websites that drive measurable revenue.
            </p>
            <button className="wwd-cta" onClick={() => document.getElementById("service-options")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}>
              Explore Our Services
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Minimalist Architectural Services Grid */}
        <div id="service-options" className="wwd-minimal-container">
          <VeruanceMinimalServices onContact={onContact} />
        </div>
      </section>

      {/* ══ SECTION: DARK FEATURE — "Not just something..." ══ */}
      <section className="njs-section" aria-labelledby="njs-heading">
        {/* Left text */}
        <div className="njs-left">
          <p className="njs-eyebrow">TURNING IDEAS INTO DIGITAL EXPERIENCES</p>
          <h2 className="njs-heading" id="njs-heading">
            Not just something that looks good.<br />
            <em>Something that works.</em>
          </h2>
          <p className="njs-desc">
            Every project is engineered around business goals, clean UX, and measurable conversion.
          </p>

          {/* Stats - Spacious & uncluttered */}
          <div className="njs-stats" role="list">
            {[
              { num: "100+", label: "Projects Delivered" },
              { num: "Design", label: "Made for your brand" },
              { num: "Build", label: "Ready for your business" },
            ].map(({ num, label }, i) => (
              <div key={label} className="njs-stat" role="listitem">
                {i > 0 && <div className="njs-stat-divider" aria-hidden="true" />}
                <div className="njs-stat-inner">
                  <span className="njs-stat-num">{num}</span>
                  <span className="njs-stat-label">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="njs-right" aria-hidden="true">
          <img
            src="/assets/optimized/dark-phone.webp"
            width={896}
            height={1200}
            decoding="async"
            alt=""
            className="njs-phone"
            loading="lazy"
            draggable={false}
          />
        </div>
      </section>
    </>
  );
}
