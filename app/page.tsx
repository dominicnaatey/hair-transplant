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
    <main className="min-h-screen relative font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <FeaturesRow />
      <WelcomeSection />
      <SolutionsSection />
      <MarqueeBanner />
      <DiagnosisSection />
      <CaseStudies />
      <TestimonialSection />
      <ContactSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
