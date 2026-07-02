import PageShell from '@/components/PageShell';
import Image from 'next/image';
import Link from 'next/link';

export default async function ResultDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // In a real app, you would fetch the data based on params.slug.
  // We'll use a clean, format-friendly generic project template for demonstration.
  
  const resolvedParams = await params;
  const title = resolvedParams.slug
    .split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <PageShell
      title={title}
      subtitle="Detailed overview of the patient journey, procedure, and successful restoration outcomes."
      breadcrumbs={[
        { label: 'Projects', href: '/results' },
        { label: title }
      ]}
    >
      <section className="py-24" style={{ background: '#eff4f8' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          
          {/* Top Featured Image */}
          <div className="w-full relative h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden mb-16 shadow-lg">
            <Image
              src="/images/case_study_1.png"
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* ─── Main Content (Left) ─── */}
            <div className="lg:col-span-8">
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-chivo), Chivo, serif',
                  fontSize: 'clamp(28px, 3vw, 36px)',
                  fontWeight: 600,
                  color: '#222',
                }}
              >
                Project Overview
              </h2>
              <p className="text-[#555] leading-relaxed mb-8 text-lg">
                This case study highlights our approach to restoring a natural, dense hairline for patients experiencing advanced stages of androgenetic alopecia. Our primary goal was to achieve maximum coverage while maintaining a completely undetectable transition between the native hair and the transplanted grafts.
              </p>
              <p className="text-[#555] leading-relaxed mb-12 text-lg">
                The patient underwent a comprehensive consultation at our Ghana clinic, where our specialists mapped out a personalized restoration strategy utilizing the latest in FUE technology to ensure optimal graft survival and rapid recovery.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/solutions_1.png"
                    alt="Procedure detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/case_study_2.png"
                    alt="Results detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h3
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-chivo), Chivo, serif',
                  fontSize: 28,
                  fontWeight: 600,
                  color: '#222',
                }}
              >
                The Challenge & Solution
              </h3>
              <p className="text-[#555] leading-relaxed mb-8 text-lg">
                The main challenge was the limited donor area relative to the extensive thinning on the crown and frontal regions. Our solution involved a meticulously planned extraction process, preserving the donor zone's density while strategically placing grafts to create the illusion of overall thickness.
              </p>
              
              <ul className="space-y-4 mb-12">
                {[
                  'Initial comprehensive scalp analysis and mapping',
                  'Customized hairline design tailored to facial structure',
                  'Painless extraction using advanced microsurgical tools',
                  'Post-operative care and regular check-ins'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-[#555] text-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2458B3]/10 flex items-center justify-center text-[#2458B3] mt-1">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>

            {/* ─── Sidebar (Right) ─── */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                
                {/* Project Info Card */}
                <div className="bg-white rounded-[24px] p-8 shadow-sm border border-[#e5e7eb]">
                  <h4 
                    className="mb-6 border-b border-[#e5e7eb] pb-4"
                    style={{
                      fontFamily: 'var(--font-chivo), Chivo, serif',
                      fontSize: 20,
                      fontWeight: 600,
                      color: '#222',
                    }}
                  >
                    Project Details
                  </h4>
                  <ul className="space-y-5">
                    <li>
                      <div className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-1">Client</div>
                      <div className="text-[#222] font-medium text-[15px]">David Miller</div>
                    </li>
                    <li>
                      <div className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-1">Category</div>
                      <div className="text-[#2458B3] font-medium text-[15px]">Clinical Research</div>
                    </li>
                    <li>
                      <div className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-1">Date</div>
                      <div className="text-[#222] font-medium text-[15px]">March 15, 2026</div>
                    </li>
                    <li>
                      <div className="text-[11px] font-bold text-[#888] uppercase tracking-wider mb-1">Surgeon</div>
                      <div className="text-[#222] font-medium text-[15px]">Dr. Simon Amour</div>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-[#2458B3] rounded-[24px] p-8 shadow-md text-white">
                  <h4 
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-chivo), Chivo, serif',
                      fontSize: 22,
                      fontWeight: 600,
                    }}
                  >
                    Ready for similar results?
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    Book a consultation today and let our specialists design a custom restoration plan just for you.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full py-4 bg-white text-[#2458B3] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageShell>
  );
}
