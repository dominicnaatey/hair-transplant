import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-48 pb-64 lg:pt-64 lg:pb-80 flex items-center bg-slate-900 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1920" 
          alt="Surgery Room Background" 
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
            Technique of Hair Transplant
          </div>
          <h1 className="text-5xl md:text-7xl text-white font-serif font-bold leading-[1.1] mb-8">
            Hair Transplant<br/>Proven Results
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full transition shadow-lg shadow-blue-500/30">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
