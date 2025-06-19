import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What technologies do you use for development?",
      answer:
        "I specialize in modern web technologies including React.js, Next.js, HTML, CSS, JavaScript, Python, and AI/ML frameworks like scikit-learn. For design, I primarily use Figma for creating wireframes, prototypes, and user interfaces.",
    },
    {
      question: "Can I download your resume/CV for information?",
      answer:
        "Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and design achievements.",
    },
    {
      question: "Are you available for freelance design work?",
      answer:
        "Yes, I'm available for freelance projects! I offer both short-term and long-term collaborations for web development, UI/UX design, and application development. Feel free to contact me to discuss your project requirements.",
    },
    {
      question: "What tools do you use for your design work?",
      answer:
        "I primarily use Figma for all my design work, including wireframing, prototyping, and creating high-fidelity designs. For development, I use modern code editors and version control systems like Git and GitHub.",
    },
    {
      question: "How do I navigate through your portfolio projects?",
      answer:
        "You can browse through my portfolio section where projects are categorized by type (UI/UX Design, Web Development, App Design). Each project includes detailed descriptions, technologies used, and links to live demos or GitHub repositories where applicable.",
    },
  ];

  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-medium">~ FAQs</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Questions? <span className="text-orange-500">Look here.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-green-700 rounded-2xl px-6 py-2 bg-green-800/30"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Skills Banner */}
        <div className="mt-20 bg-orange-500 py-4 rounded-2xl overflow-hidden">
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
              <span>AI & Machine Learning</span>
              <span>✱</span>
              <span>Python Development</span>
              <span>✱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
