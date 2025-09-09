'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypingAnimation } from "./typing-animation";
import { ScrollAnimation } from "./scroll-animation";

const aboutMeCode = `
  const maitreemistry = {
      location: "Valsad, Gujarat, India",
      education: "B.Tech Computer Engineering @ Pandit Deendayal Energy University (2023-2027)",
      minor: "Internet of Things (IoT)",
      currentFocus: ["Web Development", "Machine Learning", "IoT"],
      achievements: [
          "ISC School Topper 2023 🏆",
          "Co-Author of 'Words of the Silent Souls' (Published: October 2024) 📖",
          "JPMorganChase Code for Good Participant, Mumbai 2025 💼",
          "Among Top 10 winning teams in ByteVerse Hackathon 2025 – NIT Patna"
      ],
      activities: [
          "Attended technical workshops & completed online courses",
          "Participated in hackathons",
          "Chairperson at ACM-PDEU, Web Development Head at Encode-PDEU (Computer Science Club)",
          "Volunteering at GDG-PDEU, CSI-PDEU, SnT-PDEU"
      ],
      funfact: "I turn coco and tea into code and thoughts into poetry! ☕️✍️"
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
                I'm a blend of logic and verse, an engineer with a poet's heart.
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
