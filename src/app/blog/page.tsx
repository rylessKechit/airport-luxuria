import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import BlogHero from '@/components/sections/BlogHero';
import BlogGrid from '@/components/sections/BlogGrid';

export const metadata: Metadata = {
  title: 'Travel Tips & Airport Guides - Airport Luxuria Blog',
  description: 'Expert travel tips, airport guides, and luxury travel insights. Learn how to navigate airports like a VIP and make your journey more comfortable with our premium advice.',
  keywords: [
    'travel tips',
    'airport guides',
    'luxury travel blog',
    'airport navigation',
    'travel advice',
    'VIP travel tips',
    'airport hacks',
    'premium travel',
    'business travel guide',
    'airport lounge tips'
  ],
  alternates: {
    canonical: 'https://airportluxuria.com/blog'
  },
};

export default function BlogPage() {
  return (
    <Layout>
      <BlogHero />
      <BlogGrid />
    </Layout>
  );
}