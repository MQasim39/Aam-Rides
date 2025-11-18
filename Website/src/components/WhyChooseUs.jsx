import React from 'react';
import { FiCheck } from 'react-icons/fi';

const WhyChooseUs = () => {
  const benefits = [
    'Verified & Trusted Drivers',
    'Transparent Pricing - No Hidden Fees',
    'Card or Cash Payment Options',
    'Real-Time GPS Tracking',
    '24/7 Customer Support',
    'Fast & Reliable Service',
  ];

  const testimonials = [
    {
      name: 'Ayesha Khan',
      role: 'Regular Commuter',
      rating: 5,
      text: 'I use Aam Ride daily for my office commute. Always on time, professional drivers, and great service!',
    },
    {
      name: 'Ahmed Raza',
      role: 'Business Owner',
      rating: 5,
      text: 'The upfront pricing is transparent and payment is hassle-free. Perfect for business meetings!',
    },
    {
      name: 'Fatima Ali',
      role: 'Student',
      rating: 5,
      text: 'Feel safe and the fares are affordable. The app is super easy to use. Best for university trips!',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Why Choose Us */}
          <div>
            <div className="inline-block px-4 py-2 bg-white text-orange-600 rounded-full text-sm font-semibold mb-4">
              Why Aam Ride
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              More than just
              <span className="gradient-text"> a ride</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are committed to providing the best ride experience. From pickup to drop-off, every detail matters.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <FiCheck className="text-white" size={16} />
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                const element = document.getElementById('download');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 gradient-bg text-white rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Download Now
            </button>
          </div>

          {/* Right Side - Testimonials */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              What our riders say
            </h3>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}

            {/* Trust Badges */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-500">25K+</div>
                  <div className="text-sm text-gray-600">Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">4.6/5</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">5K+</div>
                  <div className="text-sm text-gray-600">Daily Rides</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
