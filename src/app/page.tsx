"use client";

import Hero from "./hero";
import About from "./about";
import useLenis from "../../hooks/useLenis";
import Projects from "./project";
import Contact from "./contact";

export default function Home() {
  useLenis(); // Initialize smooth scrolling

  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
