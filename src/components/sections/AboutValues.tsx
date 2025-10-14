'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Shield, 
  Users, 
  Globe,
  Award,
  Clock
} from 'lucide-react';

const AboutValues = () => {
  const values = [
    {
      icon: Heart,
      title: 'Élégance Française',
      description: 'Nous apportons le raffinement et l\'art de vivre à la française dans chaque interaction, créant une expérience mémorable et sophistiquée.',
      color: 'bg-air-france-red-600'
    },
    {
      icon: Shield,
      title: 'Excellence Sans Compromis',
      description: 'Nous nous engageons à maintenir les plus hauts standards de qualité dans tous nos services, de la première prise de contact à la fin du voyage.',
      color: 'bg-royal-blue-600'
    },
    {
      icon: Users,
      title: 'Service Personnalisé',
      description: 'Chaque client est unique. Nous adaptons nos services à vos besoins spécifiques pour créer une expérience sur mesure et exceptionnelle.',
      color: 'bg-air-france-red-600'
    },
    {
      icon: Globe,
      title: 'Vision Internationale',
      description: 'Notre approche globale nous permet de comprendre les nuances culturelles locales tout en maintenant notre identité française distinctive.',
      color: 'bg-royal-blue-600'
    },
    {
      icon: Award,
      title: 'Innovation Continue',
      description: 'Nous investissons constamment dans l\'amélioration de nos services et l\'adoption des meilleures technologies pour votre confort.',
      color: 'bg-air-france-red-600'
    },
    {
      icon: Clock,
      title: 'Disponibilité Totale',
      description: 'Notre équipe est à votre disposition 24h/24, 7j/7 pour garantir une assistance immédiate où que vous soyez dans le monde.',
      color: 'bg-royal-blue-600'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-air-france-red-100 text-air-france-red-800 hover:bg-air-france-red-100">
            <Heart className="w-4 h-4 mr-2" />
            Nos Valeurs
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Ce Qui Nous
            <span className="block text-royal-blue-900">Distingue</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos valeurs fondamentales guident chaque décision et façonnent l'expérience 
            exceptionnelle que nous offrons à nos clients prestigieux.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${value.color} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-royal-blue-900 to-royal-blue-700 text-white">
          <CardContent className="p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6">
              Notre Mission
            </h3>
            <p className="text-xl text-royal-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              "Transformer chaque passage d'aéroport en une expérience élégante et sans stress, 
              en alliant l'excellence du service français à une compréhension profonde des besoins 
              du voyageur international moderne."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-air-france-red-400 mb-1">100%</div>
                <div className="text-royal-blue-200">Satisfaction Client</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-royal-blue-600"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-air-france-red-400 mb-1">4.9/5</div>
                <div className="text-royal-blue-200">Note Moyenne</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-royal-blue-600"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-air-france-red-400 mb-1">98%</div>
                <div className="text-royal-blue-200">Recommandations</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutValues;