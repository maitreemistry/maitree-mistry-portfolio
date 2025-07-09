'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ScrollAnimation } from './scroll-animation';
import { RoleTypingAnimation } from './role-typing-animation';
import { FileText } from 'lucide-react';

export function HeroSection() {
  const roles = [
    "Computer Engineering Student",
    "Web Development Enthusiast",
    "Minor in IoT",
    "Poet",
    "Always Learning Something New!"
  ];
  
  return (
    <section 
      id="hero" 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-background dark:bg-gradient-to-b dark:from-[#010a19] dark:to-[#0f172a] group"
    >
      <div className="absolute top-0 left-0 w-full h-full hidden dark:block">
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out"></div>
      </div>
      
      <div className="container px-4 md:px-6 z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <ScrollAnimation animation="fade-in-up">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-foreground">
                Hey there, I'm Maitree Mistry!
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="min-h-[3rem] flex items-center">
                <RoleTypingAnimation roles={roles} typingSpeed={120} deletingSpeed={80} className="text-2xl font-semibold text-primary" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-up" delay={400}>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#connect">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/Maitree_Mistry_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5" />
                    View Resume
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animation="fade-in" delay={600} className="hidden lg:block relative group">
            <div className="relative hover:z-10 group/pic">
              <img
                src="/hero.jpg"
                alt="Maitree Mistry"
                data-ai-hint="abstract geometric art"
                width="600"
                height="600"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover transition-all duration-300 opacity-100 dark:opacity-50 border-2 border-transparent group-hover/pic:scale-105 group-hover/pic:shadow-lg"
              />
              <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 transition-all duration-300 group-hover/pic:scale-105 pointer-events-none" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
