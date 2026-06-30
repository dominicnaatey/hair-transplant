import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-48 pb-64 lg:pt-64 lg:pb-80 flex items-center bg-slate-950 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1920" 
          alt="Surgery Room Background" 
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_28%),linear-gradient(90deg,rgba(2,6,23,0.95)_0%,rgba(2,6,23,0.72)_45%,rgba(2,6,23,0.35)_100%)]" />
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-24 right-10 lg:right-24 h-32 w-32 rounded-full border border-white/15 animate-float" />
        <div className="absolute bottom-20 left-10 lg:left-24 h-24 w-24 rounded-full border border-white/10 animate-float-slow" />
        <div className="absolute top-1/2 right-12 hidden xl:flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm animate-fade-up">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-white/90">Consultation available today</span>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-[0.3em] uppercase mb-6 shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Technique of Hair Transplant
          </div>
          <h1 className="text-5xl md:text-7xl text-white font-serif font-bold leading-[1.02] mb-8 drop-shadow-[0_10px_30px_rgba(2,6,23,0.35)] max-w-4xl">
            Hair Transplant<br/><span className="text-blue-200">Proven Results</span>
          </h1>
          <p className="max-w-xl text-lg text-slate-200 leading-relaxed mb-8">
            Personalized hair restoration care with advanced techniques, compassionate guidance, and results designed to look natural.
          </p>
          <a href="#contact" className="inline-flex bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full transition shadow-[0_18px_40px_-16px_rgba(59,130,246,0.65)] hover:translate-y-[-2px]">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
