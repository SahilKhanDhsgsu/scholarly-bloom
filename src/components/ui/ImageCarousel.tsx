
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  cta: string;
  ctaLink: string;
}

const slides: CarouselSlide[] = [
  {
    id: '1',
    title: 'Revolutionary Climate Research',
    subtitle: 'Nature Climate Change',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&h=1080&fit=crop&q=80',
    description: 'Breakthrough discoveries in climate modeling and environmental sustainability',
    cta: 'Read Full Study',
    ctaLink: '#'
  },
  {
    id: '2',
    title: 'AI in Medical Diagnostics',
    subtitle: 'Journal of Medical AI',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop&q=80',
    description: 'Machine learning algorithms revolutionizing early disease detection',
    cta: 'Explore Research',
    ctaLink: '#'
  },
  {
    id: '3',
    title: 'Quantum Computing Advances',
    subtitle: 'Quantum Science & Technology',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=1080&fit=crop&q=80',
    description: 'Latest developments in quantum algorithms and quantum supremacy',
    cta: 'View Publication',
    ctaLink: '#'
  },
  {
    id: '4',
    title: 'Space Exploration Discoveries',
    subtitle: 'Astrophysical Journal',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=1080&fit=crop&q=80',
    description: 'New findings from deep space observations and planetary research',
    cta: 'Learn More',
    ctaLink: '#'
  }
];

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isPlaying && !isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <div className={`transform transition-all duration-1000 delay-300 ${
                    index === currentSlide 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}>
                    {/* Journal Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
                      <span className="text-sm font-medium text-white">{slide.subtitle}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed">
                      {slide.description}
                    </p>

                    {/* CTA Button */}
                    <Button 
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white hover:text-white transition-all duration-300"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white hover:text-white w-12 h-12 transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white hover:text-white w-12 h-12 transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlayPause}
        className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white hover:text-white w-10 h-10"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </Button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
