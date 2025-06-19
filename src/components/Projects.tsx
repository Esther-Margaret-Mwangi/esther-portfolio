
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'AI-Powered Dashboard',
      description: 'Modern dashboard with machine learning insights and data visualization',
      image: '/lovable-uploads/photo-1487058792275-0ad4aaf24ca7',
      tags: ['UI/UX Design', 'Python', 'React.js'],
      githubUrl: 'https://github.com',
      figmaUrl: 'https://figma.com'
    },
    {
      id: 2,
      title: 'E-commerce Mobile App',
      description: 'Complete mobile app solution for online shopping experience',
      image: '/lovable-uploads/photo-1488590528505-98d2b5aba04b',
      tags: ['App Design', 'UI/UX', 'Wireframes'],
      githubUrl: 'https://github.com',
      figmaUrl: 'https://figma.com'
    },
    {
      id: 3,
      title: 'Restaurant Management System',
      description: 'Full-stack web application for restaurant operations',
      image: '/lovable-uploads/photo-1649972904349-6e44c42644a7',
      tags: ['Web Design', 'React.js', 'JavaScript'],
      githubUrl: 'https://github.com',
      figmaUrl: 'https://figma.com'
    },
    {
      id: 4,
      title: 'Healthcare Analytics Platform',
      description: 'Data visualization platform for healthcare metrics',
      image: '/lovable-uploads/photo-1500673922987-e212871fec22',
      tags: ['Python', 'AI/ML', 'Dashboard'],
      githubUrl: 'https://github.com',
      figmaUrl: 'https://figma.com'
    }
  ]);

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-orange-400 font-medium mb-2">~ My Portfolio</p>
            <h2 className="text-4xl font-bold text-gray-900">
              My Latest <span className="text-orange-400">Projects</span>
            </h2>
          </div>
          <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full flex items-center space-x-2">
            <span>View All Projects</span>
            <span>→</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden rounded-2xl hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} className="bg-orange-400 text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-800 font-medium"
                  >
                    View GitHub →
                  </a>
                  <a 
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-500 font-medium"
                  >
                    View Design →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
