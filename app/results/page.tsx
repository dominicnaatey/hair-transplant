import PageShell from '@/components/PageShell';
import BeforeAfterSlider from '@/components/beforeAfter/BeforeAfterSlider';
import ScrollReveal from '@/components/ScrollReveal';

const cases = [
  {
    id: 1,
    title: 'FUE Hair Transplant - 3500 Grafts',
    description: 'A complete restoration of the frontal hairline and mid-scalp density. This patient achieved full growth after 12 months, showcasing a natural, undetectable hairline design.',
    beforeImage: '/images/case_1_before_1783879157598.png',
    afterImage: '/images/case_1_after_matched_1783879179154.png',
    age: 34,
    technique: 'FUE',
    duration: '12 Months',
  },
  {
    id: 2,
    title: 'Crown Restoration',
    description: 'Targeted procedure focusing on the vertex/crown area. We implanted 2200 grafts to restore density and coverage to the balding crown region.',
    beforeImage: '/images/case_2_before_1783879191592.png', 
    afterImage: '/images/case_2_after_matched_1783879394591.png',
    age: 42,
    technique: 'Bio FUE',
    duration: '9 Months',
  },
  {
    id: 3,
    title: 'Advanced Hairline Lowering',
    description: 'Patient presented with a receded hairline. We designed a custom, age-appropriate hairline and implanted 2800 grafts using high-density packing techniques.',
    beforeImage: '/images/case_3_before_1783879346818.png', 
    afterImage: '/images/case_3_after_matched_1783879365099.png',
    age: 28,
    technique: 'DHI',
    duration: '10 Months',
  }
];

export default function ResultsPage() {
  return (
    <PageShell
      title="Before & After Gallery"
      subtitle="Explore real patient transformations. Slide to compare the before and after results of our advanced hair restoration procedures."
      breadcrumbs={[{ label: 'Before & After' }]}
    >
      <section className="py-20 lg:py-32 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24 lg:space-y-32">
          {cases.map((c, index) => (
            <ScrollReveal key={c.id} direction="up" distance={40} className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-center">
              
              {/* Slider Side */}
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="p-2 bg-white rounded-4xl shadow-[0_20px_50px_-16px_rgba(36,88,179,0.15)]">
                  <BeforeAfterSlider 
                    beforeImage={c.beforeImage} 
                    afterImage={c.afterImage} 
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#2458B3]/10 text-[#2458B3] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                  Case Study {String(index + 1).padStart(2, '0')}
                </span>
                
                <h3 className="font-heading text-3xl md:text-4xl font-medium text-[#222] mb-6 leading-tight">
                  {c.title}
                </h3>
                
                <p className="text-[#666] text-[17px] text-balance leading-6.75 mb-10">
                  {c.description}
                </p>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#e8e4dc]">
                  <div>
                    <div className="text-[11px] font-bold text-[#2458B3] uppercase tracking-[0.2em] mb-2">Age</div>
                    <div className="font-heading text-xl text-[#222]">{c.age}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#2458B3] uppercase tracking-[0.2em] mb-2">Technique</div>
                    <div className="font-heading text-xl text-[#222]">{c.technique}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#2458B3] uppercase tracking-[0.2em] mb-2">Result</div>
                    <div className="font-heading text-xl text-[#222]">{c.duration}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-[#2458B3] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-white mb-6">Ready for your transformation?</h2>
          <p className="text-white/80 text-lg mb-10">Schedule a free consultation with our specialists to discuss your hair restoration goals and create a personalized treatment plan.</p>
          <a href="/contact" className="themeht-btn bg-white text-[#2458B3] hover:bg-gray-100 hover:text-[#2458B3] transition-transform">
            Book Consultation
          </a>
        </div>
      </section>
    </PageShell>
  );
}
