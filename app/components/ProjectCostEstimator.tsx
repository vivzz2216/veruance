"use client";

import React, { useState, useMemo } from "react";

import { 
  Layers, 
  Sparkles, 
  Cpu, 
  Globe, 
  Clock, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  SlidersHorizontal,
  Flame,
  Zap,
  MessageCircle
} from "lucide-react";
import "./ProjectCostEstimator.css";

interface ProjectOption {
  id: string;
  name: string;
  desc: string;
  basePriceUSD: number;
  basePriceINR: number;
  weeks: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const PROJECT_TYPES: ProjectOption[] = [
  {
    id: "landing",
    name: "Starter Landing Page",
    desc: "A focused, responsive one-page site with a clear message, strong call to action, and polished launch-ready layout.",
    basePriceUSD: 70,
    basePriceINR: 6000,
    weeks: 1,
    icon: Globe,
  },
  {
    id: "web-app",
    name: "Business Website",
    desc: "A multi-page website with responsive layouts, reusable sections, contact flow, and a clean foundation for growth.",
    basePriceUSD: 180,
    basePriceINR: 15000,
    weeks: 2,
    icon: Layers,
  },
  {
    id: "ai-system",
    name: "Conversion Build",
    desc: "A higher-touch website or lightweight web experience with custom sections, forms, integrations, and conversion-focused UX.",
    basePriceUSD: 350,
    basePriceINR: 30000,
    weeks: 3,
    icon: Cpu,
  },
  {
    id: "flagship",
    name: "Signature Experience",
    desc: "A distinctive custom website with richer motion, tailored interactions, and the strategic polish needed for a standout launch.",
    basePriceUSD: 650,
    basePriceINR: 55000,
    weeks: 4,
    icon: Sparkles,
  },
];

interface Addon {
  id: string;
  name: string;
  priceUSD: number;
  priceINR: number;
}

const ADDONS: Addon[] = [
  { id: "webgl", name: "Advanced Motion & Interaction", priceUSD: 90, priceINR: 7500 },
  { id: "cms", name: "Easy Content Editing", priceUSD: 100, priceINR: 8500 },
  { id: "seo", name: "SEO & Analytics Setup", priceUSD: 50, priceINR: 4000 },
  { id: "fast-track", name: "Priority Delivery", priceUSD: 100, priceINR: 8500 },
];

interface Props {
  onBookCall?: () => void;
  whatsappNumber?: string;
}

export default function ProjectCostEstimator({ onBookCall, whatsappNumber = "919665366116" }: Props) {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [selectedType, setSelectedType] = useState<string>("landing");
  const [scopeUnits, setScopeUnits] = useState<number>(1); // e.g. pages or key workflows
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);


