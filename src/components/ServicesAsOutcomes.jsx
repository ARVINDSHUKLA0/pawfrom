import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


// Add / remove / edit service cards here — grid adapts automatically
const services = [
  {
    tag: "Brand Identity",
    title: "Become Instantly Recognizable",
    description: "A brand identity so distinct people know it before they read your name.",
    href: "#brand-identity",
  },
  {
    tag: "Packaging Design",
    title: "Products That Get Picked First",
    description: "Packaging that wins at the shelf, the scroll, and the unboxing moment.",
    href: "#packaging-design",
  },
  {
    tag: "UI/UX Design",
    title: "Websites People Remember",
    description: "Digital presence that converts because it's designed to feel, not just function.",
    href: "#ui-ux-design",
  },
  {
    tag: "Marketing",
    title: "Marketing That Drives Growth",
    description: "Campaigns built on a clear brand story — not just creative that looks good.",
    href: "#marketing",
  },
]

const ServicesAsOutcomes = () => {
  return (
    <section className="services-section">
      <div className="container-fluid services-container">
        <p className="services-eyebrow">What We Do</p>

        <h2 className="services-heading mb-0">
          Services as <span className="services-script">outcomes</span>
        </h2>

        <div className="row services-grid gx-4 gy-4">
          {services.map((service) => (
            <div className="col-12 col-md-6" key={service.title}>
              <a href={service.href} className="service-card">
                <div className="service-card-top">
                  <span className="service-tag">{service.tag}</span>
                  <span className="service-arrow">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>

                <h3 className="service-title mb-2">{service.title}</h3>
                <p className="service-desc mb-0">{service.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesAsOutcomes