
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-medium border-2 border-dashed border-orange-300">
                👋 Hello There!
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                I'm <span className="text-orange-400">Esther Mwangi</span>,
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Software Developer &
              </h2>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                UI/UX Designer
              </h2>
              <h3 className="text-2xl text-gray-900">
                Based in Kenya.
              </h3>
            </div>
            
            <p className="text-gray-600 text-lg max-w-md">
              I'm an experienced Software Developer with 3+ years in the field, collaborating with various companies and startups.
            </p>
            
            <div className="flex space-x-4">
              <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full flex items-center space-x-2">
                <span>View My Portfolio</span>
                <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white">▶</span>
                </div>
              </Button>
              
              <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50">
                Hire Me
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <div className="w-80 h-80 bg-orange-400 rounded-full mx-auto relative overflow-hidden">
                <img 
                  src="/lovable-uploads/photo-1581091226825-a6a2a5aee158" 
                  alt="Esther Mwangi"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                Me & AI
              </div>
              
              <div className="absolute top-1/2 -right-4 bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium">
                UI/UX Designer
              </div>
              
              <div className="absolute bottom-16 -left-4 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                Software Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
