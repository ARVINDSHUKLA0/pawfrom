"use client";
import React, { useState } from 'react'
import '../marketing/marketing.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


// ---------- Edit all content here ----------
const heroOutcomes = [
  { value: "+2.8×", label: "ROAS improvement" },
  { value: "−31%", label: "CAC reduction" },
  { value: "+4.2×", label: "Organic growth" },
];

const problems = [
  "Campaigns don't feel like your brand — inconsistent voice",
  "Creative gets clicks but not customer",
  "No unified messaging across channels",
  "No system for scaling content without losing quality",
];

const process = [
  { name: "Audit", desc: "Performance review of existing campaigns, channels, and creative assets." },
  { name: "Strategy", desc: "Target audience definition, positioning, channel mix, and messaging framework." },
  { name: "Creative Brief", desc: "Campaign concept, creative direction, tone of voice guidelines." },
  { name: "Content", desc: "Photography, copy, video, and motion — built to brand standards." },
  { name: "Distribution", desc: "Paid, organic, and earned media orchestrated as one system." },
  { name: "Optimize", desc: "Weekly reporting, A/B testing, and continuous creative iteration." },
];

const projects = [
  {
    number: "01",
    title: "Pebble “Eat Real” Campaign",
    year: "2025",
    description: "Brand campaign launching Pebble into mainstream grocery. Eat Real became the company’s operating slogan — from shelf to social to staff culture.'",
    tags: ["Campaign", "Social", "OOH"],
    bg: "#4A7C59",
    shapeColor: "rgba(255, 255, 255, 0.19)",
    watermarkColor: "rgba(255,255,255,0.55)",
    textColor: "#2a2015",
  },
  {
    number: "02",
    title: "Kova Launch Strategy",
    year: "2025",
    description: "Full go-to-market for Kova’s Selfridges launch. 3.2M impressions in week one, 90% sell-through on launch allocation, and a 14-day waitlist.",
    tags: ["Launch", "Influencer", "Paid Media"],
    bg: "#EBD5C4",
    shapeColor: "#E0CBB5",
    watermarkColor: "rgba(255,255,255,0.12)",
    textColor: "black",
  },
  {
    number: "03",
    title: "Forma Brand Content",
    year: "2024",
    description: "Thought leadership content strategy for B2B growth. 4.2× organic reach increase, 3 inbound enterprise enquiries per week from LinkedIn alone.",
    tags: ["Content", "LinkedIn", "Editorial"],
    bg: "#f2ede6",
    shapeColor: "#DFD7CC",
    watermarkColor: "rgba(0,0,0,0.1)",
    textColor: "#2a2a2a",
  },
  {
    number: "04",
    title: "Ondo Growth Engine",
    year: "2024",
    description: "Full-funnel marketing system for DTC supplement brand. CAC reduced by 31%, LTV increased by 2.1× through post-purchase nurture and subscription migration.",
    tags: ["Performance", "Email", "CRO"],
    bg: "#0F2318",
    shapeColor: "rgba(255,255,255,0.08)",
    watermarkColor: "rgba(255,255,255,0.1)",
    textColor: "#f2f2f2",
  },
];

