'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Plane, 
  Shield, 
  Crown, 
  Luggage, 
  Clock,
  ChevronDown,
  Star
} from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/images/airport-luxury-1.jpg',
    '/images/airport-vip-lounge.jpg',
    '/images/private-jet-terminal.jpg'
  ];

  const services = [
    { icon: Shield, text: 'Fast Track Security' },
    { icon: Crown, text: 'VIP Lounge Access' },
    { icon: Luggage, text: 'Luggage Assistance' },
    { icon: Clock, text: '24/7 Support' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-950/90 via-royal-blue-900/80 to-sky-blue-800/70 z-10" />
            <Image
              src={`https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80`}
              alt="Luxury Airport Experience"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Content - Repositionné plus haut */}
      <div className="relative z-20 container-custom text-center text-white pt-20 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge 
            variant="secondary" 
            className="mb-6 bg-air-france-red-600/20 text-air-france-red-300 border-air-france-red-600/30 text-sm px-4 py-2"
          >
            <Star className="w-4 h-4 mr-2" />
            Premium Airport Services Worldwide
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Experience
            <span className="block bg-gradient-to-r from-air-france-red-500 to-air-france-red-300 bg-clip-text text-transparent">
              French Elegance
            </span>
            at Every Airport
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our exclusive Meet & Greet services transform your airport experience 
            with personalized attention, VIP treatment, and seamless luxury travel.
          </p>

          {/* Services Preview */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <service.icon className="w-5 h-5 text-air-france-red-400" />
                <span className="text-sm font-medium">{service.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs - Couleurs améliorées */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-air-france-red-500 hover:bg-air-france-red-600 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/booking">
                Book Your Experience
                <Plane className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-white/60 text-white hover:bg-white hover:text-royal-blue-900 px-8 py-4 text-lg font-medium bg-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/services">
                Discover Services
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-air-france-red-400">500+</div>
              <div className="text-sm">Airports Worldwide</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-air-france-red-400">24/7</div>
              <div className="text-sm">Customer Support</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-air-france-red-400">100%</div>
              <div className="text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Repositionné */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-air-france-red-600/30 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-air-france-red-600/30 rounded-full animate-float hidden lg:block" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;