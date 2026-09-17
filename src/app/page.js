import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurPhilosophy from "@/components/OurPhilosophy";
import OurProcess from "@/components/OurProcess";
import ServicesAsOutcomes from "@/components/ServicesAsOutcomes";
import PetAmbassador from "@/components/PetAmbassador";
import WhatClientsSay from "@/components/WhatClientsSay";
import Footer from "@/components/Footer";
import TrustedBy from "@/components/TrustedBy";
import FilpBanner from "@/components/FilpBanner";

export default function Home() {
  return (
    <>
      <section>
        <div className={`${styles.MainBannerWarper} position-relative`}>
          <video autoPlay muted loop playsInline>
            <source src="/viedo/petviedo.mp4" type="video/mp4" />
          </video>
          <Navbar theme="dark" />
          <div className="px-2">
            <div className="container-fluid custom-container p-0 pb-4">
              <div className={styles.customPostion}>
                <div className={`row d-flex justify-content-center align-items-end g-3 ${styles.customWidthText}`}>
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <h1 className={`text-white ${styles.heroheading}`}>
                      Designing the Future of Pet Living, Play & Talent </h1>
                  </div>
                  <div className="col-lg-4 offset-lg-2 offset-xl-2 col-xl-4 col-md-12 col-sm-12 col-12">
                    <h2 className="text-white fs-20 pb-3">
                      From furniture that blends beautifully into modern homes to toys, merchandise, and pet casting, Pawform Studio creates products and experiences that celebrate every part of pet life.
                    </h2>
                  </div>
                  <div className="d-xl-none d-block">
                    <div className='m-0'>
                      <hr className='white-custom-color' />
                      <p className='m-0 white-custom-color fs-20'>An award</p>
                      <p className='m-0 white-custom-color fs-20'>wining digital agency</p>
                      <p className='m-0 white-custom-color fs-20'>since-2017</p>
                    </div>
                    <div>
                      <hr className='white-custom-color' />
                      <p className='m-0 white-custom-color fs-20'>Adon</p>
                      <p className='m-0 white-custom-color fs-20'>1772 Street Charleston,</p>
                      <p className='m-0 white-custom-color fs-20'>New York</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      <FilpBanner />
      <OurPhilosophy />
      <OurProcess />
      <ServicesAsOutcomes />
      <PetAmbassador />
      <WhatClientsSay />
      <TrustedBy />
      <Footer />
    </>
  );
}
