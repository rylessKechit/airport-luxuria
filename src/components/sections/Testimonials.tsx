'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  Plane,
  Users
} from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'James Richardson',
      title: 'CEO, Richardson Global',
      location: 'London → Dubai',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Absolutely exceptional service from start to finish. The Meet & Greet team at Heathrow was professional, efficient, and made my connection to Dubai seamless. The VIP lounge access was the perfect touch for a business trip.',
      rating: 5,
      service: 'Meet & Greet Premium',
      journey: 'Business Travel'
    },
    {
      id: 2,
      name: 'Sophie Martinez',
      title: 'Fashion Director',
      location: 'Paris → New York',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The French elegance they promise is absolutely real. From CDG to JFK, every detail was perfect. The personal attention and luggage assistance meant I could focus on my presentations. Truly luxury service.',
      rating: 5,
      service: 'Meet & Greet + Chauffeur',
      journey: 'International Business'
    },
    {
      id: 3,
      name: 'Dr. Michael Chen',
      title: 'Surgeon',
      location: 'Singapore → Frankfurt',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'After a 14-hour surgery, the last thing I wanted was airport stress. Airport Luxuria made my connection effortless. The fast-track security and lounge access were exactly what I needed to decompress.',
      rating: 5,
      service: 'Meet & Greet Premium',
      journey: 'Medical Conference'
    },
    {
      id: 4,
      name: 'Isabella Thompson',
      title: 'Art Collector',
      location: 'Los Angeles → Milan',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Traveling with valuable artwork requires special attention. Their team understood my needs perfectly and coordinated everything with customs. The personal service made a complex journey feel effortless.',
      rating: 5,
      service: 'Meet & Greet Premium',
      journey: 'Art Transport'
    },
    {
      id: 5,
      name: 'Robert Kumar',
      title: 'Tech Entrepreneur',
      location: 'London → Tokyo',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Time is everything in my business. Airport Luxuria saved me hours at both Heathrow and Narita. The efficiency of their service and the quality of assistance exceeded my expectations completely.',
      rating: 5,
      service: 'Meet & Greet Premium',
      journey: 'Tech Conference'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-air-france-red-100 text-air-france-red-800 hover:bg-air-france-red-100">
            <Users className="w-4 h-4 mr-2" />
            Client Stories
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Trusted by
            <span className="block text-royal-blue-900">Premium Travelers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From CEOs to celebrities, our clients choose Airport Luxuria for 
            uncompromising quality and French elegance in airport services.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-gray-50 to-white">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Avatar & Info */}
                <div className="lg:col-span-1 bg-gradient-to-br from-royal-blue-900 to-royal-blue-700 p-8 lg:p-12 text-white flex flex-col justify-center">
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full rounded-full object-cover border-4 border-white/20"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-air-france-red-600 rounded-full p-2">
                        <Star className="w-4 h-4 text-white fill-current" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-royal-blue-200 mb-4">
                      {testimonials[currentIndex].title}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-royal-blue-200">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{testimonials[currentIndex].location}</span>
                      </div>
                      <div className="flex items-center justify-center text-royal-blue-200">
                        <Plane className="w-4 h-4 mr-2" />
                        <span className="text-sm">{testimonials[currentIndex].journey}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-air-france-red-600 mb-4" />
                    <div className="flex items-center mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-royal-blue-200 text-royal-blue-700">
                      {testimonials[currentIndex].service}
                    </Badge>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevTestimonial}
                        className="border-gray-300 hover:border-royal-blue-600 hover:text-royal-blue-600"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextTestimonial}
                        className="border-gray-300 hover:border-royal-blue-600 hover:text-royal-blue-600"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-air-france-red-600' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  "{testimonial.content.substring(0, 120)}..."
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{testimonial.location}</span>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.service.split(' ')[0]}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats & Trust Indicators */}
        <div className="bg-gradient-to-r from-royal-blue-900 to-royal-blue-700 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-air-france-red-400 mb-2">4.9/5</div>
              <div className="text-royal-blue-200">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-air-france-red-400 mb-2">2,500+</div>
              <div className="text-royal-blue-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-air-france-red-400 mb-2">98%</div>
              <div className="text-royal-blue-200">Recommend Us</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-air-france-red-400 mb-2">24/7</div>
              <div className="text-royal-blue-200">Support Available</div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-royal-blue-700">
            <h3 className="text-xl font-display font-semibold mb-4">
              Join Our Premium Community
            </h3>
            <p className="text-royal-blue-200 mb-6 max-w-2xl mx-auto">
              Experience the same exceptional service that our distinguished clients enjoy worldwide.
            </p>
            <Button asChild size="lg" className="bg-air-france-red-600 hover:bg-air-france-red-700 text-white">
              <Link href="/booking">
                Book Your Experience Today
                <Star className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;