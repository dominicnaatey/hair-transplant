"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-80 overflow-hidden sm:h-96 md:h-125">
      <Image
        src="/images/hero_bg_1.png"
        alt="Advanced treatment consultation"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 font-heading text-4xl font-medium text-white md:text-6xl lg:text-7xl"
        >
          Advanced Treatments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-lg font-light text-white/90 md:text-xl"
        >
          Modern non-surgical therapies designed to support scalp health,
          improve density, and strengthen long-term hair restoration outcomes.
        </motion.p>
      </div>
    </section>
  );
}
