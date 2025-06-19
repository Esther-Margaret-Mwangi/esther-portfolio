
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: '📱',
      title: 'UI/UX Design',
      description: 'Creating intuitive and user-friendly interfaces with modern design principles and user experience optimization.',
      link: 'Learn more →'
    },
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Building responsive web applications using React.js, HTML, CSS, and JavaScript with modern frameworks.',
      link: 'Learn more →'
    },
    {
      icon: '🌐',
      title: 'Web Design',
      description: 'Designing beautiful and functional websites that are optimized for performance and user engagement.',
      link: 'Learn more →'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-orange-400 font-medium mb-2">~ Services</p>
            <h2 className="text-4xl font-bold text-gray-900">
              Services <span className="text-orange-400">I Provide</span>
            </h2>
          </div>
          <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full flex items-center space-x-2">
            <span>View All Services</span>
            <span>→</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href="#" className="text-orange-400 font-medium hover:text-orange-500">
                  {service.link}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
