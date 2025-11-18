import React from 'react';
import { FiDownload } from 'react-icons/fi';

const Download = () => {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="p-12 text-white">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                Get the App
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Download Aam Ride
                <br />
                <span className="text-yellow-300">Start Riding Today</span>
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Available on iOS and Android. Download now and get special discount on your first ride!
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all duration-200 hover:scale-105">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </button>

                <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all duration-200 hover:scale-105">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    ⭐
                  </div>
                  <div>
                    <div className="font-bold">4.6 Rating</div>
                    <div className="text-sm text-white/80">5K+ Reviews</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiDownload />
                  </div>
                  <div>
                    <div className="font-bold">25K+</div>
                    <div className="text-sm text-white/80">Downloads</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Preview */}
            <div className="relative h-full min-h-[500px] flex items-center justify-center p-8">
              <div className="relative z-10 animate-float">
                <div className="w-64 bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    <div className="aspect-[9/19] bg-gradient-to-br from-orange-50 to-yellow-50 p-4">
                      <div className="h-full flex flex-col">
                        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3">
                          <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-3xl shadow-lg">
                            🥭
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">Aam Ride</h3>
                          <p className="text-xs text-gray-600 px-4">Your journey starts here</p>
                          <div className="w-full space-y-2 px-2">
                            <div className="bg-white p-3 rounded-xl shadow text-left">
                              <div className="text-xs text-gray-500">Pickup</div>
                              <div className="text-sm font-semibold text-gray-800">Current Location</div>
                            </div>
                            <div className="bg-white p-3 rounded-xl shadow text-left">
                              <div className="text-xs text-gray-500">Drop-off</div>
                              <div className="text-sm font-semibold text-gray-800">Enter destination</div>
                            </div>
                          </div>
                          <button className="w-full gradient-bg text-white py-2 rounded-full font-semibold text-sm shadow-lg mx-2">
                            Find a Ride
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-yellow-300/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
