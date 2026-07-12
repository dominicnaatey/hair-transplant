import PageShell from '@/components/PageShell';
import BookingFlow from '@/components/Booking/BookingFlow';

export default function BookPage() {
  return (
    <PageShell
      title="Book an Appointment"
      subtitle="Schedule your complimentary consultation or follow-up appointment with our specialists. Select a service, choose a time, and take the first step towards your transformation."
      breadcrumbs={[{ label: 'Book Appointment' }]}
    >
      <section className="py-20 lg:py-32 bg-white relative">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #F9F8F6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="relative z-10">
          <BookingFlow />
        </div>
      </section>
    </PageShell>
  );
}
