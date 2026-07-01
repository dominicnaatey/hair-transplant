import Link from 'next/link';
import { ArrowRight, BadgeCheck, Compass, ShieldCheck } from 'lucide-react';
import PageShell from '@/components/PageShell';

const results = [
  {
    title: 'Tailored treatment journeys',
    text: 'Each case is approached individually so the plan reflects your hair pattern, recovery needs, and goals.',
    icon: Compass,
  },
  {
    title: 'Natural-looking outcomes',
    text: 'The focus is on healthy-looking density and an overall result that feels balanced and comfortable.',
    icon: BadgeCheck,
  },
  {
    title: 'Trusted guidance throughout',
    text: 'Support continues beyond the procedure with clear aftercare and practical advice that helps protect results.',
    icon: ShieldCheck,
  },
];

export default function ResultsPage() {
  return (
    <PageShell
      title="Results That Feel Confident"
      description="Our approach is shaped around clarity, care, and realistic goals that help you feel informed at every stage."
    >
      <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Patient-first outcomes</p>
            <h2 className="text-2xl font-bold font-serif text-white sm:text-3xl">A calm, considered path to feeling more like yourself again</h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-slate-200 backdrop-blur">
            Personal care, realistic expectations, and support that continues beyond the first appointment.
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {results.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Icon size={20} />
              </div>
              <h3 className="mb-3 text-xl font-bold font-serif text-slate-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            If you would like to discuss your goals or review what treatment may be suitable, our team is happy to help.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-blue-700">
            Start your consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
