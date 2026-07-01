import React from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

export default function CaseStudies() {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-28 lg:py-32 bg-[#F9F7F2]">
      <div className="text-center mb-14 lg:mb-16">
        <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 block">Clinical Results</span>
        <h2 className="text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">Latest From Case Studies</h2>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A closer look at how tailored treatment plans and precise care create natural, confidence-restoring outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Case 1 */}
         <div className="relative group rounded-[2rem] overflow-hidden aspect-[4/5] shadow-lg cursor-pointer">
           <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600" alt="Case Study 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-80" />
           <div className="absolute inset-0 p-8 flex flex-col justify-end">
             <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-2 border border-white/30 rounded-full px-3 py-1 w-max">Healthier Hair</span>
             <h3 className="text-white text-2xl font-bold font-serif leading-snug">Afro Hair Transplantation</h3>
           </div>
           <div className="absolute bottom-8 right-8 w-12 h-12 bg-white text-blue-900 rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
             <ArrowUp className="rotate-45" size={20} />
           </div>
         </div>

         {/* Case 2 */}
         <div className="relative group rounded-[2rem] overflow-hidden aspect-[4/5] shadow-lg cursor-pointer">
           <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" alt="Case Study 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-80" />
           <div className="absolute inset-0 p-8 flex flex-col justify-end">
             <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-2 border border-white/30 rounded-full px-3 py-1 w-max">DHT</span>
             <h3 className="text-white text-2xl font-bold font-serif leading-snug">PRP Treatment For Hair</h3>
           </div>
           <div className="absolute bottom-8 right-8 w-12 h-12 bg-white text-blue-900 rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
             <ArrowUp className="rotate-45" size={20} />
           </div>
         </div>

         {/* Case 3 */}
         <div className="relative group rounded-[2rem] overflow-hidden aspect-[4/5] shadow-lg cursor-pointer">
           <Image src="/images/patient_markings.png" alt="Case Study 3" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-80" />
           <div className="absolute inset-0 p-8 flex flex-col justify-end">
             <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-2 border border-white/30 rounded-full px-3 py-1 w-max">Clinical Research</span>
             <h3 className="text-white text-2xl font-bold font-serif leading-snug">Follicular Unit Extraction</h3>
           </div>
           <div className="absolute bottom-8 right-8 w-12 h-12 bg-white text-blue-900 rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
             <ArrowUp className="rotate-45" size={20} />
           </div>
         </div>

      </div>

      <div className="text-center mt-16 text-slate-500 font-medium">
        See how our approach supports long-term growth and confidence. <a href="#contact" className="border-b-2 border-blue-600 text-blue-600 pb-1 ms-1 hover:text-blue-700 transition">Book a consultation</a>
      </div>
    </section>
  );
}
