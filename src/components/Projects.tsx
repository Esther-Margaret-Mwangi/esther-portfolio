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
      image: "/Trendify.png",
      title: "Trendify E-commerce App",
      category: ["UI/UX Design", "App Design", "Wireframe"],
      description:
        "A global e-commerce app designed to offer users a seamless shopping experience across diverse product categories, featuring a clean interface, smart search, and international shipping.",
      detailedDescription:
        "Trendify is a modern global e-commerce mobile app, tailored for users seeking a wide variety of products from electronics to fashion, home appliances, beauty products, and more. The app offers an intuitive shopping experience with global reach, advanced product filtering, and personalized recommendations. It features a visually appealing design, product browsing across multiple categories, dynamic search functionality, add-to-cart and wishlist capabilities, international shipping, and a smooth checkout process. The app focuses on accessibility, user trust, and brand neutrality to cater to a wide range of global consumers. Designed for both Android and iOS, the UI is clean, scalable, and optimized for performance.",
      keyFeatures: [
        "Multi-category product browsing",
        "Global shipping and real-time tracking",
        "Smart search and product filtering",
        "Personalized recommendations and wishlists",
        "Secure checkout with multiple payment options",
      ],
      technologies: [
        "Figma",
        "UX Research & Competitive Analysis",
        "User Flow Mapping",
        "High-Fidelity Prototyping",
      ],
      githubLink: "#",
      figmaLink:
        "https://www.figma.com/proto/4qX97Vtwp98044ThMAJ6GI/Trendify-Ecommerce-App?page-id=0%3A1&node-id=1-331&viewport=552%2C150%2C0.66&t=jL9bl55ucxn91nO3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
    },
    {
      image: "/fraudshield.png",
      title: "FraudShield Credit Card Protection",
      category: ["UI/UX Design", "Web Design", "Wireframe"],
      description:
        "Modern UI/UX design for a credit card fraud detection platform that prioritizes user safety with AI-driven threat alerts and customizable fraud prevention services.",
      detailedDescription:
        "A modern and secure credit card fraud detection website designed in Figma. FraudShield offers real-time protection through AI-driven analysis, alert systems, and customizable rule configurations to protect both individuals and businesses from suspicious financial activity. The design emphasizes trust, professionalism, and clarity, with a strong visual hierarchy and user-centered layout.",
      keyFeatures: [
        "Real-time fraud detection",
        "AI-powered threat analysis",
        "Security alerts",
        "Transaction monitoring",
        "Risk assessment dashboard",
      ],
      technologies: [
        "Figma (UI Design & Wireframes)",
        "UX Research (User Journey Mapping & Use Case Scenarios)",
      ],
      githubLink: "#",
      figmaLink:
        "https://www.figma.com/proto/KiTTtiLanNtbXTZOhkbjeY/FRAUDSHIELD-WEBSITE?page-id=0%3A1&node-id=3-43&viewport=71%2C175%2C0.05&t=HkrhhKRQGJiKb3ay-1&scaling=scale-down&content-scaling=fixed",
    },
    {
      image: "/Shambah Solutions.png",
      title: "Shambah Solutions (Agri-tech) App",
      category: ["UI/UX Design", "App Design", "Wireframe"],
      description:
        "Agritech mobile solution offering AI-powered plant disease diagnosis, soil testing, and fertilizer recommendation for smallholder farmers.",
      detailedDescription:
        "A smart agriculture mobile application designed to empower smallholder farmers with digital tools for improved crop management. The app integrates AI-powered plant disease diagnosis, soil testing services, and intelligent fertilizer recommendations. It guides users through a clean, intuitive interface with clear calls to action and a seamless onboarding experience. The app features user authentication, photo-based plant diagnosis, form-based soil testing submissions, and instant results with tailored recommendations. The design promotes clarity and trust, with a focus on functional simplicity and agricultural relevance.The end goal was to provide farmers with a self-service tool that bridges the gap between modern agritech and traditional farming, enabling informed decision-making through digital convenience.",
      keyFeatures: [
        "AI-powered plant disease detection",
        "Soil nutrient analysis",
        "Fertilizer recommendation engine",
        "Farmer community forum",
      ],
      technologies: [
        "Figma",
        "UI Design System for Agri-based Products",
        "Wireframing & Interactive Prototyping",
        "Usability Testing & Feedback Integration",
      ],
      githubLink: "#",
      figmaLink:
        "https://www.figma.com/proto/8p7LRyujwr1ypp6dcWe50u/Shambah-Solutions-app?page-id=0%3A1&node-id=6-23&viewport=-1849%2C-5963%2C1.81&t=MhFFzE5PO4snCr7g-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1",
    },
    {
      image: "/Farm smart dashboard.jpg",
      title: "Smart Farm Dashboard",
      category: ["Frontend Development", "Web Design", "Wireframe"],
      description:
        "AI-powered farm intelligence platform that provides real-time soil analysis and fertilizer recommendations using NPK and pH values for optimized crop yield.",
      detailedDescription:
        "An AI-powered farm intelligence dashboard developed to help farmers make data-driven decisions. This web-based platform provides tools for predicting soil organic carbon levels, recommending appropriate fertilizers, and offering region-specific agricultural advice tailored to Kenyan counties. The dashboard is designed with a clean, intuitive interface to simplify complex agricultural data and make insights accessible to users with varying technical backgrounds.",
      keyFeatures: [
        "Real-time soil monitoring",
        "NPK and pH analysis",
        "Crop yield predictions",
      ],
      technologies: [
        "React.js",
        "Python & Machine Learning Models (for prediction logic)",
        "Tailwind CSS",
      ],
      githubLink: "#",
      figmaLink: "#",
    },
    {
      image: "/Cremah1.png",
      title: "Cremah Coffee Mobile App",
      category: ["UI/UX Design", "App Design", "Wireframe"],
      description:
        "Mobile app design for a coffee shop featuring real-time offers, categorized menu items, and a user-friendly shopping experience optimized for fast checkouts.",
      detailedDescription:
        "An intuitive e-commerce mobile application crafted for a specialty coffee shop brand. The app features a visually appealing interface with smooth navigation through categories such as cappuccino, latte, espresso, and mocha. Key features include personalized offers, dynamic pricing, product browsing, add-to-cart functionality, and a seamless checkout experience. The design emphasizes accessibility, convenience, and brand consistency to enhance user engagement and drive conversions. The layout is optimized for mobile devices, combining warm color schemes with high-quality imagery to create a cozy, café-like feel. The project includes user authentication, onboarding, and interactive elements to elevate the digital coffee ordering experience.",
      keyFeatures: [
        "Real-time promotional offers",
        "Menu categorization and filtering",
        "Quick checkout process",
        "Order tracking and notifications",
      ],
      technologies: [
        "Figma",
        "UX Research & Competitive Analysis",
        "User Flow Mapping",
        "Interactive Prototyping",
      ],
      githubLink: "#",
      figmaLink:
        "https://www.figma.com/proto/t8tNXWmmnfY9rrG2VxgBkV/Coffee-app?page-id=0%3A1&node-id=2-3&viewport=450%2C10%2C0.17&t=ZbwIpj7WTnh8wbqb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A40",
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
      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
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
                    <h4 className="font-semibold text-lg mb-2">
                      Project Overview
                    </h4>
                    <p className="text-gray-600">
                      {selectedProject.detailedDescription}
                    </p>
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
                    <h4 className="font-semibold text-lg mb-2">
                      Technologies Used
                    </h4>
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
                    <Button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900">
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                    <Button
                      onClick={() =>
                        window.open(selectedProject.figmaLink, "_blank")
                      }
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
