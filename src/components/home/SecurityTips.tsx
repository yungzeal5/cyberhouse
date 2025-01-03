import React from 'react';
import { Shield, Lock, Eye, Smartphone } from 'lucide-react';

export default function SecurityTips() {
  const tips = [
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "Use Strong Passwords",
      description: "Create unique passwords with a mix of letters, numbers, and symbols."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Enable 2FA",
      description: "Add an extra layer of security with two-factor authentication."
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-600" />,
      title: "Stay Vigilant",
      description: "Be cautious of suspicious emails, links, and attachments."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-orange-600" />,
      title: "Secure Your Devices",
      description: "Keep your software and systems updated with the latest patches."
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Security Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">{tip.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}