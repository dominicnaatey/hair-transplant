"use client";

import Link from 'next/link';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Team Member', href: '/team' },
  { label: 'Our History', href: '/history' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];
const servicesLinks = [
  { label: 'Hair Loss Diagnosis', href: '/services' },
  { label: 'Beard Restoration', href: '/services' },
  { label: 'Androgenetic Alopecia', href: '/services' },
  { label: 'Prosthetic Hair', href: '/services' },
  { label: 'Hair Reconstruction', href: '/services' },
];
const resourceLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms And Conditions', href: '/terms-and-conditions' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Knowledge Base', href: '/knowledge-base' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: 'rgba(255,255,255,0.65)' }}>
      {/* ─── Primary Footer ─── */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-20">
        {/* Top: Logo + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-white/10">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#2458B3] flex items-center justify-center">
                <HairLogoIcon className="w-5 h-5 text-white" />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-chivo), Chivo, serif',
                  fontWeight: 500,
                  fontSize: 22,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                Hairise
              </span>
            </div>
            <p style={{ fontSize: 15, lineHeight: '26px', maxWidth: 340, marginBottom: 24 }}>
              Hairise is Ghana's leading hair transplant and restoration center.
              We restore confidence through precision, innovation, and care.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: 'Facebook', icon: <FacebookIcon /> },
                { label: 'Twitter', icon: <TwitterIcon /> },
                { label: 'Instagram', icon: <InstagramIcon /> },
                { label: 'LinkedIn', icon: <LinkedinIcon /> },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:bg-[#2458B3] hover:border-[#2458B3] hover:text-white transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h5
              style={{
                fontFamily: 'var(--font-chivo), Chivo, serif',
                fontSize: 20,
                fontWeight: 500,
                color: '#ffffff',
                marginBottom: 8,
              }}
            >
              Newsletter
            </h5>
            <p style={{ fontSize: 14, marginBottom: 16 }}>Subscribe for the latest hair care updates.</p>
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: 50,
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.07)',
                  color: '#ffffff',
                  fontSize: 14,
                  outline: 'none',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              />
              <button type="submit" className="themeht-btn primary-btn !py-3 !px-6 flex-shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom: 4-column links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
          {/* Contact Us */}
          <div>
            <h5
              style={{
                fontFamily: 'var(--font-chivo), Chivo, serif',
                fontSize: 18,
                fontWeight: 500,
                color: '#ffffff',
                marginBottom: 20,
              }}
            >
              Contact Us
            </h5>
            <ul className="space-y-4">
              {[
                { icon: <PinIcon />, text: '5th Street, New York, USA' },
                { icon: <MailIcon />, text: 'contact@hairise.com' },
                { icon: <PhoneIcon />, text: '+1-555-234-5678' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3" style={{ fontSize: 14 }}>
                  <span className="flex-shrink-0 mt-0.5 text-[#2458B3]">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <FooterLinkCol title="Quick Links" items={quickLinks} />

          {/* Services */}
          <FooterLinkCol title="Services" items={servicesLinks} />

          {/* Resource */}
          <FooterLinkCol title="Resource" items={resourceLinks} />
        </div>
      </div>

      {/* ─── Secondary Footer ─── */}
      <div
        className="text-center py-5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: 13 }}
      >
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved |{' '}
        <span style={{ color: '#2458B3' }}>Hairise</span> — Advanced Hair Transplant Clinic
      </div>
    </footer>
  );
}

function FooterLinkCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h5
        style={{
          fontFamily: 'var(--font-chivo), Chivo, serif',
          fontSize: 18,
          fontWeight: 500,
          color: '#ffffff',
          marginBottom: 20,
        }}
      >
        {title}
      </h5>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              className="hover:text-[#2458B3]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Icons */
function HairLogoIcon({ className = '' }) {
  return <svg className={className} viewBox="0 0 32 32" fill="currentColor"><path d="M16 4C11.58 4 8 7.58 8 12c0 2.5 1.1 4.74 2.85 6.28L9.5 28h13l-1.35-9.72C22.9 16.74 24 14.5 24 12c0-4.42-3.58-8-8-8zm0 3a5 5 0 11-.001 10.001A5 5 0 0116 7z" /></svg>;
}
function FacebookIcon() {
  return <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" /></svg>;
}
function TwitterIcon() {
  return <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>;
}
function InstagramIcon() {
  return <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>;
}
function LinkedinIcon() {
  return <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
}
function PinIcon() {
  return <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
}
function MailIcon() {
  return <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
}
function PhoneIcon() {
  return <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
}
