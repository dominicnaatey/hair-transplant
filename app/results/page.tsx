import Link from 'next/link';
import PageShell from '@/components/PageShell';

const results = [
  {
    cat: 'HEALTHIER HAIR',
    title: 'Afro Hair Transplantation',
    image: '/images/case_study_1.png',
    href: '/results/afro-hair-transplantation',
  },
  {
    cat: 'DHT',
    title: 'PRP Treatment For Hair',
    image: '/images/case_study_2.png',
    href: '/results/prp-treatment-for-hair',
  },
  {
    cat: 'CLINICAL RESEARCH',
    title: 'Follicular Unit Extraction',
    image: '/images/case_study_3.png',
    href: '/results/follicular-unit-extraction',
  },
  {
    cat: 'HAIR CARE',
    title: 'Failed Hair Transplant Repair',
    image: '/images/solutions_1.png',
    href: '/results/failed-hair-transplant-repair',
  },
  {
    cat: 'HAIR LOSS',
    title: 'Direct Hair Transplant',
    image: '/images/solutions_2.png',
    href: '/results/direct-hair-transplant',
  },
  {
    cat: 'TRANSPLANT',
    title: 'Body Hair Transplant',
    image: '/images/diagnosis_4.png',
    href: '/results/body-hair-transplant',
  }
];

export default function ResultsPage() {
  return (
    <PageShell
      title="Latest Projects"
      subtitle="Discover our successful hair restoration procedures and clinical outcomes."
      breadcrumbs={[{ label: 'Projects' }]}
    >
      <section className="py-24" style={{ background: '#eff4f8' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-[24px] overflow-hidden bg-gray-100"
                style={{ aspectRatio: '1/1' }}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2458B3] via-[#2458B3]/50 to-transparent opacity-90 pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col pointer-events-none pr-24">
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      marginBottom: 8,
                    }}
                  >
                    {item.cat}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-chivo), Chivo, serif',
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: '1.3',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Bottom Right Corner Cutout & Button */}
                <div className="absolute bottom-0 right-0 z-10 w-[80px] h-[80px]">
                  {/* The cutout background matching the section background */}
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
                    <path d="M100,0 V100 H0 C0,44.77 44.77,0 100,0 Z" fill="#eff4f8" />
                  </svg>
                  
                  {/* The white circular button */}
                  <Link
                    href={item.href}
                    className="absolute bottom-3 right-3 w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center text-[#222] transition-transform duration-300 hover:scale-110 shadow-sm"
                  >
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
