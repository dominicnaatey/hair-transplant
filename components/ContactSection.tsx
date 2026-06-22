"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="relative pt-0 pb-32">
      <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 h-[500px] z-0 overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1400" 
          alt="Smiling Doctor" 
          fill
          className="object-cover object-top opacity-90"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 lg:h-[500px] flex items-center justify-end -mt-20 lg:-mt-0">
        
        <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] max-w-xl w-full border border-slate-50 relative">
           <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.89 1.14l-2.8.933a.75.75 0 01-.94-.94l.933-2.8a4.5 4.5 0 011.14-1.89l13.432-13.432z" /></svg>
           </div>
           
           <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-800 mb-8">Let's Get In Touch</h2>
           
           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full bg-[#F5F7FA] p-4 rounded-2xl border border-transparent focus:border-blue-200 outline-none transition text-sm text-slate-700" />
                <input type="email" placeholder="Your Email" className="w-full bg-[#F5F7FA] p-4 rounded-2xl border border-transparent focus:border-blue-200 outline-none transition text-sm text-slate-700" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="tel" placeholder="Phone Number" className="w-full bg-[#F5F7FA] p-4 rounded-2xl border border-transparent focus:border-blue-200 outline-none transition text-sm text-slate-700" />
                <div className="relative">
                   <select className="w-full bg-[#F5F7FA] p-4 rounded-2xl border border-transparent focus:border-blue-200 outline-none transition text-sm text-slate-500 appearance-none">
                     <option value="">Select Service</option>
                     <option value="transplant">Hair Transplant</option>
                     <option value="dandruff">Dandruff Treatment</option>
                     <option value="prp">PRP Treatment</option>
                   </select>
                   <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 rotate-90 pointer-events-none" size={16} />
                </div>
              </div>
              <textarea placeholder="Message" rows={4} className="w-full bg-[#F5F7FA] p-4 rounded-2xl border border-transparent focus:border-blue-200 outline-none transition text-sm text-slate-700 resize-none"></textarea>
              
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wider uppercase px-10 py-4 rounded-full transition mt-4 shadow-lg shadow-blue-500/20">
                Send Message
              </button>
           </form>
        </div>

      </div>
    </section>
  );
}
