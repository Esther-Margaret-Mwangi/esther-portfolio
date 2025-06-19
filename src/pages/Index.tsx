
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Education from '../components/Education';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import SkillsBanner from '../components/SkillsBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <SkillsBanner />
      <Services />
      <Projects />
      <About />
      <Education />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
