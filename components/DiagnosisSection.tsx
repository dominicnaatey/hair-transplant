import React from 'react';
import Image from 'next/image';

export default function DiagnosisSection() {
  return (
    <section className="bg-blue-600 text-white relative py-32 z-0">
      {/* Subtle background texture/overlay like in reference image */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
         <Image 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920" 
            alt="" 
            fill
            className="object-cover"
         />
      </div>
      <div className="absolute inset-0 bg-blue-600/90 mix-blend-multiply" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
        <div className="flex flex-col gap-6">
          
          {[
            { num: '01', sub: 'CLINICAL RESEARCH', title: 'Hair Loss Diagnosis', active: true },
            { num: '02', sub: 'HAIR LOSS', title: 'Androgenetic Alopecia', active: false },
            { num: '03', sub: 'TRANSPLANT', title: 'Prosthetic Hair', active: false },
            { num: '04', sub: 'HAIR RESEARCH', title: 'Beard Restoration', active: false },
          ].map((item, idx) => (
             <div key={idx} className={`border-b border-white/20 pb-8 flex items-center gap-6 lg:gap-16 group cursor-pointer transition-all duration-300 ${item.active ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
               <span className="text-5xl lg:text-7xl font-serif font-bold text-white/40 group-hover:text-white/80 transition-colors w-24">
                 {item.num}
               </span>
               <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-blue-200 block mb-2">{item.sub}</span>
                    <h3 className={`text-4xl lg:text-5xl font-serif font-bold lg:tracking-wider ${item.active ? 'text-white' : 'text-transparent bg-clip-text shadow-outline-white'}`}
                        style={!item.active ? { WebkitTextStroke: '1px rgba(255,255,255,0.6)' } : {}}>
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Hover Image Preview (only visible on active or hover conceptually, but let's show on active) */}
                  {item.active && (
                     <div className="hidden lg:block w-48 h-24 rounded-2xl overflow-hidden relative border-4 border-white shadow-xl rotate-3">
                       <Image src="https://images.unsplash.com/photo-1584820927498-cafe4c23dbfa?auto=format&fit=crop&q=80&w=400" alt="Preview" fill className="object-cover" />
                     </div>
                  )}
               </div>
             </div>
          ))}

        </div>
      </div>
    </section>
  );
}
