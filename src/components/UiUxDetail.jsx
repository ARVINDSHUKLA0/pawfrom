import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

// Edit content here — everything below maps directly to the UI
const problems = [
  "High bounce rate, low dwell time",
  "Visitors don't understand your offer immediately",
  "Design feels inconsistent across pages",
  "No clear conversion path",
];

const process = [
  "UX Audit",
  "Strategy",
  "Wireframes",
  "UI Design",
  "Prototype",
  "Dev Handoff",
];

const outcomes = [
  { value: "+61%", label: "Conversion rate" },
  { value: "+2.4×", label: "Dwell time" },
  { value: "-39%", label: "Bounce reduction" },
];

// Add / remove reviews here — slider adapts automatically
const testimonials = [
  {
    quote: "Our website finally looks and feels like the company we've become — not the company we were.",
    name: "James Olu",
    role: "Creative Director, Mural Studio",
  },
  {
    quote: "Visitors stopped bouncing after the first section. The new flow just makes sense the moment you land.",
    name: "Sana Mirza",
    role: "Founder, Kova Skincare",
  },
  {
    quote: "Every page now has one clear job. Conversion went up without adding a single extra ad.",
    name: "Priya Nair",
    role: "CEO, Pebble Foods",
  },
];

const UiUxDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => setActiveIndex(index);

  return (
    <section className="uiux-section">
      <div className="container uiux-container">
        <span className="uiux-badge mb-4">UI / UX Design</span>

        <h2 className="uiux-heading mb-3">Websites People Remember.</h2>

      

        <p className="uiux-description mb-0">
          We design digital experiences that convert because they're built to
          feel, not just function. Every scroll, click, and hover is an
          opportunity to reinforce trust and drive action.
        </p>

        <div className="row uiux-columns gy-5">
          <div className="col-12 col-lg-6">
            <p className="uiux-label mb-3">Common Problems</p>
            <ul className="uiux-problem-list mb-0">
              {problems.map((problem) => (
                <li key={problem}>
                  <FontAwesomeIcon icon={faInfoCircle} className="uiux-problem-icon" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-lg-6">
            <p className="uiux-label mb-3">Our Process</p>
            <ul className="uiux-process-list mb-0">
              {process.map((step, index) => (
                <li key={step}>
                  <span className="uiux-process-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="uiux-process-name">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="uiux-divider" />

        <p className="uiux-label mb-4">Client Outcomes</p>
        <div className="row uiux-outcomes gy-4">
          {outcomes.map((outcome) => (
            <div className="col-12 col-sm-4" key={outcome.label}>
              <p className="uiux-outcome-value mb-1">{outcome.value}</p>
              <p className="uiux-outcome-label mb-0">{outcome.label}</p>
            </div>
          ))}
        </div>

        {/* ---------- Testimonial Slider ---------- */}
        <div className="uiux-testimonial-slider">
          <div
            className="uiux-testimonial-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div className="uiux-testimonial" key={testimonial.name}>
                <span className="uiux-quote-mark mb-3">&rdquo;</span>
                <p className="uiux-quote-text mb-4">{testimonial.quote}</p>
                <div className="uiux-testimonial-author">
                  <span className="uiux-author-dot"></span>
                  <div>
                    <p className="uiux-author-name mb-0">{testimonial.name}</p>
                    <p className="uiux-author-role mb-0">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {testimonials.length > 1 && (
            <div className="uiux-slider-dots">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Go to review ${index + 1}`}
                  className={`uiux-dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          )}
        </div>

        <hr className="uiux-divider" />

        <div className="uiux-cta-row">
          <a href="#start-project" className="uiux-cta-btn">
            Start UI / UX Design project
            <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </a>
          <a href="/website" className="uiux-cta-link">
            View case studies
          </a>
        </div>
      </div>
    </section>
  )
}

export default UiUxDetail