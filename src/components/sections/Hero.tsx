
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, Download, Mail, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-20 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.05),transparent_50%)]"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary font-medium mb-3">Welcome to my portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-[Playfair+Display]">
              <span className="inline-block mb-2">Hello, I'm</span>
              <br />
              <span className="gradient-text">Osama Ghneem</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Software Developer & Designer
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 mb-10">
              I create elegant solutions to complex problems with clean and efficient code.
              Passionate about building intuitive user experiences and robust applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" onClick={scrollToContact}>
                <Mail className="mr-2 h-4 w-4" />
                Get in touch
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToAbout}>
                <User className="mr-2 h-4 w-4" />
                About me
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#" download="Osama_Ghneem_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
            <div className="mt-8 flex justify-center md:justify-start gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80" 
                alt="Osama Ghneem" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
