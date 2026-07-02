"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    num: '01',
    cat: 'Clinical Research',
    title: 'Hair Loss Diagnosis',
    image: '/images/diagnosis_1.png',
  },
  {
    num: '02',
    cat: 'Hair Loss',
    title: 'Androgenetic Alopecia',
    image: '/images/diagnosis_2.png',
  },
  {
    num: '03',
    cat: 'Transplant',
    title: 'Prosthetic Hair',
    image: '/images/diagnosis_3.png',
  },
  {
    num: '04',
    cat: 'Hair Research',
    title: 'Beard Restoration',
    image: '/images/diagnosis_4.png',
  },
];

export default function DiagnosisSection() {
  const [active, setActive] = useState(1); // default is item index 1 (like template)

  return (
    <section
      className="w-full py-24 relative overflow-hidden"
      style={{ background: '#2458B3' }}
    >
      {/* BG overlay texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)' }}
      />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-14">
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: 12,
              display: 'block',
            }}
          >
            Our Services
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-chivo), Chivo, serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 500,
              color: '#ffffff',
              lineHeight: '1.15',
            }}
          >
            Expert Hair Restoration<br />
            <span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.75)' }}>Services</span>
          </h2>
        </div>

        {/* Service list */}
        <div className="service-list">
          {services.map((s, i) => (
            <div
              key={i}
              className={`service-item-4 ${i === active ? 'active' : ''}`}
              onMouseEnter={() => setActive(i)}
              role="button"
              tabIndex={0}
              onFocus={() => setActive(i)}
              aria-current={i === active}
            >
              {/* Number */}
              <div className="service-num-4">{s.num}</div>

              {/* Thumbnail - smooth layout reveal */}
              <AnimatePresence>
                {i === active && (
                  <motion.div
                    initial={{ width: 0, opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ width: 140, opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ width: 0, opacity: 0, scale: 0.8, rotate: -5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="hidden md:block relative rounded-lg overflow-hidden flex-shrink-0 origin-left"
                    style={{ height: 80 }}
                  >
                    <Image src={s.image} alt={s.title} fill className="object-cover" sizes="140px" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: 6,
                  }}
                >
                  {s.cat}
                </div>
                <div className="service-title-4">{s.title}</div>
              </div>

              {/* Arrow */}
              <div
                className="ml-auto flex-shrink-0 transition-all duration-300"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? 'translateX(0)' : 'translateX(-10px)',
                }}
              >
                <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
