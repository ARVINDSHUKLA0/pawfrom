// "use client";

// import Link from "next/link";
// import { useEffect, useRef } from "react";

// export default function FlipBanner() {
//   const bookRigRef = useRef(null);
//   const bookRef = useRef(null);

//   useEffect(() => {
//     const rig = bookRigRef.current;
//     const book = bookRef.current;
//     if (!rig || !book) return;

//     const pages = rig.querySelectorAll(".pf-page");
//     const n = pages.length;

//     const ENTRANCE_FRACTION = 0.18;
//     const RISE_DISTANCE_VH = 18; // how far below its resting spot the book starts, in vh

//     function update() {
//       const rect = rig.getBoundingClientRect();
//       const total = rig.offsetHeight - window.innerHeight;
//       const scrolled = Math.min(Math.max(-rect.top, 0), total);
//       const progress = total > 0 ? scrolled / total : 0; // 0 -> 1 across the whole rig

//       if (progress <= ENTRANCE_FRACTION) {
//         // --- Phase 1: slide up from under the hero, fade in, no page flips yet ---
//         const t = progress / ENTRANCE_FRACTION; // 0 -> 1
//         const eased = t * t * (3 - 2 * t); // smoothstep, gentler at both ends
//         book.style.opacity = eased;
//         book.style.transform = `translateY(${(1 - eased) * RISE_DISTANCE_VH}vh) scale(${0.96 + eased * 0.04})`;
//         pages.forEach((page) => {
//           page.style.transform = "rotateY(0deg)";
//         });
//       } else {
//         // --- Phase 2: book is fully in place, remaining scroll flips pages ---
//         book.style.opacity = 1;
//         book.style.transform = "translateY(0) scale(1)";
//         const flipProgress = (progress - ENTRANCE_FRACTION) / (1 - ENTRANCE_FRACTION); // 0 -> 1
//         const per = 1 / (n - 1);
//         pages.forEach((page, i) => {
//           if (i === n - 1) return; // back cover stays flat
//           const start = i * per;
//           const local = Math.min(Math.max((flipProgress - start) / per, 0), 1);
//           const angle = local * -175;
//           page.style.transform = `rotateY(${angle}deg)`;
//           page.style.boxShadow = `0 30px 60px -20px rgba(0,0,0,${0.5 + local * 0.1}), inset -1px 0 0 rgba(0,0,0,.06)`;
//         });
//       }
//     }

//     let ticking = false;
//     const onScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           update();
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", update);
//     update();

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", update);
//     };
//   }, []);

//   return (
//     <>
//       {/* Google Fonts */}
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap"
//         rel="stylesheet"
//       />

//       <div className="pf-root">
//         <section className="pf-intro">
//           <div className="pf-eyebrow">Pawform · Case Studies</div>
//           <h1>Four services, four ways of solving a problem</h1>
//           <p>
//             Scroll to flip through dummy case studies for each service Pawform offers — swap the
//             images and copy for real client work once it's ready.
//           </p>
//           <div className="pf-hint">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M12 5v14M6 13l6 6 6-6" />
//             </svg>
//             keep scrolling
//           </div>
//         </section>

//         <div className="pf-book-rig" ref={bookRigRef}>
//           <div className="pf-book-stage">
//             <div className="pf-spine-label">Pawform — Case Studies</div>
//             <div className="pf-book" ref={bookRef}>
//               <div className="pf-page pf-cover" style={{ zIndex: 7 }}>
//                 <div className="pf-page-num">Cover</div>
//                 <div className="pf-rule"></div>
//                 <h2>Selected Work</h2>
//                 <div className="pf-role">Branding · Packaging · Product · Marketing</div>
//                 <p className="pf-body" style={{ color: "#c9c4d6" }}>
//                   A page for each service — the brief, the thinking, and what shipped.
//                 </p>
//               </div>

