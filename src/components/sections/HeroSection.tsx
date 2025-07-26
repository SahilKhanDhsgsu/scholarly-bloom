
import React, { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, Users, Globe, TrendingUp } from 'lucide-react';
import GradientButton from '@/components/ui/GradientButton';
import StatCard from '@/components/ui/StatCard';
import ImageCarousel from '@/components/ui/ImageCarousel';
import statsData from '@/data/stats.json';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Advance Human Knowledge Through Open Science';

  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="relative">
      {/* Image Carousel Section */}
      <div className="group">
        <ImageCarousel />
      </div>

      {/* Original Hero Content Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with animated gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-emerald-50 to-rose-100">
          <div className="absolute inset-0 mesh-bg opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent" />
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl float-animation`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-sky-900 mb-6 leading-tight">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-sky-900/90 mb-8 max-w-4xl mx-auto font-light">
              The premier platform connecting researchers worldwide with cutting-edge scientific publications, 
              fostering collaboration and accelerating discovery across all disciplines.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <GradientButton 
                variant="secondary" 
                size="lg" 
                icon={ArrowRight}
                className="min-w-48"
              >
                Explore Research
              </GradientButton>
              <GradientButton 
                variant="ghost" 
                size="lg"
                className="min-w-48 text-sky-900 border-white hover:bg-white hover:text-sky-900"
              >
                Publish Your Work
              </GradientButton>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <StatCard
                title="Total Articles"
                value={statsData.global.totalArticles}
                change="+12.5% this month"
                icon={BookOpen}
                variant="default"
                className="transform hover:scale-105 transition-all duration-300"
              />
              <StatCard
                title="Active Researchers"
                value={statsData.global.totalResearchers}
                change="+8.2% this month"
                icon={Users}
                variant="success"
                className="transform hover:scale-105 transition-all duration-300"
              />
              <StatCard
                title="Countries Served"
                value={statsData.global.countriesServed}
                change="Global reach"
                icon={Globe}
                variant="info"
                className="transform hover:scale-105 transition-all duration-300"
              />
              <StatCard
                title="Open Access"
                value={`${statsData.global.openAccessPercent}%`}
                change="Growing daily"
                icon={TrendingUp}
                variant="warning"
                className="transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
