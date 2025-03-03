import React from 'react';
import { Shield, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../../dist/assets/logo/Cyberhouse logo gradient gold.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-start justify-center space-x-2">
              {/* <Shield className="h-8 w-8 text-blue-400" /> */}
              <img src={Logo} alt="dist/assets/logo/Cyberhouse logo gradient gold.png" className="h-[200px] w-[200px]" />
              
            </div>
           
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">Home</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white">About</Link>
              <Link to="/services" className="block text-gray-400 hover:text-white">Services</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>cyberhouse008@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Ghana</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CyberHouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}