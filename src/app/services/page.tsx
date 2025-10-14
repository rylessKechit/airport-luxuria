import Layout from '@/components/layout/Layout';
import ServicesHero from '@/components/sections/ServicesHero';
import ServicesDetailed from '@/components/sections/ServicesDetailed';
import ServiceProcess from '@/components/sections/ServiceProcess';
import ServicesCTA from '@/components/sections/ServicesCTA';

export const metadata = {
  title: 'Premium Airport Services | Meet & Greet + Private Chauffeur',
  description: 'Discover our exclusive Meet & Greet Premium service with Fast Track Security, VIP Lounge Access, and Luggage Assistance. Optional Private Chauffeur available.',
  keywords: 'meet and greet, airport service, vip lounge, fast track, luggage assistance, private chauffeur'
};

export default function ServicesPage() {
  return (
    <Layout>
      <ServicesHero />
      <ServicesDetailed />
      <ServiceProcess />
      <ServicesCTA />
    </Layout>
  );
}