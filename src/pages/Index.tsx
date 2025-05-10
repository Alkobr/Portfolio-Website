
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = 'Osama Ghneem | Portfolio';
  }, []);

  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  );
};

export default Index;
