'use client';

import { Badge } from '@/components/ui/badge';
import { Heart, Users, Globe } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Airport Luxuria Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-950/90 via-royal-blue-900/80 to-royal-blue-800/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-white text-center">
        <Badge className="mb-6 bg-air-france-red-600/20 text-air-france-red-300 border-air-france-red-600/30">
          <Heart className="w-4 h-4 mr-2" />
          Notre Histoire
        </Badge>

        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
          L'Élégance Française
          <span className="block text-air-france-red-400">
            Au Service du Monde
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Depuis nos débuts parisiens, nous avons su allier savoir-vivre français 
          et excellence internationale pour créer une expérience aéroportuaire unique.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <Users className="w-12 h-12 text-air-france-red-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-air-france-red-400 mb-2">2018</div>
            <div className="text-gray-300">Année de Création</div>
          </div>
          <div className="text-center">
            <Globe className="w-12 h-12 text-air-france-red-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-air-france-red-400 mb-2">500+</div>
            <div className="text-gray-300">Aéroports Partenaires</div>
          </div>
          <div className="text-center">
            <Heart className="w-12 h-12 text-air-france-red-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-air-france-red-400 mb-2">2,500+</div>
            <div className="text-gray-300">Clients Satisfaits</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;