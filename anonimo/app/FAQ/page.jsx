'use client'

import FAQSection from "@components/components/FAQSection";
import TextCarousel from "@components/components/TextCarousel";
import React from "react";

export default function Home() {
  return (
    <main className="bg-black">
        <TextCarousel />
        <FAQSection />
    </main>
  );
}