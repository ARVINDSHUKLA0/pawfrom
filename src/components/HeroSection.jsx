import React from 'react'
import './HeroSection.css'


const Pill = ({ colorClass, label, className = '' }) => (
  <div className={`hero-pill ${className}`}>
    <span className={`hero-pill-dot ${colorClass}`} />
    {label}
  </div>
)

const HeroSection = () => {
  return (
    <section className="hero-wrapper main-warpper" >
      <div className="hero-inner position-relative container-fluid mx-auto">
        {/* floating project cards - lg+ only */}
        <div className="hero-float-card card-blue d-none d-lg-flex">
          <span className="card-number">01</span>
          <div>
            <p className="card-label">Brand Identity</p>
            <p className="card-title">Kova Skincare</p>
          </div>
        </div>

        <div className="hero-float-card card-gold d-none d-lg-flex">
          <span className="card-number">02</span>
          <div>
            <p className="card-label">Packaging</p>
            <p className="card-title">Pebble Foods</p>
          </div>
        </div>

        <div className="hero-float-card card-pink d-none d-lg-flex">
          <span className="card-number">03</span>
          <div>
            <p className="card-label">Studio</p>
            <p className="card-title">Mural Studio</p>
          </div>
        </div>

        <div className="hero-float-card card-black d-none d-lg-flex mb-3">
          <span className="card-number">04</span>
          <div>
            <p className="card-label">Marketing</p>
            <p className="card-title">Forma Lab</p>
          </div>
        </div>

        {/* floating pills - lg+ only */}
        <Pill colorClass="dot-blue" label="Product Design" className="pill-1 d-none d-lg-flex" />
        <Pill colorClass="dot-pink" label="Logo" className="pill-2 d-none d-lg-flex" />
        <Pill colorClass="dot-orange" label="Marketing" className="pill-3 d-none d-lg-flex" />
        <Pill colorClass="dot-dark" label="Branding" className="pill-4 d-none d-lg-flex" />

        <div className="hero-process-bubble d-none d-lg-block ">See our Process</div>

        {/* heading */}
        <div className="d-flex flex-column align-items-center text-center pt-4 pt-lg-5 pb-4 px-3">
          <h1 className="hero-heading d-flex flex-wrap justify-content-center align-items-center gap-2 mb-0">
            We Make
            <span className="hero-script">You</span>
            Seen
          </h1>

          <p className="hero-subtext mt-3 mb-0">
            A branding agency that makes companies impossible to ignore.
          </p>

          <button className="btn btn-dark rounded-pill px-4 py-2 mt-4 hero-cta">
            See our work
          </button>

          {/* mobile-only tag row, replaces floating pills below lg */}
          <div className="d-flex d-lg-none flex-wrap justify-content-center gap-2 mt-4">
            <Pill colorClass="dot-blue" label="Product Design" className="pill-static" />
            <Pill colorClass="dot-pink" label="Logo" className="pill-static" />
            <Pill colorClass="dot-orange" label="Marketing" className="pill-static" />
            <Pill colorClass="dot-dark" label="Branding" className="pill-static" />
          </div>

          {/* mobile-only project cards, replaces absolute cards below lg */}
          <div className="row d-lg-none w-100 g-3 mt-4 px-2">
            {[
              { num: '01', bg: '#3b4cf6', label: 'Brand Identity', title: 'Kova Skincare' },
              { num: '02', bg: '#c79a3b', label: 'Packaging', title: 'Pebble Foods' },
              { num: '03', bg: '#f472b6', label: 'Studio', title: 'Mural Studio' },
              { num: '04', bg: '#000000', label: 'Marketing', title: 'Forma Lab' },
            ].map((card) => (
              <div className="col-6" key={card.num}>
                <div className="mobile-card" style={{ backgroundColor: card.bg }}>
                  <span className="card-number">{card.num}</span>
                  <div>
                    <p className="card-label">{card.label}</p>
                    <p className="card-title">{card.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection