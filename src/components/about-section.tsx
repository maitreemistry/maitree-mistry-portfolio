'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypingAnimation } from "./typing-animation";
import { ScrollAnimation } from "./scroll-animation";

const aboutMeCode = `
  const maitreemistry = {
      location: "Valsad, Gujarat, India",
    education: "B.Tech in Computer Engineering @ PDEU (2023-2027)",
      minor: "Internet of Things (IoT)",
    cgpa: "9.67/10",
    focus: ["Software Engineering", "Backend", "AI/ML", "Cloud"],
    strengths: ["Reliable systems", "Practical solutions", "Strong CS fundamentals"]
  };
`;

export function AboutSection() {

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollAnimation className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Little Bit About Me</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a Computer Engineering student at Pandit Deendayal Energy University with hands-on experience building enterprise software, AI-powered systems, and full-stack applications. I've worked across backend engineering, cloud technologies, AI/ML, databases, and modern web development, and I enjoy turning complex problems into reliable, practical solutions.
              </p>
            </div>
          </div>
          <div className="w-full max-w-4xl pt-12">
            <Card className="bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.5)] hover:scale-105">
              <CardHeader className="flex flex-row items-center gap-2 border-b">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                  <span className="h-3 w-3 rounded-full bg-green-500"></span>
                </div>
                <CardTitle className="text-sm font-medium font-code text-center flex-grow">
                  maitree-mistry.js
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="p-4 text-sm font-code overflow-x-auto">
                  <code>
                    <TypingAnimation text={aboutMeCode} />
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
