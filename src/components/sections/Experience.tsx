
import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'Tech Innovations Inc.',
      position: 'Senior Software Developer',
      period: 'Jan 2022 - Present',
      description: 'Leading the development of a cloud-based enterprise application. Architected microservices using Node.js and implemented frontend with React. Reduced system latency by 40% and improved code coverage to 95%.'
    },
    {
      id: 2,
      company: 'Digital Solutions Ltd.',
      position: 'Full Stack Developer',
      period: 'Mar 2019 - Dec 2021',
      description: 'Developed and maintained multiple web applications for clients in finance and healthcare sectors. Implemented responsive designs, integrated third-party APIs, and optimized database queries resulting in 30% performance improvement.'
    },
    {
      id: 3,
      company: 'WebCraft Studios',
      position: 'Frontend Developer',
      period: 'Jun 2017 - Feb 2019',
      description: 'Created responsive user interfaces using React and styled components. Collaborated with designers to implement pixel-perfect UIs and improve UX. Participated in code reviews and mentored junior developers.'
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <Briefcase className="h-6 w-6" />
            <span>Work Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to work with.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item reveal">
              <div className="mb-1">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
