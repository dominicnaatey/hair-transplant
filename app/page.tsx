import React from 'react';
import Image from 'next/image';
import { 
  Phone, Search, LayoutGrid, 
  ArrowRight, CheckCircle2, ChevronRight, Star, 
  MapPin, Mail, ArrowUp
} from 'lucide-react';

const FacebookIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);


export default function Page() {
  return (
    <main className="min-h-screen relative font-sans overflow-x-hidden">
      
      {/* ---------------- 1. HEADER & NAVIGATION ---------------- */}
      <header className="absolute top-0 w-full z-50 flex items-center justify-between px-6 lg:px-12 py-6 text-white border-b border-white/10">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
            {/* Simple logo mark */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <span className="text-2xl font-bold font-serif tracking-wide">Hairise</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider">
          <a href="#" className="bg-white text-slate-900 px-4 py-1.5 rounded uppercase">Home</a>
          <a href="#" className="hover:text-blue-200 transition uppercase">Pages</a>
          <a href="#" className="hover:text-blue-200 transition uppercase">Services</a>
          <a href="#" className="hover:text-blue-200 transition uppercase">Portfolio</a>
          <a href="#" className="hover:text-blue-200 transition uppercase">Blog</a>
          <a href="#" className="hover:text-blue-200 transition uppercase">Contact Us</a>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-white/80">
            <Search size={18} className="cursor-pointer hover:text-white transition" />
            <FacebookIcon size={18} className="cursor-pointer hover:text-white transition" />
            <TwitterIcon size={18} className="cursor-pointer hover:text-white transition" />
            <InstagramIcon size={18} className="cursor-pointer hover:text-white transition" />
          </div>
          <div className="hidden xl:flex items-center gap-2 text-sm font-medium">
            <Phone size={16} />
            <span>+91-234-567-8900</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition">
            Appointment
          </button>
          <LayoutGrid size={24} className="lg:hidden cursor-pointer" />
        </div>
      </header>

      {/* ---------------- 2. HERO SECTION ---------------- */}
      <section className="relative pt-48 pb-64 lg:pt-64 lg:pb-80 flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1920" 
            alt="Surgery Room Background" 
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
              Technique of Hair Transplant
            </div>
            <h1 className="text-5xl md:text-7xl text-white font-serif font-bold leading-[1.1] mb-8">
              Hair Transplant<br/>Proven Results
            </h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full transition shadow-lg shadow-blue-500/30">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- 3. FEATURES ROW (Overlapping) ---------------- */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 -mt-24 mb-32">
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
          <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between h-56 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden cursor-pointer">
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
          <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between h-56 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden cursor-pointer">
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
          <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between h-56 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden cursor-pointer">
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

      {/* ---------------- 4. WELCOME SECTION ---------------- */}
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

      {/* ---------------- 5. SOLUTIONS (Alternating Curved Boxes) ---------------- */}
      <section className="container mx-auto px-6 lg:px-12 py-16 space-y-12">
        
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
        <div className="relative bg-white border border-slate-100 rounded-[2.5rem] lg:rounded-[4rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.02)]">
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

      {/* ---------------- 6. MARQUEE BANNER ---------------- */}
      <div className="py-8 bg-white border-y border-slate-100 overflow-hidden flex whitespace-nowrap mb-0 mt-16 select-none relative z-10">
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

      {/* ---------------- 7. DIAGNOSIS LIST SECTION ---------------- */}
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

      {/* ---------------- 8. CASE STUDIES ---------------- */}
      <section className="container mx-auto px-6 lg:px-12 py-32 bg-[#F9F7F2]">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 block">Research</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-slate-900 mb-6">Latest From Case Studies</h2>
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
             <Image src="https://placehold.co/600x800/EAE7DE/A3B18A?text=Patient+Head+Markings" alt="Case Study 3" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
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
          Some select projects that showcase. <a href="#" className="border-b-2 border-blue-600 text-blue-600 pb-1 ms-1 hover:text-blue-700 transition">View all</a>
        </div>
      </section>

      {/* ---------------- 9. TESTIMONIAL & FEATURES ---------------- */}
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
              Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies mi quis hendrerit Vestibulum morbi blandit cursus risus. Augue neque gravida.
            </p>
            
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" alt="Simon Amour" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Simon Amour</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Technical Director</p>
              </div>
            </div>

            <div className="flex gap-2 mt-8 lg:mt-12 justify-end w-full max-w-xl">
               <div className="w-2.5 h-2.5 rounded-full bg-blue-600 opacity-100" />
               <div className="w-2.5 h-2.5 rounded-full border border-slate-300 opacity-60" />
               <div className="w-2.5 h-2.5 rounded-full border border-slate-300 opacity-60" />
            </div>
          </div>

          {/* Right: Features */}
          <div className="lg:w-1/2 flex flex-col justify-center">
             
             <div className="pb-10 border-b border-slate-200">
                <div className="text-blue-600 mb-4">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                 </svg>
                </div>
                <h4 className="font-bold text-slate-900 text-xl font-serif mb-3">Hair Loss Medication</h4>
                <p className="text-slate-500 leading-relaxed">Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.</p>
             </div>

             <div className="pt-10">
                <div className="text-blue-600 mb-4">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.795 0-5.482-.205-8.035-.597-1.717-.293-2.3-2.379-1.067-3.61L5 14.5" />
                 </svg>
                </div>
                <h4 className="font-bold text-slate-900 text-xl font-serif mb-3">Advanced Dandruff Treatment</h4>
                <p className="text-slate-500 leading-relaxed">Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.</p>
             </div>

          </div>
        </div>
      </section>

      {/* ---------------- 10. CONTACT / BOOKING (Floating Block) ---------------- */}
      <section className="relative pt-0 pb-32">
        <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 h-[500px] z-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1400" 
            alt="Smiling Doctor" 
            fill
            className="object-cover object-top opacity-90"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 lg:h-[500px] flex items-center justify-end -mt-20 lg:-mt-0">
          
          <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] max-w-xl w-full border border-slate-50 relative">
             <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.89 1.14l-2.8.933a.75.75 0 01-.94-.94l.933-2.8a4.5 4.5 0 011.14-1.89l13.432-13.432z" /></svg>
             </div>
             
             <h2 className="text-3xl lg:text-4xl font-bold font-serif text-slate-800 mb-8">Let's Get In Touch</h2>
             
             <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-[#F5F7FA] p-4 rounded-2xl border border-transparent focus:border-blue-200 outline-none transition text-sm text-slate-700" />
                  <input type="email" placeholder="Your Email" className="w-full bg-[#F5F7FA] p-4 rounded-2xl border border-transparent focus:border-blue-200 outline-none transition text-sm text-slate-700" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone Number" className="w-full bg-[#F5F7FA] p-4 rounded-2xl border border-transparent focus:border-blue-200 outline-none transition text-sm text-slate-700" />
                  <div className="relative">
                     <select className="w-full bg-[#F5F7FA] p-4 rounded-2xl border border-transparent focus:border-blue-200 outline-none transition text-sm text-slate-500 appearance-none">
                       <option value="">Select Service</option>
                       <option value="transplant">Hair Transplant</option>
                       <option value="dandruff">Dandruff Treatment</option>
                       <option value="prp">PRP Treatment</option>
                     </select>
                     <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 rotate-90 pointer-events-none" size={16} />
                  </div>
                </div>
                <textarea placeholder="Message" rows={4} className="w-full bg-[#F5F7FA] p-4 rounded-2xl border border-transparent focus:border-blue-200 outline-none transition text-sm text-slate-700 resize-none"></textarea>
                
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wider uppercase px-10 py-4 rounded-full transition mt-4 shadow-lg shadow-blue-500/20">
                  Send Message
                </button>
             </form>
          </div>

        </div>
      </section>

      {/* ---------------- 11. BLOG SECTION ---------------- */}
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

      {/* ---------------- 12. FOOTER ---------------- */}
      <footer className="bg-slate-900 text-white pt-24 pb-10 mx-4 lg:mx-8 mb-8 rounded-[3rem] overflow-hidden relative">
        <div className="container mx-auto px-8 lg:px-16">
           
           <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-white/10 pb-16">
              
              {/* Brand Col */}
              <div className="max-w-xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  </div>
                  <span className="text-2xl font-bold font-serif tracking-wide">Hairise</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin.
                </p>
                <div className="flex items-center gap-4 text-slate-400">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition"><FacebookIcon size={16} /></a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition"><InstagramIcon size={16} /></a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition"><TwitterIcon size={16} /></a>
                </div>
              </div>

              {/* Links Grid */}
              <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8">
                 <div>
                   <h4 className="font-bold font-serif text-lg mb-6">Contact Us</h4>
                   <ul className="space-y-4 text-slate-400 text-sm">
                     <li className="flex gap-3"><MapPin size={18} className="shrink-0 mt-0.5 text-blue-500" /> 5th Street, New York, USA</li>
                     <li className="flex gap-3"><Mail size={18} className="shrink-0 mt-0.5 text-blue-500" /> themeht23@gmail.com</li>
                     <li className="flex gap-3"><Phone size={18} className="shrink-0 mt-0.5 text-blue-500" /> +91-234-567-8900</li>
                   </ul>
                 </div>
                 
                 <div>
                   <h4 className="font-bold font-serif text-lg mb-6">Quick Links</h4>
                   <ul className="space-y-3 text-slate-400 text-sm">
                     <li><a href="#" className="hover:text-white transition">About Us</a></li>
                     <li><a href="#" className="hover:text-white transition">Team Member</a></li>
                     <li><a href="#" className="hover:text-white transition">Our History</a></li>
                     <li><a href="#" className="hover:text-white transition">Faq</a></li>
                     <li><a href="#" className="hover:text-white transition">Contact</a></li>
                   </ul>
                 </div>

                 <div>
                   <h4 className="font-bold font-serif text-lg mb-6">Services</h4>
                   <ul className="space-y-3 text-slate-400 text-sm">
                     <li><a href="#" className="hover:text-white transition">Hair Loss Diagnosis</a></li>
                     <li><a href="#" className="hover:text-white transition">Beard Restoration</a></li>
                     <li><a href="#" className="hover:text-white transition">Androgenetic Alopecia</a></li>
                     <li><a href="#" className="hover:text-white transition">Prosthetic Hair</a></li>
                     <li><a href="#" className="hover:text-white transition">Hair Reconstruction</a></li>
                   </ul>
                 </div>

                 <div>
                   <h4 className="font-bold font-serif text-lg mb-6">Resource</h4>
                   <ul className="space-y-3 text-slate-400 text-sm">
                     <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                     <li><a href="#" className="hover:text-white transition">Terms And Conditions</a></li>
                     <li><a href="#" className="hover:text-white transition">Career</a></li>
                     <li><a href="#" className="hover:text-white transition">How We Work</a></li>
                     <li><a href="#" className="hover:text-white transition">Knowledge Base</a></li>
                   </ul>
                 </div>
              </div>

           </div>

           <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
             <p>Copyright © 2024 All Rights Reserved | Hairise Made by ThemeHt.</p>
             <button className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
               <ArrowUp size={16} />
             </button>
           </div>

        </div>
      </footer>

    </main>
  );
}
