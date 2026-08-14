import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'lucide-react';

// Edit content here — everything below maps directly to the UI
const problems = [
  "Campaigns that don't feel like your brand",
  "Inconsistent messaging across channels",
  "Creative that gets clicks but not customers",
  "No system for scaling content",
];

const process = [
  "Audit",
  "Strategy",
  "Creative Brief",
  "Content",
  "Distribution",
  "Optimize",
];

const outcomes = [
  { value: "+2.8×", label: "ROAS improvement" },
  { value: "-31%", label: "CAC reduction" },
  { value: "+4.2×", label: "Organic growth" },
];

// Add / remove reviews here — slider adapts automatically
const testimonials = [
  {
    quote: "First time a campaign actually built our brand instead of just spending budget.",
    name: "Akira Tanaka",
    role: "CMO, Forma Lab",
  },
  {
    quote: "Our channels finally speak the same language. CAC dropped within the first two months.",
    name: "James Olu",
    role: "Creative Director, Mural Studio",
  },
  {
    quote: "We stopped guessing. Every piece of content now ties back to a strategy we actually trust.",
    name: "Sana Mirza",
    role: "Founder, Kova Skincare",
  },
];

const MarketingDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => setActiveIndex(index);

  return (
    <section className="mkt-section">
      <div className="container mkt-container">
        <span className="mkt-badge mb-4">Marketing</span>

        <h2 className="mkt-heading mb-3">Marketing That Drives Growth.</h2>

        <p className="mkt-description mb-0">
          We build campaigns on a clear brand foundation — not just creative
          that looks good. Strategy comes first. Every execution is traceable
          back to your brand's core promise.
        </p>

        <div className="row mkt-columns gy-5">
          <div className="col-12 col-lg-6">
            <p className="mkt-label mb-3">Common Problems</p>
            <ul className="mkt-problem-list mb-0">
              {problems.map((problem) => (
                <li key={problem}>
                  <FontAwesomeIcon icon={faInfoCircle} className="mkt-problem-icon" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-lg-6">
            <p className="mkt-label mb-3">Our Process</p>
            <ul className="mkt-process-list mb-0">
              {process.map((step, index) => (
                <li key={step}>
                  <span className="mkt-process-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mkt-process-name">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mkt-divider" />

        <p className="mkt-label mb-4">Client Outcomes</p>
        <div className="row mkt-outcomes gy-4">
          {outcomes.map((outcome) => (
            <div className="col-12 col-sm-4" key={outcome.label}>
              <p className="mkt-outcome-value mb-1">{outcome.value}</p>
              <p className="mkt-outcome-label mb-0">{outcome.label}</p>
            </div>
          ))}
        </div>

        {/* ---------- Testimonial Slider ---------- */}
        <div className="mkt-testimonial-slider">
          <div
            className="mkt-testimonial-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div className="mkt-testimonial" key={testimonial.name}>
                <span className="mkt-quote-mark mb-3">&rdquo;</span>
                <p className="mkt-quote-text mb-4">{testimonial.quote}</p>
                <div className="mkt-testimonial-author">
                  <span className="mkt-author-dot"></span>
                  <div>
                    <p className="mkt-author-name mb-0">{testimonial.name}</p>
                    <p className="mkt-author-role mb-0">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {testimonials.length > 1 && (
            <div className="mkt-slider-dots">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Go to review ${index + 1}`}
                  className={`mkt-dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          )}
        </div>

        <hr className="mkt-divider" />

        <div className="mkt-cta-row">
          <a href="#" className="mkt-cta-btn">
            Start Marketing project
            <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </a>
          <a href="/marketing" className="mkt-cta-link">
            View case studies
          </a>
        </div>
      </div>
    </section>
  )
}

export default MarketingDetail