import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import Destinations from '@/components/sections/Destinations';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Airport Luxuria - Premium Meet & Greet Services at 500+ Airports Worldwide',
  description: 'Experience French elegance with our premium Meet & Greet services at 500+ airports worldwide. Fast Track Security, VIP Lounge Access, Luggage Assistance & Private Chauffeur. Book today!',
  keywords: [
    'airport meet and greet',
    'premium airport services',
    'VIP airport assistance',
    'fast track security',
    'airport lounge access',
    'luxury travel services',
    'french elegance airport',
    'international airport services',
    'private airport chauffeur',
    'airport concierge services',
    'CDG meet and greet',
    'Heathrow VIP services',
    'Dubai airport assistance',
    'JFK premium services'
  ],
  alternates: {
    canonical: 'https://airportluxuria.com'
  },
  openGraph: {
    title: 'Airport Luxuria - Premium Meet & Greet Services Worldwide',
    description: 'Experience French elegance at 500+ airports worldwide. Premium Meet & Greet services with Fast Track Security, VIP Lounge Access, and Luggage Assistance.',
    url: 'https://airportluxuria.com',
    images: [
      {
        url: '/images/logo.webp',
        width: 500,
        height: 750,
        alt: 'Airport Luxuria Premium Meet & Greet Services',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="localBusiness" />
      <Layout>
        <Hero />
        <Services />
        <HowItWorks />
        <Destinations />
        <Testimonials />
        <FinalCTA />
      </Layout>
    </>
  );
}