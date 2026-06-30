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
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen relative font-sans overflow-x-hidden">
      <div id="home" className="scroll-mt-24">
        <Header />
      </div>
      <div className="section-reveal motion-safe">
        <Hero />
      </div>
      <div id="services" className="scroll-mt-24 section-reveal motion-safe">
        <FeaturesRow />
      </div>
      <div className="section-reveal motion-safe">
        <WelcomeSection />
      </div>
      <div id="solutions" className="scroll-mt-24 section-reveal motion-safe">
        <SolutionsSection />
      </div>
      <div className="motion-safe">
        <MarqueeBanner />
      </div>
      <div id="diagnosis" className="scroll-mt-24 section-reveal motion-safe">
        <DiagnosisSection />
      </div>
      <div id="results" className="scroll-mt-24 section-reveal motion-safe">
        <CaseStudies />
      </div>
      <div id="testimonials" className="scroll-mt-24 section-reveal motion-safe">
        <TestimonialSection />
      </div>
      <div id="contact" className="scroll-mt-24 section-reveal motion-safe">
        <ContactSection />
      </div>
      {/* Blog section temporarily commented out while blog pages are not being added. */}
      {/* <div id="blog" className="scroll-mt-24 section-reveal motion-safe">
        <BlogSection />
      </div> */}
      <Footer />
    </main>
  );
}
