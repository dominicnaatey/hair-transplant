"use client";
import Image from 'next/image';
import Link from 'next/link';
import SplitText from './SplitText';
import CountUp from 'react-countup';

const stats = [
  {
    end: 100,
    suffix: '%',
    title: 'Report Efficiency',
    desc: 'Vestibulum morbi blandit cursus risus. Augue neque gravida.',
  },
  {
    end: 200,
    suffix: 'k',
    title: 'Complete Cases',
    desc: 'Vestibulum morbi blandit cursus risus. Augue neque gravida.',
  },
  {
    end: 650,
    suffix: '+',
    title: 'Our Equipment',
    desc: 'Vestibulum morbi blandit cursus risus. Augue neque gravida.',
  },
];

export default function WelcomeSection() {
  return (
    <section
      className="w-full py-20 md:py-24 lg:py-28"
      style={{ background: '#EEF1F5' }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.02fr_0.9fr_1fr] lg:gap-10 xl:gap-16">
          <div className="max-w-107">
            <div className="theme-title mb-6">
              <h6
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 12px',
                  borderRadius: 999,
                  background: '#FFFFFF',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#2458B3',
                  marginBottom: 18,
                  boxShadow: '0 8px 24px rgba(36, 88, 179, 0.08)',
                }}
              >
                Better For You
              </h6>
              <SplitText
                text="Welcome to our Hair Transplant Center"
                as="h2"
                className="ht-split-text"
                delay={40}
              />
            </div>

            <p
              className="mb-8 max-w-[360px]"
              style={{ color: '#667085', fontSize: 16, lineHeight: '28px' }}
            >
              Vestibulum morbi blandit cursus risus. Augue neque gravida
              gravida in fermentum et sollicitudin.
            </p>

            <ul className="mb-10 space-y-4">
              {[
                'Best Clinic for safe Procedure',
                'Advanced Non-touch Bio FUE',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3"
                  style={{ color: '#667085', fontSize: 15, fontWeight: 500 }}
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[#2458B3]/20 bg-white">
                    <CheckIcon className="h-3.5 w-3.5 text-[#2458B3]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/about" className="themeht-btn dark-btn">
              About Us
            </Link>
          </div>

          <div className="flex justify-center lg:justify-center">
            <div className="relative w-full max-w-[310px] lg:max-w-[360px] xl:max-w-[390px]">
              <Image
                src="/images/home2-about-img.png"
                alt="Hair follicle skin anatomy illustration"
                width={309}
                height={495}
                className="h-auto w-full object-contain drop-shadow-[0_24px_40px_rgba(36,88,179,0.08)]"
                priority
              />
            </div>
          </div>

          <div className="space-y-7">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-5 border-b border-[#D8DEE8] pb-7 last:border-b-0 last:pb-0"
              >
                <div
                  className="flex h-[92px] w-[92px] flex-shrink-0 items-center justify-center rounded-full border border-white bg-transparent shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]"
                  style={{
                    background:
                      'radial-gradient(circle at center, #2458B3 0 56%, transparent 57%)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans), DM Sans, Arial, sans-serif',
                      fontSize: 24,
                      fontWeight: 700,
                      color: '#FFFFFF',
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
                </div>

                <div className="max-w-[290px]">
                  <h5
                    style={{
                      fontFamily: 'var(--font-chivo), Chivo, serif',
                      fontSize: 33,
                      fontWeight: 500,
                      color: '#222222',
                      lineHeight: 1.2,
                      marginBottom: 12,
                    }}
                  >
                    {s.title}
                  </h5>
                  <p
                    style={{
                      fontSize: 15,
                      color: '#667085',
                      lineHeight: '26px',
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
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
