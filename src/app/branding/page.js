"use client";
import React, { useState } from 'react'
import '../branding/branding.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


// ---------- Edit all content here ----------
const heroOutcomes = [
  { value: "+84%", label: "Recognition lift" },
  { value: "3.2×", label: "Brand recall" },
  { value: "91%", label: "Client retention" },
];

const problems = [
  "You look like everyone else in your category",
  "Customers forget you after the first touchpoint",
  "Your visual system breaks down across mediums",
  "No clear brand personality to guide decisions",
];

const process = [
  { name: "Discovery", desc: "Brand audit, stakeholder interviews, competitive landscape review." },
  { name: "Research", desc: "Consumer psychology, category conventions, whitespace mapping." },
  { name: "Concept", desc: "3 distinct brand directions with rationale and mood boards." },
  { name: "Iteration", desc: "Refinement sprints with structured feedback loops." },
  { name: "Execution", desc: "Full system build-out across all touchpoints." },
  { name: "Delivery", desc: "Brand guidelines, asset library, and launch support." },
];

const projects = [
  {
    number: "01",
    title: "Kova Skincare",
    year: "2025",
    description: "A complete identity overhaul for a premium DTC skincare brand entering Sephora and 40+ independent retailers. Built around the concept of 'quiet luxury meets clinical confidence.'",
    tags: ["Brand Identity", "Guidelines", "Typography"],
    bg: "#e8d9c3",
    shapeColor: "rgba(255,255,255,0.35)",
    watermarkColor: "rgba(255,255,255,0.55)",
    textColor: "#2a2015",
  },
  {
    number: "02",
    title: "Mural Studio",
    year: "2025",
    description: "Identity system for a multidisciplinary creative studio. Built to flex across environments — physical signage, digital, editorial — without losing coherence.",
    tags: ["Brand Identity", "Motion", "Digital"],
    bg: "#171735",
    shapeColor: "rgba(120,50,90,0.6)",
    watermarkColor: "rgba(255,255,255,0.12)",
    textColor: "#f2f2f7",
  },
  {
    number: "03",
    title: "Forma Lab",
    year: "2024",
    description: "Editorial brand system for a high-end architecture studio expanding across European cities. Rooted in proportion, restraint, and material honesty.",
    tags: ["Brand Identity", "Editorial", "Print"],
    bg: "#efece6",
    shapeColor: "rgba(0,0,0,0.12)",
    watermarkColor: "rgba(0,0,0,0.1)",
    textColor: "#2a2a2a",
  },
  {
    number: "04",
    title: "Lune Co.",
    year: "2024",
    description: "A boutique fragrance brand built from scratch — name, mark, color language, and olfactory storytelling unified into a single cohesive world.",
    tags: ["Brand Identity", "Packaging", "Logo"],
    bg: "#0a0a0a",
    shapeColor: "rgba(255,255,255,0.08)",
    watermarkColor: "rgba(255,255,255,0.1)",
    textColor: "#f2f2f2",
  },
];

// Add / remove reviews here — slider adapts automatically
const testimonials = [
  {
    quote: "Pawform gave us an identity that felt true. Not designed — discovered. Every element they created felt like it had always existed.",
    name: "Sana Mirza",
    role: "Founder, Kova Skincare",
  },
  {
    quote: "They showed us the answer. There is a meaningful difference, and it shows in every touchpoint we've launched since.",
    name: "James Olu",
    role: "Creative Director, Mural Studio",
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
          <p className="bip-hero-breadcrumb mb-3">Services • Brand Identity</p>
          <span className="bip-hero-badge mb-4 text-primary">Brand Identity</span>

          <h1 className="bip-hero-heading mb-3">Become Instantly Recognizable.</h1>
          <div className='d-sm-flex d-block align-items-center  justify-content-between'>
            <p className="bip-hero-description mb-4">
              We build brand identities that feel inevitable — like they could
              not have been any other way. Every mark, color, and word is a
              deliberate decision that compounds into unmistakable presence.
            </p>

            <div>
              <a href="#bip-projects" className="bip-hero-cta-btn mb-5 bg-primary">
                View Projects
                <FontAwesomeIcon icon={faArrowDown} className="ms-2" />
              </a>
            </div>
          </div>
          <div className="row bip-hero-outcomes gy-3">
            {heroOutcomes.map((outcome) => (
              <div className="col-12 col-sm-4" key={outcome.label}>
                <div className="bip-hero-outcome-card">
                  <p className="bip-hero-outcome-value mb-1 text-primary">{outcome.value}</p>
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
                Your brand is the first impression that has to last forever.
              </h2>
            </div>

            <div className="col-12 col-lg-6">
              <ul className="bip-prob-list mb-0">
                {problems.map((problem, index) => (
                  <li key={problem}>
                    <span className="bip-prob-num text-primary">
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
                  <span className="bip-proc-num bg-primary">
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
      <section id="bip-projects" className="bip-proj-section branding-projects">
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
                <span className="bip-test-quote-mark mb-3">&rdquo;</span>
                <p className="bip-test-quote mb-4">{testimonial.quote}</p>
                <div className="bip-test-author">
                  <span className="bip-test-author-dot bg-primary">
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
              <a href="#start" className="bip-cta-primary-btn bg-primary">
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