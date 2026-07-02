"use client";
import Image from 'next/image';
import Link from 'next/link';
import SplitText from './SplitText';
import CountUp from 'react-countup';

const stats = [
  { end: 100, suffix: '%', title: 'Report Efficiency', desc: 'Consistent, reliable results measured across every single procedure.' },
  { end: 200, suffix: 'k', title: 'Complete Cases', desc: 'Over two hundred thousand patients have regained confidence.' },
  { end: 650, suffix: '+', title: 'Our Equipment', desc: 'State-of-the-art medical tools across all our specialist clinics.' },
];

export default function WelcomeSection() {
  return (
    <section className="w-full py-28" style={{ background: '#FFFFFF' }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* ─── Col 1: Text ─── */}
          <div>
            <div className="theme-title mb-6">
              <h6 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#2458B3', marginBottom: 14 }}>
                Better For You
              </h6>
              <SplitText
                text="Welcome to our Hair Transplant Center"
                as="h2"
                className="ht-split-text"
                delay={40}
              />
            </div>

            <p className="mb-6" style={{ color: '#666', fontSize: 17, lineHeight: '27px' }}>
              As Ghana's premier hair restoration clinic, we are dedicated to helping you regain your confidence. We combine precision science with compassionate care to deliver natural, life-long results.
            </p>

            <ul className="mb-8 space-y-3">
              {['Best Clinic for Safe Procedure', 'Advanced Non-Touch Bio FUE', 'Life-Long Natural Results', 'International Standards'].map((item) => (
                <li key={item} className="flex items-center gap-3" style={{ color: '#444', fontSize: 15, fontWeight: 500 }}>
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2458B3] flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/about" className="themeht-btn dark-btn">
              About Us
            </Link>
          </div>

          {/* ─── Col 2: Portrait Image ─── */}
          <div className="flex justify-center">
            <div
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
              style={{ width: 320, height: 480, background: '#e8e4dc' }}
            >
              <Image
                src="/images/patient_markings.png"
                alt="Hair Transplant Specialist"
                fill
                className="object-cover"
                sizes="320px"
              />
              {/* Accent blob */}
              <div
                className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full"
                style={{ background: '#2458B3', opacity: 0.15 }}
              />
            </div>
          </div>

          {/* ─── Col 3: Stats ─── */}
          <div className="space-y-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="p-8 border border-[#e8e4dc] rounded-2xl group hover:border-[#2458B3] hover:shadow-lg transition-all duration-300"
                style={{ background: '#F9F8F6' }}
              >
                {/* Big number */}
                <div
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-chivo), Chivo, serif',
                    fontSize: 52,
                    fontWeight: 500,
                    color: '#2458B3',
                    lineHeight: 1,
                  }}
                >
                  <CountUp
                    end={s.end}
                    suffix={s.suffix}
                    duration={2.5}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <h5
                  style={{
                    fontFamily: 'var(--font-chivo), Chivo, serif',
                    fontSize: 20,
                    fontWeight: 500,
                    color: '#222',
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </h5>
                <p style={{ fontSize: 14, color: '#777', lineHeight: '22px', margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
