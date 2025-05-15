import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, Github, X } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  longDescription?: string;
  technologies?: string[];
  challenges?: string[];
  outcomes?: string[];
  role?: string;
  figmaLink?: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Food Rescue Hub",
      description: "Full-stack food waste reduction platform connecting donors with recipients using Next.js and Firebase.",
      image: "https://images.unsplash.com/photo-1510751007277-36932aac9ebd?auto=format&fit=crop&w=600&h=350",
      tags: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS", "ShadCn", "Yup", "Formik"],
      category: "Full Stack",
      demoUrl: "https://food-rescue-hub.netlify.app/",
      repoUrl: "https://github.com/GSG-NEXT-JS-PROJECT/Food-Rescue-Hub",
      featured: true,
      role: "UX/UI Design, Full-Stack Developer",
      figmaLink: "https://www.figma.com/design/XvMcEEgkoxOUKt8RpSjBnw/Local-Food-Rescue-Hub?node-id=31-2&t=M5pNAkULCU1GvH4F-1",
      longDescription: "A comprehensive platform designed to reduce food waste by connecting food donors with recipients in need. The application features dual-view browsing (grid and map), geolocation-based filtering, and real-time notifications for donation status updates.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCn UI", "Firebase", "Firestore", "Yup", "Formik"],
      challenges: ["Implementing geolocation-based filtering for proximity matching", "Creating a role-based authentication system", "Building a real-time notification system"],
      outcomes: ["Created a platform that efficiently connects food donors with recipients", "Developed a comprehensive analytics dashboard to track environmental impact", "Implemented responsive design for cross-device compatibility"]
    },
    {
      id: 2,
      title: "Class2Code Platform",
      description: "Web-based platform that simulates corporate workflows for software engineering students.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=350",
      tags: ["React", "Mantine UI", "Apollo Client", "GraphQL"],
      category: "Frontend",
      repoUrl: "https://github.com/Alkobr/class2code",
      featured: true,
      role: "Frontend Developer",
      figmaLink: "https://www.figma.com/design/7W9zH68kqMhP9rWDvgcuHC/class2code--Copy-?node-id=1-3&t=aQJclzvYMIrwMXQg-1",
      longDescription: "An educational platform that simulates corporate workflows for software engineering students. The project focuses on enhancing software engineering education through an authentic web-based simulation of real-world corporate environments.",
      technologies: ["React", "Mantine UI", "Apollo Client", "GraphQL", "Figma"],
      challenges: ["Accurately simulating corporate workflows in an educational context", "Integrating complex GraphQL APIs", "Building an intuitive user interface for students"],
      outcomes: ["Published research in IEEE: 'Enhancing Software Engineering Education through an Authentic Web-Based Simulation of Corporate Workflows'", "Presented at ITSAF 2024 in Jordan at Al-Balqa University", "Showcased at the 1st International Alumni Conference at Sharjah University in the UAE"]
    },
    {
      id: 3,
      title: "Invoice Management Tool",
      description: "Modern invoicing tool for efficient invoice management with PDF generation capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=350",
      tags: ["React", "TypeScript", "TailwindCSS", "Context API", "PDF.js"],
      category: "Frontend",
      demoUrl: "https://payinvo.netlify.app/Login",
      repoUrl: "https://github.com/Alkobr/Invoice-Generator-App",
      featured: true,
      role: "Frontend Developer",
      longDescription: "A comprehensive invoicing solution that allows users to create, manage, and generate PDF invoices efficiently. The application features a clean, modern UI with seamless navigation and secure local storage for data persistence.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Context API", "useReducer", "React Router", "PDF.js", "localStorage"],
      challenges: ["Implementing PDF generation functionality", "Creating a scalable state management system", "Ensuring secure data persistence with localStorage"],
      outcomes: ["Delivered a practical solution for managing invoices efficiently", "Created smooth navigation experience with React Router", "Implemented PDF generation for downloadable invoices"]
    },
    {
      id: 4,
      title: "Medical-Clinic Platform",
      description: "Healthcare management system for scheduling patient appointments with interactive UI components.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=350",
      tags: ["React", "Tailwind CSS", "Material UI"],
      category: "Frontend",
      repoUrl: "https://github.com/Alkobr/Medical-Clinic-app",
      role: "Frontend Developer",
      longDescription: "A comprehensive healthcare platform designed for scheduling and managing patient appointments. The system features interactive UI components for appointment booking and management, ensuring a seamless experience across web and mobile devices.",
      technologies: ["React", "Tailwind CSS", "Material UI"],
      challenges: ["Building an intuitive appointment booking interface", "Ensuring cross-platform compatibility", "Creating responsive UI components"],
      outcomes: ["Streamlined appointment scheduling process", "Enhanced user experience across devices", "Improved patient management workflow"]
    },
    {
      id: 5,
      title: "E-Commerce Application Development",
      description: "Cross-platform application for managing posts (create, edit, delete) for a retail client.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=350",
      tags: ["Flutter", "Dart", "GetX"],
      category: "Mobile",
      repoUrl: "https://github.com/Alkobr/PCNCProject",
      role: "Frontend Developer",
      figmaLink: "PCNC E-commerce app",
      longDescription: "A versatile cross-platform application developed for a retail client to manage posts through create, edit, and delete functionalities. The application leverages a custom API to enhance system performance and user engagement.",
      technologies: ["Flutter", "Dart", "GetX", "Custom API integration"],
      challenges: ["Implementing cross-platform compatibility", "Optimizing API performance", "Creating intuitive content management interfaces"],
      outcomes: ["Enhanced system performance", "Improved user engagement", "Streamlined content management process"]
    },
    {
      id: 6,
      title: "BU Library Borrowing System",
      description: "Responsive borrowing system for library users with streamlined operations.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=350",
      tags: ["React", "Express.js", "MySQL"],
      category: "Full Stack",
      role: "Full-Stack Developer",
      longDescription: "A comprehensive library management solution designed to streamline the borrowing process for users. The system features a responsive design and optimized database operations for improved performance and user experience.",
      technologies: ["React", "Express.js", "MySQL", "RESTful API"],
      challenges: ["Optimizing database queries for performance", "Building a responsive user interface", "Implementing secure borrowing workflows"],
      outcomes: ["Improved database performance", "Streamlined system operations", "Enhanced user experience"]
    },
    {
      id: 7,
      title: "E-Commerce Website Development",
      description: "Online store solution utilizing microservices architecture and REST APIs.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=350",
      tags: ["React", "Spring Boot", "MySQL", "Microservices"],
      category: "Full Stack",
      role: "Team Lead, Full-Stack Developer",
      longDescription: "A comprehensive e-commerce platform built with modern technologies and microservices architecture. This project involved supervising both front-end and back-end development to ensure seamless integration between different components of the system.",
      technologies: ["React", "Spring Boot", "MySQL", "Microservices", "REST APIs"],
      challenges: ["Implementing microservices architecture", "Coordinating front-end and back-end development", "Ensuring seamless integration between services"],
      outcomes: ["Delivered a complete online store solution", "Successfully implemented microservices architecture", "Achieved seamless integration between system components"]
    },
    {
      id: 8,
      title: "Lift&Eat App",
      description: "User-centric platform to help users find expert coaches and personalized training plans.",
      image: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?auto=format&fit=crop&w=600&h=350",
      tags: ["UX/UI Design", "Figma", "Prototyping"],
      category: "UX/UI",
      role: "UX/UI Manager & Team Lead",
      figmaLink: "https://www.figma.com/design/nlfvwZhIXIWT7revs40z48/FoodGym--Copy-?node-id=0-1&t=54Q4vpxTlqcJcyRH-1",
      longDescription: "A comprehensive fitness and nutrition platform designed to connect users with expert coaches and personalized training plans. The application also features an intuitive shopping experience for ordering and delivering healthy meals.",
      technologies: ["Figma", "Prototyping tools", "User journey mapping"],
      challenges: ["Creating a seamless user experience across different features", "Designing an intuitive shopping experience", "Leading the UX/UI design team effectively"],
      outcomes: ["Developed a user-centric platform", "Created interactive prototypes", "Delivered a seamless and visually appealing interface"]
    },
    {
      id: 9,
      title: "ICar App",
      description: "Modern automotive service platform for car rentals, maintenance, and purchases.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=350",
      tags: ["UX/UI Design", "Figma", "User Journey Mapping"],
      category: "UX/UI",
      role: "UX/UI Manager & Team Lead",
      figmaLink: "https://www.figma.com/design/cP3WIWxro2CAscEiHsgSf2/iCAR?node-id=0-1&t=5peaZJBIeBLBN2gq-1",
      longDescription: "A comprehensive automotive service platform designed for car rentals, maintenance, and purchases. The project involved conducting user journey mapping to optimize the booking and vehicle selection process, as well as implementing responsive layouts and interactive UI components.",
      technologies: ["Figma", "User Journey Mapping", "Interactive Prototyping"],
      challenges: ["Optimizing the booking and vehicle selection process", "Designing for multiple service types in one platform", "Creating intuitive navigation for diverse user needs"],
      outcomes: ["Created a modern automotive service platform", "Optimized user journeys for different services", "Implemented responsive layouts and interactive UI components"]
    },
  ];

  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2 font-playfair">
            <Briefcase className="h-6 w-6" />
            <span>Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills and problem-solving abilities.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="reveal project-card overflow-hidden border border-border/40 hover:border-border transition-colors duration-300 group cursor-pointer"
              onClick={() => openProjectDetails(project)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-primary/80 text-white">Featured</Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline">+{project.tags.length - 3}</Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.demoUrl && (
                  <Button variant="outline" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button variant="outline" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" /> Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Improved Dialog Component for Mobile Responsiveness */}
      <Dialog open={selectedProject !== null} onOpenChange={closeProjectDetails}>
        {selectedProject && (
          <DialogContent className="sm:max-w-lg md:max-w-2xl lg:max-w-3xl w-[95vw] p-0 h-[90vh] max-h-[90vh] overflow-hidden">
            <DialogHeader className="p-4 sm:p-6 bg-background sticky top-0 z-10 border-b">
              <div className="flex items-start justify-between">
                <div>
                  <DialogTitle className="text-xl sm:text-2xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="text-sm sm:text-base text-foreground/80">
                    {selectedProject.category}
                  </DialogDescription>
                </div>
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </div>
            </DialogHeader>

            <ScrollArea className="h-full max-h-full pb-6">
              <div className="px-4 sm:px-6">
                <div className="mt-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-md object-cover"
                  />
                </div>

                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium mb-2">Overview</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{selectedProject.longDescription}</p>
                  </div>

                  {selectedProject.role && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium mb-2">Role</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{selectedProject.role}</p>
                    </div>
                  )}

                  {selectedProject.figmaLink && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium mb-2">Figma Design</h3>
                      <a
                        href={selectedProject.figmaLink.startsWith('http') ? selectedProject.figmaLink : '#'}
                        className="text-sm sm:text-base text-primary hover:underline break-words"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {selectedProject.figmaLink}
                      </a>
                    </div>
                  )}

                  {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium mb-2">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium mb-2">Challenges</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-muted-foreground">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.outcomes && selectedProject.outcomes.length > 0 && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium mb-2">Outcomes</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-muted-foreground">
                        {selectedProject.outcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pb-6">
                  {selectedProject.demoUrl && (
                    <Button className="w-full sm:w-auto" asChild>
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {selectedProject.repoUrl && (
                    <Button variant="outline" className="w-full sm:w-auto" asChild>
                      <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" /> Repository
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;