import Link from 'next/link';
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import PageShell from '@/components/PageShell';

const highlights = [
  {
    title: 'Clear guidance',
    text: 'Every step is explained in plain language so you feel informed, never rushed.',
    icon: Sparkles,
  },
  {
    title: 'Calm care',
    text: 'A welcoming clinical environment focused on comfort, trust, and realistic expectations.',
    icon: HeartHandshake,
  },
  {
    title: 'Thoughtful planning',
    text: 'Treatment choices are tailored around your goals, stage of hair loss, and long-term scalp health.',
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <PageShell
      title="About Hairise"
      description="We combine clinical precision, calm guidance, and patient-focused care to help people feel confident again."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Why we exist</p>
          <h2 className="mb-4 text-2xl font-bold font-serif text-white sm:text-3xl">A modern approach to hair restoration</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            Hairise was built around one simple idea: every client deserves clear guidance, thoughtful treatment planning, and a calm experience from consultation to recovery.
          </p>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            Our team focuses on the long-term health of the scalp and hair, blending medically informed care with practical aftercare and transparent expectations.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h3 className="mb-6 text-xl font-bold font-serif text-slate-900">Why patients choose us</h3>
          <div className="space-y-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Icon size={18} />
                  </div>
                  <h4 className="mb-2 font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-blue-700">
            Book a consultation
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
