"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    bg: '/images/hero_bg_1.png',
    subtitle: 'Technique of Hair Transplant',
    title: 'Destination for\nHair Restoration',
  },
  {
    bg: '/images/hero_bg_2.png',
    subtitle: 'Proven & Trusted Procedure',
    title: 'Hair Transplant\nProven Results',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 1400);
  }, [animating]);

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  });

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: 620 }}
    >
      {/* ─── Slide Backgrounds ─── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-[#0f172a]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* ─── Decorative circles ─── */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-white/10 animate-float pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full border border-white/5 animate-float-slow pointer-events-none" />

      {/* ─── Hero Content ─── */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-24 xl:px-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute"
          >
            {/* Subtitle tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 mb-6"
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              <span className="inline-block w-8 h-px bg-[#2458B3]" />
              {slides[current].subtitle}
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 whitespace-pre-line"
              style={{
                fontFamily: 'var(--font-chivo), Chivo, serif',
                fontWeight: 500,
                fontSize: 'clamp(48px, 7vw, 90px)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: '#ffffff',
              }}
            >
              {slides[current].title}
            </motion.h1>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <Link href="/contact" className="themeht-btn primary-btn">
                <ArrowRightIcon className="w-4 h-4" />
                Contact Us
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold tracking-widest uppercase transition-colors"
              >
                Learn More
                <span className="w-8 h-px bg-white/40 inline-block" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── Slide Counter ─── */}
      <div className="absolute bottom-10 left-8 lg:left-24 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? 32 : 8,
              height: 3,
              background: i === current ? '#2458B3' : 'rgba(255,255,255,0.4)',
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* ─── Prev / Next Navigation (template-style SVG corner) ─── */}
      <div
        className="absolute bottom-0 right-0 z-10 flex"
        style={{ width: 160, height: 80 }}
      >
        {/* Left SVG notch */}
        <svg viewBox="0 0 100 100" className="h-full" style={{ width: 40 }}>
          <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6" />
        </svg>

        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="flex items-center justify-center bg-[#F9F8F6] hover:bg-[#2458B3] text-[#222] hover:text-white transition-colors duration-300"
          style={{ width: 60, height: 80 }}
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        {/* Divider */}
        <div className="w-px bg-gray-200" style={{ height: 80 }} />

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="flex items-center justify-center bg-[#F9F8F6] hover:bg-[#2458B3] text-[#222] hover:text-white transition-colors duration-300"
          style={{ width: 60, height: 80 }}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* ─── Scroll indicator ─── */}
      <div className="absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-16 bg-white/20" />
        <span
          className="text-white/40 uppercase tracking-widest"
          style={{ fontSize: 10, writingMode: 'vertical-rl', fontWeight: 700 }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}

function ArrowRightIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
function ChevronLeftIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function ChevronRightIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
