'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Shield, 
  Crown, 
  Luggage, 
  Car, 
  CheckCircle,
  Clock,
  Users,
  Plane
} from 'lucide-react';

interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  services: string[];
  terminals: string[];
  tier: string;
}

interface AirportServicesProps {
  airport: Airport;
}

const AirportServices = ({ airport }: AirportServicesProps) => {
  const serviceDetails = [
    {
      icon: Shield,
      name: 'Fast Track Security',
      description: `Accès prioritaire aux contrôles de sécurité à ${airport.name}. Évitez les longues files d'attente.`,
      features: ['Accès dédié', 'Gain de temps significatif', 'Disponible dans tous les terminaux'],
      available: airport.services.includes('Fast Track Security')
    },
    {
      icon: Crown,
      name: 'VIP Lounge Access',
      description: `Détendez-vous dans les salons premium de ${airport.code} avec restauration et WiFi gratuits.`,
      features: ['Salons business et première classe', 'Restauration premium', 'Espaces de travail'],
      available: airport.services.includes('VIP Lounge Access')
    },
    {
      icon: Luggage,
      name: 'Luggage Assistance',
      description: `Assistance personnalisée pour vos bagages de l'enregistrement à la récupération à ${airport.name}.`,
      features: ['Enregistrement prioritaire', 'Transport des bagages', 'Aide à la récupération'],
      available: airport.services.includes('Luggage Assistance')
    },
    {
      icon: Car,
      name: 'Private Chauffeur',
      description: `Service de chauffeur privé premium vers et depuis ${airport.city}.`,
      features: ['Véhicules de luxe', 'Chauffeurs professionnels', 'Service porte-à-porte'],
      available: airport.services.includes('Private Chauffeur')
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Accueil Personnalisé',
      description: `Votre agent vous accueille à ${airport.name} avec une pancarte à votre nom`
    },
    {
      step: '2',
      title: 'Services Premium',
      description: 'Fast Track, lounge VIP et assistance bagages selon vos besoins'
    },
    {
      step: '3',
      title: 'Accompagnement',
      description: 'Escort jusqu\'à votre porte d\'embarquement ou sortie'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-royal-blue-100 text-royal-blue-800 hover:bg-royal-blue-100">
            Services à {airport.code}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Services Premium à
            <span className="block text-air-france-red-600">{airport.name}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos services exclusifs disponibles à {airport.name} ({airport.code}) 
            pour une expérience aéroportuaire sans stress.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {serviceDetails.map((service, index) => (
            <Card key={index} className={`border-0 shadow-lg ${service.available ? 'ring-2 ring-green-200' : 'opacity-75'}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 ${
                    service.available ? 'bg-royal-blue-900' : 'bg-gray-400'
                  }`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                    <Badge className={service.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}>
                      {service.available ? 'Disponible' : 'Non disponible'}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {service.available && (
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Terminal Information */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Terminaux Couverts à {airport.code}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {airport.terminals.map((terminal, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="w-12 h-12 bg-royal-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Plane className="w-6 h-6 text-royal-blue-700" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{terminal}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6">
                Nos services sont disponibles dans tous les terminaux de {airport.name}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-gray-900 text-center mb-12">
            Votre Expérience à {airport.code}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-air-france-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-royal-blue-900 to-royal-blue-700 text-white">
          <CardContent className="p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6">
              Prêt pour une Expérience Premium à {airport.code} ?
            </h3>
            <p className="text-royal-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Réservez dès maintenant vos services Meet & Greet à {airport.name} 
              et transformez votre passage à l'aéroport en moment d'élégance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-air-france-red-600 hover:bg-air-france-red-700 text-white">
                <Link href="/booking">
                  Réserver pour {airport.code}
                  <Plane className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-royal-blue-900">
                <Link href="/contact">
                  <Clock className="w-4 h-4 mr-2" />
                  Support 24/7
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AirportServices;