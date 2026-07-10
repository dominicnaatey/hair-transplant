"use client";
import Image from 'next/image';
import Link from 'next/link';
import SplitText from './SplitText';
import CountUp from 'react-countup';
import { CircleCheckBig } from 'lucide-react';

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
      className="w-full py-20 md:py-24 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.02fr_0.9fr_1fr] lg:gap-10 xl:gap-16">
          <div className="max-w-107">
            <div className="theme-title mb-6">

              <h6 className="mb-4 inline-flex w-fit items-center rounded-full bg-[#EEF1F5] px-5 py-1.5 font-sans text-xs font-bold uppercase tracking-[1px] text-[#2458B3]">
                Better For You
              </h6>
              <SplitText
                text="Welcome to our Hair Transplant Center"
                as="h2"
                className="ht-split-text"
                delay={40}
              />
            </div>

            <p className="mb-8 max-w-90 text-base leading-7 text-[#667085]">
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
              <div
                key={i}
                className="flex items-center gap-5 border-b border-[#D8DEE8] pb-7 last:border-b-0 last:pb-0"
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
                  <p className="m-0 text-base leading-6.5 text-gray-800">
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
