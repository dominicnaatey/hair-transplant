"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, ArrowUp } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="relative mx-4 mb-8 overflow-hidden rounded-[3rem] bg-slate-900 pb-10 pt-24 text-white lg:mx-8">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-12 border-b border-white/10 pb-16 lg:flex-row">
          <div className="max-w-xs">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide">Hairise</span>
            </div>
            <p className="mb-8 text-sm leading-relaxed text-slate-400">
              Personalized hair restoration care with a calm experience, advanced techniques, and support from consultation to recovery.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-slate-900"><InstagramIcon size={16} /></a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-slate-900"><FacebookIcon size={16} /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-slate-900"><TwitterIcon size={16} /></a>
            </div>
          </div>

          <div className="flex-[2] gap-8 md:grid md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="mb-6 font-serif text-lg font-bold">Contact Us</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-blue-500" /> 5th Street, New York, USA</li>
                <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-blue-500" /> hello@hairise.com</li>
                <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-blue-500" /> +91-234-567-8900</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-serif text-lg font-bold">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/about" className="transition hover:text-white">About Us</Link></li>
                <li><Link href="/results" className="transition hover:text-white">Results</Link></li>
                <li><Link href="/contact" className="transition hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-serif text-lg font-bold">Services</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/services" className="transition hover:text-white">Hair Loss Diagnosis</Link></li>
                <li><Link href="/services" className="transition hover:text-white">Hair Restoration</Link></li>
                <li><Link href="/contact" className="transition hover:text-white">Consultation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-serif text-lg font-bold">Resource</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/contact" className="transition hover:text-white">How We Work</Link></li>
                <li><Link href="/about" className="transition hover:text-white">Our Approach</Link></li>
                <li><Link href="/results" className="transition hover:text-white">Patient Outcomes</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-500 md:flex-row">
          <p>Copyright © 2026 All Rights Reserved | Hairise.</p>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 transition hover:bg-blue-600 hover:text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
