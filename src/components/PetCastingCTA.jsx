import React from 'react'
import Link from 'next/link'
import './PetCastingCTA.css'

const PetCastingCTA = () => {
  return (
    <section className="pc-cta-section">
      <div className="pc-cta-glow"></div>

      <div className="pc-cta-content">
        <p className="pc-cta-label">Get Started</p>
        <h2 className="pc-cta-heading">
          Need the perfect pet<br />
          for your next<br />
          production<span className="pc-cta-question">?</span>
        </h2>
        <p className="pc-cta-subtext">
          Brief submitted before noon, matched roster by end of day.
        </p>

        <div className="pc-cta-buttons">
          <Link href="/consultation" className="pc-btn-primary">
            Book a Consultation
          </Link>
          <Link href="/pet-casting" className="pc-btn-secondary">
            Browse Full Roster
          </Link>
        </div>
      </div>

      <footer className="pc-footer">
        <p className="pc-footer-copy">© Pawform 2026</p>
        <div className="pc-footer-links">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </footer>
    </section>
  )
}

export default PetCastingCTA