"use client"
import React from 'react'


// Add / remove logos here — replace `logo` with actual image path e.g. "/logos/lune.svg"
const brands = [
  { name: "Do", logo: "/logos/do.svg" },
  { name: "Lune Co.", logo: "/logos/lune.svg" },
  { name: "Prism", logo: "/logos/prism.svg" },
  { name: "Veld Group", logo: "/logos/veld.svg" },
  { name: "Kova", logo: "/logos/kova.svg" },
  { name: "Mural Studio", logo: "/logos/mural.svg" },
  { name: "Pebble", logo: "/logos/pebble.svg" },
  { name: "Forma Lab", logo: "/logos/forma.svg" },
  { name: "Ondo", logo: "/logos/ondo.svg" },
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