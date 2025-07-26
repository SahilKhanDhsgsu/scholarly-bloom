
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ArticleCard from '@/components/ui/ArticleCard';
import JournalCard from '@/components/ui/JournalCard';
import GradientButton from '@/components/ui/GradientButton';
import articlesData from '@/data/articles.json';
import journalsData from '@/data/journals.json';

const FeaturedSection = () => {
  const featuredArticles = articlesData.slice(0, 3);
  const featuredJournals = journalsData.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Articles */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-academic-blue/10 to-academic-purple/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-academic-blue" />
              <span className="text-sm font-medium text-academic-blue">Featured Research</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
              Breakthrough Discoveries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the latest groundbreaking research that's shaping our understanding of the world
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {featuredArticles.map((article, index) => (
              <div 
                key={article.id}
                className={`animate-on-scroll ${index === 0 ? 'lg:col-span-2' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ArticleCard 
                  article={article} 
                  variant={index === 0 ? 'featured' : 'default'}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <GradientButton variant="ghost" icon={ArrowRight}>
              Explore All Articles
            </GradientButton>
          </div>
        </div>

        {/* Featured Journals */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-academic-emerald/10 to-academic-gold/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-academic-emerald" />
              <span className="text-sm font-medium text-academic-emerald">Premier Journals</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
              Leading Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover prestigious journals that publish the highest quality research across all disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredJournals.map((journal, index) => (
              <div 
                key={journal.id}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <JournalCard journal={journal} variant="featured" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <GradientButton variant="ghost" icon={ArrowRight}>
              Browse All Journals
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
