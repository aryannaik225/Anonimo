'use client'

import FeedbackCode from "@components/components/FeedbackCode";
import TextCarousel from "@components/components/TextCarousel";
import React from "react";

export default function Home() {
  return (
    <main className="bg-black">
        <TextCarousel />
        <FeedbackCode />
    </main>
  );
}