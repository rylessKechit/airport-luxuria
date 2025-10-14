'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  Plane, 
  Globe,
  ArrowRight,
  Star
} from 'lucide-react';

const Destinations = () => {
  const [activeContinent, setActiveContinent] = useState('Europe');

  const continents = [
    { name: 'Europe', airports: 150, color: 'bg-royal-blue-600' },
    { name: 'North America', airports: 120, color: 'bg-air-france-red-600' },
    { name: 'Asia', airports: 180, color: 'bg-royal-blue-600' },
    { name: 'Middle East', airports: 45, color: 'bg-air-france-red-600' },
    { name: 'Africa', airports: 35, color: 'bg-royal-blue-600' }
  ];

  const topAirports = {
    Europe: [
      { code: 'CDG', name: 'Charles de Gaulle', city: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { code: 'LHR', name: 'Heathrow', city: 'London', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { code: 'FRA', name: 'Frankfurt', city: 'Frankfurt', country: 'Germany', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ],
    'North America': [
      { code: 'JFK', name: 'John F. Kennedy', city: 'New York', country: 'USA', image: 'https://images.unsplash.com/photo-1583063946217-c2e5aa50715e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { code: 'LAX', name: 'Los Angeles Intl', city: 'Los Angeles', country: 'USA', image: 'https://images.unsplash.com/photo-1581553680321-253d27a2c5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { code: 'YYZ', name: 'Toronto Pearson', city: 'Toronto', country: 'Canada', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ],
    Asia: [
      { code: 'NRT', name: 'Narita', city: 'Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1591644017123-ff2dfe6bca2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { code: 'SIN', name: 'Changi', city: 'Singapore', country: 'Singapore', image: 'https://images.unsplash.com/photo-1570793529430-22c7a79c1877?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { code: 'HKG', name: 'Hong Kong Intl', city: 'Hong Kong', country: 'Hong Kong', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ],
    'Middle East': [
      { code: 'DXB', name: 'Dubai Intl', city: 'Dubai', country: 'UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { code: 'DOH', name: 'Hamad Intl', city: 'Doha', country: 'Qatar', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ],
    Africa: [
      { code: 'CPT', name: 'Cape Town Intl', city: 'Cape Town', country: 'South Africa', image: 'https://images.unsplash.com/photo-1578316499019-d25e9a9df4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { code: 'CAI', name: 'Cairo Intl', city: 'Cairo', country: 'Egypt', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ]
  };

  return (
    <section className="section-padding bg-gradient-to-br from-royal-blue-50 to-sky-blue-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-royal-blue-100 text-royal-blue-800 hover:bg-royal-blue-100">
            <Globe className="w-4 h-4 mr-2" />
            Global Network
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Available at
            <span className="block text-air-france-red-600">500+ Airports</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From major international hubs to boutique airports, our premium Meet & Greet 
            services are available across six continents.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {continents.map((continent, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-300 border-2 ${
                activeContinent === continent.name 
                  ? 'border-air-france-red-600 shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setActiveContinent(continent.name)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${continent.color} rounded-xl mx-auto mb-3 flex items-center justify-center`}>
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{continent.name}</h3>
                <p className="text-2xl font-bold text-air-france-red-600 mb-1">{continent.airports}</p>
                <p className="text-sm text-gray-500">Airports</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Airports */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
            Featured Airports in {activeContinent}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topAirports[activeContinent as keyof typeof topAirports]?.map((airport, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48">
                  <img
                    src={airport.image}
                    alt={`${airport.name} Airport`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold">{airport.code}</div>
                    <div className="text-sm opacity-90">{airport.city}</div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-air-france-red-600 hover:bg-air-france-red-600">
                    <Star className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{airport.name}</h4>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{airport.city}, {airport.country}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Available 24/7</span>
                    <Button variant="ghost" size="sm" className="text-air-france-red-600 hover:text-air-france-red-700">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4">
                Don't See Your Airport?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                We're constantly expanding our network. Contact us to check availability 
                at your departure or arrival airport.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-royal-blue-900 hover:bg-royal-blue-800">
                  <Link href="/destinations">
                    View All Destinations
                    <Globe className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-air-france-red-600 text-air-france-red-600 hover:bg-air-france-red-600 hover:text-white">
                  <Link href="/contact">
                    Request New Airport
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Destinations;