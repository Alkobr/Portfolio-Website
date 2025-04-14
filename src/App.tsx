import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/theme-provider';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from "./components/Contact"

export default function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatePresence>
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background text-foreground"
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
