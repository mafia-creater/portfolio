"use client";

import dynamic from "next/dynamic";
import Hero from "./hero";
import About from "./about";

import useSmoothScroll from "../../hooks/useSmoothScroll";

export default function Home() {
  const scrollRef = useSmoothScroll();

  return (
    <div ref={scrollRef} data-scroll-container>
      <section data-scroll-section>
        <Hero />
      </section>
      <section data-scroll-section>
        <About />
      </section>
    </div>
  );
}
