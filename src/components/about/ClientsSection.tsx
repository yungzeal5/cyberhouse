import React from 'react';

export default function ClientsSection() {
  const clients = [
    { name: 'Major Financial Institution', industry: 'Banking' },
    { name: 'Healthcare Network', industry: 'Healthcare' },
    { name: 'Government Agency', industry: 'Public Sector' },
    { name: 'Tech Startup Hub', industry: 'Technology' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Trusted By Industry Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg"
            >
              <p className="font-semibold text-lg text-center">{client.name}</p>
              <p className="text-gray-600 text-sm">{client.industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}