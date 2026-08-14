'use client'
import Navbar from '@/components/Navbar'
import React from 'react'
import Slider from 'react-slick'
import { Check, Heart, Star, ShieldCheck, ArrowRight, Gem } from 'lucide-react'
import '../pet-casting/PetCasting.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TestimonialSlider from '@/components/TestimonialSlider'
import PetCastingCTA from '@/components/PetCastingCTA'

// Row 1
const row1 = [
  { id: 1, name: 'Luna', breed: 'Brown Shorthair', image: '/img/petAmbassador1.jpg' },
  { id: 2, name: 'Milo', breed: 'Sweet Cutie', image: '/img/petAmbassador1.jpg' },
  { id: 3, name: 'Coco', breed: 'German Shepherd', image: '/img/petAmbassador1.jpg' },
  { id: 4, name: 'Zara', breed: 'Mixed Cat', image: '/img/petAmbassador1.jpg' },
  { id: 5, name: 'Bruno', breed: 'Labrador Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 6, name: 'Atlas', breed: 'Golden Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 7, name: 'Luna', breed: 'Brown Shorthair', image: '/img/petAmbassador1.jpg' },
  { id: 8, name: 'Milo', breed: 'Sweet Cutie', image: '/img/petAmbassador1.jpg' },
  { id: 9, name: 'Milo', breed: 'Sweet Cutie', image: '/img/petAmbassador1.jpg' },
  { id: 10, name: 'Milo', breed: 'Sweet Cutie', image: '/img/petAmbassador1.jpg' },
]