//               <div className="pf-page" style={{ zIndex: 6 }}>
//                 <div className="pf-thumb">
//                   <img className="img-fluid rounded-2" src="/img/logo-barnd.jpeg" alt="" />
//                   <div className="pf-thumb-tag ms-md-4 py-1 ms-1 mb-1">Logomark, Solstice Coffee Co.</div>
//                 </div>
//                 <div className="pf-content">
//                   <div className="pf-page-num">01 / Branding &amp; Logo</div>
//                   <span className="pf-service-tag">Identity System</span>
//                   <h2>Solstice Coffee Co.</h2>
//                   <div className="pf-role">Rebrand for a 3-store specialty coffee chain</div>
//                   <p className="pf-body">
//                     Solstice had grown past its original napkin-sketch logo and needed an identity
//                     that could hold up on packaging, signage, and delivery apps at once. We built a
//                     mark that reads at both a 2px favicon and a shopfront scale, paired with a warm,
//                     sun-drawn palette that ties every touchpoint back to the name.
//                   </p>
//                   <div>
//                     <Link className="mt-3 fs-14" href="#">Link Demo</Link>
//                   </div>
//                   <div className="pf-foot">
//                     <span>
//                       Deliverables: <b>Logo suite, type system, brand guide</b>
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="pf-page" style={{ zIndex: 5 }}>
//                 <div className="pf-thumb ">
//                   <img className="img-fluid rounded-2" src="/img/packing-desgin.jpeg" alt="" />
//                   <div className="pf-thumb-tag ms-md-4 py-1 ms-1 mb-1">Label system, Meadow &amp; Co.</div>
//                 </div>
//                 <div className="pf-content ">
//                   <div className="pf-page-num">02 / Packaging Design</div>
//                   <span className="pf-service-tag">Structural + Print</span>
//                   <h2>Meadow &amp; Co.</h2>
//                   <div className="pf-role">Skincare line packaging, 6 SKUs</div>
//                   <p className="pf-body">
//                     Six products, one shelf, zero confusion — that was the brief. We designed a
//                     modular label system where color alone tells you which product you're holding,
//                     plus a fold-out carton that doubles as an ingredient explainer, so the packaging
//                     does some of the selling before anyone opens the box.
//                   </p>
//                   <div>
//                     <Link className="fs-14" href="#">Link Demo</Link>
//                   </div>
//                   <div className="pf-foot ">
//                     <span>
//                       Deliverables: <b>Label system, carton structure, print files</b>
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="pf-page" style={{ zIndex: 4 }}>
//                 <div className="pf-thumb">
//                   <img className="img-fluid rounded-2" src="/img/product-degin.jpeg" alt="" />
//                   <div className="pf-thumb-tag ms-md-4 py-1 ms-1 mb-1">Harness concept, Fetch</div>
//                 </div>
//                 <div className="pf-content">
//                   <div className="pf-page-num">03 / Product Design</div>
//                   <span className="pf-service-tag">Physical Product</span>
//                   <h2>Fetch — Modular Harness</h2>
//                   <div className="pf-role">Adjustable dog harness system</div>
//                   <p className="pf-body">
//                     Most dog harnesses are one-size-fits-most and fit nobody well. Fetch is built
//                     around a single adjustable clip mechanism that adapts to four size ranges without
//                     new tooling per size, cutting manufacturing SKUs while giving owners a fit that
//                     actually matches their dog.
//                   </p>
//                   <div>
//                     <Link className="fs-14" href="#">Link Demo</Link>
//                   </div>
//                   <div className="pf-foot">
//                     <span>
//                       Deliverables: <b>CMF spec, prototype, spec sheet</b>
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="pf-page" style={{ zIndex: 3 }}>
//                 <div className="pf-thumb">
//                   <img className="img-fluid rounded-2" src="img/pet-casting.jpeg" alt="" />
//                   <div className="pf-thumb-tag ms-md-4 py-1 ms-1 mb-1">Launch campaign, Northline Bikes</div>
//                 </div>
//                 <div className="pf-content">
//                   <div className="pf-page-num">04 / Pet Casting and Animal Talent  </div>
//                   <span className="pf-service-tag">Go-to-Market</span>
//                   <h2>Northline Bikes Launch</h2>
//                   <div className="pf-role">Direct-to-consumer launch campaign</div>
//                   <p className="pf-body">
//                     Northline needed to go from zero to a fully booked pre-order window in six weeks
//                     with no existing audience. We mapped a launch sequence across email, social, and a
//                     single paid channel, sequencing story-first content ahead of any discount so early
//                     buyers were sold on the bike, not the price.
//                   </p>
//                   <div>
//                     <Link href="#" className="fs-14">Link Demo</Link>
//                   </div>
//                   <div className="pf-foot">
//                     <span>
//                       Result: <b>Pre-order goal hit in 19 days</b>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="pf-page" style={{ zIndex: 3 }}>
//                 <div className="pf-thumb">
//                   <img className="img-fluid rounded-2" src="/img/website-dev.jpeg" alt="" />
//                   <div className="pf-thumb-tag ms-md-4 py-1 ms-1 mb-1">Website and App Development</div>
//                 </div>
//                 <div className="pf-content">
//                   <div className="pf-page-num">04 / Website and App Development  </div>
//                   <span className="pf-service-tag">Go-to-Market</span>
//                   <h2>website Bikes Launch</h2>
//                   <div className="pf-role">Direct-to-consumer launch campaign</div>
//                   <p className="pf-body">
//                     Northline needed to go from zero to a fully booked pre-order window in six weeks
//                     with no existing audience. We mapped a launch sequence across email, social, and a
//                     single paid channel, sequencing story-first content ahead of any discount so early
//                     buyers were sold on the bike, not the price.
//                   </p>
//                   <div>
//                     <Link href="#" className="fs-14">Link Demo</Link>
//                   </div>
//                   <div className="pf-foot">
//                     <span>
//                       Result: <b>Pre-order goal hit in 19 days</b>
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="pf-page pf-backcover" style={{ zIndex: 2 }}>
//                 <div className="pf-page-num" style={{ color: "#8a86a0" }}>
//                   Back cover
//                 </div>
//                 <h2>More case studies on request</h2>
//                 <p>
//                   These four are placeholders — send over real client work and we'll drop it straight
//                   into this same layout.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <section className="pf-outro">
//           <h3>Ready to start a project?</h3>
//           <p style={{ maxWidth: "44ch", color: "#c9c4d6", marginBottom: "18px" }}>
//             Branding, packaging, product, or marketing — tell us what you're building.
//           </p>
//           <a href="mailto:hello@pawform.studio">hello@pawform.studio</a>
//         </section>
//       </div>

//       {/* <style jsx global>{`
//         :root {
//           --navy: #1b2540;
//           --paper: #f7f3ec;
//           --paper-shadow: #e9e2d3;
//           --pink: #e6a9bb;
//           --sky: #8fb3d9;
//           --text: #221e2a;
//           --muted: #7a7568;
//         }
//         .pf-root {
//           margin: 0;
//           padding: 0;
//           background: var(--navy);
//           color: var(--text);
//           font-family: "Inter", sans-serif;
//         }
//         .pf-intro {
//           min-height: 70vh;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: flex-start;
//           padding: 8vh 8vw;
//           color: var(--paper);
//         }
//         .pf-eyebrow {
//           font-family: "IBM Plex Mono", monospace;
//           font-size: 13px;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: var(--pink);
//           margin-bottom: 18px;
//         }
//         .pf-intro h1 {
//           font-family: "Fraunces", serif;
//           font-weight: 600;
//           font-size: clamp(36px, 6vw, 68px);
//           line-height: 1.06;
//           margin: 0 0 20px;
//           max-width: 15ch;
//         }
//         .pf-intro p {
//           max-width: 48ch;
//           color: #c9c4d6;
//           font-size: 17px;
//           line-height: 1.6;
//           margin: 0;
//         }
//         .pf-hint {
//           margin-top: 48px;
//           font-family: "IBM Plex Mono", monospace;
//           font-size: 12px;
//           color: #8a86a0;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }
//         .pf-hint svg {
//           width: 14px;
//           height: 14px;
//           animation: pf-bob 1.6s ease-in-out infinite;
//         }
//         @keyframes pf-bob {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(6px);
//           }
//         }

//         .pf-book-rig {
//           position: relative;
//           height: 620vh;
//         }
//         .pf-book-stage {
//           position: sticky;
//           top: 0;
//           height: 100vh;
//           width: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           perspective: 2600px;
//           overflow: hidden;
//         }
//         .pf-book {
//           opacity: 0;
//           position: relative;
//           width: min(84vw, 1040px);
//           height: min(64vh, 560px);
//           transform-style: preserve-3d;
//         }
//         .pf-spine-label {
//           position: absolute;
//           left: 5vw;
//           top: 50%;
//           transform: translateY(-50%) rotate(-90deg);
//           transform-origin: left center;
//           font-family: "IBM Plex Mono", monospace;
//           font-size: 12px;
//           letter-spacing: 0.14em;
//           color: #8a86a0;
//           text-transform: uppercase;
//           white-space: nowrap;
//         }
//         .pf-page {
//           position: absolute;
//           inset: 0;
//           background: var(--paper);
//           border-radius: 2px 10px 10px 2px;
//           box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.55), inset -1px 0 0 rgba(0, 0, 0, 0.06);
//           transform-origin: left center;
//           transform-style: preserve-3d;
//           display: grid;
//           grid-template-columns: 42% 58%;
//           will-change: transform;
//           overflow: hidden;
//         }
//         .pf-page.pf-cover,
//         .pf-page.pf-backcover {
//           display: flex;
//         }
//         .pf-thumb {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: clamp(20px, 3vw, 36px);
//           border-right: 1px solid rgba(0, 0, 0, 0.08);
//         }
//         .pf-thumb-art {
//           width: 100%;
//           height: 100%;
//           border-radius: 10px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           overflow: hidden;
//         }
//         .pf-thumb-tag {
//           position: absolute;
//           bottom: 14px;
//           left: 14px;
//           font-family: "IBM Plex Mono", monospace;
//           font-size: 10.5px;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           color: rgba(255, 255, 255, 0.85);
//           background: rgba(0, 0, 0, 0.22);
//           padding: 4px 9px;
//           border-radius: 999px;
//         }
//         .pf-content {
//           padding: clamp(24px, 3.4vw, 48px);
//           display: flex;
//           flex-direction: column;
//         }
//         .pf-page-num {
//           font-family: "IBM Plex Mono", monospace;
//           font-size: 12px;
//           color: var(--muted);
//           letter-spacing: 0.08em;
//         }
//         .pf-service-tag {
//           display: inline-block;
//           align-self: flex-start;
//           font-family: "IBM Plex Mono", monospace;
//           font-size: 11px;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           color: #a3577a;
//           border: 1px solid rgba(163, 87, 122, 0.3);
//           border-radius: 999px;
//           padding: 4px 10px;
//           margin: 14px 0 0;
//         }
//         .pf-content h2 {
//           font-family: "Fraunces", serif;
//           font-weight: 600;
//           font-size: clamp(24px, 2.6vw, 36px);
//           margin: 16px 0 8px;
//           line-height: 1.1;
//         }
//         .pf-content .pf-role {
//           font-size: 13px;
//           color: var(--muted);
//           margin-bottom: 14px;
//           font-weight: 500;
//         }
//         .pf-content p.pf-body {
//           font-size: 15px;
//           line-height: 1.62;
//           color: #3a3327;
//           max-width: 52ch;
//           margin: 0;
//         }
//         .pf-content .pf-foot {
//           margin-top: auto;
//           display: flex;
//           gap: 18px;
//           font-family: "IBM Plex Mono", monospace;
//           font-size: 11.5px;
//           color: var(--muted);
//         }
//         .pf-content .pf-foot span b {
//           color: var(--text);
//           font-weight: 600;
//         }

