import { BookOpenCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimation } from './scroll-animation';

const publications = [
  {
    title: 'Machine Learning for Water Quality Prediction: A Survey of Techniques, Challenges, and Future Directions',
    authors: 'Maitree Mistry, Himanshu Gajera',
    conference: 'International Conference on Advances in Water Treatment and Management (ICAWTM-25)(under review)',
  },
];

export function PublicationsSection() {
  return (
    <section id="publications" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Publications</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My contributions to the world of research.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <div className="mx-auto mt-12 max-w-4xl">
          {publications.map((pub, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <Card className="transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-start gap-4 text-left">
                    <BookOpenCheck className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span>{pub.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 pl-[44px]">
                  <p className="font-semibold text-muted-foreground">{pub.authors}</p>
                  <p className="italic text-muted-foreground">{pub.conference}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
