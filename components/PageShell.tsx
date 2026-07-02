import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ReactNode } from 'react';

interface PageShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageShell({ title, subtitle, children, breadcrumbs = [] }: PageShellProps) {
  return (
    <>
      <Header />

      {/* ─── Page Banner ─── */}
      <section className="page-banner">
        <div className="page-banner-overlay" />

        {/* Decorative circles */}
        <div
          className="absolute animate-float pointer-events-none"
          style={{
            top: '20%',
            right: '15%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        />
        <div
          className="absolute animate-float-slow pointer-events-none"
          style={{
            top: '40%',
            right: '30%',
            width: 120,
            height: 120,
            borderRadius: '50%',
            border: '1px solid rgba(36,88,179,0.3)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-40px',
            left: '10%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(36,88,179,0.2), transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-0 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="breadcrumb-item hover:text-white transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center">
                  <span className="breadcrumb-separator">/</span>
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="breadcrumb-item hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="breadcrumb-item active">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Title */}
          <h1 className="mb-4" style={{ fontFamily: 'var(--font-chivo), Chivo, serif' }}>{title}</h1>

          {subtitle && (
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 18,
                color: 'rgba(255,255,255,0.65)',
                maxWidth: 560,
                lineHeight: '28px',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* ─── Page Content ─── */}
      <main className="w-full">{children}</main>

      <Footer />
    </>
  );
}
