import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Heart, 
  Star,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Smile
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Patients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Emergency Care' },
    { icon: Star, value: '4.9', label: 'Average Rating' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'We prioritize your comfort and well-being in every treatment, ensuring a positive experience.'
    },
    {
      icon: Shield,
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment and modern techniques for the best possible outcomes.'
    },
    {
      icon: Stethoscope,
      title: 'Expert Team',
      description: 'Highly qualified professionals with years of experience in comprehensive dental care.'
    },
    {
      icon: Smile,
      title: 'Beautiful Results',
      description: 'Transform your smile with our cosmetic and restorative dentistry services.'
    }
  ];

  const achievements = [
    'American Dental Association Member',
    'Board Certified Specialists',
    'Advanced Technology Certified',
    'Patient Safety Excellence Award',
    'Community Service Recognition'
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-dental-gray-light/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-accent text-white px-4 py-2 text-sm font-medium">
            About Smile Harmony Dental
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Trusted Partner in{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dental Excellence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-dental-gray max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been dedicated to providing exceptional dental care 
            that combines advanced technology with compassionate service.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-dental-ocean mb-2">{stat.value}</div>
                  <div className="text-dental-gray font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Our Story */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-dental-gray leading-relaxed">
                <p>
                  Founded in 2008, Smile Harmony Dental began with a simple mission: to provide 
                  exceptional dental care in a warm, welcoming environment. What started as a 
                  small practice has grown into a comprehensive dental center serving thousands 
                  of patients throughout New York.
                </p>
                <p>
                  Our founder, Dr. Sarah Johnson, envisioned a dental practice where patients 
                  would feel comfortable and confident in their care. Today, our team of 
                  experienced professionals continues to uphold this vision, combining 
                  cutting-edge technology with personalized attention.
                </p>
                <p>
                  We believe that everyone deserves a healthy, beautiful smile, and we're 
                  committed to making that a reality for each of our patients.
                </p>
              </div>
              <Button className="mt-6 bg-gradient-primary hover:shadow-button text-white group">
                Meet Our Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>

          {/* Our Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Core Values
            </h3>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                        <p className="text-dental-gray leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Recognition & Achievements
              </h3>
              <p className="text-dental-gray max-w-2xl mx-auto">
                We're proud to be recognized for our commitment to excellence in dental care 
                and patient satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center bg-white/80 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-dental-coral mr-3 flex-shrink-0" />
                  <span className="text-dental-gray-dark font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
