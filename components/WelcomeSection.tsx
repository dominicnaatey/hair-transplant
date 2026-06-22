import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-16">
      {/* Left Column - Text */}
      <div className="lg:w-1/3">
        <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">Better For You</div>
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-[1.2]">
          Welcome to our<br/>Hair Transplant<br/>Center
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin. Curabitur vitae nunc sed.
        </p>
        <ul className="space-y-4 mb-10">
          <li className="flex items-center gap-3 text-sm text-slate-800 font-medium">
            <CheckCircle2 className="text-blue-600" size={20} /> Best Clinic for safe Procedure
          </li>
          <li className="flex items-center gap-3 text-sm text-slate-800 font-medium">
            <CheckCircle2 className="text-blue-600" size={20} /> Advanced Non-touch Bio FUE
          </li>
        </ul>
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition">
          About Us
        </button>
      </div>

      {/* Middle Column - Illustration */}
      <div className="lg:w-1/3 flex justify-center relative">
         <Image 
           src="https://placehold.co/600x800/EAE7DE/A3B18A?text=Hair+Follicle+Diagram" 
           alt="Skin and Hair Follicle Anatomy Diagram" 
           width={350} height={450} 
           className="w-full max-w-[320px] object-contain"
         />
      </div>

      {/* Right Column - Stats */}
      <div className="lg:w-1/3 flex flex-col gap-10">
         {/* Stat 1 */}
         <div className="flex items-start gap-5">
           <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-lg shadow-blue-600/30">
             100%
           </div>
           <div>
             <h4 className="font-bold text-slate-900 text-lg mb-1 font-serif">Report Efficiency</h4>
             <p className="text-slate-500 text-sm leading-relaxed">Vestibulum morbi blandit cursus risus. Augue neque gravida.</p>
           </div>
         </div>
         
         {/* Stat 2 */}
         <div className="flex items-start gap-5">
           <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-lg shadow-blue-600/30">
             200k
           </div>
           <div>
             <h4 className="font-bold text-slate-900 text-lg mb-1 font-serif">Complete Cases</h4>
             <p className="text-slate-500 text-sm leading-relaxed">Vestibulum morbi blandit cursus risus. Augue neque gravida.</p>
           </div>
         </div>

         {/* Stat 3 */}
         <div className="flex items-start gap-5">
           <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-lg shadow-blue-600/30">
             650+
           </div>
           <div>
             <h4 className="font-bold text-slate-900 text-lg mb-1 font-serif">Our Equipment</h4>
             <p className="text-slate-500 text-sm leading-relaxed">Vestibulum morbi blandit cursus risus. Augue neque gravida.</p>
           </div>
         </div>
      </div>
    </section>
  );
}
