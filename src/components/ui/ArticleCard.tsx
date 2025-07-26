import React from "react";
import { Calendar, Download, Eye, Heart, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GradientButton from "./GradientButton";

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    abstract: string;
    authors: Array<{
      name: string;
      affiliation: string;
      photo?: string;
    }>;
    journal: string;
    publishedDate: string;
    doi: string;
    coverImage?: string;
    metrics: {
      downloads: number;
      citations: number;
      views: number;
    };
    keywords: string[];
    openAccess: boolean;
  };
  variant?: "default" | "featured" | "compact";
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = "default",
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  if (variant === "featured") {
    return (
      <div className="card-glass hover-lift rounded-3xl overflow-hidden group cursor-pointer">
        {article.coverImage && (
          <div className="relative h-64 overflow-hidden">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {article.openAccess && (
              <Badge className="absolute top-4 left-4 bg-blue-300 text-black">
                Open Access
              </Badge>
            )}
          </div>
        )}

        <div className="p-8">
          <div className="mb-4">
            <p className="text-sm text-academic-blue font-medium mb-2">
              {article.journal}
            </p>
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-academic-blue transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 line-clamp-3 mb-4">
              {article.abstract}
            </p>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            {article.authors.slice(0, 2).map((author, index) => (
              <div key={index} className="flex items-center space-x-2">
                {author.photo && (
                  <img
                    src={author.photo}
                    alt={author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {author.name}
                  </p>
                  <p className="text-xs text-gray-600">{author.affiliation}</p>
                </div>
              </div>
            ))}
            {article.authors.length > 2 && (
              <span className="text-sm text-gray-500">
                +{article.authors.length - 2} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.publishedDate)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Download className="w-4 h-4" />
                <span>{formatNumber(article.metrics.downloads)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{formatNumber(article.metrics.views)}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {article.keywords.slice(0, 4).map((keyword, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {keyword}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Save
            </Button>
            <GradientButton size="md" icon={ExternalLink}>
              Read Article
            </GradientButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-glass hover-lift rounded-2xl p-6 group cursor-pointer">
      <div className="flex items-start space-x-4">
        {article.coverImage && (
          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <p className="text-sm text-academic-blue font-medium">
              {article.journal}
            </p>
            {article.openAccess && (
              <Badge className="bg-blue-300 text-black text-xs">
                Open Access
              </Badge>
            )}
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-academic-blue transition-colors">
            {article.title}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {article.abstract}
          </p>

          <div className="flex items-center space-x-2 mb-3">
            <span className="text-sm font-medium text-gray-900">
              {article.authors[0]?.name}
            </span>
            {article.authors.length > 1 && (
              <span className="text-sm text-gray-500">
                +{article.authors.length - 1} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs text-gray-600">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{formatDate(article.publishedDate)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Download className="w-3 h-3" />
                <span>{formatNumber(article.metrics.downloads)}</span>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
