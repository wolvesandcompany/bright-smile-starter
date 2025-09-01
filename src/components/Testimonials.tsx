import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      image: testimonial1,
      rating: 5,
      quote: 'The team at Smile Harmony Dental transformed my smile completely. Their attention to detail and gentle approach made the entire process comfortable and stress-free.',
      treatment: 'Cosmetic Dentistry'
    },
    {
      name: 'Michael Chen',
      image: testimonial2,
      rating: 5,
      quote: 'I had been avoiding the dentist for years, but the staff here made me feel so welcome. The modern equipment and professional service exceeded all my expectations.',
      treatment: 'General Dentistry'
    },
    {
      name: 'Margaret Davis',
      image: testimonial3,
      rating: 5,
      quote: 'After years of hiding my smile, the orthodontic treatment here gave me the confidence I never had. The results speak for themselves - I cannot stop smiling!',
      treatment: 'Orthodontics'
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Patients Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-dental-gray max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our happy patients 
            have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:-translate-y-1 relative overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-primary" />
                </div>
                
                {/* Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-dental-green fill-current" 
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-dental-gray leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Patient Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-dental-green/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-dental-gray">
                      {testimonial.treatment}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-card max-w-md mx-auto">
            <div className="flex items-center mb-4">
              <div className="flex text-dental-green mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">5.0</span>
            </div>
            <p className="text-dental-gray mb-4">
              Based on 500+ patient reviews
            </p>
            <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300">
              Read all reviews →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;