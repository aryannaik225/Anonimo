import TextCarousel from "@components/components/TextCarousel";
import React from "react";
import { carouselItems } from "@components/data";
import HeroSection from "@components/components/HeroSection";

export default function Home() {
  return (
    <main className="bg-black">
      <TextCarousel />
      <HeroSection />  
    </main>
  );
}
