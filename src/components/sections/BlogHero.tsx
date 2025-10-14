'use client';

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, TrendingUp } from 'lucide-react';

const BlogHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-royal-blue-700 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10 container-custom text-center">
        <Badge className="mb-6 bg-air-france-red-600/20 text-air-france-red-300 border-air-france-red-600/30">
          <BookOpen className="w-4 h-4 mr-2" />
          Blog & Conseils Voyage
        </Badge>

        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
          Guides de Voyage
          <span className="block text-air-france-red-400">& Conseils Premium</span>
        </h1>

        <p className="text-xl md:text-2xl text-royal-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Découvrez nos conseils d'experts, guides d'aéroports et astuces pour 
          voyager comme un VIP partout dans le monde.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Rechercher un article, destination ou conseil..."
              className="pl-12 pr-4 py-4 text-lg bg-white/10 border-white/20 text-white placeholder-gray-300"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-air-france-red-600 hover:bg-air-france-red-700">
              Rechercher
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-air-france-red-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-air-france-red-400 mb-2">50+</div>
            <div className="text-royal-blue-200">Articles Experts</div>
          </div>
          <div className="text-center">
            <BookOpen className="w-12 h-12 text-air-france-red-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-air-france-red-400 mb-2">500+</div>
            <div className="text-royal-blue-200">Aéroports Couverts</div>
          </div>
          <div className="text-center">
            <Search className="w-12 h-12 text-air-france-red-400 mx-auto mb-4" />
            <div className="text-2xl font-bold text-air-france-red-400 mb-2">10K+</div>
            <div className="text-royal-blue-200">Lecteurs Mensuels</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;