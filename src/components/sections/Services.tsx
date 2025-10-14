'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Crown, 
  Shield, 
  Luggage, 
  Coffee,
  Car,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Users
} from 'lucide-react';

const Services = () => {
  const meetGreetFeatures = [
    {
      icon: Shield,
      title: 'Fast Track Security',
      description: 'Skip the queues with priority access through security checkpoints at major airports worldwide.'
    },
    {
      icon: Coffee,
      title: 'VIP Lounge Access',
      description: 'Relax in exclusive lounges with premium amenities, complimentary refreshments and WiFi.'
    },
    {
      icon: Luggage,
      title: 'Luggage Assistance',
      description: 'Personal assistance with your luggage from check-in to baggage claim, ensuring seamless travel.'
    }
  ];

  const benefits = [
    'Personal meet & greet at arrival/departure',
    'Dedicated agent throughout your journey',
    'Premium customer support 24/7',
    'Multilingual assistance available',
    'Seamless connections for transfers'
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-royal-blue-100 text-royal-blue-800 hover:bg-royal-blue-100">
            <Star className="w-4 h-4 mr-2" />
            Our Premium Services
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Elevate Your 
            <span className="block text-air-france-red-600">Airport Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the moment you arrive until your departure, experience French elegance 
            and personalized service that transforms air travel into luxury.
          </p>
        </div>

        {/* Meet & Greet - Service Principal */}
        <div className="mb-20">
          <Card className="overflow-hidden border-0 shadow-2xl bg-white">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-royal-blue-900 rounded-2xl mr-4">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-air-france-red-600 hover:bg-air-france-red-600 text-white">
                        Featured Service
                      </Badge>
                      <h3 className="text-3xl font-display font-bold text-gray-900">
                        Meet & Greet Premium
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Our signature service combines French hospitality with international excellence. 
                    Enjoy a completely stress-free airport experience with dedicated personal assistance.
                  </p>

                  {/* Included Services */}
                  <div className="space-y-6 mb-8">
                    {meetGreetFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-royal-blue-100 rounded-xl shrink-0">
                          <feature.icon className="w-6 h-6 text-royal-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Benefits */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-air-france-red-600 mr-2" />
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-air-france-red-600 rounded-full mr-3 shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-royal-blue-900 hover:bg-royal-blue-800 text-white"
                  >
                    <Link href="/booking">
                      Book Meet & Greet Service
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Image */}
                <div className="relative min-h-[400px] lg:min-h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-blue-900/20 to-transparent z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="VIP Airport Lounge Experience"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Private Chauffeur - Service Secondaire */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-14 h-14 bg-air-france-red-600 rounded-xl mr-4">
                    <Car className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900">
                      Private Chauffeur Service
                    </h3>
                    <p className="text-gray-500">Optional premium transport</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete your luxury experience with our private chauffeur service. 
                  Professional drivers in premium vehicles ensure comfortable transport 
                  to and from the airport.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-air-france-red-600" />
                    <span className="text-gray-600">Punctual & Reliable</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-air-france-red-600" />
                    <span className="text-gray-600">Professional Drivers</span>
                  </div>
                </div>

                <Button 
                  asChild 
                  variant="outline" 
                  className="border-air-france-red-600 text-air-france-red-600 hover:bg-air-france-red-600 hover:text-white"
                >
                  <Link href="/contact">
                    Request Chauffeur Service
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Image */}
          <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Luxury Chauffeur Service"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-royal-blue-900 to-royal-blue-700 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">
              Ready for a Premium Airport Experience?
            </h3>
            <p className="text-royal-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us for a personalized quote and discover how we can transform your next journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-air-france-red-600 hover:bg-air-france-red-700 text-white"
              >
                <Link href="/booking">
                  Get Your Quote
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-royal-blue-900"
              >
                <Link href="/contact">
                  Speak to an Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;