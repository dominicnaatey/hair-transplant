import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FeaturesRow() {
  return (
    <div className="container mx-auto px-6 lg:px-12 relative z-20 -mt-24 mb-24 lg:mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between h-56 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden cursor-pointer">
          <div className="flex justify-between items-start">
             <span className="text-slate-300 text-sm font-semibold">01</span>
             <div className="text-blue-600">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
               </svg>
             </div>
          </div>
          <div className="pb-4">
             <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Transplant</div>
             <h3 className="font-bold text-lg text-slate-800 font-serif leading-tight">Hair Loss<br/>Medication</h3>
          </div>
          <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
             <ArrowRight size={18} className="text-slate-600" />
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white p-8 rounded-[1.75rem] shadow-[0_20px_55px_-16px_rgba(15,23,42,0.12)] border border-slate-100 flex flex-col justify-between h-56 group hover:-translate-y-2 hover:shadow-[0_28px_65px_-20px_rgba(15,23,42,0.18)] transition-all duration-300 relative overflow-hidden cursor-pointer animate-fade-up" style={{ animationDelay: '120ms' }}>
          <div className="flex justify-between items-start">
             <span className="text-slate-300 text-sm font-semibold">02</span>
             <div className="text-blue-600">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.795 0-5.482-.205-8.035-.597-1.717-.293-2.3-2.379-1.067-3.61L5 14.5" />
               </svg>
             </div>
          </div>
          <div className="pb-4">
             <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Regrowth</div>
             <h3 className="font-bold text-lg text-slate-800 font-serif leading-tight">Dandruff<br/>Treatment</h3>
          </div>
          <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
             <ArrowRight size={18} className="text-slate-600" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-[1.75rem] shadow-[0_20px_55px_-16px_rgba(15,23,42,0.12)] border border-slate-100 flex flex-col justify-between h-56 group hover:-translate-y-2 hover:shadow-[0_28px_65px_-20px_rgba(15,23,42,0.18)] transition-all duration-300 relative overflow-hidden cursor-pointer animate-fade-up" style={{ animationDelay: '240ms' }}>
          <div className="flex justify-between items-start">
             <span className="text-slate-300 text-sm font-semibold">03</span>
             <div className="text-blue-600">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </div>
          </div>
          <div className="pb-4">
             <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Treatment</div>
             <h3 className="font-bold text-lg text-slate-800 font-serif leading-tight">Advanced<br/>Treatment</h3>
          </div>
          <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
             <ArrowRight size={18} className="text-slate-600" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-8 rounded-[1.75rem] shadow-[0_20px_55px_-16px_rgba(15,23,42,0.12)] border border-slate-100 flex flex-col justify-between h-56 group hover:-translate-y-2 hover:shadow-[0_28px_65px_-20px_rgba(15,23,42,0.18)] transition-all duration-300 relative overflow-hidden cursor-pointer animate-fade-up" style={{ animationDelay: '360ms' }}>
          <div className="flex justify-between items-start">
             <span className="text-slate-300 text-sm font-semibold">04</span>
             <div className="text-blue-600">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
               </svg>
             </div>
          </div>
          <div className="pb-4">
             <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Research</div>
             <h3 className="font-bold text-lg text-slate-800 font-serif leading-tight">Pattern<br/>Baldness</h3>
          </div>
          <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
             <ArrowRight size={18} className="text-slate-600" />
          </div>
        </div>

      </div>
    </div>
  );
}
