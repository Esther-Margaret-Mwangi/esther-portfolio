import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Creating responsive and interactive web applications using modern technologies like React.js, HTML, CSS, and JavaScript.",
      link: "#contact",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Designing user-friendly interfaces and experiences using Figma, focusing on usability and aesthetic appeal.",
      link: "#contact",
    },
    {
      icon: "📱",
      title: "Application Design",
      description:
        "Crafting mobile and web application designs that provide seamless user experiences across all devices.",
      link: "#contact",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-orange-500 font-medium">~ Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Services <span className="text-orange-500">I Provide</span>
            </h2>
          </div>
          <Button
            onClick={() => navigate("/services")}
            className="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-full flex items-center gap-2"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button
                onClick={scrollToContact}
                className="text-orange-500 font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
