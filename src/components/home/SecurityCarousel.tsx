import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Lock, Wifi, Database, Users } from 'lucide-react';

interface Slide {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function SecurityCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      icon: <AlertTriangle className="h-12 w-12" />,
      title: "Phishing Attacks",
      description: "Learn to identify and avoid sophisticated email scams targeting your data.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Lock className="h-12 w-12" />,
      title: "Password Security",
      description: "Use strong, unique passwords and enable two-factor authentication.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Wifi className="h-12 w-12" />,
      title: "Public WiFi Risks",
      description: "Protect yourself when using public networks with VPN solutions.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Data Breaches",
      description: "Stay informed about the latest data breaches affecting your accounts.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Social Engineering",
      description: "Recognize and prevent social engineering attempts targeting you.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg p-6">
      <div className="relative h-64">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`h-full flex flex-col items-center justify-center p-6 bg-gradient-to-r ${slide.color} text-white rounded-lg`}>
              <div className="mb-4">{slide.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
              <p className="text-center">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}