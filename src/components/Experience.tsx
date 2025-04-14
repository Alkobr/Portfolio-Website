import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Food Rescue Hub",
      role: "UX/UI Design, Full-Stack Developer",
      description: "Developed a full-stack food waste reduction platform connecting donors with recipients using Next.js and Firebase. Implemented geolocation-based filtering and real-time notifications.",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "ShadCn", "Yup", "Formik", "Firebase"],
      figmaLink: "Local Food Rescue Hub"
    },
    {
      title: "Invoice Management Tool",
      role: "Frontend Developer",
      description: "Developed a modern invoicing tool with React Router for navigation, TypeScript for error-free code, and PDF.js for generating downloadable invoices.",
      tech: ["React", "TypeScript", "TailwindCSS", "UseReducer", "Context API", "PDF.js"],
      figmaLink: null
    },
    {
      title: "Class2Code Platform",
      role: "Frontend Developer",
      description: "Contributed to a web-based platform that simulates corporate workflows for software engineering students. Published research in IEEE and presented at international conferences.",
      tech: ["React", "Mantine UI", "Apollo Client", "GraphQL"],
      figmaLink: "class2code (Copy)"
    },
    {
      title: "Medical-Clinic Platform",
      role: "Frontend Developer",
      description: "Built a healthcare management system for scheduling patient appointments with interactive UI components for appointment booking and management.",
      tech: ["React", "Tailwind CSS", "Material UI"],
      figmaLink: null
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold inline-block border-b-2 border-primary pb-2">Professional Experience</h2>
        </motion.div>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-card rounded-lg p-6 shadow-md"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{experience.title}</h3>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{experience.role}</span>
                  </div>
                </div>
                
                {experience.figmaLink && (
                  <Badge variant="outline" className="flex items-center">
                    <span className="mr-1">Figma:</span> {experience.figmaLink}
                  </Badge>
                )}
              </div>
              
              <p className="mb-4">{experience.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {experience.tech.map(tech => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
