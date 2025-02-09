"use client"; // Ensure this is at the top

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          markers:true,
          toggleActions: "play none none reverse",
        },
      });

      tl.from(titleRef.current, { opacity: 0, y: 50, duration: 1 })
        .from(descRef.current, { opacity: 0, y: 50, duration: 0.8 }, "-=0.6")
        .from(btnRef.current, { opacity: 0, y: 50, duration: 0.8 }, "-=0.6")
        .from(imgRef.current, { opacity: 0, scale: 0.8, duration: 1 }, "-=0.8");
    }
  }, []);

  return (
    <section ref={aboutRef} id="about" className="h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-10">
      <div className="w-full lg:w-3/5 flex flex-col items-center text-center lg:items-start lg:text-left">
        <h1 className="font-cursive text-6xl lg:text-8xl font-black text-black" ref={titleRef}>
          About Me
        </h1>
        <p className="text-lg lg:text-2xl text-gray-400 mt-4" ref={descRef}>
          A brief introduction about me and my interests.
        </p>
        <button ref={btnRef} className="mt-6 px-8 py-3 bg-[#374151] text-white rounded-2xl font-medium hover:bg-gray-600 transition">
          Download CV
        </button>
      </div>

      <div className="flex justify-center">
        <Image
          src="/about.jpg"
          ref={imgRef}
          width={400}
          height={400}
          className="grayscale hover:grayscale-0 transition-all duration-300 shadow-lg"
          alt="hero image"
        />
      </div>
    </section>
  );
}
