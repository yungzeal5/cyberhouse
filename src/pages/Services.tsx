import React from 'react';
import { Shield, Lock, Server, Users, Code, Brain } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Security Consultancy',
      description: 'Expert guidance on cybersecurity strategy, risk assessment, and compliance requirements.',
      features: [
        'Security architecture review',
        'Compliance assessment',
        'Risk management',
        'Security roadmap development'
      ]
    },
    {
      icon: <Lock className="h-12 w-12 text-blue-600" />,
      title: 'Threat Management',
      description: 'Comprehensive threat detection, analysis, and response services.',
      features: [
        'Real-time threat monitoring',
        'Incident response',
        'Vulnerability assessment',
        'Penetration testing'
      ]
    },
    {
      icon: <Server className="h-12 w-12 text-blue-600" />,
      title: 'Managed Security',
      description: '24/7 security monitoring and management solutions.',
      features: [
        'Security operations center',
        'Network security monitoring',
        'Cloud security management',
        'Security maintenance'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300">
            Comprehensive cybersecurity solutions for your business
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8">
            Contact us to discuss your specific security requirements
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}