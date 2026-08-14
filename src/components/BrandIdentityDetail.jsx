import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";


// Edit content here — everything below maps directly to the UI
const problems = [
  "You look like everyone else in your category",
  "Customers forget you after the first touchpoint",
  "Your visual system breaks down across mediums",
  "No clear brand personality to guide decisions",
];

const process = [
  "Discovery",
  "Research",
  "Concept",
  "Iteration",
  "Execution",
  "Delivery",
];

const outcomes = [
  { value: "+84%", label: "Recognition lift" },
  { value: "3.2×", label: "Brand recall" },
  { value: "91%", label: "Avg. retention" },
];

// Add / remove reviews here — slider adapts automatically
const testimonials = [
  {
    quote: "Pawform gave us an identity that felt true. Not designed — discovered.",
    name: "Sana Mirza",
    role: "Founder, Kova Skincare",
  },
  {
    quote: "They showed us the answer. There is a meaningful difference, and it shows in every touchpoint.",
    name: "James Olu",
    role: "Creative Director, Mural Studio",
  },
  {
    quote: "Weeks, not months. The ROI on our rebrand exceeded every projection we had.",
    name: "Priya Nair",
    role: "CEO, Pebble Foods",
  },
];

const BrandIdentityDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => setActiveIndex(index);

  return (

    <>
    <section className="bid-section">
      <div className="container bid-container">
        <span className="bid-badge mb-4">Brand Identity</span>

        <h2 className="bid-heading mb-3">Become Instantly Recognizable.</h2>

        <p className="bid-description mb-0">
          We build brand identities that feel inevitable — like they could not
          have been any other way. Every mark, color, and word is a
          deliberate decision that compounds into unmistakable presence.
        </p>

        <div className="row bid-columns gy-5">
          <div className="col-12 col-lg-6">
            <p className="bid-label mb-3">Common Problems</p>
            <ul className="bid-problem-list mb-0">
              {problems.map((problem) => (
                <li key={problem}>
                  <FontAwesomeIcon icon={faInfoCircle} className="bid-problem-icon" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-lg-6">
            <p className="bid-label mb-3">Our Process</p>
            <ul className="bid-process-list mb-0">
              {process.map((step, index) => (
                <li key={step}>
                  <span className="bid-process-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="bid-process-name">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="bid-divider" />

        <p className="bid-label mb-4">Client Outcomes</p>
        <div className="row bid-outcomes gy-4">
          {outcomes.map((outcome) => (
            <div className="col-12 col-sm-4" key={outcome.label}>
              <p className="bid-outcome-value mb-1">{outcome.value}</p>
              <p className="bid-outcome-label mb-0">{outcome.label}</p>
            </div>
          ))}
        </div>

        {/* ---------- Testimonial Slider ---------- */}
        <div className="bid-testimonial-slider">
          <div
            className="bid-testimonial-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div className="bid-testimonial" key={testimonial.name}>
                <span className="bid-quote-mark mb-3">&rdquo;</span>
                <p className="bid-quote-text mb-4">{testimonial.quote}</p>
                <div className="bid-testimonial-author">
                  <span className="bid-author-dot"></span>
                  <div>
                    <p className="bid-author-name mb-0">{testimonial.name}</p>
                    <p className="bid-author-role mb-0">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bid-slider-dots">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Go to review ${index + 1}`}
                className={`bid-dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>

        <hr className="bid-divider" />

        <div className="bid-cta-row">
          <a href="#start-project" className="bid-cta-btn">
            Start Brand Identity project
            <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </a>
          <a href="/branding" className="bid-cta-link">
            View case studies
          </a>
        </div>
      </div>
    </section>

    </>
  )
}

export default BrandIdentityDetail