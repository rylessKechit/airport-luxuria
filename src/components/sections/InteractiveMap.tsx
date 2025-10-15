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
    // Europe
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
      code: 'AMS',
      name: 'Amsterdam Schiphol',
      city: 'Amsterdam',
      country: 'Netherlands',
      continent: 'Europe',
      lat: 52.3105,
      lng: 4.7683,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Hub européen principal avec services premium exceptionnels'
    },
    {
      id: '5',
      code: 'MAD',
      name: 'Madrid-Barajas',
      city: 'Madrid',
      country: 'Spain',
      continent: 'Europe',
      lat: 40.4839,
      lng: -3.5680,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Principal aéroport espagnol, porte d\'entrée vers l\'Amérique latine'
    },
    {
      id: '6',
      code: 'FCO',
      name: 'Leonardo da Vinci',
      city: 'Rome',
      country: 'Italy',
      continent: 'Europe',
      lat: 41.8003,
      lng: 12.2389,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Hub italien avec services VIP dans un cadre historique'
    },
    {
      id: '7',
      code: 'MUC',
      name: 'Munich Airport',
      city: 'Munich',
      country: 'Germany',
      continent: 'Europe',
      lat: 48.3537,
      lng: 11.7751,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Aéroport bavarois moderne avec excellents services'
    },
    {
      id: '8',
      code: 'ZUR',
      name: 'Zurich Airport',
      city: 'Zurich',
      country: 'Switzerland',
      continent: 'Europe',
      lat: 47.4647,
      lng: 8.5492,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Excellence suisse en matière de services aéroportuaires'
    },
    {
      id: '9',
      code: 'VIE',
      name: 'Vienna International',
      city: 'Vienna',
      country: 'Austria',
      continent: 'Europe',
      lat: 48.1103,
      lng: 16.5697,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Hub central européen avec charme autrichien'
    },
    {
      id: '10',
      code: 'ARN',
      name: 'Stockholm Arlanda',
      city: 'Stockholm',
      country: 'Sweden',
      continent: 'Europe',
      lat: 59.6519,
      lng: 17.9186,
      tier: 'standard',
      services: ['Meet & Greet', 'Fast Track'],
      description: 'Principal aéroport scandinave'
    },
    {
      id: '11',
      code: 'IST',
      name: 'Istanbul Airport',
      city: 'Istanbul',
      country: 'Turkey',
      continent: 'Europe',
      lat: 41.2753,
      lng: 28.7519,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Nouveau hub géant entre l\'Europe et l\'Asie'
    },
    {
      id: '12',
      code: 'LGW',
      name: 'London Gatwick',
      city: 'London',
      country: 'United Kingdom',
      continent: 'Europe',
      lat: 51.1481,
      lng: -0.1903,
      tier: 'standard',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Second aéroport de Londres avec services premium'
    },

    // North America
    {
      id: '13',
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
      id: '14',
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
      id: '15',
      code: 'ORD',
      name: 'O\'Hare International',
      city: 'Chicago',
      country: 'United States',
      continent: 'North America',
      lat: 41.9742,
      lng: -87.9073,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Hub majeur du Midwest américain'
    },
    {
      id: '16',
      code: 'MIA',
      name: 'Miami International',
      city: 'Miami',
      country: 'United States',
      continent: 'North America',
      lat: 25.7959,
      lng: -80.2870,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Porte d\'entrée vers l\'Amérique latine et les Caraïbes'
    },
    {
      id: '17',
      code: 'DFW',
      name: 'Dallas/Fort Worth',
      city: 'Dallas',
      country: 'United States',
      continent: 'North America',
      lat: 32.8998,
      lng: -97.0403,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Hub central américain avec services complets'
    },
    {
      id: '18',
      code: 'ATL',
      name: 'Hartsfield-Jackson',
      city: 'Atlanta',
      country: 'United States',
      continent: 'North America',
      lat: 33.6407,
      lng: -84.4277,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Aéroport le plus fréquenté au monde'
    },
    {
      id: '19',
      code: 'SFO',
      name: 'San Francisco International',
      city: 'San Francisco',
      country: 'United States',
      continent: 'North America',
      lat: 37.6213,
      lng: -122.3790,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Hub technologique de la côte ouest'
    },
    {
      id: '20',
      code: 'YYZ',
      name: 'Toronto Pearson',
      city: 'Toronto',
      country: 'Canada',
      continent: 'North America',
      lat: 43.6777,
      lng: -79.6248,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Principal hub canadien vers l\'international'
    },
    {
      id: '21',
      code: 'YVR',
      name: 'Vancouver International',
      city: 'Vancouver',
      country: 'Canada',
      continent: 'North America',
      lat: 49.1967,
      lng: -123.1815,
      tier: 'standard',
      services: ['Meet & Greet', 'Fast Track'],
      description: 'Porte d\'entrée canadienne vers l\'Asie-Pacifique'
    },
    {
      id: '22',
      code: 'MEX',
      name: 'Mexico City International',
      city: 'Mexico City',
      country: 'Mexico',
      continent: 'North America',
      lat: 19.4363,
      lng: -99.0721,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Hub principal de l\'Amérique latine'
    },
    {
      id: '23',
      code: 'LAS',
      name: 'McCarran International',
      city: 'Las Vegas',
      country: 'United States',
      continent: 'North America',
      lat: 36.0840,
      lng: -115.1537,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Destination de luxe avec services VIP exclusifs'
    },

    // Asia
    {
      id: '24',
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
      id: '25',
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
      id: '26',
      code: 'HKG',
      name: 'Hong Kong International',
      city: 'Hong Kong',
      country: 'Hong Kong',
      continent: 'Asia',
      lat: 22.3080,
      lng: 113.9185,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Hub asiatique majeur avec services de luxe'
    },
    {
      id: '27',
      code: 'ICN',
      name: 'Incheon International',
      city: 'Seoul',
      country: 'South Korea',
      continent: 'Asia',
      lat: 37.4602,
      lng: 126.4407,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Hub technologique coréen avec services modernes'
    },
    {
      id: '28',
      code: 'BKK',
      name: 'Suvarnabhumi',
      city: 'Bangkok',
      country: 'Thailand',
      continent: 'Asia',
      lat: 13.6900,
      lng: 100.7501,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Hub de l\'Asie du Sud-Est avec hospitalité thaïlandaise'
    },
    {
      id: '29',
      code: 'KUL',
      name: 'Kuala Lumpur International',
      city: 'Kuala Lumpur',
      country: 'Malaysia',
      continent: 'Asia',
      lat: 2.7456,
      lng: 101.7072,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Hub moderne de la Malaisie'
    },
    {
      id: '30',
      code: 'PEK',
      name: 'Beijing Capital',
      city: 'Beijing',
      country: 'China',
      continent: 'Asia',
      lat: 40.0799,
      lng: 116.6031,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Principal aéroport de la capitale chinoise'
    },
    {
      id: '31',
      code: 'PVG',
      name: 'Shanghai Pudong',
      city: 'Shanghai',
      country: 'China',
      continent: 'Asia',
      lat: 31.1443,
      lng: 121.8083,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Hub financier de la Chine'
    },
    {
      id: '32',
      code: 'DEL',
      name: 'Indira Gandhi International',
      city: 'New Delhi',
      country: 'India',
      continent: 'Asia',
      lat: 28.5562,
      lng: 77.1000,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Principal aéroport indien'
    },
    {
      id: '33',
      code: 'BOM',
      name: 'Chhatrapati Shivaji',
      city: 'Mumbai',
      country: 'India',
      continent: 'Asia',
      lat: 19.0896,
      lng: 72.8656,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Hub commercial de l\'Inde'
    },
    {
      id: '34',
      code: 'CAN',
      name: 'Guangzhou Baiyun',
      city: 'Guangzhou',
      country: 'China',
      continent: 'Asia',
      lat: 23.3924,
      lng: 113.2988,
      tier: 'standard',
      services: ['Meet & Greet', 'Fast Track'],
      description: 'Hub du sud de la Chine'
    },
    {
      id: '35',
      code: 'TPE',
      name: 'Taiwan Taoyuan',
      city: 'Taipei',
      country: 'Taiwan',
      continent: 'Asia',
      lat: 25.0797,
      lng: 121.2342,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Principal aéroport de Taïwan'
    },

    // Middle East
    {
      id: '36',
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
      id: '37',
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
      id: '38',
      code: 'AUH',
      name: 'Abu Dhabi International',
      city: 'Abu Dhabi',
      country: 'UAE',
      continent: 'Middle East',
      lat: 24.4330,
      lng: 54.6511,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Hub luxueux de la capitale des Émirats'
    },
    {
      id: '39',
      code: 'KWI',
      name: 'Kuwait International',
      city: 'Kuwait City',
      country: 'Kuwait',
      continent: 'Middle East',
      lat: 29.2267,
      lng: 47.9689,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Hub du Golfe Persique'
    },
    {
      id: '40',
      code: 'RUH',
      name: 'King Khalid International',
      city: 'Riyadh',
      country: 'Saudi Arabia',
      continent: 'Middle East',
      lat: 24.9576,
      lng: 46.6988,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Principal aéroport saoudien'
    },
    {
      id: '41',
      code: 'JED',
      name: 'King Abdulaziz International',
      city: 'Jeddah',
      country: 'Saudi Arabia',
      continent: 'Middle East',
      lat: 21.6796,
      lng: 39.1564,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Porte d\'entrée vers La Mecque'
    },
    {
      id: '42',
      code: 'TLV',
      name: 'Ben Gurion Airport',
      city: 'Tel Aviv',
      country: 'Israel',
      continent: 'Middle East',
      lat: 32.0055,
      lng: 34.8854,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Hub technologique du Moyen-Orient'
    },

    // Africa
    {
      id: '43',
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
    },
    {
      id: '44',
      code: 'JNB',
      name: 'O.R. Tambo International',
      city: 'Johannesburg',
      country: 'South Africa',
      continent: 'Africa',
      lat: -26.1367,
      lng: 28.2411,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Hub principal de l\'Afrique subsaharienne'
    },
    {
      id: '45',
      code: 'CAI',
      name: 'Cairo International',
      city: 'Cairo',
      country: 'Egypt',
      continent: 'Africa',
      lat: 30.1219,
      lng: 31.4056,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Hub de l\'Afrique du Nord et du Moyen-Orient'
    },
    {
      id: '46',
      code: 'ADD',
      name: 'Addis Ababa Bole',
      city: 'Addis Ababa',
      country: 'Ethiopia',
      continent: 'Africa',
      lat: 8.9806,
      lng: 38.7626,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Hub de l\'Afrique de l\'Est'
    },
    {
      id: '47',
      code: 'LOS',
      name: 'Murtala Muhammed',
      city: 'Lagos',
      country: 'Nigeria',
      continent: 'Africa',
      lat: 6.5774,
      lng: 3.3212,
      tier: 'standard',
      services: ['Meet & Greet'],
      description: 'Principal aéroport du Nigeria'
    },
    {
      id: '48',
      code: 'CMN',
      name: 'Mohammed V International',
      city: 'Casablanca',
      country: 'Morocco',
      continent: 'Africa',
      lat: 33.3675,
      lng: -7.5898,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Hub du Maghreb vers l\'Europe'
    },
    {
      id: '49',
      code: 'NBO',
      name: 'Jomo Kenyatta International',
      city: 'Nairobi',
      country: 'Kenya',
      continent: 'Africa',
      lat: -1.3192,
      lng: 36.9278,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Hub de l\'Afrique de l\'Est anglophone'
    },

    // Oceania
    {
      id: '50',
      code: 'SYD',
      name: 'Kingsford Smith',
      city: 'Sydney',
      country: 'Australia',
      continent: 'Oceania',
      lat: -33.9399,
      lng: 151.1753,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Principal aéroport australien avec services premium'
    },
    {
      id: '51',
      code: 'MEL',
      name: 'Melbourne Airport',
      city: 'Melbourne',
      country: 'Australia',
      continent: 'Oceania',
      lat: -37.6690,
      lng: 144.8410,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Hub culturel de l\'Australie'
    },
    {
      id: '52',
      code: 'AKL',
      name: 'Auckland Airport',
      city: 'Auckland',
      country: 'New Zealand',
      continent: 'Oceania',
      lat: -37.0082,
      lng: 174.7850,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Porte d\'entrée vers la Nouvelle-Zélande'
    },
    {
      id: '53',
      code: 'BNE',
      name: 'Brisbane Airport',
      city: 'Brisbane',
      country: 'Australia',
      continent: 'Oceania',
      lat: -27.3942,
      lng: 153.1218,
      tier: 'standard',
      services: ['Meet & Greet', 'Fast Track'],
      description: 'Hub du Queensland australien'
    },
    {
      id: '54',
      code: 'PER',
      name: 'Perth Airport',
      city: 'Perth',
      country: 'Australia',
      continent: 'Oceania',
      lat: -31.9403,
      lng: 115.9669,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Porte occidentale de l\'Australie'
    },

    // South America
    {
      id: '55',
      code: 'GRU',
      name: 'São Paulo–Guarulhos',
      city: 'São Paulo',
      country: 'Brazil',
      continent: 'South America',
      lat: -23.4356,
      lng: -46.4731,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge'],
      description: 'Principal hub de l\'Amérique du Sud'
    },
    {
      id: '56',
      code: 'EZE',
      name: 'Ezeiza International',
      city: 'Buenos Aires',
      country: 'Argentina',
      continent: 'South America',
      lat: -34.8222,
      lng: -58.5358,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Hub argentin vers l\'international'
    },
    {
      id: '57',
      code: 'BOG',
      name: 'El Dorado International',
      city: 'Bogotá',
      country: 'Colombia',
      continent: 'South America',
      lat: 4.7016,
      lng: -74.1469,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Hub colombien d\'altitude'
    },
    {
      id: '58',
      code: 'LIM',
      name: 'Jorge Chávez International',
      city: 'Lima',
      country: 'Peru',
      continent: 'South America',
      lat: -12.0219,
      lng: -77.1143,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Porte d\'entrée vers le Pérou'
    },
    {
      id: '59',
      code: 'SCL',
      name: 'Arturo Merino Benítez',
      city: 'Santiago',
      country: 'Chile',
      continent: 'South America',
      lat: -33.3928,
      lng: -70.7858,
      tier: 'standard',
      services: ['Meet & Greet', 'VIP Lounge'],
      description: 'Hub chilien vers le Pacifique'
    },
    {
      id: '60',
      code: 'GIG',
      name: 'Rio de Janeiro–Galeão',
      city: 'Rio de Janeiro',
      country: 'Brazil',
      continent: 'South America',
      lat: -22.8099,
      lng: -43.2505,
      tier: 'premium',
      services: ['Meet & Greet', 'Fast Track', 'VIP Lounge', 'Chauffeur'],
      description: 'Aéroport iconique de Rio avec services premium'
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