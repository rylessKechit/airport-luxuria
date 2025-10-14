'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Plane, 
  MapPin, 
  Star,
  Globe,
  ArrowRight,
  Users,
  Building,
  Award
} from 'lucide-react';

// Import dynamique du composant carte
const LeafletMap = dynamic(() => import('@/components/ui/LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Chargement de la carte interactive...</p>
      </div>
    </div>
  )
});

interface Airport {
  id: string;
  code: string;
  name: string;
  city: string;
  country: string;
  continent: string;
  lat: number;
  lng: number;
  tier: 'premium' | 'standard' | 'regional';
  services: string[];
  description: string;
}

const InteractiveMap = () => {
  const [selectedContinent, setSelectedContinent] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);
  const [hoveredAirport, setHoveredAirport] = useState<Airport | null>(null);
  const [filteredAirports, setFilteredAirports] = useState<Airport[]>([]);

  // Base de données d'aéroports (même que avant...)
  const airports: Airport[] = [
    {
      id: '1',
      code: 'CDG',
      name: 'Charles de Gaulle',
      city: 'Paris',
      country: 'France',
      continent: 'Europe',
      lat: 49.0097,
      lng: 2.5479,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Premier hub international français avec services VIP premium'
    },
    {
      id: '2',
      code: 'LHR',
      name: 'Heathrow',
      city: 'London',
      country: 'United Kingdom',
      continent: 'Europe',
      lat: 51.4700,
      lng: -0.4543,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Plus grand aéroport du Royaume-Uni, services premium 24/7'
    },
    {
      id: '3',
      code: 'FRA',
      name: 'Frankfurt am Main',
      city: 'Frankfurt',
      country: 'Germany',
      continent: 'Europe',
      lat: 50.0379,
      lng: 8.5622,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Hub majeur européen pour les connexions intercontinentales'
    },
    {
      id: '4',
      code: 'JFK',
      name: 'John F. Kennedy',
      city: 'New York',
      country: 'United States',
      continent: 'North America',
      lat: 40.6413,
      lng: -73.7781,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Porte d\'entrée principale vers New York, services VIP exclusifs'
    },
    {
      id: '5',
      code: 'LAX',
      name: 'Los Angeles International',
      city: 'Los Angeles',
      country: 'United States',
      continent: 'North America',
      lat: 33.9425,
      lng: -118.4081,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Hub principal de la côte ouest américaine'
    },
    {
      id: '6',
      code: 'NRT',
      name: 'Narita International',
      city: 'Tokyo',
      country: 'Japan',
      continent: 'Asia',
      lat: 35.7720,
      lng: 140.3929,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Principal aéroport international du Japon'
    },
    {
      id: '7',
      code: 'SIN',
      name: 'Changi Airport',
      city: 'Singapore',
      country: 'Singapore',
      continent: 'Asia',
      lat: 1.3644,
      lng: 103.9915,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Aéroport le plus primé au monde, services exceptionnels'
    },
    {
      id: '8',
      code: 'DXB',
      name: 'Dubai International',
      city: 'Dubai',
      country: 'UAE',
      continent: 'Middle East',
      lat: 25.2532,
      lng: 55.3657,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Hub ultra-moderne du Moyen-Orient, luxe absolu'
    },
    {
      id: '9',
      code: 'DOH',
      name: 'Hamad International',
      city: 'Doha',
      country: 'Qatar',
      continent: 'Middle East',
      lat: 25.2731,
      lng: 51.6080,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Aéroport dernier cri avec services premium'
    },
    {
      id: '10',
      code: 'CPT',
      name: 'Cape Town International',
      city: 'Cape Town',
      country: 'South Africa',
      continent: 'Africa',
      lat: -33.9686,
      lng: 18.6016,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Porte d\'entrée vers l\'Afrique australe'
    }
  ];

  const continents = [
    { value: 'all', label: 'All Continents', count: airports.length },
    { value: 'Europe', label: 'Europe', count: airports.filter(a => a.continent === 'Europe').length },
    { value: 'North America', label: 'North America', count: airports.filter(a => a.continent === 'North America').length },
    { value: 'Asia', label: 'Asia', count: airports.filter(a => a.continent === 'Asia').length },
    { value: 'Middle East', label: 'Middle East', count: airports.filter(a => a.continent === 'Middle East').length },
    { value: 'Africa', label: 'Africa', count: airports.filter(a => a.continent === 'Africa').length }
  ];

  // Filtrage des aéroports
  useEffect(() => {
    let filtered = airports;

    if (selectedContinent !== 'all') {
      filtered = filtered.filter(airport => airport.continent === selectedContinent);
    }

    if (searchTerm) {
      filtered = filtered.filter(airport => 
        airport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airport.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airport.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airport.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredAirports(filtered);
  }, [selectedContinent, searchTerm]);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-royal-blue-100 text-royal-blue-800 hover:bg-royal-blue-100">
            <Globe className="w-4 h-4 mr-2" />
            Carte Interactive
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Explorez Notre
            <span className="block text-air-france-red-600">Réseau Mondial</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cliquez sur n'importe quel marqueur d'aéroport pour découvrir les services disponibles, 
            les informations locales et les caractéristiques spéciales de cette destination.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Rechercher aéroports, villes, ou pays..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="lg:w-64">
            <Select value={selectedContinent} onValueChange={setSelectedContinent}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner continent" />
              </SelectTrigger>
              <SelectContent>
                {continents.map((continent) => (
                  <SelectItem key={continent.value} value={continent.value}>
                    {continent.label} ({continent.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Map Container avec sidebar */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Map */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <LeafletMap 
                  airports={filteredAirports}
                  onAirportSelect={setSelectedAirport}
                  onAirportHover={setHoveredAirport}
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Legend & Selected Airport */}
          <div className="space-y-6">
            {/* Legend */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Catégories d'Aéroports</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-air-france-red-600 rounded-full border-2 border-white shadow-md"></div>
                    <div>
                      <div className="font-medium text-gray-900">Premium</div>
                      <div className="text-sm text-gray-600">Portfolio complet de services</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-royal-blue-600 rounded-full border-2 border-white shadow-md"></div>
                    <div>
                      <div className="font-medium text-gray-900">Standard</div>
                      <div className="text-sm text-gray-600">Services principaux disponibles</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gray-600 rounded-full border-2 border-white shadow-md"></div>
                    <div>
                      <div className="font-medium text-gray-900">Régional</div>
                      <div className="text-sm text-gray-600">Meet & greet de base</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hovered/Selected Airport Info */}
            {(hoveredAirport || selectedAirport) && (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  {(() => {
                    const airport = hoveredAirport || selectedAirport;
                    if (!airport) return null;
                    
                    return (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900">{airport.code}</h3>
                          <Badge className={`${
                            airport.tier === 'premium' ? 'bg-air-france-red-600' : 
                            airport.tier === 'standard' ? 'bg-royal-blue-600' : 'bg-gray-600'
                          }`}>
                            <Star className="w-3 h-3 mr-1" />
                            {airport.tier}
                          </Badge>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 mb-2">{airport.name}</h4>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{airport.city}, {airport.country}</span>
                        </div>
                        
                        <p className="text-gray-700 mb-4 text-sm">{airport.description}</p>
                        
                        <div className="space-y-2 mb-6">
                          <h5 className="font-semibold text-gray-900">Services Disponibles:</h5>
                          <div className="space-y-1">
                            {airport.services.map((service, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-air-france-red-600 rounded-full mr-2"></div>
                                {service}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Button asChild className="w-full bg-royal-blue-900 hover:bg-royal-blue-800">
                          <a href="/booking">
                            <Plane className="w-4 h-4 mr-2" />
                            Réserver pour {airport.code}
                          </a>
                        </Button>
                      </>
                    );
                  })()}
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Stats horizontales en dessous */}
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-royal-blue-900 via-royal-blue-800 to-royal-blue-700 text-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-bold mb-2">Statistiques de Notre Réseau</h3>
              <p className="text-royal-blue-200">Découvrez l'étendue de notre couverture mondiale</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-air-france-red-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-air-france-red-400 mb-1">{filteredAirports.length}</div>
                <div className="text-royal-blue-200 text-sm font-medium">Affichés</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-air-france-red-400 mb-1">500+</div>
                <div className="text-royal-blue-200 text-sm font-medium">Réseau Total</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-air-france-red-400 mb-1">80+</div>
                <div className="text-royal-blue-200 text-sm font-medium">Pays</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-air-france-red-400 mb-1">150+</div>
                <div className="text-royal-blue-200 text-sm font-medium">Hubs Premium</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-air-france-red-400 mb-1">24/7</div>
                <div className="text-royal-blue-200 text-sm font-medium">Support Client</div>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-6 border-t border-royal-blue-700">
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-royal-blue-900">
                <a href="/contact">
                  Demander un Nouvel Aéroport
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InteractiveMap;