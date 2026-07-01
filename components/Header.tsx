"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Phone, LayoutGrid } from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './BrandIcons';

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

  const headerClass = isHome
    ? 'absolute top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-slate-950/10 px-6 py-6 text-white shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur-md lg:px-12'
    : 'sticky top-0 z-50 flex w-full items-center justify-between border-b border-slate-200/70 bg-white/95 px-6 py-5 text-slate-900 shadow-sm backdrop-blur-md lg:px-12';

  const navLinkClass = isHome
    ? 'transition hover:text-blue-200 uppercase'
    : 'transition text-slate-600 hover:text-slate-900 uppercase';

  const iconGroupClass = isHome ? 'flex items-center gap-4 text-white/80' : 'flex items-center gap-4 text-slate-500';

  return (
    <header className={headerClass}>
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
        <span className="font-serif text-2xl font-bold tracking-wide">Hairise</span>
      </Link>

      <nav className="hidden items-center gap-8 text-xs font-semibold tracking-wider lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              link.href === '/' && isHome
                ? 'rounded bg-white px-4 py-1.5 text-slate-900 uppercase'
                : link.href === '/' && !isHome
                ? 'rounded bg-slate-100 px-4 py-1.5 text-slate-900 uppercase'
                : navLinkClass
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden items-center gap-6 md:flex">
        <div className={iconGroupClass}>
          <Search size={18} className="cursor-pointer transition hover:text-current" />
          <FacebookIcon size={18} className="cursor-pointer transition hover:text-current" />
          <TwitterIcon size={18} className="cursor-pointer transition hover:text-current" />
          <InstagramIcon size={18} className="cursor-pointer transition hover:text-current" />
        </div>
        <div className="hidden items-center gap-2 text-sm font-medium xl:flex text-slate-700">
          <Phone size={16} />
          <span>+91-234-567-8900</span>
        </div>
        <Link
          href="/contact"
          className={isHome ? 'rounded-full bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-blue-700' : 'rounded-full bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-blue-700'}
        >
          Appointment
        </Link>
        <LayoutGrid size={24} className="lg:hidden cursor-pointer" />
      </div>
    </header>
  );
}
