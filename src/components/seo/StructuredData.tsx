'use client';

import Script from 'next/script';

interface StructuredDataProps {
  type: 'organization' | 'service' | 'localBusiness' | 'faq' | 'breadcrumb';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Airport Luxuria",
          "url": "https://airportluxuria.com",
          "logo": "https://airportluxuria.com/images/logo.png",
          "description": "Premium Meet & Greet airport services worldwide with French elegance",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33-1-XX-XX-XX-XX",
            "contactType": "customer service",
            "availableLanguage": ["English", "French", "Spanish", "German", "Italian", "Arabic", "Chinese", "Japanese"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Champs-Élysées",
            "addressLocality": "Paris",
            "postalCode": "75008",
            "addressCountry": "FR"
          },
          "sameAs": [
            "https://facebook.com/airportluxuria",
            "https://twitter.com/airportluxuria",
            "https://linkedin.com/company/airportluxuria",
            "https://instagram.com/airportluxuria"
          ],
          "foundingDate": "2018",
          "numberOfEmployees": "50-100",
          "slogan": "French Elegance at Every Airport"
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Premium Meet & Greet Airport Services",
          "description": "Luxury airport assistance including Fast Track Security, VIP Lounge Access, Luggage Assistance, and Personal Concierge services",
          "provider": {
            "@type": "Organization",
            "name": "Airport Luxuria"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide - 500+ Airports"
          },
          "serviceType": "Airport Assistance Services",
          "category": "Travel & Transportation",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "EUR",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "EUR",
              "price": "Contact for Quote"
            }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Airport Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fast Track Security",
                  "description": "Priority access through airport security checkpoints"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "VIP Lounge Access",
                  "description": "Access to premium airport lounges with amenities"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Luggage Assistance",
                  "description": "Personal assistance with luggage handling"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Private Chauffeur",
                  "description": "Premium vehicle transport to and from airports"
                }
              }
            ]
          }
        };

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Airport Luxuria",
          "image": "https://airportluxuria.com/images/logo.png",
          "telephone": "+33-1-XX-XX-XX-XX",
          "email": "contact@airportluxuria.com",
          "url": "https://airportluxuria.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Champs-Élysées",
            "addressLocality": "Paris",
            "postalCode": "75008",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "48.8566",
            "longitude": "2.3522"
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "priceRange": "€€€",
          "currenciesAccepted": "EUR, USD, GBP",
          "paymentAccepted": "Credit Card, Bank Transfer, PayPal",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2500",
            "bestRating": "5",
            "worstRating": "1"
          }
        };

      case 'faq':
        return data;

      case 'breadcrumb':
        return data;

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;