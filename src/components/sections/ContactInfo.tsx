'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Headphones,
  Globe,
  Calendar,
  ExternalLink
} from 'lucide-react';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Appel Direct',
      subtitle: 'Support immédiat',
      main: '+33 1 XX XX XX XX',
      secondary: 'Ligne directe premium',
      action: 'tel:+33123456789',
      color: 'bg-air-france-red-600',
      available: '24h/24 • 7j/7'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Business',
      subtitle: 'Chat en temps réel',
      main: '+33 6 XX XX XX XX',
      secondary: 'Réponse instantanée',
      action: 'https://wa.me/33600000000',
      color: 'bg-green-600',
      available: '9h-22h CET'
    },
    {
      icon: Mail,
      title: 'Email Premium',
      subtitle: 'Support détaillé',
      main: 'contact@airportluxuria.com',
      secondary: 'Réponse sous 2h garantie',
      action: 'mailto:contact@airportluxuria.com',
      color: 'bg-royal-blue-600',
      available: 'Réponse < 2h'
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Siège Social - Paris',
      address: '75008 Paris, France',
      details: 'Champs-Élysées',
      hours: 'Lun-Ven: 9h-18h CET'
    },
    {
      icon: Globe,
      title: 'Bureaux Internationaux',
      address: 'Londres • Dubai • Singapour',
      details: 'Support local disponible',
      hours: 'Fuseau horaire local'
    }
  ];

  const supportLanguages = [
    'Français', 'English', 'Español', 'Deutsch', 'Italiano', 
    'العربية', '中文', '日本語', 'Русский', 'Português'
  ];

  const emergencyContacts = [
    {
      title: 'Urgence Voyage',
      description: 'Problème immédiat à l\'aéroport',
      contact: '+33 6 XX XX XX XX',
      available: '24h/24 • 365j/an'
    },
    {
      title: 'Support VIP',
      description: 'Assistance premium dédiée',
      contact: 'vip@airportluxuria.com',
      available: 'Priorité absolue'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-0 lg:flex lg:items-center lg:min-h-[800px]">
      <div className="container-custom lg:container-none lg:px-8 lg:py-16 w-full">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center lg:text-left">
            <Badge className="mb-4 bg-royal-blue-100 text-royal-blue-800 hover:bg-royal-blue-100">
              <Headphones className="w-4 h-4 mr-2" />
              Support Premium
            </Badge>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Une Équipe à Votre Écoute
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Choisissez le canal de communication qui vous convient. 
              Notre équipe multilingue est disponible 24h/24 pour vous assister.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{method.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">{method.subtitle}</p>
                        <p className="font-medium text-gray-900">{method.main}</p>
                        <p className="text-xs text-gray-500">{method.secondary}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Button asChild size="sm" className="mb-2">
                        <a href={method.action} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Contacter
                        </a>
                      </Button>
                      <p className="text-xs text-gray-500">{method.available}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Contacts */}
          <Card className="border-0 shadow-lg bg-air-france-red-50 border-l-4 border-l-air-france-red-600">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Phone className="w-5 h-5 text-air-france-red-600 mr-2" />
                Contacts d'Urgence
              </h3>
              <div className="space-y-4">
                {emergencyContacts.map((emergency, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-gray-900">{emergency.title}</h4>
                      <p className="text-sm text-gray-600">{emergency.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-air-france-red-600">{emergency.contact}</p>
                      <p className="text-xs text-gray-500">{emergency.available}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Office Information */}
          <div className="grid md:grid-cols-2 gap-4">
            {officeInfo.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <office.icon className="w-6 h-6 text-royal-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{office.title}</h3>
                      <p className="text-gray-700 mb-1">{office.address}</p>
                      <p className="text-sm text-gray-600 mb-2">{office.details}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {office.hours}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Languages */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Globe className="w-5 h-5 text-royal-blue-600 mr-2" />
                Support Multilingue
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Notre équipe vous assiste dans votre langue préférée :
              </p>
              <div className="flex flex-wrap gap-2">
                {supportLanguages.map((language, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Booking Reminder */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-royal-blue-900 to-royal-blue-700 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Besoin d'une Réservation Rapide ?</h3>
              <p className="text-royal-blue-100 mb-4 text-sm">
                Utilisez notre formulaire de réservation en ligne pour un devis immédiat
              </p>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-royal-blue-900">
                <a href="/booking">
                  <Calendar className="w-4 h-4 mr-2" />
                  Réserver Maintenant
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;