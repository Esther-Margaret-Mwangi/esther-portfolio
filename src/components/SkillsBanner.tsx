
import React from 'react';

const SkillsBanner = () => {
  const skills = [
    'Frontend Development',
    'UI/UX Design', 
    'Web Design',
    'App Design',
    'Wireframes',
    'Python & AI/ML',
    'React.js',
    'JavaScript'
  ];

  return (
    <div className="bg-orange-400 py-4 overflow-hidden">
      <div className="flex animate-scroll">
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex items-center space-x-8 whitespace-nowrap">
            <span className="text-white font-semibold text-lg">{skill}</span>
            <span className="text-white text-2xl">✱</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBanner;
