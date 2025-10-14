import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import Destinations from '@/components/sections/Destinations';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <HowItWorks />
      <Destinations />
      <Testimonials />
      <FinalCTA />
    </Layout>
  );
}