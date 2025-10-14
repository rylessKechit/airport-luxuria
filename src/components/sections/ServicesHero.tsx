'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, ArrowRight, Star } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="VIP Airport Lounge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-950/90 via-royal-blue-900/85 to-royal-blue-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-white text-center">
        <Badge className="mb-6 bg-air-france-red-600/20 text-air-france-red-300 border-air-france-red-600/30">
          <Crown className="w-4 h-4 mr-2" />
          Premium Airport Services
        </Badge>

        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
          French Elegance
          <span className="block text-air-france-red-400">
            Meets Global Excellence
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
          From personalized Meet & Greet services to luxury chauffeur transport, 
          we transform every aspect of your airport experience with sophisticated French hospitality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-air-france-red-600 hover:bg-air-france-red-700 text-white">
            <Link href="/booking">
              Book Your Experience
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/60 text-white hover:bg-white hover:text-royal-blue-900">
            <Link href="#services-details">
              Explore Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;