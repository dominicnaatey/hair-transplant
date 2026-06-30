import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-20 pb-40 relative">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Testimonial */}
        <div className="lg:w-1/2 flex flex-col justify-center relative">
          {/* Decorative Map Background faint absolute */}
          
          <div className="flex gap-1 text-yellow-400 mb-8">
            <Star className="fill-current" size={20} />
            <Star className="fill-current" size={20} />
            <Star className="fill-current" size={20} />
            <Star className="fill-current" size={20} />
            <Star className="fill-current" size={20} />
          </div>
          
          <p className="text-2xl lg:text-3xl font-serif text-slate-800 leading-snug lg:leading-normal mb-10 max-w-xl font-medium">
            The entire process felt calm, clear, and expertly guided. The results look natural, and the care before and after the procedure made all the difference.
          </p>
          
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full overflow-hidden relative">
              <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" alt="Simon Amour" fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">Mina S.</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Patient, London</p>
            </div>
          </div>

          <div className="flex gap-2 mt-8 lg:mt-12 justify-end w-full max-w-xl">
             <div className="w-2.5 h-2.5 rounded-full bg-blue-600 opacity-100" />
             <div className="w-2.5 h-2.5 rounded-full border border-slate-300 opacity-60" />
             <div className="w-2.5 h-2.5 rounded-full border border-slate-300 opacity-60" />
          </div>
        </div>

        {/* Right: Features */}
        <div className="lg:w-1/2 flex flex-col justify-center rounded-[2rem] border border-slate-100 bg-white/80 p-6 lg:p-8 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)]">
           
           <div className="pb-10 border-b border-slate-200">
              <div className="text-blue-600 mb-4">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
               </svg>
              </div>
              <h4 className="font-bold text-slate-900 text-xl font-serif mb-3">Tailored Treatment Plans</h4>
              <p className="text-slate-500 leading-relaxed">Every recommendation is shaped around your hair pattern, goals, and recovery needs for the best possible outcome.</p>
           </div>

           <div className="pt-10">
              <div className="text-blue-600 mb-4">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.795 0-5.482-.205-8.035-.597-1.717-.293-2.3-2.379-1.067-3.61L5 14.5" />
               </svg>
              </div>
              <h4 className="font-bold text-slate-900 text-xl font-serif mb-3">Precision Aftercare</h4>
              <p className="text-slate-500 leading-relaxed">Support continues after the procedure with practical guidance that helps protect your results and comfort.</p>
           </div>

        </div>
      </div>
    </section>
  );
}
