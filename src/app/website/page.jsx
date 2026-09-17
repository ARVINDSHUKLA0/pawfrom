"use client";
import React, { useState } from 'react'
import '../website/website.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


// ---------- Edit all content here ----------
const heroOutcomes = [
    { value: "+61%", label: "Conversion rate" },
    { value: "+2.4×", label: "Dwell time" },
    { value: "−39%", label: "Bounce reduction" },
];

const problems = [
    "High bounce rate — visitors leave in under 10 seconds",
    "Your offer isn't understood immediately",
    "Design feels inconsistent across pages and devices",
    "No clear conversion path — users don't know what to do next",
];

const process = [
    { name: "UX Audit", desc: "Heuristic evaluation, analytics review, session recording analysis." },
    { name: "Strategy", desc: "Information architecture, user journeys, conversion mapping." },
    { name: "Wireframes", desc: "Lo-fi wireframes validated against real user expectations." },
    { name: "UI Design", desc: "High-fidelity design with motion principles and component system." },
    { name: "Prototype", desc: "Interactive prototype for stakeholder sign-off and user testing." },
    { name: "Dev Handoff", desc: "Figma with annotated specs, design tokens, and dev support." },
];

const projects = [
    {
        number: "01",
        title: "Mural Studio Website",
        year: "2025",
        description: "Portfolio website for a creative studio built for speed and cinematic scroll experiences. Custom CMS integration and 97 Lighthouse performance score.'",
        tags: ["Website", "Motion", "CMS"],
        bg: "#e8d9c3",
        shapeColor: "rgba(255,255,255,0.35)",
        watermarkColor: "rgba(255,255,255,0.55)",
        textColor: "#2a2015",
    },
    {
        number: "02",
        title: "Forma Lab Platform",
        year: "2025",
        description: "Project management platform for an architecture studio handling 60+ concurrent projects. Reduced PM overhead by 40% through intelligent information hierarchy.",
        tags: ["Product Design", "Dashboard", "B2B"],
        bg: "#171735",
        shapeColor: "rgba(120,50,90,0.6)",
        watermarkColor: "rgba(255,255,255,0.12)",
        textColor: "#f2f2f7",
    },
    {
        number: "03",
        title: "Kova DTC Store",
        year: "2024",
        description: "Shopify storefront redesign that increased average order value by 2.3× through strategic cross-selling UX and a streamlined product page hierarchy.",
        tags: ["E-commerce", "UX", "Shopify"],
        bg: "#efece6",
        shapeColor: "rgba(0,0,0,0.12)",
        watermarkColor: "rgba(0,0,0,0.1)",
        textColor: "#2a2a2a",
    },
    {
        number: "04",
        title: "Ondo App",
        year: "2024",
        description: "Health tracking companion app for a supplement brand. Personalized routines, streak mechanics, and an onboarding flow with 84% completion rate.",
        tags: ["Mobile App", "Health", "iOS"],
        bg: "#0a0a0a",
        shapeColor: "rgba(255,255,255,0.08)",
        watermarkColor: "rgba(255,255,255,0.1)",
        textColor: "#f2f2f2",
    },
];

// Add / remove reviews here — slider adapts automatically
const testimonials = [
    {
        quote: "Our website finally looks and feels like the company we've become — not the company we were three years ago. First week live, enquiries doubled.",
        name: "James Olu",
        role: "Creative Director, Mural Studio",
    },
    {
        quote: "Our website finally looks and feels like the company we've become — not the company we were three years ago. First week live, enquiries doubled.",
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
                    <p className="bip-hero-breadcrumb mb-3">Services • UI/UX DESIGN</p>
                    <span className="bip-hero-badge mb-4">Brand Identity</span>

                    <h1 className="bip-hero-heading mb-3">Website People Remember.</h1>
                    <div className='d-sm-flex d-block align-items-center  justify-content-between'>
                        <p className="bip-hero-description mb-4">
                            We design digital experiences that convert because they've been built to feel, not just function. Every scroll, click, and hover is an opportunity to reinforce trust and drive action.
                        </p>

                        <div>
                            <a href="#bip-projects" className="bip-hero-cta-btn mb-5" style={{ backgroundColor: "#5B4ABC" }}>
                                View Projects
                                <FontAwesomeIcon icon={faArrowDown} className="ms-2" />
                            </a>
                        </div>
                    </div>
                    <div className="row bip-hero-outcomes gy-3">
                        {heroOutcomes.map((outcome) => (
                            <div className="col-12 col-sm-4" key={outcome.label}>
                                <div className="bip-hero-outcome-card">
                                    <p className="bip-hero-outcome-value mb-1" style={{ color: "#5B4ABC" }}>{outcome.value}</p>
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
                                Your website is your best-performing brand ambassador.
                            </h2>
                        </div>

                        <div className="col-12 col-lg-6">
                            <ul className="bip-prob-list mb-0">
                                {problems.map((problem, index) => (
                                    <li key={problem}>
                                        <span className="bip-prob-num" style={{ color: "#5B4ABC" }}>
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
                                    <span className="bip-proc-num" style={{ backgroundColor: "#5B4ABC" }}>
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
            <section id="bip-projects" className="bip-proj-section uiux-projects">
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

                    {/* <div className="row bip-proj-grid gy-4">
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
                    </div> */}
                </div>
            </section>

            {/* ---------- Testimonial ---------- */}
            <section className="bip-test-section">
                <div className="container bip-test-container">
                    <div className="bip-test-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                        {testimonials.map((testimonial) => (
                            <div className="bip-test-slide" key={testimonial.name}>
                                <span className="bip-test-quote-mark mb-3" style={{ color: "#5B4ABC" }}>&rdquo;</span>
                                <p className="bip-test-quote mb-4">{testimonial.quote}</p>
                                <div className="bip-test-author">
                                    <span className="bip-test-author-dot" style={{ backgroundColor: "#5B4ABC" }}>
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
                            <a href="#start" className="bip-cta-primary-btn" style={{ backgroundColor: "#5B4ABC" }}>
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