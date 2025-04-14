import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MoveRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold inline-block border-b-2 border-primary pb-2">About Me</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <p className="text-lg">
              I'm a dynamic and innovative Full-Stack Developer with a strong foundation in designing and implementing scalable web and mobile applications.
            </p>
            <p className="text-lg">
              With proven leadership in managing cross-functional teams, I deliver high-impact solutions for diverse industries. I'm adept at integrating cutting-edge technologies to enhance user experience and optimize system performance.
            </p>
            <p className="text-lg">
              As a published researcher, I focus on bridging academic learning with real-world applications to create meaningful digital experiences.
            </p>
            
            <div className="pt-4">
              <Button variant="outline" className="group" asChild>
                <a href="#experience">
                  View My Experience
                  <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-2">Education</h3>
                <p>B.S. in Software Engineering, Bethlehem University</p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-2">Location</h3>
                <p>Bethlehem, Palestine</p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm col-span-2">
                <h3 className="text-2xl font-bold text-primary mb-2">Research</h3>
                <p className="text-sm">
                  Published in IEEE: "Enhancing Software Engineering Education through an Authentic Web-Based Simulation of Corporate Workflows"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}