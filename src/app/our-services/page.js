"use client";
import BrandIdentityDetail from '@/components/BrandIdentityDetail';
import Footer from '@/components/Footer';
import MarketingDetail from '@/components/MarketingDetail';
import Navbar from '@/components/Navbar';
import PackagingDesignDetail from '@/components/PackagingDesignDetail';
import UiUxDetail from '@/components/UiUxDetail';
import React, { useEffect, useRef, useState } from 'react';

// Add / remove / reposition service bubbles here
// top / left are % positions inside the section, size in px
const services = [
  { name: "Product Design", top: "38%", left: "10%", size: 100, color: "#e8f3ec", text: "#2f6b4f" },
  { name: "UI / UX", top: "48%", left: "22%", size: 90, color: "#eef0fb", text: "#4a4fc4" },
  { name: "Packaging", top: "72%", left: "8%", size: 100, color: "#fbf3e3", text: "#b8862f" },
  { name: "Logo Design", top: "64%", left: "23%", size: 84, color: "#f3eefb", text: "#7d4fc4" },
  { name: "Website Design", top: "45%", left: "45%", size: 110, color: "#f0f0f0", text: "#3a3a3a" },
  { name: "Brand Identity", top: "42%", left: "56%", size: 96, color: "#eef0fb", text: "#4a4fc4" },
  { name: "Brand Strategy", top: "68%", left: "47%", size: 110, color: "#eef0fb", text: "#4a4fc4" },
  { name: "Marketing", top: "30%", left: "64%", size: 92, color: "#eaf3ee", text: "#2f6b4f" },
  { name: "Photography", top: "50%", left: "73%", size: 90, color: "#fbf1e6", text: "#b8752f" },
  { name: "Creative Direction", top: "44%", left: "90%", size: 96, color: "#fdeeee", text: "#c14f4f" },
  { name: "Illustration", top: "17%", left: "93%", size: 76, color: "#fdeef6", text: "#c14f9b" },
];

const OurServices = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const fieldRef = useRef(null);
  const bubbleRefs = useRef([]);
  const targetPos = useRef({});
  const currentPos = useRef({});
  const animFrameId = useRef(null);
  const activeIdxRef = useRef(null);

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    services.forEach((_, index) => {
      targetPos.current[index] = { x: 0, y: 0 };
      currentPos.current[index] = { x: 0, y: 0 };
    });

    // Smooth lerp loop - har bubble apni current position ko target ki taraf glide karta hai
    const animate = () => {
      services.forEach((_, index) => {
        if (!currentPos.current[index] || !targetPos.current[index]) return;

        currentPos.current[index].x += (targetPos.current[index].x - currentPos.current[index].x) * 0.12;
        currentPos.current[index].y += (targetPos.current[index].y - currentPos.current[index].y) * 0.12;

        const el = bubbleRefs.current[index];
        if (el) {
          const isHovered = activeIdxRef.current === index;
          const scale = isHovered ? 1.08 : 1;
          el.style.transform = `translate(${currentPos.current[index].x}px, ${currentPos.current[index].y}px) scale(${scale})`;
        }
      });

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  // Poore field (460px height, 100% width) par mouse track karo
  // Jo bubble sabse nearest hai wahi cursor ko directly follow karega
  const handleFieldMouseMove = (e) => {
    const field = fieldRef.current;
    if (!field) return;

    const rect = field.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let nearestIdx = null;
    let nearestDist = Infinity;
    let nearestDx = 0;
    let nearestDy = 0;

    services.forEach((service, index) => {
      const centerX = (parseFloat(service.left) / 100) * rect.width;
      const centerY = (parseFloat(service.top) / 100) * rect.height;

      const dx = mouseX - centerX;
      const dy = mouseY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < nearestDist) {
        nearestDist = dist;
        nearestIdx = index;
        nearestDx = dx;
        nearestDy = dy;
      }
    });

    services.forEach((_, index) => {
      if (index !== nearestIdx) {
        targetPos.current[index] = { x: 0, y: 0 };
      }
    });

    if (nearestIdx !== null) {
      const service = services[nearestIdx];
      const half = service.size / 2;
      const centerX = (parseFloat(service.left) / 100) * rect.width;
      const centerY = (parseFloat(service.top) / 100) * rect.height;

      // Direct 1:1 tracking - jahan cursor hai, bubble wahi jaayega
      let offsetX = nearestDx;
      let offsetY = nearestDy;

      // Sirf field ke edges (460px height / 100% width) par clamp - bahar kabhi nahi jaayega
      const minX = half - centerX;
      const maxX = rect.width - half - centerX;
      const minY = half - centerY;
      const maxY = rect.height - half - centerY;

      offsetX = Math.min(Math.max(offsetX, minX), maxX);
      offsetY = Math.min(Math.max(offsetY, minY), maxY);

      targetPos.current[nearestIdx] = { x: offsetX, y: offsetY };

      setActiveIdx(nearestIdx);
    } else {
      setActiveIdx(null);
    }
  };

  const handleFieldMouseLeave = () => {
    services.forEach((_, index) => {
      targetPos.current[index] = { x: 0, y: 0 };
    });
    setActiveIdx(null);
  };

  return (
    <>
      <Navbar />

      {/* <section className="services-section ">
        <div className="container-fluid services-container">
          <p className="services-eyebrow mb-3 ps-2">What We Do</p>
          <h2 className="services-heading mb-2 ps-2">Our Services.</h2>
          <p className="services-hint mb-0 ps-2">Hover over a service. Click to explore.</p>

          <div
            ref={fieldRef}
            className="services-bubble-field "
            style={{ height: "460px", width: "100%", position: "relative" }}
            onMouseMove={handleFieldMouseMove}
            onMouseLeave={handleFieldMouseLeave}
          >
            {services.map((service, index) => (
              <div
                key={service.name}
                className="services-bubble-wrap"
                style={{
                  "--bubble-top": service.top,
                  "--bubble-left": service.left,
                  pointerEvents: "none",
                }}
              >
                <div
                  ref={(el) => (bubbleRefs.current[index] = el)}
                  className="services-bubble"
                  style={{
                    "--bubble-size": `${service.size}px`,
                    background: service.color,
                    color: service.text,
                    willChange: "transform",
                    pointerEvents: "auto",
                  }}
                >
                  <span>{service.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <BrandIdentityDetail />
      <PackagingDesignDetail />
      <UiUxDetail />
      <MarketingDetail />
      <Footer />
    </>
  );
};

export default OurServices;
