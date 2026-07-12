"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-80 overflow-hidden sm:h-96 md:h-[500px]">
      <Image
        src="/images/patient_markings.png"
        alt="Hair transplant procedure"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6"
        >
          Hair Transplant Solutions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/90 text-lg md:text-xl max-w-2xl font-light"
        >
          State-of-the-art procedures tailored to your unique hair restoration goals, ensuring natural and permanent results.
        </motion.p>
      </div>
    </section>
  );
}
