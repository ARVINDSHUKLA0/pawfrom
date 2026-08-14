"use client";
import React, { useState } from 'react'
import '../packaging-design/PackagingDesign.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

 
const heroOutcomes = [
    { value: "+34%", label: "Shell pick-up rate" },
    { value: "+28%", label: " Repeat purchase" },
    { value: "5.1x", label: "Social shares" },
];

const problems = [
    "Lost on crowded shelves — no visual differentiation",
    "Packaging doesn’t reflect your brand premium",
    "Unboxing experience leaves no impression",
    "Print specs and material decisions feel like an afterthought",
];

const process = [
    { name: "Research", desc: "Category audit, shelf placement study, consumer behavior analysis." },
    { name: "Structure", desc: "Dieline development, material exploration, sustainable options." },
    { name: "Surface Design", desc: "Typography, illustration, color, finish — crafted for production." },
    { name: "Material Selection", desc: "Paper stocks, coatings, embossing, foiling, inserts." },
    { name: "Prototype", desc: "Physical mock-ups reviewed in real retail and shipping conditions." },
    { name: "Production", desc: "Print-ready files, supplier liaison, QC support." },
];

const projects = [
    {
        number: "01",
        title: "Pebble Foods Range",
        year: "2025",
        description: "Full packaging redesign for a plant-based snack brand across 8 SKUs. Increased shelf pick-up by 34% and cut production costs by redesigning the dieline..'",
        tags: ["Primary Packaging", "Labels", "Print"],
        bg: "#4A7c59",
        shapeColor: "#669273",
        watermarkColor: "#467554",
        textColor: "black",
    },
    {
        number: "02",
        title: "Lune Fragrance",
        year: "2025",
        description: "Secondary packaging for a boutique fragrance collection. Soft-touch laminate, blind emboss, and magnetic closure — designed to be kept long after the product is gone.",
        tags: ["Luxury Packaging", "Foiling", "Unboxing"],
        bg: "Black",
        shapeColor: " #34312B",
        watermarkColor: "rgba(255,255,255,0.12)",
        textColor: "#f2f2f7",
    },
    {
        number: "03",
        title: "Ondo Supplements",
        year: "2024",
        description: "Clean, clinical supplement packaging that communicates efficacy without sterility. Custom icon set and modular label system scales across 24 products.",
        tags: ["Packaging", "Brand System", "Retail"],
        bg: "#F0F4F8",
        shapeColor: " #C3D1FA",
        watermarkColor: "rgba(0,0,0,0.1)",
        textColor: "#2a2a2a",
    },
    {
        number: "04",
        title: "Veld Botanicals",
        year: "2024",
        description: "Sustainable packaging system for a botanical skincare range. Recycled board, water-based inks, and illustrated botanicals that make eco-credentials feel premium.",
        tags: ["Eco Packaging", "Illustration", "D2C"],
        bg: "#2C3A2A",
        shapeColor: "#455642",
        watermarkColor: "rgba(255,255,255,0.1)",
        textColor: "#f2f2f2",
    },
];

// Add / remove reviews here — slider adapts automatically
const testimonials = [
    {
        quote: "Our new packaging turned first-time buyers into loyalists. The unboxing experience alone became a marketing asset we didn't anticipate.",
        name: "Priya Nair",
        role: "CEO, Pebble Foods",
    },
];

const page = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <Navbar />

            {/* ---------- Hero ---------- */}
            <section className="bip-hero-section">
                <div className="container bip-hero-container">
                    <p className="bip-hero-breadcrumb mb-3">Services • Packaging Design</p>
                    <span className="bip-hero-badge mb-4" style={{ color: "#C8A057" }}>Packaging Design</span>

                    <h1 className="bip-hero-heading mb-3">Products That Get Picked First.</h1>
                    <div className='d-sm-flex d-block justify-content-between align-items-center '>


                        <p className="bip-hero-description mb-4">
                            Packaging is your most powerful salesperson. We design structures and surfaces that win at the shelf, delight in the unboxing, and get shared on social — without you asking.
                        </p>
                        <div>
                            <a href="#bip-projects" className="bip-hero-cta-btn mb-5" style={{ backgroundColor: "#C8A057" }}>
                                View Projects
                                <FontAwesomeIcon icon={faArrowDown} className="ms-2" />
                            </a>
                        </div>
                    </div>
                    <div className="row bip-hero-outcomes gy-3">
                        {heroOutcomes.map((outcome) => (
                            <div className="col-12 col-sm-4" key={outcome.label}>
                                <div className="bip-hero-outcome-card">
                                    <p className="bip-hero-outcome-value mb-1" style={{ color: "#C8A057" }}>{outcome.value}</p>
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
                                You have 2.7 seconds at the shelf. Make them count.
                            </h2>
                        </div>

                        <div className="col-12 col-lg-6">
                            <ul className="bip-prob-list mb-0">
                                {problems.map((problem, index) => (
                                    <li key={problem}>
                                        <span className="bip-prob-num" style={{ color: "#C8A057" }}>
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
                                    <span className="bip-proc-num" style={{ backgroundColor: "#C8A057" }}>
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
            <section id="bip-projects" className="bip-proj-section packaging-projects">
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
                                <span className="bip-test-quote-mark mb-3" style={{ color: "#C8A057" }}>&rdquo;</span>
                                <p className="bip-test-quote mb-4">{testimonial.quote}</p>
                                <div className="bip-test-author">
                                    <span className="bip-test-author-dot" style={{ backgroundColor: "#C8A057" }}>
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
                            <a href="#start" className="bip-cta-primary-btn" style={{ backgroundColor: "#C8A057" }}>
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