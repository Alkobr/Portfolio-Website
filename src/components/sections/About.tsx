
import React from 'react';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const About: React.FC = () => {
  const education = [
    {
      degree: "B.S. in Software Engineering",
      institution: "Bethlehem University",
      year: "Aug 2020 - Jul 2024",
      description: "Focus on web and mobile application development"
    }
  ];

  const certifications = [
    "React JS Training · PalSoft · Palestine (Oct 2024 - Jan 2025)",
    "Google UI/UX Full Course (Oct 2023 - Feb 2024)",
    "JavaScript Training · Gaza Sky Geeks (Apr 2023 - May 2023)",
    "UI/UX Workshop · Gaza Sky Geeks (Aug 2022 - Sep 2022)",
    "React JS Workshop · Gaza Sky Geeks (Jun 2022 - Jul 2022)",
    "React/Next JS Training · Gaza Sky Geeks (Dec 2024 - Apr 2025)"
  ];

  return (
    <section id="about" className="section-padding gradient-bg-purple">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-2 flex items-center justify-center gap-2">
            <User className="h-6 w-6" />
            <span>About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-end reveal">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80" 
                alt="Osama Ghneem" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Bio Details */}
          <div className="reveal">
            <h3 className="text-2xl font-playfair font-semibold mb-4">Hi, I'm Osama Ghneem</h3>
            <p className="mb-6 text-lg">
              Dynamic and innovative Full-Stack Developer with a strong foundation in designing and implementing scalable web and mobile applications. Proven leadership in managing cross-functional teams and delivering high-impact solutions for diverse industries. Published researcher with a focus on bridging academic learning with real-world applications.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Professional Background</h4>
                  <p className="text-muted-foreground">
                    I specialize in full-stack development using React, Next.js, Spring Boot, and Express.js. I have experience leading teams and delivering high-quality solutions for e-commerce, healthcare, and educational platforms.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Education</h4>
                  <div className="space-y-2">
                    {education.map((edu, index) => (
                      <HoverCard key={index}>
                        <HoverCardTrigger asChild>
                          <p className="text-muted-foreground cursor-pointer">
                            {edu.degree} - {edu.institution}
                          </p>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="space-y-1">
                            <h5 className="font-medium">{edu.degree}</h5>
                            <p className="text-sm">{edu.institution}, {edu.year}</p>
                            <p className="text-sm text-muted-foreground">{edu.description}</p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Certifications</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {certifications.map((cert, index) => (
                      <span key={index} className="bg-secondary text-secondary-foreground text-xs py-1 px-2 rounded-md">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
