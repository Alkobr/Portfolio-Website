import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-primary">Osama</span> Ghneem
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-muted-foreground">
              Front End Developer
            </h2>
            <p className="text-lg mb-8 max-w-lg text-muted-foreground">
              Building beautiful, responsive and user-friendly web and mobile applications with modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="group" asChild>
                <a href="#contact">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" className="group" asChild>
                <a href="/resume.pdf" download>
                  Download CV
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
              </Button>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a 
                href="https://github.com/OsamaGhneem" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full border border-muted hover:border-primary hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/OsamaGhneem" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full border border-muted hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:ghneem7@gmail.com" 
                className="p-2 rounded-full border border-muted hover:border-primary hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  {/* Replace with your image */}
                  <div className="text-5xl font-bold">OG</div>
                </div>
              </div>
              
              {/* Tech stack floating bubbles */}
              {['React', 'TS', 'UI/UX', 'Flutter', 'Next.js'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="absolute bg-card rounded-full px-3 py-1 text-sm font-medium shadow-md"
                  style={{
                    top: `${10 + index * 20}%`,
                    left: index % 2 === 0 ? '-20%' : '90%',
                  }}
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}