import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Application",
      description: "Developed a cross-platform application for managing posts for a retail client. Enhanced system performance and user engagement by leveraging a custom API.",
      tags: ["Flutter", "Dart", "GetX", "API Integration"],
      figmaLink: "PCNC E-commerce app",
      github: null,
      demo: null,
      image: "/placeholder.jpg"
    },
    {
      title: "BU Library Borrowing System",
      description: "Designed and built a responsive borrowing system for library users. Improved database performance and streamlined system operations.",
      tags: ["React", "Express.js", "MySQL", "Full-Stack"],
      figmaLink: null,
      github: null,
      demo: null,
      image: "/placeholder.jpg"
    },
    {
      title: "E-Commerce Website",
      description: "Delivered an online store solution utilizing microservices architecture and REST APIs. Supervised both front-end and back-end development to ensure seamless integration.",
      tags: ["React", "Spring Boot", "MySQL", "Microservices", "Team Lead"],
      figmaLink: null,
      github: null,
      demo: null,
      image: "/placeholder.jpg"
    },
    {
      title: "Lift&Eat App",
      description: "Designed a user-centric platform to help users find expert coaches and personalized training plans. Created an intuitive shopping experience for ordering healthy meals.",
      tags: ["UX/UI", "Figma", "Prototyping", "Team Lead"],
      figmaLink: "FoodGym (Copy)",
      github: null,
      demo: null,
      image: "/placeholder.jpg" 
    },
    {
      title: "ICar App",
      description: "Designed a modern automotive service platform for car rentals, maintenance, and purchases. Conducted user journey mapping to optimize the booking process.",
      tags: ["UX/UI", "Figma", "Prototyping", "Team Lead"],
      figmaLink: "iCAR",
      github: null,
      demo: null,
      image: "/placeholder.jpg"
    }
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold inline-block border-b-2 border-primary pb-2">Featured Projects</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative overflow-hidden pt-[60%]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-xl font-bold">{project.title}</span>
                  </div>
                  
                  <AnimatePresence>
                    {hoveredProject === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
                      >
                        <div className="text-center">
                          {project.github && (
                            <Button size="sm" variant="outline" className="mr-2" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" /> Code
                              </a>
                            </Button>
                          )}
                          
                          {project.demo && (
                            <Button size="sm" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" /> Demo
                              </a>
                            </Button>
                          )}
                          
                          {project.figmaLink && (
                            <div className="mt-2 text-sm">
                              <span className="font-medium">Figma:</span> {project.figmaLink}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm mb-4">
                    {project.description}
                  </CardDescription>
                </CardContent>
                
                <CardFooter className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
