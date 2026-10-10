"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./VeruanceMinimalServices.css";

export interface MinimalService {
  num: string;
  title: string;
  category: string;
  headline: string;
  placeholderType: "browser" | "code" | "motion" | "analytics";
  tags: string[];
}

export const minimalServices: MinimalService[] = [
  {
    num: "01",
    title: "Web Design",
    category: "Interface",
    headline: "Clean, distinctive interfaces built around your brand.",
    placeholderType: "browser",
    tags: ["UI / UX", "Design Systems", "Figma"]
  },
  {
    num: "02",
    title: "Web Development",
    category: "Engineering",
    headline: "Fast, responsive, production-ready websites.",
    placeholderType: "code",
    tags: ["Next.js", "React & TS", "Performance"]
  },
  {
    num: "03",
    title: "Creative Development",
    category: "Interactive",
    headline: "Motion, interactions and details that make a site memorable.",
    placeholderType: "motion",
    tags: ["WebGL 3D", "GSAP Motion", "Interaction"]
  },
  {
    num: "04",
    title: "Digital Strategy & AI",
    category: "Growth",
    headline: "Turning ideas into digital experiences that convert.",
    placeholderType: "analytics",
    tags: ["AI Workflows", "CRO Funnels", "SEO"]
  }
];

interface Props {
  onContact: () => void;
}

export default function VeruanceMinimalServices({ onContact }: Props) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="vms-root">
      <div className="vms-small-grid">
        {minimalServices.map((service, index) => {
          const isHovered = hoveredIdx === index;

          return (
            <div
              key={service.num}
              className={`vms-small-card ${isHovered ? "vms-small-card--hovered" : ""}`}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={onContact}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onContact();
                }
              }}
            >
              {/* Header: Num + Category + Mini Arrow */}
              <div className="vms-small-head">
                <div className="vms-small-meta">
                  <span className="vms-small-num">{service.num}</span>
                  <span className="vms-small-cat">{service.category}</span>
                </div>
                <div className="vms-small-arrow" aria-hidden="true">
                  <ArrowUpRight size={13} />
                </div>
              </div>

              {/* Title & Short Headline */}
              <div className="vms-small-body">
                <h3 className="vms-small-title">{service.title}</h3>
                <p className="vms-small-headline">{service.headline}</p>
              </div>

              {/* Compact Tags */}
              <div className="vms-small-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="vms-small-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
