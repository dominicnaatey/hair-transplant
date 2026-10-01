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

  const [formData, setFormData] = useState({ name: '', phone: '', email: '', date: '', time: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

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
      className="relative w-full overflow-hidden min-h-[60vh] lg:min-h-svh"
    >
      {/* ─── Slide Backgrounds ─── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== current}
        >
          {/* background-image must stay inline — it's a dynamic runtime value */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/80 via-[#0f172a]/50 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* ─── Decorative circles ─── */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-white/10 animate-float pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full border border-white/5 animate-float-slow pointer-events-none" />

      {/* ─── Hero Content ─── */}
      <div className="relative z-10 min-h-[60vh] lg:min-h-svh flex items-center px-8 lg:px-24 xl:px-32 py-18 lg:py-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center pt-16 lg:pt-0">

          {/* Left: Text Content */}
          <div className="lg:col-span-7 relative h-[350px] lg:h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                {/* Subtitle tag */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="font-sans inline-flex items-center gap-2 mb-6 text-[12px] font-bold tracking-[0.3em] uppercase text-white/80"
                >
                  {slides[current].subtitle}
                </motion.div>

                {/* Main heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="font-heading mb-8 whitespace-pre-line text-4xl md:text-7xl font-medium leading-[1.1] tracking-[-0.02em] text-white"
                >
                  {slides[current].title}
                </motion.h1>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link href="/book" className="themeht-btn primary-btn">
                    <ArrowRightIcon className="w-4 h-4" />
                    Book Appointment
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Quick Contact Form (hidden) */}
          {/* <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="w-full max-w-105 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-4xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-white/10 to-transparent pointer-events-none" />

              {submitted ? (
                <div className="text-center py-8 relative z-10">
                  <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading text-white mb-2">Request Received</h3>
                  <p className="text-white/70 text-sm">Our team will call you back shortly to discuss your restoration goals.</p>
                </div>
              ) : (
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-medium text-white mb-2">Book a Free Consultation</h3>
                  <p className="text-white/70 text-sm mb-6">Leave your details and a specialist will contact you to confirm your appointment.</p>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <input type="text" required placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/50 outline-none focus:border-white/50 focus:bg-white/20 transition-all" />
                    <input type="tel" required placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/50 outline-none focus:border-white/50 focus:bg-white/20 transition-all" />
                    <input type="email" placeholder="Email (Optional)" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/50 outline-none focus:border-white/50 focus:bg-white/20 transition-all text-sm" />
                    <div className="grid grid-cols-2 gap-3">
                      <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white outline-none focus:border-white/50 focus:bg-white/20 transition-all text-sm [color-scheme:dark]" />
                      <input type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-white outline-none focus:border-white/50 focus:bg-white/20 transition-all text-sm [color-scheme:dark]" />
                    </div>
                    <button type="submit" disabled={isSubmitting} className={`w-full bg-white text-[#222] font-bold tracking-wider uppercase text-sm py-4 rounded-2xl shadow-lg transition-all ${isSubmitting ? 'opacity-70' : 'hover:bg-gray-100 hover:-translate-y-0.5'}`}>
                      {isSubmitting ? 'Sending...' : 'Book Consultation'}
                    </button>
                    <div className="flex items-center justify-center gap-2 mt-4 opacity-70">
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-[11px] text-white">Your information is secure and confidential.</span>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div> */}
        </div>
      </div>

      {/* ─── Slide Counter ─── */}
      <div className="absolute bottom-10 left-8 lg:left-24 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 h-[3px] rounded-[4px] border-none cursor-pointer ${
              i === current ? 'w-8 bg-[#2458B3]' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* ─── Prev / Next Navigation ─── */}
      <div className="hidden lg:flex absolute bottom-0 right-0 z-10 w-40 h-20">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="flex items-center justify-center w-[60px] h-20 bg-[#F9F8F6] hover:bg-[#2458B3] text-[#222] hover:text-white transition-colors duration-300"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        <div className="w-px h-20 bg-gray-200" />

        <button
          onClick={next}
          aria-label="Next slide"
          className="flex items-center justify-center w-[60px] h-20 bg-[#F9F8F6] hover:bg-[#2458B3] text-[#222] hover:text-white transition-colors duration-300"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* ─── Scroll indicator ─── */}
      <div className="hidden lg:flex absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-2 z-10">
        <div className="w-px h-16 bg-white/20" />
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest [writing-mode:vertical-rl]">
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
