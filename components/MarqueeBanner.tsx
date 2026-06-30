import React from 'react';

export default function MarqueeBanner() {
  return (
    <div className="py-8 bg-white/80 border-y border-slate-100 overflow-hidden flex whitespace-nowrap mb-0 mt-16 select-none relative z-10 backdrop-blur-sm shadow-[0_8px_30px_-18px_rgba(15,23,42,0.2)]">
      <div className="animate-[marquee_20s_linear_infinite] flex items-center gap-8">
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-slate-900 font-serif font-bold text-2xl tracking-wide">SERVICE WE PROVIDE</span>
            <span className="text-blue-600 font-bold text-2xl">✻</span>
          </React.Fragment>
        ))}
        {/* Duplicate for seamless looping */}
         {[...Array(6)].map((_, i) => (
          <React.Fragment key={`dup-${i}`}>
            <span className="text-slate-900 font-serif font-bold text-2xl tracking-wide">SERVICE WE PROVIDE</span>
            <span className="text-blue-600 font-bold text-2xl">✻</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
