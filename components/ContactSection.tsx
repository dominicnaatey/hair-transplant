"use client";

import { useState, useTransition } from 'react';
import { submitContactForm } from '@/app/actions/contact';

const services = ['Select Service', 'Hair Loss Diagnosis', 'FUE Hair Transplant', 'PRP Treatment', 'Beard Restoration', 'Scalp Analysis'];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await submitContactForm(form);
      if (result.success) {
        setSent(true);
        setTimeout(() => setSent(false), 5000);
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
      }
    });
  };

  return (
    <section className="relative w-full py-20 lg:py-32" style={{
      backgroundImage: 'url(/images/contact_bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-[#0f172a]/20" /> {/* Subtle overlay for better contrast if needed */}
      
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-12 flex justify-end">
        {/* ─── Right: Form Panel ─── */}
        <div className="w-full lg:w-[650px] bg-white rounded-[32px] p-10 lg:p-14 relative shadow-2xl">
          {/* Floating icon top right */}
          <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#2458B3] flex items-center justify-center text-white">
               <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z" />
               </svg>
            </div>
          </div>

          <h2
            className="mb-10"
            style={{
              fontFamily: 'var(--font-chivo), Chivo, serif',
              fontSize: 'clamp(28px, 3vw, 36px)',
              fontWeight: 600,
              color: '#222',
            }}
          >
            Let&rsquo;s Get In Touch
          </h2>

          {sent && (
            <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
              ✓ Thank you! We&rsquo;ll get back to you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <InputField
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <InputField
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <div>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '16px 24px',
                    border: 'none',
                    borderRadius: 999,
                    background: '#eff4f8',
                    fontSize: 14,
                    color: form.service ? '#222' : '#888',
                    outline: 'none',
                    cursor: 'pointer',
                    appearance: 'none',
                    fontFamily: 'var(--font-dm-sans)',
                  }}
                >
                  {services.map((s) => (
                    <option key={s} value={s} disabled={s === 'Select Service'}>{s}</option>
                  ))}
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#888]">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              style={{
                width: '100%',
                padding: '20px 24px',
                border: 'none',
                borderRadius: 24,
                background: '#eff4f8',
                fontSize: 14,
                color: '#222',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'var(--font-dm-sans)',
              }}
            />

            <button
              type="submit"
              disabled={isPending}
              style={{
                background: '#2458B3',
                color: '#ffffff',
                padding: '16px 36px',
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 13,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'background 0.3s ease',
              }}
              className={`inline-flex items-center hover:bg-[#1a4490] ${isPending ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isPending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InputField({ name, type = 'text', placeholder, value, onChange, required = false }: {
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      style={{
        width: '100%',
        padding: '16px 24px',
        border: 'none',
        borderRadius: 999,
        background: '#eff4f8',
        fontSize: 14,
        color: '#222',
        outline: 'none',
        fontFamily: 'var(--font-dm-sans)',
        transition: 'background 0.2s ease',
      }}
      onFocus={(e) => (e.target.style.background = '#e6ecf2')}
      onBlur={(e) => (e.target.style.background = '#eff4f8')}
    />
  );
}

function PinIcon() {
  return <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
}
function MailIcon() {
  return <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
}
function PhoneIcon() {
  return <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
}
