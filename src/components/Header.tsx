import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Smile Harmony Dental
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-dental-gray">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">(555) 123-4567</span>
            </div>
            <Button className="bg-gradient-accent hover:shadow-button transition-all duration-300 text-white font-semibold px-6">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex items-center text-dental-gray py-2">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">(555) 123-4567</span>
              </div>
              <Button className="bg-gradient-accent hover:shadow-button transition-all duration-300 text-white font-semibold w-full">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;