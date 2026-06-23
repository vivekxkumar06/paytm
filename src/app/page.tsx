import Image from "next/image";

import HeroSection from "../components/HeroSection";
import RechargeOffers from "../components/RechargeOffers";
import Scanner from "../components/Scanner";
import BookingSection from "../components/BookingSection";
import TextSection from "../components/TextSection";

export default function Home() {
  return (
    <>
     
    <HeroSection />
    <RechargeOffers />
    <Scanner/>
    <BookingSection />
    <TextSection />
    </>
 
  );
}
