import Layout from '@/components/layout/Layout';
import DestinationsHero from '@/components/sections/DestinationsHero';
import InteractiveMap from '@/components/sections/InteractiveMap';
import DestinationStats from '@/components/sections/DestinationStats';
import DestinationsCTA from '@/components/sections/DestinationsCTA';

export const metadata = {
  title: 'Global Airport Destinations | 500+ Airports Worldwide',
  description: 'Discover our premium Meet & Greet services available at 500+ airports across 6 continents. Interactive map with real-time availability.',
  keywords: 'airport destinations, global airports, international airports, meet and greet locations'
};

export default function DestinationsPage() {
  return (
    <Layout>
      <DestinationsHero />
      <InteractiveMap />
      <DestinationStats />
      <DestinationsCTA />
    </Layout>
  );
}