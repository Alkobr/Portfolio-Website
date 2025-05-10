
import React from 'react';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const About: React.FC = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      year: "2018 - 2020",
      description: "Specialized in Machine Learning and Distributed Systems"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California, Berkeley",
      year: "2014 - 2018",
      description: "Graduated with honors, GPA 3.8/4.0"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Certified Professional Developer",
    "Microsoft Certified: Azure Developer Associate"
  ];

  return (
    <section id="about" className="section-padding gradient-bg-purple">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-[Playfair+Display] font-bold mb-2 flex items-center justify-center gap-2">
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
            <h3 className="text-2xl font-[Playfair+Display] font-semibold mb-4">Hi, I'm Osama Ghneem</h3>
            <p className="mb-6 text-lg">
              A passionate Software Developer & Designer with over 5 years of experience in creating elegant, user-centered digital experiences. I specialize in full-stack development with a focus on modern web technologies and responsive design.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Professional Background</h4>
                  <p className="text-muted-foreground">
                    I've worked with startups and established companies to deliver robust software solutions that solve real-world problems. My approach combines technical expertise with creative thinking.
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
