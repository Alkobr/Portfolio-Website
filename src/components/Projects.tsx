import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const projects = [
    {
      title: "Food Rescue Hub",
      description: "A full-stack food waste reduction platform connecting donors with recipients. Features include intuitive dual-view system, geolocation-based filtering, role-based authentication, and real-time notifications.",
      longDescription: "Developed a full-stack food waste reduction platform connecting donors with recipients using Next.js and Firebase. Designed an intuitive interface with a dual-view system (grid and map) for browsing available donations. Implemented geolocation-based filtering to match users with nearby food resources. Created a role-based authentication system distinguishing between donors, recipients, and administrators. Built real-time notification functionality for immediate updates on donation statuses. Engineered a comprehensive analytics dashboard to track environmental impact metrics.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "ShadCN", "Yup", "Formik", "Firebase","WebSocket","MongoDB","JWT"],
      figmaLink: "Local Food Rescue Hub",
      github: "https://github.com/OsamaGhneem/food-rescue-hub",
      demo: null,
      images: ["/food-rescue-1.jpg", "/food-rescue-2.jpg", "/food-rescue-3.jpg"]
    },
    {
      title: "Invoice Management Tool",
      description: "A modern invoicing tool providing practical solutions for managing invoices efficiently with PDF generation capabilities.",
      longDescription: "Developed a modern invoicing tool that provides a practical solution for managing invoices efficiently. Implemented React Router for smooth navigation and TypeScript for scalable, error-free code. Used Local Storage to ensure secure and persistent data storage. Designed a clean and modern UI with CSS for an enhanced user experience. Integrated PDF.js to enable users to generate downloadable invoices. Managed state and data flow efficiently with API Context & useReducer.",
      tags: ["React", "TypeScript", "TailwindCSS", "UseReducer", "Context API", "PDF.js", "Local Storage"],
      figmaLink: null,
      github: "https://github.com/OsamaGhneem/invoice-management",
      demo: "https://invoice-management-demo.netlify.app",
      images: ["/invoice-1.jpg", "/invoice-2.jpg"]
    },
    {
      title: "Class2Code Platform",
      description: "A web-based platform simulating corporate workflows for software engineering students, presented at international conferences.",
      longDescription: "Contributed to developing a web-based platform that simulates corporate workflows for software engineering students. Published research in IEEE: 'Enhancing Software Engineering Education through an Authentic Web-Based Simulation of Corporate Workflows.' Implemented user-focused designs using Figma and integrated GraphQL APIs. Presented at ITSAF 2024 in Jordan and the 1st International Alumni Conference in UAE.",
      tags: ["React", "Mantine UI", "Apollo Client", "GraphQL"],
      figmaLink: "class2code (Copy)",
      github: "https://github.com/OsamaGhneem/class2code",
      demo: null,
      images: ["/class2code-1.jpg", "/class2code-2.jpg", "/class2code-3.jpg"]
    },
    {
      title: "Medical-Clinic Platform",
      description: "A healthcare management system for scheduling patient appointments with interactive UI components.",
      longDescription: "Built a healthcare management system for scheduling patient appointments. Developed interactive UI components for appointment booking and management. Ensured cross-platform compatibility for web and mobile users.",
      tags: ["React", "Tailwind CSS", "Material UI"],
      figmaLink: null,
      github: "https://github.com/OsamaGhneem/medical-clinic",
      demo: "https://medical-clinic-demo.netlify.app",
      images: ["/medical-1.jpg", "/medical-2.jpg"]
    },
    {
      title: "E-Commerce Application",
      description: "A cross-platform application for managing retail posts with enhanced system performance.",
      longDescription: "Developed a cross-platform application for managing posts (create, edit, delete) for a retail client. Enhanced system performance and user engagement by leveraging a custom API.",
      tags: ["Flutter", "Dart", "GetX", "API Integration"],
      figmaLink: "PCNC E-commerce app",
      github: null,
      demo: "https://play.google.com/store/apps/details?id=com.pcnc.ecommerce",
      images: ["/ecommerce-1.jpg", "/ecommerce-2.jpg", "/ecommerce-3.jpg"]
    },
    {
      title: "BU Library Borrowing System",
      description: "A responsive borrowing system for library users with improved database performance.",
      longDescription: "Designed and built a responsive borrowing system for library users. Improved database performance and streamlined system operations.",
      tags: ["React", "Express.js", "MySQL", "Full-Stack"],
      figmaLink: null,
      github: "https://github.com/OsamaGhneem/bu-library",
      demo: null,
      images: ["/library-1.jpg", "/library-2.jpg"]
    },
    {
      title: "E-Commerce Website",
      description: "An online store solution utilizing microservices architecture and REST APIs.",
      longDescription: "Delivered an online store solution utilizing microservices architecture and REST APIs. Supervised both front-end and back-end development to ensure seamless integration.",
      tags: ["React", "Spring Boot", "MySQL", "Microservices", "Team Lead"],
      figmaLink: null,
      github: "https://github.com/OsamaGhneem/ecommerce-website",
      demo: "https://ecommerce-demo.netlify.app",
      images: ["/ecommerce-web-1.jpg", "/ecommerce-web-2.jpg"]
    },
    {
      title: "Lift&Eat App",
      description: "A user-centric platform for finding expert coaches and personalized training plans.",
      longDescription: "Designed a user-centric platform to help users find expert coaches and personalized training plans. Created an intuitive shopping experience for ordering and delivering healthy meals. Developed interactive prototypes to enhance usability and engagement. Led the UX/UI design team, ensuring a seamless and visually appealing interface.",
      tags: ["UX/UI", "Figma", "Prototyping", "Team Lead"],
      figmaLink: "FoodGym (Copy)",
      github: null,
      demo: null,
      images: ["/lifteat-1.jpg", "/lifteat-2.jpg", "/lifteat-3.jpg"]
    },
    {
      title: "ICar App",
      description: "A modern automotive service platform for car rentals, maintenance, and purchases.",
      longDescription: "Designed a modern automotive service platform for car rentals, maintenance, and purchases. Conducted user journey mapping to optimize the booking and vehicle selection process. Implemented responsive layouts and interactive UI components.",
      tags: ["UX/UI", "Figma", "Prototyping", "Team Lead"],
      figmaLink: "iCAR",
      github: null,
      demo: null,
      images: ["/icar-1.jpg", "/icar-2.jpg"]
    }
  ];

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === projects[selectedProject].images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? projects[selectedProject].images.length - 1 : prev - 1
      );
    }
  };

  const openProject = (index) => {
    setSelectedProject(index);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
              className="h-full"
              onClick={() => openProject(index)}
            >
              <Card className="h-full flex flex-col overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden pt-[60%]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-center p-4">
                    <span className="text-xl font-bold">{project.title}</span>
                  </div>
                  
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium">Click to view details</span>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow pb-2">
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardContent>
                
                <CardFooter className="flex flex-wrap gap-2 pt-0">
                  {project.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">+{project.tags.length - 3}</Badge>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card max-w-4xl w-full rounded-lg shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="relative overflow-hidden bg-muted h-64 md:h-80">
                  {/* Image carousel */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {projects[selectedProject].images.map((image, index) => (
                      <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center bg-muted ${
                          index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {/* Use placeholder for demo */}
                        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                          <span className="text-xl font-bold">{projects[selectedProject].title} - Image {index + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Image navigation */}
                  {projects[selectedProject].images.length > 1 && (
                    <>
                      <button 
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/70 rounded-full p-2 backdrop-blur-sm"
                        onClick={handlePrevImage}
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button 
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/70 rounded-full p-2 backdrop-blur-sm"
                        onClick={handleNextImage}
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}
                  
                  {/* Close button */}
                  <button 
                    className="absolute right-2 top-2 bg-background/50 hover:bg-background/70 rounded-full p-2 backdrop-blur-sm"
                    onClick={closeProject}
                  >
                    <X className="h-5 w-5" />
                  </button>
                  
                  {/* Image indicators */}
                  {projects[selectedProject].images.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                      {projects[selectedProject].images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index === currentImageIndex ? "bg-primary" : "bg-background/50"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(index);
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{projects[selectedProject].title}</h3>
                <p className="mb-4 text-muted-foreground">{projects[selectedProject].longDescription}</p>
                
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[selectedProject].tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-y-2 gap-x-4 mt-6">
                  {projects[selectedProject].github && (
                    <Button variant="outline" size="sm" className="flex items-center" asChild>
                      <a href={projects[selectedProject].github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> View Code
                      </a>
                    </Button>
                  )}
                  
                  {projects[selectedProject].demo && (
                    <Button size="sm" className="flex items-center" asChild>
                      <a href={projects[selectedProject].demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                      </a>
                    </Button>
                  )}
                  
                  {projects[selectedProject].figmaLink && (
                    <div className="flex items-center text-sm">
                      <span className="font-medium mr-1">Figma:</span>
                      <span className="text-muted-foreground">{projects[selectedProject].figmaLink}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}