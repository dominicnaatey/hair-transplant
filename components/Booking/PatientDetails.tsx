import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PatientDetailsProps {
  onSubmit: (data: { name: string; email: string; phone: string; notes: string }) => void;
  onBack: () => void;
  isSubmitting: boolean;
}

export default function PatientDetails({ onSubmit, onBack, isSubmitting }: PatientDetailsProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
    >
      <button onClick={onBack} className="text-[#888] hover:text-[#222] font-semibold text-sm flex items-center gap-2 mb-6 transition-colors">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        Back to Calendar
      </button>

      <h2 className="text-3xl font-heading font-medium text-[#222] mb-3">Your Details</h2>
      <p className="text-[#666] mb-8">Please provide your contact information to finalize the booking.</p>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-[#222] mb-2">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#eff4f8] rounded-full px-6 py-4 text-sm text-[#222] outline-none focus:ring-2 focus:ring-[#2458B3]/20 transition-shadow"
              placeholder="e.g. John Doe"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold text-[#222] mb-2">Email Address <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#eff4f8] rounded-full px-6 py-4 text-sm text-[#222] outline-none focus:ring-2 focus:ring-[#2458B3]/20 transition-shadow"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#222] mb-2">Phone Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#eff4f8] rounded-full px-6 py-4 text-sm text-[#222] outline-none focus:ring-2 focus:ring-[#2458B3]/20 transition-shadow"
                placeholder="(555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#222] mb-2">Additional Notes (Optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full bg-[#eff4f8] rounded-[24px] px-6 py-4 text-sm text-[#222] outline-none focus:ring-2 focus:ring-[#2458B3]/20 transition-shadow resize-y"
              placeholder="Briefly describe your hair goals or any specific concerns..."
            />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              bg-[#2458B3] text-white px-8 py-4 rounded-full font-bold text-sm tracking-[0.05em] uppercase transition-all
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#1a4490] hover:shadow-lg hover:-translate-y-0.5'}
            `}
          >
            {isSubmitting ? 'Confirming...' : 'Confirm Appointment'}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
