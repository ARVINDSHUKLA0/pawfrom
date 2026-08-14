import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomePageStrip from "@/components/HomePageStrip";
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
<Navbar/>
<HeroSection/>
<HomePageStrip/>
<FilpBanner/>
<OurPhilosophy/>
<OurProcess/>
<ServicesAsOutcomes/>
<PetAmbassador/>
<WhatClientsSay/>
<TrustedBy/>
<Footer/>
</>
  );
}
