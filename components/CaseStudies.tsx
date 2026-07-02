"use client";

import Image from 'next/image';
import Link from 'next/link';
import SplitText from './SplitText';

const cases = [
  {
    cat: 'Healthier Hair',
    title: 'Afro Hair Transplantation',
    href: '/results',
    image: '/images/case_study_1.png',
  },
  {
    cat: 'DHT',
    title: 'PRP Treatment For Hair',
    href: '/results',
    image: '/images/case_study_2.png',
  },
  {
    cat: 'Clinical Research',
    title: 'Follicular Unit Extraction',
    href: '/results',
    image: '/images/case_study_3.png',
  },
];

export default function CaseStudies() {
  return (
    <section className="w-full py-24" style={{ background: '#F9F8F6' }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
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
            Research
          </span>
          <SplitText
            text="Latest From Case Studies"
            as="h2"
            delay={45}
            className="inline-block"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="portfolio-item group rounded-2xl" style={{ aspectRatio: '4 / 5' }}>
              {/* Image */}
              <div className="portfolio-image w-full h-full">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Shape overlay */}
              <div className="portfolio-img-shape absolute bottom-0 left-0 right-0 h-2 bg-[#2458B3]/20" />

              {/* Hover arrow button */}
              <div
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#2458B3" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
              </div>

              {/* Info */}
              <div className="portfolio-desc">
                <div className="portfolio-cat mb-2">
                  <a href={c.href}>{c.cat}</a>
                </div>
                <div className="portfolio-title">
                  <h4>
                    <Link href={c.href}>{c.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link href="/results" className="themeht-btn outline-btn">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
