import { Badge } from './ui/badge';
import { ScrollAnimation } from './scroll-animation';

const skillCategories = [
  { category: 'Programming Languages', skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'SQL', 'PHP'] },
  { category: 'Web Development Frameworks & Technologies', skills: ['Spring Boot', 'Express.js', 'React.js', 'Node.js', 'Next.js', 'FastAPI', 'HTML', 'CSS', 'AJAX', 'jQuery', 'CodeIgniter', 'MVC'] },
  { category: 'AI / ML / Data', skills: ['LangChain', 'FAISS', 'Ollama', 'Retrieval-Augmented Generation (RAG)', 'Machine Learning', 'Pandas', 'Matplotlib', 'PySpark'] },
  { category: 'Databases', skills: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'Cloud / DevOps / Tools', skills: ['AWS', 'Git', 'GitHub', 'Jenkins', 'CI/CD'] },
  { category: 'Computer Science', skills: ['Data Structures & Algorithms', 'DBMS', 'OOP', 'Operating Systems', 'Computer Networks'] },
  { category: 'Minor', skills: ['Internet of Things'] },
];

export function TechArsenal() {
  return (
    <section id="tech-arsenal" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Skills & Technologies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">A practical toolkit shaped by enterprise software, AI/ML, and full-stack work.</p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div key={category.category} className="rounded-lg border bg-card/70 p-6 transition-shadow hover:shadow-lg">
                <h3 className="mb-4 text-lg font-bold text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">{category.skills.map((skill) => <Badge key={skill} variant="secondary">{skill}</Badge>)}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}