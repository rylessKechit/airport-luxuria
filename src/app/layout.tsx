import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Airport Luxuria - Premium Meet & Greet Services',
  description: 'Experience premium airport hospitality worldwide with our exclusive Meet & Greet services. French elegance meets international excellence.',
  keywords: 'airport, meet and greet, VIP, luxury, concierge, fast track, lounge access',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}