//         .pf-cover {
//           background: linear-gradient(155deg, #22304f, #151d33);
//           color: var(--paper);
//           flex-direction: column;
//           justify-content: center;
//           align-items: flex-start;
//           padding: clamp(28px, 4vw, 56px);
//         }
//         .pf-cover h2 {
//           color: var(--paper);
//           font-size: clamp(30px, 4vw, 50px);
//           font-family: "Fraunces", serif;
//           font-weight: 600;
//           margin: 0 0 10px;
//         }
//         .pf-cover .pf-role {
//           color: #a9b3d0;
//           margin: 0 0 20px;
//         }
//         .pf-cover .pf-rule {
//           width: 56px;
//           height: 2px;
//           background: var(--pink);
//           margin-bottom: 22px;
//         }

//         .pf-backcover {
//           background: linear-gradient(155deg, #22304f, #151d33);
//           color: var(--paper);
//           flex-direction: column;
//           justify-content: center;
//           align-items: flex-start;
//           padding: clamp(28px, 4vw, 56px);
//         }
//         .pf-backcover h2 {
//           font-family: "Fraunces", serif;
//           font-weight: 600;
//           font-size: clamp(20px, 2.6vw, 30px);
//           color: var(--paper);
//           margin: 0 0 12px;
//         }
//         .pf-backcover p {
//           color: #c9c4d6;
//           max-width: 44ch;
//           margin: 0;
//         }

//         .pf-outro {
//           min-height: 60vh;
//           color: var(--paper);
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: flex-start;
//           padding: 8vh 8vw;
//           background: var(--navy);
//         }
//         .pf-outro h3 {
//           font-family: "Fraunces", serif;
//           font-weight: 600;
//           font-size: clamp(26px, 4vw, 42px);
//           margin: 0 0 14px;
//         }
//         .pf-outro a {
//           color: var(--pink);
//           text-decoration: none;
//           border-bottom: 1px solid rgba(230, 169, 187, 0.4);
//         }
//         .pf-outro a:hover {
//           border-bottom-color: var(--pink);
//         }

//         @media (max-width: 720px) {
//           .pf-spine-label {
//             display: none;
//           }
//           .pf-book {
//             width: 90vw;
//             height: 70vh;
//           }
//           .pf-page {
//             grid-template-columns: 1fr;
//             grid-template-rows: 38% 62%;
//           }
//           .pf-thumb {
//             border-right: none;
//             border-bottom: 1px solid rgba(0, 0, 0, 0.08);
//           }
//         }
//       `}</style> */}

//       <style jsx global>{`
//   :root {
//     --navy: #1b2540;
//     --paper: #f7f3ec;
//     --paper-shadow: #e9e2d3;
//     --pink: #e6a9bb;
//     --sky: #8fb3d9;
//     --text: #221e2a;
//     --muted: #7a7568;
//   }
//   .pf-root {
//     margin: 0;
//     padding: 0;
//     background: var(--navy);
//     color: var(--text);
//     font-family: "Inter", sans-serif;
//   }
//   .pf-intro {
//     min-height: 70vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     padding: 8vh 8vw;
//     color: var(--paper);
//   }
//   .pf-eyebrow {
//     font-family: "IBM Plex Mono", monospace;
//     font-size: 13px;
//     letter-spacing: 0.12em;
//     text-transform: uppercase;
//     color: var(--pink);
//     margin-bottom: 18px;
//   }
//   .pf-intro h1 {
//     font-family: "Fraunces", serif;
//     font-weight: 600;
//     font-size: clamp(28px, 6vw, 68px);
//     line-height: 1.1;
//     margin: 0 0 20px;
//     max-width: 15ch;
//   }
//   .pf-intro p {
//     max-width: 48ch;
//     color: #c9c4d6;
//     font-size: clamp(14px, 2.4vw, 17px);
//     line-height: 1.6;
//     margin: 0;
//   }
//   .pf-hint {
//     margin-top: 40px;
//     font-family: "IBM Plex Mono", monospace;
//     font-size: 12px;
//     color: #8a86a0;
//     display: flex;
//     align-items: center;
//     gap: 10px;
//   }
//   .pf-hint svg {
//     width: 14px;
//     height: 14px;
//     animation: pf-bob 1.6s ease-in-out infinite;
//   }
//   @keyframes pf-bob {
//     0%,
//     100% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(6px);
//     }
//   }

