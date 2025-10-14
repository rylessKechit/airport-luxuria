'use client';

import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-700 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10 container-custom text-center">
        <Badge className="mb-6 bg-air-france-red-600/20 text-air-france-red-300 border-air-france-red-600/30">
          <Phone className="w-4 h-4 mr-2" />
          Support Premium 24/7
        </Badge>

        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
          Parlons de Votre
          <span className="block text-air-france-red-400">Prochain Voyage</span>
        </h1>

        <p className="text-xl md:text-2xl text-royal-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Notre équipe d'experts est disponible 24h/24 pour créer une expérience 
          aéroportuaire sur mesure qui dépasse vos attentes.
        </p>

        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <Phone className="w-12 h-12 text-air-france-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Appel Direct</h3>
            <p className="text-royal-blue-200 mb-3">Pour une assistance immédiate</p>
            <a href="tel:+33123456789" className="text-air-france-red-400 font-semibold hover:text-air-france-red-300 transition-colors">
              +33 1 XX XX XX XX
            </a>
          </div>
          
          <div className="text-center">
            <Mail className="w-12 h-12 text-air-france-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email Premium</h3>
            <p className="text-royal-blue-200 mb-3">Réponse sous 2 heures garantie</p>
            <a href="mailto:contact@airportluxuria.com" className="text-air-france-red-400 font-semibold hover:text-air-france-red-300 transition-colors">
              contact@airportluxuria.com
            </a>
          </div>
          
          <div className="text-center">
            <Clock className="w-12 h-12 text-air-france-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Disponibilité</h3>
            <p className="text-royal-blue-200 mb-3">Support multilingue</p>
            <span className="text-air-france-red-400 font-semibold">
              24h/24 • 7j/7 • 365j/an
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;