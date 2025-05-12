
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
      company: "Food Rescue Hub",
      position: "UX/UI Design, Full-Stack Developer",
      period: "2024",
      description: [
        "Developed a full-stack food waste reduction platform connecting donors with recipients using Next.js and Firebase.",
        "Designed an intuitive interface with a dual-view system (grid and map) for browsing available donations.",
        "Implemented geolocation-based filtering to match users with nearby food resources.",
        "Created a role-based authentication system distinguishing between donors, recipients, and administrators."
      ]
    },
    {
      id: 2,
      company: "Class2Code Platform",
      position: "Frontend Developer",
      period: "2023",
      description: [
        "Contributed to developing a web-based platform that simulates corporate workflows for software engineering students.",
        "Published research in IEEE: \"Enhancing Software Engineering Education through an Authentic Web-Based Simulation of Corporate Workflows.\"",
        "Implemented user-focused designs using Figma and integrated GraphQL APIs.",
        "Presented the project at ITSAF 2024 (IT Students' Works Exhibition) in Jordan at Al-Balqa University."
      ]
    },
    {
      id: 3,
      company: "Invoice Management Tool",
      position: "Frontend Developer",
      period: "2022-2023",
      description: [
        "Developed a modern invoicing tool that provides a practical solution for managing invoices efficiently.",
        "Implemented React Router for smooth navigation and TypeScript for scalable, error-free code.",
        "Used Local Storage to ensure secure and persistent data storage.",
        "Integrated PDF.js to enable users to generate downloadable invoices."
      ]
    },
    {
      id: 4,
      company: "Medical-Clinic Platform",
      position: "Frontend Developer",
      period: "2022",
      description: [
        "Built a healthcare management system for scheduling patient appointments.",
        "Developed interactive UI components for appointment booking and management.",
        "Ensured cross-platform compatibility for web and mobile users."
      ]
    },
    {
      id: 5,
      company: "E-Commerce Application Development",
      position: "Frontend Developer",
      period: "2021",
      description: [
        "Developed a cross-platform application for managing posts (create, edit, delete) for a retail client.",
        "Enhanced system performance and user engagement by leveraging a custom API."
      ]
    }
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
            <div key={exp.id} className="timeline-item reveal">
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
