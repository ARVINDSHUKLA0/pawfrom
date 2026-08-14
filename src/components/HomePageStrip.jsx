import React from 'react'
import './HomePageStrip.css'

const stats = [
  { value: '30+', label: 'Year of Expertise' },
  { value: '50+', label: 'Brands Transformed' },
  { value: '12+', label: 'Active Markets' },
  { value: '98%', label: 'Client Retention' },
]

const HomePageStrip = () => {
  return (
    <div className="strip-outer">
      <div className="strip-inner">
        <div className="d-flex flex-wrap justify-content-center strip-row">
          {stats.map((stat) => (
            <div className="text-center strip-item" key={stat.label}>
              <p className="strip-value mb-0">{stat.value}</p>
              <p className="strip-label mb-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePageStrip