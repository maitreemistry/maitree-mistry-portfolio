import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from './scroll-animation';

const projects = [
  {
    title: 'RAGify - "RAG-powered search"',
    description: 'A Streamlit web app for RAG-powered search on your PDFs. It completely runs locally, ensuring fast and private document analysis.',
    image: '/rag.jpg',
    hint: 'document analysis',
    tags: ['Streamlit', 'RAG', 'Ollama', 'FAISS', 'LangChain'],
    github: 'https://github.com/maitreemistry/RAGify',
    live: '',
  },
  {
    title: 'Inventory Management System',
    description: 'A comprehensive platform for managing inventory with real-time tracking and analytics.',
    image: '/inven.webp',
    hint: 'inventory management',
    tags: ['PHP', 'MySQL'],
    github: 'https://github.com/maitreemistry/inventory-management-system',
    live: '',
  },
  {
    title: 'Emergency Aid App',
    description: 'A safety web app with geo-tagged alerts and offline reporting, enabling users to share their location in emergencies and submit reports without internet.',
    image: '/emer.avif',
    hint: 'emergency alert map',
    tags: ['Next.js', 'Prisma', 'Tailwind', 'Leaflet'],
    github: 'https://github.com/maitreemistry/geotag-alert',
    live: '',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/50 to-background">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Some of the projects I'm proud to have worked on.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <Card className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 h-full">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    data-ai-hint={project.hint}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="bg-transparent mt-auto">
                  <div className="flex w-full justify-start gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <Button asChild variant="outline">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github /> GitHub
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink /> Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
