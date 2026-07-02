import PageShell from '@/components/PageShell';

export default function HistoryPage() {
  return (
    <PageShell
      title="Our History"
      subtitle="The story behind Ghana's premier hair transplant clinic."
      breadcrumbs={[{ label: 'Our History' }]}
    >
      <section className="py-24" style={{ background: '#eff4f8' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-[#222]">A Legacy of Excellence</h2>
            <p className="text-[#555] mb-8 leading-relaxed text-lg">
              Founded over a decade ago, Hairise was established with a singular mission: to bring world-class, advanced hair restoration techniques to Ghana. Our founders recognized a growing need for specialized, compassionate care that met international standards without requiring patients to travel abroad.
            </p>
            <p className="text-[#555] mb-8 leading-relaxed text-lg">
              Over the years, we have grown from a small specialized clinic into the country's leading hair transplant center. We have continually invested in state-of-the-art technology, such as advanced FUE and trichoscopy equipment, to ensure our patients receive the best possible outcomes.
            </p>
            <p className="text-[#555] leading-relaxed text-lg">
              Today, with over thousands of successful procedures completed, Hairise stands as a beacon of hope and confidence for those experiencing hair loss. We remain dedicated to continuous learning, innovation, and, above all, the well-being of our patients.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
