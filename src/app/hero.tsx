"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
};

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} className="h-screen ml-28 flex flex-col justify-center px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // 👈 Triggers animation on re-enter
        variants={textVariant}
        className="mx-10 mt-9"
      >
        <motion.h1 variants={textVariant} className="text-3xl text-gray-500">
          Ripudaman Singh
        </motion.h1>
      </motion.div>
      <div className="my-10 w-full flex">
        <motion.div variants={textVariant} className="w-2/3">
          <motion.h1 variants={textVariant} className="px-12 font-extrabold text-7xl">
            Full Stack <br /> Developer
          </motion.h1>
          <motion.p variants={textVariant} className="px-12 my-12 font-medium text-gray-400 text-lg">
            A junior fullstack developer currently focused on Web Development, UI/UX, Mobile, and AI.
          </motion.p>
          <motion.div variants={textVariant} className="mx-11 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-[#374151] text-white rounded-2xl font-medium"
            >
              Download CV
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 border border-[#374151] bg-white rounded-2xl font-medium"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.2 } }}
          viewport={{ once: false, amount: 0.2 }} // 👈 Ensures animation repeats
        >
          <Image
            src="/hero.jpg"
            width={280}
            height={280}
            className="rounded-full grayscale hover:grayscale-0 transition-all duration-300"
            alt="hero image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
