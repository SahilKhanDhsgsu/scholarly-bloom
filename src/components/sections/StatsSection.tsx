
import React from 'react';
import { BarChart3, TrendingUp, Globe2, Award } from 'lucide-react';
import statsData from '@/data/stats.json';

const StatsSection = () => {
  const achievements = [
    {
      icon: BarChart3,
      iconColor: 'text-emerald-400',
      title: 'Research Impact',
      value: `${(statsData.global.totalDownloads / 1000000).toFixed(1)}M`,
      label: 'Total Downloads',
      description: 'Research papers accessed by scientists worldwide'
    },
    {
      icon: TrendingUp,
      iconColor: 'text-rose-400',
      title: 'Growing Community',
      value: `${statsData.global.monthlyGrowth}%`,
      label: 'Monthly Growth',
      description: 'Consistent expansion of our research network'
    },
    {
      icon: Globe2,
      iconColor: 'text-cyan-400',
      title: 'Global Reach',
      value: statsData.global.countriesServed,
      label: 'Countries',
      description: 'International collaboration across continents'
    },
    {
      icon: Award,
      iconColor: 'text-yellow-400',
      title: 'Quality Standards',
      value: `${statsData.global.openAccessPercent}%`,
      label: 'Open Access',
      description: 'Commitment to accessible scientific knowledge'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Empowering Scientific Progress
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our platform serves as a catalyst for scientific advancement, connecting researchers 
            and accelerating the pace of discovery through open collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="glass bg-black/10 text-center p-8 rounded-3xl hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                <achievement.icon className={`w-8 h-8 ${achievement.iconColor}`} />
              </div>
              
              <h3 className="text-3xl font-bold font-inter text-white mb-2">
                {achievement.value}
              </h3>
              
              <p className="text-white/90 font-medium mb-2">
                {achievement.label}
              </p>
              
              <p className="text-sm text-white/70">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="glass p-6 rounded-2xl bg-black/10">
            <h4 className="text-2xl font-bold text-white mb-2 font-inter">
              {statsData.recent.articlesThisMonth.toLocaleString()}
            </h4>
            <p className="text-white/80">New Articles This Month</p>
          </div>
          
          <div className="glass p-6 rounded-2xl bg-black/10">
            <h4 className="text-2xl font-bold text-white mb-2 font-inter">
              {statsData.recent.newResearchers.toLocaleString()}
            </h4>
            <p className="text-white/80">New Researchers Joined</p>
          </div>
          
          <div className="glass p-6 rounded-2xl bg-black/10">
            <h4 className="text-2xl font-bold text-white mb-2 font-inter">
              {statsData.recent.citationsLastWeek.toLocaleString()}
            </h4>
            <p className="text-white/80">Citations This Week</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
