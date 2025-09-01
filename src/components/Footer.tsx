import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Cosmetic Dentistry',
    'General Dentistry',
    'Orthodontics',
    'Emergency Care'
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Smile Harmony Dental
            </h3>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Providing exceptional dental care with a gentle touch. Your smile is our passion, 
              and your comfort is our priority.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-white/80">
              <p>📍 123 Smile Avenue, Harmony District, NY 10001</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@smileharmonydental.com</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-white/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Social Links & Hours */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h5 className="font-semibold mb-3">Office Hours</h5>
              <div className="text-white/80 text-sm space-y-1">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Emergency Only</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-white/80 mb-4">Follow us on social media</p>
              <div className="flex space-x-4 justify-center">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-white/80 flex items-center justify-center">
            © {new Date().getFullYear()} Smile Harmony Dental. Made with{' '}
            <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
            for beautiful smiles.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;