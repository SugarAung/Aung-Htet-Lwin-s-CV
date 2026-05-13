import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Education
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </Reveal>

        <div className="flex flex-col gap-4 max-w-2xl">
          {education.map((edu, i) => (
            <Reveal key={edu.institution} delay={i * 0.07}>
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border">
                <div
                  className={`flex items-center justify-center size-12 rounded-xl shrink-0 ${
                    edu.current
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <GraduationCap className="size-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    {edu.current && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-green-900/30 text-green-400 border border-green-800/50">
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {edu.institution} · {edu.location}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    {edu.period}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
