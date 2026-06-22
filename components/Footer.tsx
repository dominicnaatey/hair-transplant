"use client";

import React from 'react';
import { MapPin, Mail, Phone, ArrowUp } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './BrandIcons';

export default function Footer() {
  return (
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
           <button className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <ArrowUp size={16} />
           </button>
         </div>

      </div>
    </footer>
  );
}
