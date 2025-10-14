'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Plane, 
  Clock, 
  Phone, 
  Mail,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Crown
} from 'lucide-react';

const FinalCTA = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const urgencyFeatures = [
    'Response within 2 hours',
    'Personalized quote included',
    'No hidden fees or surprises',
    'Instant confirmation available'
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us Now',
      subtitle: '24/7 Premium Support',
      action: 'Call +33 1 XX XX XX XX',
      primary: true
    },
    {
      icon: Mail,
      title: 'Get Quote',
      subtitle: 'Quick Online Form',
      action: 'Book Online',
      primary: false
    }
  ];

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Airport Terminal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-950/95 via-royal-blue-900/90 to-royal-blue-800/85"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-air-france-red-600/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-air-france-red-600/30 rounded-full animate-pulse hidden lg:block" style={{animationDelay: '1s'}}></div>

      <div className="relative z-20 container-custom text-white">
        {/* Main Content */}
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-air-france-red-600/20 text-air-france-red-300 border-air-france-red-600/30 text-sm px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            Available 24/7 • Response Time: {currentTime}
          </Badge>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Your Premium Journey
            <span className="block bg-gradient-to-r from-air-france-red-400 to-air-france-red-200 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Don't settle for ordinary airport experiences. Join thousands of discerning travelers 
            who trust Airport Luxuria for seamless, elegant journeys worldwide.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card key={index} className={`border-0 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 ${method.primary ? 'ring-2 ring-air-france-red-500' : ''}`}>
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${method.primary ? 'bg-air-france-red-600' : 'bg-royal-blue-600'}`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-6">{method.subtitle}</p>
                
                {method.primary && (
                  <Badge className="mb-4 bg-air-france-red-100 text-air-france-red-800 hover:bg-air-france-red-100">
                    <Star className="w-4 h-4 mr-1" />
                    Recommended
                  </Badge>
                )}

                <Button 
                  asChild 
                  size="lg" 
                  className={`w-full ${method.primary ? 'bg-air-france-red-600 hover:bg-air-france-red-700' : 'bg-royal-blue-600 hover:bg-royal-blue-700'} text-white font-semibold`}
                >
                  <Link href={method.primary ? "/contact" : "/booking"}>
                    {method.action}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>

                {method.primary && (
                  <p className="text-sm text-gray-500 mt-3">
                    Speak directly with our premium travel experts
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Urgency Features */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6">
                Why Book Today?
              </h3>
              <div className="space-y-4">
                {urgencyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-air-france-red-400 shrink-0" />
                    <span className="text-lg text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="bg-gradient-to-r from-air-france-red-600 to-air-france-red-700 rounded-2xl p-6 text-white">
                <Crown className="w-12 h-12 mb-4 mx-auto lg:mx-0" />
                <h4 className="text-xl font-bold mb-2">Premium Guarantee</h4>
                <p className="text-air-france-red-100 mb-4">
                  If you're not completely satisfied with our service, 
                  we'll make it right or provide a full refund.
                </p>
                <div className="text-3xl font-bold">100% Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Stats */}
        <div className="text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-air-france-red-400 mb-2">500+</div>
              <div className="text-gray-300">Global Airports</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-air-france-red-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-air-france-red-400 mb-2">2,500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-air-france-red-400 mb-2">4.9★</div>
              <div className="text-gray-300">Client Rating</div>
            </div>
          </div>

          <p className="text-gray-300 text-lg mb-8">
            Join the elite travelers who choose French elegance for their airport experience
          </p>

          {/* Emergency Contact */}
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Globe className="w-5 h-5 text-air-france-red-400 mr-3" />
            <span className="text-gray-300">
              Need immediate assistance? Call our 24/7 hotline: 
            </span>
            <Button variant="link" className="text-air-france-red-400 hover:text-air-france-red-300 p-0 ml-2 font-semibold">
              +33 1 XX XX XX XX
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;