  const activeType = useMemo(
    () => PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0],
    [selectedType]
  );

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate price
  const estimatedCost = useMemo(() => {
    const isUSD = currency === "USD";
    const base = isUSD ? activeType.basePriceUSD : activeType.basePriceINR;
    
    // Scale multiplier based on pages/workflows
    const scaleFactor = 1 + (scopeUnits - 1) * 0.18;
    
    // Addons
    const addonsTotal = selectedAddons.reduce((acc, addonId) => {
      const found = ADDONS.find((a) => a.id === addonId);
      if (!found) return acc;
      return acc + (isUSD ? found.priceUSD : found.priceINR);
    }, 0);

    const rawTotal = Math.round(base * scaleFactor + addonsTotal);
    // Keep the entry package at its advertised minimum while keeping quotes tidy.
    const rounded = isUSD
      ? Math.max(70, Math.round(rawTotal / 10) * 10)
      : Math.max(6000, Math.round(rawTotal / 500) * 500);
    return rounded;
  }, [currency, activeType, scopeUnits, selectedAddons]);

  const estimatedDays = useMemo(() => {
    const baseWeeks = activeType.weeks;
    const extraWeeks = scopeUnits > 4 ? Math.ceil((scopeUnits - 4) / 3) : 0;
    const isExpress = selectedAddons.includes("fast-track");
    const total = baseWeeks + extraWeeks;
    return isExpress ? Math.max(3, Math.ceil(total * 7 * 0.65)) : total * 7;
  }, [activeType, scopeUnits, selectedAddons]);

  const handleDiscussEstimate = () => {
    const isUSD = currency === "USD";
    const costText = isUSD
      ? `$${estimatedCost.toLocaleString()} USD`
      : `₹${estimatedCost.toLocaleString()} INR`;
    const timelineText = selectedAddons.includes("fast-track")
      ? `~${estimatedDays} Days`
      : `~${estimatedDays / 7} ${estimatedDays === 7 ? "Week" : "Weeks"}`;

    const addonNames = selectedAddons
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean);
    const addonsText = addonNames.length > 0 ? addonNames.join(", ") : "None";

    const lines = [
      "Hi Vivek! I calculated an estimate on your website and would like to discuss it:",
      "",
      `• Package: ${activeType.name}`,
      `• Scope: ${scopeUnits} ${scopeUnits === 1 ? "Core View" : "Core Views"}`,
      `• Enhancements: ${addonsText}`,
      `• Estimated Investment: ${costText}`,
      `• Estimated Timeline: ${timelineText}`,
      "",
      "Can we discuss moving forward with this project?",
    ];

    const message = lines.join("\n");
    let cleanPhone = (whatsappNumber || "919665366116").replace(/[^0-9]/g, "");
    if (cleanPhone.length === 10) {
      cleanPhone = "91" + cleanPhone;
    }
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="estimator" className="pce-section" aria-labelledby="pce-heading">
      <div className="pce-container">
        {/* Section Header */}
        <div className="pce-header">
          <p className="pce-eyebrow">
            <SlidersHorizontal size={14} />
            TRANSPARENT SCOPE & PRICING
          </p>
          <h2 className="pce-heading" id="pce-heading">
            How much would <em>your project be?</em>
          </h2>
          <p className="pce-sub">
            Select your package, scope and optional features, 
            to see an estimated budget and timeline before we discuss your project.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="pce-grid">
          {/* Left: Options & Sliders */}
          <div className="pce-config-panel">
            {/* 1. Project Type */}
            <div>
              <div className="pce-group-title">
                <span>1. Select a Package</span>
                <span className="pce-pill-badge">{PROJECT_TYPES.length} options</span>
              </div>
              <div className="pce-options-grid">
                {PROJECT_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      className={`pce-option-card ${isSelected ? "active" : ""}`}
                      aria-pressed={isSelected}
                      onClick={() => setSelectedType(type.id)}
                    >
                      <div className="pce-option-header">
                        <div className="pce-option-icon">
                          <Icon size={16} />
                        </div>
                        {isSelected && <Zap size={14} className="text-[#111111]" />}
                      </div>
                      <h3 className="pce-option-name">{type.name}</h3>
                      <p className="pce-option-desc">{type.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Scope / Scale Slider */}
            <div>
              <div className="pce-group-title">
                <span>2. Scope & Volume</span>
                <span className="pce-pill-badge">Pages / Workflows</span>
              </div>
              <div className="pce-slider-wrap">
                <div className="pce-slider-labels">
                  <span className="text-sm text-[#4b5563]">Core views or user flows:</span>
                  <span className="pce-slider-val">{scopeUnits} {scopeUnits === 1 ? "View" : "Views"}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={scopeUnits}
                  onChange={(e) => setScopeUnits(Number(e.target.value))}
                  className="pce-slider"
                  aria-label="Scope views count"
                />
                <div className="flex justify-between text-xs text-[#6b7280] px-1 font-medium">
                  <span>1 Single View</span>
                  <span>5 Standard</span>
                  <span>12+ Enterprise</span>
                </div>
              </div>
            </div>

            {/* 3. Add-on Features */}
            <div>
              <div className="pce-group-title">
                <span>3. High-Precision Enhancements</span>
                <span className="pce-pill-badge">Optional</span>
              </div>
              <div className="pce-addons-grid">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  const priceLabel = currency === "USD" ? `+$${addon.priceUSD}` : `+₹${addon.priceINR.toLocaleString()}`;
                  return (
                    <div
                      key={addon.id}
                      className={`pce-addon-chip ${isChecked ? "active" : ""}`}
                      onClick={() => toggleAddon(addon.id)}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === " " || e.key === "Enter") {
                          e.preventDefault();
                          toggleAddon(addon.id);
                        }
                      }}
                    >
                      <div className="pce-addon-left">
                        <div className="pce-checkbox">
                          {isChecked && <Check size={12} strokeWidth={3} />}
                        </div>
                        <span className="pce-addon-text">{addon.name}</span>
                      </div>
                      <span className="text-xs font-mono text-[#111111] font-semibold">{priceLabel}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Live Quote Summary Card */}
          <div className="pce-summary-card">
            <div className="pce-summary-header">
              <div className="pce-summary-badge">
                <Flame size={12} />
                <span>Live Project Scope</span>
              </div>
              <div className="pce-currency-toggle" role="group" aria-label="Currency selection">
                <button
                  type="button"
                  className={`pce-currency-btn ${currency === "USD" ? "active" : ""}`}
                  aria-pressed={currency === "USD"}
                  onClick={() => setCurrency("USD")}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  className={`pce-currency-btn ${currency === "INR" ? "active" : ""}`}
                  aria-pressed={currency === "INR"}
                  onClick={() => setCurrency("INR")}
                >
                  INR (₹)
                </button>
              </div>
            </div>

            {/* Price display */}
            <div className="pce-price-block">
              <span className="pce-price-label">Estimated Investment</span>
              <div className="pce-price-val" role="status" aria-live="polite" aria-atomic="true">
                {currency === "USD" ? `$${estimatedCost.toLocaleString()}` : `₹${estimatedCost.toLocaleString()}`}
              </div>
              <span className="pce-price-sub">Fixed-fee sprint pricing · No hidden costs</span>
            </div>

            {/* Timeline & Inclusions */}
            <div className="pce-deliverables">
              <div className="pce-timeline-row">
                <span className="pce-timeline-label">
                  <Clock size={15} />
                  Turnaround Timeline
                </span>
                <span className="pce-timeline-val">
                  {selectedAddons.includes("fast-track") ? `~${estimatedDays} Days` : `~${estimatedDays / 7} ${estimatedDays === 7 ? "Week" : "Weeks"}`}
                </span>
              </div>

              <div className="pce-included-list">
                <div className="pce-included-item">
                  <Check size={14} className="pce-check-icon" />
                  <span>Production-ready source code (React / Next.js)</span>
                </div>
                <div className="pce-included-item">
                  <Check size={14} className="pce-check-icon" />
                  <span>Fluid responsive layouts (Mobile, Tablet, Desktop)</span>
                </div>
                <div className="pce-included-item">
                  <Check size={14} className="pce-check-icon" />
                  <span>Performance and loading optimization</span>
                </div>
                <div className="pce-included-item">
                  <Check size={14} className="pce-check-icon" />
                  <span>30-day post-launch warranty & handover</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              type="button"
              className="pce-action-btn"
              onClick={handleDiscussEstimate}
              title="Open estimate details in WhatsApp"
            >
              <MessageCircle size={18} strokeWidth={2.3} />
              <span>Discuss This Estimate on WhatsApp</span>
              <ArrowRight size={16} strokeWidth={2.4} />
            </button>

            {onBookCall && (
              <button
                type="button"
                onClick={onBookCall}
                style={{
                  background: "none",
                  border: "none",
                  color: "#6b7280",
                  fontSize: "12px",
                  marginTop: "10px",
                  cursor: "pointer",
                  textDecoration: "underline",
                  textAlign: "center",
                  width: "100%",
                  display: "block",
                }}
              >
                Prefer email? Jump to contact section
              </button>
            )}

            <p className="pce-guarantee">
              <ShieldCheck size={13} className="inline mr-1 text-[#111111]" />
              Opens directly in WhatsApp with your project breakdown pre-filled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
