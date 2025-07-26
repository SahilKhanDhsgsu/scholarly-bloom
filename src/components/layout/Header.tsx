
import React, { useState } from 'react';
import { Search, BookOpen, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-sm border-gray-200/50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-playfair font-bold gradient-text">OpenScience</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#browse" className="text-blue-500 hover:text-academic-blue transition-colors font-medium">
              Browse
            </a>
            <a href="#journals" className="text-blue-500 hover:text-academic-blue transition-colors font-medium">
              Journals
            </a>
            <a href="#submit" className="text-blue-500 hover:text-academic-blue transition-colors font-medium">
              Submit
            </a>
            <a href="#about" className="text-blue-500 hover:text-academic-blue transition-colors font-medium">
              About
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="search"
                placeholder="Search articles, authors..."
                className="pl-10 w-64 bg-white/90 border-gray-200 focus:ring-academic-blue focus:border-academic-blue"
              />
            </div>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-blue-500 text-white hover:from-blue-500/90 hover:to-blue-500/90 transition-all duration-300"
              size="sm"
            >
              Submit Paper
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <div className="flex flex-col space-y-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 w-full"
                />
              </div>
              <a href="#browse" className="text-gray-700 hover:text-academic-blue transition-colors">
                Browse
              </a>
              <a href="#journals" className="text-gray-700 hover:text-academic-blue transition-colors">
                Journals
              </a>
              <a href="#submit" className="text-gray-700 hover:text-academic-blue transition-colors">
                Submit
              </a>
              <a href="#about" className="text-gray-700 hover:text-academic-blue transition-colors">
                About
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200/50">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-blue-500 text-white"
                  size="sm"
                >
                  Submit Paper
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
