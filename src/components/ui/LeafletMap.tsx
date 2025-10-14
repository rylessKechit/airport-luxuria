'use client';

import { useEffect, useRef } from 'react';
import { useLeaflet } from '@/hooks/useLeaflet';

interface Airport {
  id: string;
  code: string;
  name: string;
  city: string;
  country: string;
  continent: string;
  lat: number;
  lng: number;
  tier: 'premium' | 'standard' | 'regional';
  services: string[];
  description: string;
}

interface LeafletMapProps {
  airports: Airport[];
  onAirportSelect: (airport: Airport) => void;
  onAirportHover?: (airport: Airport | null) => void;
}

const LeafletMap = ({ airports, onAirportSelect, onAirportHover }: LeafletMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const isClient = useLeaflet();

  useEffect(() => {
    if (!isClient || !mapRef.current) return;

    const initMap = async () => {
      const L = await import('leaflet');
      
      // Fix pour les icônes par défaut
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });

      // Créer la carte
      if (!mapInstanceRef.current) {
        mapInstanceRef.current = L.map(mapRef.current!).setView([30, 0], 2);

        // Ajouter les tuiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstanceRef.current);
      }

      // Fonction pour créer les icônes personnalisées
      const createCustomIcon = (tier: string, isHovered = false) => {
        const color = tier === 'premium' ? '#dc2626' : tier === 'standard' ? '#2563eb' : '#64748b';
        const size = isHovered ? 32 : 28;
        const iconSize = isHovered ? 16 : 14;
        
        return L.divIcon({
          html: `
            <div style="
              background-color: ${color};
              width: ${size}px;
              height: ${size}px;
              border-radius: 50%;
              border: 3px solid white;
              box-shadow: 0 4px 12px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: all 0.3s ease;
              ${isHovered ? 'transform: scale(1.1);' : ''}
            ">
              <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="white">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
          `,
          className: 'custom-airport-marker',
          iconSize: [size + 6, size + 6],
          iconAnchor: [(size + 6) / 2, (size + 6) / 2]
        });
      };

      // Supprimer les anciens marqueurs
      mapInstanceRef.current.eachLayer((layer: any) => {
        if (layer instanceof L.Marker) {
          mapInstanceRef.current.removeLayer(layer);
        }
      });

      // Ajouter les nouveaux marqueurs
      airports.forEach((airport) => {
        const marker = L.marker([airport.lat, airport.lng], {
          icon: createCustomIcon(airport.tier)
        }).addTo(mapInstanceRef.current);

        // Popup amélioré
        const tierColor = airport.tier === 'premium' ? '#dc2626' : airport.tier === 'standard' ? '#2563eb' : '#64748b';
        const popupContent = `
          <div style="font-family: 'Inter', sans-serif; min-width: 300px; max-width: 350px;">
            <!-- Header -->
            <div style="
              background: linear-gradient(135deg, ${tierColor} 0%, ${airport.tier === 'premium' ? '#b91c1c' : airport.tier === 'standard' ? '#1d4ed8' : '#4b5563'} 100%);
              margin: -12px -12px 16px -12px;
              padding: 16px;
              border-radius: 8px 8px 0 0;
              color: white;
            ">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <h3 style="margin: 0; font-size: 22px; font-weight: bold;">${airport.code}</h3>
                <span style="
                  background-color: rgba(255,255,255,0.2);
                  padding: 4px 12px;
                  border-radius: 20px;
                  font-size: 11px;
                  font-weight: 600;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                ">${airport.tier}</span>
              </div>
              <h4 style="margin: 0 0 4px 0; font-size: 16px; font-weight: 600; opacity: 0.95;">${airport.name}</h4>
              <p style="margin: 0; opacity: 0.8; font-size: 14px;">📍 ${airport.city}, ${airport.country}</p>
            </div>
            
            <!-- Description -->
            <p style="margin: 0 0 16px 0; color: #374151; font-size: 14px; line-height: 1.5;">${airport.description}</p>
            
            <!-- Services -->
            <div style="margin-bottom: 16px;">
              <h5 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #111827;">Services Disponibles</h5>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 6px;">
                ${airport.services.map(service => `
                  <div style="
                    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                    border: 1px solid #e2e8f0;
                    padding: 8px 12px;
                    border-radius: 8px;
                    font-size: 12px;
                    font-weight: 500;
                    color: #475569;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  ">
                    ${service === 'Meet & Greet' ? '🤝' : 
                      service === 'Fast Track' ? '⚡' : 
                      service === 'VIP Lounge' ? '👑' : 
                      service === 'Chauffeur' ? '🚗' : '✨'} ${service}
                  </div>
                `).join('')}
              </div>
            </div>
            
            <!-- CTA Button -->
            <button 
              onclick="window.location.href='/booking'" 
              style="
                width: 100%;
                background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
                color: white;
                border: none;
                padding: 12px 20px;
                border-radius: 10px;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
              "
              onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(30, 58, 138, 0.4)'"
              onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(30, 58, 138, 0.3)'"
            >
              ✈️ Réserver pour ${airport.code}
            </button>
          </div>
        `;

        marker.bindPopup(popupContent, {
          maxWidth: 380,
          className: 'custom-popup-modern',
          closeButton: true,
          autoClose: false
        });

        // Events
        marker.on('click', () => {
          onAirportSelect(airport);
        });

        marker.on('mouseover', () => {
          marker.setIcon(createCustomIcon(airport.tier, true));
          if (onAirportHover) onAirportHover(airport);
        });

        marker.on('mouseout', () => {
          marker.setIcon(createCustomIcon(airport.tier, false));
          if (onAirportHover) onAirportHover(null);
        });
      });
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isClient, airports, onAirportSelect, onAirportHover]);

  if (!isClient) {
    return (
      <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de la carte interactive...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mapRef} 
      className="h-[600px] w-full rounded-lg overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
};

export default LeafletMap;