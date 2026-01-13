import React from "react";

const Experience = () => {
  const education = [
    {
      period: "2025 - 2026",
      institution: "Moringa School",
      degree: "Data Science",
      icon: "🎓",
    },
    {
      period: "2021 - 2025",
      institution: "Multimedia University of Kenya",
      degree: "Bachelor of Science in Computer Technology",
      icon: "🎓",
    },
    {
      period: "2017 - 2021",
      institution: "Naivasha Girls Secondary School",
      degree: "Kenya Certificate of Secondary Education",
      icon: "🎓",
    },
    {
      period: "2005 - 2016",
      institution: "Milimani Primary School",
      degree: "Kenya Certificate of Primary Education",
      icon: "🎓",
    },
  ];

  const workExperience = [
    {
      period: "April 2024 - June 2025",
      company: "Ycentre Shambah Solutions",
      position: "Frontend Developer",
      description:
        "Led the design and development of a personalized dashboard for farmers using React.js",
      icon: "💼",
    },
    {
      period: "March 2023 - February 2024",
      company: "Global Open Data for Agriculture and Nutrition",
      position: "Software Engineer",
      description:
        "Part of the AI team that built personalized learning models for fertilizer prediction",
      icon: "💼",
    },
    {
      period: "June 2022 - August 2022",
      company: "AC Polytechnic Naivasha",
      position: "Network Technician",
      description:
        "Installed, configured, and maintained network equipment including routers, switches, and access points",
      icon: "💼",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-medium">
            ~ Education & Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            My <span className="text-orange-500">Academic and</span>
            <br />
            <span className="text-orange-500">Professional</span> Journey
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="text-orange-500 font-medium mb-2">
                    {edu.period}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{edu.institution}</h4>
                  <p className="text-gray-600">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {workExperience.map((work, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="text-orange-500 font-medium mb-2">
                    {work.period}
                  </div>
                  <h4 className="text-xl font-bold mb-1">{work.company}</h4>
                  <h5 className="text-lg font-medium text-gray-700 mb-2">
                    {work.position}
                  </h5>
                  <p className="text-gray-600">{work.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
