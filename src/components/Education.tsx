
import React from 'react';

const Education = () => {
  const education = [
    {
      period: '2021 - 2025',
      institution: 'Multimedia University of Kenya',
      degree: 'Bachelor of Science in Computer Technology'
    }
  ];

  const experience = [
    {
      period: 'April 2024 - Present',
      company: 'Ycentar Shambah Solutions',
      position: 'Software Developer',
      location: 'Nairobi, Kenya (Hybrid)'
    },
    {
      period: 'March 2023 - February 2024',
      company: 'Global Open Data for Agriculture and Nutrition',
      position: 'Software Engineer (Remote)',
      location: 'Remote'
    },
    {
      period: 'June 2022 - August 2022',
      company: 'AC Polytechnic Naivasha',
      position: 'Network Technician',
      location: 'Naivasha, Nakuru, Kenya (On-site)'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-400 font-medium mb-2">~ Education & Work</p>
          <h2 className="text-4xl font-bold text-gray-900">
            My <span className="text-orange-400">Academic and</span>
          </h2>
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="text-orange-400">Professional</span> Journey
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6 pb-6">
                <div className="text-sm text-gray-500 mb-1">{edu.period}</div>
                <h4 className="text-lg font-bold text-gray-900">{edu.institution}</h4>
                <p className="text-gray-600">{edu.degree}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
            </div>
            
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6 pb-6">
                <div className="text-sm text-gray-500 mb-1">{exp.period}</div>
                <h4 className="text-lg font-bold text-gray-900">{exp.company}</h4>
                <p className="text-gray-600">{exp.position}</p>
                <p className="text-sm text-gray-500">{exp.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
