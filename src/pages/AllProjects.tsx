import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AllProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      title: "E-commerce Mobile App",
      category: ["UI/UX Design", "App Design", "Wireframe"],
      description:
        "Complete mobile app solution for beauty products with seamless shopping experience.",
      fullDescription:
        "A comprehensive e-commerce mobile application designed specifically for beauty products. Features include user authentication, product catalog, shopping cart, secure payment integration, order tracking, and user reviews. The design focuses on visual appeal and ease of use, with a clean interface that highlights product imagery and simplifies the purchasing process.",
      technologies: ["Figma", "React Native Design", "User Research"],
      githubUrl: "#",
      liveUrl: "#",
      figmaUrl: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      title: "Beauty Product Landing Page",
      category: ["UI/UX Design", "Web Design", "Wireframe"],
      description:
        "Modern landing page design for beauty products with focus on conversion optimization.",
      fullDescription:
        "A high-converting landing page designed for beauty product marketing. Includes hero section with compelling copy, product showcase, customer testimonials, before/after galleries, and clear call-to-action buttons. The design emphasizes trust-building elements and social proof to maximize conversion rates.",
      technologies: ["Figma", "HTML/CSS", "JavaScript", "React.js"],
      githubUrl: "#",
      liveUrl: "#",
      figmaUrl: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      title: "Coffee Shop Web Application",
      category: ["UI/UX Design", "Frontend Development", "Wireframe"],
      description:
        "Frontend coffee ordering application with real-time order tracking and payment integration.",
      fullDescription:
        "A modern web application for coffee shop ordering system. Features include menu browsing, customization options, cart management, user accounts, order history, and real-time order status updates. Built with React.js for smooth user interactions and responsive design for all devices.",
      technologies: ["React.js", "HTML/CSS", "JavaScript", "Figma"],
      githubUrl: "#",
      liveUrl: "#",
      figmaUrl: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      title: "Coffee Shop Mobile App",
      category: ["UI/UX Design", "Web Design", "Wireframe"],
      description:
        "Mobile app design for coffee ordering with loyalty program and location-based services.",
      fullDescription:
        "Mobile application design for coffee ordering with advanced features like loyalty rewards, location-based store finder, pre-ordering capabilities, and push notifications for order updates. The design focuses on speed and convenience for busy coffee lovers.",
      technologies: ["Figma", "Mobile UI Design", "User Experience"],
      githubUrl: "#",
      liveUrl: "#",
      figmaUrl: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      title: "Data Analytics Dashboard",
      category: ["UI/UX Design", "Frontend Development", "AI Integration"],
      description:
        "Interactive dashboard for data visualization with AI-powered insights.",
      fullDescription:
        "A comprehensive data analytics dashboard that combines beautiful data visualization with AI-powered insights. Features interactive charts, real-time data updates, predictive analytics, and customizable reporting. Built using React.js with Python ML integration for advanced analytics.",
      technologies: ["React.js", "Python", "Scikit-learn", "D3.js"],
      githubUrl: "#",
      liveUrl: "#",
      figmaUrl: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      title: "Portfolio Website Template",
      category: ["UI/UX Design", "Frontend Development", "Web Design"],
      description:
        "Modern portfolio website template for creative professionals.",
      fullDescription:
        "A sleek and modern portfolio website template designed for creative professionals. Features include animated transitions, project galleries, contact forms, blog integration, and responsive design. Built with modern web technologies and optimized for performance and SEO.",
      technologies: ["React.js", "HTML/CSS", "JavaScript", "Figma"],
      githubUrl: "#",
      liveUrl: "#",
      figmaUrl: "#",
    },
  ];

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Esther</span>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-medium">
              ~ Complete Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              All My <span className="text-orange-500">Projects</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore my complete portfolio of web development and design
              projects. Each project showcases different skills and technologies
              I work with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-green-800 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="space-y-4">
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

                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.fullDescription}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      className="bg-green-800 hover:bg-green-900 text-white flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-orange-500 text-orange-500 hover:bg-orange-50 flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              onClick={scrollToContact}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto"
            >
              Let's Work Together
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
