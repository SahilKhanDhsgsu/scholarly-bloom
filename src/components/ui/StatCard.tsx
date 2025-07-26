
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  variant?: 'default' | 'success' | 'warning' | 'info';
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  variant = 'default',
  className
}) => {
  const variants = {
    default: 'from-academic-blue/10 to-academic-purple/10 border-academic-blue/20',
    success: 'from-academic-emerald/10 to-green-100 border-academic-emerald/20',
    warning: 'from-academic-gold/10 to-yellow-100 border-academic-gold/20',
    info: 'from-blue-50 to-cyan-50 border-blue-200'
  };

  const iconColors = {
    default: 'text-academic-blue',
    success: 'text-academic-emerald',
    warning: 'text-academic-gold',
    info: 'text-blue-500'
  };

  const formatValue = (val: string | number) => {
    if (typeof val === 'number') {
      if (val >= 1000000) {
        return (val / 1000000).toFixed(1) + 'M';
      } else if (val >= 1000) {
        return (val / 1000).toFixed(1) + 'K';
      }
      return val.toLocaleString();
    }
    return val;
  };

  return (
    <div className={cn(
      "card-glass hover-lift rounded-2xl p-6 bg-gradient-to-br border",
      variants[variant],
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold font-inter text-gray-900">
            {formatValue(value)}
          </p>
          {change && (
            <p className="text-sm text-emerald-600 font-medium mt-1">
              {change}
            </p>
          )}
        </div>
        <div className={cn(
          "p-3 rounded-xl bg-white/80 backdrop-blur-sm",
          iconColors[variant]
        )}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
