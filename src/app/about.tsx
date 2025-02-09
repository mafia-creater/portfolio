"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
};

export default function About() {
  return (
    <section id="about" className="h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // 👈 Repeat animation when re-entered
        variants={textVariant}
        className="w-full lg:w-3/5 flex flex-col items-center text-center lg:items-start lg:text-left"
      >
        <motion.h1 variants={textVariant} className="font-cursive text-6xl lg:text-8xl font-black text-black">
          About Me
        </motion.h1>
        <motion.p variants={textVariant} className="text-lg lg:text-2xl text-gray-400 mt-4">
          A brief introduction about me and my interests.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          variants={textVariant}
          className="mt-6 px-8 py-3 bg-[#374151] text-white rounded-2xl font-medium hover:bg-slate-400"
        >
          Learn More
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.2 } }}
        viewport={{ once: false, amount: 0.2 }} // 👈 Animation triggers again when re-entering
      >
        <Image
          src="/about.jpg"
          width={400}
          height={400}
          className="grayscale hover:grayscale-0 transition-all duration-300 shadow-lg"
          alt="about image"
        />
      </motion.div>
    </section>
  );
}
