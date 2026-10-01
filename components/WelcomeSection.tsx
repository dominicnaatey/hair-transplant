"use client";
import Image from 'next/image';
import Link from 'next/link';
import SplitText from './SplitText';
import CountUp from 'react-countup';
import { CircleCheckBig } from 'lucide-react';

import ScrollReveal from './ScrollReveal';

const stats = [
  {
    end: 100,
    suffix: '%',
    title: 'Natural Looking Results',
    desc: 'Natural density and seamless growth that blends with your hairline.',
  },
  {
    end: 15,
    suffix: 'k+',
    title: 'Successful Procedures',
    desc: 'Thousands of successful procedures delivered with trusted clinical expertise.',
  },
  {
    end: 99,
    suffix: '%',
    title: 'Patient Satisfaction',
    desc: 'Exceptional care and support keep patients confident and satisfied.',
  },
];

export default function WelcomeSection() {
  return (
    <section
      className="w-full py-20 md:py-24 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.02fr_0.9fr_1fr] lg:gap-10 xl:gap-16">
          <div className="max-w-107">
            <div className="theme-title mb-6">

              <h6 className="mb-4 inline-flex w-fit items-center rounded-full border border-[#e1e9f3] bg-[#EEF1F5]/50 px-5 py-1.5 font-sans text-xs font-bold uppercase tracking-[1px] text-[#2458B3]">
                Better For You
              </h6>
              <SplitText
                text="Welcome to our Hair Transplant Center"
                as="h2"
                className="ht-split-text text-4xl md:text-4xl lg:text-5xl"
                delay={40}
              />
            </div>

            <p className="mb-8 max-w-90 text-[17px] leading-6.75 text-[#667085]">
              Advanced hair restoration with natural results, trusted specialists, and exceptional patient care.
            </p>

            <ul className="mb-10 space-y-4">
              {[
                'Best Clinic for safe Procedure',
                'Advanced Non-touch Bio FUE',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[15px] font-medium text-[#667085]"
                >
                  <span className="flex shrink-0 items-center justify-center ">
                    <CircleCheckBig className="h-5 w-5 text-[#2458B3]" />
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
            <div className="relative w-full max-w-77 md:max-w-77.25">
              <Image
                src="/images/home2-about-img.png"
                alt="Hair follicle skin anatomy illustration"
                width={309}
                height={480}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-7">
            {stats.map((s, i) => (
              <ScrollReveal
                key={i}
                direction="up"
                distance={20}
                delay={i * 0.15}
                className="flex items-center gap-5 md:gap-8"
              >
                <div className="flex h-30 w-30 shrink-0 items-center justify-center rounded-full border-2 border-[#EEF1F5] bg-[radial-gradient(circle_at_center,#2458B3_0_50%,transparent_52%)]">
                  <div className="font-sans text-xl leading-none font-bold text-white">
                    <CountUp
                      end={s.end}
                      suffix={s.suffix}
                      duration={2.5}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                    />
                  </div>
                </div>

                <div className="max-w-72.5">
                  <h5 className="mb-3 font-heading text-[22px] leading-[1.2] font-medium text-black">
                    {s.title}
                  </h5>
                  <div className="mb-3 h-px w-full bg-[#D8DEE8]" />
                  <p className="m-0 text-base leading-6.5 text-gray-800">
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
