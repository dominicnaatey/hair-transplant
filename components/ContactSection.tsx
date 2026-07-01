"use client";

import React from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="relative pb-32 pt-0">
      <div className="absolute inset-y-0 left-0 z-0 h-[520px] w-full overflow-hidden lg:w-2/3">
        <Image
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1400"
          alt="Smiling Doctor"
          fill
          className="object-cover object-top opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto -mt-20 flex items-center justify-end px-6 lg:-mt-0 lg:h-[520px] lg:px-12">
        <div className="relative w-full max-w-xl rounded-[2.25rem] border border-slate-100 bg-white/95 p-10 shadow-[0_35px_80px_-24px_rgba(15,23,42,0.25)] backdrop-blur-sm lg:p-14">
          <div className="absolute -right-6 -top-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.89 1.14l-2.8.933a.75.75 0 01-.94-.94l.933-2.8a4.5 4.5 0 011.14-1.89l13.432-13.432z" /></svg>
          </div>

          <ContactForm className="" />
        </div>
      </div>
    </section>
  );
}
