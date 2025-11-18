import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Download from './components/Download';
import Registration from './components/Registration';
import Footer from './components/Footer';
import WelcomePopup from './components/WelcomePopup';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <WelcomePopup />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <WhyChooseUs />
      <Download />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
