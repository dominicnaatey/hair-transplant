import Link from 'next/link';
import PageShell from '@/components/PageShell';
import Image from 'next/image';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '200k', label: 'Patients Treated' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '650+', label: 'Specialist Tools' },
];

const values = [
  {
    title: 'Clear Guidance',
    text: 'Every step is explained in plain language so you feel informed, never rushed.',
    icon: '🎯',
  },
  {
    title: 'Calm Care',
    text: 'A welcoming clinical environment focused on comfort, trust, and realistic expectations.',
    icon: '❤️',
  },
  {
    title: 'Thoughtful Planning',
    text: 'Treatment choices are tailored around your goals, stage of hair loss, and long-term scalp health.',
    icon: '🔬',
  },
  {
    title: 'Proven Results',
    text: 'Advanced FUE and PRP techniques with natural-looking, permanent outcomes.',
    icon: '✅',
  },
];

export default function AboutPage() {
  return (
    <PageShell
      title="About Hairise"
      subtitle="We combine clinical precision, calm guidance, and patient-focused care to help people feel confident again."
      breadcrumbs={[{ label: 'About Us' }]}
    >
      {/* Mission section */}
      <section className="py-24" style={{ background: '#ffffff' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#2458B3',
                  marginBottom: 14,
                  display: 'block',
                }}
              >
                Why We Exist
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-chivo), Chivo, serif',
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 500,
                  color: '#222',
                  marginBottom: 20,
                  lineHeight: '1.2',
                }}
              >
                A Modern Approach to<br />Hair Restoration
              </h2>
              <p style={{ color: '#666', fontSize: 17, lineHeight: '27px', marginBottom: 16 }}>
                Hairise was built around one simple idea: every client deserves clear guidance,
                thoughtful treatment planning, and a calm experience from consultation to recovery.
              </p>
              <p style={{ color: '#666', fontSize: 17, lineHeight: '27px', marginBottom: 32 }}>
                Our team focuses on the long-term health of the scalp and hair, blending medically
                informed care with practical aftercare and transparent expectations.
              </p>
              <Link href="/contact" className="themeht-btn primary-btn">
                Book a Consultation
              </Link>
            </div>
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden relative"
                style={{ aspectRatio: '4/5', maxWidth: 440, margin: '0 auto' }}
              >
                <Image
                  src="/images/hair_treatment.png"
                  alt="Our clinic"
                  fill
                  className="object-cover"
                  sizes="440px"
                />
              </div>
              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -left-6 rounded-2xl p-6 shadow-2xl"
                style={{ background: '#2458B3', color: '#fff', minWidth: 160 }}
              >
                <div style={{ fontFamily: 'var(--font-chivo)', fontSize: 42, fontWeight: 500, lineHeight: 1 }}>15+</div>
                <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4, opacity: 0.8 }}>
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: '#F9F8F6' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.value} className="text-center p-8 rounded-2xl bg-white border border-[#e8e4dc]">
                <div
                  style={{
                    fontFamily: 'var(--font-chivo), Chivo, serif',
                    fontSize: 48,
                    fontWeight: 500,
                    color: '#2458B3',
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-24" style={{ background: '#ffffff' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
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
              Our Values
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-chivo), Chivo, serif',
                fontSize: 'clamp(28px, 3vw, 44px)',
                fontWeight: 500,
                color: '#222',
              }}
            >
              Why Patients Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-2xl border border-[#e8e4dc] hover:border-[#2458B3] hover:shadow-lg transition-all duration-300 group"
                style={{ background: '#F9F8F6' }}
              >
                <div className="text-4xl mb-5">{v.icon}</div>
                <h4
                  style={{
                    fontFamily: 'var(--font-chivo), Chivo, serif',
                    fontSize: 20,
                    fontWeight: 500,
                    color: '#222',
                    marginBottom: 10,
                  }}
                >
                  {v.title}
                </h4>
                <p style={{ fontSize: 15, color: '#666', lineHeight: '24px', margin: 0 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
