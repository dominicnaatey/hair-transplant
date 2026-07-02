"use client";

import { useState } from 'react';
import PageShell from '@/components/PageShell';

const faqs = [
  { q: 'Does a hair transplant hurt?', a: 'We use local anesthesia during the procedure, so the extraction and implantation process is virtually painless. You may experience mild discomfort during the healing process, which is easily managed with prescribed medication.' },
  { q: 'How long does the procedure take?', a: 'A typical FUE session can take anywhere from 4 to 8 hours depending on the number of grafts required.' },
  { q: 'When will I see results?', a: 'Initial growth can be seen around 3 to 4 months post-op. However, full and final results typically take 12 to 15 months to become fully visible.' },
  { q: 'Is the result permanent?', a: 'Yes. The transplanted hair follicles are taken from the donor area (usually the back of the head), which is genetically resistant to the hormones that cause hair loss.' },
  { q: 'What is the difference between FUE and FUT?', a: 'FUE involves extracting individual hair follicles one by one, leaving minimal scarring. FUT involves removing a strip of scalp to harvest follicles, which can leave a linear scar.' },
  { q: 'Am I a suitable candidate for a hair transplant?', a: 'Ideal candidates have sufficient donor hair, are in good general health, and have realistic expectations. We determine your suitability during the initial consultation.' },
  { q: 'What should I avoid after the procedure?', a: 'You should avoid strenuous exercise, direct sunlight, swimming, and wearing tight hats for the first few weeks to ensure the best possible graft survival.' },
  { q: 'Will my transplanted hair look natural?', a: 'Absolutely. Our skilled surgeons carefully design your hairline and place each graft at the correct angle to mimic your natural hair growth pattern.' }
];

// Eye icon for closed state
function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

// Eye slash icon for open state
function EyeSlashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageShell
      title="FAQ"
      subtitle="Frequently asked questions about our services and procedures."
      breadcrumbs={[{ label: 'FAQ' }]}
    >
      <section className="py-24" style={{ background: '#eff4f8' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl shadow-sm overflow-hidden h-max transition-all duration-300"
                >
                  <button
                    className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
                    onClick={() => toggleFaq(i)}
                  >
                    <h3 className={`font-bold text-[15px] sm:text-base ${isOpen ? 'text-[#2458B3]' : 'text-[#222]'}`}>
                      {faq.q}
                    </h3>
                    <div className={`flex-shrink-0 ml-4 ${isOpen ? 'text-[#2458B3]' : 'text-[#222]'}`}>
                      {isOpen ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                    </div>
                  </button>
                  <div
                    className={`px-8 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                  >
                    <p className="text-[#555] leading-relaxed text-[15px]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
