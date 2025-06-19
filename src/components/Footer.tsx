import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's <span className="text-orange-500">Connect</span> there
          </h2>
          <Button
            onClick={scrollToContact}
            className="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-full flex items-center gap-2"
          >
            Contact Me
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Esther</span>
            </div>
            <p className="text-gray-600">
              Passionate Frontend Developer and UI/UX Designer creating
              innovative digital solutions and exceptional user experiences.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="https://github.com/EstherMargaret"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/esther-margaret"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-orange-500 font-bold mb-6">Navigation</h3>
            <div className="space-y-3">
              <div>
                <a
                  href="#home"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Home
                </a>
              </div>
              <div>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Services
                </a>
              </div>
              <div>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About
                </a>
              </div>
              <div>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Projects
                </a>
              </div>
              <div>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-orange-500 font-bold mb-6">Contact</h3>
            <div className="space-y-3 text-gray-600">
              <div>+254-748-635441</div>
              <div>esthermwm03@gmail.com</div>
              <div>
                <a
                  href="https://github.com/EstherMargaret"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  github.com/EstherMargaret
                </a>
              </div>
              <div>
                <a
                  href="https://linkedin.com/in/esther-margaret"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  linkedin.com/in/esther-margaret
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <div>Copyright © 2024 Esther. All Rights Reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500 transition-colors">
              User Terms & Conditions
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
