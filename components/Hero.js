import React from 'react';
import { HowItWork, Testimonials, WelcomeArea } from './sections';
import Footer from './Footer';
import Blog from './Blog';

const Hero = () => {
  return (
    <>
      <WelcomeArea />
      <HowItWork />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
};

export default Hero;
