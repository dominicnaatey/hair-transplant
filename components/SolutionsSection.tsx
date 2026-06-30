import React from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

export default function SolutionsSection() {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-20 lg:py-24 space-y-8 lg:space-y-10">
      
      {/* Box 1 */}
      <div className="relative bg-white border border-slate-100 rounded-[2.5rem] lg:rounded-[4rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.02)]">
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-6">Hair Loss Solutions</h2>
          <p className="text-slate-500 mb-8 max-w-md leading-relaxed">
            Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies mi quis hendrerit.
          </p>
          <div className="flex gap-8 border-b border-slate-200">
            <button className="font-bold text-sm uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-3 -mb-[2px]">Hairgrowth Cycle</button>
            <button className="font-bold text-sm uppercase tracking-wider text-slate-400 hover:text-slate-600 transition pb-3">Types Of Hair Loss</button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 relative flex justify-end">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[12px] border-[#F9F7F2] shadow-xl relative lg:-right-8">
            <Image 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
              alt="Doctor examining scalp with tool" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div className="relative bg-white border border-slate-100 rounded-[2.5rem] lg:rounded-[4rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden shadow-[0_30px_70px_-24px_rgba(15,23,42,0.12)]">
        <div className="lg:w-1/2 relative z-10 lg:order-1">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-6">Amazing results, every time</h2>
          <p className="text-slate-500 mb-8 max-w-md leading-relaxed">
            Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies mi quis hendrerit.
          </p>
          <div className="flex gap-8 border-b border-slate-200 mb-6">
            <button className="font-bold text-sm uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-3 -mb-[2px]">Hairgrowth Cycle</button>
            <button className="font-bold text-sm uppercase tracking-wider text-slate-400 hover:text-slate-600 transition pb-3">Types Of Hair Loss</button>
          </div>
          <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
             <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Affordable Prices
             </li>
             <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> International Standards
             </li>
          </ul>
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 relative flex justify-start lg:order-0">
           {/* Offset circle visually */}
           <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[12px] border-[#F9F7F2] shadow-xl relative lg:-left-8">
            <Image 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
              alt="Two doctors conversing" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div className="relative bg-white border border-slate-100 rounded-[2.5rem] lg:rounded-[4rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.02)]">
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-6">Natural Looking Results</h2>
          <p className="text-slate-500 mb-8 max-w-md leading-relaxed">
            Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies mi quis hendrerit.
          </p>
          <div className="flex gap-8 border-b border-slate-200 mb-6">
            <button className="font-bold text-sm uppercase tracking-wider text-slate-400 hover:text-slate-600 transition pb-3">Hairgrowth Cycle</button>
            <button className="font-bold text-sm uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-3 -mb-[2px]">Types Of Hair Loss</button>
          </div>
          <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
             <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Affordable Prices
             </li>
             <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> International Standards
             </li>
             <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Advanced Techniques
             </li>
             <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Life Long Results
             </li>
          </ul>
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 relative flex justify-end">
           <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[12px] border-[#F9F7F2] shadow-xl relative lg:-right-8">
            <Image 
              src="https://images.unsplash.com/photo-1584820927498-cafe4c23dbfa?auto=format&fit=crop&q=80&w=800" 
              alt="Patient after procedure" 
              fill
              className="object-cover"
            />
          </div>
          
          {/* Decorative arrow floating nearby */}
          <div className="absolute -bottom-4 right-16 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-blue-600">
             <ArrowUp className="rotate-45" size={20} />
          </div>
        </div>
      </div>

    </section>
  );
}
