import Link from 'next/link';
import PageShell from '@/components/PageShell';
import DiagnosisSection from '@/components/DiagnosisSection';

const services = [
  {
    num: '01',
    title: 'Hair Loss Diagnosis',
    cat: 'Clinical Research',
    description: 'A detailed assessment of your scalp health, pattern of thinning, and the most suitable next step.',
  },
  {
    num: '02',
    title: 'Hair Restoration Planning',
    cat: 'Transplant',
    description: 'Personalized treatment planning for hair density, receding areas, and long-term scalp health.',
  },
  {
    num: '03',
    title: 'FUE Hair Transplant',
    cat: 'Procedure',
    description: 'Follicular Unit Extraction — the gold standard minimally-invasive technique for permanent hair restoration.',
  },
  {
    num: '04',
    title: 'PRP Therapy',
    cat: 'Non-Surgical',
    description: 'Platelet-Rich Plasma injections to stimulate natural hair growth and strengthen existing follicles.',
  },
  {
    num: '05',
    title: 'Beard Restoration',
    cat: 'Specialised',
    description: 'Precise transplant techniques for patchy beards or mustaches, delivering natural density and shape.',
  },
  {
    num: '06',
    title: 'Aftercare Guidance',
    cat: 'Recovery',
    description: 'Practical support before and after treatment so results stay protected and your experience feels manageable.',
  },
];

export default function ServicesPage() {
  return (
    <PageShell
      title="Our Services"
      subtitle="From initial assessment to aftercare, every step is tailored to your goals and comfort."
      breadcrumbs={[{ label: 'Services' }]}
    >
      {/* Services grid */}
      <section className="py-24" style={{ background: '#F9F8F6' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((s) => (
              <div
                key={s.num}
                className="group p-10 rounded-2xl border border-[#e8e4dc] bg-white hover:border-[#2458B3] hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Number watermark */}
                <div
                  style={{
                    fontFamily: 'var(--font-chivo), Chivo, serif',
                    fontSize: 80,
                    fontWeight: 700,
                    color: 'rgba(36,88,179,0.05)',
                    lineHeight: 1,
                    position: 'absolute',
                    top: 12,
                    right: 16,
                    userSelect: 'none',
                  }}
                >
                  {s.num}
                </div>

                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#2458B3',
                    marginBottom: 12,
                  }}
                >
                  {s.cat}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-chivo), Chivo, serif',
                    fontSize: 22,
                    fontWeight: 500,
                    color: '#222',
                    marginBottom: 12,
                    position: 'relative',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 15, color: '#666', lineHeight: '24px', margin: 0 }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="rounded-2xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8"
            style={{ background: '#0f172a' }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-chivo), Chivo, serif',
                  fontSize: 'clamp(22px, 2.5vw, 32px)',
                  fontWeight: 500,
                  color: '#ffffff',
                  marginBottom: 8,
                }}
              >
                Not sure where to start?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, margin: 0 }}>
                We can help you decide whether a consultation, diagnostic review, or treatment plan is the right first step.
              </p>
            </div>
            <Link href="/contact" className="themeht-btn primary-btn flex-shrink-0">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Diagnosis section on services page */}
      <DiagnosisSection />
    </PageShell>
  );
}
