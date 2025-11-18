import React from 'react';
import { FiMapPin, FiSmartphone } from 'react-icons/fi';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              Now Available Across Pakistan
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Apni Ride,
              <br />
              <span className="text-yellow-300">Bas Ek Click Pe</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Safe, affordable, and reliable rides in your city. 
              Whether it's work or home, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('download')}
                className="ripple px-8 py-4 bg-white text-orange-500 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <FiSmartphone size={24} />
                Download App
              </button>
              <button
                onClick={() => scrollToSection('register')}
                className="ripple px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <FiMapPin size={24} />
                Get Started
              </button>
            </div>
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold">25K+</div>
                <div className="text-white/80">Happy Riders</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div>
                <div className="text-4xl font-bold">5K+</div>
                <div className="text-white/80">Daily Rides</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div>
                <div className="text-4xl font-bold">4.6★</div>
                <div className="text-white/80">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <div className="w-full max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Phone Screen Content */}
                    <div className="aspect-[9/19] bg-gradient-to-br from-orange-50 to-yellow-50 p-6">
                      <div className="h-full flex flex-col">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center text-xs text-gray-600 mb-6">
                          <span>9:41</span>
                          <div className="flex gap-1">
                            <div className="w-4 h-4">📶</div>
                            <div className="w-4 h-4">📶</div>
                            <div className="w-4 h-4">🔋</div>
                          </div>
                        </div>
                        
                        {/* App Content */}
                        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
                          <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center text-4xl shadow-lg">
                            🥭
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">Aam Ride</h3>
                          <p className="text-sm text-gray-600">Where would you like to go?</p>
                          <div className="w-full space-y-3 mt-4">
                            <div className="bg-white p-4 rounded-2xl shadow-md text-left">
                              <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                <span className="text-sm text-gray-500">Pickup Location</span>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-md text-left">
                              <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-500">Drop-off Location</span>
                              </div>
                            </div>
                          </div>
                          <button className="w-full gradient-bg text-white py-3 rounded-full font-semibold shadow-lg mt-4">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-300/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Animated Car Icon */}
      <div className="absolute bottom-32 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="animate-drive-in">
          <svg className="w-20 h-20 text-white/20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
