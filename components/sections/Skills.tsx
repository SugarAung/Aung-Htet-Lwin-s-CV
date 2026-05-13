import { Reveal } from "@/components/ui/reveal";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Skills
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  {group.group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-accent text-accent-foreground border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
