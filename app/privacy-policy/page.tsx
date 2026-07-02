import PageShell from '@/components/PageShell';

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      subtitle="How we handle your data and protect your privacy."
      breadcrumbs={[{ label: 'Privacy Policy' }]}
    >
      <section className="py-24" style={{ background: '#eff4f8' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-[#222]">1. Information We Collect</h2>
            <p className="text-[#555] mb-8 leading-relaxed">
              At Hairise, we are committed to protecting your privacy. We collect information that you provide directly to us when you fill out a form, request a consultation, or contact us. This may include your name, email address, phone number, and medical history relevant to your hair restoration journey.
            </p>
            <h2 className="text-2xl font-bold mb-6 text-[#222]">2. How We Use Your Information</h2>
            <p className="text-[#555] mb-8 leading-relaxed">
              The information we collect is used to provide you with the best possible care, schedule appointments, and communicate with you about our services. We do not sell or share your personal information with third parties for marketing purposes.
            </p>
            <h2 className="text-2xl font-bold mb-6 text-[#222]">3. Data Security</h2>
            <p className="text-[#555] mb-8 leading-relaxed">
              We implement a variety of security measures to maintain the safety of your personal information. Your medical records and personal details are stored in secure systems with restricted access.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
