'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Plane, 
  MapPin, 
  Phone,
  ArrowRight,
  Search
} from 'lucide-react';

const DestinationsCTA = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
              Don't See Your
              <span className="block text-air-france-red-600">Destination?</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our network is constantly expanding. If your departure or arrival airport 
              isn't listed, contact us directly. We often have partnerships and can 
              arrange services at additional locations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-air-france-red-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">New Locations Monthly</div>
                  <div className="text-gray-600">We're adding 10-15 new airports every month</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Search className="w-6 h-6 text-air-france-red-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Custom Arrangements</div>
                  <div className="text-gray-600">Special requests for unique destinations</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 text-air-france-red-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Direct Consultation</div>
                  <div className="text-gray-600">Speak with our destination experts</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-royal-blue-900 hover:bg-royal-blue-800">
                <Link href="/contact">
                  Request New Airport
                  <MapPin className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-air-france-red-600 text-air-france-red-600 hover:bg-air-france-red-600 hover:text-white">
                <Link href="/booking">
                  Book Existing Location
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Map Preview */}
          <div className="relative">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-96">
                  <img
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Global Airport Network"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Expanding Globally</h3>
                    <p className="text-royal-blue-200 mb-4">
                      New destinations added every month based on client demand
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div>
                        <span className="text-air-france-red-400 font-bold">+15</span>
                        <span className="text-royal-blue-200 ml-1">This Month</span>
                      </div>
                      <div>
                        <span className="text-air-france-red-400 font-bold">500+</span>
                        <span className="text-royal-blue-200 ml-1">Total Network</span>
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

export default DestinationsCTA;