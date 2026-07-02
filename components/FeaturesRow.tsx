import Link from 'next/link';

const features = [
  {
    num: '01',
    subtitle: 'transplant',
    title: 'Hair Loss Medication',
    href: '/services',
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" className="w-7 h-7">
        <path d="M32 8c-8.84 0-16 7.16-16 16 0 5.2 2.48 9.8 6.32 12.7L19.5 52h25l-2.82-15.3C45.52 33.8 48 29.2 48 24c0-8.84-7.16-16-16-16zm0 6a10 10 0 11-.001 20.001A10 10 0 0132 14z" />
      </svg>
    ),
  },
  {
    num: '02',
    subtitle: 'regrowth',
    title: 'Dandruff Treatment',
    href: '/services',
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" className="w-7 h-7">
        <path d="M32 10c-12.15 0-22 9.85-22 22 0 5.83 2.27 11.12 5.97 15.06L13 52h38l-2.97-4.94C51.73 43.12 54 37.83 54 32c0-12.15-9.85-22-22-22zm0 8c7.73 0 14 6.27 14 14s-6.27 14-14 14S18 39.73 18 32s6.27-14 14-14z" />
        <circle cx="32" cy="32" r="4" />
      </svg>
    ),
  },
  {
    num: '03',
    subtitle: 'treatment',
    title: 'Advanced Treatment',
    href: '/services',
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" className="w-7 h-7">
        <path d="M20 12h24v8H20zm-4 8h32l4 6v18H8V26l8-6zm4 8v14h24V28H20z" />
        <rect x="28" y="16" width="8" height="4" rx="1" />
      </svg>
    ),
  },
  {
    num: '04',
    subtitle: 'research',
    title: 'Pattern Baldness',
    href: '/services',
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" className="w-7 h-7">
        <path d="M32 6C18.7 6 8 16.7 8 30c0 7.5 3.4 14.2 8.7 18.8L14 56h36l-2.7-7.2C52.6 44.2 56 37.5 56 30 56 16.7 45.3 6 32 6zm0 8c8.84 0 16 7.16 16 16s-7.16 16-16 16S16 38.84 16 30s7.16-16 16-16z" />
        <path d="M32 20v10l7 4-2 3.5-9-5V20z" />
      </svg>
    ),
  },
];

export default function FeaturesRow() {
  return (
    <section className="w-full" style={{ background: '#F9F8F6' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.num}
            className="featured-item-1 group relative overflow-hidden border-r border-[#e8e4dc] last:border-r-0"
            style={{ padding: '48px 36px 72px' }}
          >
            {/* Number watermark */}
            <div className="featured-num">{f.num}</div>

            {/* Icon */}
            <div className="featured-icon mb-6">
              {f.icon}
            </div>

            {/* Subtitle */}
            <span className="featured-subtitle">{f.subtitle}</span>

            {/* Title */}
            <h5
              style={{
                fontFamily: 'var(--font-chivo), Chivo, serif',
                fontSize: 22,
                fontWeight: 500,
                color: '#222222',
                lineHeight: '1.35',
                marginBottom: 0,
              }}
            >
              {f.title}
            </h5>

            {/* Button-style-2 corner arrow */}
            <div className="button-style-2">
              <svg viewBox="0 0 100 100" style={{ width: 40, height: 40, flexShrink: 0 }}>
                <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6" />
              </svg>
              <Link href={f.href} className="button-style-2-link" aria-label={`Learn more about ${f.title}`}>
                <ArrowDiagIcon />
              </Link>
              <svg viewBox="0 0 100 100" style={{ width: 40, height: 40, flexShrink: 0, transform: 'scaleX(-1)' }}>
                <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArrowDiagIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}
