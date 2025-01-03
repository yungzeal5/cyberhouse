import React from 'react';
import { Shield, Code, Brain, Terminal, Lock, GraduationCap } from 'lucide-react';

export default function AboutContent() {
  const specialties = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Cybersecurity Awareness',
      description: 'Educating people about cyber risks and online safety through engaging content and public speaking.',
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: 'Software Development',
      description: 'Building secure, scalable applications using modern technologies and best practices in web and mobile development.',
    },
    {
      icon: <Terminal className="h-8 w-8 text-blue-600" />,
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments and ethical hacking to identify and address vulnerabilities.',
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: 'Security Consulting',
      description: 'Expert guidance on implementing robust security measures and maintaining compliance standards.',
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: 'Coding Education',
      description: 'Structured programming courses and workshops for beginners to advanced developers.',
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'AI & Automation',
      description: 'Leveraging artificial intelligence for enhanced security monitoring and threat detection.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            We are a forward-thinking technology company dedicated to safeguarding digital landscapes and empowering individuals and organizations through innovative solutions. Our comprehensive approach combines cybersecurity expertise with cutting-edge software development and educational initiatives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
            {specialties.map((specialty, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="mb-4">{specialty.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                Our vision is to create a safer, more informed digital world where security empowers innovation rather than stifling it. We believe in making technology accessible and secure for everyone through education and robust solutions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Our Team</h2>
              <p className="text-lg text-gray-600">
                Our diverse team includes cybersecurity experts, full-stack developers, ethical hackers, and experienced educators. Together, we bring a wealth of knowledge and practical experience to every project and training session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}