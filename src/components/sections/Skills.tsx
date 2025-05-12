
import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const bars = document.querySelectorAll('.skill-progress');
          bars.forEach((bar) => {
            const width = bar.getAttribute('data-width');
            if (width) {
              (bar as HTMLElement).style.width = width;
            }
          });
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills: Skill[] = [
    // Programming Languages
    { name: 'JavaScript', level: 90, category: 'Languages' },
    { name: 'TypeScript', level: 85, category: 'Languages' },
    { name: 'Java', level: 80, category: 'Languages' },
    { name: 'Dart', level: 75, category: 'Languages' },
    { name: 'SQL/NoSQL', level: 85, category: 'Languages' },
    
    // Frontend
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'Next.js', level: 90, category: 'Frontend' },
    { name: 'Flutter', level: 80, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
    { name: 'Material UI', level: 85, category: 'Frontend' },
    { name: 'Mantine UI', level: 85, category: 'Frontend' },
    { name: 'ShadCN', level: 90, category: 'Frontend' },
    { name: 'Bootstrap', level: 85, category: 'Frontend' },
    { name: 'Formik', level: 80, category: 'Frontend' },
    { name: 'Yup', level: 80, category: 'Frontend' },
    
    // Backend
    { name: 'Spring Boot', level: 75, category: 'Backend' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'REST APIs', level: 90, category: 'Backend' },
    { name: 'GraphQL', level: 80, category: 'Backend' },
    
    // Tools & Design
    { name: 'Figma', level: 90, category: 'Design' },
    { name: 'MySQL', level: 80, category: 'Databases' },
    { name: 'NoSQL', level: 75, category: 'Databases' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Selenium', level: 70, category: 'Tools' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="section-padding bg-secondary/30 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2 font-playfair">
            <Star className="h-6 w-6" />
            <span>Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in various technologies.
          </p>
        </div>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card key={category} className="reveal">
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          data-width={`${skill.level}%`} 
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
