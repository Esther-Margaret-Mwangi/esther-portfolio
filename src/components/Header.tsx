
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Esther</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-orange-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('blogs')} className="text-gray-700 hover:text-orange-400 transition-colors">Blogs</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-orange-400 transition-colors">Testimonials</button>
          </nav>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 rounded-full px-6"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
