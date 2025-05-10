
import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=350',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      demoUrl: '#',
      repoUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects and team collaboration with real-time updates.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=350',
      tags: ['React', 'Firebase', 'Material UI'],
      category: 'Web App',
      demoUrl: '#',
      repoUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with responsive design, animations, and content management.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=350',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend',
      demoUrl: '#',
      repoUrl: '#'
    },
    {
      id: 4,
      title: 'AI Image Generator',
      description: 'Web application that uses machine learning to generate custom images based on text prompts.',
      image: 'https://images.unsplash.com/photo-1569396116180-210c182bedb8?auto=format&fit=crop&w=600&h=350',
      tags: ['Python', 'TensorFlow', 'React', 'Flask'],
      category: 'AI/ML',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      id: 5,
      title: 'Mobile Fitness App',
      description: 'Cross-platform mobile application for tracking workouts, nutrition, and fitness progress.',
      image: 'https://images.unsplash.com/photo-1510751007277-36932aac9ebd?auto=format&fit=crop&w=600&h=350',
      tags: ['React Native', 'Firebase', 'Redux'],
      category: 'Mobile',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with location-based forecasts and interactive maps.',
      image: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?auto=format&fit=crop&w=600&h=350',
      tags: ['JavaScript', 'APIs', 'CSS'],
      category: 'Frontend',
      demoUrl: '#',
      repoUrl: '#',
    },
  ];

  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
            <Card key={project.id} className="reveal project-card overflow-hidden border border-border/40 hover:border-border transition-colors duration-300 group">
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
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.demoUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button variant="outline" size="sm" asChild>
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
    </section>
  );
};

export default Projects;
