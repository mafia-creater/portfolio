"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      [nameRef.current, titleRef.current, descRef.current, imgRef.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={heroRef} data-scroll-section className="h-screen flex flex-col justify-center px-10">
      <div className="mx-10 mt-9">
        <h1 ref={nameRef} className="text-3xl text-gray-500">Ripudaman Singh</h1>
      </div>
      <div className="my-10 w-full flex">
        <div className="w-2/3">
          <h1 ref={titleRef} className="px-12 font-extrabold text-7xl">
            Full Stack <br /> Developer
          </h1>
          <p ref={descRef} className="px-12 my-12 font-medium text-gray-400 text-lg">
            A junior fullstack developer who is currently focused on Web Development. Other than that, I am also interested in UX/UI Design, Mobile, and AI Development. I love to learn new things and always open to new opportunities.
          </p>
          <div className="mx-11">
            <button className="px-8 py-3 bg-[#374151] text-white rounded-2xl font-medium">
              Download CV
            </button>
            <button className="px-8 py-3 mx-8 border border-[#374151] bg-white rounded-2xl font-medium">
              Contact Me
            </button>
          </div>
        </div>
        <div>
          <Image
            ref={imgRef}
            src="/hero.jpg"
            width={280}
            height={280}
            className="rounded-full grayscale hover:grayscale-0 transition-all duration-300"
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
