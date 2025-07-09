import Link from 'next/link';
import { Button } from './ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ScrollAnimation } from './scroll-animation';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/maitreemistry' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/maitree-mistry-1927392b8' },
  { name: 'Email', icon: Mail, url: '' },
];

export function ConnectSection() {
  return (
    <section id="connect" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/50 to-background">
      <div className="container px-4 md:px-6">
        <ScrollAnimation className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Let's Connect</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm always open to collaborating on projects or just having a chat. Feel free to reach out!
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            {socialLinks.map((link) => (
              <Button key={link.name} asChild variant="outline" size="lg" className="transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-accent/20">
                <Link href={link.url} target="_blank" rel="noopener noreferrer" className="group">
                  <link.icon className="mr-2 h-5 w-5 transition-transform duration-300" />
                  {link.name}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
