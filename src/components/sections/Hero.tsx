
import React from 'react';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.05),transparent_50%)]"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="inline-block mb-2">Hello, I'm</span>
              <br />
              <span className="text-primary">Osama Ghneem</span>
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
                Get in touch
              </Button>
              <Button size="lg" variant="outline">
                <User className="mr-2 h-4 w-4" />
                About me
              </Button>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              <div className="w-full h-full bg-muted flex items-center justify-center text-4xl font-bold text-primary/30">
                OG
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
