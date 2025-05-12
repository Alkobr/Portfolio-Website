
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
        "Created a role-based authentication system distinguishing between donors, recipients, and administrators.",
        "Built real-time notification functionality for immediate updates on donation statuses.",
        "Engineered a comprehensive analytics dashboard to track environmental impact metrics.",
        "Utilized Firebase Firestore for real-time data synchronization and document-based storage.",
        "Incorporated responsive design principles with Tailwind CSS and Shadcn for cross-device compatibility."
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
        "Presented the project at ITSAF 2024 (IT Students' Works Exhibition) in Jordan at Al-Balqa University.",
        "Showcased the platform at the 1st International Alumni Conference Empowering Employability in the Era of Artificial Intelligence (2025) at Sharjah University in the United Arab Emirates."
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
        "Designed a clean and modern UI with CSS for an enhanced user experience.",
        "Integrated PDF.js to enable users to generate downloadable invoices.",
        "Managed state and data flow efficiently with API Context & useReducer."
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
    },
    {
      id: 6,
      company: "Lift&Eat App",
      position: "UX/UI Manager & Team Lead",
      period: "2022",
      description: [
        "Designed a user-centric platform to help users find expert coaches and personalized training plans.",
        "Created an intuitive shopping experience for ordering and delivering healthy meals.",
        "Developed interactive prototypes to enhance usability and engagement.",
        "Led the UX/UI design team, ensuring a seamless and visually appealing interface."
      ]
    },
    {
      id: 7,
      company: "ICar App",
      position: "UX/UI Manager & Team Lead",
      period: "2022",
      description: [
        "Designed a modern automotive service platform for car rentals, maintenance, and purchases.",
        "Conducted user journey mapping to optimize the booking and vehicle selection process.",
        "Implemented responsive layouts and interactive UI components."
      ]
    },
    {
      id: 8,
      company: "BU Library Borrowing System",
      position: "Full-Stack Developer",
      period: "2022",
      description: [
        "Designed and built a responsive borrowing system for library users.",
        "Improved database performance and streamlined system operations.",
        "Used React, Express.js, and MySQL to create a full-stack solution."
      ]
    },
    {
      id: 9,
      company: "E-Commerce Website Development",
      position: "Team Lead, Full-Stack Developer",
      period: "2023",
      description: [
        "Delivered an online store solution utilizing microservices architecture and REST APIs.",
        "Supervised both front-end and back-end development to ensure seamless integration.",
        "Used React, Spring Boot, and MySQL to build a comprehensive e-commerce platform."
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
