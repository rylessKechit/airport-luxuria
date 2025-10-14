'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plane, MapPin, Star, Users, Clock } from 'lucide-react';

interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  description: string;
  services: string[];
  terminals: string[];
  coordinates: { lat: number; lng: number };
  tier: string;
  facts: {
    passengers: string;
    ranking: string;
    opened: string;
    area: string;
  };
}

interface AirportHeroProps {
  airport: Airport;
}

const AirportHero = ({ airport }: AirportHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={`https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80`}
          alt={`${airport.name} Airport`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-950/90 via-royal-blue-900/85 to-royal-blue-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-white text-center">
        <Badge className="mb-6 bg-air-france-red-600/20 text-air-france-red-300 border-air-france-red-600/30">
          <Plane className="w-4 h-4 mr-2" />
          {airport.tier === 'premium' ? 'Services Premium' : 'Services Standard'}
        </Badge>

        <div className="flex items-center justify-center mb-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
            <span className="text-4xl font-bold text-air-france-red-400">{airport.code}</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
          {airport.name}
          <span className="block text-air-france-red-400 text-2xl md:text-3xl font-normal mt-2">
            Meet & Greet Services
          </span>
        </h1>

        <div className="flex items-center justify-center mb-8">
          <MapPin className="w-5 h-5 text-air-france-red-400 mr-2" />
          <span className="text-xl text-gray-200">{airport.city}, {airport.country}</span>
        </div>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          {airport.description}. Bénéficiez de nos services premium avec l'élégance française.
        </p>

        {/* Services Preview */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-4xl mx-auto">
          {airport.services.slice(0, 4).map((service, index) => (
            <div 
              key={index}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
            >
              <Star className="w-4 h-4 text-air-france-red-400" />
              <span className="text-sm font-medium">{service}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-air-france-red-600 hover:bg-air-france-red-700 text-white">
            <Link href="/booking">
              Réserver pour {airport.code}
              <Plane className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/60 text-white hover:bg-white hover:text-royal-blue-900">
            <Link href="/contact">
              Demander un Devis
            </Link>
          </Button>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <Users className="w-8 h-8 text-air-france-red-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-air-france-red-400">{airport.facts.passengers}</div>
            <div className="text-sm text-gray-300">Passagers/an</div>
          </div>
          <div className="text-center">
            <Star className="w-8 h-8 text-air-france-red-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-air-france-red-400">{airport.facts.ranking}</div>
            <div className="text-sm text-gray-300">Classement</div>
          </div>
          <div className="text-center">
            <Clock className="w-8 h-8 text-air-france-red-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-air-france-red-400">{airport.facts.opened}</div>
            <div className="text-sm text-gray-300">Ouverture</div>
          </div>
          <div className="text-center">
            <MapPin className="w-8 h-8 text-air-france-red-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-air-france-red-400">{airport.facts.area}</div>
            <div className="text-sm text-gray-300">Surface</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirportHero;