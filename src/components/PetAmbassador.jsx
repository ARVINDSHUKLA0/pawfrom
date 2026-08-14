import React from 'react'


// Add / remove / edit gallery images here — columns rebalance automatically
const columns = [
  [
    { type: 'image', src: 'https://placedog.net/400/280?id=21', alt: 'Dog with brown and black fur' },
    { type: 'empty' },
    { type: 'image', src: 'https://placedog.net/400/260?id=35', alt: 'Cat looking at camera' },
  ],
  [
    { type: 'image', src: 'https://placedog.net/400/240?id=14', alt: 'Corgi puppy on orange background' },
    { type: 'image', src: 'https://placedog.net/400/240?id=42', alt: 'Australian shepherd puppy' },
    { type: 'image', src: 'https://placedog.net/400/180?id=58', alt: 'Cat lying down' },
  ],
  [
    { type: 'image', src: 'https://placedog.net/400/200?id=63', alt: 'Dog wearing yellow t-shirt' },
    { type: 'image', src: 'https://placedog.net/400/220?id=77', alt: 'Two dogs together' },
    { type: 'image', src: 'https://placedog.net/400/220?id=89', alt: 'Hamster close up' },
  ],
]

const PetAmbassador = () => {
  return (
    <section className="pet-section">
      <div className="container-fluid pet-container">
        <div className="pet-header">
          <div>
            <p className="pet-eyebrow">Pet Casting</p>
            <h2 className="pet-heading mb-0">
              Find your perfect<br />pet ambassador.
            </h2>
          </div>

          <a href="#start-casting" className="pet-cta">
            Start casting <span className="pet-cta-arrow">→</span>
          </a>
        </div>

        <div className="row pet-grid gx-3 gy-3">
          {columns.map((col, colIndex) => (
            <div className="col-6 col-lg-4" key={colIndex}>
              <div className="pet-col">
                {col.map((item, itemIndex) =>
                  item.type === 'image' ? (
                    <img
                      key={itemIndex}
                      src={item.src}
                      alt={item.alt}
                      className="pet-img"
                      loading="lazy"
                    />
                  ) : (
                    <div key={itemIndex} className="pet-empty" />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PetAmbassador