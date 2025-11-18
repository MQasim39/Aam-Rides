import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">🥭</span>
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Aam Ride
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'
              }`}
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection('register')}
              className="px-6 py-2.5 gradient-bg text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4 py-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-orange-500 font-medium text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-orange-500 font-medium text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('download')}
                className="text-gray-700 hover:text-orange-500 font-medium text-left"
              >
                Download
              </button>
              <button
                onClick={() => scrollToSection('register')}
                className="px-6 py-2.5 gradient-bg text-white rounded-full font-semibold text-center"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
