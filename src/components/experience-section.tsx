import { Briefcase } from 'lucide-react';
import { ScrollAnimation } from './scroll-animation';

const experienceData = [
  {
    role: 'Software Engineer Program Intern',
    company: 'JPMorgan Chase & Co.',
    location: 'Mumbai, Maharashtra',
    period: 'May 2026 - July 2026',
    description: [
      'Contributed to the Commercial & Investment Banking - Prime Finance division by developing enterprise backend services using Java, Spring Boot, and SQL, while creating architecture diagrams, workflow visualizations, and technical documentation to support system design and cross-team collaboration.',
      'Developed, tested, and delivered production-ready features across the complete software development lifecycle, leveraging Jenkins-based CI/CD pipelines to ensure reliable deployments and release readiness.',
      'Designed and deployed an Execution Plan Tracker on AWS using Express.js and JavaScript, improving task visibility and workflow management for 30+ employees across 1,000+ tasks and initiatives.'
    ],
  },
  {
    role: 'AI/ML Intern',
    company: 'BosLeo Technology Pvt. Ltd.',
    location: 'Valsad, Gujarat',
    period: 'June 2025 - July 2025',
    description: [
      'Built a fully offline RAG-powered QA system over 500+ documents, eliminating external API dependency while ensuring secure, privacy-preserving information retrieval.',
      'Engineered an end-to-end retrieval pipeline using LangChain, FAISS, and Ollama, optimizing chunking, indexing, logging, and observability for efficient retrieval and debugging.'
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Atul Ltd.',
    location: 'Atul, Gujarat',
    period: 'June 2024 - July 2024',
    description: [
      'Built a Complimentary Gift Distribution platform handling high-volume allocation requests, automating workflows and reducing manual intervention.',
      'Engineered a scalable MVC system using MySQL, CodeIgniter, AJAX, and jQuery, optimizing database queries and enabling real-time dashboards with sub-second response times.'
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/50 to-background">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Professional Experience</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My journey through the world of tech, one step at a time.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"></div>
          {experienceData.map((item, index) => (
            <div key={index} className="relative mb-8">
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-[calc(50%-2.5rem)]">
                  <ScrollAnimation animation={index % 2 === 0 ? 'slide-in-from-right' : 'slide-in-from-left'}>
                    <div className={`p-6 rounded-lg bg-card transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:-translate-y-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <p className="text-sm text-muted-foreground">{item.period} · {item.location}</p>
                      <h3 className="text-xl font-bold text-primary">{item.role}</h3>
                      <p className="font-semibold">{item.company}</p>
                      <ul className="mt-3 space-y-2 text-left text-sm text-card-foreground/80">
                        {item.description.map((point) => <li key={point} className="list-disc ml-4">{point}</li>)}
                      </ul>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="absolute left-1/2 top-1/2 z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/50">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="w-[calc(50%+2.5rem)]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
