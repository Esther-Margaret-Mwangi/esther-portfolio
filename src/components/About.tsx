import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  const handleDownloadCV = () => {
    const cvUrl = "/CV.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <section id="about" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="w-80 h-80 bg-orange-500 rounded-full mx-auto relative overflow-hidden">
              <img
                src="/me smile.jpg"
                alt="Esther Margaret"
                className="w-full h-full object-cover"
              />

              {/* Floating Skills */}
              <div className="absolute top-8 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                UI/UX Design
              </div>
              <div className="absolute bottom-12 right-4 bg-green-800 text-white px-3 py-1 rounded-full text-sm">
                React.js
              </div>
              <div className="absolute left-8 bottom-8 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                Python
              </div>
              <div className="absolute right-8 top-12 bg-green-800 text-white px-3 py-1 rounded-full text-sm">
                Figma
              </div>
              <div className="absolute top-1/2 left-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                JavaScript
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <span className="text-orange-500 font-medium">~ About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Who is <span className="text-orange-500">Esther Mwangi?</span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg">
              Passionate and versatile Frontend Developer with hands-on
              experience in UI/UX design, and a growing foundation in AI &
              Machine Learning. Skilled in frontend development with React.js
              and modern web technologies, alongside practical knowledge in
              computer networking, system configuration, and maintenance.
            </p>

            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">15+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">5+</div>
                <div className="text-gray-300">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">2+</div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadCV}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full flex items-center gap-2"
              >
                Download CV
                <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="text-orange-500 font-medium text-lg italic">
                Esther Mwangi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
