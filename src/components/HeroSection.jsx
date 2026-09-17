import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        src="/viedo/petviedo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default HeroSection;