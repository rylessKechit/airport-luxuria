'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, 
  Calendar, 
  Plane, 
  Crown,
  ArrowRight,
  Clock
} from 'lucide-react';

const ServiceProcess = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Contact & Consultation',
      description: 'Share your travel details through our simple booking form or call us directly',
      details: 'Our experts review your itinerary and recommend the perfect service package',
      duration: '< 2 hours response'
    },
    {
      icon: Calendar,
      title: 'Booking Confirmation',
      description: 'Receive your personalized quote and confirm your booking with detailed instructions',
      details: 'Complete travel documentation and agent contact information provided',
      duration: 'Same day confirmation'
    },
    {
      icon: Plane,
      title: 'Meet Your Agent',
      description: 'Your dedicated agent meets you at the designated location with identification',
      details: 'Seamless handover and personalized assistance throughout your journey',
      duration: 'On-time guarantee'
    },
    {
      icon: Crown,
      title: 'Premium Experience',
      description: 'Enjoy fast-track security, VIP lounge access, and luggage assistance',
      details: 'Stress-free travel with French elegance and international standards',
      duration: 'End-to-end service'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-royal-blue-50 to-sky-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-air-france-red-100 text-air-france-red-800 hover:bg-air-france-red-100">
            <Clock className="w-4 h-4 mr-2" />
            Service Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            How Your Premium
            <span className="block text-royal-blue-900">Experience Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial contact to arrival at your destination, every step is carefully 
            orchestrated to deliver seamless luxury and French elegance.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Arrow - Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full z-0">
                  <div className="flex items-center justify-center h-1">
                    <div className="flex-1 border-t-2 border-dashed border-royal-blue-300"></div>
                    <ArrowRight className="w-6 h-6 text-royal-blue-400 mx-4 bg-gradient-to-br from-royal-blue-50 to-sky-blue-50" />
                  </div>
                </div>
              )}

              <Card className="relative z-10 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-royal-blue-900 to-royal-blue-700 rounded-2xl mx-auto flex items-center justify-center mb-4">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-air-france-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {step.details}
                    </p>
                  </div>

                  {/* Duration Badge */}
                  <Badge variant="outline" className="border-air-france-red-300 text-air-france-red-600 mt-auto">
                    {step.duration}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-lg bg-white max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Why Choose Our Process?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-royal-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-royal-blue-700" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fast Response</h4>
                  <p className="text-gray-600 text-sm">Average response time of 45 minutes during business hours</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-royal-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-royal-blue-700" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Premium Quality</h4>
                  <p className="text-gray-600 text-sm">French elegance meets international standards of excellence</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-royal-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-royal-blue-700" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Touch</h4>
                  <p className="text-gray-600 text-sm">Human consultation, not automated booking systems</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;