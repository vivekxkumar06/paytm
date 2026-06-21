import Image from "next/image";

import HeroSection from "../components/HeroSection";
import RechargeOffers from "../components/RechargeOffers";
import Scanner from "../components/Scanner";

export default function Home() {
  return (
    <>
     
    <HeroSection />
    <RechargeOffers />
    <Scanner/>
    </>
 
  );
}
