"use client";
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";



const steps = [
  {
    title: "Discovery",
    description: "We go beneath the surface — your market, competitors, and customers' real desires.",
  },
  {
    title: "Research",
    description: "We study data, trends, and behavior to find the insight everyone else missed.",
  },
  {
    title: "Strategy",
    description: "We turn insight into a clear position — what you stand for and why it matters.",
  },
  {
    title: "Identity",
    description: "We shape the visual language — logo, type, color — that carries the strategy.",
  },
  {
    title: "Packaging",
    description: "We bring the brand into the hand — material, form, and the moment of unboxing.",
  },
  {
    title: "Marketing",
    description: "We launch the story into the world and keep it consistent everywhere it's seen.",
  },
]

const OurProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const goPrev = () => setActiveIndex((i) => (i === 0 ? steps.length - 1 : i - 1))
  const goNext = () => setActiveIndex((i) => (i === steps.length - 1 ? 0 : i + 1))

  const progressPercent = ((activeIndex + 1) / steps.length) * 100

  return (
    <section className="process-section">
      <div className="container-fluid process-container">
        <p className="process-eyebrow">How We Work</p>
        <h2 className="process-heading mb-0">Our Process</h2>
        <div className="process-divider" />

        {/* step tabs */}
        <div className="row process-tabs gx-3 gy-4">
          {steps.map((step, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={step.title}>
              <button
                type="button"
                className={`process-tab ${index === activeIndex ? 'process-tab-active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="process-tab-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="process-tab-title">{step.title}</span>
                {index === activeIndex && (
                  <span className="process-tab-desc">{step.description}</span>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* progress bar with nav arrows */}
        <div className="d-flex align-items-center process-progress-row">
          <span className="process-progress-count">
            <span className="process-progress-active">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="process-progress-total"> / {String(steps.length).padStart(2, '0')}</span>
          </span>

          <div className="process-progress-track flex-grow-1">
            <div
              className="process-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="process-nav-buttons">
            <button
              type="button"
              className="process-nav-btn"
              onClick={goPrev}
              aria-label="Previous step"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              type="button"
              className="process-nav-btn"
              onClick={goNext}
              aria-label="Next step"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProcess