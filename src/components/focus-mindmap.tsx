'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Code, Bot, Database, Monitor, ArrowRight } from "lucide-react";
import { ScrollAnimation } from "./scroll-animation";

const mindmapData = {
  root: {
    title: "Engineering Expertise",
    icon: BrainCircuit,
  },
  branches: [
    {
      title: "Software Engineering",
      icon: Code,
      items: ["Backend Development", "System Design", "REST APIs", "CI/CD", "Production Engineering"],
      color: "text-chart-1",
    },
    {
      title: "AI & Machine Learning",
      icon: Bot,
      items: ["RAG", "LangChain", "FAISS", "Ollama", "Machine Learning"],
      color: "text-chart-2",
    },
    {
      title: "Cloud & Data",
      icon: Database,
      items: ["AWS", "SQL", "PostgreSQL", "MySQL", "MongoDB", "PySpark"],
      color: "text-chart-3",
    },
    {
      title: "Frontend & Full Stack",
      icon: Monitor,
      items: ["React", "Next.js", "Node.js", "Express.js", "JavaScript", "TypeScript"],
      color: "text-chart-4",
    },
    {
      title: "Computer Science",
      icon: Code,
      items: ["Data Structures & Algorithms", "DBMS", "OOP", "Operating Systems", "Computer Networks"],
      color: "text-chart-5",
    },
  ],
};

const MindMapNode = ({ title, items, icon: Icon, color }: { title: string, items: string[], icon: React.ElementType, color: string }) => (
    <Card 
      className="w-full transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
    >
        <CardHeader className="flex flex-row items-center gap-4">
            <Icon className={`w-8 h-8 ${color}`} />
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </CardContent>
    </Card>
);

export function FocusMindmap() {
  const RootIcon = mindmapData.root.icon;

  return (
    <section id="expertise" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Engineering Expertise</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The systems, tools, and computer science foundations behind my work.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <div className="mx-auto mt-12 max-w-5xl">
            <ScrollAnimation className="relative flex justify-center items-center mb-12">
                <Card className="bg-primary text-primary-foreground p-6 rounded-full shadow-2xl z-10 inline-flex animate-pulse-glow">
                   <div className="flex items-center gap-4">
                     <RootIcon className="w-10 h-10" />
                     <h3 className="text-2xl font-bold">{mindmapData.root.title}</h3>
                   </div>
                </Card>
            </ScrollAnimation>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {mindmapData.branches.map((branch, index) => (
                    <ScrollAnimation key={index} delay={index * 150}>
                      <MindMapNode {...branch} />
                    </ScrollAnimation>
                 ))}
             </div>
        </div>
      </div>
    </section>
  );
}
