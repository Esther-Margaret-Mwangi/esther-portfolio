import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AllServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Creating responsive and interactive web applications using modern technologies like React.js, HTML, CSS, and JavaScript.",
      details: [
        "Modern React.js applications with hooks and context",
        "Responsive design using Tailwind CSS",
        "Interactive user interfaces with smooth animations",
        "Cross-browser compatibility and optimization",
        "Component-based architecture for maintainability",
      ],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Designing user-friendly interfaces and experiences using Figma, focusing on usability and aesthetic appeal.",
      details: [
        "User research and persona development",
        "Wireframing and prototyping in Figma",
        "Visual design with modern aesthetics",
        "Usability testing and iteration",
        "Design systems and component libraries",
      ],
    },
    {
      icon: "📱",
      title: "Application Design",
      description:
        "Crafting mobile and web application designs that provide seamless user experiences across all devices.",
      details: [
        "Mobile-first responsive design approach",
        "Cross-platform compatibility",
        "Intuitive navigation and user flows",
        "Performance-optimized interfaces",
        "Accessibility-focused design principles",
      ],
    },
    {
      icon: "🌐",
      title: "Web Design",
      description:
        "Creating visually appealing and functional websites that effectively communicate your brand message.",
      details: [
        "Modern website layouts and structures",
        "Brand-consistent visual identity",
        "Conversion-focused landing pages",
        "Interactive elements and micro-animations",
        "SEO-friendly design structure",
      ],
    },
    {
      icon: "📋",
      title: "Wireframes",
      description:
        "Detailed wireframes and prototypes to visualize your project before development begins.",
      details: [
        "Low-fidelity and high-fidelity wireframes",
        "Interactive prototypes for user testing",
        "User journey mapping",
        "Information architecture planning",
        "Collaborative design workshops",
      ],
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning Integration",
      description:
        "Integrating AI and ML features into web applications using Python and modern frameworks.",
      details: [
        "Python-based ML model integration",
        "Scikit-learn implementation",
        "Data visualization and analytics",
        "Predictive modeling interfaces",
        "AI-powered user experiences",
      ],
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
    <div className="min-h-screen bg-gray-50">
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

      {/* Services Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-medium">~ All Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Complete <span className="text-orange-500">Service</span>{" "}
              Portfolio
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From concept to completion, I provide comprehensive digital
              solutions tailored to your needs. Here's everything I can help you
              with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">
                    What I Include:
                  </h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={scrollToContact}
                  className="w-full bg-green-800 hover:bg-green-900 text-white"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              onClick={scrollToContact}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto"
            >
              Ready to Start Your Project?
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllServices;
