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
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-dental-mint/30 to-white">
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
                className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-hover transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-dental-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm text-dental-gray">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-dental-coral rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
