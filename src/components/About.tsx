
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-16 bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 bg-orange-400 rounded-full mx-auto relative overflow-hidden">
              <img 
                src="/lovable-uploads/photo-1581091226825-a6a2a5aee158" 
                alt="Esther Mwangi"
                className="w-full h-full object-cover"
              />
              
              {/* Floating skill badges */}
              <div className="absolute top-8 -left-4 bg-orange-400 text-white px-3 py-1 rounded-full text-sm">
                UI/UX Design
              </div>
              <div className="absolute top-16 right-8 bg-white text-green-800 px-3 py-1 rounded-full text-sm">
                Mobile App Design
              </div>
              <div className="absolute bottom-16 -right-8 bg-orange-400 text-white px-3 py-1 rounded-full text-sm">
                Website Design
              </div>
              <div className="absolute bottom-8 -left-8 bg-green-700 text-white px-3 py-1 rounded-full text-sm">
                Design Systems
              </div>
              <div className="absolute top-1/2 -left-12 bg-white text-green-800 px-3 py-1 rounded-full text-sm">
                Prototyping
              </div>
              <div className="absolute bottom-1/3 right-12 bg-orange-400 text-white px-3 py-1 rounded-full text-sm">
                Frontend Development
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <p className="text-orange-400 font-medium mb-2">~ About Me</p>
              <h2 className="text-4xl font-bold mb-6">
                Who is <span className="text-orange-400">Esther Mwangi?</span>
              </h2>
              <p className="text-gray-200 text-lg">
                Passionate and versatile Software Developer with hands-on experience in UI/UX design, 
                and a growing foundation in AI & Machine Learning, and .Net.js. Skilled in Front-end 
                development with React.js and GraphQL.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-orange-400">50+</div>
                <div className="text-gray-200">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">15+</div>
                <div className="text-gray-200">Industry Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">3+</div>
                <div className="text-gray-200">Years of Experience</div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full flex items-center space-x-2">
                <span>Download CV</span>
                <span>→</span>
              </Button>
              <div className="text-orange-400 text-2xl font-script">
                Esther Mwangi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
