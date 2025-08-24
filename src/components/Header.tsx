import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              The <span className="text-[#1C9770]">Competitive Edge</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-[#1C9770] transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-[#1C9770] transition-colors">Services</a>
            <a href="#camps" className="text-gray-700 hover:text-[#1C9770] transition-colors">Summer Camps</a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#1C9770] transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-[#1C9770] transition-colors">Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:240-328-7404" className="flex items-center text-sm text-gray-600 hover:text-[#1C9770]">
              <Phone className="w-4 h-4 mr-1" />
              (240) 328-7404
            </a>
            <a href="mailto:coach@competitiveedgeclt.com" className="flex items-center text-sm text-gray-600 hover:text-[#1C9770]">
              <Mail className="w-4 h-4 mr-1" />
              coach@competitiveedgeclt.com
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-[#1C9770] transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-[#1C9770] transition-colors">Services</a>
              <a href="#camps" className="text-gray-700 hover:text-[#1C9770] transition-colors">Summer Camps</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#1C9770] transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-[#1C9770] transition-colors">Contact</a>
            </nav>
            <div className="mt-4 pt-4 border-t">
              <a href="tel:240-328-7404" className="flex items-center text-sm text-gray-600 mb-2">
                <Phone className="w-4 h-4 mr-2" />
                (240) 328-7404
              </a>
              <a href="mailto:coach@competitiveedgeclt.com" className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                coach@competitiveedgeclt.com
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;