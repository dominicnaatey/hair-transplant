import PageShell from '@/components/PageShell';

export default function HowWeWorkPage() {
  return (
    <PageShell
      title="How We Work"
      subtitle="Our step-by-step process to restoring your hair and confidence."
      breadcrumbs={[{ label: 'How We Work' }]}
    >
      <section className="py-24" style={{ background: '#eff4f8' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#222]">1. Consultation</h3>
                <p className="text-[#555] leading-relaxed">
                  We start with a comprehensive scalp analysis and a discussion of your goals to determine the best treatment plan for you.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#222]">2. Procedure</h3>
                <p className="text-[#555] leading-relaxed">
                  Our experienced surgeons use state-of-the-art techniques to carefully extract and implant hair follicles, ensuring a natural-looking result with minimal discomfort.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#222]">3. Recovery & Aftercare</h3>
                <p className="text-[#555] leading-relaxed">
                  We provide detailed aftercare instructions and regular check-ups to monitor your progress and ensure optimal growth over the following months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
