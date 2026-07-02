"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const steps = [
  {
    title: 'Hair Loss Solutions',
    body: 'We provide comprehensive diagnostics to uncover the root cause of your hair loss. Our specialized treatments in Ghana are tailored to restore your hair naturally.',
    col1Title: 'Hairgrowth Cycle',
    col1Items: ['Affordable Prices', 'Advanced Techniques'],
    col2Title: 'Types Of Hair Loss',
    col2Items: ['International Standards', 'Life Long Results'],
    image: '/images/hair_treatment.png',
  },
  {
    title: 'Amazing Results, Every Time',
    body: 'Experience the transformative power of our state-of-the-art procedures. We ensure maximum graft survival and minimal downtime for all our patients.',
    col1Title: 'FUE Technique',
    col1Items: ['Painless Extraction', 'Minimal Scarring'],
    col2Title: 'Recovery & Growth',
    col2Items: ['Full Results in 12 Months', '98% Graft Survival'],
    image: '/images/solutions_1.png',
  },
  {
    title: 'Natural Looking Results',
    body: 'Our surgeons artfully design hairlines that complement your facial structure. The result is a seamless, natural look that lasts a lifetime.',
    col1Title: 'Follicle Placement',
    col1Items: ['Hairline Design', 'Density Control'],
    col2Title: 'Post-Op Care',
    col2Items: ['24/7 Specialist Support', 'Personalised Protocol'],
    image: '/images/solutions_2.png',
  },
];

export default function SolutionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsapCtx: { revert: () => void } | undefined;

    const initGSAP = async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;

      const cards = Array.from(containerRef.current.querySelectorAll<HTMLElement>('.step-box'));

      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        cards.forEach((card, index) => {
          // We only animate if there's a card after this one to cover it
          if (index < cards.length - 1) {
            const inner = card.querySelector('.step-inner');
            const nextCard = cards[index + 1];

            if (inner && nextCard) {
              gsap.to(inner, {
                scrollTrigger: {
                  trigger: nextCard, // Animate when the NEXT card scrolls up
                  start: 'top bottom', // Start when the next card enters the bottom of the screen
                  end: 'top center', // Finish when it reaches the middle of the screen
                  scrub: 1, // 1 second smoothing makes it extremely fluid
                },
                ease: 'none',
                scale: 0.94, // Subtle compression
                opacity: 0.4, // Fade out as it gets covered
              });
            }
          }
        });
      });

      gsapCtx = { revert: () => mm.revert() };
    };

    initGSAP();

    return () => gsapCtx?.revert();
  }, []);

  return (
    <section className="w-full py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
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
        <div ref={containerRef} className="space-y-6 pb-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="step-box"
              style={{
                position: 'sticky',
                top: `calc(120px + ${i * 24}px)`,
                zIndex: i,
              }}
            >
              <div 
                className="step-inner relative overflow-hidden"
                style={{
                  borderRadius: 12,
                  border: '1px solid #e8e4dc',
                  minHeight: 320,
                  backgroundColor: '#ffffff',
                  boxShadow: i > 0 ? '0 -10px 20px rgba(0,0,0,0.02)' : 'none',
                  transformOrigin: 'top center',
                }}
              >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] min-h-[320px]">
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
                          <li
                            key={item}
                            className="flex items-center gap-2"
                            style={{ fontSize: 14, color: '#666' }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2458B3] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Col 2 */}
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
                        {step.col2Title}
                      </h5>
                      <ul className="space-y-2">
                        {step.col2Items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2"
                            style={{ fontSize: 14, color: '#666' }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2458B3] flex-shrink-0" />
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
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                </div>
              </div>

              {/* Corner button-style-2 */}
              <div className="button-style-2">
                <svg viewBox="0 0 100 100" style={{ width: 40, height: 40 }}>
                  <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#FFFFFF" />
                </svg>
                <Link href="/contact" className="button-style-2-link" aria-label="Contact us">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </Link>
                <svg viewBox="0 0 100 100" style={{ width: 40, height: 40, transform: 'scaleX(-1)' }}>
                  <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#FFFFFF" />
                </svg>
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
                {String(i + 1).padStart(2, '0')}
              </div>
              
              </div> {/* Close step-inner */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
