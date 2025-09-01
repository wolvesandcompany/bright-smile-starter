import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Smile, Heart, Zap, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, whitening, and aesthetic treatments that boost your confidence.',
      features: ['Teeth Whitening', 'Veneers', 'Smile Makeover', 'Bonding']
    },
    {
      icon: Heart,
      title: 'General Dentistry',
      description: 'Comprehensive oral health care including cleanings, fillings, and preventive treatments.',
      features: ['Regular Cleanings', 'Fillings', 'Crowns', 'Root Canal']
    },
    {
      icon: Zap,
      title: 'Orthodontics',
      description: 'Straighten your teeth with traditional braces or modern Invisalign clear aligners.',
      features: ['Traditional Braces', 'Invisalign', 'Retainers', 'Bite Correction']
    },
    {
      icon: Clock,
      title: 'Emergency Care',
      description: '24/7 emergency dental services for urgent dental needs and pain relief.',
      features: ['24/7 Availability', 'Pain Relief', 'Urgent Repairs', 'Same-day Service']
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Dental{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-dental-gray max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive dental care with state-of-the-art technology and 
            personalized treatment plans tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-dental-gray leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-dental-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-soft">
            <span className="text-dental-gray mr-2">Need a custom treatment plan?</span>
            <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300">
              Contact us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;