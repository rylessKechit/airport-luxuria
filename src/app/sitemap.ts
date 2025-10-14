import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://airportluxuria.com';
  const currentDate = new Date();

  // Pages principales
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Ajouter des pages spécifiques aux aéroports
  const majorAirports = [
    'CDG-paris-charles-de-gaulle',
    'LHR-london-heathrow',
    'JFK-new-york-kennedy',
    'LAX-los-angeles',
    'DXB-dubai-international',
    'NRT-tokyo-narita',
    'SIN-singapore-changi',
    'FRA-frankfurt',
    'DOH-doha-hamad',
    'CPT-cape-town'
  ];

  const airportPages = majorAirports.map(airport => ({
    url: `${baseUrl}/destinations/${airport}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...airportPages];
}