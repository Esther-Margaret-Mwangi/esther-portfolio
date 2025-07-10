import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Github,
  ExternalLink,
  Figma,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AllProjects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: "/Trendify.png",
      title: "Trendify E-commerce App",
      category: ["UI/UX Design", "App Design", "Wireframe"],
      description:
        "A global e-commerce app designed to offer users a seamless shopping experience across diverse product categories, featuring a clean interface, smart search, and international shipping.",
      fullDescription:
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
      githubUrl: "#",
      liveUrl:
        "https://www.figma.com/proto/4qX97Vtwp98044ThMAJ6GI/Trendify-Ecommerce-App?page-id=0%3A1&node-id=1-331&viewport=552%2C150%2C0.66&t=jL9bl55ucxn91nO3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
      figmaUrl:
        "https://www.figma.com/proto/4qX97Vtwp98044ThMAJ6GI/Trendify-Ecommerce-App?page-id=0%3A1&node-id=1-331&viewport=552%2C150%2C0.66&t=jL9bl55ucxn91nO3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
    },
    {
      image: "/Shambah Solutions.png",
      title: "Shambah Solutions (Agri-tech) App",
      category: ["UI/UX Design", "App Design", "Wireframe"],
      description:
        "Agritech mobile solution offering AI-powered plant disease diagnosis, soil testing, and fertilizer recommendation for smallholder farmers.",
      fullDescription:
        "A smart agriculture mobile application designed to empower smallholder farmers with digital tools for improved crop management. The app integrates AI-powered plant disease diagnosis, soil testing services, and intelligent fertilizer recommendations. It guides users through a clean, intuitive interface with clear calls to action and a seamless onboarding experience. The app features user authentication, photo-based plant diagnosis, form-based soil testing submissions, and instant results with tailored recommendations. The design promotes clarity and trust, with a focus on functional simplicity and agricultural relevance.The end goal was to provide farmers with a self-service tool that bridges the gap between modern agritech and traditional farming, enabling informed decision-making through digital convenience.",
      keyFeatures: [
        "AI-powered plant disease detection",
        "Soil nutrient analysis",
        "Fertilizer recommendation engine",
        "Weather forecasting integration",
        "Farmer community forum",
      ],
      technologies: [
        "Figma",
        "UI Design System for Agri-based Products",
        "Wireframing & Interactive Prototyping",
        "Usability Testing & Feedback Integration",
      ],
      githubUrl: "#",
      liveUrl:
        "https://www.figma.com/proto/8p7LRyujwr1ypp6dcWe50u/Shambah-Solutions-app?page-id=0%3A1&node-id=6-23&viewport=-1849%2C-5963%2C1.81&t=MhFFzE5PO4snCr7g-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1",
      figmaUrl:
        "https://www.figma.com/proto/8p7LRyujwr1ypp6dcWe50u/Shambah-Solutions-app?page-id=0%3A1&node-id=6-23&viewport=-1849%2C-5963%2C1.81&t=MhFFzE5PO4snCr7g-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1",
    },
    {
      image: "/Farm smart dashboard.jpg",
      title: "Smart Farm Dashboard",
      category: ["Frontend Development", "Web Design", "AI Integration"],
      description:
        "AI-powered farm intelligence platform that provides real-time soil analysis and fertilizer recommendations using NPK and pH values for optimized crop yield.",
      fullDescription:
        "An AI-powered farm intelligence dashboard developed to help farmers make data-driven decisions. This web-based platform provides tools for predicting soil organic carbon levels, recommending appropriate fertilizers, and offering region-specific agricultural advice tailored to Kenyan counties. The dashboard is designed with a clean, intuitive interface to simplify complex agricultural data and make insights accessible to users with varying technical backgrounds.",
      keyFeatures: [
        "Real-time soil monitoring",
        "NPK and pH analysis",
        "Crop yield predictions",
        "Irrigation scheduling",
        "Cost optimization tools",
      ],
      technologies: [
        "React.js",
        "Python & Machine Learning Models (for prediction logic)",
        "Tailwind CSS",
      ],
      githubUrl: "#",
      liveUrl: "#",
      figmaUrl: "#",
    },
    {
      image: "/Cremah1.png",
      title: "Cremah Coffee Mobile App",
      category: ["UI/UX Design", "App Design", "Wireframe"],
      description:
        "Mobile app design for a coffee shop featuring real-time offers, categorized menu items, and a user-friendly shopping experience optimized for fast checkouts.",
      fullDescription:
        "An intuitive e-commerce mobile application crafted for a specialty coffee shop brand. The app features a visually appealing interface with smooth navigation through categories such as cappuccino, latte, espresso, and mocha. Key features include personalized offers, dynamic pricing, product browsing, add-to-cart functionality, and a seamless checkout experience. The design emphasizes accessibility, convenience, and brand consistency to enhance user engagement and drive conversions. The layout is optimized for mobile devices, combining warm color schemes with high-quality imagery to create a cozy, café-like feel. The project includes user authentication, onboarding, and interactive elements to elevate the digital coffee ordering experience.",
      keyFeatures: [
        "Real-time promotional offers",
        "Menu categorization and filtering",
        "Quick checkout process",
        "Loyalty rewards system",
        "Order tracking and notifications",
      ],
      technologies: [
        "Figma",
        "UX Research & Competitive Analysis",
        "User Flow Mapping",
        "Interactive Prototyping",
      ],
      githubUrl: "#",
      liveUrl:
        "https://www.figma.com/proto/t8tNXWmmnfY9rrG2VxgBkV/Coffee-app?page-id=0%3A1&node-id=2-3&viewport=450%2C10%2C0.17&t=ZbwIpj7WTnh8wbqb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A40",
      figmaUrl:
        "https://www.figma.com/proto/t8tNXWmmnfY9rrG2VxgBkV/Coffee-app?page-id=0%3A1&node-id=2-3&viewport=450%2C10%2C0.17&t=ZbwIpj7WTnh8wbqb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A40",
    },
    {
      image: "/fraudshield.png",
      title: "FraudShield Credit Card Protection",
      category: ["UI/UX Design", "Web Design", "Wireframe"],
      description:
        "Modern UI/UX design for a credit card fraud detection platform that prioritizes user safety with AI-driven threat alerts and customizable fraud prevention services.",
      fullDescription:
        "A modern and secure credit card fraud detection website designed in Figma. FraudShield offers real-time protection through AI-driven analysis, alert systems, and customizable rule configurations to protect both individuals and businesses from suspicious financial activity. The design emphasizes trust, professionalism, and clarity, with a strong visual hierarchy and user-centered layout.",
      keyFeatures: [
        "Real-time fraud detection",
        "AI-powered threat analysis",
        "Customizable security alerts",
        "Transaction monitoring",
        "Risk assessment dashboard",
      ],
      technologies: [
        "Figma (UI Design & Wireframes)",
        "UX Research (User Journey Mapping & Use Case Scenarios)",
      ],
      githubUrl: "#",
      liveUrl:
        "https://www.figma.com/proto/KiTTtiLanNtbXTZOhkbjeY/FRAUDSHIELD-WEBSITE?page-id=0%3A1&node-id=3-43&viewport=71%2C175%2C0.05&t=HkrhhKRQGJiKb3ay-1&scaling=scale-down&content-scaling=fixed",
      figmaUrl:
        "https://www.figma.com/proto/KiTTtiLanNtbXTZOhkbjeY/FRAUDSHIELD-WEBSITE?page-id=0%3A1&node-id=3-43&viewport=71%2C175%2C0.05&t=HkrhhKRQGJiKb3ay-1&scaling=scale-down&content-scaling=fixed",
    },
    {
      image: "/Sandton.png",
      title: "Sandton Hotel Booking Website",
      category: ["UI/UX Design", "Frontend Development", "  Web Design"],
      description:
        "Fully responsive hotel website built with HTML, CSS, and PHP. Includes booking features for rooms, wellness services, dining, and event venues with an elegant and modern user interface.",
      fullDescription:
        "A fully functional and visually rich hotel website developed for Sandton Resort & Spa. The platform allows users to explore the resort's facilities including luxurious accommodations, fine dining, wellness services, nightlife experiences, and conference venues. Users can make room and service bookings directly from the site, enhancing convenience and user engagement.The UI is designed with a premium aesthetic, combining warm tones and elegant layouts to reflect the resort's luxurious brand. Navigation is smooth and intuitive, allowing seamless browsing of sections like 'Stay,' 'Dining & Nightlife,' 'Wellness,' and 'Meetings & Events.'",
      keyFeatures: [
        "Online room booking system",
        "Service reservations",
        "Virtual tour integration",
        "Multi-language support",
        "Payment gateway integration",
      ],
      technologies: ["HTML5 & CSS3", "PHP", "Responsive Design Techniques"],
      githubUrl: "#",
      liveUrl: "#",
      figmaUrl: "#",
    },
    {
      image: "/mavuno.png",
      title: "Mavuno Rongai Church Website",
      category: ["UI/UX Design", "Web Design", "Wireframe"],
      description:
        "Modern church website prototype designed in Figma to enhance digital engagement and streamline access to worship content, sermons, and community information.",
      fullDescription:
        "A full-featured church website prototype built for Mavuno Rongai to provide a seamless digital experience for members and visitors. The design emphasizes clarity, community engagement, and accessibility to resources such as worship services, sermons, Spotify teachings, and location details. The homepage highlights Sunday service info, quick access to media, and a strong call to action, while the overall layout reflects the church's mission of transformation and fearless influence.",
      keyFeatures: [
        "Sermon streaming and downloads",
        "Event calendar integration",
        "Online donation system",
        "Community forum",
        "Mobile-responsive design",
      ],
      technologies: ["Figma", "Typography and Color Theory"],
      githubUrl: "#",
      liveUrl:
        "https://www.figma.com/proto/AW7aakAuGkT9C1loDRM6ek/Mavuno-Website?page-id=0%3A1&node-id=1-2&viewport=174%2C122%2C0.12&t=X0Xl53XuuttdAidp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
      figmaUrl:
        "https://www.figma.com/proto/AW7aakAuGkT9C1loDRM6ek/Mavuno-Website?page-id=0%3A1&node-id=1-2&viewport=174%2C122%2C0.12&t=X0Xl53XuuttdAidp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

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
                  <div
                    className="absolute top-4 right-4 w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-900 transition-colors cursor-pointer"
                    onClick={() => handleProjectClick(project)}
                  >
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
                      onClick={() =>
                        window.open(selectedProject.liveUrl, "_blank")
                      }
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
                      {selectedProject.fullDescription}
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
                    <Button
                      onClick={() =>
                        window.open(selectedProject.githubUrl, "_blank")
                      }
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                    <Button
                      onClick={() =>
                        window.open(selectedProject.figmaUrl, "_blank")
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
    </div>
  );
};

export default AllProjects;
