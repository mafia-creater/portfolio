"use client";

import Hero from "./hero";
import About from "./about";
import useLenis from "../../hooks/useLenis";

export default function Home() {
  useLenis(); // Initialize smooth scrolling

  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}
