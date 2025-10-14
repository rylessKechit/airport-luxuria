'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Car, 
  Wifi, 
  Coffee,
  Star,
  Info,
  ExternalLink
} from 'lucide-react';

interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  coordinates: { lat: number; lng: number };
  facts: {
    passengers: string;
    ranking: string;
    opened: string;
    area: string;
  };
}

interface AirportInfoProps {
  airport: Airport;
}

const AirportInfo = ({ airport }: AirportInfoProps) => {
  const practicalInfo = [
    {
      icon: Clock,
      title: 'Heures d\'Ouverture',
      details: ['24h/24 - 7j/7', 'Services disponibles en continu']
    },
    {
      icon: Car,
      title: 'Accès Transport',
      details: ['RER, métro, bus', 'Taxis et VTC', 'Parking longue durée']
    },
    {
      icon: Wifi,
      title: 'Services Numériques',
      details: ['WiFi gratuit illimité', 'Bornes de recharge', 'Applications mobiles']
    },
    {
      icon: Coffee,
      title: 'Restauration',
      details: ['100+ restaurants', 'Cuisines internationales', 'Service 24h dans certains terminaux']
    }
  ];

  const travelTips = [
    {
      title: 'Temps d\'Arrivée Recommandé',
      tip: 'Arrivez 3h avant pour les vols internationaux, 2h pour les vols domestiques'
    },
    {
      title: 'Applications Utiles',
      tip: `Téléchargez l'app officielle de ${airport.name} pour le suivi en temps réel`
    },
    {
      title: 'Bagages',
      tip: 'Consultez les restrictions spécifiques à votre compagnie aérienne'
    },
    {
      title: 'Services Premium',
      tip: 'Nos services Meet & Greet vous font gagner jusqu\'à 2h de temps'
    }
  ];

  const nearbyAttractions = [
    {
      name: airport.city === 'Paris' ? 'Centre de Paris' : `Centre de ${airport.city}`,
      distance: airport.city === 'Paris' ? '35 km' : '25 km',
      transport: airport.city === 'Paris' ? 'RER B direct' : 'Train/Metro'
    },
    {
      name: airport.city === 'Paris' ? 'Disneyland Paris' : 'Centre d\'affaires',
      distance: airport.city === 'Paris' ? '15 km' : '10 km',
      transport: airport.city === 'Paris' ? 'RER A' : 'Navette'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-air-france-red-100 text-air-france-red-800 hover:bg-air-france-red-100">
            <Info className="w-4 h-4 mr-2" />
            Informations Pratiques
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Tout Savoir sur
            <span className="block text-royal-blue-900">{airport.name}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informations essentielles, conseils pratiques et services disponibles 
            pour optimiser votre passage à {airport.code}.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-air-france-red-600 mb-2">
                {airport.facts.passengers}
              </div>
              <div className="text-gray-600">Passagers par an</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-air-france-red-600 mb-2">
                {airport.facts.ranking}
              </div>
              <div className="text-gray-600">Classement</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-air-france-red-600 mb-2">
                {airport.facts.opened}
              </div>
              <div className="text-gray-600">Année d'ouverture</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-air-france-red-600 mb-2">
                {airport.facts.area}
              </div>
              <div className="text-gray-600">Surface totale</div>
            </CardContent>
          </Card>
        </div>

        {/* Practical Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {practicalInfo.map((info, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-royal-blue-100 rounded-xl flex items-center justify-center mr-3">
                    <info.icon className="w-6 h-6 text-royal-blue-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{info.title}</h3>
                </div>
                <ul className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-600">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Travel Tips */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-6 h-6 text-air-france-red-600 mr-3" />
                Conseils de Voyage
              </h3>
              <div className="space-y-4">
                {travelTips.map((tip, index) => (
                  <div key={index} className="border-l-4 border-air-france-red-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{tip.title}</h4>
                    <p className="text-gray-600 text-sm">{tip.tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-royal-blue-600 mr-3" />
                À Proximité
              </h3>
              <div className="space-y-4">
                {nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">{attraction.name}</h4>
                      <p className="text-sm text-gray-600">{attraction.transport}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {attraction.distance}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contacts */}
        <Card className="border-0 shadow-lg bg-royal-blue-50 border-l-4 border-l-royal-blue-600 mb-16">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Phone className="w-5 h-5 text-royal-blue-600 mr-3" />
              Contacts Urgents à {airport.code}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Airport Luxuria</h4>
                <p className="text-royal-blue-600 font-medium">+33 1 XX XX XX XX</p>
                <p className="text-sm text-gray-600">Support 24/7</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Information Aéroport</h4>
                <p className="text-royal-blue-600 font-medium">+33 1 70 36 39 50</p>
                <p className="text-sm text-gray-600">Renseignements généraux</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Urgences</h4>
                <p className="text-royal-blue-600 font-medium">112</p>
                <p className="text-sm text-gray-600">Numéro d'urgence européen</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-royal-blue-900 to-royal-blue-700 text-white">
          <CardContent className="p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">
              Simplifiez Votre Passage à {airport.code}
            </h3>
            <p className="text-royal-blue-100 mb-8 max-w-2xl mx-auto">
              Avec nos services Meet & Greet, transformez les contraintes de {airport.name} 
              en expérience premium et sans stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-air-france-red-600 hover:bg-air-france-red-700">
                <Link href="/booking">
                  Réserver {airport.code}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-royal-blue-900">
                <Link href="/destinations">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Autres Aéroports
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AirportInfo;