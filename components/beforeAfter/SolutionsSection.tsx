"use client";

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    title: 'Hair Loss Solutions',
    body: 'We provide comprehensive diagnostics to uncover the root cause of your hair loss. Our specialized treatments in Ghana are tailored to restore your hair naturally.',
    col1Title: 'Hairgrowth Cycle',
    col1Items: ['Affordable Prices', 'Advanced Techniques'],
    col2Title: 'Types Of Hair Loss',
    col2Items: ['International Standards', 'Life Long Results'],
    image: '/images/hair_treatment.png',
    btnLabel: 'Explore Solutions',
    btnHref: '/hair-transplant',
  },
  {
    title: 'Amazing Results, Every Time',
    body: 'Experience the transformative power of our state-of-the-art procedures. We ensure maximum graft survival and minimal downtime for all our patients.',
    col1Title: 'FUE Technique',
    col1Items: ['Painless Extraction', 'Minimal Scarring'],
    col2Title: 'Recovery & Growth',
    col2Items: ['Full Results in 12 Months', '98% Graft Survival'],
    image: '/images/solutions_1.png',
    btnLabel: 'Book Appointment',
    btnHref: '/book',
  },
  {
    title: 'Natural Looking Results',
    body: 'Our surgeons artfully design hairlines that complement your facial structure. The result is a seamless, natural look that lasts a lifetime.',
    col1Title: 'Follicle Placement',
    col1Items: ['Hairline Design', 'Density Control'],
    col2Title: 'Post-Op Care',
    col2Items: ['24/7 Specialist Support', 'Personalised Protocol'],
    image: '/images/solutions_2.png',
    btnLabel: 'See Results',
    btnHref: '/results',
  },
];

// Each card watches its own scroll position and shrinks/fades
// as it leaves the viewport upward, then recovers on scroll-back.
function StepCard({ step, index }: { step: typeof steps[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // "start end" = when the card's top hits the bottom of the viewport
    // "end start" = when the card's bottom leaves the top of the viewport
    offset: ['start end', 'end start'],
  });

  // scrollYProgress goes 0 → 1 as the card travels through the viewport.
  // We shrink + fade as it exits upward (progress → 1).
  // When the user scrolls back the progress drops and the values reverse.
  const scale   = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.94, 1, 1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.4,  1, 1, 0.4 ]);

  return (
    <div
      ref={ref}
      style={{
        position: 'sticky',
        top: `calc(100px + ${index * 24}px)`,
        zIndex: index,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          borderRadius: 12,
          border: '1px solid #e8e4dc',
          minHeight: 320,
          backgroundColor: '#ffffff',
          boxShadow: index > 0 ? '0 -10px 20px rgba(0,0,0,0.02)' : 'none',
          transformOrigin: 'top center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] min-h-80">
          {/* Content */}
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <h3
              style={{
                fontFamily: 'var(--font-chivo), Chivo, serif',
                fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 500,
                color: '#222',
                marginBottom: 16,
              }}
            >
              {step.title}
            </h3>
            <p style={{ color: '#666', lineHeight: '27px', marginBottom: 28, maxWidth: 560 }}>
              {step.body}
            </p>

            <Link
              href={step.btnHref}
              className="inline-flex items-center rounded-full border border-[#2458B3] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#2458B3] transition-colors duration-300 hover:bg-[#2458B3] hover:text-white mb-8 self-start"
            >
              {step.btnLabel}
            </Link>

            <div className="grid grid-cols-2 gap-8">
              {/* Col 1 */}
              <div>
                <h5
                  style={{
                    fontFamily: 'var(--font-chivo), Chivo, serif',
                    fontSize: 18,
                    fontWeight: 500,
                    color: '#222',
                    marginBottom: 12,
                  }}
                >
                  {step.col1Title}
                </h5>
                <ul className="space-y-2">
                  {step.col1Items.map((item) => (
                    <li key={item} className="flex items-center gap-2" style={{ fontSize: 14, color: '#666' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2458B3] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Col 2 */}
              <div>
                <h5 className="mb-3 font-heading text-lg font-medium text-[#222]">
                  {step.col2Title}
                </h5>
                <ul className="space-y-2">
                  {step.col2Items.map((item) => (
                    <li key={item} className="flex items-center gap-2" style={{ fontSize: 14, color: '#666' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2458B3] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block" style={{ minHeight: 320 }}>
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent" />
          </div>
        </div>

        {/* Step number badge */}
        <div
          className="absolute top-10 right-10 lg:right-[340px]"
          style={{
            fontFamily: 'var(--font-chivo), Chivo, serif',
            fontSize: 120,
            fontWeight: 700,
            color: 'rgba(36,88,179,0.04)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </motion.div>
    </div>
  );
}

export default function SolutionsSection() {
  return (
    <section className="w-full py-24 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section heading */}
        <div className="mb-16">
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#2458B3',
              marginBottom: 12,
              display: 'block',
            }}
          >
            Solutions
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-chivo), Chivo, serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 500,
              color: '#222',
              lineHeight: '1.2',
            }}
          >
            Hair Loss Solutions
          </h2>
        </div>

        {/* Sticky step cards */}
        <div className="space-y-6 pb-12">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
