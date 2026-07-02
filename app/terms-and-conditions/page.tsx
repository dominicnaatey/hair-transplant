import PageShell from '@/components/PageShell';

export default function TermsAndConditionsPage() {
  return (
    <PageShell
      title="Terms And Conditions"
      subtitle="The rules and guidelines for using our services."
      breadcrumbs={[{ label: 'Terms And Conditions' }]}
    >
      <section className="py-24" style={{ background: '#eff4f8' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-[#222]">1. Introduction</h2>
            <p className="text-[#555] mb-8 leading-relaxed">
              By accessing and using the Hairise website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <h2 className="text-2xl font-bold mb-6 text-[#222]">2. Medical Disclaimer</h2>
            <p className="text-[#555] mb-8 leading-relaxed">
              The information provided on this website is for educational purposes only and does not substitute for professional medical advice. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
            <h2 className="text-2xl font-bold mb-6 text-[#222]">3. Appointments and Cancellations</h2>
            <p className="text-[#555] mb-8 leading-relaxed">
              We require at least 48 hours notice for any appointment cancellations. Failure to provide sufficient notice may result in a cancellation fee.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
