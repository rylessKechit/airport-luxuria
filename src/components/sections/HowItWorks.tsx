'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, 
  Calendar, 
  UserCheck, 
  Crown,
  ArrowRight,
  Phone
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      step: '01',
      title: 'Contact Us',
      description: 'Fill out our simple booking form with your travel details. No complex procedures, just the essentials.',
      highlight: 'Quick & Simple',
      color: 'bg-royal-blue-100 text-royal-blue-700'
    },
    {
      icon: Phone,
      step: '02', 
      title: 'Personal Consultation',
      description: 'Our expert team calls you within hours to discuss your needs and provide a personalized quote.',
      highlight: 'Human Touch',
      color: 'bg-air-france-red-100 text-air-france-red-700'
    },
    {
      icon: Calendar,
      step: '03',
      title: 'Confirmation',
      description: 'Once confirmed, we handle all arrangements and send you detailed instructions for your journey.',
      highlight: 'Fully Organized',
      color: 'bg-royal-blue-100 text-royal-blue-700'
    },
    {
      icon: Crown,
      step: '04',
      title: 'VIP Experience',
      description: 'Meet your dedicated agent at the airport and enjoy seamless, luxury service throughout your travel.',
      highlight: 'Pure Luxury',
      color: 'bg-air-france-red-100 text-air-france-red-700'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-air-france-red-100 text-air-france-red-800 hover:bg-air-france-red-100">
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            How It 
            <span className="block text-royal-blue-900">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From first contact to VIP treatment, we've streamlined the entire process 
            to ensure your premium airport experience is effortless.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line - Desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full z-0">
                  <div className="flex items-center justify-center h-1">
                    <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-4 bg-white" />
                  </div>
                </div>
              )}

              <Card className="relative z-10 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 relative">
                    <span className="text-2xl font-bold text-gray-700">{step.step}</span>
                    <div className="absolute -top-2 -right-2">
                      <div className={`p-2 rounded-lg ${step.color}`}>
                        <step.icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Highlight Badge */}
                  <Badge 
                    variant="outline" 
                    className="mb-4 border-gray-300 text-gray-600 group-hover:border-air-france-red-300 group-hover:text-air-france-red-600 transition-colors"
                  >
                    {step.highlight}
                  </Badge>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Section - Why This Process */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-6">
                Why We Don't Show Prices Online
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-air-france-red-600 rounded-full flex items-center justify-center mt-1 shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Personalized Service:</span> Every journey is unique, and our pricing reflects your specific needs and preferences.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-air-france-red-600 rounded-full flex items-center justify-center mt-1 shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Airport Variations:</span> Services and availability vary by airport, time, and season.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-air-france-red-600 rounded-full flex items-center justify-center mt-1 shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Premium Experience:</span> We believe in human connection and personal consultation for luxury services.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="w-12 h-12 bg-royal-blue-900 rounded-xl flex items-center justify-center mr-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                    <p className="font-semibold text-gray-900">Expert Consultation</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Our team responds within 2 hours during business hours, 
                  and within 6 hours outside business hours.
                </p>
                <div className="text-2xl font-bold text-air-france-red-600">
                  Average Response: 45 minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;