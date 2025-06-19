
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      title: 'Hourly',
      price: '$25',
      period: '/Hour',
      features: [
        'Perfect for small tasks',
        'Flexible scheduling',
        'Quick turnaround',
        'Direct communication',
        'Quality assurance'
      ]
    },
    {
      title: 'Weekly',
      price: '$800',
      period: '/Week',
      popular: true,
      features: [
        'Ideal for ongoing projects',
        'Priority support',
        'Regular check-ins',
        'Comprehensive updates',
        'Dedicated time slots',
        'Progress tracking'
      ]
    },
    {
      title: 'Monthly',
      price: '$2,800',
      period: '/Month',
      features: [
        'Best for long-term projects',
        'Full project management',
        'Weekly progress reports',
        'Complete project delivery',
        'Post-project support',
        'Documentation included'
      ]
    }
  ];

  return (
    <section className="py-16 bg-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-orange-400 font-medium mb-2">~ Pricing Table</p>
            <h2 className="text-4xl font-bold text-white">
              My <span className="text-orange-400">Pricing Model</span>
            </h2>
          </div>
          <Button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full flex items-center space-x-2">
            <span>Get Started</span>
            <span>→</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-8 rounded-2xl ${plan.popular ? 'bg-orange-400 text-white transform scale-105' : 'bg-green-700 text-white'}`}>
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-lg">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-orange-300 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full mt-8 py-3 rounded-full ${
                    plan.popular 
                      ? 'bg-white text-orange-400 hover:bg-gray-100' 
                      : 'bg-orange-400 text-white hover:bg-orange-500'
                  }`}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
