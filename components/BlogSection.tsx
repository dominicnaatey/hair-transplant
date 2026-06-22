import React from 'react';
import Image from 'next/image';
import { Star, LayoutGrid, ArrowUp } from 'lucide-react';

export default function BlogSection() {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-24 pb-32">
      <div className="text-center mb-16">
        <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 block">Our Blog</span>
        <h2 className="text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-6">Explore our Latest Post</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
         {/* Blog 1 */}
         <div className="group cursor-pointer">
           <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] mb-6 shadow-sm">
              <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600" alt="Blog 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUp className="rotate-45" size={18} />
              </div>
           </div>
           <div className="flex gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center gap-1.5"><Star size={14} className="text-blue-600" /> Admin</span>
              <span className="flex items-center gap-1.5"><LayoutGrid size={14} className="text-blue-600" /> DHT</span>
           </div>
           <h3 className="text-xl font-bold font-serif text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
             Multivitamins And Hair Loss: The Ultimate Truth
           </h3>
         </div>

         {/* Blog 2 */}
         <div className="group cursor-pointer">
           <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] mb-6 shadow-sm">
              <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" alt="Blog 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUp className="rotate-45" size={18} />
              </div>
           </div>
           <div className="flex gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center gap-1.5"><Star size={14} className="text-blue-600" /> Admin</span>
              <span className="flex items-center gap-1.5"><LayoutGrid size={14} className="text-blue-600" /> Hair Care</span>
           </div>
           <h3 className="text-xl font-bold font-serif text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
             Does Eyelash Grow Back: Dermatologist Answers
           </h3>
         </div>

         {/* Blog 3 */}
         <div className="group cursor-pointer">
           <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] mb-6 shadow-sm">
              <Image src="https://placehold.co/600x400/EAE7DE/A3B18A?text=Hair+Treatment" alt="Blog 3" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUp className="rotate-45" size={18} />
              </div>
           </div>
           <div className="flex gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center gap-1.5"><Star size={14} className="text-blue-600" /> Admin</span>
              <span className="flex items-center gap-1.5"><LayoutGrid size={14} className="text-blue-600" /> Hair Loss</span>
           </div>
           <h3 className="text-xl font-bold font-serif text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
             What Is Implanter Pen In DHT Hair Transplant?
           </h3>
         </div>

      </div>
    </section>
  );
}
