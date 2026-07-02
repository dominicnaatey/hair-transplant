import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesRow from '@/components/FeaturesRow';
import WelcomeSection from '@/components/WelcomeSection';
import SolutionsSection from '@/components/SolutionsSection';
import MarqueeBanner from '@/components/MarqueeBanner';
import DiagnosisSection from '@/components/DiagnosisSection';
import CaseStudies from '@/components/CaseStudies';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Header (absolute, transparent on home) */}
      <Header />

      {/* Hero — full viewport height */}
      <Hero />

      {/* Features strip */}
      <FeaturesRow />

      {/* Welcome / About */}
      <WelcomeSection />

      {/* Solutions — GSAP sticky scroll */}
      <SolutionsSection />

      {/* Marquee banner */}
      <MarqueeBanner />

      {/* Services / Diagnosis */}
      <DiagnosisSection />

      {/* Case Studies grid */}
      <CaseStudies />

      {/* Testimonials + Feature list */}
      <TestimonialSection />

      {/* Contact form */}
      <ContactSection />

      {/* Blog posts */}
      {/* <BlogSection /> */}

      <Footer />
    </main>
  );
}
