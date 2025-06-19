
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Esther</span>
            </div>
            <p className="text-gray-600">
              Passionate Software Developer and UI/UX Designer creating innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/EstherMwangi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white hover:bg-orange-500">
                G
              </a>
              <a href="https://linkedin.com/in/esther-margaret-wairimu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white hover:bg-orange-500">
                in
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Navigation</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-600 hover:text-orange-400">Home</a>
              <a href="#services" className="block text-gray-600 hover:text-orange-400">Services</a>
              <a href="#about" className="block text-gray-600 hover:text-orange-400">About</a>
              <a href="#projects" className="block text-gray-600 hover:text-orange-400">Projects</a>
              <a href="#contact" className="block text-gray-600 hover:text-orange-400">Contact</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-600">+254 790568616</p>
              <p className="text-gray-600">wairimu.esther@student.mmu.ac.ke</p>
              <p className="text-gray-600">linkedin.com/in/esther-margaret-wairimu</p>
              <p className="text-gray-600">2464 Royal Ln. Mesa, New Jersey 45463</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Get the latest information</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <Button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-r-lg">
                →
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">
            Copyright © 2024 <span className="text-orange-400">Esther</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-orange-400">User Terms & Conditions</a>
            <a href="#" className="text-gray-600 hover:text-orange-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
