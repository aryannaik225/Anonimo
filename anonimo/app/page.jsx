'use client'

import TextCarousel from "@components/components/TextCarousel";
import React from "react";
import HeroSection from "@components/components/HeroSection";
import FeedbackZone from "@components/components/FeedbackZone";

export default function Home() {
  return (
    <main className="bg-black">
      <TextCarousel />
      <HeroSection />
      <FeedbackZone />  
    </main>
  );
}
