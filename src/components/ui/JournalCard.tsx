
import React from 'react';
import { Badge } from '@/components/ui/badge';
import GradientButton from './GradientButton';
import { ExternalLink, BookOpen, Users, Award } from 'lucide-react';

interface JournalCardProps {
  journal: {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    impactFactor: number;
    publisher: string;
    openAccess: boolean;
    categories: string[];
    totalArticles: number;
    currentIssue: string;
    editorInChief: string;
  };
  variant?: 'default' | 'featured';
}

const JournalCard: React.FC<JournalCardProps> = ({ 
  journal, 
  variant = 'default' 
}) => {
  if (variant === 'featured') {
    return (
      <div className="card-glass hover-lift rounded-3xl overflow-hidden group cursor-pointer h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={journal.coverImage}
            alt={journal.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            {journal.openAccess && (
              <Badge className="bg-blue-300 text-black">
                Open Access
              </Badge>
            )}
            <Badge className="bg-yellow-300 text-black">
              IF {journal.impactFactor}
            </Badge>
          </div>
        </div>

        <div className="p-6 flex flex-col h-full">
          <div className="flex-1">
            <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2 group-hover:text-academic-blue transition-colors">
              {journal.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {journal.description}
            </p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Publisher</span>
                <span className="font-medium text-gray-900">{journal.publisher}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Current Issue</span>
                <span className="font-medium text-gray-900">{journal.currentIssue}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Articles</span>
                <span className="font-medium text-gray-900">{journal.totalArticles.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {journal.categories.slice(0, 3).map((category, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              Editor: <span className="font-medium text-gray-900">{journal.editorInChief}</span>
            </div>
            <GradientButton size="sm" icon={ExternalLink}>
              Explore
            </GradientButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-glass hover-lift rounded-2xl overflow-hidden group cursor-pointer">
      <div className="flex">
        <div className="w-32 h-32 flex-shrink-0">
          <img
            src={journal.coverImage}
            alt={journal.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <div className="p-4 flex-1">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-academic-blue transition-colors line-clamp-1">
              {journal.title}
            </h4>
            <div className="flex items-center space-x-1">
              {journal.openAccess && (
                <Badge className="bg-academic-emerald text-white text-xs">OA</Badge>
              )}
              <Badge className="bg-academic-gold text-white text-xs">
                IF {journal.impactFactor}
              </Badge>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {journal.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <BookOpen className="w-3 h-3" />
                <span>{journal.totalArticles}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>{journal.publisher}</span>
              </div>
            </div>
            <span className="font-medium">{journal.currentIssue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
