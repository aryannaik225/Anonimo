import TextCarousel from "@components/components/TextCarousel";
import React from "react";
import { carouselItems } from "@components/data";

export default function Home() {
  return (
    <main className="bg-black">
      <TextCarousel items={carouselItems}/>  
    </main>
  );
}
