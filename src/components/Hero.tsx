import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen hero-gradient">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                👋 Hello There!
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                I'm <span className="text-orange-500">Esther Mwangi</span>,
                <br />
                Software Developer and
                <br />
                UI/UX Designer.
              </h1>

              <p className="text-gray-600 text-lg max-w-md">
                I'm a passionate Software Developer and UI/UX Designer with 2+
                years in the field, collaborating with various companies and
                creating innovative solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToPortfolio}
                className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-full flex items-center gap-2"
              >
                View My Portfolio
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-gray-300 px-8 py-3 rounded-full"
              >
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Orange Circle Background */}
              <div className="w-80 h-80 bg-orange-500 rounded-full mx-auto relative overflow-hidden">
                <img
                  src="/me smile.jpg"
                  alt="Esther Margaret"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tags */}
              <div className="absolute top-4 right-4 bg-green-800 text-white px-3 py-1 rounded-full text-sm">
                2+ Years Experience
              </div>
              <div className="absolute bottom-8 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                UI/UX Designer
              </div>
              <div className="absolute left-8 top-1/2 bg-green-800 text-white px-3 py-1 rounded-full text-sm">
                Software Developer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Services Banner */}
      <div className="bg-orange-500 py-4 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex items-center space-x-8 text-white font-medium">
            <span>Frontend Development</span>
            <span>✱</span>
            <span>UI/UX Design</span>
            <span>✱</span>
            <span>Application Design</span>
            <span>✱</span>
            <span>Web Development</span>
            <span>✱</span>
            <span>Wireframes</span>
            <span>✱</span>
            <span>Frontend Development</span>
            <span>✱</span>
            <span>UI/UX Design</span>
            <span>✱</span>
            <span>Application Design</span>
            <span>✱</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
