'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Award, 
  Shield, 
  CheckCircle, 
  Star,
  Globe,
  Users,
  ArrowRight,
  Lock
} from 'lucide-react';

const AboutCertifications = () => {
  const certifications = [
    {
      icon: Award,
      title: 'ISO 9001:2015',
      subtitle: 'Management de la Qualité',
      description: 'Certification internationale pour nos systèmes de gestion de la qualité et notre amélioration continue.',
      year: '2021',
      color: 'bg-air-france-red-600'
    },
    {
      icon: Shield,
      title: 'IATA Certified',
      subtitle: 'Standards Aéroportuaires',
      description: 'Accréditation officielle IATA pour nos services dans les terminaux internationaux.',
      year: '2020',
      color: 'bg-royal-blue-600'
    },
    {
      icon: Lock,
      title: 'GDPR Compliant',
      subtitle: 'Protection des Données',
      description: 'Conformité totale avec le règlement européen sur la protection des données personnelles.',
      year: '2022',
      color: 'bg-air-france-red-600'
    },
    {
      icon: Star,
      title: 'Travel Excellence Award',
      subtitle: 'Best Premium Airport Service',
      description: 'Prix prestigieux décerné par Travel Excellence pour l\'innovation et la qualité de service.',
      year: '2023',
      color: 'bg-royal-blue-600'
    }
  ];

  const partnerships = [
    {
      name: 'Aéroports de Paris',
      type: 'Partenaire Stratégique',
      description: 'Collaboration privilégiée dans les hubs parisiens CDG et Orly'
    },
    {
      name: 'Heathrow Airport',
      type: 'Prestataire Agréé',
      description: 'Services VIP exclusifs dans tous les terminaux de Londres'
    },
    {
      name: 'Dubai Airports',
      type: 'Premium Partner',
      description: 'Opérateur officiel des services Meet & Greet à DXB'
    },
    {
      name: 'Changi Airport Group',
      type: 'Authorized Service Provider',
      description: 'Services premium dans l\'aéroport le plus primé au monde'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '2,500+',
      label: 'Clients Mensuels',
      description: 'Voyageurs qui nous font confiance chaque mois'
    },
    {
      icon: Globe,
      number: '500+',
      label: 'Aéroports Partenaires',
      description: 'Réseau mondial en expansion constante'
    },
    {
      icon: Award,
      number: '4.9/5',
      label: 'Satisfaction Client',
      description: 'Note moyenne basée sur 10,000+ avis'
    },
    {
      icon: CheckCircle,
      number: '98%',
      label: 'Taux de Recommandation',
      description: 'Clients qui recommandent nos services'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-royal-blue-100 text-royal-blue-800 hover:bg-royal-blue-100">
            <Award className="w-4 h-4 mr-2" />
            Certifications & Partenariats
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Excellence
            <span className="block text-air-france-red-600">Reconnue Mondialement</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos certifications et partenariats prestigieux témoignent de notre engagement 
            envers l'excellence et la conformité aux plus hauts standards internationaux.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${cert.color} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm text-air-france-red-600 font-semibold mb-1">{cert.year}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <div className="text-sm font-medium text-gray-700 mb-3">{cert.subtitle}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnerships */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-bold text-gray-900 text-center mb-12">
            Nos Partenaires Prestigieux
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {partnerships.map((partner, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{partner.name}</h4>
                      <Badge variant="outline" className="border-air-france-red-300 text-air-france-red-600">
                        {partner.type}
                      </Badge>
                    </div>
                    <div className="w-12 h-12 bg-royal-blue-100 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-royal-blue-700" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats & Trust */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4">
              La Confiance par les Chiffres
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos résultats parlent d'eux-mêmes et témoignent de la qualité constante 
              de nos services à travers le monde.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-md">
                  <stat.icon className="w-8 h-8 text-royal-blue-700" />
                </div>
                <div className="text-3xl font-bold text-air-france-red-600 mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Card className="border-0 shadow-lg bg-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Prêt à Vivre l'Excellence ?
                </h4>
                <p className="text-gray-600 mb-6">
                  Rejoignez les milliers de voyageurs qui ont choisi Airport Luxuria 
                  pour transformer leur expérience aéroportuaire.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-royal-blue-900 hover:bg-royal-blue-800">
                    <Link href="/booking">
                      Réserver Maintenant
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-air-france-red-600 text-air-france-red-600 hover:bg-air-france-red-600 hover:text-white">
                    <Link href="/contact">
                      Nous Contacter
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCertifications;