export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  image: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ultimate-guide-airport-fast-track-security',
    title: 'The Ultimate Guide to Airport Fast Track Security in 2025',
    excerpt: 'Discover how Fast Track Security can save you hours at major international airports. Complete guide with tips, pricing, and availability.',
    content: `# The Ultimate Guide to Airport Fast Track Security in 2025

Fast Track Security has become an essential service for time-conscious travelers...`,
    author: 'Sophie Laurent',
    publishedAt: '2025-01-15',
    readTime: 8,
    category: 'Airport Services',
    tags: ['fast track', 'security', 'time saving', 'business travel'],
    image: '/images/blog/fast-track-security.jpg',
    seo: {
      metaTitle: 'Ultimate Guide to Airport Fast Track Security 2025 - Save Hours',
      metaDescription: 'Complete guide to Fast Track Security at major airports. Learn how to skip queues, save time, and breeze through airport security like a VIP traveler.',
      keywords: ['fast track security', 'airport security', 'skip airport lines', 'priority security', 'business travel tips']
    }
  },
  {
    slug: 'vip-airport-lounges-worth-access',
    title: 'Are VIP Airport Lounges Worth the Access Fee? Complete Analysis',
    excerpt: 'An honest review of airport lounges worldwide. Compare amenities, costs, and decide if lounge access is worth it for your travel style.',
    content: `# Are VIP Airport Lounges Worth the Access Fee?

Airport lounges have evolved from simple waiting areas to luxury experiences...`,
    author: 'Marcus Chen',
    publishedAt: '2025-01-12',
    readTime: 12,
    category: 'Travel Tips',
    tags: ['vip lounge', 'airport amenities', 'travel comfort', 'premium travel'],
    image: '/images/blog/vip-lounges.jpg',
    seo: {
      metaTitle: 'VIP Airport Lounges 2025: Complete Cost vs Value Analysis',
      metaDescription: 'Honest review of airport VIP lounges worldwide. Compare amenities, access fees, and find out if lounge access is worth it for your travel needs.',
      keywords: ['vip airport lounge', 'airport lounge access', 'lounge review', 'premium airport services', 'travel comfort']
    }
  },
  {
    slug: 'meet-greet-services-business-travelers',
    title: 'Why Meet & Greet Services Are Essential for Business Travelers',
    excerpt: 'How Meet & Greet services can transform your business travel experience. Time savings, stress reduction, and productivity benefits explained.',
    content: `# Why Meet & Greet Services Are Essential for Business Travelers

In today's fast-paced business world, time is money...`,
    author: 'Isabella Rodriguez',
    publishedAt: '2025-01-10',
    readTime: 6,
    category: 'Business Travel',
    tags: ['meet and greet', 'business travel', 'productivity', 'time management'],
    image: '/images/blog/business-travel.jpg',
    seo: {
      metaTitle: 'Meet & Greet Services for Business Travelers - ROI Analysis 2025',
      metaDescription: 'Discover how Meet & Greet services boost business travel efficiency. Time savings, stress reduction, and productivity benefits with real ROI examples.',
      keywords: ['meet and greet business', 'business travel services', 'corporate travel', 'travel efficiency', 'airport assistance']
    }
  }
];