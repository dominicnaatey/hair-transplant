import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

const features: {
  num: string;
  subtitle: string;
  title: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    num: '01',
    subtitle: 'TRANSPLANT',
    title: 'Hair Loss Medication',
    href: '/services',
    icon: <TransplantIcon />,
  },
  {
    num: '02',
    subtitle: 'REGROWTH',
    title: 'Dandruff Treatment',
    href: '/services',
    icon: <RegrowthIcon />,
  },
  {
    num: '03',
    subtitle: 'TREATMENT',
    title: 'Advanced Treatment',
    href: '/services',
    icon: <TreatmentIcon />,
  },
  {
    num: '04',
    subtitle: 'RESEARCH',
    title: 'Pattern Baldness',
    href: '/services',
    icon: <ResearchIcon />,
  },
];

export default function FeaturesRow() {
  return (
    <section className="w-full bg-[#EAF0F7] py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-480 px-3.5 md:px-6 lg:px-3.5">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-7">
          {features.map((feature) => {
            return (
              <article
                key={feature.num}
                className="group relative min-h-59.5 overflow-visible rounded-[2.125rem] bg-[#F8F8F8] px-10 pb-8.5 pt-7.5"
              >
                <span className="font-sans text-base leading-none font-medium tracking-[-0.01em] text-[#596271]">
                  {feature.num}
                </span>

                <div className="absolute right-10.5 top-10.5 text-[#2D5FBE]">
                  {feature.icon}
                </div>

                <div className="mt-29 max-w-63.75">
                  <span className="mb-3.5 block font-sans text-[0.8125rem] font-bold uppercase tracking-[0.16em] text-[#596271]">
                    {feature.subtitle}
                  </span>

                  <h5 className="font-heading text-2xl leading-[1.18] font-medium tracking-[-0.02em] text-[#111111]">
                    {feature.title}
                  </h5>
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-2.75 -right-2.75 h-24 w-24 rounded-full bg-[#EAF0F7]"
                />

                <Link
                  href={feature.href}
                  aria-label={`Learn more about ${feature.title}`}
                  className="absolute bottom-px right-px flex h-18 w-18 items-center justify-center rounded-full bg-[#2458B3] text-white transition-transform duration-300 group-hover:bg-[#]/85"
                >
                  <ArrowUpRight className="h-6 w-6" strokeWidth={1.9} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TransplantIcon() {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      className="h-21 w-21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 39h18" />
      <path d="M14 45h12" />
      <path d="M29 31h14" />
      <path d="M42 16l4 4" />
      <path d="M51 13v6" />
      <path d="M55 23h6" />
      <path d="M36 23c4 0 7 3 7 7v19a7 7 0 1 1-14 0V30c0-4 3-7 7-7Z" />
      <path d="M36 17v32" />
      <path d="M31 54h10" />
      <path d="M27 34H15" />
      <path d="M30 40H18" />
      <path d="M44 11l-2 5" />
      <path d="M57 18l-5 2" />
    </svg>
  );
}

function RegrowthIcon() {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      className="h-21 w-21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 54h34" />
      <path d="M34 15c-3 8-1 17 3 24 3 6 3 11 3 15" />
      <path d="M20 21c6-2 12-5 17-8" />
      <path d="M29 28c0 4 2 9 6 12" />
      <path d="M35 49c-4-2-8-2-12 0" />
      <path d="M49 22h8" />
      <path d="M53 18v18" />
      <rect x="47" y="22" width="11" height="12" rx="2.5" />
      <path d="M57 26h5" />
      <path d="M16 27l2 2" />
      <path d="M13 35h4" />
      <path d="M18 43l-2 2" />
      <path d="M57 12v3" />
      <path d="M63 18h3" />
      <path d="M61 34h3" />
      <path d="M62 48l2 2" />
    </svg>
  );
}

function TreatmentIcon() {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      className="h-21 w-21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="22" y="24" width="18" height="30" rx="4" />
      <path d="M26 17h10v7H26z" />
      <path d="M31 30c4 4 6 8 6 12a6 6 0 0 1-12 0c0-4 2-8 6-12Z" />
      <path d="M49 22l10 10" />
      <path d="M47 28l8 8" />
      <path d="M56 19l3-3" />
      <path d="M45 36l-3 3" />
      <path d="M52 28l8-8" />
      <path d="M18 14l2 2" />
      <path d="M14 22h4" />
      <path d="M20 30l-2 2" />
      <path d="M49 44l2 2" />
      <path d="M56 46v4" />
      <path d="M61 40h4" />
      <path d="M60 52l2 2" />
    </svg>
  );
}

function ResearchIcon() {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      className="h-21 w-21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="18" y="39" width="36" height="14" rx="2" />
      <path d="M18 46h36" />
      <path d="M28 39v14" />
      <path d="M40 39v14" />
      <path d="M23 46h2" />
      <path d="M34 46h2" />
      <path d="M46 46h2" />
      <path d="M45 17c6 0 7 6 12 6 3 0 5-2 7-5" />
      <path d="M52 14c3 4 6 8 8 12" />
      <path d="M45 28l9-10" />
      <path d="M38 21l3 3" />
      <path d="M34 29h4" />
      <path d="M60 31h4" />
    </svg>
  );
}
