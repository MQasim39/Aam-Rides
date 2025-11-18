import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                <span className="text-2xl">🥭</span>
              </div>
              <span className="text-2xl font-bold">Aam Ride</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted ride service. Safe, affordable, and convenient - just a tap away!
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('download')}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Download
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <FiMail className="mt-1 flex-shrink-0 text-orange-500" size={20} />
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <a href="mailto:support@aamride.pk" className="hover:text-orange-500 transition-colors">
                    support@aamride.pk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FiPhone className="mt-1 flex-shrink-0 text-orange-500" size={20} />
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <a href="tel:+923001234567" className="hover:text-orange-500 transition-colors">
                    +92 300 1234567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FiMapPin className="mt-1 flex-shrink-0 text-orange-500" size={20} />
                <div>
                  <div className="font-semibold text-white">Available Cities</div>
                  <span>Karachi, Lahore, Islamabad & more</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Aam Ride. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
