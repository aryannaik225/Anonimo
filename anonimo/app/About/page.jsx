'use client'

import AboutSection from "@components/components/AboutSection";
import TextCarousel from "@components/components/TextCarousel";
import React from "react";

export default function Home() {
  return (
    <main className="bg-black">
        <TextCarousel />
        <AboutSection />
    </main>
  );
}