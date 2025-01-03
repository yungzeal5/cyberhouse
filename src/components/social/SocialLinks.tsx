import React from 'react';
import { Youtube, Instagram } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center space-y-6 py-8">
      <h2 className="text-2xl font-bold text-gray-800">Connect With Us</h2>
      
      <div className="flex space-x-6">
        <a
          href="https://youtube.com/@cyberhouse-08"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
        >
          <Youtube className="h-8 w-8" />
          <span className="font-medium">YouTube</span>
        </a>
        
        <a
          href="https://www.tiktok.com/@cyberhouse08"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-black hover:text-gray-700 transition-colors"
        >
          <svg 
            viewBox="0 0 24 24" 
            className="h-8 w-8"
            fill="currentColor"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
          <span className="font-medium">TikTok</span>
        </a>

        <a
          href="https://www.instagram.com/cyberhouse008"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors"
        >
          <Instagram className="h-8 w-8" />
          <span className="font-medium">Instagram</span>
        </a>
      </div>
    </div>
  );
}