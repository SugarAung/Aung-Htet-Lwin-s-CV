import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { personalInfo } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <footer className="py-8 px-4 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="text-xs text-muted-foreground/60">
            Built with Next.js · Tailwind CSS · Motion
          </p>
        </div>
      </footer>
    </>
  );
}
