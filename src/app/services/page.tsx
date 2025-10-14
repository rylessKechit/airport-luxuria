import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import ServicesHero from '@/components/sections/ServicesHero';
import ServicesDetailed from '@/components/sections/ServicesDetailed';
import ServiceProcess from '@/components/sections/ServiceProcess';
import ServicesCTA from '@/components/sections/ServicesCTA';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Premium Airport Services - Meet & Greet, Fast Track & VIP Lounge Access',
  description: 'Discover our premium airport services: Meet & Greet with Fast Track Security, VIP Lounge Access, Luggage Assistance, and optional Private Chauffeur. French elegance at 500+ airports.',
  keywords: [
    'airport meet and greet services',
    'fast track security airport',
    'VIP lounge access',
    'airport luggage assistance',
    'premium airport services',
    'private airport chauffeur',
    'luxury airport concierge',
    'french airport services',
    'international airport assistance',
    'business travel services'
  ],
  alternates: {
    canonical: 'https://airportluxuria.com/services'
  },
  openGraph: {
    title: 'Premium Airport Services - Meet & Greet, Fast Track & VIP Access',
    description: 'Discover our premium airport services: Meet & Greet with Fast Track Security, VIP Lounge Access, Luggage Assistance, and optional Private Chauffeur.',
    url: 'https://airportluxuria.com/services',
    images: [
      {
        url: '/images/logo.webp',
        width: 500,
        height: 750,
        alt: 'Airport Luxuria Premium Services',
      },
    ],
  },
};

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Premium Airport Meet & Greet Services",
  "description": "Complete airport assistance including Fast Track Security, VIP Lounge Access, and Luggage Assistance",
  "provider": {
    "@type": "Organization",
    "name": "Airport Luxuria"
  },
  "serviceOutput": "Stress-free airport experience",
  "category": "Airport Services",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData type="service" data={servicesStructuredData} />
      <Layout>
        <ServicesHero />
        <ServicesDetailed />
        <ServiceProcess />
        <ServicesCTA />
      </Layout>
    </>
  );
}