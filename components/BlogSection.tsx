import React from 'react';
import Image from 'next/image';
import { Star, LayoutGrid, ArrowUp } from 'lucide-react';

export default function BlogSection() {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-24 pb-32">
      <div className="text-center mb-14 lg:mb-16">
        <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 block">Our Blog</span>
        <h2 className="text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-4">Explore our Latest Insights</h2>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Helpful guidance on hair health, recovery, and the latest treatment approaches for lasting confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
         {/* Blog 1 */}
         <div className="group cursor-pointer rounded-[2rem] border border-slate-100 bg-white/80 p-4 shadow-[0_20px_45px_-24px_rgba(15,23,42,0.24)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_-24px_rgba(15,23,42,0.28)]">
           <div className="relative rounded-[1.5rem] overflow-hidden aspect-[16/10] mb-6">
              <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600" alt="Blog 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 text-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUp className="rotate-45" size={18} />
              </div>
           </div>
           <div className="flex gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center gap-1.5"><Star size={14} className="text-blue-600" /> Admin</span>
              <span className="flex items-center gap-1.5"><LayoutGrid size={14} className="text-blue-600" /> DHT</span>
           </div>
           <h3 className="text-xl font-bold font-serif text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
             Multivitamins and Hair Loss: What Actually Helps
           </h3>
         </div>

         {/* Blog 2 */}
         <div className="group cursor-pointer rounded-[2rem] border border-slate-100 bg-white/80 p-4 shadow-[0_20px_45px_-24px_rgba(15,23,42,0.24)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_-24px_rgba(15,23,42,0.28)]">
           <div className="relative rounded-[1.5rem] overflow-hidden aspect-[16/10] mb-6">
              <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" alt="Blog 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 text-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUp className="rotate-45" size={18} />
              </div>
           </div>
           <div className="flex gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center gap-1.5"><Star size={14} className="text-blue-600" /> Admin</span>
              <span className="flex items-center gap-1.5"><LayoutGrid size={14} className="text-blue-600" /> Hair Care</span>
           </div>
           <h3 className="text-xl font-bold font-serif text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
             Can Hair Recover After Thinning? A Clinician&apos;s View
           </h3>
         </div>

         {/* Blog 3 */}
         <div className="group cursor-pointer rounded-[2rem] border border-slate-100 bg-white/80 p-4 shadow-[0_20px_45px_-24px_rgba(15,23,42,0.24)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_-24px_rgba(15,23,42,0.28)]">
           <div className="relative rounded-[1.5rem] overflow-hidden aspect-[16/10] mb-6">
              <Image src="/images/hair_treatment.png" alt="Blog 3" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 text-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUp className="rotate-45" size={18} />
              </div>
           </div>
           <div className="flex gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center gap-1.5"><Star size={14} className="text-blue-600" /> Admin</span>
              <span className="flex items-center gap-1.5"><LayoutGrid size={14} className="text-blue-600" /> Hair Loss</span>
           </div>
           <h3 className="text-xl font-bold font-serif text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
             What to Expect From a Modern Hair Transplant Journey
           </h3>
         </div>

      </div>

      <div className="text-center mt-12">
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-slate-700 transition hover:border-blue-200 hover:text-blue-600 hover:shadow-[0_15px_35px_-20px_rgba(59,130,246,0.5)]">
          Ask us anything
          <ArrowUp className="rotate-45" size={14} />
        </a>
      </div>
    </section>
  );
}
