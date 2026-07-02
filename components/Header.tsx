"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/results', label: 'Results' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      {/* ─── Top Bar ─── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent border-b border-white/10'
            : 'bg-white border-b border-gray-100 shadow-sm'
        }`}
      >
        {/* Phone + Appointment row */}
        <div
          className={`hidden lg:flex items-center justify-end gap-6 px-12 py-3 border-b transition-colors duration-500 ${
            transparent ? 'border-white/10' : 'border-gray-100'
          }`}
        >
          <a
            href="tel:+1-555-234-5678"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              transparent ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            +1-555-234-5678
          </a>
          <Link href="/contact" className="themeht-btn primary-btn !py-2 !px-6 !text-xs">
            Book Appointment
          </Link>
        </div>

        {/* Main Nav Row */}
        <nav className="flex items-center justify-between px-8 lg:px-12 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div
              className={`flex items-center gap-2 transition-colors ${
                transparent ? 'text-white' : 'text-[#222222]'
              }`}
            >
              <HairIcon className="w-8 h-8 text-[#2458B3]" />
              <span
                style={{ fontFamily: 'var(--font-chivo), Chivo, serif', fontWeight: 500, fontSize: '24px', letterSpacing: '-0.02em' }}
              >
                Hairise
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={`text-sm font-semibold uppercase transition-colors py-2 block ${
                      transparent
                        ? 'text-white/90 hover:text-white'
                        : active
                        ? 'text-[#2458B3]'
                        : 'text-[#444] hover:text-[#2458B3]'
                    }`}
                    style={{ letterSpacing: '0.08em' }}
                  >
                    {link.label}
                  </Link>
                  <span 
                    className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${
                      transparent ? 'bg-white' : 'bg-[#2458B3]'
                    } ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </li>
              );
            })}
          </ul>

          {/* Right: Social + Search */}
          <div className="hidden lg:flex items-center gap-4">
            {[
              { label: 'Facebook', Icon: FacebookIcon },
              { label: 'Twitter', Icon: TwitterIcon },
              { label: 'Instagram', Icon: InstagramIcon },
            ].map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className={`transition-colors ${
                  transparent ? 'text-white/70 hover:text-white' : 'text-gray-400 hover:text-[#2458B3]'
                }`}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <div className={`w-px h-4 mx-1 ${transparent ? 'bg-white/20' : 'bg-gray-200'}`} />
            <button
              aria-label="Search"
              className={`transition-colors ${
                transparent ? 'text-white/70 hover:text-white' : 'text-gray-400 hover:text-[#2458B3]'
              }`}
            >
              <SearchIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <XIcon className={`w-6 h-6 ${transparent ? 'text-white' : 'text-[#222]'}`} />
            ) : (
              <MenuIcon className={`w-6 h-6 ${transparent ? 'text-white' : 'text-[#222]'}`} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0f172a] pt-28 px-8 flex flex-col gap-6 lg:hidden transition-transform duration-500 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-white/90 hover:text-white text-2xl font-medium tracking-wide border-b border-white/10 pb-4 transition-colors"
            style={{ fontFamily: 'var(--font-chivo), Chivo, serif' }}
          >
            {link.label}
          </Link>
        ))}
        <Link 
          href="/contact" 
          onClick={() => setMobileOpen(false)}
          className="themeht-btn primary-btn mt-4 self-start"
        >
          Book Appointment
        </Link>
      </div>

      {/* Spacer for non-transparent pages */}
      {!isHome && <div className="h-28" />}
    </>
  );
}

/* ─── Inline Icon Components ─── */
function PhoneIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
function HairIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 2C11.58 2 8 5.58 8 10c0 2.5 1.1 4.74 2.85 6.28L9.5 26h13l-1.35-9.72C22.9 14.74 24 12.5 24 10c0-4.42-3.58-8-8-8zm0 3a5 5 0 11-.001 10.001A5 5 0 0116 5z" />
    </svg>
  );
}
function FacebookIcon({ className = '' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
    </svg>
  );
}
function TwitterIcon({ className = '' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}
function InstagramIcon({ className = '' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
function SearchIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function MenuIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function XIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
