"use client";

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

type ContactFormProps = {
  title?: string;
  description?: string;
  compact?: boolean;
  className?: string;
};

export default function ContactForm({
  title = "Let's Get In Touch",
  description = "We typically reply within one business day.",
  compact = false,
  className = "",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [feedback, setFeedback] = useState(description);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== 'idle') {
      setStatus('idle');
      setFeedback(description);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isComplete = Object.values(formData).every((value) => value.trim() !== '');
    if (!isComplete) {
      setStatus('error');
      setFeedback('Please complete every field so we can follow up with you.');
      return;
    }

    const subject = encodeURIComponent(`New consultation request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`,
    );

    if (typeof window !== 'undefined') {
      window.location.href = `mailto:hello@hairise.com?subject=${subject}&body=${body}`;
    }

    setStatus('success');
    setFeedback("Thanks! Your request is ready to send, and we’ll be in touch shortly.");
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className={className}>
      <div className="mb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">Free Consultation</p>
        <h2 className="text-3xl font-bold font-serif text-slate-800 lg:text-4xl">{title}</h2>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            type="text"
            placeholder="Your Name"
            className="w-full rounded-2xl border border-transparent bg-[#F5F7FA] p-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-200"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            type="email"
            placeholder="Your Email"
            className="w-full rounded-2xl border border-transparent bg-[#F5F7FA] p-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-200"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-2xl border border-transparent bg-[#F5F7FA] p-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-200"
          />
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full appearance-none rounded-2xl border border-transparent bg-[#F5F7FA] p-4 text-sm text-slate-700 outline-none transition focus:border-blue-200"
            >
              <option value="">Select Service</option>
              <option value="Hair Transplant">Hair Transplant</option>
              <option value="Dandruff Treatment">Dandruff Treatment</option>
              <option value="PRP Treatment">PRP Treatment</option>
            </select>
            <ChevronRight className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-400" size={16} />
          </div>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us what you are looking for"
          rows={compact ? 3 : 4}
          className="w-full resize-none rounded-2xl border border-transparent bg-[#F5F7FA] p-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-200"
        />

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="rounded-full bg-blue-600 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Send Message
          </button>
          <p className={`text-sm ${status === 'error' ? 'text-rose-600' : status === 'success' ? 'text-emerald-600' : 'text-slate-500'}`}>
            {feedback}
          </p>
        </div>
      </form>
    </div>
  );
}
