import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './TestimonialSlider.css'

const testimonials = [
    {
        quote: "Pawform gave us an identity that felt true. Not designed — discovered.",
        name: "Sana Mirza",
        role: "Founder, Kova Skincare",
    },
    {
        quote: "They showed us the answer. There is a meaningful difference, and it shows in every touchpoint.",
        name: "James Olu",
        role: "Creative Director, Mural Studio",
    },
    {
        quote: "Weeks, not months. The ROI on our rebrand exceeded every projection we had.",
        name: "Priya Nair",
        role: "CEO, Pebble Foods",
    },
];

const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
};

const TestimonialSlider = () => {
    return (
        <>
        <div className='container py-5'>
            <div className='pb-4'>
                <p className='m-0 p-0 pb-2 text-uppercase text-secondary fs-12'>success stories</p>
                <h2 className='fs-1 text-capitalize fw-bold'>when it all comes together.</h2>
            </div>
            <div className="bid-testimonial-slider ">
                <Slider {...sliderSettings}>
                    {testimonials.map((testimonial) => (
                        <div className="bid-testimonial" key={testimonial.name}>
                            <button className='text-uppercase btn border rounded-5 btn-size'>advertising</button>
                            <div className='mt-md-4 mt-2'>
                                <h2>{testimonial.name}</h2>
                                <p className=" mt- mb-4">{testimonial.quote}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            </div>
        </>
    )
}

export default TestimonialSlider