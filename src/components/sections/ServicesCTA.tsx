'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Plane, 
  Phone, 
  ArrowRight,
  Star,
  Clock
} from 'lucide-react';

const ServicesCTA = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-royal-blue-900 via-royal-blue-800 to-royal-blue-700 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Ready to Transform
                <span className="block text-air-france-red-400">Your Travel Experience?</span>
              </h2>
              
              <p className="text-royal-blue-100 text-lg mb-8 leading-relaxed">
                Join thousands of discerning travelers who trust Airport Luxuria for 
                seamless, elegant airport experiences. Get your personalized quote today.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-air-france-red-400" />
                  <span className="text-royal-blue-100">Available at 500+ airports worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-air-france-red-400" />
                  <span className="text-royal-blue-100">24/7 premium customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-air-france-red-400" />
                  <span className="text-royal-blue-100">Expert consultation within 2 hours</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-air-france-red-600 hover:bg-air-france-red-700 text-white">
                  <Link href="/booking">
                    Get Your Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-royal-blue-900">
                  <Link href="/contact">
                    Speak to Expert
                    <Phone className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative min-h-[400px] lg:min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Premium Airport Experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue-900/60 to-transparent"></div>
              
              {/* Overlay Stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-3 gap-4 text-white text-center">
                  <div>
                    <div className="text-2xl font-bold text-air-france-red-400">4.9★</div>
                    <div className="text-xs">Client Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-air-france-red-400">2,500+</div>
                    <div className="text-xs">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-air-france-red-400">100%</div>
                    <div className="text-xs">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;