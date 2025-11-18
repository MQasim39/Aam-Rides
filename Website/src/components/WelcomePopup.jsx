import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 1000);

    return () => clearTimeout(showTimer);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleGetStarted = () => {
    handleClose();
    const element = document.getElementById('register');
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className={`bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden pointer-events-auto transform transition-all duration-300 ${
            isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <FiX size={20} className="text-gray-600" />
          </button>

          {/* Header with Mango Animation */}
          <div className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-500 pt-8 pb-6 px-6 text-center overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Mango Icon with Animation */}
            <div className="relative mb-4">
              <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-4xl">🥭</span>
              </div>
            </div>

            {/* Main Text */}
            <h2 className="text-3xl font-bold text-white mb-2 relative">
              Aam Khaaega?
            </h2>
            <p className="text-lg text-white/90 relative">
              Nahi, Aam Ride karega!
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-700 text-sm mb-4 text-center leading-relaxed">
              Pakistan's most reliable ride-hailing service. 
              Safe rides, transparent pricing, and trusted drivers.
            </p>

            {/* Features */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Real-time tracking</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">20% off first 3 rides</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Available 24/7</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleGetStarted}
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get Started Now
              </button>
              <button
                onClick={handleClose}
                className="w-full py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-200 transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePopup;
