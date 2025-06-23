import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      image: "/Shambah Solutions.png",
      title: "Shambah Solutions Mobile App",
      category: ["UI/UX Design", "App Design", "Wireframe"],
      description:
        "Agritech mobile solution offering AI-powered plant disease diagnosis, soil testing, and fertilizer recommendation for smallholder farmers.",
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
    },
    {
      image: "/Cremah1.png",
      title: "Cremah Coffee Mobile App",
      category: ["UI/UX Design", "App Design", "Wireframe"],
      description:
        "Mobile app design for a coffee shop featuring real-time offers, categorized menu items, and a user-friendly shopping experience optimized for fast checkouts.",
    },
    {
      image: "/fraudshield.png",
      title: "FraudShield Credit Card Protection",
      category: ["UI/UX Design", "Web Design", "Wireframe"],
      description:
        "Modern UI/UX design for a credit card fraud detection platform that prioritizes user safety with AI-driven threat alerts and customizable fraud prevention services.",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
                <div className="absolute top-4 right-4 w-10 h-10 bg-green-800 rounded-full flex items-center justify-center">
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
    </section>
  );
};

export default Projects;
