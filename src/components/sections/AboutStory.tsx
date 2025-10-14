'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Plane, 
  Award, 
  Users, 
  Globe,
  Heart,
  Star
} from 'lucide-react';

const AboutStory = () => {
  const timeline = [
    {
      year: '2018',
      title: 'Les Débuts Parisiens',
      description: 'Creation d\'Airport Luxuria à Paris avec une vision simple : apporter l\'élégance française aux services aéroportuaires.',
      icon: Heart,
      color: 'bg-air-france-red-600'
    },
    {
      year: '2019',
      title: 'Expansion Européenne',
      description: 'Lancement des services dans les principaux hubs européens : Londres, Francfort, Amsterdam, Rome.',
      icon: Globe,
      color: 'bg-royal-blue-600'
    },
    {
      year: '2020',
      title: 'Innovation Digitale',
      description: 'Développement de notre plateforme de réservation personnalisée et support client 24/7 multilingue.',
      icon: Star,
      color: 'bg-air-france-red-600'
    },
    {
      year: '2021',
      title: 'Réseau International',
      description: 'Ouverture en Amérique du Nord et Asie-Pacifique. Partenariats avec les plus grands aéroports mondiaux.',
      icon: Plane,
      color: 'bg-royal-blue-600'
    },
    {
      year: '2022',
      title: 'Excellence Reconnue',
      description: 'Certification qualité internationale et prix "Best Premium Airport Service" décerné par Travel Excellence Awards.',
      icon: Award,
      color: 'bg-air-france-red-600'
    },
    {
      year: '2024',
      title: 'Leadership Mondial',
      description: 'Plus de 500 aéroports dans notre réseau et 2,500+ clients VIP qui nous font confiance chaque mois.',
      icon: Users,
      color: 'bg-royal-blue-600'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-royal-blue-100 text-royal-blue-800 hover:bg-royal-blue-100">
            <Heart className="w-4 h-4 mr-2" />
            Notre Parcours
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Une Histoire de
            <span className="block text-air-france-red-600">Passion & Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De nos modestes débuts parisiens à notre présence mondiale aujourd'hui, 
            découvrez comment nous avons bâti le standard de l'hospitalité aéroportuaire premium.
          </p>
        </div>

        {/* Story intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Née de l'Art de Vivre Français
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Airport Luxuria est née d'une conviction simple : les voyages d'affaires et de loisir 
              méritent la même attention aux détails et la même élégance que l'on trouve dans les 
              plus beaux hôtels parisiens.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nos fondateurs, forts de leur expérience dans l'hôtellerie de luxe française, 
              ont identifié un manque criant de personnalisation et de raffinement dans les 
              services aéroportuaires traditionnels.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Aujourd'hui, nous sommes fiers d'avoir exporté cette vision française de l'excellence 
              sur tous les continents, tout en adaptant nos services aux spécificités culturelles locales.
            </p>
          </div>
          <div className="relative">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="French Elegance in Aviation"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-lg font-bold mb-2">L'Excellence Française</h4>
                  <p className="text-gray-200">Savoir-vivre et attention aux détails</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-2xl font-display font-bold text-gray-900 text-center mb-12">
            Notre Évolution
          </h3>
          
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-royal-blue-600 via-air-france-red-600 to-royal-blue-600 h-full hidden lg:block"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <Card className={`border-0 shadow-lg ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mr-4`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-air-france-red-600">{item.year}</div>
                        <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
                
                {/* Year indicator for mobile/visual */}
                <div className={`hidden lg:flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center relative`}>
                    <span className="text-white font-bold text-lg">{item.year.slice(-2)}</span>
                    <div className="absolute inset-0 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;