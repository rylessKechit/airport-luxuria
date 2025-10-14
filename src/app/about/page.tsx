import Layout from '@/components/layout/Layout';
import AboutHero from '@/components/sections/AboutHero';
import AboutStory from '@/components/sections/AboutStory';
import AboutValues from '@/components/sections/AboutValues';
import AboutCertifications from '@/components/sections/AboutCertifications';

export const metadata = {
  title: 'About Airport Luxuria | French Elegance in Airport Services',
  description: 'Discover the story behind Airport Luxuria, our French heritage, international expertise, and commitment to premium airport hospitality worldwide.',
  keywords: 'about airport luxuria, french elegance, airport services, premium hospitality, meet and greet company'
};

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCertifications />
    </Layout>
  );
}