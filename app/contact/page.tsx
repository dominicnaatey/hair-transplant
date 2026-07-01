import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import PageShell from '@/components/PageShell';

const contactDetails = [
  {
    label: 'Email',
    value: 'hello@hairise.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91-234-567-8900',
    icon: Phone,
  },
  {
    label: 'Location',
    value: '5th Street, New York, USA',
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Hairise"
      description="We are here to help you start with a conversation about your goals and the next best step."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Start here</p>
          <h2 className="mb-4 text-2xl font-bold font-serif text-slate-900">Reach out with confidence</h2>
          <p className="mb-8 text-sm leading-relaxed text-slate-600 sm:text-base">
            Whether you are exploring options or ready to book, we will help you understand the process clearly and without pressure.
          </p>

          <div className="space-y-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{detail.label}</p>
                    <p className="font-medium text-slate-800">{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <ContactForm title="Book a consultation" description="Share a few details and we will be in touch to arrange a convenient time." compact />
        </div>
      </div>
    </PageShell>
  );
}
