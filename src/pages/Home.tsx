import React, { lazy, Suspense } from 'react';
import { Shield, Lock, Server, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { backgrounds, overlayStyles } from '../styles/backgrounds';
import ServiceCard from '../components/ServiceCard';
import Image from "../styles/cyberhouseimg/ch.jpg"

// Lazy load components
const SecurityCarousel = lazy(() => import('../components/home/SecurityCarousel'));
const ThreatAlerts = lazy(() => import('../components/home/ThreatAlerts'));
const SecurityTips = lazy(() => import('../components/home/SecurityTips'));

export default function Home() {
  const services = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Cybersecurity Consultancy',
      description: 'Expert guidance on securing your digital infrastructure.',
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: 'Threat Management',
      description: 'Proactive threat detection and response services.',
    },
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: 'Managed Security',
      description: '24/7 monitoring and security management solutions.',
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Security Training',
      description: 'Comprehensive security awareness training programs.',
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgrounds.hero})` }}
        />
        <div className={`absolute inset-0 ${overlayStyles.gradient}`} />

        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            CyberHouse
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            SECURING TOMORROW, TODAY
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-all"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-md font-medium hover:bg-white/20 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <SecurityCarousel />
              <ThreatAlerts />
            </div>
            <SecurityTips />
          </Suspense>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}