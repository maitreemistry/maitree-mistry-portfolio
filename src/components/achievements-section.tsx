import { Award, Users } from 'lucide-react';
import { ScrollAnimation } from './scroll-animation';

const achievements = [
  'Selected through a highly selective multi-stage process for JPMorgan Chase Code for Good 2025.',
  'Top 10 team at ByteVerse Hackathon 2025 (NIT Patna).',
  'Qualified GATE 2026 (CS) with All India Rank 7514.',
  'ISC School Topper, Atul Vidyalaya, 2023.',
  'Co-author of Words of the Silent Souls, published October 2024.',
];

const leadership = [
  'Lead, campus-wide Competitive Programming Initiative - taught 100+ students in collaboration with the Training and Placement Cell, PDEU.',
  'Chairperson, ACM Student Chapter 2025-26.',
  'Technical Head, CSI Student Chapter 2025-26.',
  'Web Development Head, Encode 2025-26.',
  'Organized and executed multiple technical events.',
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-10 px-4 md:grid-cols-2 md:px-6">
        <ScrollAnimation><div className="space-y-5"><h2 className="flex items-center gap-3 text-3xl font-bold tracking-tighter font-headline"><Award className="h-8 w-8 text-primary" /> Achievements</h2><ul className="space-y-4 text-muted-foreground">{achievements.map((item) => <li key={item} className="border-l-2 border-primary/40 pl-4">{item}</li>)}</ul></div></ScrollAnimation>
        <ScrollAnimation delay={150}><div id="leadership" className="space-y-5"><h2 className="flex items-center gap-3 text-3xl font-bold tracking-tighter font-headline"><Users className="h-8 w-8 text-primary" /> Leadership</h2><ul className="space-y-4 text-muted-foreground">{leadership.map((item) => <li key={item} className="border-l-2 border-accent/60 pl-4">{item}</li>)}</ul></div></ScrollAnimation>
      </div>
    </section>
  );
}