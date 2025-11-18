import React, { useState } from 'react';
import { FiMail, FiUser, FiPhone, FiMapPin } from 'react-icons/fi';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Integrate with NEON DB
    // Example API call structure:
    // try {
    //   const response = await fetch('/api/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     setIsSubmitted(true);
    //   }
    // } catch (error) {
    //   console.error('Registration error:', error);
    // }

    // For now, just show success message
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
      });
    }, 3000);
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Information */}
          <div>
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
              Join Today
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to get
              <span className="gradient-text"> started?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sign up now and become part of the Aam Ride family. Get exclusive offers, priority support, and early access to new features!
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Welcome Bonus</h3>
                  <p className="text-gray-600">Get 20% off on your first 3 rides</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Priority Support</h3>
                  <p className="text-gray-600">24/7 assistance whenever you need</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Exclusive Offers</h3>
                  <p className="text-gray-600">Regular discounts and rewards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {!isSubmitted ? (
              <>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Create Your Account
                </h3>
                <p className="text-gray-600 mb-8">
                  Fill in your details - takes just 2 minutes
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="Ahmed Khan"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="ahmed@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="0300 1234567"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                      City
                    </label>
                    <div className="relative">
                      <FiMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="Karachi, Lahore, Islamabad..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 gradient-bg text-white rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Get Started Now
                  </button>

                  {/* Terms */}
                  <p className="text-sm text-gray-500 text-center">
                    By signing up, you agree to our{' '}
                    <a href="#" className="text-orange-500 hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Welcome to Aam Ride!
                </h3>
                <p className="text-xl text-gray-600">
                  Your account has been created successfully!
                  <br />
                  Download the app now and start riding!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