//   .pf-book-rig {
//     position: relative;
//     height: 620vh;
//   }
//   .pf-book-stage {
//     position: sticky;
//     top: 0;
//     height: 100vh;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     perspective: 2600px;
//     overflow: hidden;
//     padding: 0 16px;
//     box-sizing: border-box;
//   }
//   .pf-book {
//     opacity: 0;
//     position: relative;
//     width: min(84vw, 1040px);
//     height: min(64vh, 560px);
//     transform-style: preserve-3d;
//   }
//   .pf-spine-label {
//     position: absolute;
//     left: 5vw;
//     top: 50%;
//     transform: translateY(-50%) rotate(-90deg);
//     transform-origin: left center;
//     font-family: "IBM Plex Mono", monospace;
//     font-size: 12px;
//     letter-spacing: 0.14em;
//     color: #8a86a0;
//     text-transform: uppercase;
//     white-space: nowrap;
//   }
//   .pf-page {
//     position: absolute;
//     inset: 0;
//     background: var(--paper);
//     border-radius: 2px 10px 10px 2px;
//     box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.55), inset -1px 0 0 rgba(0, 0, 0, 0.06);
//     transform-origin: left center;
//     transform-style: preserve-3d;
//     display: grid;
//     grid-template-columns: 42% 58%;
//     will-change: transform;
//     overflow: hidden;
//   }
//   .pf-page.pf-cover,
//   .pf-page.pf-backcover {
//     display: flex;
//   }
//   .pf-thumb {
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: clamp(14px, 3vw, 36px);
//     border-right: 1px solid rgba(0, 0, 0, 0.08);
//     min-width: 0;
//     min-height: 0;
//     overflow: hidden;
//   }
//   .pf-thumb-art {
//     width: 100%;
//     height: 100%;
//     border-radius: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//     overflow: hidden;
//   }
//   .pf-thumb-tag {
//     position: absolute;
//     bottom: 14px;
//     left: 14px;
//     font-family: "IBM Plex Mono", monospace;
//     font-size: 10.5px;
//     letter-spacing: 0.08em;
//     text-transform: uppercase;
//     color: rgba(255, 255, 255, 0.85);
//     background: rgba(0, 0, 0, 0.22);
//     padding: 4px 9px;
//     border-radius: 999px;
//     white-space: nowrap;
//     max-width: calc(100% - 28px);
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
//   .pf-content {
//     padding: clamp(16px, 3.4vw, 48px);
//     display: flex;
//     flex-direction: column;
//     min-width: 0;
//     min-height: 0;
//     overflow-y: auto;
//   }
//   .pf-page-num {
//     font-family: "IBM Plex Mono", monospace;
//     font-size: 12px;
//     color: var(--muted);
//     letter-spacing: 0.08em;
//   }
//   .pf-service-tag {
//     display: inline-block;
//     align-self: flex-start;
//     font-family: "IBM Plex Mono", monospace;
//     font-size: 11px;
//     letter-spacing: 0.08em;
//     text-transform: uppercase;
//     color: #a3577a;
//     border: 1px solid rgba(163, 87, 122, 0.3);
//     border-radius: 999px;
//     padding: 4px 10px;
//     margin: 14px 0 0;
//   }
//   .pf-content h2 {
//     font-family: "Fraunces", serif;
//     font-weight: 600;
//     font-size: clamp(18px, 2.6vw, 36px);
//     margin: 12px 0 6px;
//     line-height: 1.15;
//   }
//   .pf-content .pf-role {
//     font-size: clamp(11px, 1.4vw, 13px);
//     color: var(--muted);
//     margin-bottom: 10px;
//     font-weight: 500;
//   }
//   .pf-content p.pf-body {
//     font-size: clamp(12px, 1.6vw, 15px);
//     line-height: 1.55;
//     color: #3a3327;
//     max-width: 52ch;
//     margin: 0;
//   }
//   .pf-content .pf-foot {
//     margin-top: 20px;
//     display: flex;
//     gap: 18px;
//     font-family: "IBM Plex Mono", monospace;
//     font-size: 11px;
//     color: var(--muted);
//     padding-top: 10px;
//     flex-wrap: wrap;
//   }
//   .pf-content .pf-foot span b {
//     color: var(--text);
//     font-weight: 600;
//   }

//   .pf-cover {
//     background: linear-gradient(155deg, #22304f, #151d33);
//     color: var(--paper);
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     padding: clamp(20px, 4vw, 56px);
//   }
//   .pf-cover h2 {
//     color: var(--paper);
//     font-size: clamp(24px, 4vw, 50px);
//     font-family: "Fraunces", serif;
//     font-weight: 600;
//     margin: 0 0 10px;
//   }
//   .pf-cover .pf-role {
//     color: #a9b3d0;
//     margin: 0 0 20px;
//     font-size: clamp(11px, 1.6vw, 14px);
//   }
//   .pf-cover .pf-rule {
//     width: 56px;
//     height: 2px;
//     background: var(--pink);
//     margin-bottom: 22px;
//   }

//   .pf-backcover {
//     background: linear-gradient(155deg, #22304f, #151d33);
//     color: var(--paper);
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     padding: clamp(20px, 4vw, 56px);
//   }
//   .pf-backcover h2 {
//     font-family: "Fraunces", serif;
//     font-weight: 600;
//     font-size: clamp(18px, 2.6vw, 30px);
//     color: var(--paper);
//     margin: 0 0 12px;
//   }
//   .pf-backcover p {
//     color: #c9c4d6;
//     max-width: 44ch;
//     margin: 0;
//     font-size: clamp(12px, 1.6vw, 15px);
//   }

//   .pf-outro {
//     min-height: 60vh;
//     color: var(--paper);
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     padding: 8vh 8vw;
//     background: var(--navy);
//   }
//   .pf-outro h3 {
//     font-family: "Fraunces", serif;
//     font-weight: 600;
//     font-size: clamp(22px, 4vw, 42px);
//     margin: 0 0 14px;
//   }
//   .pf-outro a {
//     color: var(--pink);
//     text-decoration: none;
//     border-bottom: 1px solid rgba(230, 169, 187, 0.4);
//   }
//   .pf-outro a:hover {
//     border-bottom-color: var(--pink);
//   }

//   /* ---------- Tablet / small laptop (<=991px) ---------- */
//   @media (max-width: 991px) {
//     .pf-book {
//       width: 92vw;
//       height: 72vh;
//     }
//     .pf-spine-label {
//       display: none;
//     }
//     .pf-content {
//       padding: 18px;
//     }
//   }

//   /* ---------- Large mobile / small tablet (<=767px) ---------- */
//   @media (max-width: 767px) {
//     .pf-book-stage {
//       padding: 0 10px;
//     }
//     .pf-book {
//       width: 94vw;
//       height: 82vh;
//     }
//     .pf-page {
//       grid-template-columns: 1fr;
//       grid-template-rows: 42% 58%;
//       border-radius: 8px;
//     }
//     .pf-thumb {
//       border-right: none;
//       border-bottom: 1px solid rgba(0, 0, 0, 0.08);
//       padding: 10px;
//     }
//     .pf-thumb-tag {
//       font-size: 9px;
//       bottom: 8px;
//       left: 8px;
//       padding: 3px 7px;
//     }
//     .pf-content {
//       padding: 14px 16px;
//     }
//     .pf-content h2 {
//       margin: 8px 0 4px;
//     }
//     .pf-intro {
//       padding: 6vh 6vw;
//     }
//     .pf-outro {
//       padding: 6vh 6vw;
//     }
//   }

