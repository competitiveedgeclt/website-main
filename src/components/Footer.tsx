import React from 'react';
import { Phone, Mail, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#030303] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              The <span className="text-[#1C9770]">Competitive Edge</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Elite athletic training for serious competitors. Professional run coaching and athletic performance training in Charlotte, North Carolina for dedicated middle school, high school, and college athletes.
            </p>
            <div className="flex space-x-4">
              <a href="tel:240-328-7404" className="text-gray-400 hover:text-[#7AD1C3] transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="mailto:coach@competitiveedgeclt.com" className="text-gray-400 hover:text-[#7AD1C3] transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/jmwi22" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#7AD1C3] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#7AD1C3]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Coach Jocelyn</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Training Services</a></li>
              <li><a href="#camps" className="text-gray-400 hover:text-white transition-colors">Summer Camps</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#7AD1C3]">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Private Coaching</span></li>
              <li><span className="text-gray-400">Semi-Private Training</span></li>
              <li><span className="text-gray-400">Summer Camps</span></li>
              <li><span className="text-gray-400">Specialized Clinics</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 The Competitive Edge. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              Made with <Heart className="w-4 h-4 mx-1 text-[#1C9770]" /> for young athletes
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;