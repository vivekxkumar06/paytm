import Image from "next/image";

import HeroSection from "../components/HeroSection";
import RechargeOffers from "../components/RechargeOffers";
import Scanner from "../components/Scanner";
import BookingSection from "../components/BookingSection";
import TextSection from "../components/TextSection";
import CardSection from "../components/CardSection";
import BoxSection from "../components/BoxSection";
import BoxSection2 from "../components/BoxSection2";
import BoxSection3 from "../components/BoxSection3";
import PaytmFooter from "../components/PaytmFooter";

export default function Home() {
  return (
    <>
     
    <HeroSection />
    <RechargeOffers />
    <Scanner/>
    <BookingSection />
    <TextSection />
    <CardSection />
    <BoxSection />
    <BoxSection2 />
    <BoxSection3/>
    {/* <PaytmFooter /> */}
    </>
 
  );
}
