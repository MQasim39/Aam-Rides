import React from 'react';
import { FiMapPin, FiDollarSign, FiCreditCard, FiClock } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Enter Destination',
      description: 'Open the app and enter where you want to go. We will find the best route for you.',
      icon: <FiMapPin className="w-12 h-12" />,
    },
    {
      number: '02',
      title: 'Check Fare',
      description: 'See the estimated fare before booking. Transparent pricing helps you decide.',
      icon: <FiDollarSign className="w-12 h-12" />,
    },
    {
      number: '03',
      title: 'Choose Payment',
      description: 'Select your preferred payment method - card or cash, both are secure.',
      icon: <FiCreditCard className="w-12 h-12" />,
    },
    {
      number: '04',
      title: 'Track Your Ride',
      description: 'Confirm booking and track your driver in real-time. Get notified when they arrive.',
      icon: <FiClock className="w-12 h-12" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How <span className="gradient-text">it works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book your ride in 4 easy steps. Quick and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white"
              >
                {/* Step Card */}
                <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-orange-500 mb-6 mt-4">{step.icon}</div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-orange-400 text-3xl z-20">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Ready to get started?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('register');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 gradient-bg text-white rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
