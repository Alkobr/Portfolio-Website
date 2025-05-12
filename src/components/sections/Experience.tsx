
import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Gaza Sky Geeks ",
      position: "React/Next JS Training ",
      period: "Dec 2024 - Apr 2025",
      description: [
        "earning how to build scalable web applications using React, TypeScript, and Next.js. ",
        "Exploring advanced front-end techniques, including SSR, ISR, and API integration.",
        "Working on projects to apply modern web development concepts."
      ]
    },
    {
      id: 2,
      company: "PalSoft",
      position: "React JS Training",
      period: "Oct 2024 - Jan 2025",
      description: [
        "Completed advanced training in React JS, focusing on tools like React Query, Tailwind CSS, and React Testing. ",
        "Gained hands-on experience in state management, API integration, and performance optimization.",
        "Built interactive and responsive web components using modern React best practices and libraries."
      ]
    },
    {
      id: 3,
      company: "UI/UX Full Course",
      position: "Google",
      period: "Oct 2023 - Feb 2024",
      description: [
        "Advanced Figma training covering user research, wireframing, prototyping, and usability testing. ",
        "Learned user-focused design principles to enhance digital product experiences. ",
        "Developed small-scale projects such as a to-do list app and dynamic data handling tasks. "
      ]
    },
    {
      id: 4,
      company: "Gaza Sky Geeks",
      position: "JavaScript Training ",
      period: "Apr 2023 - May 2023",
      description: [
        "Mastered JavaScript fundamentals, including OOP, API handling, and data structures. ",
        "Worked on real-world problem-solving challenges to improve logical thinking and coding efficiency. ",
        "Developed small-scale projects such as a to-do list app and dynamic data handling tasks."
      ]
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2 font-playfair">
            <Briefcase className="h-6 w-6" />
            <span>Work Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and notable projects I've worked on.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item reveal mb-10">
              <div className="mb-1">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside ml-2">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
