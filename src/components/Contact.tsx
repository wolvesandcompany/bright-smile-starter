import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send, Navigation, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-dental-gray-light/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg md:text-xl text-dental-gray max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey to a healthier, brighter smile? 
            Contact us today to schedule your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dental-gray mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-dental-gray-light focus:border-dental-ocean focus:ring-dental-ocean"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dental-gray mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-dental-gray-light focus:border-dental-ocean focus:ring-dental-ocean"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dental-gray mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-dental-gray-light focus:border-dental-ocean focus:ring-dental-ocean"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dental-gray mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="border-dental-gray-light focus:border-dental-ocean focus:ring-dental-ocean resize-none"
                    placeholder="Tell us about your dental needs or questions..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-accent hover:shadow-button transition-all duration-300 text-white font-semibold py-3 group"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Visit Our Clinic
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-dental-gray leading-relaxed">
                        123 Smile Avenue<br />
                        Harmony District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-dental-gray">
                        <a href="tel:+15551234567" className="hover:text-dental-ocean transition-colors duration-300">
                          (555) 123-4567
                        </a>
                      </p>
                      <p className="text-sm text-dental-gray mt-1">
                        24/7 Emergency Line
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-dental-gray">
                        <a href="mailto:info@smileharmonydental.com" className="hover:text-dental-ocean transition-colors duration-300">
                          info@smileharmonydental.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                      <div className="text-dental-gray space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Emergency Only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Enhanced Interactive Map */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Map Header */}
                  <div className="bg-gradient-primary p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Our Location</span>
                      </div>
                      <div className="text-sm opacity-90">
                        Smile Harmony Dental
                      </div>
                    </div>
                  </div>
                  
                  {/* Google Maps Embed */}
                  <div className="relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2156!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                      title="Smile Harmony Dental Location"
                    />
                    
                    {/* Map Overlay Controls */}
                    <div className="absolute top-4 right-4 space-y-2">
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=123+Smile+Avenue+Harmony+District+New+York+NY+10001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dental-ocean text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-dental-ocean-dark transition-colors duration-300 flex items-center shadow-lg"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                      <a
                        href="https://www.google.com/maps/place/123+Smile+Avenue,+Harmony+District,+New+York,+NY+10001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-dental-ocean px-4 py-2 rounded-lg text-sm font-medium hover:bg-dental-gray-light transition-colors duration-300 flex items-center shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View on Maps
                      </a>
                    </div>
                  </div>
                  
                  {/* Map Footer */}
                  <div className="bg-dental-gray-light/50 p-4">
                    <div className="flex items-center justify-between text-sm text-dental-gray">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>123 Smile Avenue, New York, NY 10001</span>
                      </div>
                      <div className="text-dental-coral font-medium">
                        Free Parking Available
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
