"use client";
import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";


// Add / remove / edit testimonials here — slider adapts automatically
const testimonials = [
  {
    quote: "Pawform didn't just design our brand — they helped us understand who we are. The clarity they brought changed how we operate.",
    name: "Sana Mirza",
    role: "Founder, Kova Skincare",
    initials: "SM",
  },
  {
    quote: "Every other agency showed us options. Pawform showed us the answer. There is a meaningful difference, and it shows in every touchpoint.",
    name: "James Olu",
    role: "Creative Director, Mural Studio",
    initials: "JO",
  },
  {
    quote: "We went from invisible to impossible to ignore in six weeks. The ROI on our rebrand exceeded every projection we had.",
    name: "Priya Nair",
    role: "CEO, Pebble Foods",
    initials: "PN",
  },
  {
    quote: "They treated our packaging like a first impression, not an afterthought. Sales on shelf jumped within the first month.",
    name: "Diego Fuentes",
    role: "Founder, Forma Lab",
    initials: "DF",
  },
]

const CARD_GAP = 24 // px, must match --client-gap in CSS

const WhatClientsSay = () => {
  const [perView, setPerView] = useState(3)
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 768) setPerView(1)
      else if (window.innerWidth < 992) setPerView(2)
      else setPerView(3)
    }
    updatePerView()
    window.addEventListener('resize', updatePerView)
    return () => window.removeEventListener('resize', updatePerView)
  }, [])

  const maxIndex = Math.max(testimonials.length - perView, 0)

  useEffect(() => {
    setActiveIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  const goPrev = () => setActiveIndex((i) => Math.max(i - 1, 0))
  const goNext = () => setActiveIndex((i) => Math.min(i + 1, maxIndex))

  return (
    <section className="clients-section">
      <div className="container-fluid clients-container">
        <div className="clients-header">
          <div>
            <p className="clients-eyebrow">Client Stories</p>
            <h2 className="clients-heading mb-0">What clients say</h2>
          </div>

          <div className="clients-nav-buttons">
            <button
              type="button"
              className="clients-nav-btn"
              onClick={goPrev}
              disabled={activeIndex === 0}
              aria-label="Previous testimonials"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              type="button"
              className="clients-nav-btn"
              onClick={goNext}
              disabled={activeIndex === maxIndex}
              aria-label="Next testimonials"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div className="clients-viewport">
          <div
            className="clients-track"
            ref={trackRef}
            style={{
              transform: `translateX(calc(-${activeIndex} * (100% / ${perView} + ${CARD_GAP}px / ${perView})))`,
            }}
          >
            {testimonials.map((t) => (
              <div
                className="clients-card"
                key={t.name}
                style={{ flex: `0 0 calc((100% - ${CARD_GAP * (perView - 1)}px) / ${perView})` }}
              >
                <FontAwesomeIcon icon={faQuoteLeft} className="clients-quote-icon" />
                <p className="clients-quote mb-0">{t.quote}</p>

                <div className="clients-person">
                  <div className="clients-avatar">{t.initials}</div>
                  <div>
                    <p className="clients-name mb-0">{t.name}</p>
                    <p className="clients-role mb-0">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div className="clients-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`clients-dot ${i === activeIndex ? 'clients-dot-active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatClientsSay