import Image from 'next/image';
import { ScrollAnimation } from './scroll-animation';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', logo: 'python', color: '3776AB', logoColor: 'white' },
      { name: 'C', logo: 'c', color: 'A8B9CC', logoColor: 'black' },
      { name: 'Java', logo: 'openjdk', color: 'f89820', logoColor: 'white' },
      { name: 'JavaScript', logo: 'javascript', color: 'F7DF1E', logoColor: 'black' },
      { name: 'TypeScript', logo: 'typescript', color: '3178C6', logoColor: 'white' },
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML5', logo: 'html5', color: 'E34F26', logoColor: 'white' },
      { name: 'CSS3', logo: 'css3', color: '1572B6', logoColor: 'white' },
      { name: 'Next.js', logo: 'next.js', color: '000000', logoColor: 'white' },
      { name: 'React', logo: 'react', color: '61DAFB', logoColor: 'black' },
      { name: 'Node.js', logo: 'node.js', color: '339933', logoColor: 'white' },
      { name: 'PHP', logo: 'php', color: '777BB4', logoColor: 'white' },
    ]
  },
  {
    category: 'Database & Tools',
    skills: [
      { name: 'MySQL', logo: 'mysql', color: '4479A1', logoColor: 'white' },
      { name: 'MongoDB', logo: 'mongodb', color: '47A248', logoColor: 'white' },
      { name: 'Git', logo: 'git', color: 'F05032', logoColor: 'white' },
      { name: 'GitHub', logo: 'github', color: '181717', logoColor: 'white' },
    ]
  },
  {
    category: 'IoT & Embedded',
    skills: [
      { name: 'Arduino', logo: 'arduino', color: '00979D', logoColor: 'white' },
      { name: 'ESP32', logo: 'espressif', color: 'E73426', logoColor: 'white' },
    ]
  }
];

export function TechArsenal() {
  return (
    <section id="tech-arsenal" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Tech Arsenal</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The tools and technologies I use to bring ideas to life.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-5xl space-y-12">
            {skillCategories.map((category) => (
              <div key={category.category}>
                <h3 className="mb-6 text-center text-2xl font-bold text-primary">{category.category}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <Image
                        src={`https://img.shields.io/badge/${skill.name.replace(/\./g, '')}-${skill.color}?style=flat-square&logo=${skill.logo}&logoColor=${skill.logoColor}`}
                        alt={`${skill.name} badge`}
                        width={120}
                        height={30}
                        unoptimized
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
