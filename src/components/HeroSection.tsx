import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import heroImage from '@/assets/dental-hero.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-dental-blue-light/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center bg-dental-green/10 rounded-full px-4 py-2">
                <div className="flex text-dental-green mr-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm font-medium text-dental-gray">5.0 • 500+ Happy Patients</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Journey to a{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Brighter Smile
              </span>{' '}
              Starts Here
            </h1>
            
            <p className="text-lg md:text-xl text-dental-gray mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience exceptional dental care with our team of expert professionals. 
              We're committed to providing personalized treatments that give you confidence 
              in your smile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:shadow-button transition-all duration-300 text-white font-semibold px-8 py-4 text-lg group"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-dental-gray">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-dental-gray">Happy Patients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-dental-gray">Emergency Care</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Modern dental clinic interior"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-blue/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-6 shadow-card max-w-xs">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Modern Equipment</div>
                  <div className="text-sm text-dental-gray">Latest technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;