import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Hourly",
      price: "$5",
      period: "/Hour",
      features: [
        "UI/UX Design consultation",
        "Frontend development",
        "Code review and optimization",
        "Technical documentation",
        "Project planning support",
      ],
      popular: false,
    },
    {
      name: "Monthly",
      price: "$900",
      period: "/Month",
      features: [
        "Frontend development",
        "UI/UX design and prototyping",
        "Project management",
        "Regular progress updates",
        "Code documentation",
        "Testing and deployment",
        "Maintenance and support",
      ],
      popular: true,
    },
    {
      name: "Quarterly",
      price: "$2500",
      period: "/Quarter",
      features: [
        "Frontend project development",
        "Advanced UI/UX design",
        "AI/ML integration consultation",
        "Performance optimization",
        "Responsive design",
        "Analytics implementation",
        "Long-term maintenance",
        "Priority support",
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-orange-500 font-medium">~ Pricing Table</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              My <span className="text-orange-500">Pricing Model</span>
            </h2>
          </div>
          <Button
            onClick={scrollToContact}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? "bg-orange-500 text-white transform scale-105"
                  : "bg-green-800/30 border border-green-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  {plan.price}
                  <span className="text-lg font-normal">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-full ${
                  plan.popular
                    ? "bg-white text-orange-500 hover:bg-gray-100"
                    : "bg-orange-500 hover:bg-orange-600 text-white"
                }`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
