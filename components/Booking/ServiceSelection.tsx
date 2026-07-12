import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'consultation',
    title: 'Free Initial Consultation',
    desc: 'A comprehensive 30-minute assessment of your hair loss and a personalized treatment plan.',
    duration: '30 min',
    price: 'Free',
  },
  {
    id: 'fue-assessment',
    title: 'FUE Hair Transplant Assessment',
    desc: 'In-depth surgical planning, graft estimation, and hairline design for FUE.',
    duration: '45 min',
    price: 'Free',
  },
  {
    id: 'prp',
    title: 'PRP Therapy Session',
    desc: 'Platelet-Rich Plasma treatment to stimulate natural hair regrowth.',
    duration: '60 min',
    price: 'From $350',
  },
  {
    id: 'follow-up',
    title: 'Post-Op Follow Up',
    desc: 'Routine check-in for existing patients after their procedure.',
    duration: '15 min',
    price: 'Included',
  },
];

interface ServiceSelectionProps {
  onSelect: (service: any) => void;
}

export default function ServiceSelection({ onSelect }: ServiceSelectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-heading font-medium text-[#222] mb-3">Select a Service</h2>
      <p className="text-[#666] mb-8">Choose the type of appointment you would like to schedule.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onSelect(service)}
            className="text-left group border border-gray-200 rounded-2xl p-6 hover:border-[#2458B3] hover:shadow-lg transition-all duration-300 bg-white"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-heading text-xl font-medium text-[#222] group-hover:text-[#2458B3] transition-colors">{service.title}</h3>
              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#2458B3] group-hover:border-[#2458B3] transition-colors text-transparent group-hover:text-white">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <p className="text-[#666] text-sm leading-relaxed mb-6">{service.desc}</p>
            <div className="flex items-center gap-4 text-sm font-semibold text-[#888]">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {service.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {service.price}
              </span>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