// Add / remove reviews here — slider adapts automatically
const testimonials = [
  {
    quote: "First time a campaign actually built our brand instead of just spending budget. The brand story Pawform built became the backbone of everything we do now.",
    name: "Akira Tanaka",
    role: "CMO, Forma Lab",
  },
  {
    quote: "First time a campaign actually built our brand instead of just spending budget. The brand story Pawform built became the backbone of everything we do now.",
    name: "Akira Tanaka",
    role: "CMO, Forma Lab",
  },

];

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Navbar  theme="light" />

      {/* ---------- Hero ---------- */}
      <section className="bip-hero-section">
        <div className="container bip-hero-container">
          <p className="bip-hero-breadcrumb mb-3">Services • marketing</p>
          <span className="bip-hero-badge mb-4 text-success">Brand Identity</span>

          <h1 className="bip-hero-heading mb-3">Marketing That Drives Growth.</h1>
          <div className='d-sm-flex d-block align-items-center  justify-content-between'>
            <p className="bip-hero-description mb-4">
              We build campaigns on a clear brand foundation — not just creative that looks good. Strategy comes first. Every execution is traceable back to your brand's core promise.
            </p>

            <div>
              <a href="#bip-projects" className="bip-hero-cta-btn mb-5 bg-success">
                View Projects
                <FontAwesomeIcon icon={faArrowDown} className="ms-2" />
              </a>
            </div>
          </div>
          <div className="row bip-hero-outcomes gy-3">
            {heroOutcomes.map((outcome) => (
              <div className="col-12 col-sm-4" key={outcome.label}>
                <div className="bip-hero-outcome-card">
                  <p className="bip-hero-outcome-value mb-1 text-success">{outcome.value}</p>
                  <p className="bip-hero-outcome-label mb-0">{outcome.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Problem ---------- */}
      <section className="bip-prob-section">
        <div className="container bip-prob-container">
          <div className="row bip-prob-row gy-4">
            <div className="col-12 col-lg-6">
              <p className="bip-prob-label mb-3">The Problem</p>
              <h2 className="bip-prob-heading mb-0">
                Great marketing starts with a great brand story.
              </h2>
            </div>

            <div className="col-12 col-lg-6">
              <ul className="bip-prob-list mb-0">
                {problems.map((problem, index) => (
                  <li key={problem}>
                    <span className="bip-prob-num text-success">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="bip-proc-section">
        <div className="container bip-proc-container">
          <p className="bip-proc-label mb-3">How We Do It</p>
          <h2 className="bip-proc-heading mb-5">Our Process</h2>

          <div className="row bip-proc-grid gy-4">
            {process.map((step, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={step.name}>
                <div className="bip-proc-card">
                  <span className="bip-proc-num bg-success">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="bip-proc-name mb-2">{step.name}</h3>
                  <p className="bip-proc-desc mb-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      {/* <section id="bip-projects" className="bip-proj-section"> */}
      <section
        id="bip-projects"
        className="bip-proj-section marketing-projects"
      >
        <div className="container bip-proj-container">
          <div className="row bip-proj-header gy-3">
            <div className="col-12 col-lg-6">
              <p className="bip-proj-label mb-3">Selected Work</p>
              <h2 className="bip-proj-heading mb-0">Projects</h2>
            </div>
            <div className="col-12 col-lg-6">
              <p className="bip-proj-intro mb-0">
                A selection of recent brand identity work across industries.
              </p>
            </div>
          </div>

          <div className="row bip-proj-grid gy-4">
            {projects.map((project) => (
              <div className="col-12 col-md-6" key={project.title}>
                <a href="#" className="bip-proj-card" style={{ background: project.bg }}>
                  <div className="bip-proj-shape" style={{ background: project.shapeColor }}></div>
                  <span className="bip-proj-arrow">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                  <span className="bip-proj-number" style={{ color: project.textColor }}>
                    {project.number}
                  </span>
                  <span className="bip-proj-watermark" style={{ color: project.watermarkColor }}>
                    {project.title.split(" ")[0]}
                  </span>

                  <div className="bip-proj-footer">
                    <div className="bip-proj-footer-top">
                      <h3 className="bip-proj-title mb-0" style={{ color: project.textColor }}>
                        {project.title}
                      </h3>
                      <span className="bip-proj-year" style={{ color: project.textColor }}>
                        {project.year}
                      </span>
                    </div>
                    <p className="bip-proj-desc" style={{ color: project.textColor }}>
                      {project.description}
                    </p>
                    <div className="bip-proj-tags">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bip-proj-tag"
                          style={{ color: project.textColor, borderColor: project.textColor }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Testimonial ---------- */}
      <section className="bip-test-section">
        <div className="container bip-test-container">
          <div className="bip-test-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div className="bip-test-slide" key={testimonial.name}>
                <span className="bip-test-quote-mark mb-3 text-success">&rdquo;</span>
                <p className="bip-test-quote mb-4">{testimonial.quote}</p>
                <div className="bip-test-author">
                  <span className="bip-test-author-dot bg-success">
                    {testimonial.name.charAt(0)}
                  </span>
                  <div>
                    <p className="bip-test-author-name mb-0">{testimonial.name}</p>
                    <p className="bip-test-author-role mb-0">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {testimonials.length > 1 && (
            <div className="bip-test-dots">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Go to review ${index + 1}`}
                  className={`bip-test-dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bip-cta-section">
        <div className="container bip-cta-container">
          <p className="bip-cta-label mb-3">Ready To Start?</p>

          <div className="row bip-cta-row gy-4">
            <div className="col-12 col-lg-7">
              <h2 className="bip-cta-heading mb-0">
                Let's build something <span className="bip-cta-script">remarkable.</span>
              </h2>
            </div>

            <div className="col-12 col-lg-5 bip-cta-btn-col">
              <a href="#start" className="bip-cta-primary-btn bg-success">
                Start a Brand Identity project
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </a>
              <a href="/#services" className="bip-cta-secondary-btn">
                View all services
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}

export default page