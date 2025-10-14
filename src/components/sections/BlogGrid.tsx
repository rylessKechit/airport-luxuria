'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { Clock, User, ArrowRight, TrendingUp } from 'lucide-react';

const BlogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Tous les Articles', count: blogPosts.length },
    { value: 'Airport Services', label: 'Services Aéroport', count: blogPosts.filter(p => p.category === 'Airport Services').length },
    { value: 'Travel Tips', label: 'Conseils Voyage', count: blogPosts.filter(p => p.category === 'Travel Tips').length },
    { value: 'Business Travel', label: 'Voyage d\'Affaires', count: blogPosts.filter(p => p.category === 'Business Travel').length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Categories Filter */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className={selectedCategory === category.value ? 
                  "bg-royal-blue-900 hover:bg-royal-blue-800" : 
                  "border-gray-300 hover:border-royal-blue-600 hover:text-royal-blue-600"
                }
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {selectedCategory === 'all' && (
          <div className="mb-16">
            <Badge className="mb-4 bg-air-france-red-100 text-air-france-red-800 hover:bg-air-france-red-100">
              <TrendingUp className="w-4 h-4 mr-2" />
              Article Vedette
            </Badge>
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-air-france-red-600 hover:bg-air-france-red-600">
                      {featuredPost.category}
                    </Badge>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime} min de lecture
                      </div>
                    </div>
                    <Button asChild className="bg-royal-blue-900 hover:bg-royal-blue-800 w-fit">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Lire l'Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(selectedCategory === 'all' ? 1 : 0).map((post, index) => (
            <Card key={post.slug} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-royal-blue-900 hover:bg-royal-blue-900">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime} min
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full border-royal-blue-600 text-royal-blue-600 hover:bg-royal-blue-600 hover:text-white">
                    <Link href={`/blog/${post.slug}`}>
                      Lire Plus
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-gray-300 hover:border-royal-blue-600 hover:text-royal-blue-600">
            Charger Plus d'Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;