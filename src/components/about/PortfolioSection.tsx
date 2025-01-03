import React from 'react';
import { Shield, Lock, Server, Code, Terminal, GraduationCap } from 'lucide-react';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  icon: React.ReactNode;
}

export default function PortfolioSection() {
  const portfolioItems: PortfolioItem[] = [
    {
      title: 'E-commerce Platform Development',
      description: 'Built a secure, scalable e-commerce platform with integrated payment systems and advanced security features.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      tags: ['Web Development', 'E-commerce', 'Security'],
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: 'Security Assessment Program',
      description: 'Conducted comprehensive penetration testing and vulnerability assessment for a financial institution.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
      tags: ['Penetration Testing', 'Security Audit', 'Finance'],
      icon: <Terminal className="h-6 w-6" />,
    },
    {
      title: 'Healthcare Mobile App',
      description: 'Developed a HIPAA-compliant mobile application for patient data management and secure communication.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
      tags: ['Mobile Development', 'Healthcare', 'Compliance'],
      icon: <Lock className="h-6 w-6" />,
    },
    {
      title: 'Coding Bootcamp Program',
      description: 'Designed and delivered a comprehensive 12-week coding bootcamp focusing on web development and security.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      tags: ['Education', 'Web Development', 'Security'],
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: 'Government Security Infrastructure',
      description: 'Modernized cybersecurity infrastructure implementing zero-trust architecture and advanced monitoring.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      tags: ['Infrastructure', 'Zero Trust', 'Government'],
      icon: <Server className="h-6 w-6" />,
    },
    {
      title: 'Corporate Security Training',
      description: 'Developed and delivered custom security awareness and coding best practices training programs.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
      tags: ['Training', 'Security', 'Corporate'],
      icon: <Shield className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                  {item.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}