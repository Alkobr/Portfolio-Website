import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Calendar } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "React/Next JS Training",
      organization: "Gaza Sky Geeks",
      date: "Dec 2024 - Apr 2025",
      description: "Learning how to build scalable web applications using React, TypeScript, and Next.js as Full Stack Developer. Exploring advanced front-end techniques, including SSR, ISR, and API integration. Working on projects to apply modern web development concepts.",
      skills: ["React", "Next.js", "TypeScript", "SSR", "API Integration","CSR","Error Handling"],
    },
    {
      title: "React JS Training",
      organization: "PalSoft Palestine",
      date: "Oct 2024 - Jan 2025",
      description: "Completed advanced training in React JS, focusing on tools like React Query, Tailwind CSS, and React Testing. Gained hands-on experience in state management, API integration, and performance optimization. Built interactive and responsive web components using modern React best practices.",
      skills: ["React", "React Query", "Tailwind CSS", "React Testing", "State Management"]
    },
    {
      title: "Google UI/UX Full Course",
      organization: "Online",
      date: "Oct 2023 - Feb 2024",
      description: "Advanced Figma training covering user research, wireframe, prototyping, and usability testing. Learned user-focused design principles to enhance digital product experiences. Applied design thinking methodologies to create intuitive and accessible interfaces.",
      skills: ["Figma", "UI/UX Design", "User Research", "Prototyping", "Design Thinking"]
    },
    {
      title: "JavaScript Training",
      organization: "Gaza Sky Geeks",
      date: "Apr 2023 - May 2023",
      description: "Mastered JavaScript fundamentals, including OOP, API handling, and data structures. Worked on real-world problem-solving challenges to improve logical thinking and coding efficiency. Developed small-scale projects such as a to-do list app and dynamic data handling tasks.",
      skills: ["JavaScript", "OOP", "API Integration", "Data Structures", "Problem Solving"]
    },
    {
      title: "UI/UX Workshop",
      organization: "Gaza Sky Geeks",
      date: "Aug 2022 - Sep 2022",
      description: "Learned the basics of UI/UX design with a focus on Figma. Gained hands-on experience in prototyping and user interface design. Explored the fundamentals of usability and interaction design.",
      skills: ["UI/UX Basics", "Figma", "Prototyping", "Interaction Design"]
    },
    {
      title: "React JS Workshop",
      organization: "Gaza Sky Geeks",
      date: "Jun 2022 - Jul 2022",
      description: "Developed a fully functional e-commerce site using React JS. Improved front-end development skills through hands-on projects. Focused on state management, component architecture, and UI/UX best practices.",
      skills: ["React JS", "E-commerce Development", "State Management", "Component Architecture"]
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold inline-block border-b-2 border-primary pb-2">Certifications & Training</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="flex items-center">
                      <Award className="h-3 w-3 mr-1" />
                      {cert.organization}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}