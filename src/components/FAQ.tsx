
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: "What technologies do you specialize in as a software developer?",
      answer: "I specialize in frontend development with React.js, JavaScript, HTML/CSS, and have experience with Python for AI/ML projects. I also work with UI/UX design using Figma and have knowledge of backend technologies like Nest.js."
    },
    {
      question: "Can I download your resume/CV for information?",
      answer: "Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and technical achievements."
    },
    {
      question: "Are you available for freelance design and development work?",
      answer: "Yes, I'm available for freelance projects! I offer flexible engagement models including hourly, weekly, and monthly contracts to suit different project needs and budgets."
    },
    {
      question: "What tools do you use for your design and development work?",
      answer: "For design, I primarily use Figma for UI/UX design, wireframing, and prototyping. For development, I use React.js, JavaScript, Python, VS Code, Git, and various other modern development tools and frameworks."
    },
    {
      question: "How do I navigate through your portfolio projects?",
      answer: "You can browse through my portfolio projects in the Projects section. Each project includes descriptions, technologies used, and links to GitHub repositories and Figma designs where available."
    }
  ];

  return (
    <section className="py-16 bg-green-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-400 font-medium mb-2">~ FAQs</p>
          <h2 className="text-4xl font-bold text-white">
            Questions? <span className="text-orange-400">Look here.</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-green-700 border-none">
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full text-left p-6 text-white hover:bg-green-600 transition-colors rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{faq.question}</span>
                    <span className="text-2xl">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="bg-orange-400 text-white p-4 rounded-lg">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
