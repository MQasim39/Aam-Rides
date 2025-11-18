import React from 'react';
import { FiCreditCard, FiDollarSign, FiMapPin, FiShield, FiClock, FiSmartphone } from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      icon: <FiMapPin className="w-8 h-8" />,
      title: 'Real-Time Tracking',
      description: 'Track your driver in real-time. Know exactly where your ride is and when it will arrive.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <FiCreditCard className="w-8 h-8" />,
      title: 'Flexible Payment',
      description: 'Pay with card or cash - whatever works for you. Both options are safe and secure.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: 'Upfront Pricing',
      description: 'See the exact fare before you book. No hidden charges, complete transparency.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Safe & Verified',
      description: 'All drivers are verified and background-checked. Your safety is our priority.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: '24/7 Available',
      description: 'Book a ride anytime, day or night. We are always here when you need us.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: 'Easy Booking',
      description: 'Book your ride in just a few taps. Simple interface, hassle-free experience.',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            Why Choose Aam Ride
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Features that make
            <span className="gradient-text"> your ride better</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Safe, affordable, and reliable rides whenever you need them.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">96%</div>
              <div className="text-lg opacity-90">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">&lt;5min</div>
              <div className="text-lg opacity-90">Average Pickup</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">300+</div>
              <div className="text-lg opacity-90">Verified Drivers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
