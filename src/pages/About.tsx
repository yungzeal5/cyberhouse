import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';
import PortfolioSection from '../components/about/PortfolioSection';
import ClientsSection from '../components/about/ClientsSection';
import SocialLinks from '../components/social/SocialLinks';
import { backgrounds, overlayStyles } from '../styles/backgrounds';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section with Dynamic Background */}
      <section className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgrounds.about})` }}
        />
        <div className={`absolute inset-0 ${overlayStyles.gradient}`} />
        
        <div className="relative py-20">
          <AboutHero />
        </div>
      </section>

      <div className="bg-gradient-to-b from-gray-900 to-blue-900">
        <AboutContent />
        <PortfolioSection />
        <ClientsSection />
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="backdrop-blur-md bg-white/95 rounded-lg shadow-xl p-8">
              <SocialLinks />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}