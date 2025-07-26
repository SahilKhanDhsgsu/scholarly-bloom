
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className,
  onClick,
  disabled = false
}) => {
  const baseClasses = "relative overflow-hidden transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-academic-blue to-academic-purple text-white hover:from-academic-blue/90 hover:to-academic-purple/90 hover:scale-105 hover:shadow-xl focus:ring-academic-blue",
    secondary: "bg-gradient-to-r from-academic-emerald to-academic-gold text-white hover:from-academic-emerald/90 hover:to-academic-gold/90 hover:scale-105 hover:shadow-xl focus:ring-academic-emerald",
    ghost: "bg-transparent text-academic-blue border-2 border-academic-blue hover:bg-academic-blue hover:text-white hover:scale-105 focus:ring-academic-blue"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl"
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="relative z-10 flex items-center justify-center space-x-2">
        {Icon && <Icon className="w-4 h-4" />}
        <span>{children}</span>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default GradientButton;
