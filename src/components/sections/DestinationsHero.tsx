'use client';

import { Badge } from '@/components/ui/badge';
import { Globe, MapPin } from 'lucide-react';

const DestinationsHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Global Airport Network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-950/90 via-royal-blue-900/85 to-royal-blue-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-white text-center">
        <Badge className="mb-6 bg-air-france-red-600/20 text-air-france-red-300 border-air-france-red-600/30">
          <Globe className="w-4 h-4 mr-2" />
          Global Network
        </Badge>

        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
          500+ Airports
          <span className="block text-air-france-red-400">
            Across 6 Continents
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
          From Paris to Tokyo, New York to Dubai - discover where our premium 
          Meet & Greet services await your arrival.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-gray-300">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-air-france-red-400" />
            <span>Major International Hubs</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-air-france-red-400" />
            <span>Regional Airports</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-air-france-red-400" />
            <span>Private Terminals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsHero;