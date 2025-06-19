import React from "react";
import { Phone, Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-medium">~ Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Let's Work <span className="text-orange-500">Together</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Ready to bring your project to life? I'm here to help you create
            amazing digital experiences. Get in touch and let's discuss your
            ideas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Phone</h3>
              <p className="text-gray-600 mb-4">
                Give me a call to discuss your project
              </p>
              <a
                href="tel:+254748635441"
                className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
              >
                +254-748-635441
              </a>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-600 mb-4">Send me an email anytime</p>
              <a
                href="mailto:esthermwm03@gmail.com"
                className="text-green-800 font-medium hover:text-green-900 transition-colors"
              >
                esthermwm03@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">LinkedIn</h3>
              <p className="text-gray-600 mb-4">
                Connect with me professionally
              </p>
              <a
                href="https://www.linkedin.com/in/esther-margaret-wairimu-283a41245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                linkedin.com/in/esther-margaret-wairimu
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-500 to-green-800 p-12 rounded-2xl text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg mb-8 opacity-90">
                I'm always excited to work on new projects and help bring your
                ideas to life. Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+254748635441"
                  className="bg-white text-orange-500 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  Call Me Now
                </a>
                <a
                  href="mailto:esthermwm03@gmail.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-orange-500 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
