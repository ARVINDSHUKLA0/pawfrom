import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

// Edit content here — everything below maps directly to the UI
const problems = [
  "Lost on crowded shelves",
  "Packaging doesn't reflect brand premium",
  "Unboxing experience leaves no impression",
  "Print specs always feel like an afterthought",
];

const process = [
  "Research",
  "Structure",
  "Surface Design",
  "Material Selection",
  "Prototype",
  "Production",
];

const outcomes = [
  { value: "+34%", label: "Shelf pick-up" },
  { value: "+28%", label: "Repeat purchase" },
  { value: "5.1×", label: "Social shares" },
];

// Add / remove reviews here — slider adapts automatically
const testimonials = [
  {
    quote: "Our new packaging turned first-time buyers into loyalists. The unboxing alone became a marketing asset.",
    name: "Priya Nair",
    role: "CEO, Pebble Foods",
  },
  {
    quote: "The structure alone stopped people mid-scroll. We saw shelf pick-up jump within the first month.",
    name: "Arjun Verma",
    role: "Founder, Kova Skincare",
  },
  {
    quote: "Every material choice felt intentional. It finally looks like the premium product it actually is.",
    name: "Meera Kapoor",
    role: "Brand Manager, Ondo",
  },
];

const PackagingDesignDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => setActiveIndex(index);

  return (
    <section className="pkg-section">
      <div className="container pkg-container">
        <span className="pkg-badge mb-4">Packaging Design</span>

        <h2 className="pkg-heading mb-3">Products That Get Picked First.</h2>

        <p className="pkg-description mb-0">
          Packaging is your most powerful salesperson. We design structures
          and surfaces that win at the shelf, delight in the unboxing, and
          get shared on social — without you asking.
        </p>

        <div className="row pkg-columns gy-5">
          <div className="col-12 col-lg-6">
            <p className="pkg-label mb-3">Common Problems</p>
            <ul className="pkg-problem-list mb-0">
              {problems.map((problem) => (
                <li key={problem}>
                  <FontAwesomeIcon icon={faInfoCircle} className="pkg-problem-icon" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-lg-6">
            <p className="pkg-label mb-3">Our Process</p>
            <ul className="pkg-process-list mb-0">
              {process.map((step, index) => (
                <li key={step}>
                  <span className="pkg-process-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pkg-process-name">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="pkg-divider" />

        <p className="pkg-label mb-4">Client Outcomes</p>
        <div className="row pkg-outcomes gy-4">
          {outcomes.map((outcome) => (
            <div className="col-12 col-sm-4" key={outcome.label}>
              <p className="pkg-outcome-value mb-1">{outcome.value}</p>
              <p className="pkg-outcome-label mb-0">{outcome.label}</p>
            </div>
          ))}
        </div>

        {/* ---------- Testimonial Slider ---------- */}
        <div className="pkg-testimonial-slider">
          <div
            className="pkg-testimonial-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div className="pkg-testimonial" key={testimonial.name}>
                <span className="pkg-quote-mark mb-3">&rdquo;</span>
                <p className="pkg-quote-text mb-4">{testimonial.quote}</p>
                <div className="pkg-testimonial-author">
                  <span className="pkg-author-dot"></span>
                  <div>
                    <p className="pkg-author-name mb-0">{testimonial.name}</p>
                    <p className="pkg-author-role mb-0">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {testimonials.length > 1 && (
            <div className="pkg-slider-dots">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Go to review ${index + 1}`}
                  className={`pkg-dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          )}
        </div>

        <hr className="pkg-divider" />

        <div className="pkg-cta-row">
          <a href="#start-project" className="pkg-cta-btn">
            Start Packaging Design project
            <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </a>
          <a href="/packaging-design" className="pkg-cta-link">
            View case studies
          </a>
        </div>
      </div>
    </section>
  )
}

export default PackagingDesignDetail