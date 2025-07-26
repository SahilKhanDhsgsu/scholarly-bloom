
import React from 'react';
import { BookOpen, Mail, Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import GradientButton from '@/components/ui/GradientButton';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-academic-blue to-academic-purple py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-playfair font-bold text-white mb-4">
              Stay Updated with Latest Research
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get weekly insights on breakthrough discoveries, new publications, and research trends delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto flex space-x-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:ring-white/30 focus:border-white/30"
              />
              <GradientButton variant="secondary" icon={ArrowRight}>
                Subscribe
              </GradientButton>
            </div>
            
            <p className="text-sm text-white/70 mt-4">
              Join 50,000+ researchers already subscribed. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-academic-blue to-academic-purple rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-playfair font-bold gradient-text">OpenScience</h2>
              </div>
              
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                The premier academic publishing platform connecting researchers worldwide, 
                fostering collaboration and accelerating scientific discovery through open access publishing.
              </p>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Research */}
            <div>
              <h3 className="text-white font-semibold mb-4">Research</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Articles</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Advanced Search</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research Topics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Citation Tools</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research Metrics</a></li>
              </ul>
            </div>

            {/* Publishing */}
            <div>
              <h3 className="text-white font-semibold mb-4">Publishing</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Submit Manuscript</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Author Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Peer Review</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Editorial Board</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Publication Ethics</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technical Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community Forum</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 OpenScience Platform. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
