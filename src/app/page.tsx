import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { TechArsenal } from '@/components/tech-arsenal';
import { ProjectsSection } from '@/components/projects-section';
import { ConnectSection } from '@/components/connect-section';
import { Footer } from '@/components/footer';
import { FocusMindmap } from '@/components/focus-mindmap';
import { PublicationsSection } from '@/components/publications-section';
import { AchievementsSection } from '@/components/achievements-section';
import { EducationSection } from '@/components/education-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TechArsenal />
        <FocusMindmap />
        <ProjectsSection />
        <AchievementsSection />
        <PublicationsSection />
        <EducationSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
}