//   /* ---------- Small phones (<=480px) ---------- */
//   @media (max-width: 480px) {
//     .pf-book {
//       width: 96vw;
//       height: 86vh;
//     }
//     .pf-page {
//       grid-template-rows: 40% 60%;
//     }
//     .pf-thumb {
//       padding: 8px;
//     }
//     .pf-content {
//       padding: 12px 14px;
//     }
//     .pf-content h2 {
//       font-size: 16px;
//     }
//     .pf-content p.pf-body {
//       font-size: 11.5px;
//       line-height: 1.5;
//     }
//     .pf-service-tag {
//       font-size: 9.5px;
//       padding: 3px 8px;
//     }
//     .pf-page-num {
//       font-size: 10px;
//     }
//     .pf-cover h2,
//     .pf-backcover h2 {
//       font-size: 22px;
//     }
//   }

//   /* ---------- Very small phones (<=360px) ---------- */
//   @media (max-width: 360px) {
//     .pf-book {
//       height: 90vh;
//     }
//     .pf-page {
//       grid-template-rows: 40% 62%;
//       padding-top: 10px;
//     }
//     .pf-content p.pf-body {
//       font-size: 11px;
//     }
//   }
// `}</style>
//     </>
//   );
// }




















































"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function FlipBanner() {
  const bookRigRef = useRef(null);
  const bookRef = useRef(null);
  const currentPageRef = useRef(0);

  useEffect(() => {
    const rig = bookRigRef.current;
    const book = bookRef.current;
    if (!rig || !book) return;

    const pages = rig.querySelectorAll(".pf-page");
    const n = pages.length;

    const ENTRANCE_FRACTION = 0.18;
    const RISE_DISTANCE_VH = 18; // how far below its resting spot the book starts, in vh

    function update() {
      const rect = rig.getBoundingClientRect();
      const total = rig.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0; // 0 -> 1 across the whole rig

      if (progress <= ENTRANCE_FRACTION) {
        // --- Phase 1: slide up from under the hero, fade in, no page flips yet ---
        const t = progress / ENTRANCE_FRACTION; // 0 -> 1
        const eased = t * t * (3 - 2 * t); // smoothstep, gentler at both ends
        book.style.opacity = eased;
        book.style.transform = `translateY(${(1 - eased) * RISE_DISTANCE_VH}vh) scale(${0.96 + eased * 0.04})`;
        currentPageRef.current = 0;
        pages.forEach((page) => {
          page.style.transform = "rotateY(0deg)";
        });
      } else {
        // --- Phase 2: book is fully in place, remaining scroll flips pages ---
        book.style.opacity = 1;
        book.style.transform = "translateY(0) scale(1)";
        const flipProgress = (progress - ENTRANCE_FRACTION) / (1 - ENTRANCE_FRACTION); // 0 -> 1
        currentPageRef.current = Math.min(
          n - 1,
          Math.max(0, Math.round(flipProgress * (n - 1)))
        );
        const per = 1 / (n - 1);
        pages.forEach((page, i) => {
          if (i === n - 1) return; // back cover stays flat
          const start = i * per;
          const local = Math.min(Math.max((flipProgress - start) / per, 0), 1);
          const angle = local * -175;
          page.style.transform = `rotateY(${angle}deg)`;
          page.style.boxShadow = `0 30px 60px -20px rgba(0,0,0,${0.5 + local * 0.1}), inset -1px 0 0 rgba(0,0,0,.06)`;
        });
      }
    }

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const goToPage = (direction) => {
    const rig = bookRigRef.current;
    if (!rig) return;

    const pages = rig.querySelectorAll(".pf-page");
    const n = pages.length;
    if (n < 2) return;

    const ENTRANCE_FRACTION = 0.18;
    const currentPage = currentPageRef.current;
    const targetPage = Math.min(
      n - 1,
      Math.max(0, currentPage + direction)
    );

    if (targetPage === currentPage) return;

    const total = rig.offsetHeight - window.innerHeight;
    if (total <= 0) return;

    const targetProgress =
      targetPage === 0
        ? ENTRANCE_FRACTION
        : targetPage === n - 1
          ? 1
          : ENTRANCE_FRACTION +
          (targetPage / (n - 1)) * (1 - ENTRANCE_FRACTION);

    const rigTop = rig.getBoundingClientRect().top + window.scrollY;
    const targetScroll = rigTop + targetProgress * total;

    currentPageRef.current = targetPage;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="pf-root">
        <section className="pf-intro">
          <div className="pf-eyebrow">Pawform · Case Studies</div>
          <h1>Four services, four ways of solving a problem</h1>
          <p>
            Scroll to flip through dummy case studies for each service Pawform offers — swap the
            images and copy for real client work once it's ready.
          </p>
          <div className="pf-hint">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
            keep scrolling
          </div>
        </section>

        <div className="pf-book-rig" ref={bookRigRef}>
          <div className="pf-book-stage">
            <div className="pf-spine-label">Pawform — Case Studies</div>

            <div className="pf-nav-buttons">
              <button
                type="button"
                className="pf-nav-button pf-nav-button-left"
                onClick={() => goToPage(-1)}
                aria-label="Previous case study"
              >
                <span aria-hidden="true">←</span>
              </button>

              <button
                type="button"
                className="pf-nav-button pf-nav-button-right"
                onClick={() => goToPage(1)}
                aria-label="Next case study"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="pf-book" ref={bookRef}>
              <div className="pf-page pf-cover" style={{ zIndex: 7 }}>
                <div className="pf-page-num">Cover</div>
                <div className="pf-rule"></div>
                <h2>Selected Work</h2>
                <div className="pf-role">Branding · Packaging · Product · Marketing</div>
                <p className="pf-body" style={{ color: "#c9c4d6" }}>
                  A page for each service — the brief, the thinking, and what shipped.
                </p>
              </div>

              <div className="pf-page" style={{ zIndex: 6 }}>
                <div className="pf-thumb">
                  <img className="img-fluid rounded-2" src="/img/logo-barnd.jpeg" alt="" />
                  <div className="pf-thumb-tag ms-md-4 py-1 ms-1 mb-1">Logomark, Solstice Coffee Co.</div>
                </div>
                <div className="pf-content">
                  <div className="pf-page-num">01 / Branding &amp; Logo</div>
                  <span className="pf-service-tag">Identity System</span>
                  <h2>Solstice Coffee Co.</h2>
                  <div className="pf-role">Rebrand for a 3-store specialty coffee chain</div>
                  <p className="pf-body">
                    Solstice had grown past its original napkin-sketch logo and needed an identity
                    that could hold up on packaging, signage, and delivery apps at once. We built a
                    mark that reads at both a 2px favicon and a shopfront scale, paired with a warm,
                    sun-drawn palette that ties every touchpoint back to the name.
                  </p>
                  <div>
                    <Link className="mt-3 fs-14" href="#">Link Demo</Link>
                  </div>
                  <div className="pf-foot">
                    <span>
                      Deliverables: <b>Logo suite, type system, brand guide</b>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pf-page" style={{ zIndex: 5 }}>
                <div className="pf-thumb ">
                  <img className="img-fluid rounded-2" src="/img/packing-desgin.jpeg" alt="" />
                  <div className="pf-thumb-tag ms-md-4 py-1 ms-1 mb-1">Label system, Meadow &amp; Co.</div>
                </div>
                <div className="pf-content ">
                  <div className="pf-page-num">02 / Packaging Design</div>
                  <span className="pf-service-tag">Structural + Print</span>
                  <h2>Meadow &amp; Co.</h2>
                  <div className="pf-role">Skincare line packaging, 6 SKUs</div>
                  <p className="pf-body">
                    Six products, one shelf, zero confusion — that was the brief. We designed a
                    modular label system where color alone tells you which product you're holding,
                    plus a fold-out carton that doubles as an ingredient explainer, so the packaging
                    does some of the selling before anyone opens the box.
                  </p>
                  <div>
                    <Link className="fs-14" href="#">Link Demo</Link>
                  </div>
                  <div className="pf-foot ">
                    <span>
                      Deliverables: <b>Label system, carton structure, print files</b>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pf-page" style={{ zIndex: 4 }}>
                <div className="pf-thumb">
                  <img className="img-fluid rounded-2" src="/img/product-degin.jpeg" alt="" />
                  <div className="pf-thumb-tag ms-md-4 py-1 ms-1 mb-1">Harness concept, Fetch</div>
                </div>
                <div className="pf-content">
                  <div className="pf-page-num">03 / Product Design</div>
                  <span className="pf-service-tag">Physical Product</span>
                  <h2>Fetch — Modular Harness</h2>
                  <div className="pf-role">Adjustable dog harness system</div>
                  <p className="pf-body">
                    Most dog harnesses are one-size-fits-most and fit nobody well. Fetch is built
                    around a single adjustable clip mechanism that adapts to four size ranges without
                    new tooling per size, cutting manufacturing SKUs while giving owners a fit that
                    actually matches their dog.
                  </p>
                  <div>
                    <Link className="fs-14" href="#">Link Demo</Link>
                  </div>
                  <div className="pf-foot">
                    <span>
                      Deliverables: <b>CMF spec, prototype, spec sheet</b>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pf-page" style={{ zIndex: 3 }}>
                <div className="pf-thumb">
                  <img className="img-fluid rounded-2" src="img/pet-casting.jpeg" alt="" />
                  <div className="pf-thumb-tag ms-md-4 py-1 ms-1 mb-1">Launch campaign, Northline Bikes</div>
                </div>
                <div className="pf-content">
                  <div className="pf-page-num">04 / Pet Casting and Animal Talent  </div>
                  <span className="pf-service-tag">Go-to-Market</span>
                  <h2>Northline Bikes Launch</h2>
                  <div className="pf-role">Direct-to-consumer launch campaign</div>
                  <p className="pf-body">
                    Northline needed to go from zero to a fully booked pre-order window in six weeks
                    with no existing audience. We mapped a launch sequence across email, social, and a
                    single paid channel, sequencing story-first content ahead of any discount so early
                    buyers were sold on the bike, not the price.
                  </p>
                  <div>
                    <Link href="#" className="fs-14">Link Demo</Link>
                  </div>
                  <div className="pf-foot">
                    <span>
                      Result: <b>Pre-order goal hit in 19 days</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="pf-page" style={{ zIndex: 3 }}>
                <div className="pf-thumb">
                  <img className="img-fluid rounded-2" src="/img/website-dev.jpeg" alt="" />
                  <div className="pf-thumb-tag ms-md-4 py-1 ms-1 mb-1">Website and App Development</div>
                </div>
                <div className="pf-content">
                  <div className="pf-page-num">04 / Website and App Development  </div>
                  <span className="pf-service-tag">Go-to-Market</span>
                  <h2>website Bikes Launch</h2>
                  <div className="pf-role">Direct-to-consumer launch campaign</div>
                  <p className="pf-body">
                    Northline needed to go from zero to a fully booked pre-order window in six weeks
                    with no existing audience. We mapped a launch sequence across email, social, and a
                    single paid channel, sequencing story-first content ahead of any discount so early
                    buyers were sold on the bike, not the price.
                  </p>
                  <div>
                    <Link href="#" className="fs-14">Link Demo</Link>
                  </div>
                  <div className="pf-foot">
                    <span>
                      Result: <b>Pre-order goal hit in 19 days</b>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pf-page pf-backcover" style={{ zIndex: 2 }}>
                <div className="pf-page-num" style={{ color: "#8a86a0" }}>
                  Back cover
                </div>
                <h2>More case studies on request</h2>
                <p>
                  These four are placeholders — send over real client work and we'll drop it straight
                  into this same layout.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="pf-outro">
          <h3>Ready to start a project?</h3>
          <p style={{ maxWidth: "44ch", color: "#c9c4d6", marginBottom: "18px" }}>
            Branding, packaging, product, or marketing — tell us what you're building.
          </p>
          <a href="mailto:hello@pawform.studio">hello@pawform.studio</a>
        </section>
      </div>

      {/* <style jsx global>{`
        :root {
          --navy: #1b2540;
          --paper: #f7f3ec;
          --paper-shadow: #e9e2d3;
          --pink: #e6a9bb;
          --sky: #8fb3d9;
          --text: #221e2a;
          --muted: #7a7568;
        }
        .pf-root {
          margin: 0;
          padding: 0;
          background: var(--navy);
          color: var(--text);
          font-family: "Inter", sans-serif;
        }
        .pf-intro {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 8vh 8vw;
          color: var(--paper);
        }
        .pf-eyebrow {
          font-family: "IBM Plex Mono", monospace;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--pink);
          margin-bottom: 18px;
        }
        .pf-intro h1 {
          font-family: "Fraunces", serif;
          font-weight: 600;
          font-size: clamp(36px, 6vw, 68px);
          line-height: 1.06;
          margin: 0 0 20px;
          max-width: 15ch;
        }
        .pf-intro p {
          max-width: 48ch;
          color: #c9c4d6;
          font-size: 17px;
          line-height: 1.6;
          margin: 0;
        }
        .pf-hint {
          margin-top: 48px;
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
          color: #8a86a0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pf-hint svg {
          width: 14px;
          height: 14px;
          animation: pf-bob 1.6s ease-in-out infinite;
        }
        @keyframes pf-bob {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }

        .pf-book-rig {
          position: relative;
          height: 620vh;
        }
        .pf-book-stage {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 2600px;
          overflow: hidden;
        }
        .pf-book {
          opacity: 0;
          position: relative;
          width: min(84vw, 1040px);
          height: min(64vh, 560px);
          transform-style: preserve-3d;
        }
        .pf-spine-label {
          position: absolute;
          left: 5vw;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          transform-origin: left center;
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          color: #8a86a0;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .pf-page {
          position: absolute;
          inset: 0;
          background: var(--paper);
          border-radius: 2px 10px 10px 2px;
          box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.55), inset -1px 0 0 rgba(0, 0, 0, 0.06);
          transform-origin: left center;
          transform-style: preserve-3d;
          display: grid;
          grid-template-columns: 42% 58%;
          will-change: transform;
          overflow: hidden;
        }
        .pf-page.pf-cover,
        .pf-page.pf-backcover {
          display: flex;
        }
        .pf-thumb {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(20px, 3vw, 36px);
          border-right: 1px solid rgba(0, 0, 0, 0.08);
        }
        .pf-thumb-art {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .pf-thumb-tag {
          position: absolute;
          bottom: 14px;
          left: 14px;
          font-family: "IBM Plex Mono", monospace;
          font-size: 10.5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(0, 0, 0, 0.22);
          padding: 4px 9px;
          border-radius: 999px;
        }
        .pf-content {
          padding: clamp(24px, 3.4vw, 48px);
          display: flex;
          flex-direction: column;
        }
        .pf-page-num {
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.08em;
        }
        .pf-service-tag {
          display: inline-block;
          align-self: flex-start;
          font-family: "IBM Plex Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #a3577a;
          border: 1px solid rgba(163, 87, 122, 0.3);
          border-radius: 999px;
          padding: 4px 10px;
          margin: 14px 0 0;
        }
        .pf-content h2 {
          font-family: "Fraunces", serif;
          font-weight: 600;
          font-size: clamp(24px, 2.6vw, 36px);
          margin: 16px 0 8px;
          line-height: 1.1;
        }
        .pf-content .pf-role {
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 14px;
          font-weight: 500;
        }
        .pf-content p.pf-body {
          font-size: 15px;
          line-height: 1.62;
          color: #3a3327;
          max-width: 52ch;
          margin: 0;
        }
        .pf-content .pf-foot {
          margin-top: auto;
          display: flex;
          gap: 18px;
          font-family: "IBM Plex Mono", monospace;
          font-size: 11.5px;
          color: var(--muted);
        }
        .pf-content .pf-foot span b {
          color: var(--text);
          font-weight: 600;
        }

        .pf-cover {
          background: linear-gradient(155deg, #22304f, #151d33);
          color: var(--paper);
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: clamp(28px, 4vw, 56px);
        }
        .pf-cover h2 {
          color: var(--paper);
          font-size: clamp(30px, 4vw, 50px);
          font-family: "Fraunces", serif;
          font-weight: 600;
          margin: 0 0 10px;
        }
        .pf-cover .pf-role {
          color: #a9b3d0;
          margin: 0 0 20px;
        }
        .pf-cover .pf-rule {
          width: 56px;
          height: 2px;
          background: var(--pink);
          margin-bottom: 22px;
        }

        .pf-backcover {
          background: linear-gradient(155deg, #22304f, #151d33);
          color: var(--paper);
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: clamp(28px, 4vw, 56px);
        }
        .pf-backcover h2 {
          font-family: "Fraunces", serif;
          font-weight: 600;
          font-size: clamp(20px, 2.6vw, 30px);
          color: var(--paper);
          margin: 0 0 12px;
        }
        .pf-backcover p {
          color: #c9c4d6;
          max-width: 44ch;
          margin: 0;
        }

        .pf-outro {
          min-height: 60vh;
          color: var(--paper);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 8vh 8vw;
          background: var(--navy);
        }
        .pf-outro h3 {
          font-family: "Fraunces", serif;
          font-weight: 600;
          font-size: clamp(26px, 4vw, 42px);
          margin: 0 0 14px;
        }
        .pf-outro a {
          color: var(--pink);
          text-decoration: none;
          border-bottom: 1px solid rgba(230, 169, 187, 0.4);
        }
        .pf-outro a:hover {
          border-bottom-color: var(--pink);
        }

        @media (max-width: 720px) {
          .pf-spine-label {
            display: none;
          }
          .pf-book {
            width: 90vw;
            height: 70vh;
          }
          .pf-page {
            grid-template-columns: 1fr;
            grid-template-rows: 38% 62%;
          }
          .pf-thumb {
            border-right: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          }
        }
      `}</style> */}

      <style jsx global>{`
  :root {
    --navy: #0268FE;
    --paper: #f7f3ec;
    --paper-shadow: #e9e2d3;
    --pink: #e6a9bb;
    --sky: #8fb3d9;
    --text: #221e2a;
    --muted: #7a7568;
  }
  .pf-root {
    margin: 0;
    padding: 0;
    background: var(--navy);
    color: var(--text);
    font-family: "Inter", sans-serif;
  }
  .pf-intro {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 8vh 8vw;
    color: var(--paper);
  }
  .pf-eyebrow {
    font-family: "IBM Plex Mono", monospace;
    font-size: 13px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--pink);
    margin-bottom: 18px;
  }
  .pf-intro h1 {
    font-family: "Fraunces", serif;
    font-weight: 600;
    font-size: clamp(28px, 6vw, 68px);
    line-height: 1.1;
    margin: 0 0 20px;
    max-width: 15ch;
  }
  .pf-intro p {
    max-width: 48ch;
    color: #c9c4d6;
    font-size: clamp(14px, 2.4vw, 17px);
    line-height: 1.6;
    margin: 0;
  }
  .pf-hint {
    margin-top: 40px;
    font-family: "IBM Plex Mono", monospace;
    font-size: 12px;
    color: #8a86a0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .pf-hint svg {
    width: 14px;
    height: 14px;
    animation: pf-bob 1.6s ease-in-out infinite;
  }
  @keyframes pf-bob {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(6px);
    }
  }

  .pf-book-rig {
    position: relative;
    height: 620vh;
  }
  .pf-book-stage {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 2600px;
    overflow: hidden;
    padding: 0 16px;
    box-sizing: border-box;
  }
  .pf-nav-buttons {
    position: absolute;
    inset: 0;
    z-index: 20;
    pointer-events: none;
  }

  .pf-nav-button {
    position: absolute;
    top: 50%;
    width: 52px;
    height: 52px;
    border: 1px solid rgba(247, 243, 236, 0.35);
    border-radius: 50%;
    background: white;
    color:black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    line-height: 1;
    cursor: pointer;
    transform: translateY(-50%);
    transition: all 0.25s ease;
    pointer-events: auto;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .pf-nav-button:hover {
    background: black;
    border-color: rgba(247, 243, 236, 0.7);
    color : white;
    transform: translateY(-50%) scale(1.08);
  }

  .pf-nav-button:active {
    transform: translateY(-50%) scale(0.96);
  }

  .pf-nav-button-left {
    left: 24px;
  }

  .pf-nav-button-right {
    right: 24px;
  }

  .pf-book {
    opacity: 0;
    position: relative;
    width: min(84vw, 1040px);
    height: min(64vh, 560px);
    transform-style: preserve-3d;
  }
  .pf-spine-label {
    position: absolute;
    left: 5vw;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    transform-origin: left center;
    font-family: "IBM Plex Mono", monospace;
    font-size: 12px;
    letter-spacing: 0.14em;
    color: #8a86a0;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .pf-page {
    position: absolute;
    inset: 0;
    background: var(--paper);
    border-radius: 2px 10px 10px 2px;
    box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.55), inset -1px 0 0 rgba(0, 0, 0, 0.06);
    transform-origin: left center;
    transform-style: preserve-3d;
    display: grid;
    grid-template-columns: 42% 58%;
    will-change: transform;
    overflow: hidden;
  }
  .pf-page.pf-cover,
  .pf-page.pf-backcover {
    display: flex;
  }
  .pf-thumb {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(14px, 3vw, 36px);
    border-right: 1px solid rgba(0, 0, 0, 0.08);
    min-width: 0;
    min-height: 0;
    overflow: hidden;
  }
  .pf-thumb-art {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .pf-thumb-tag {
    position: absolute;
    bottom: 14px;
    left: 14px;
    font-family: "IBM Plex Mono", monospace;
    font-size: 10.5px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
    background: rgba(0, 0, 0, 0.22);
    padding: 4px 9px;
    border-radius: 999px;
    white-space: nowrap;
    max-width: calc(100% - 28px);
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .pf-content {
    padding: clamp(16px, 3.4vw, 48px);
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    overflow-y: auto;
  }
  .pf-page-num {
    font-family: "IBM Plex Mono", monospace;
    font-size: 12px;
    color: var(--muted);
    letter-spacing: 0.08em;
  }
  .pf-service-tag {
    display: inline-block;
    align-self: flex-start;
    font-family: "IBM Plex Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #a3577a;
    border: 1px solid rgba(163, 87, 122, 0.3);
    border-radius: 999px;
    padding: 4px 10px;
    margin: 14px 0 0;
  }
  .pf-content h2 {
    font-family: "Fraunces", serif;
    font-weight: 600;
    font-size: clamp(18px, 2.6vw, 36px);
    margin: 12px 0 6px;
    line-height: 1.15;
  }
  .pf-content .pf-role {
    font-size: clamp(11px, 1.4vw, 13px);
    color: var(--muted);
    margin-bottom: 10px;
    font-weight: 500;
  }
  .pf-content p.pf-body {
    font-size: clamp(12px, 1.6vw, 15px);
    line-height: 1.55;
    color: #3a3327;
    max-width: 52ch;
    margin: 0;
  }
  .pf-content .pf-foot {
    margin-top: 20px;
    display: flex;
    gap: 18px;
    font-family: "IBM Plex Mono", monospace;
    font-size: 11px;
    color: var(--muted);
    padding-top: 10px;
    flex-wrap: wrap;
  }
  .pf-content .pf-foot span b {
    color: var(--text);
    font-weight: 600;
  }

  .pf-cover {
    // background: linear-gradient(155deg, #22304f, #151d33);
    background : black;
    color: var(--paper);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: clamp(20px, 4vw, 56px);
  }
  .pf-cover h2 {
    color: var(--paper);
    font-size: clamp(24px, 4vw, 50px);
    font-family: "Fraunces", serif;
    font-weight: 600;
    margin: 0 0 10px;
  }
  .pf-cover .pf-role {
    color: #a9b3d0;
    margin: 0 0 20px;
    font-size: clamp(11px, 1.6vw, 14px);
  }
  .pf-cover .pf-rule {
    width: 56px;
    height: 2px;
    background: var(--pink);
    margin-bottom: 22px;
  }

  .pf-backcover {
    // background: linear-gradient(155deg, #22304f, #151d33);
    background :black;
    color: var(--paper);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: clamp(20px, 4vw, 56px);
  }
  .pf-backcover h2 {
    font-family: "Fraunces", serif;
    font-weight: 600;
    font-size: clamp(18px, 2.6vw, 30px);
    color: var(--paper);
    margin: 0 0 12px;
  }
  .pf-backcover p {
    color: #c9c4d6;
    max-width: 44ch;
    margin: 0;
    font-size: clamp(12px, 1.6vw, 15px);
  }

  .pf-outro {
    min-height: 60vh;
    color: var(--paper);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 8vh 8vw;
    background: var(--navy);
  }
  .pf-outro h3 {
    font-family: "Fraunces", serif;
    font-weight: 600;
    font-size: clamp(22px, 4vw, 42px);
    margin: 0 0 14px;
  }
  .pf-outro a {
    color: var(--pink);
    text-decoration: none;
    border-bottom: 1px solid rgba(230, 169, 187, 0.4);
  }
  .pf-outro a:hover {
    border-bottom-color: var(--pink);
  }

  /* ---------- Tablet / small laptop (<=991px) ---------- */
  @media (max-width: 991px) {
    .pf-nav-button {
      width: 46px;
      height: 46px;
      font-size: 24px;
    }

    .pf-nav-button-left {
      left: 12px;
    }

    .pf-nav-button-right {
      right: 12px;
    }
    .pf-book {
      width: 92vw;
      height: 72vh;
    }
    .pf-spine-label {
      display: none;
    }
    .pf-content {
      padding: 18px;
    }
  }

  /* ---------- Large mobile / small tablet (<=767px) ---------- */
  @media (max-width: 767px) {
    .pf-nav-button {
      width: 40px;
      height: 40px;
      font-size: 20px;
    }

    .pf-nav-button-left {
      left: 6px;
    }

    .pf-nav-button-right {
      right: 6px;
    }
    .pf-book-stage {
      padding: 0 10px;
    }
    .pf-book {
      width: 94vw;
      height: 82vh;
    }
    .pf-page {
      grid-template-columns: 1fr;
      grid-template-rows: 42% 58%;
      border-radius: 8px;
    }
    .pf-thumb {
      border-right: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      padding: 10px;
    }
    .pf-thumb-tag {
      font-size: 9px;
      bottom: 8px;
      left: 8px;
      padding: 3px 7px;
    }
    .pf-content {
      padding: 14px 16px;
    }
    .pf-content h2 {
      margin: 8px 0 4px;
    }
    .pf-intro {
      padding: 6vh 6vw;
    }
    .pf-outro {
      padding: 6vh 6vw;
    }
  }

  /* ---------- Small phones (<=480px) ---------- */
  @media (max-width: 480px) {
    .pf-book {
      width: 96vw;
      height: 86vh;
    }
    .pf-page {
      grid-template-rows: 40% 60%;
    }
    .pf-thumb {
      padding: 8px;
    }
    .pf-content {
      padding: 12px 14px;
    }
    .pf-content h2 {
      font-size: 16px;
    }
    .pf-content p.pf-body {
      font-size: 11.5px;
      line-height: 1.5;
    }
    .pf-service-tag {
      font-size: 9.5px;
      padding: 3px 8px;
    }
    .pf-page-num {
      font-size: 10px;
    }
    .pf-cover h2,
    .pf-backcover h2 {
      font-size: 22px;
    }
  }

  /* ---------- Very small phones (<=360px) ---------- */
  @media (max-width: 360px) {
    .pf-book {
      height: 90vh;
    }
    .pf-page {
      grid-template-rows: 40% 62%;
      padding-top: 10px;
    }
    .pf-content p.pf-body {
      font-size: 11px;
    }
  }
`}</style>
    </>
  );
}