// Row 2
const row2 = [
  { id: 1, name: 'Rex', breed: 'Shorthair Dog', image: '/img/petAmbassador1.jpg' },
  { id: 2, name: 'Coco', breed: 'German Shepherd', image: '/img/petAmbassador1.jpg' },
  { id: 3, name: 'Zara', breed: 'Mixed Cat', image: '/img/petAmbassador1.jpg' },
  { id: 4, name: 'Bruno', breed: 'Labrador Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 5, name: 'Pixel', breed: 'Siberian Cat', image: '/img/petAmbassador1.jpg' },
  { id: 6, name: 'Peach', breed: 'Rag doll', image: '/img/petAmbassador1.jpg' },
  { id: 7, name: 'Rex', breed: 'German Shepherd', image: '/img/petAmbassador1.jpg' },
  { id: 8, name: 'Coco', breed: 'Golden Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 9, name: 'Coco', breed: 'Golden Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 10, name: 'Coco', breed: 'Golden Retriever', image: '/img/petAmbassador1.jpg' },
]

// Row 3
const row3 = [
  { id: 1, name: 'Rex', breed: 'Shorthair Dog', image: '/img/petAmbassador1.jpg' },
  { id: 2, name: 'Coco', breed: 'German Shepherd', image: '/img/petAmbassador1.jpg' },
  { id: 3, name: 'Zara', breed: 'Mixed Cat', image: '/img/petAmbassador1.jpg' },
  { id: 4, name: 'Bruno', breed: 'Labrador Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 5, name: 'Pixel', breed: 'Siberian Cat', image: '/img/petAmbassador1.jpg' },
  { id: 6, name: 'Peach', breed: 'Rag doll', image: '/img/petAmbassador1.jpg' },
  { id: 7, name: 'Rex', breed: 'German Shepherd', image: '/img/petAmbassador1.jpg' },
  { id: 8, name: 'Coco', breed: 'Golden Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 9, name: 'Coco', breed: 'Golden Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 10, name: 'Coco', breed: 'Golden Retriever', image: '/img/petAmbassador1.jpg' },
]

// Row 4
const row4 = [
  { id: 1, name: 'Rex', breed: 'Shorthair Dog', image: '/img/petAmbassador1.jpg' },
  { id: 2, name: 'Coco', breed: 'German Shepherd', image: '/img/petAmbassador1.jpg' },
  { id: 3, name: 'Zara', breed: 'Mixed Cat', image: '/img/petAmbassador1.jpg' },
  { id: 4, name: 'Bruno', breed: 'Labrador Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 5, name: 'Pixel', breed: 'Siberian Cat', image: '/img/petAmbassador1.jpg' },
  { id: 6, name: 'Peach', breed: 'Rag doll', image: '/img/petAmbassador1.jpg' },
  { id: 7, name: 'Rex', breed: 'German Shepherd', image: '/img/petAmbassador1.jpg' },
  { id: 8, name: 'Coco', breed: 'Golden Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 9, name: 'Coco', breed: 'Golden Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 10, name: 'Coco', breed: 'Golden Retriever', image: '/img/petAmbassador1.jpg' },
]

// Row 5
const row5 = [
  { id: 1, name: 'Rex', breed: 'Shorthair Dog', image: '/img/petAmbassador1.jpg' },
  { id: 2, name: 'Coco', breed: 'German Shepherd', image: '/img/petAmbassador1.jpg' },
  { id: 3, name: 'Zara', breed: 'Mixed Cat', image: '/img/petAmbassador1.jpg' },
  { id: 4, name: 'Bruno', breed: 'Labrador Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 5, name: 'Pixel', breed: 'Siberian Cat', image: '/img/petAmbassador1.jpg' },
  { id: 6, name: 'Peach', breed: 'Rag doll', image: '/img/petAmbassador1.jpg' },
  { id: 7, name: 'Rex', breed: 'German Shepherd', image: '/img/petAmbassador1.jpg' },
  { id: 8, name: 'Coco', breed: 'Golden Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 9, name: 'Coco', breed: 'Golden Retriever', image: '/img/petAmbassador1.jpg' },
  { id: 10, name: 'Coco', breed: 'Golden Retriever', image: '/img/petAmbassador1.jpg' },
]

const allRows = [row1, row2, row3, row4, row5]
const speeds = [1500, 1800, 2100, 2400, 2700]

const getSettings = (autoplaySpeed, reverse = false) => ({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: autoplaySpeed,
  rtl: reverse,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 576, settings: { slidesToShow: 2 } },
  ],
})

// why choose us data
const features = [
  {
    id: 1,
    icon: <Check size={20} />,
    title: 'Verified Professionals',
    desc: 'Every pet in our roster has completed our professional assessment and shoot readiness evaluation.',
  },
  {
    id: 2,
    icon: <Heart size={20} />,
    title: 'Health Certified',
    desc: 'Full vet certificates, vaccination records, and health clearance before every booking.',
  },
  {
    id: 3,
    icon: <Star size={20} />,
    title: 'Experienced Handlers',
    desc: 'All animals come with professional trainers and handlers on set, at no extra cost.',
  },
  {
    id: 4,
    icon: <ShieldCheck size={20} />,
    title: 'Insured & Covered',
    desc: 'Comprehensive production insurance for every shoot. No surprises, no liability gaps.',
  },
  {
    id: 5,
    icon: <ArrowRight size={20} />,
    title: 'Same-Day Matching',
    desc: 'Brief submitted before noon, matched roster by end of day. Fast without no quality compromise.',
  },
  {
    id: 6,
    icon: <Gem size={20} />,
    title: 'Post-Shoot Support',
    desc: 'We follow up on every booking and handle any on-set issues before they become problems.',
  },
]

const steps = [
  {
    id: '01',
    title: 'Submit Brief',
    desc: 'Tell us about your production — the vibe, breed preferences, shoot dates, and what you need the animal to do.',
  },
  {
    id: '02',
    title: 'Discover Pets',
    desc: 'Within hours we send a curated shortlist of matched pets with profiles, availability, and rates.',
  },
  {
    id: '03',
    title: 'Meet',
    desc: 'Optional virtual or in-person meet with the animal and handler before committing — no surprises on set.',
  },
  {
    id: '04',
    title: 'Shoot',
    desc: 'Your chosen pet arrives on set with a professional handler. We manage the animal so you focus on the frame.',
  },
]

const page = () => {
  return (
    <>
      <Navbar />
      <section className='custom-color text-white py-md-5 py-sm-3 py-2'>
        <div className='container-fluid pet-casting-conatiner'>
          <p className='fs-12 text-uppercase'>pet roster</p>
          <div className='d-sm-flex d-block justify-content-between align-items-center'>
            <div>
              <h2 className='fs-1'>Our Cast</h2>
            </div>
            <div>
              <p>Hover over any pet to see their full profile and  <br className='d-none d-sm-inline' />
                {' '}availbility.</p>
            </div>
          </div>
        </div>

        <div className='pet-rows-wrapper'>
          {allRows.map((row, rowIndex) => (
            <div className='pet-row-slider' key={rowIndex}>
              <Slider {...getSettings(speeds[rowIndex], rowIndex % 2 !== 0)}>
                {row.map((pet) => (
                  <div className='pet-card' key={pet.id}>
                    <img src={pet.image} alt={pet.name} className='pet-img' draggable='false' />
                    <div className='pet-overlay'>
                      <p className='pet-name'>{pet.name}</p>
                      <p className='pet-breed'>{pet.breed}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </section>

      <section className='container py-md-5 py-sm-3 py-2'>
        <div>
          <p className='text-uppercase'>why choose us</p>
          <h2 className='text-capitalize'>why pawform pet<br className='d-none d-sm-inline' />
            {' '} casting?</h2>
        </div>

        <div className='why-choose-grid'>
          {features.map((item) => (
            <div className='why-card' key={item.id}>
              <div className='why-icon'>{item.icon}</div>
              <h4 className='why-title'>{item.title}</h4>
              <p className='why-desc'>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='how-it-works-section'>
        <div className='how-it-works-container'>
          <p className='text-uppercase how-label'>the process</p>
          <h2 className='how-heading'>How It Works</h2>

          <div className='steps-wrapper'>
            {steps.map((step) => (
              <div className='step-item' key={step.id}>
                <div className='step-circle bg-white'>{step.id}</div>
                <h4 className='step-title'>{step.title}</h4>
                <p className='step-desc'>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> 
        
        <TestimonialSlider /> 
        <PetCastingCTA/>
    </>
  )
}

export default page