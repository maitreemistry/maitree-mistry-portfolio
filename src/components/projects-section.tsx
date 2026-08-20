import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from './scroll-animation';

const projects = [
  { title: 'CreditX', description: 'AI-powered personal finance platform contributing to personalized investment recommendations, bank statement expense analysis, welfare scheme eligibility, and loan assessment modules.', image: '/creditx.png', hint: 'finance platform', tags: ['Next.js', 'Tailwind', 'PostgreSQL', 'FastAPI', 'Python'], github: 'https://github.com/maitreemistry/CreditX' },
  { title: 'Inventory Management System', description: 'Web-based inventory management system handling products, suppliers, and transactions with real-time stock updates and automated quantity reconciliation across purchase and sales flows.', details: 'Applied BCNF normalization and referential integrity constraints in MySQL while enabling analytical dashboards for inventory and sales insights.', image: '/inven.webp', hint: 'inventory management', tags: ['PHP', 'MySQL', 'HTML/CSS'], github: 'https://github.com/maitreemistry/inventory-management-system' },
  { title: 'RAGify', description: 'Local RAG-powered document search application enabling private document analysis without relying on external APIs.', image: '/ragify.jpg', hint: 'document analysis', tags: ['Streamlit', 'RAG', 'Ollama', 'FAISS', 'LangChain'], github: 'https://github.com/maitreemistry/RAGify' },
  { title: 'Encode PDEU Website', description: 'Spearheaded the development and delivery of the official Encode PDEU website as Web Development Head, leading the web development efforts and building a centralized digital platform for the Computer Science Club of PDEU.', details: "Led the web development initiative, took ownership of the website's technical execution, collaborated with the student team, and deployed the platform on Vercel.", image: '/encode.jpg', hint: 'club website', tags: ['Web Development Head', 'Encode PDEU', '2025-26'], live: 'https://encodepdeu.vercel.app/' },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/50 to-background">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center justify-center space-y-4 text-center"><div className="space-y-2"><h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2><p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Selected software, web development, and AI/ML work.</p></div></div>
        </ScrollAnimation>
        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => <ScrollAnimation key={project.title} delay={index * 100}>
            <Card className={`group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${index === 0 ? 'border-primary/50 shadow-md' : ''}`}>
              <div className="relative aspect-video overflow-hidden"><Image src={project.image} alt={project.title} data-ai-hint={project.hint} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
              <CardHeader><CardTitle>{project.title}</CardTitle><div className="flex flex-wrap gap-2 pt-2">{project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}</div></CardHeader>
              <CardContent className="flex-grow space-y-3"><CardDescription>{project.description}</CardDescription>{project.details && <p className="text-sm text-muted-foreground">{project.details}</p>}</CardContent>
              <CardFooter className="mt-auto flex gap-3">{project.github && <Button asChild variant="outline"><Link href={project.github} target="_blank" rel="noopener noreferrer"><Github /> GitHub</Link></Button>}{project.live && <Button asChild><Link href={project.live} target="_blank" rel="noopener noreferrer"><ExternalLink /> Live Website</Link></Button>}</CardFooter>
            </Card>
          </ScrollAnimation>)}
        </div>
      </div>
    </section>
  );
}