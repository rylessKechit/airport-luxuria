import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://airportluxuria.com'),
  title: {
    default: 'Airport Luxuria - Premium Meet & Greet Services Worldwide',
    template: '%s | Airport Luxuria'
  },
  description: 'Experience French elegance at 500+ airports worldwide. Premium Meet & Greet services with Fast Track Security, VIP Lounge Access, and Luggage Assistance. Book your luxury airport experience today.',
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
    'airport concierge services'
  ],
  authors: [{ name: 'Airport Luxuria' }],
  creator: 'Airport Luxuria',
  publisher: 'Airport Luxuria',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://airportluxuria.com',
    siteName: 'Airport Luxuria',
    title: 'Airport Luxuria - Premium Meet & Greet Services Worldwide',
    description: 'Experience French elegance at 500+ airports worldwide. Premium Meet & Greet services with Fast Track Security, VIP Lounge Access, and Luggage Assistance.',
    images: [
      {
        url: '/images/logo.webp',
        width: 500,
        height: 750,
        alt: 'Airport Luxuria - Premium Airport Services',
      },
    ],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'travel',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a8a' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://airportluxuria.com" />
        <link rel="alternate" hrefLang="en" href="https://airportluxuria.com" />
        <link rel="alternate" hrefLang="fr" href="https://airportluxuria.com/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://airportluxuria.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}