
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Figma, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: "/Shambah Solutions.png",
      title: "Shambah Solutions Mobile App",
      category: ["UI/UX Design", "App Design", "Wireframe"],
      description:
        "Agritech mobile solution offering AI-powered plant disease diagnosis, soil testing, and fertilizer recommendation for smallholder farmers.",
      detailedDescription: "A comprehensive agritech mobile application designed to empower smallholder farmers with cutting-edge technology. The app features AI-powered plant disease diagnosis using computer vision, real-time soil testing capabilities, and personalized fertilizer recommendations based on soil conditions and crop types.",
      keyFeatures: [
        "AI-powered plant disease detection",
        "Soil nutrient analysis",
        "Fertilizer recommendation engine",
        "Weather forecasting integration",
        "Farmer community forum"
      ],
      technologies: ["React Native", "Python", "TensorFlow", "Firebase"],
      githubLink: "https://github.com/esthermargaret/shambah-solutions",
      figmaLink: "https://figma.com/design/shambah-solutions"
    },
    {
      image: "/Farm smart dashboard.jpg",
      title: "Smart Farm Dashboard",
      category: [
        "UI/UX Design",
        "Frontend Development",
        "Web Design",
        "Wireframe",
      ],
      description:
        "AI-powered farm intelligence platform that provides real-time soil analysis and fertilizer recommendations using NPK and pH values for optimized crop yield.",
      detailedDescription: "An intelligent farm management dashboard that revolutionizes agricultural decision-making through data-driven insights. The platform integrates IoT sensors for real-time monitoring and provides actionable recommendations for optimal crop management.",
      keyFeatures: [
        "Real-time soil monitoring",
        "NPK and pH analysis",
        "Crop yield predictions",
        "Irrigation scheduling",
        "Cost optimization tools"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Chart.js"],
      githubLink: "https://github.com/esthermargaret/smart-farm-dashboard",
      figmaLink: "https://figma.com/design/smart-farm-dashboard"
    },
    {
      image: "/Cremah1.png",
      title: "Cremah Coffee Mobile App",
      category: ["UI/UX Design", "App Design", "Wireframe"],
      description:
        "Mobile app design for a coffee shop featuring real-time offers, categorized menu items, and a user-friendly shopping experience optimized for fast checkouts.",
      detailedDescription: "A modern coffee shop mobile application that enhances the customer experience through intuitive design and seamless functionality. The app focuses on speed, convenience, and personalization for coffee enthusiasts.",
      keyFeatures: [
        "Real-time promotional offers",
        "Menu categorization and filtering",
        "Quick checkout process",
        "Loyalty rewards system",
        "Order tracking and notifications"
      ],
      technologies: ["React Native", "Redux", "Stripe API", "Firebase"],
      githubLink: "https://github.com/esthermargaret/cremah-coffee-app",
      figmaLink: "https://figma.com/design/cremah-coffee-app"
    },
    {
      image: "/fraudshield.png",
      title: "FraudShield Credit Card Protection",
      category: ["UI/UX Design", "Web Design", "Wireframe"],
      description:
        "Modern UI/UX design for a credit card fraud detection platform that prioritizes user safety with AI-driven threat alerts and customizable fraud prevention services.",
      detailedDescription: "A comprehensive fraud detection platform that leverages machine learning algorithms to protect users from credit card fraud. The system provides real-time monitoring, intelligent alerts, and customizable security settings.",
      keyFeatures: [
        "Real-time fraud detection",
        "AI-powered threat analysis",
        "Customizable security alerts",
        "Transaction monitoring",
        "Risk assessment dashboard"
      ],
      technologies: ["React.js", "Python", "Scikit-learn", "PostgreSQL"],
      githubLink: "https://github.com/esthermargaret/fraudshield",
      figmaLink: "https://figma.com/design/fraudshield"
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-orange-500 font-medium">~ My Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              My Latest <span className="text-orange-500">Projects</span>
            </h2>
          </div>
          <Button
            onClick={() => navigate("/projects")}
            className="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-full flex items-center gap-2"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div 
                  className="absolute top-4 right-4 w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-900 transition-colors"
                  onClick={() => handleProjectClick(project)}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.category.map((cat, catIndex) => (
                    <span
                      key={catIndex}
                      className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-green-800">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.category.map((cat, catIndex) => (
                      <span
                        key={catIndex}
                        className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Project Overview</h4>
                    <p className="text-gray-600">{selectedProject.detailedDescription}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Button
                      onClick={() => window.open(selectedProject.githubLink, '_blank')}
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                    <Button
                      onClick={() => window.open(selectedProject.figmaLink, '_blank')}
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                    >
                      <Figma className="w-4 h-4" />
                      View Design
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
