import React from 'react'


const columns = [
  {
    title: "Every brand has a story.",
    subtitle: "We find the one worth telling.",
  },
  {
    title: "Strategy is the foundation.",
    subtitle: "Creativity is the architecture.",
  },
  {
    title: "We don't follow trends.",
    subtitle: "We build what lasts.",
  },
]

const OurPhilosophy = () => {
  return (
    <section className="phil-section">
      <div className="container-fluid phil-container">
        <p className="phil-eyebrow">Our Philosophy</p>

        <h2 className="phil-heading mb-0">
          <span className="d-block">
            We make brands <span className="phil-script">memorable,</span>
          </span>
          <span className="d-block">not just visible.</span>
        </h2>

        <div className="phil-divider" />

        {/* column headers - 3 equal columns */}
        <div className="row phil-columns gx-4 gy-4">
          {columns.map((col) => (
            <div className="col-12 col-md-4" key={col.title}>
              <p className="phil-col-title mb-1">{col.title}</p>
              <p className="phil-col-subtitle mb-0">{col.subtitle}</p>
            </div>
          ))}
        </div>

        {/* body text - aligned to the SAME 3-column grid as the headers above */}
        <div className="row phil-body gx-4 gy-4">
          <div className="col-12 col-md-4">
            <p className="phil-paragraph">
              Pawform was built on one conviction: great branding is not
              decoration — it is strategy made visible. Every color, curve,
              and word is a decision that either builds trust or erodes it.
            </p>
            <p className="phil-paragraph">
              This is what we call the Pawform Effect. When every element is
              intentional, people don&apos;t just notice you — they seek you
              out and tell others about you.
            </p>
          </div>

          <div className="col-12 col-md-4">
            <p className="phil-paragraph">
              We work with brands that want to be remembered, not just
              recognized. The difference is in the details: the weight of a
              typeface, the pause in a tagline, the feeling of an unboxing.
            </p>
          </div>

          <div className="col-12 col-md-4" />
        </div>
      </div>
    </section>
  )
}

export default OurPhilosophy