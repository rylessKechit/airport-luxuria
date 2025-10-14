import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import AirportHero from '@/components/sections/AirportHero';
import AirportServices from '@/components/sections/AirportServices';
import AirportInfo from '@/components/sections/AirportInfo';
import StructuredData from '@/components/seo/StructuredData';

// Base de données des aéroports pour SEO
const airportsData = {
  'cdg-paris-charles-de-gaulle': {
    code: 'CDG',
    name: 'Charles de Gaulle',
    city: 'Paris',
    country: 'France',
    description: 'Premier hub international français situé à Roissy-en-France',
    services: ['Meet & Greet Premium', 'Fast Track Security', 'VIP Lounge Access', 'Luggage Assistance', 'Private Chauffeur'],
    terminals: ['Terminal 1', 'Terminal 2A', 'Terminal 2B', 'Terminal 2C', 'Terminal 2D', 'Terminal 2E', 'Terminal 2F', 'Terminal 2G', 'Terminal 3'],
    coordinates: { lat: 49.0097, lng: 2.5479 },
    tier: 'premium',
    facts: {
      passengers: '76.2 millions (2019)',
      ranking: '2ème aéroport européen',
      opened: '1974',
      area: '32.38 km²'
    }
  },
  'lhr-london-heathrow': {
    code: 'LHR',
    name: 'Heathrow Airport',
    city: 'London',
    country: 'United Kingdom',
    description: 'Plus grand aéroport du Royaume-Uni et hub principal de British Airways',
    services: ['Meet & Greet Premium', 'Fast Track Security', 'VIP Lounge Access', 'Luggage Assistance', 'Private Chauffeur'],
    terminals: ['Terminal 2', 'Terminal 3', 'Terminal 4', 'Terminal 5'],
    coordinates: { lat: 51.4700, lng: -0.4543 },
    tier: 'premium',
    facts: {
      passengers: '80.9 millions (2019)',
      ranking: '1er aéroport européen',
      opened: '1946',
      area: '12.27 km²'
    }
  },
  'jfk-new-york-kennedy': {
    code: 'JFK',
    name: 'John F. Kennedy International',
    city: 'New York',
    country: 'United States',
    description: 'Principal aéroport international de New York, porte d\'entrée vers les États-Unis',
    services: ['Meet & Greet Premium', 'Fast Track Security', 'VIP Lounge Access', 'Luggage Assistance', 'Private Chauffeur'],
    terminals: ['Terminal 1', 'Terminal 2', 'Terminal 4', 'Terminal 5', 'Terminal 7', 'Terminal 8'],
    coordinates: { lat: 40.6413, lng: -73.7781 },
    tier: 'premium',
    facts: {
      passengers: '62.5 millions (2019)',
      ranking: '6ème aéroport américain',
      opened: '1948',
      area: '21.04 km²'
    }
  },
  'dxb-dubai-international': {
    code: 'DXB',
    name: 'Dubai International Airport',
    city: 'Dubai',
    country: 'United Arab Emirates',
    description: 'Hub ultra-moderne du Moyen-Orient, aéroport le plus fréquenté au monde pour le trafic international',
    services: ['Meet & Greet Premium', 'Fast Track Security', 'VIP Lounge Access', 'Luggage Assistance', 'Private Chauffeur'],
    terminals: ['Terminal 1', 'Terminal 2', 'Terminal 3'],
    coordinates: { lat: 25.2532, lng: 55.3657 },
    tier: 'premium',
    facts: {
      passengers: '86.4 millions (2019)',
      ranking: '1er aéroport mondial (international)',
      opened: '1960',
      area: '2,900 hectares'
    }
  }
};

type AirportPageProps = {
  params: { airport: string };
};

export async function generateStaticParams() {
  return Object.keys(airportsData).map((airport) => ({
    airport: airport,
  }));
}

export async function generateMetadata({ params }: AirportPageProps): Promise<Metadata> {
  const airport = airportsData[params.airport as keyof typeof airportsData];
  
  if (!airport) {
    return {
      title: 'Airport Not Found',
      description: 'The requested airport page could not be found.',
    };
  }

  return {
    title: `${airport.code} ${airport.name} Meet & Greet Services - Airport Luxuria`,
    description: `Premium Meet & Greet services at ${airport.name} (${airport.code}) in ${airport.city}, ${airport.country}. Fast Track Security, VIP Lounge Access, Luggage Assistance & Private Chauffeur available 24/7.`,
    keywords: [
      `${airport.code} meet and greet`,
      `${airport.name} VIP services`,
      `${airport.city} airport assistance`,
      `${airport.code} fast track`,
      `${airport.name} lounge access`,
      `${airport.city} airport concierge`,
      `${airport.code} premium services`,
      `${airport.name} luggage assistance`,
      `${airport.city} private chauffeur`,
      `${airport.country} airport services`
    ],
    alternates: {
      canonical: `https://airportluxuria.com/destinations/${params.airport}`
    },
    openGraph: {
      title: `${airport.code} ${airport.name} Premium Meet & Greet Services`,
      description: `Experience French elegance at ${airport.name}. Premium Meet & Greet services with Fast Track Security, VIP Lounge Access, and Luggage Assistance.`,
      url: `https://airportluxuria.com/destinations/${params.airport}`,
      images: [
        {
          url: `/images/airports/${airport.code.toLowerCase()}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${airport.name} Premium Services`,
        },
      ],
    },
  };
}

export default function AirportPage({ params }: AirportPageProps) {
  const airport = airportsData[params.airport as keyof typeof airportsData];

  if (!airport) {
    notFound();
  }

  const airportStructuredData = {
    "@context": "https://schema.org",
    "@type": "Airport",
    "name": airport.name,
    "iataCode": airport.code,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": airport.city,
      "addressCountry": airport.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": airport.coordinates.lat,
      "longitude": airport.coordinates.lng
    },
    "serviceArea": {
      "@type": "Service",
      "name": "Premium Meet & Greet Services",
      "provider": {
        "@type": "Organization",
        "name": "Airport Luxuria"
      }
    }
  };

  return (
    <>
      <StructuredData type="service" data={airportStructuredData} />
      <Layout>
        <AirportHero airport={airport} />
        <AirportServices airport={airport} />
        <AirportInfo airport={airport} />
      </Layout>
    </>
  );
}