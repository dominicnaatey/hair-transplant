import PageShell from '@/components/PageShell';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Hairise"
      subtitle="We are here to help you start with a conversation about your goals and the next best step."
      breadcrumbs={[{ label: 'Contact Us' }]}
    >
      <ContactSection />
    </PageShell>
  );
}
