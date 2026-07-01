import Link from 'next/link';
import { ArrowRight, ClipboardList, Scissors, Stethoscope } from 'lucide-react';
import PageShell from '@/components/PageShell';

const services = [
  {
    title: 'Hair Loss Diagnosis',
    description: 'A detailed assessment of your scalp health, pattern of thinning, and the most suitable next step.',
    icon: ClipboardList,
  },
  {
    title: 'Hair Restoration Planning',
    description: 'Personalized treatment planning for hair density, receding areas, and long-term scalp health.',
    icon: Scissors,
  },
  {
    title: 'Aftercare Guidance',
    description: 'Practical support before and after treatment so results stay protected and your experience feels manageable.',
    icon: Stethoscope,
  },
];

export default function ServicesPage() {
  return (
    <PageShell
      title="Our Services"
      description="From initial assessment to aftercare, every step is tailored to your goals and comfort."
    >
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">A tailored path</p>
            <h2 className="text-2xl font-bold font-serif text-slate-900 sm:text-3xl">Support designed around your comfort and goals</h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            We keep the process simple, transparent, and easy to understand, so you can focus on feeling confident in the next step.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Icon size={20} />
              </div>
              <h3 className="mb-3 text-xl font-bold font-serif text-slate-900">{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-[2rem] border border-blue-100 bg-gradient-to-r from-blue-50 to-slate-50 p-8 text-slate-700 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="mb-3 text-xl font-bold font-serif text-slate-900">Not sure where to start?</h3>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              We can help you decide whether a consultation, diagnostic review, or treatment plan is the right first step.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-slate-800">
            Request a consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
