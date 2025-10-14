'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  MapPin, 
  Plane, 
  Users,
  Star,
  Clock
} from 'lucide-react';

const DestinationStats = () => {
  const stats = [
    {
      icon: Globe,
      number: '500+',
      label: 'Global Airports',
      description: 'Premium services across major international hubs'
    },
    {
      icon: MapPin,
      number: '80+',
      label: 'Countries',
      description: 'Extensive coverage across six continents'
    },
    {
      icon: Plane,
      number: '150+',
      label: 'Premium Hubs',
      description: 'Full-service airports with VIP facilities'
    },
    {
      icon: Users,
      number: '2,500+',
      label: 'Monthly Travelers',
      description: 'Satisfied clients choosing Airport Luxuria'
    }
  ];

  const continentData = [
    { name: 'Europe', airports: 150, color: 'bg-royal-blue-600', popular: ['CDG', 'LHR', 'FRA', 'AMS'] },
    { name: 'North America', airports: 120, color: 'bg-air-france-red-600', popular: ['JFK', 'LAX', 'YYZ', 'ORD'] },
    { name: 'Asia', airports: 180, color: 'bg-royal-blue-600', popular: ['NRT', 'SIN', 'HKG', 'ICN'] },
    { name: 'Middle East', airports: 45, color: 'bg-air-france-red-600', popular: ['DXB', 'DOH', 'AUH', 'KWI'] },
    { name: 'Africa', airports: 35, color: 'bg-royal-blue-600', popular: ['CPT', 'CAI', 'JNB', 'CMN'] },
    { name: 'Oceania', airports: 25, color: 'bg-air-france-red-600', popular: ['SYD', 'MEL', 'AKL', 'BNE'] }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        {/* Global Stats */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-air-france-red-100 text-air-france-red-800 hover:bg-air-france-red-100">
            <Star className="w-4 h-4 mr-2" />
            Global Reach
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-12">
            Our Network
            <span className="block text-royal-blue-900">By the Numbers</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-royal-blue-900 to-royal-blue-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-air-france-red-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-900 mb-3">{stat.label}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continental Breakdown */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Coverage by Continent
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {continentData.map((continent, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">{continent.name}</h4>
                    <div className={`w-4 h-4 ${continent.color} rounded-full`}></div>
                  </div>
                  
                  <div className="text-3xl font-bold text-air-france-red-600 mb-4">
                    {continent.airports}
                    <span className="text-lg text-gray-600 ml-1">airports</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Popular Destinations:</p>
                    <div className="flex flex-wrap gap-2">
                      {continent.popular.map((airport, airportIndex) => (
                        <Badge key={airportIndex} variant="outline" className="text-xs">
                          {airport}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Availability */}
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-royal-blue-900 to-royal-blue-700 text-white">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6">
                  Service Availability Worldwide
                </h3>
                <p className="text-royal-blue-100 text-lg mb-8 leading-relaxed">
                  Our comprehensive network ensures consistent, high-quality service 
                  regardless of your destination. Every airport in our network maintains 
                  our strict standards of French elegance and professional excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-air-france-red-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-air-france-red-400 mb-1">24/7</div>
                  <div className="text-royal-blue-200 text-sm">Global Support</div>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-air-france-red-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-air-france-red-400 mb-1">4.9★</div>
                  <div className="text-royal-blue-200 text-sm">Service Rating</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-air-france-red-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-air-france-red-400 mb-1">98%</div>
                  <div className="text-royal-blue-200 text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 text-air-france-red-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-air-france-red-400 mb-1">50+</div>
                  <div className="text-royal-blue-200 text-sm">Languages Supported</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DestinationStats;