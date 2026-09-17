"use client"
import React from 'react'


// Add / remove logos here — replace `logo` with actual image path e.g. "/logos/lune.svg"
const brands = [
  { name: "Do", logo: "logo" },
  { name: "Lune Co.", logo: "logo" },
  { name: "Prism", logo: "logo" },
  { name: "Veld Group", logo: "logo" },
  { name: "Kova", logo: "logo" },
  { name: "Mural Studio", logo: "logo" },
  { name: "Pebble", logo: "logo" },
  { name: "Forma Lab", logo: "logo" },
  { name: "Ondo", logo: "logo" },
];

const TrustedBy = () => {
  // Duplicate list for seamless infinite loop
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="trustedby-section">
      <div className="container-fluid trustedby-container">
        <p className="trustedby-label mb-4">Trusted By</p>

        <div className="trustedby-marquee">
          <div className="trustedby-track">
            {marqueeBrands.map((brand, index) => (
              <div className="trustedby-item" key={`${brand.name}-${index}`}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="trustedby-logo"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "inline-block";
                  }}
                />
                <span className="trustedby-fallback">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy