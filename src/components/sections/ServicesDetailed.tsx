'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Crown, 
  Shield, 
  Coffee, 
  Luggage, 
  Car,
  Clock,
  Users,
  Phone,
  CheckCircle,
  Star,
  ArrowRight,
  MapPin
} from 'lucide-react';

const ServicesDetailed = () => {
  const meetGreetServices = [
    {
      icon: Shield,
      title: 'Fast Track Security',
      description: 'Skip the long queues with priority access through security checkpoints',
      details: [
        'Dedicated security lanes at major airports',
        'Significantly reduced waiting times',
        'Personal escort through security process',
        'Available at 500+ airports worldwide'
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Coffee,
      title: 'VIP Lounge Access',
      description: 'Relax in exclusive lounges with premium amenities and services',
      details: [
        'Access to premium business and first-class lounges',
        'Complimentary food, beverages, and WiFi',
        'Quiet workspace areas for business travelers',
        'Shower facilities and rest areas available'
      ],
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Luggage,
      title: 'Luggage Assistance',
      description: 'Personal assistance with your luggage from check-in to baggage claim',
      details: [
        'Help with check-in and baggage drop-off',
        'Priority baggage handling when available',
        'Assistance with baggage claim and collection',
        'Special handling for valuable or fragile items'
      ],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const additionalBenefits = [
    'Personal meet & greet at arrival/departure gates',
    'Dedicated multilingual customer service agent',
    'Assistance with flight connections and transfers',
    'Real-time flight monitoring and updates',
    'Special assistance for elderly or disabled passengers',
    'Coordination with airline staff for smooth experience'
  ];

  return (
    <section id="services-details" className="section-padding bg-white">
      <div className="container-custom">
        {/* Meet & Greet Premium */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-royal-blue-100 text-royal-blue-800 hover:bg-royal-blue-100">
            <Star className="w-4 h-4 mr-2" />
            Featured Service
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Meet & Greet
            <span className="block text-air-france-red-600">Premium Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our signature service combines three essential airport services into one seamless, 
            luxury experience that redefines how you travel.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-16 mb-20">
          {meetGreetServices.map((service, index) => (
            <Card key={index} className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-royal-blue-900 rounded-2xl flex items-center justify-center mr-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-air-france-red-600 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image */}
                  <div className={`relative min-h-[300px] lg:min-h-[400px] ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4">
              Plus Much More Included
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your Meet & Greet Premium experience includes additional personalized services 
              that ensure every moment of your airport journey is seamless and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-8 h-8 bg-air-france-red-600 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Private Chauffeur Section */}
        <div className="border-t border-gray-200 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-air-france-red-100 text-air-france-red-800 hover:bg-air-france-red-100">
                Optional Service
              </Badge>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Private Chauffeur Service
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Complete your luxury experience with our professional chauffeur service. 
                Travel in comfort and style with our fleet of premium vehicles and 
                experienced, multilingual drivers.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-air-france-red-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Punctual Service</div>
                    <div className="text-sm text-gray-600">Always on time, every time</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-air-france-red-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Professional Drivers</div>
                    <div className="text-sm text-gray-600">Licensed and experienced</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-air-france-red-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Premium Vehicles</div>
                    <div className="text-sm text-gray-600">Mercedes, BMW, Audi fleet</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-air-france-red-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Door-to-Door</div>
                    <div className="text-sm text-gray-600">Complete travel solution</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-8">
                Note: Private chauffeur service is available as an add-on to our Meet & Greet Premium 
                package. Pricing varies by distance and vehicle type.
              </p>

              <Button asChild variant="outline" className="border-air-france-red-600 text-air-france-red-600 hover:bg-air-france-red-600 hover:text-white">
                <Link href="/contact">
                  Request Chauffeur Quote
                  <Phone className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Chauffeur Service"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Premium Fleet Available</h4>
                  <p className="text-gray-200">Mercedes S-Class, BMW 7 Series, Audi A8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailed;