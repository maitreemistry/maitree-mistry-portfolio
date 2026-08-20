import { GraduationCap } from 'lucide-react';
import { ScrollAnimation } from './scroll-animation';

const education = [
  { institution: 'Pandit Deendayal Energy University', degree: 'Bachelor of Technology in Computer Engineering', details: 'Minor in IoT · CGPA: 9.67/10', period: 'July 2023 - May/July 2027 · Gandhinagar, Gujarat' },
  { institution: 'Atul Vidyalaya', degree: 'ISC', details: '10th: 96.66% · 12th: 96.6%', period: '2008 - 2023 · Valsad, Gujarat' },
];

export function EducationSection() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/50 to-background">
      <div className="container px-4 md:px-6">
        <ScrollAnimation><h2 className="flex items-center justify-center gap-3 text-center text-3xl font-bold tracking-tighter sm:text-5xl font-headline"><GraduationCap className="h-9 w-9 text-primary" /> Education</h2><div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">{education.map((item) => <div key={item.institution} className="rounded-lg border bg-card p-6"><p className="text-sm text-muted-foreground">{item.period}</p><h3 className="mt-2 text-xl font-bold text-primary">{item.institution}</h3><p className="mt-2 font-semibold">{item.degree}</p><p className="mt-1 text-muted-foreground">{item.details}</p></div>)}</div></ScrollAnimation>
      </div>
    </section>
  );
}