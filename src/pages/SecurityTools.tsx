import React from 'react';
import PasswordChecker from '../components/security/PasswordChecker';
import EmailBreachChecker from '../components/security/EmailBreachChecker';
import { backgrounds, overlayStyles } from '../styles/backgrounds';

export default function SecurityTools() {
  return (
    <div className="pt-16">
      {/* Hero Section with Dynamic Background */}
      <section className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgrounds.security})` }}
        />
        <div className={`absolute inset-0 ${overlayStyles.gradient}`} />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-6 text-white">Security Tools</h1>
          <p className="text-xl text-gray-200">
            Protect your digital presence with our professional security tools
          </p>
        </div>
      </section>

      {/* Tools Section with Glass Effect */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center mb-6 text-white">Password Security</h2>
              <div className="backdrop-blur-md bg-white/95 rounded-lg shadow-xl">
                <PasswordChecker />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center mb-6 text-white">Email Security</h2>
              <div className="backdrop-blur-md bg-white/95 rounded-lg shadow-xl">
                <EmailBreachChecker />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}