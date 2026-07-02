"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { section } from 'framer-motion/client';

const testimonials = [
  {
    quote: "Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies mi quis hendrerit Vestibulum morbi blandit cursus risus.",
    name: 'Simon Amour',
    role: 'Technical Director',
    avatar: '/images/testimonial_avatar_1.png',
    stars: 5,
  },
  {
    quote: "The team at Hairise completely transformed my confidence. The procedure was painless and the results exceeded everything I hoped for.",
    name: 'Robbie Lee',
    role: 'Genetic Specialist',
    avatar: '/images/testimonial_avatar_2.png',
    stars: 5,
  },
  {
    quote: "From consultation to final results, every step was handled with professionalism. I now have a full, natural hairline and couldn't be happier.",
    name: 'Emma Aria',
    role: 'Marketing Director',
    avatar: '/images/testimonial_avatar_3.png',
    stars: 5,
  },
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" className="w-6 h-6">
        <path d="M32 8c-8.84 0-16 7.16-16 16 0 5.2 2.48 9.8 6.32 12.7L19.5 52h25l-2.82-15.3C45.52 33.8 48 29.2 48 24c0-8.84-7.16-16-16-16zm0 6a10 10 0 11-.001 20.001A10 10 0 0132 14z" />
      </svg>
    ),
    title: 'Hair Loss Medication',
    desc: 'Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" className="w-6 h-6">
        <path d="M32 10c-12.15 0-22 9.85-22 22 0 5.83 2.27 11.12 5.97 15.06L13 52h38l-2.97-4.94C51.73 43.12 54 37.83 54 32c0-12.15-9.85-22-22-22zm0 8c7.73 0 14 6.27 14 14s-6.27 14-14 14S18 39.73 18 32s6.27-14 14-14z" />
        <circle cx="32" cy="32" r="4" />
      </svg>
    ),
    title: 'Advanced Dandruff Treatment',
    desc: 'Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.',
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[#eff4f8]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* ─── Left: Testimonial Carousel ─── */}
        <div
          className="relative flex flex-col justify-center px-10 py-20 lg:px-16"
          style={{ minHeight: 480 }}
        >
          {/* Background Map Graphic (Placeholder) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at center, #2458B3 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />

          {/* Slide content */}
          <div className="relative z-10 w-full overflow-hidden testimonial-swiper-container">
            <style>{`
              .testimonial-swiper-container .swiper-pagination-bullet {
                width: 10px;
                height: 10px;
                background: transparent;
                border: 1px solid #222;
                opacity: 1;
                transition: all 0.3s ease;
              }
              .testimonial-swiper-container .swiper-pagination-bullet-active {
                background: #2458B3;
                border-color: #2458B3;
              }
              .testimonial-swiper-container .swiper-pagination {
                text-align: right;
                bottom: 0px !important;
                position: relative;
                margin-top: 20px;
              }
            `}</style>
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              loop={true}
              className="w-full"
            >
              {testimonials.map((testimonial, i) => (
                <SwiperSlide key={i}>
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.stars }).map((_, j) => (
                      <StarIcon key={j} className="w-4 h-4 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote
                    className="mb-8"
                    style={{
                      fontFamily: 'var(--font-chivo), Chivo, serif',
                      fontSize: 'clamp(20px, 2vw, 24px)',
                      lineHeight: '1.5',
                      color: '#222222',
                      fontStyle: 'italic',
                      fontWeight: 600,
                    }}
                  >
                    {testimonial.quote}
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-chivo), Chivo, serif',
                          fontSize: 18,
                          fontWeight: 600,
                          color: '#222222',
                        }}
                      >
                        {testimonial.name}
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666666' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


        </div>
      {/* ─── Right: Feature Boxes ─── */}
      <div className="flex flex-col justify-center px-10 py-20 lg:px-16 border-t lg:border-t-0 lg:border-l border-[#d1dce6]">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex gap-5 py-8 border-b border-[#d1dce6] last:border-b-0"
          >
            <div
              className="flex-shrink-0 w-12 h-12 flex items-start justify-center text-[#2458B3]"
            >
              {f.icon}
            </div>
            <div>
              <h5
                style={{
                  fontFamily: 'var(--font-chivo), Chivo, serif',
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#222',
                  marginBottom: 10,
                }}
              >
                {f.title}
              </h5>
              <p style={{ fontSize: 15, color: '#555555', lineHeight: '26px', margin: 0 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section >
  );
}

function StarIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
function ChevronL() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function ChevronR() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
