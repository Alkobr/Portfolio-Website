import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Flutter", "Tailwind CSS", "Material UI", "ShadCN", "Mantine UI"]
    },
    {
      title: "Backend Development",
      skills: ["Spring Boot", "Express.js", "REST APIs", "GraphQL APIs"]
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Dart", "Java", "SQL"]
    },
    {
      title: "UI/UX Design",
      skills: ["Figma", "Prototyping", "Design Principles", "User Research"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold inline-block border-b-2 border-primary pb-2">Technical Skills</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-card rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-center"
                  >
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
