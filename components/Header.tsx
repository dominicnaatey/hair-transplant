import React from 'react';
import { Search, Phone, LayoutGrid } from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './BrandIcons';

export default function Header() {
  return (
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
  );
}
